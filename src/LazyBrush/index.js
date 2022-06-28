import { Button, Paper } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import { Catenary } from "catenary-curve"
import { LazyBrush } from "lazy-brush"
import PropTypes from "prop-types"
import React from "react"
import CreatableSelect from "react-select/creatable"
import ResizeObserver from "resize-observer-polyfill"
import drawImage from "./DrwaImage"

import CheckIcon from "@mui/icons-material/Check"
import TrashIcon from "@mui/icons-material/Delete"
import { asMutable } from "seamless-immutable"

function midPointBtw(p1, p2) {
  return {
    x: p1.x + (p2.x - p1.x) / 2,
    y: p1.y + (p2.y - p1.y) / 2,
  }
}

const canvasTypes = [
  {
    name: "myPics",
    id: "myPics",
  },
  {
    name: "interface",
    zIndex: 15,
    id: "interface",
  },
  {
    name: "drawing",
    zIndex: 11,
    id: "drawing",
  },
  {
    name: "temp",
    zIndex: 12,
    id: "temp",
  },
]

const dimensionsPropTypes = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
])

export default class extends React.PureComponent {
  static propTypes = {
    loadTimeOffset: PropTypes.number,
    lazyRadius: PropTypes.number,
    brushRadius: PropTypes.number,
    brushColor: PropTypes.string,
    catenaryColor: PropTypes.string,
    gridColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    hideGrid: PropTypes.bool,
    canvasWidth: dimensionsPropTypes,
    canvasHeight: dimensionsPropTypes,
    disabled: PropTypes.bool,
    imgSrc: PropTypes.string,
    saveData: PropTypes.string,
    immediateLoading: PropTypes.bool,
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
    canvasWidth: 400,
    canvasHeight: 400,
    disabled: false,
    imgSrc: "",
    saveData: "",
    immediateLoading: false,
  }

  constructor(props) {
    super(props)

    this.canvas = {}
    this.ctx = {}

    this.catenary = new Catenary()

    this.points = []
    this.popUp = {}
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
      this.chainLength = this.props.lazyRadius * window.devicePixelRatio
      this.lazy.setRadius(this.props.lazyRadius * window.devicePixelRatio)
    }

    if (prevProps.saveData !== this.props.saveData) {
      this.loadSaveData(this.props.saveData)
    }

