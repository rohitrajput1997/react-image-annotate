import React, { Component } from "react"
import CanvasDraw from "./../LazyBrush/index"

class LazyBrushDraw extends Component {
  constructor() {
    super()
    this.state = {
      color: "#ffc600",
      width: 800,
      height: 800,
      brushRadius: 10,
      lazyRadius: 12,
    }
    this.intervalCode = 0
    this.imageData = ""
  }

  componentWillMount() {
    localStorage.removeItem("savedDrawing")
    console.log("this", this.props.setCanvasRef)
  }

  clearImage() {
    this.saveableCanvas.clear()
    this.loadableCanvas.clear()
  }

  saveImage() {
    let compressedString = this.saveableCanvas.getSaveData()
    let currentSavedDrawing = localStorage.getItem("savedDrawing")

    if (currentSavedDrawing === compressedString) {
      return
    }
    console.log(compressedString)
    localStorage.setItem("savedDrawing", compressedString)
  }

  loadImage() {
    let savedImage = localStorage.getItem("savedDrawing")
    if (savedImage === this.imageData) {
      return
    }
    this.imageData = savedImage
    this.loadableCanvas.loadSaveData(savedImage)
  }

  startSave() {
    this.intervalCode = window.setInterval(() => {
      this.saveImage()
      this.loadImage()
    }, 500)
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalCode)
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.startSave()}>Start!</button>
          <button onClick={() => this.saveImage()}>Save</button>
          <button onClick={() => this.clearImage()}>Clear</button>
          <button
            onClick={() => {
              this.saveableCanvas.undo()
            }}
          >
            Undo
          </button>
        </div>
        <CanvasDraw
          ref={(canvasDraw) => {
            this.saveableCanvas = canvasDraw
            this.props.setCanvasRef(canvasDraw?.canvas?.interface || null)
          }}
          brushColor={this.state.color}
          hideGrid
          brushRadius={this.state.brushRadius}
          lazyRadius={this.state.lazyRadius}
          canvasWidth={this.state.width}
          canvasHeight={this.state.height}
        />
        <button onClick={() => this.loadImage()}>Load Drawing!</button>
        <CanvasDraw
          disabled
          hideGrid
          ref={(canvasDraw) => (this.loadableCanvas = canvasDraw)}
        />
      </div>
    )
  }
}
export default LazyBrushDraw
