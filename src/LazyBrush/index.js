import { Catenary } from "catenary-curve"
import { LazyBrush } from "lazy-brush"
import PropTypes from "prop-types"
import React, { PureComponent } from "react"
import ResizeObserver from "resize-observer-polyfill"
import drawImage from "./DrwaImage"
// import "./style.css"
// const useStyles = makeStyles((theme) => customStyles)

function midPointBtw(p1, p2) {
  return {
    x: p1.x + (p2.x - p1.x) / 2,
    y: p1.y + (p2.y - p1.y) / 2,
  }
}

const canvasStyle = {
  width: "100%",
  height: "100%",
}

const canvasTypes = [
  {
    name: "interface",
    zIndex: 15,
  },
  {
    name: "drawing",
    zIndex: 11,
  },
  {
    name: "temp",
    zIndex: 12,
  },
]

const dimensionsPropTypes = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
])

export default class extends PureComponent {
  static propTypes = {
    loadTimeOffset: PropTypes.number,
    lazyRadius: PropTypes.number,
    brushRadius: PropTypes.number,
    brushColor: PropTypes.string,
    catenaryColor: PropTypes.string,
    gridColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    hideGrid: PropTypes.bool,
    disabled: PropTypes.bool,
    imgSrc: PropTypes.string,
    saveData: PropTypes.string,
    immediateLoading: PropTypes.bool,
    lazyBrush: PropTypes.array,
  }

  static defaultProps = {
    loadTimeOffset: 5,
    lazyRadius: 12,
    brushRadius: 10,
    brushColor: "#444",
    catenaryColor: "#0a0302",
    gridColor: "rgba(150,150,150,0.17)",
    backgroundColor: "#FFF",
    hideGrid: false,
    disabled: false,
    imgSrc: "",
    saveData: "",
    immediateLoading: false,
    dialogOpen: false,
  }

  constructor(props) {
    super(props)

    this.canvas = {}
    this.ctx = {}

    this.catenary = new Catenary()

    this.points = []
    this.lines = this.props.lazyBrush

    this.mouseHasMoved = true
    this.valuesChanged = true
    this.isDrawing = false
    this.isPressing = false
    this.state = {
      canvasWidth: window.innerWidth,
      canvasHeight: window.innerHeight,
      lines: [],
    }
  }

  componentDidMount() {
    this.intialActivity()
  }