    if (JSON.stringify(prevProps) !== JSON.stringify(this.props)) {
      this.valuesChanged = true
    }
  }

  componentWillUnmount = () => {
    this.canvasObserver.unobserve(this.canvasContainer)
  }

  drawImage = () => {
    if (!this.props.imgSrc) return

    this.image = new Image()
    this.image.src = this.props.imgSrc

    this.image.onload = () => drawImage({ ctx: this.ctx.grid, img: this.image })
  }

  undo = () => {
    const lines = this.lines.slice(0, -1)
    this.clear()
    this.simulateDrawingLines({ lines, immediate: true })
  }

  getSaveData = () => {
    return JSON.stringify({
      lines: this.lines,
      width: this.state.canvasWidth,
      height: this.state.canvasHeight,
    })
  }

  loadSaveData = (saveData, immediate = this.props.immediateLoading) => {
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
    let curTime = 0
    let timeoutGap = immediate ? 0 : this.props.loadTimeOffset

    lines.forEach((line) => {
      const { points, brushColor, brushRadius, popUp } = line
      for (let i = 1; i < points.length; i++) {
        curTime += timeoutGap
        window.setTimeout(() => {
          this.drawPoints({
            points: points.slice(0, i + 1),
            brushColor,
            brushRadius,
            popUp,
          })
        }, curTime)
      }

      curTime += timeoutGap
      window.setTimeout(() => {
        this.points = points
        this.popUp = popUp
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
  lastPoint = { x: null, y: null }
  getPointerPos = (e) => {
    const rect = this.canvas.interface.getBoundingClientRect()
    console.log(e.clientY, e.clientX, "before")
    let yPosition = e.clientY * this.props.yPosition
    let xPosition = e.clientX * this.props.xPosition

    let clientX = e.clientX + xPosition
    let clientY = e.clientY + yPosition

    if (e.changedTouches && e.changedTouches.length > 0) {
      clientX = e.changedTouches[0].clientX + xPosition
      clientY = e.changedTouches[0].clientY + yPosition
    }
    console.log(clientX, clientY, "after")
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
      this.isDrawing = true
      this.points.push(this.lazy.brush.toObject())
    }

    if (this.isDrawing && (this.lazy.brushHasMoved() || isDisabled)) {
      this.points.push(this.lazy.brush.toObject())

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
      var midPoint = midPointBtw(p1, p2)
      this.ctx.temp.quadraticCurveTo(p1.x, p1.y, midPoint.x, midPoint.y)
      p1 = points[i]
      p2 = points[i + 1]
    }

    this.ctx.temp.lineTo(p1.x, p1.y)
    this.ctx.temp.stroke()
  }

  saveLine = ({ brushColor, brushRadius } = {}) => {
    if (this.points.length < 2) return

    this.lines.push({
      points: [...this.points],
      brushColor: brushColor || this.props.brushColor,
      brushRadius: brushRadius || this.props.brushRadius,
      popUp: { ...this.popUp },
    })

    this.points.length = 0

    const width = this.canvas.temp.width
    const height = this.canvas.temp.height

    this.ctx.drawing.drawImage(this.canvas.temp, 0, 0, width, height)

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

    ctx.beginPath()
    ctx.fillStyle = this.props.brushColor
    ctx.arc(brush.x, brush.y, this.props.brushRadius, 0, Math.PI * 2, true)
    ctx.fill()

    ctx.beginPath()
    ctx.fillStyle = this.props.catenaryColor
    ctx.arc(pointer.x, pointer.y, 4, 0, Math.PI * 2, true)
    ctx.fill()

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
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        {canvasTypes.map(({ name, zIndex, id }) => {
          const isInterface = name === "interface"
          const brush = this.props.selectedTool === "create-a-brush"

          let style = {
            top: `${top}`,
            left: `${left}`,
            height: `${height}px`,
            width: `${width}px`,
            position: "absolute",
            zIndex: zIndex,
          }

          if (id === "myPics") {
            style = {
              ...style,
              height: `500px`,
              width: `500px`,
              top: 0,
              left: 0,
            }
          }

          return (
            <canvas
              key={name}
              ref={(canvas) => {
                if (canvas) {
                  this.canvas[name] = canvas
                  this.ctx[name] = canvas.getContext("2d")
                  if (id === "myPics") this.props.setCanvasRef(canvas)
                }
              }}
              style={style}
              id={id}
              width="500"
              height="500"
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

        {this.lines?.map((item, index) => (
          <Paper
            style={{
              position: "absolute",
              zIndex: 1000,
              top: item.points[item.points.length - 1].y / 1.2,
              left: item.points[item.points.length - 1].x / 2.8,
            }}
          >
            {item.popUp.open ? (
              <div style={{ width: 200, padding: 10 }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div
                    style={{
                      display: "flex",
                      backgroundColor: "red",
                      color: "#fff",
                      padding: 4,
                      paddingLeft: 8,
                      paddingRight: 8,
                      borderRadius: 4,
                      fontWeight: "bold",
                      textShadow: "0px 0px 5px rgba(0,0,0,0.4)",
                    }}
                  >
                    Brush
                  </div>
                  <div style={{ flexGrow: 1 }} />
                  <IconButton
                    onClick={(e) => {
                      let linessave = [...this.lines]
                      linessave.splice(index, 1)
                      this.lines = linessave
                      this.setState({ ...this.state, lines: linessave })
                      let lines = this.lines
                      let newArr = lines.splice(index, 1)

                      this.clear()
                      this.simulateDrawingLines({ lines, immediate: true })
                    }}
                    tabIndex={-1}
                    style={{ width: 22, height: 22 }}
                    size="small"
                    variant="outlined"
                  >
                    <TrashIcon
                      style={{ marginTop: -8, width: 16, height: 16 }}
                    />
                  </IconButton>
                </div>
                <div style={{ marginTop: 6 }}>
                  <CreatableSelect
                    placeholder="Classification"
                    onChange={(o, actionMeta) => {
                      let linessave = [...this.lines]
                      this.lines[index].popUp.classification = o
                      this.setState({ ...this.state, lines: linessave })
                    }}
                    value={this.lines[index].popUp.classification}
                    options={asMutable(
                      this.props.lazyBrushClassification.map((c) => ({
                        value: c,
                        label: c,
                      }))
                    )}
                  />
                </div>
                <div style={{ marginTop: 4 }}>
                  <CreatableSelect
                    value={this.lines[index].popUp.tags}
                    placeholder="Tags"
                    onChange={(o, actionMeta) => {
                      let linessave = [...this.lines]
                      this.lines[index].popUp.tags = o
                      this.setState({ ...this.state, lines: linessave })
                    }}
                    isMulti
                    options={asMutable(
                      this.props.lazyBrushTags.map((c) => ({
                        value: c,
                        label: c,
                      }))
                    )}
                  />
                </div>

                <div style={{ marginTop: 4, display: "flex" }}>
                  <div style={{ flexGrow: 1 }} />
                  <Button
                    onClick={() => {
                      let linessave = [...this.lines]
                      this.lines[index].popUp.open = false
                      this.setState({ ...this.state, lines: linessave })
                    }}
                    size="small"
                    variant="contained"
                    color="primary"
                  >
                    <CheckIcon />
                  </Button>
                </div>
              </div>
            ) : (
              <div
                style={{ padding: 8 }}
                onClick={() => {
                  let linessave = [...this.lines]
                  this.lines[index].popUp.open = true
                  let i = 0
                  for (i = 0; i < this.lines?.length; i++) {
                    if (i !== index) {
                      this.lines[i].popUp.open = false
                    }
                  }
                  this.setState({ ...this.state, lines: linessave })
                }}
              ></div>
            )}
          </Paper>
        ))}
      </div>
    )
  }
}
