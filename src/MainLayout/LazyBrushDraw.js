import React from "react"
import CanvasDraw from "./../LazyBrush/index"

class LazyBrushDraw extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: "rgba(255,195,0,0.40)",
      brushRadius: this.props.brushRadius,
      lazyRadius: 0,
    }
    this.intervalCode = 0
    this.imageData = ""
  }

  componentWillMount() {
    localStorage.removeItem("savedDrawing")
    // console.log("this", this.props.setCanvasRef)
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
    return (
      <>
        <CanvasDraw
          setCanvasRef={this.props.setCanvasRef}
          brushColor={
            this.props.selectedTool === "create-a-brush"
              ? this.state.color
              : "transparent"
          }
          hideGrid
          brushRadius={
            this.props.selectedTool === "create-a-brush"
              ? this.props.brushRadius || 5
              : ""
          }
          lazyRadius={
            this.props.selectedTool === "create-a-brush"
              ? this.state.lazyRadius
              : ""
          }
          selectedTool={this.props.selectedTool}
          lazyBrush={this.props.lazyBrush}
          lazyBrushClassification={this.props.lazyBrushClassification}
          lazyBrushTags={this.props.lazyBrushTags}
          yPosition={this.props.yPosition}
          xPosition={this.props.xPosition}
          originalClass={this.props.originalClass}
          canvasEl={this.props.canvasEl}
          showTags={this.props.showTags}
          disabled={this.props.selectedTool !== "create-a-brush"}
          imagePosition={this.props.customStyle}
        />
      </>
    )
  }
}
export default LazyBrushDraw