  intialActivity = () => {
    this.lazy = new LazyBrush({
      radius: this.props.lazyRadius * window.devicePixelRatio,
      enabled: true,
      initialPoint: {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      },
    })
    this.chainLength = this.props.lazyRadius * window.devicePixelRatio

    this.canvasObserver = new ResizeObserver((entries, observer) =>
      this.handleCanvasResize(entries, observer)
    )
    this.canvasObserver.observe(this.canvasContainer)

    this.drawImage()
    this.loop()

    window.setTimeout(() => {
      const initX = window.innerWidth / 2
      const initY = window.innerHeight / 2
      this.lazy.update(
        { x: initX - this.chainLength / 4, y: initY },
        { both: true }
      )
      this.lazy.update(
        { x: initX + this.chainLength / 4, y: initY },
        { both: false }
      )
      this.mouseHasMoved = true
      this.valuesChanged = true
      this.clear()

      // Load saveData from prop if it exists
      if (this.props.saveData) {
        this.loadSaveData(this.props.saveData)
      }
    }, 100)

    const imageElement = document.querySelector(
      "#main-container-lazy-brush > svg"
    )
    const width = imageElement && imageElement.getBoundingClientRect().width
    const height = imageElement && imageElement.getBoundingClientRect().height
    this.setState({
      canvasWidth: width,
      canvasHeight: height,
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.lazyRadius !== this.props.lazyRadius) {
      // Set new lazyRadius values
      this.chainLength = this.props.lazyRadius * window.devicePixelRatio
      this.lazy.setRadius(this.props.lazyRadius * window.devicePixelRatio)
    }

    if (prevProps.saveData !== this.props.saveData) {
      this.loadSaveData(this.props.saveData)
    }

    if (JSON.stringify(prevProps) !== JSON.stringify(this.props)) {
      // Signal this.loop function that values changed
      this.valuesChanged = true
    }
  }

  componentWillUnmount = () => {
    this.canvasObserver.unobserve(this.canvasContainer)
  }

  drawImage = () => {
    if (!this.props.imgSrc) return

    // Load the image
    this.image = new Image()
    this.image.src = this.props.imgSrc

    // Draw the image once loaded
    this.image.onload = () => drawImage({ ctx: this.ctx.grid, img: this.image })
  }

  undo = () => {
    const lines = this.lines.slice(0, -1)
    this.clear()
    this.simulateDrawingLines({ lines, immediate: true })
  }

  getSaveData = () => {
    // Construct and return the stringified saveData object
    return JSON.stringify({
      lines: this.lines,
      width: this.state.canvasWidth,
      height: this.state.canvasHeight,
    })
  }

  loadSaveData = (saveData, immediate = this.props.immediateLoading) => {
    // console.log("load")
    if (typeof saveData !== "string") {
      throw new Error("saveData needs to be of type string!")
    }

    const { lines, width, height } = JSON.parse(saveData)

    if (!lines || typeof lines.push !== "function") {
      throw new Error("saveData.lines needs to be an array!")
    }

    if (
      width === this.state.canvasWidth &&
      height === this.state.canvasHeight
    ) {
      this.simulateDrawingLines({
        lines,
        immediate,
      })
    } else {
      // we need to rescale the lines based on saved & current dimensions
      const scaleX = this.state.canvasWidth / width
      const scaleY = this.state.canvasHeight / height
      const scaleAvg = (scaleX + scaleY) / 2

      this.simulateDrawingLines({
        lines: lines.map((line) => ({
          ...line,
          points: line.points.map((p) => ({
            x: p.x * scaleX,
            y: p.y * scaleY,
          })),
          brushRadius: line.brushRadius * scaleAvg,
        })),
        immediate,
      })
    }
  }

  simulateDrawingLines = ({ lines, immediate }) => {
    // Simulate live-drawing of the loaded lines
    // TODO use a generator
    let curTime = 0
    let timeoutGap = immediate ? 0 : this.props.loadTimeOffset

    lines.forEach((line) => {
      const { points, brushColor, brushRadius } = line

      for (let i = 1; i < points.length; i++) {
        curTime += timeoutGap
        window.setTimeout(() => {
          this.drawPoints({
            points: points.slice(0, i + 1),
            brushColor,
            brushRadius,
          })
        }, curTime)
      }

      curTime += timeoutGap
      window.setTimeout(() => {
        // Save this line with its props instead of this.props
        this.points = points
        this.saveLine({ brushColor, brushRadius })
      }, curTime)
    })
  }

  handleTouchStart = (e) => {
    const { x, y } = this.getPointerPos(e)
    this.lazy.update({ x, y }, { both: true })
    this.handleMouseDown(e)

    this.mouseHasMoved = true
  }

  handleTouchMove = (e) => {
    e.preventDefault()
    const { x, y } = this.getPointerPos(e)
    this.handlePointerMove(x, y)
  }

  handleTouchEnd = (e) => {
    this.handleMouseUp(e)
    const brush = this.lazy.getBrushCoordinates()
    this.lazy.update({ x: brush.x, y: brush.y }, { both: true })
    this.mouseHasMoved = true
  }

  handleMouseDown = (e) => {
    e.preventDefault()
    this.isPressing = true
  }

  handleMouseMove = (e) => {
    const { x, y } = this.getPointerPos(e)
    this.handlePointerMove(x, y)
  }

  handleMouseUp = (e) => {
    e.preventDefault()
    this.isDrawing = false
    this.isPressing = false

    this.saveLine()
    this.setState({ ...this.state, dialogOpen: true })
  }

  handleCanvasResize = (entries, observer) => {
    const saveData = this.getSaveData()
    for (const entry of entries) {
      const { width, height } = entry.contentRect
      this.setCanvasSize(this.canvas.interface, width, height)
      this.setCanvasSize(this.canvas.drawing, width, height)
      this.setCanvasSize(this.canvas.temp, width, height)

      this.loop({ once: true })
    }
    this.loadSaveData(saveData, true)
  }

  setCanvasSize = (canvas, width, height) => {
    canvas.width = width
    canvas.height = height
    canvas.style.width = width
    canvas.style.height = height
  }

  getPointerPos = (e) => {
    const rect = this.canvas.interface.getBoundingClientRect()

    // use cursor pos as default
    let clientX = e.clientX
    let clientY = e.clientY

    // use first touch if available
    if (e.changedTouches && e.changedTouches.length > 0) {
      clientX = e.changedTouches[0].clientX
      clientY = e.changedTouches[0].clientY
    }

    // return mouse/touch position inside canvas
    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    }
  }

