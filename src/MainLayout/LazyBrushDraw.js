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
    // this.saveableCanvas.clear()
    this.loadableCanvas.clear()
  }

  loadImage() {
    let savedImage = localStorage.getItem("savedDrawing")
    if (savedImage === this.imageData) {
      return
    }
    this.imageData = savedImage
    this.loadableCanvas.loadSaveData(savedImage)
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalCode)
  }

  render() {
    const ele = document.querySelector(".main-container-lazy-brush > svg")
    return (
      <>
        <CanvasDraw
          setCanvasRef={this.props.setCanvasRef}
          brushColor={this.state.color}
          hideGrid
          brushRadius={this.state.brushRadius}
          lazyRadius={this.state.lazyRadius}
          canvasWidth={this.state.width}
          canvasHeight={this.state.height}
        />
      </>
    )
  }
}
export default LazyBrushDraw
