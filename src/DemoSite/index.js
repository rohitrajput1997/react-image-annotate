// @flow
import React from "react"
import Annotator from "../Annotator"

export default () => {
  const [annotatorProps, changeAnnotatorProps] = React.useState({
    taskDescription:
      "Annotate each image according to this markdown specification.",
    regionTagList: ["has-bun"],
    regionClsList: ["hotdog", "not-hotdog"],
    enabledTools: ["select", "create-box"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1496905583330-eb54c7e5915a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        name: "hot-dogs-1",
      },
      {
        src: "https://www.bianchi.com/wp-content/uploads/2019/07/YPB17I555K.jpg",
        name: "bianchi-oltre-xr4",
      },
    ],
    allowComments: true,
  })

  return (
    <div>
      <Annotator
        keyframes={{
          0: {
            regions: [
              {
                id: "910517662556203",
                cls: "valid",
                color: "#f44336",
                type: "box",
                x: 0.12195121951219515,
                y: 0.28726287262872624,
                w: 0.2606707317073171,
                h: 0.4769647696476965,
              },
            ],
          },
          2656: {
            regions: [
              {
                id: "910517662556203",
                cls: "valid",
                color: "#f44336",
                type: "box",
                x: 0.13109756097560976,
                y: 0.08672086720867206,
                w: 0.3445121951219512,
                h: 0.7913279132791328,
              },
            ],
          },
        }}
        // onExit: action("onExit"),
        taskDescription=""
        videoName=""
        videoTime="0"
        videoSrc="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        hidePrev={true}
        hideNext={true}
        hideSettings={true}
        onExit={(e) => console.log(e)}
        enabledTools={[
          "select",
          "create-point",
          "create-box",
          "create-polygon",
          "show-mask",
        ]}
        xPosition={0.25}
        yPosition={2.0}
      />
    </div>
  )
}