  handlePointerMove = (x, y) => {
    if (this.props.disabled) return

    const hasChanged = this.lazy.update({ x, y })
    const isDisabled = !this.lazy.isEnabled()

    if (
      (this.isPressing && hasChanged && !this.isDrawing) ||
      (isDisabled && this.isPressing)
    ) {
      // Start drawing and add point
      this.isDrawing = true
      this.points.push(this.lazy.brush.toObject())
    }

    if (this.isDrawing && (this.lazy.brushHasMoved() || isDisabled)) {
      // Add new point
      this.points.push(this.lazy.brush.toObject())

      // Draw current points
      this.drawPoints({
        points: this.points,
        brushColor: this.props.brushColor,
        brushRadius: this.props.brushRadius,
      })
    }

    this.mouseHasMoved = true
  }

  drawPoints = ({ points, brushColor, brushRadius }) => {
    this.ctx.temp.lineJoin = "round"
    this.ctx.temp.lineCap = "round"
    this.ctx.temp.strokeStyle = brushColor

    this.ctx.temp.clearRect(
      0,
      0,
      this.ctx.temp.canvas.width,
      this.ctx.temp.canvas.height
    )
    this.ctx.temp.lineWidth = brushRadius * 2

    let p1 = points[0]
    let p2 = points[1]

    this.ctx.temp.moveTo(p2.x, p2.y)
    this.ctx.temp.beginPath()

    for (var i = 1, len = points.length; i < len; i++) {
      // we pick the point between pi+1 & pi+2 as the
      // end point and p1 as our control point
      var midPoint = midPointBtw(p1, p2)
      this.ctx.temp.quadraticCurveTo(p1.x, p1.y, midPoint.x, midPoint.y)
      p1 = points[i]
      p2 = points[i + 1]
    }
    // Draw last line as a straight line while
    // we wait for the next point to be able to calculate
    // the bezier control point
    this.ctx.temp.lineTo(p1.x, p1.y)
    this.ctx.temp.stroke()
  }

  saveLine = ({ brushColor, brushRadius } = {}) => {
    if (this.points.length < 2) return

    // Save as new line
    this.lines.push({
      points: [...this.points],
      brushColor: brushColor || this.props.brushColor,
      brushRadius: brushRadius || this.props.brushRadius,
    })

    // Reset points array
    this.points.length = 0

    const width = this.canvas.temp.width
    const height = this.canvas.temp.height

    // Copy the line to the drawing canvas
    this.ctx.drawing.drawImage(this.canvas.temp, 0, 0, width, height)

    // Clear the temporary line-drawing canvas
    this.ctx.temp.clearRect(0, 0, width, height)
  }

  clear = () => {
    this.lines = []
    this.valuesChanged = true
    this.ctx.drawing.clearRect(
      0,
      0,
      this.canvas.drawing.width,
      this.canvas.drawing.height
    )
    this.ctx.temp.clearRect(
      0,
      0,
      this.canvas.temp.width,
      this.canvas.temp.height
    )
  }

