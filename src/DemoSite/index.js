// @flow
import React from "react"
import Annotator from "../Annotator"

export default () => {
  const [annotatorProps, changeAnnotatorProps] = React.useState({
    taskDescription:
      "Annotate each image according to this _markdown_ specification.",
    regionTagList: [
      "has-bun",
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
    images: [
      {
        src: "https://www.bianchi.com/wp-content/uploads/2019/07/YPB17I555K.jpg",
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
            points: [
              {
                x: 254,
                y: 207.5,
              },
              {
                x: 254,
                y: 207.5,
              },
              {
                x: 255,
                y: 205.5,
              },
              {
                x: 256,
                y: 202.5,
              },
              {
                x: 261,
                y: 197.5,
              },
              {
                x: 268,
                y: 189.5,
              },
              {
                x: 275,
                y: 181.5,
              },
              {
                x: 282,
                y: 171.5,
              },
              {
                x: 288,
                y: 164.5,
              },
              {
                x: 296,
                y: 155.5,
              },
              {
                x: 302,
                y: 150.5,
              },
              {
                x: 313,
                y: 145.5,
              },
              {
                x: 324,
                y: 141.5,
              },
              {
                x: 340,
                y: 133.5,
              },
              {
                x: 352,
                y: 129.5,
              },
              {
                x: 360,
                y: 129.5,
              },
              {
                x: 369,
                y: 129.5,
              },
              {
                x: 380,
                y: 133.5,
              },
              {
                x: 391,
                y: 135.5,
              },
              {
                x: 403,
                y: 139.5,
              },
              {
                x: 413,
                y: 140.5,
              },
              {
                x: 420,
                y: 141.5,
              },
              {
                x: 425,
                y: 141.5,
              },
              {
                x: 430,
                y: 141.5,
              },
              {
                x: 432,
                y: 141.5,
              },
            ],
            brushColor: "rgba(255,195,0,0.40)",
            brushRadius: 5,
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
              ],
            },
          },
        ]}
      />
    </div>
  )
}

