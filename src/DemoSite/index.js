// @flow
import React from "react"
import Annotator from "../Annotator"

export default () => {
  const [annotatorProps, changeAnnotatorProps] = React.useState({
    taskDescription:
      "Annotate each image according to this _markdown_ specification.",

    regionClsList: [
      "Bag",
      "Bangles bracelets",
      "Bathrobe",
      "Belt",
      "Blazer",
      "Blouse saree",
      "Boots",
      "Bra",
      "Briefs",
      "Camisole",
      "Casual shoes",
      "Coats",
      "Coords",
      "Corset",
      "Dress",
      "Dungree",
      "Dupatta",
      "Earcuff",
      "Earrings",
      "Ethnic bottom",
      "Finger rings",
      "Flats",
      "Flip flop",
      "Footware",
    ],
    enabledTools: ["select", "create-box"],
    videoName: "",
    videoTime: "0",
    videoSrc:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    images: [
      {
        src: "https://www.bianchi.com/wp-content/uploads/2019/07/YPB17I555K.jpg",
        name: "hot-dogs-1",
        regions: [
          {
            type: "box",
            x: 0.10589285714285715,
            y: 0.08487394957983194,
            w: 0.15364845938375352,
            h: 0.15630252100840336,
            highlighted: true,
            editingLabels: false,
            color: "#ff0000",
            id: "6859032797397029",
            qc_label: true,
            keyframes: "0",
          },
        ],
      },
      {
        src: "https://www.bianchi.com/wp-content/uploads/2019/07/YPB17I555K.jpg",
        name: "bianchi-oltre-xr4",
      },
    ],
    allowComments: false,
  })
  let isImageMode = true
  return (
    <div>
      <Annotator
        {...(annotatorProps: any)}
        onExit={(e) => console.log(e)}
        enabledTools={
          isImageMode
            ? ["create-box"]
            : [
                "select",
                "zoom",
                "pan",
                "create-point",
                "create-box",
                "create-polygon",
                "show-mask",
                "undo_anntation",
                "redo_anntation",
                "create-a-brush",
                "eraser",
                "zoom_tool_minus",
              ]
        }
        invaild_show={true}
        showUpdate={!isImageMode}
        rightMenu={true}
        isReadingMode={false}
        isImageMode={isImageMode}
        hideSaveNext={isImageMode}
        hideQuery={isImageMode}
        hideSave={isImageMode}
        hideHeader={isImageMode}
        hideHeaderText={isImageMode}
        hideNext={isImageMode}
        hidePrev={isImageMode}
        hideClone={isImageMode}
        hideSettings={isImageMode}
        hideFullScreen={isImageMode}
      />
    </div>
  )
}
