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
        lazyBrush={[
          {
            type: "box",
            x: 0.13238722168578015,
            y: 0.592156314159563,
            w: 0.026545661202185794,
            h: 0.01814475774134794,
            highlighted: true,
            editingLabels: true,
            color: "#ff0000",
            id: "736990269499501",
            qc_label: true,
            keyframes: "0",
          },
          {
            id: "6068718862093421",
            qc_label: true,
            tool: "pen",
            points: [
              204.66813571950013, 246.4187083834309, 206.24082574936406,
              244.84603214324946, 226.16156612764084, 239.60377800931127,
              238.2188563565978, 235.40997470216075, 245.55807649596292,
              223.8770156074968, 248.70345655569082, 211.819831099439,
              249.22768656564548, 208.67447861907613,
            ],
            brushRadius: 5,
            popUp: {
              open: false,
            },
          },
          {
            id: "6860518263906561",
            qc_label: true,
            tool: "pen",
            points: [
              185.40126030116485, 123.77012953953202, 576.9540519717046,
              27.119317551867226, 583.0720643415568, 12.438181553740927,
              584.2956668155273, 6.321041554521637, 584.2956668155273,
              5.097613554677778,
            ],
            brushRadius: 5,
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
            tag_count: 1,
          },
        ]}
      />
    </div>
  )
}
