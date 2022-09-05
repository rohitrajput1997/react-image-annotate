// @flow
import React from "react"
import Annotator from "../Annotator"

export default () => {
  const [annotatorProps, changeAnnotatorProps] = React.useState({
    taskDescription:
      "Annotate each image according to this _markdown_ specification.",
    regionTagList: [
      "Front-right-Upper",
      "Front-right-Upper",
      "not-hotdog",
      "box",
      "not",
      "data",
      "specification",
      "_markdown_",
      "hotdog",
      "not-hotdog",
      "box",
      "not",
      "data",
      "specification",
      "_markdown_",
      "hotdog",
      "not-hotdog",
      "box",
      "not",
      "data",
      "specification",
      "_markdown_",
      "hotdog",
      "not-hotdog",
      "box",
      "not",

      "specification",
      "_markdown_",
    ],
    regionClsList: [
      "Himalaya oil control face wash",
      "not-hotdog",
      "box",
      "not",
      "data",
      "Himalaya oil control face wash",
      "_markdown_",
      "hotdog",
      "not-hotdog",
      "box",
      "not",
      "data",
      "specification",
      "_markdown_",
      "hotdog",
      "not-hotdog",
      "box",
      "not",
      "data",
      "specification",
      "_markdown_",
      "hotdog",
      "not-hotdog",
      "box",
      "not",

      "specification",
      "_markdown_",
    ],
    enabledTools: ["select", "create-box"],
    videoName: "",
    videoTime: "0",
    // videoSrc:
    //   "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
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
        ],
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
        {...(annotatorProps: any)}
        onExit={(e) => console.log(e)}
        enabledTools={[
          "select",
          "zoom",
          "pan",
          "create-point",
          "create-box",
          "create-polygon",
          "show-mask",
        ]}
        invaild_show={true}
        showUpdate={true}
      />
    </div>
  )
}

