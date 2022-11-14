// @flow
import React from "react"
import Annotator from "../Annotator"

export default () => {
  const [annotatorProps, changeAnnotatorProps] = React.useState({
    taskDescription:
      "Annotate each image according to this _markdown_ specification.",
    regionTagList: [
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
            type: "polygon",
            points: [
              [0.24708333333333332, 0.5571428571428572],
              [0.6000595238095238, 0.33174603174603173],
              [0.6902645502645502, 0.5666666666666667],
            ],
            open: false,
            highlighted: true,
            color: "#ff0000",
            id: "7948504643272676",
            qc_label: true,
            keyframes: "0",
          },
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

  return (
    <div>
      <Annotator
        {...(annotatorProps: any)}
        onExit={(e) => console.log(e)}
        lazyBrush={[
          {
            id: "2687713629214845",
            qc_label: true,
            tool: "pen",
            points: [
              322.9231466344839, 197.5, 427.8981633422883, 123.5,
              479.88579066424853, 135.5, 497.8815078141578, 104.5,
            ],
            brushRadius: 5,
            type: "brush",
            popUp: {
              open: false,
              classification: {
                value: "Himalaya oil control face wash",
                label: "Himalaya oil control face wash",
              },
              tags: [
                {
                  value: "Front-right-Upper",
                  label: "Front-right-Upper",
                },
              ],
            },
            color: "rgba(244,67,54,0.5)",
            isPopupShow: true,
            isparent: true,
            tag_count: 1,
          },
          {
            id: "9989578543896653",
            qc_label: true,
            tool: "pen",
            points: [
              126.9697821132491, 235.5, 144.96549926315842, 217.5,
              175.9581232435578, 198.5, 204.95122309618947, 198.5,
              223.94670230998264, 214.5, 233.94432294882117, 232.5,
              235.94384707658887, 235.5, 241.94241945989197, 235.5,
              243.94194358765967, 235.5, 251.94004009873046, 234.5,
              251.94004009873046, 233.5,
            ],
            brushRadius: 5,
            type: "brush",
            popUp: {
              open: false,
            },
            color: "rgba(255,0,0,0.5)",
            isPopupShow: true,
            isparent: true,
          },
          {
            id: "9989578543896653",
            qc_label: true,
            tool: "pen",
            points: [
              326.9221948900193, 229.5, 293.93004678185224, 237.5,
              277.9338537597106, 261.5, 287.93147439854914, 276.5,
              290.9307605902007, 282.5, 275.9343296319429, 291.5,
              254.93932629038204, 291.5, 253.9395642264982, 291.5,
            ],
            brushRadius: 5,
            type: "brush",
            popUp: {
              open: false,
            },
            color: "rgba(255,0,0,0.5)",
            isPopupShow: false,
            isparent: false,
          },
        ]}
        enabledTools={[
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
        ]}
        invaild_show={true}
        showUpdate={true}
        rightMenu={true}
        isReadingMode={false}
      />
    </div>
  )
}
