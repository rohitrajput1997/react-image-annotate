// @flow
import React from "react"
import Annotator from "../Annotator"

export default () => {
  const [annotatorProps, changeAnnotatorProps] = React.useState({
    taskDescription:
      "Annotate each image according to this _markdown_ specification.",
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
        {...(annotatorProps: any)}
        onExit={(e) => console.log(e)}
        enabledTools={[
          "select",
          "create-point",
          "create-box",
          "create-polygon",
          "show-mask",
        ]}
        lazyBrush={[
          {
            points: [
              {
                x: 210,
                y: 31.75,
              },
              {
                x: 210,
                y: 31.75,
              },
              {
                x: 222,
                y: 30.5,
              },
              {
                x: 252,
                y: 29.25,
              },
              {
                x: 264,
                y: 29.25,
              },
              {
                x: 273,
                y: 29.25,
              },
              {
                x: 300,
                y: 32.99999999999999,
              },
              {
                x: 309,
                y: 35.5,
              },
              {
                x: 324,
                y: 40.5,
              },
              {
                x: 327,
                y: 46.75,
              },
              {
                x: 330,
                y: 53,
              },
              {
                x: 327,
                y: 64.25,
              },
              {
                x: 318,
                y: 69.25,
              },
              {
                x: 294,
                y: 76.74999999999999,
              },
              {
                x: 291,
                y: 76.75,
              },
              {
                x: 288,
                y: 76.75,
              },
              {
                x: 291,
                y: 76.75,
              },
            ],
            brushColor: "#ffc600",
            brushRadius: 5,
            popUp: {
              open: false,
              classification: [
                {
                  value: "hotdog",
                  label: "hotdog",
                },
                {
                  value: "not-hotdog",
                  label: "not-hotdog",
                },
              ],
              tags: [
                {
                  value: "has-bun",
                  label: "has-bun",
                },
              ],
            },
          },
          {
            points: [
              {
                x: 219,
                y: 154.25,
              },
              {
                x: 219,
                y: 154.25,
              },
              {
                x: 222,
                y: 158,
              },
              {
                x: 228,
                y: 164.25,
              },
              {
                x: 231,
                y: 164.25,
              },
              {
                x: 231,
                y: 166.75,
              },
              {
                x: 234,
                y: 168,
              },
              {
                x: 237,
                y: 169.25,
              },
              {
                x: 240,
                y: 169.25,
              },
              {
                x: 243,
                y: 171.75,
              },
              {
                x: 243,
                y: 174.25,
              },
              {
                x: 243,
                y: 178,
              },
              {
                x: 243,
                y: 180.5,
              },
              {
                x: 219,
                y: 186.75,
              },
              {
                x: 210,
                y: 189.25,
              },
              {
                x: 198,
                y: 194.25,
              },
              {
                x: 192,
                y: 196.75,
              },
              {
                x: 189,
                y: 196.75,
              },
              {
                x: 186,
                y: 196.75,
              },
              {
                x: 174,
                y: 199.25,
              },
            ],
            brushColor: "#ffc600",
            brushRadius: 5,
            popUp: {
              open: false,
              classification: [
                {
                  value: "hotdog",
                  label: "hotdog",
                },
              ],
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

