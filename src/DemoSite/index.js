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
            h: 0.16114285714285714,
            w: 0.10285714285714284,
            x: 0.08283333333333334,
            y: 0.11362301478310236,
            id: "7642512129200276",
            cls: "specification",
            tags: ["not-hotdog", "box", "not"],
            type: "box",
            color: "#f44336",
            highlighted: false,
            editingLabels: false,
            invalid: true,
          },
          {
            h: 0.15360000000000004,
            w: 0.17485714285714277,
            x: 0.3826619047619048,
            y: 0.15956586865621905,
            id: "6151961109630444",
            cls: "specification",
            tags: ["not-hotdog", "box", "not"],
            type: "box",
            color: "#f44336",
            highlighted: false,
            editingLabels: false,
            invalid: true,
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
        lazyBrush={[
          {
            tool: "pen",
            points: [
              197.90878098221688, 20.166664123535156, 150.93043398138764,
              80.16666412353516, 224.89634202524647, 88.16666412353516,
              271.8746890260757, 74.16666412353516, 308.8576430480052,
              60.166664123535156, 313.85533953745505, 58.166664123535156,
              316.853957431125, 52.166664123535156, 316.853957431125,
              44.166664123535156, 311.8562609416751, 37.166664123535156,
              289.86639638809544, 29.166664123535156, 255.88206025983598,
              24.166664123535156, 237.89035289781626, 20.166664123535156,
              218.89910623790655, 19.166664123535156, 203.9060167695568,
              19.166664123535156, 201.90693817377684, 19.166664123535156,
              200.90739887588686, 19.166664123535156, 188.91292730120702,
              19.166664123535156,
            ],
            brushRadius: 5,
            invalid: false,
            keyframes: 32312,
            popUp: {
              open: false,
              classification: {
                value: "hotdog",
                label: "hotdog",
              },
              tags: [
                {
                  value: "has-bun",
                  label: "has-bun",
                },
                {
                  value: "has-bun",
                  label: "has-bun",
                },
                {
                  value: "Front-right-Upper",
                  label: "Front-right-Upper",
                },
                {
                  value: "Front-right-Upper",
                  label: "Front-right-Upper",
                },
                {
                  value: "not-hotdog",
                  label: "not-hotdog",
                },
                {
                  value: "box",
                  label: "box",
                },
                {
                  value: "not",
                  label: "not",
                },
              ],
            },
            tag_count: 5,
          },
          {
            id: "2832329017640485",
            qc_label: true,
            tool: "pen",
            points: [
              189.08368185638682, 213, 215.0951936461543, 197,
              317.1403552829345, 162, 395.17489065223697, 166, 416.18418863628,
              223, 414.1833031139902, 236,
            ],
            brushRadius: 5,
            popUp: {
              open: false,
            },
            keyframes: 32312,
          },
        ]}
        invaild_show={true}
        showUpdate={true}
      />
    </div>
  )
}