  loop = ({ once = false } = {}) => {
    if (this.mouseHasMoved || this.valuesChanged) {
      const pointer = this.lazy.getPointerCoordinates()
      const brush = this.lazy.getBrushCoordinates()

      this.drawInterface(this.ctx.interface, pointer, brush)
      this.mouseHasMoved = false
      this.valuesChanged = false
    }

    if (!once) {
      window.requestAnimationFrame(() => {
        this.loop()
      })
    }
  }

  drawInterface = (ctx, pointer, brush) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    // Draw brush preview
    ctx.beginPath()
    ctx.fillStyle = this.props.brushColor
    ctx.arc(brush.x, brush.y, this.props.brushRadius, 0, Math.PI * 2, true)
    ctx.fill()

    // Draw mouse point (the one directly at the cursor)
    ctx.beginPath()
    ctx.fillStyle = this.props.catenaryColor
    ctx.arc(pointer.x, pointer.y, 4, 0, Math.PI * 2, true)
    ctx.fill()

    // Draw catenary
    if (this.lazy.isEnabled()) {
      ctx.beginPath()
      ctx.lineWidth = 2
      ctx.lineCap = "round"
      ctx.setLineDash([2, 4])
      ctx.strokeStyle = this.props.catenaryColor
      this.catenary.drawToCanvas(
        this.ctx.interface,
        brush,
        pointer,
        this.chainLength
      )
      ctx.stroke()
    }

    // Draw brush point (the one in the middle of the brush preview)
    ctx.beginPath()
    ctx.fillStyle = this.props.catenaryColor
    ctx.arc(brush.x, brush.y, 2, 0, Math.PI * 2, true)
    ctx.fill()
  }

  render() {
    const imageElement = document.querySelector(
      "#main-container-lazy-brush > svg"
    )
    const width = imageElement && imageElement.getBoundingClientRect().width
    const height = imageElement && imageElement.getBoundingClientRect().height
    const top = imageElement && imageElement.style.top
    const left = imageElement && imageElement.style.left
    window.lazyCords = () => {
      return this.lines || []
    }

    return (
      <div
        className="lazyBrushContainer"
        ref={(container) => {
          if (container) {
            this.canvasContainer = container
          }
        }}
      >
        <canvas
          id="myPics"
          ref={(canvas) => {
            if (canvas) {
              this.props.setCanvasRef(canvas)
            }
          }}
          width={500}
          height={500}
        />
        {canvasTypes.map(({ name, zIndex }) => {
          const isInterface = name === "interface"
          const brush = this.props.selectedTool === "create-a-brush"
          // console.log(this.props)
          const style = {
            width: `${width}px`,
            height: `${height}px`,
            position: "absolute",
            top: top,
            left: left,
            zIndex: zIndex,
          }

          return (
            <canvas
              key={name}
              ref={(canvas) => {
                if (canvas) {
                  this.canvas[name] = canvas
                  this.ctx[name] = canvas.getContext("2d")
                }
              }}
              style={style}
              onMouseDown={
                isInterface && brush ? this.handleMouseDown : undefined
              }
              onMouseMove={
                isInterface && brush ? this.handleMouseMove : undefined
              }
              onMouseUp={isInterface && brush ? this.handleMouseUp : undefined}
              onMouseOut={isInterface && brush ? this.handleMouseUp : undefined}
              onTouchStart={
                isInterface && brush ? this.handleTouchStart : undefined
              }
              onTouchMove={
                isInterface && brush ? this.handleTouchMove : undefined
              }
              onTouchEnd={
                isInterface && brush ? this.handleTouchEnd : undefined
              }
              onTouchCancel={
                isInterface && brush ? this.handleTouchEnd : undefined
              }
            />
          )
        })}
        {/* <div key="topLeftTag" className={classes.fixedRegionLabel}>
          <Dialog open={this.state.dialogOpen}>
            <button
              onClick={() => {
                this.setState({ ...this.state, dialogOpen: false })
              }}
            >
              Close me
            </button>
            <DialogTitle>Hello</DialogTitle>
          </Dialog>
        </div> */}
      </div>
    )
  }
}
