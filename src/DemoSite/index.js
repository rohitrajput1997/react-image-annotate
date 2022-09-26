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
        // lazyBrush={[
        //   {
        //     id: "3290385384617849",
        //     qc_label: true,
        //     tool: "pen",
        //     points: [
        //       223.00433007786643, 208.53981327528638, 302.9937382600457,
        //       151.5396080658124, 342.98844235113535, 163.5396512678069,
        //       371.9846028171753, 179.53970887046626, 405.9801012946015,
        //       170.53967646897038, 417.9785125219284, 144.5395828646489,
        //       418.9783801242056, 141.53957206415026,
        //     ],
        //     brushRadius: 5,
        //     type: "brush",
        //     popUp: {
        //       open: false,
        //       classification: {
        //         value: "Himalaya oil control face wash",
        //         label: "Himalaya oil control face wash",
        //       },
        //       tags: [
        //         {
        //           value: "Front-right-Upper",
        //           label: "Front-right-Upper",
        //         },
        //       ],
        //     },
        //     isPopupShow: true,
        //     color: "rgba(244,67,54,0.5)",
        //     tag_count: 1,
        //   },
        //   {
        //     id: "3290385384617849",
        //     qc_label: true,
        //     tool: "pen",
        //     points: [
        //       638.9492526251986, 115.5394784598288, 597.9546809318317,
        //       154.539618866311, 612.9526949659904, 200.5397844739567,
        //       611.9528273637131, 225.53987447811195, 574.9577260794553,
        //       234.53990687960786, 548.961168420247, 234.53990687960786,
        //       540.962227602029, 232.5398996792754, 538.9624923974745,
        //       231.5398960791092, 537.9626247951973, 231.5398960791092,
        //     ],
        //     brushRadius: 5,
        //     type: "brush",
        //     popUp: false,
        //     isPopupShow: false,
        //   },
        //   {
        //     id: "3290385384617849",
        //     qc_label: true,
        //     tool: "pen",
        //     points: [
        //       716.9389256028234, 114.53947485966259, 742.9354832620317,
        //       94.53940285633838, 774.9312465349034, 84.53936685467627,
        //       792.9288633758937, 118.53948926032743, 808.9267450123295,
        //       134.5395468629868, 822.924891444211, 134.5395468629868,
        //       834.9233026715378, 130.53953246232194, 837.9229054783696,
        //       129.53952886215575,
        //     ],
        //     brushRadius: 5,
        //     type: "brush",
        //     popUp: false,
        //     isPopupShow: false,
        //   },
        //   {
        //     id: "3442082886279918",
        //     qc_label: true,
        //     tool: "pen",
        //     points: [
        //       750.9344240802496, 153.5396152661448, 752.9341592848041,
        //       217.53984567678228, 766.9323057166855, 237.53991768010647,
        //       753.9340268870814, 253.53997528276585, 717.9387932051006,
        //       255.53998248309827, 712.9394551937145, 255.53998248309827,
        //     ],
        //     brushRadius: 5,
        //     type: "brush",
        //     popUp: {
        //       open: false,
        //       classification: {
        //         value: "Himalaya oil control face wash",
        //         label: "Himalaya oil control face wash",
        //       },
        //       tags: [
        //         {
        //           value: "hotdog",
        //           label: "hotdog",
        //         },
        //       ],
        //     },
        //     isPopupShow: true,
        //     color: "rgba(244,67,54,0.5)",
        //     tag_count: 1,
        //   },
        //   {
        //     id: "3442082886279918",
        //     qc_label: true,
        //     tool: "pen",
        //     points: [
        //       932.9103276947075, 176.53969806996764, 898.9148292172813,
        //       214.53983487628363, 909.9133728423309, 239.5399248804389,
        //       937.9096657060936, 253.53997528276585, 932.9103276947075,
        //       273.54004728609004, 898.9148292172813, 277.5400616867549,
        //       883.9168151831226, 276.54005808658866, 882.9169475808454,
        //       274.54005088625627,
        //     ],
        //     brushRadius: 5,
        //     type: "brush",
        //     popUp: false,
        //     isPopupShow: false,
        //   },
        // ]}
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
        ]}
        invaild_show={true}
        showUpdate={true}
        rightMenu={true}
        isReadingMode={false}
      />
    </div>
  )
}
