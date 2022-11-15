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
            cls: "Bag",
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
        blocks={[
          {
              "BlockType": "PAGE",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.9774328470230103,
                      "Height": 0.9812616109848022,
                      "Left": 0,
                      "Top": 0.00201484770514071
                  },
                  "Polygon": [
                      {
                          "X": 0.01554771140217781,
                          "Y": 0.00201484770514071
                      },
                      {
                          "X": 0.9726269841194153,
                          "Y": 0.012582062743604183
                      },
                      {
                          "X": 0.9774328470230103,
                          "Y": 0.9832764267921448
                      },
                      {
                          "X": 0,
                          "Y": 0.9639695286750793
                      }
                  ]
              },
              "Id": "eb42951d-8c6f-4385-9d9b-9a99dfc99d60",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "762c02d7-4c01-4531-9c11-086bf7781835",
                          "30dbd178-1cd3-483a-962b-5b821b77762c",
                          "5445914b-f8a1-454e-ae55-817b69725be3",
                          "45628c0e-7f57-4a97-963a-07ca77821883",
                          "3b28ab6e-8911-492e-831f-3808919b25df",
                          "8d996e89-cbb4-4006-bc37-d4ca4f18399a",
                          "9c5a95c2-02ab-4e93-b91d-a3556e84c848",
                          "6fa57008-d074-426f-abe1-ed757734a82a",
                          "ee2238c9-608b-43cd-9702-6b713b8f5edf",
                          "e97df732-5ead-4798-975d-c97746fa0454",
                          "4145e162-a5b2-4eab-99f9-d22ede6df249",
                          "2c9c7b2e-da50-4982-8abf-5f10fa6442fb",
                          "4c979553-b3e9-43a2-ae59-39ab8c68db4c",
                          "56ba65b6-3540-4180-98c2-8935126c3a7b",
                          "9a129255-1a30-4a73-b416-554fd31c9dc6",
                          "f44d57b5-5198-48d9-9271-3bccf5610b3a",
                          "c756fc5c-59c3-40f4-aa93-bc607826106d",
                          "40f58846-d312-4370-a918-9286d799dc43",
                          "d2f1a3db-9e82-42dc-8ac1-1cab1e6bfd56",
                          "b7e714ec-bb25-4b10-801b-a26758b7b5d2",
                          "abb882f6-7e42-4a77-9ca2-3a7f31a811ed",
                          "93724263-65d9-4408-a088-a641dfd56ee6",
                          "ce02d714-90f8-42e9-b809-51e4977bb902",
                          "829a5f4d-3dbf-485b-9d66-9438be1f6449",
                          "f81cd8b4-165a-489c-aacf-a15ad1bf4ccc",
                          "25b98046-646f-4541-a39b-5141bbe6c1f2",
                          "4c215b0e-39b9-4cc5-91a3-f264af6e951d",
                          "1894ae0f-a6a2-46fb-9ff8-09bf19b3c34c",
                          "72912637-5aa6-45a4-aab9-a01a5ed4dab4",
                          "73d7efd5-fd7d-4066-a196-e1cf68bedd7e",
                          "91ba66e7-dd16-4c72-b6fd-cd188056d96c",
                          "d1ce2189-d084-40e2-ba6c-9b2dc2b8b08d",
                          "5013027d-b89e-455a-a311-28fea641b51c",
                          "7f4fd7cf-9451-4c1e-b223-c891b74ae277",
                          "a25b5c5e-f18a-406e-9e7a-ca0ec0ea1e39",
                          "01945287-ba0f-481d-8f03-aa7614edfc5b",
                          "07519819-728a-40fd-8b0b-fa47fb9aa162",
                          "3af0fc26-aeb7-4d92-9c6e-ebe1cfb213ea",
                          "48536039-2d72-4dec-8d73-46d3d776a6eb",
                          "b1ec2ee0-edc7-488d-9134-34c793f9114f",
                          "0dfc1d0a-9d42-46fb-aabe-70c393ac6aea",
                          "e4f5a297-97cd-4410-88b5-3cd7f5b16f0d",
                          "b065b1cf-17e9-4921-8fba-6429a1c86014",
                          "e6b79f9b-4303-4b40-9d52-f7a9c2d3cdfa",
                          "119040d2-2a96-40f0-ac88-c9ece3983d3c",
                          "61186512-02d7-4f42-a3c4-782c9f794a20",
                          "67b04383-6ade-4246-a220-4dfe7f703652",
                          "20d0c9e1-21ba-414d-bd61-fcdb478c97cc",
                          "1bcff7af-e7da-4bfd-97bc-927333320fac",
                          "3a0058e3-1b75-403e-a7b7-90e7ab410cc1",
                          "76a563b8-062c-44d4-90ed-d4dc46f1bff6",
                          "df8d5737-86be-411d-88ec-2df13da1fdfb",
                          "dbf12091-7284-4c1e-993b-e304639fa57f",
                          "d2856dc9-0969-4171-a548-6c644490292b",
                          "0b19579d-c088-4a81-bb0a-250184215d3b",
                          "8e5bd4e8-c271-45dc-a117-54f66a645314",
                          "b0783889-b45e-4163-9f72-f255e9be90ad",
                          "a8f9d6d6-cc42-48e2-a14d-2237f532d67b"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 30.12681007385254,
              "Text": "Monel",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.07564767450094223,
                      "Height": 0.03282663971185684,
                      "Left": 0.04799625650048256,
                      "Top": 0.015182998031377792
                  },
                  "Polygon": [
                      {
                          "X": 0.04868181422352791,
                          "Y": 0.015182998031377792
                      },
                      {
                          "X": 0.12364393472671509,
                          "Y": 0.016019226983189583
                      },
                      {
                          "X": 0.12302642315626144,
                          "Y": 0.048009637743234634
                      },
                      {
                          "X": 0.04799625650048256,
                          "Y": 0.04715123772621155
                      }
                  ]
              },
              "Id": "762c02d7-4c01-4531-9c11-086bf7781835",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "3dd8178b-f6a0-45f8-991d-d67505823062"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 24.767831802368164,
              "Text": "worl",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.06942474097013474,
                      "Height": 0.03420193865895271,
                      "Left": 0.07282102108001709,
                      "Top": 0.037002984434366226
                  },
                  "Polygon": [
                      {
                          "X": 0.07351317256689072,
                          "Y": 0.037002984434366226
                      },
                      {
                          "X": 0.14224576950073242,
                          "Y": 0.037782933562994
                      },
                      {
                          "X": 0.1416187733411789,
                          "Y": 0.07120492309331894
                      },
                      {
                          "X": 0.07282102108001709,
                          "Y": 0.07040373235940933
                      }
                  ]
              },
              "Id": "30dbd178-1cd3-483a-962b-5b821b77762c",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "41ee4235-c0a0-47e9-9eb5-955e95ff26dd"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 29.58051300048828,
              "Text": "Ueth",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.21486303210258484,
                      "Height": 0.06057402119040489,
                      "Left": 0.7151963114738464,
                      "Top": 0.019497660920023918
                  },
                  "Polygon": [
                      {
                          "X": 0.7153356671333313,
                          "Y": 0.019497660920023918
                      },
                      {
                          "X": 0.929842472076416,
                          "Y": 0.021884620189666748
                      },
                      {
                          "X": 0.9300593733787537,
                          "Y": 0.08007168024778366
                      },
                      {
                          "X": 0.7151963114738464,
                          "Y": 0.07757005840539932
                      }
                  ]
              },
              "Id": "5445914b-f8a1-454e-ae55-817b69725be3",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "5220a9a3-f55a-4b11-ae7c-92b860c8ef50"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 46.48875427246094,
              "Text": "friency",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.09021639823913574,
                      "Height": 0.031470540910959244,
                      "Left": 0.07151820510625839,
                      "Top": 0.07119612395763397
                  },
                  "Polygon": [
                      {
                          "X": 0.07214877009391785,
                          "Y": 0.07119612395763397
                      },
                      {
                          "X": 0.16173459589481354,
                          "Y": 0.07224004715681076
                      },
                      {
                          "X": 0.1611812710762024,
                          "Y": 0.10266666114330292
                      },
                      {
                          "X": 0.07151820510625839,
                          "Y": 0.10159751027822495
                      }
                  ]
              },
              "Id": "45628c0e-7f57-4a97-963a-07ca77821883",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "3b995ad7-1fbf-4f53-a1fd-258d6b3d5f8d"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 55.27861785888672,
              "Text": "46 AAT mu I",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.3362874984741211,
                      "Height": 0.035763781517744064,
                      "Left": 0.27396759390830994,
                      "Top": 0.09279341995716095
                  },
                  "Polygon": [
                      {
                          "X": 0.27444180846214294,
                          "Y": 0.09279341995716095
                      },
                      {
                          "X": 0.6102550625801086,
                          "Y": 0.09676412492990494
                      },
                      {
                          "X": 0.6100837588310242,
                          "Y": 0.1285572052001953
                      },
                      {
                          "X": 0.27396759390830994,
                          "Y": 0.12448801100254059
                      }
                  ]
              },
              "Id": "3b28ab6e-8911-492e-831f-3808919b25df",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "935fe6bf-1cf6-44ef-85d5-e86c92f46ba4",
                          "74e4776f-d4fd-4485-876d-7fdab3e4d827",
                          "90432ed7-f79c-4e62-9d9c-56948960cacf",
                          "6678faa3-dd47-49c4-9df1-cd5ed4e0d5fa"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 83.78646087646484,
              "Text": "NO SMOKING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.24442477524280548,
                      "Height": 0.024009445682168007,
                      "Left": 0.6229217648506165,
                      "Top": 0.09756143391132355
                  },
                  "Polygon": [
                      {
                          "X": 0.6230276823043823,
                          "Y": 0.09756143391132355
                      },
                      {
                          "X": 0.8673056364059448,
                          "Y": 0.10045121610164642
                      },
                      {
                          "X": 0.8673465251922607,
                          "Y": 0.121570885181427
                      },
                      {
                          "X": 0.6229217648506165,
                          "Y": 0.11863362789154053
                      }
                  ]
              },
              "Id": "8d996e89-cbb4-4006-bc37-d4ca4f18399a",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "44f0d914-579a-4e00-a270-364d180b6561",
                          "55d634cc-0040-473d-9a65-640d59832aa1"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 97.60096740722656,
              "Text": "OPR6",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.07613501697778702,
                      "Height": 0.01423902902752161,
                      "Left": 0.8802350759506226,
                      "Top": 0.1128881424665451
                  },
                  "Polygon": [
                      {
                          "X": 0.8802350759506226,
                          "Y": 0.1128881424665451
                      },
                      {
                          "X": 0.9563104510307312,
                          "Y": 0.11379638314247131
                      },
                      {
                          "X": 0.9563700556755066,
                          "Y": 0.12712717056274414
                      },
                      {
                          "X": 0.8802657723426819,
                          "Y": 0.12620960175991058
                      }
                  ]
              },
              "Id": "9c5a95c2-02ab-4e93-b91d-a3556e84c848",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "ad224982-6c2f-4f61-b763-8d859deb915c"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 97.89556121826172,
              "Text": "MOM",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.11827152222394943,
                      "Height": 0.0391656719148159,
                      "Left": 0.23323741555213928,
                      "Top": 0.12206529080867767
                  },
                  "Polygon": [
                      {
                          "X": 0.23384465277194977,
                          "Y": 0.12206529080867767
                      },
                      {
                          "X": 0.3515089452266693,
                          "Y": 0.12348776310682297
                      },
                      {
                          "X": 0.35102754831314087,
                          "Y": 0.16123096644878387
                      },
                      {
                          "X": 0.23323741555213928,
                          "Y": 0.15976740419864655
                      }
                  ]
              },
              "Id": "6fa57008-d074-426f-abe1-ed757734a82a",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "dec9dde8-9138-449b-9527-8734591bf58c"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 82.01026153564453,
              "Text": "To",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.026828089728951454,
                      "Height": 0.013307680375874043,
                      "Left": 0.4410734176635742,
                      "Top": 0.13467702269554138
                  },
                  "Polygon": [
                      {
                          "X": 0.4412057399749756,
                          "Y": 0.13467702269554138
                      },
                      {
                          "X": 0.4679014980792999,
                          "Y": 0.13500215113162994
                      },
                      {
                          "X": 0.4677789807319641,
                          "Y": 0.14798469841480255
                      },
                      {
                          "X": 0.4410734176635742,
                          "Y": 0.1476563662290573
                      }
                  ]
              },
              "Id": "ee2238c9-608b-43cd-9702-6b713b8f5edf",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "45451547-d5cb-4561-b960-d3a15d9429af"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 42.061580657958984,
              "Text": "THERS",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.13717243075370789,
                      "Height": 0.04214225709438324,
                      "Left": 0.2692664861679077,
                      "Top": 0.1506827175617218
                  },
                  "Polygon": [
                      {
                          "X": 0.26987528800964355,
                          "Y": 0.1506827175617218
                      },
                      {
                          "X": 0.4064389169216156,
                          "Y": 0.15236793458461761
                      },
                      {
                          "X": 0.40598657727241516,
                          "Y": 0.19282497465610504
                      },
                      {
                          "X": 0.2692664861679077,
                          "Y": 0.19108860194683075
                      }
                  ]
              },
              "Id": "e97df732-5ead-4798-975d-c97746fa0454",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "4238da7c-87bb-4114-8864-d0addc189a46"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 90.88789367675781,
              "Text": "O. P. D. RECORD",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.14733459055423737,
                      "Height": 0.015615039505064487,
                      "Left": 0.45465636253356934,
                      "Top": 0.15198755264282227
                  },
                  "Polygon": [
                      {
                          "X": 0.45479148626327515,
                          "Y": 0.15198755264282227
                      },
                      {
                          "X": 0.6019909381866455,
                          "Y": 0.15380273759365082
                      },
                      {
                          "X": 0.6019134521484375,
                          "Y": 0.16760258376598358
                      },
                      {
                          "X": 0.45465636253356934,
                          "Y": 0.16576863825321198
                      }
                  ]
              },
              "Id": "4145e162-a5b2-4eab-99f9-d22ede6df249",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "13bb42bf-3f84-43d7-91fa-5e11ae166496",
                          "16b0a790-3e2b-4385-a66c-69038a5bf97d",
                          "f16a66c4-eded-46fa-bff1-60a12ed7be2c",
                          "b330ada5-3600-48b5-999f-6ceeb1605d04"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 99.08197021484375,
              "Text": "5127",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.1091473400592804,
                      "Height": 0.03269708529114723,
                      "Left": 0.7630082368850708,
                      "Top": 0.13736450672149658
                  },
                  "Polygon": [
                      {
                          "X": 0.7630406022071838,
                          "Y": 0.13736450672149658
                      },
                      {
                          "X": 0.8720905780792236,
                          "Y": 0.13869144022464752
                      },
                      {
                          "X": 0.8721556067466736,
                          "Y": 0.17006158828735352
                      },
                      {
                          "X": 0.7630082368850708,
                          "Y": 0.1687031239271164
                      }
                  ]
              },
              "Id": "2c9c7b2e-da50-4982-8abf-5f10fa6442fb",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "7cfa5acc-a2db-4523-bf67-85fa60f35035"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 56.705814361572266,
              "Text": "To fao",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.09894215315580368,
                      "Height": 0.017295287922024727,
                      "Left": 0.6360535025596619,
                      "Top": 0.1727491021156311
                  },
                  "Polygon": [
                      {
                          "X": 0.6361280083656311,
                          "Y": 0.1727491021156311
                      },
                      {
                          "X": 0.7349956631660461,
                          "Y": 0.173984557390213
                      },
                      {
                          "X": 0.7349662780761719,
                          "Y": 0.19004438817501068
                      },
                      {
                          "X": 0.6360535025596619,
                          "Y": 0.18879428505897522
                      }
                  ]
              },
              "Id": "4c979553-b3e9-43a2-ae59-39ab8c68db4c",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "6883257c-5488-4b55-bb7b-64c608accd71",
                          "dd2ed816-bdb6-408e-a822-4d092996a2b5"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 98.69392395019531,
              "Text": "Income",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.06263279169797897,
                      "Height": 0.013638014905154705,
                      "Left": 0.11380179226398468,
                      "Top": 0.19153641164302826
                  },
                  "Polygon": [
                      {
                          "X": 0.11405184864997864,
                          "Y": 0.19153641164302826
                      },
                      {
                          "X": 0.17643459141254425,
                          "Y": 0.1923300325870514
                      },
                      {
                          "X": 0.17620716989040375,
                          "Y": 0.20517443120479584
                      },
                      {
                          "X": 0.11380179226398468,
                          "Y": 0.20437337458133698
                      }
                  ]
              },
              "Id": "56ba65b6-3540-4180-98c2-8935126c3a7b",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "ae68bd65-3a47-4175-92d1-cde3db45b5c4"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 98.9946517944336,
              "Text": "O.P.D. Regn. No.",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.1497906744480133,
                      "Height": 0.015281187370419502,
                      "Left": 0.6357433795928955,
                      "Top": 0.1933208853006363
                  },
                  "Polygon": [
                      {
                          "X": 0.6358055472373962,
                          "Y": 0.1933208853006363
                      },
                      {
                          "X": 0.7855340838432312,
                          "Y": 0.1952192485332489
                      },
                      {
                          "X": 0.785528838634491,
                          "Y": 0.20860207080841064
                      },
                      {
                          "X": 0.6357433795928955,
                          "Y": 0.20668521523475647
                      }
                  ]
              },
              "Id": "9a129255-1a30-4a73-b416-554fd31c9dc6",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "6ac8d217-88b9-480e-a7f2-264d6d2248d7",
                          "8bcb35f8-af6e-4e22-9432-ae951769dc2c",
                          "f7755561-4f78-4485-8ea5-44f60da3111e"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 51.05428695678711,
              "Text": "7/57",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.11035317182540894,
                      "Height": 0.09840262681245804,
                      "Left": 0.8451910614967346,
                      "Top": 0.12928186357021332
                  },
                  "Polygon": [
                      {
                          "X": 0.8451910614967346,
                          "Y": 0.12928186357021332
                      },
                      {
                          "X": 0.9551135897636414,
                          "Y": 0.13061057031154633
                      },
                      {
                          "X": 0.9555442333221436,
                          "Y": 0.22768448293209076
                      },
                      {
                          "X": 0.8453176617622375,
                          "Y": 0.22625738382339478
                      }
                  ]
              },
              "Id": "f44d57b5-5198-48d9-9271-3bccf5610b3a",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "52fb6c22-fe66-4bd3-a05a-711622c62f55"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 39.72267532348633,
              "Text": "HTo fao",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.1515812873840332,
                      "Height": 0.02500523068010807,
                      "Left": 0.40373802185058594,
                      "Top": 0.21110902726650238
                  },
                  "Polygon": [
                      {
                          "X": 0.40399664640426636,
                          "Y": 0.21110902726650238
                      },
                      {
                          "X": 0.5553193092346191,
                          "Y": 0.21305549144744873
                      },
                      {
                          "X": 0.5551594495773315,
                          "Y": 0.2361142486333847
                      },
                      {
                          "X": 0.40373802185058594,
                          "Y": 0.2341354936361313
                      }
                  ]
              },
              "Id": "c756fc5c-59c3-40f4-aa93-bc607826106d",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "156bcf6e-0cab-4839-932c-aa24fd0cd70e",
                          "5e777302-e40b-4755-9e43-ed883f4fb842"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 41.77305221557617,
              "Text": "offeto",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.0765867605805397,
                      "Height": 0.033081188797950745,
                      "Left": 0.7453332543373108,
                      "Top": 0.22268348932266235
                  },
                  "Polygon": [
                      {
                          "X": 0.7453824281692505,
                          "Y": 0.22268348932266235
                      },
                      {
                          "X": 0.8218994736671448,
                          "Y": 0.22367259860038757
                      },
                      {
                          "X": 0.8219200372695923,
                          "Y": 0.2557646632194519
                      },
                      {
                          "X": 0.7453332543373108,
                          "Y": 0.25475287437438965
                      }
                  ]
              },
              "Id": "40f58846-d312-4370-a918-9286d799dc43",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "5ea31774-f682-4159-ba50-03d1a98ac52b"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 97.45577239990234,
              "Text": "A.I.I.M.S. HOSPITAL",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.36206820607185364,
                      "Height": 0.029135799035429955,
                      "Left": 0.34874606132507324,
                      "Top": 0.24004386365413666
                  },
                  "Polygon": [
                      {
                          "X": 0.3490567207336426,
                          "Y": 0.24004386365413666
                      },
                      {
                          "X": 0.7108142375946045,
                          "Y": 0.2447926104068756
                      },
                      {
                          "X": 0.7107529640197754,
                          "Y": 0.26917967200279236
                      },
                      {
                          "X": 0.34874606132507324,
                          "Y": 0.2643493115901947
                      }
                  ]
              },
              "Id": "d2f1a3db-9e82-42dc-8ac1-1cab1e6bfd56",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "2381615b-7fd6-4420-9753-0d080c82639a",
                          "f09d6520-daf5-44c4-99c7-91070799eb8e"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 41.21026611328125,
              "Text": "30 ter",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.07621420174837112,
                      "Height": 0.01869899407029152,
                      "Left": 0.1801440268754959,
                      "Top": 0.26382017135620117
                  },
                  "Polygon": [
                      {
                          "X": 0.180454283952713,
                          "Y": 0.26382017135620117
                      },
                      {
                          "X": 0.25635823607444763,
                          "Y": 0.26483413577079773
                      },
                      {
                          "X": 0.2560858428478241,
                          "Y": 0.2825191617012024
                      },
                      {
                          "X": 0.1801440268754959,
                          "Y": 0.2814927101135254
                      }
                  ]
              },
              "Id": "b7e714ec-bb25-4b10-801b-a26758b7b5d2",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "134fb32d-7f51-4f39-a7e1-bb51b05aa650",
                          "f0a14161-a76f-4637-a18a-5faa6f6b5bb7"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 66.45530700683594,
              "Text": "DUnit",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.05620552599430084,
                      "Height": 0.016759773716330528,
                      "Left": 0.0904061570763588,
                      "Top": 0.2895587980747223
                  },
                  "Polygon": [
                      {
                          "X": 0.09072737395763397,
                          "Y": 0.2895587980747223
                      },
                      {
                          "X": 0.14661169052124023,
                          "Y": 0.2903187572956085
                      },
                      {
                          "X": 0.14631566405296326,
                          "Y": 0.3063185513019562
                      },
                      {
                          "X": 0.0904061570763588,
                          "Y": 0.3055502772331238
                      }
                  ]
              },
              "Id": "abb882f6-7e42-4a77-9ca2-3a7f31a811ed",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "8bb7976e-cb50-4562-abc9-b1ef61383634"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 99.52994537353516,
              "Text": "K. TANDON",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.1473330408334732,
                      "Height": 0.024859583005309105,
                      "Left": 0.1654844582080841,
                      "Top": 0.2796015441417694
                  },
                  "Polygon": [
                      {
                          "X": 0.1658947765827179,
                          "Y": 0.2796015441417694
                      },
                      {
                          "X": 0.3128175139427185,
                          "Y": 0.281585156917572
                      },
                      {
                          "X": 0.3125019669532776,
                          "Y": 0.30446115136146545
                      },
                      {
                          "X": 0.1654844582080841,
                          "Y": 0.30244630575180054
                      }
                  ]
              },
              "Id": "93724263-65d9-4408-a088-a641dfd56ee6",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "85f2d342-9652-44d9-ba6b-eb1574eb7ad2",
                          "c1c8c1d7-a67e-4a0d-baf7-3fb611ccee3e"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 79.74713134765625,
              "Text": "GE CLINIC",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.1782798171043396,
                      "Height": 0.04472224414348602,
                      "Left": 0.7343734502792358,
                      "Top": 0.25961288809776306
                  },
                  "Polygon": [
                      {
                          "X": 0.7344512939453125,
                          "Y": 0.25961288809776306
                      },
                      {
                          "X": 0.912517249584198,
                          "Y": 0.2619732618331909
                      },
                      {
                          "X": 0.9126532673835754,
                          "Y": 0.3043351471424103
                      },
                      {
                          "X": 0.7343734502792358,
                          "Y": 0.3019050657749176
                      }
                  ]
              },
              "Id": "ce02d714-90f8-42e9-b809-51e4977bb902",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "20685cae-ac19-4fd0-bdb5-37fea4b51d45",
                          "d5939ac7-ed12-41a9-8656-65b18160fc41"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 99.8342514038086,
              "Text": "Dept.",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.04512938857078552,
                      "Height": 0.014142487198114395,
                      "Left": 0.7259083986282349,
                      "Top": 0.29579678177833557
                  },
                  "Polygon": [
                      {
                          "X": 0.7259365320205688,
                          "Y": 0.29579678177833557
                      },
                      {
                          "X": 0.7710378170013428,
                          "Y": 0.29640913009643555
                      },
                      {
                          "X": 0.7710269689559937,
                          "Y": 0.30993926525115967
                      },
                      {
                          "X": 0.7259083986282349,
                          "Y": 0.30932125449180603
                      }
                  ]
              },
              "Id": "829a5f4d-3dbf-485b-9d66-9438be1f6449",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "2ab94df9-59fa-4e44-bdce-0f492c0181b4"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 43.743019104003906,
              "Text": "FAT",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.03426191210746765,
                      "Height": 0.015937166288495064,
                      "Left": 0.5166423320770264,
                      "Top": 0.3260548412799835
                  },
                  "Polygon": [
                      {
                          "X": 0.5167660713195801,
                          "Y": 0.3260548412799835
                      },
                      {
                          "X": 0.5509042739868164,
                          "Y": 0.326528400182724
                      },
                      {
                          "X": 0.5507954955101013,
                          "Y": 0.34199202060699463
                      },
                      {
                          "X": 0.5166423320770264,
                          "Y": 0.3415135443210602
                      }
                  ]
              },
              "Id": "f81cd8b4-165a-489c-aacf-a15ad1bf4ccc",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "812a5994-da38-4cc9-a0ae-edcf22e67e2a"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 60.17013168334961,
              "Text": "gar",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.03294433653354645,
                      "Height": 0.012362753972411156,
                      "Left": 0.823658287525177,
                      "Top": 0.3313595652580261
                  },
                  "Polygon": [
                      {
                          "X": 0.823658287525177,
                          "Y": 0.3313595652580261
                      },
                      {
                          "X": 0.8565833568572998,
                          "Y": 0.3318166136741638
                      },
                      {
                          "X": 0.856602668762207,
                          "Y": 0.34372231364250183
                      },
                      {
                          "X": 0.823666512966156,
                          "Y": 0.3432616591453552
                      }
                  ]
              },
              "Id": "25b98046-646f-4541-a39b-5141bbe6c1f2",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "bb77b700-ad5e-400e-8614-dd0474fc8fcb"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 99.5710220336914,
              "Text": "NAME",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.055117759853601456,
                      "Height": 0.012913093902170658,
                      "Left": 0.17236007750034332,
                      "Top": 0.3444611728191376
                  },
                  "Polygon": [
                      {
                          "X": 0.17257532477378845,
                          "Y": 0.3444611728191376
                      },
                      {
                          "X": 0.22747784852981567,
                          "Y": 0.34523409605026245
                      },
                      {
                          "X": 0.2272813618183136,
                          "Y": 0.35737428069114685
                      },
                      {
                          "X": 0.17236007750034332,
                          "Y": 0.35659512877464294
                      }
                  ]
              },
              "Id": "4c215b0e-39b9-4cc5-91a3-f264af6e951d",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "09db556a-de82-4ceb-a52c-2897cf48bdfa"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 99.73475646972656,
              "Text": "Sex",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.03093370981514454,
                      "Height": 0.01242797914892435,
                      "Left": 0.519440233707428,
                      "Top": 0.3477020561695099
                  },
                  "Polygon": [
                      {
                          "X": 0.5195351839065552,
                          "Y": 0.3477020561695099
                      },
                      {
                          "X": 0.550373911857605,
                          "Y": 0.34813573956489563
                      },
                      {
                          "X": 0.5502894520759583,
                          "Y": 0.3601300120353699
                      },
                      {
                          "X": 0.519440233707428,
                          "Y": 0.35969287157058716
                      }
                  ]
              },
              "Id": "1894ae0f-a6a2-46fb-9ff8-09bf19b3c34c",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "d4b786af-30d3-4786-aebc-6c6ff99d3ee1"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 99.51527404785156,
              "Text": "Age",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.03461696207523346,
                      "Height": 0.012650472111999989,
                      "Left": 0.6132961511611938,
                      "Top": 0.34822335839271545
                  },
                  "Polygon": [
                      {
                          "X": 0.6133601665496826,
                          "Y": 0.34822335839271545
                      },
                      {
                          "X": 0.6479131579399109,
                          "Y": 0.3487090468406677
                      },
                      {
                          "X": 0.6478610038757324,
                          "Y": 0.36087384819984436
                      },
                      {
                          "X": 0.6132961511611938,
                          "Y": 0.3603842258453369
                      }
                  ]
              },
              "Id": "72912637-5aa6-45a4-aab9-a01a5ed4dab4",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "fc519694-f657-4b61-b66e-56af68c82a7d"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 99.60099792480469,
              "Text": "Address",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.06934842467308044,
                      "Height": 0.013510841876268387,
                      "Left": 0.8059684634208679,
                      "Top": 0.3480507731437683
                  },
                  "Polygon": [
                      {
                          "X": 0.8059684634208679,
                          "Y": 0.3480507731437683
                      },
                      {
                          "X": 0.8752899169921875,
                          "Y": 0.3490234315395355
                      },
                      {
                          "X": 0.875316858291626,
                          "Y": 0.3615616261959076
                      },
                      {
                          "X": 0.8059707880020142,
                          "Y": 0.3605809211730957
                      }
                  ]
              },
              "Id": "73d7efd5-fd7d-4066-a196-e1cf68bedd7e",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "de57a668-85d0-4525-9da8-2657d1f6651d"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 62.85922622680664,
              "Text": "Madha Afrid",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.2466852217912674,
                      "Height": 0.07730560004711151,
                      "Left": 0.07221845537424088,
                      "Top": 0.34472984075546265
                  },
                  "Polygon": [
                      {
                          "X": 0.07373158633708954,
                          "Y": 0.34472984075546265
                      },
                      {
                          "X": 0.31890368461608887,
                          "Y": 0.34818509221076965
                      },
                      {
                          "X": 0.317899614572525,
                          "Y": 0.42203545570373535
                      },
                      {
                          "X": 0.07221845537424088,
                          "Y": 0.4184114634990692
                      }
                  ]
              },
              "Id": "91ba66e7-dd16-4c72-b6fd-cd188056d96c",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "9dac69b8-b055-4a19-acc4-e571a0da23ed",
                          "d9a75b02-27ed-4003-a6c9-2752232b7983"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 99.20765686035156,
              "Text": "F/S/W/H/D of",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.11579351127147675,
                      "Height": 0.016557985916733742,
                      "Left": 0.34305527806282043,
                      "Top": 0.36466220021247864
                  },
                  "Polygon": [
                      {
                          "X": 0.3432474434375763,
                          "Y": 0.36466220021247864
                      },
                      {
                          "X": 0.458848774433136,
                          "Y": 0.3663080036640167
                      },
                      {
                          "X": 0.45870518684387207,
                          "Y": 0.3812201917171478
                      },
                      {
                          "X": 0.34305527806282043,
                          "Y": 0.37955838441848755
                      }
                  ]
              },
              "Id": "d1ce2189-d084-40e2-ba6c-9b2dc2b8b08d",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "31765d55-3697-48c0-986e-3cceda6c60e0",
                          "547ed139-820d-4991-ae30-d64c01269904"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 99.81615447998047,
              "Text": "25",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.07006408274173737,
                      "Height": 0.03199693188071251,
                      "Left": 0.5074201226234436,
                      "Top": 0.36107179522514343
                  },
                  "Polygon": [
                      {
                          "X": 0.5076757669448853,
                          "Y": 0.36107179522514343
                      },
                      {
                          "X": 0.5774841904640198,
                          "Y": 0.3620619475841522
                      },
                      {
                          "X": 0.5772895812988281,
                          "Y": 0.39306873083114624
                      },
                      {
                          "X": 0.5074201226234436,
                          "Y": 0.39205843210220337
                      }
                  ]
              },
              "Id": "5013027d-b89e-455a-a311-28fea641b51c",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "0b5721a6-4501-4d16-8d96-444d275bb1d9"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 58.06257629394531,
              "Text": "r",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.038904670625925064,
                      "Height": 0.036385077983140945,
                      "Left": 0.6077318787574768,
                      "Top": 0.35815903544425964
                  },
                  "Polygon": [
                      {
                          "X": 0.6079258918762207,
                          "Y": 0.35815903544425964
                      },
                      {
                          "X": 0.6466365456581116,
                          "Y": 0.35870662331581116
                      },
                      {
                          "X": 0.6464816927909851,
                          "Y": 0.3945440948009491
                      },
                      {
                          "X": 0.6077318787574768,
                          "Y": 0.3939836323261261
                      }
                  ]
              },
              "Id": "7f4fd7cf-9451-4c1e-b223-c891b74ae277",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "1bf99db8-2fcf-432e-a60a-53ce5314906a"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 26.587236404418945,
              "Text": "Whereture cohli-",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.3885047137737274,
                      "Height": 0.03829379379749298,
                      "Left": 0.23103755712509155,
                      "Top": 0.40239280462265015
                  },
                  "Polygon": [
                      {
                          "X": 0.23155921697616577,
                          "Y": 0.40239280462265015
                      },
                      {
                          "X": 0.6195422410964966,
                          "Y": 0.40805235505104065
                      },
                      {
                          "X": 0.6193764805793762,
                          "Y": 0.4406866133213043
                      },
                      {
                          "X": 0.23103755712509155,
                          "Y": 0.4349093437194824
                      }
                  ]
              },
              "Id": "a25b5c5e-f18a-406e-9e7a-ca0ec0ea1e39",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "64b81bcd-59bf-45f9-86e7-48366e52de22",
                          "a8cda558-d3c9-4031-a4fa-eec74f5a8842"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 99.71035766601562,
              "Text": "Diagnosis",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.08218327164649963,
                      "Height": 0.015368768014013767,
                      "Left": 0.10261436551809311,
                      "Top": 0.427989661693573
                  },
                  "Polygon": [
                      {
                          "X": 0.10289248824119568,
                          "Y": 0.427989661693573
                      },
                      {
                          "X": 0.18479764461517334,
                          "Y": 0.4292044937610626
                      },
                      {
                          "X": 0.18455205857753754,
                          "Y": 0.4433584213256836
                      },
                      {
                          "X": 0.10261436551809311,
                          "Y": 0.44213277101516724
                      }
                  ]
              },
              "Id": "01945287-ba0f-481d-8f03-aa7614edfc5b",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "a6c9f4d8-0e1d-4497-9eff-533f44be37ca"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 25.511348724365234,
              "Text": "faat",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.05425892770290375,
                      "Height": 0.018049433827400208,
                      "Left": 0.10035345703363419,
                      "Top": 0.4566520154476166
                  },
                  "Polygon": [
                      {
                          "X": 0.10069301724433899,
                          "Y": 0.4566520154476166
                      },
                      {
                          "X": 0.15461237728595734,
                          "Y": 0.4574655294418335
                      },
                      {
                          "X": 0.15429888665676117,
                          "Y": 0.4747014343738556
                      },
                      {
                          "X": 0.10035345703363419,
                          "Y": 0.47387921810150146
                      }
                  ]
              },
              "Id": "07519819-728a-40fd-8b0b-fa47fb9aa162",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "b9c4ceb2-f04c-4e79-b631-64915e6c2850"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 99.85767364501953,
              "Text": "Date",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.04095349460840225,
                      "Height": 0.012860267423093319,
                      "Left": 0.10092471539974213,
                      "Top": 0.4753761887550354
                  },
                  "Polygon": [
                      {
                          "X": 0.10116557776927948,
                          "Y": 0.4753761887550354
                      },
                      {
                          "X": 0.14187821745872498,
                          "Y": 0.47599726915359497
                      },
                      {
                          "X": 0.14165131747722626,
                          "Y": 0.4882364571094513
                      },
                      {
                          "X": 0.10092471539974213,
                          "Y": 0.48761072754859924
                      }
                  ]
              },
              "Id": "3af0fc26-aeb7-4d92-9c6e-ebe1cfb213ea",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "9f713ff7-8c35-45d1-a12c-a6d4bcf4ecac"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 99.80016326904297,
              "Text": "Treatment",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.08343305438756943,
                      "Height": 0.013763020746409893,
                      "Left": 0.5305263996124268,
                      "Top": 0.4787593185901642
                  },
                  "Polygon": [
                      {
                          "X": 0.5306209921836853,
                          "Y": 0.4787593185901642
                      },
                      {
                          "X": 0.6139594316482544,
                          "Y": 0.48002833127975464
                      },
                      {
                          "X": 0.6138941645622253,
                          "Y": 0.49252235889434814
                      },
                      {
                          "X": 0.5305263996124268,
                          "Y": 0.4912436604499817
                      }
                  ]
              },
              "Id": "48536039-2d72-4dec-8d73-46d3d776a6eb",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "0057190d-0c1d-4f6f-afcd-8edb3614f275"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 92.93000793457031,
              "Text": "14/9",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.0945139229297638,
                      "Height": 0.06618105620145798,
                      "Left": 0.03799891099333763,
                      "Top": 0.49293017387390137
                  },
                  "Polygon": [
                      {
                          "X": 0.03938442841172218,
                          "Y": 0.49293017387390137
                      },
                      {
                          "X": 0.13251283764839172,
                          "Y": 0.49436622858047485
                      },
                      {
                          "X": 0.1312960982322693,
                          "Y": 0.5591112375259399
                      },
                      {
                          "X": 0.03799891099333763,
                          "Y": 0.5576186776161194
                      }
                  ]
              },
              "Id": "b1ec2ee0-edc7-488d-9134-34c793f9114f",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "c3dab58a-5af6-4330-996c-fb2010e88260"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 73.89640045166016,
              "Text": "2 tab BD",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.23753221333026886,
                      "Height": 0.03739060088992119,
                      "Left": 0.5887201428413391,
                      "Top": 0.49517425894737244
                  },
                  "Polygon": [
                      {
                          "X": 0.5889197587966919,
                          "Y": 0.49517425894737244
                      },
                      {
                          "X": 0.8262267708778381,
                          "Y": 0.4988204538822174
                      },
                      {
                          "X": 0.8262523412704468,
                          "Y": 0.5325648784637451
                      },
                      {
                          "X": 0.5887201428413391,
                          "Y": 0.5288441777229309
                      }
                  ]
              },
              "Id": "0dfc1d0a-9d42-46fb-aabe-70c393ac6aea",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "5f29fc8f-513b-4524-b8a7-4297e9e69007",
                          "c62bcafb-fe65-494f-811d-a408128cdc61",
                          "566d22eb-dfd2-4279-ae71-9cc9470a56ee"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 63.30584716796875,
              "Text": "Wypohne 3 tas os",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.5358872413635254,
                      "Height": 0.0517871230840683,
                      "Left": 0.2447545826435089,
                      "Top": 0.5367092490196228
                  },
                  "Polygon": [
                      {
                          "X": 0.2454269826412201,
                          "Y": 0.5367092490196228
                      },
                      {
                          "X": 0.7806418538093567,
                          "Y": 0.545155942440033
                      },
                      {
                          "X": 0.7806190252304077,
                          "Y": 0.5884963870048523
                      },
                      {
                          "X": 0.2447545826435089,
                          "Y": 0.5798335075378418
                      }
                  ]
              },
              "Id": "e4f5a297-97cd-4410-88b5-3cd7f5b16f0d",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "6183bb6e-88ea-4028-82c1-42bf2ea449fa",
                          "0fb55e29-4afd-4226-a17a-59815e758da9",
                          "689c711e-9d8f-4069-994c-a4f90658a3d5",
                          "7c120cc1-0354-44db-bce5-dd8b96cae206"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 92.02914428710938,
              "Text": "000",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.055902257561683655,
                      "Height": 0.011151381768286228,
                      "Left": 0.8942099809646606,
                      "Top": 0.5671035051345825
                  },
                  "Polygon": [
                      {
                          "X": 0.8942099809646606,
                          "Y": 0.5671035051345825
                      },
                      {
                          "X": 0.9500687718391418,
                          "Y": 0.567995011806488
                      },
                      {
                          "X": 0.9501122832298279,
                          "Y": 0.5782548785209656
                      },
                      {
                          "X": 0.8942373394966125,
                          "Y": 0.5773580074310303
                      }
                  ]
              },
              "Id": "b065b1cf-17e9-4921-8fba-6429a1c86014",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "edd01508-ee95-4d45-8319-09e723b63804"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 51.68507766723633,
              "Text": "X ? wh",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.17030516266822815,
                      "Height": 0.03163297474384308,
                      "Left": 0.6221923232078552,
                      "Top": 0.5859654545783997
                  },
                  "Polygon": [
                      {
                          "X": 0.6223357915878296,
                          "Y": 0.5859654545783997
                      },
                      {
                          "X": 0.792497456073761,
                          "Y": 0.5887163877487183
                      },
                      {
                          "X": 0.7924919128417969,
                          "Y": 0.6175984740257263
                      },
                      {
                          "X": 0.6221923232078552,
                          "Y": 0.6148017048835754
                      }
                  ]
              },
              "Id": "e6b79f9b-4303-4b40-9d52-f7a9c2d3cdfa",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "99c6b32f-e978-4d93-b22d-624a872725e2",
                          "35556753-bad4-4d45-acb8-12496ecd7322"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 66.6490249633789,
              "Text": "2 the 26s or",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.34864363074302673,
                      "Height": 0.03782591596245766,
                      "Left": 0.42868173122406006,
                      "Top": 0.6213630437850952
                  },
                  "Polygon": [
                      {
                          "X": 0.4290142059326172,
                          "Y": 0.6213630437850952
                      },
                      {
                          "X": 0.7773253321647644,
                          "Y": 0.6271133422851562
                      },
                      {
                          "X": 0.777305543422699,
                          "Y": 0.659188985824585
                      },
                      {
                          "X": 0.42868173122406006,
                          "Y": 0.653334379196167
                      }
                  ]
              },
              "Id": "119040d2-2a96-40f0-ac88-c9ece3983d3c",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "6392c4f2-33c0-4961-8278-c1145dc62d26",
                          "bf490c38-6262-4f00-9b83-264d9722bf4c",
                          "8b06d02a-d671-401d-b44f-06c3161f0162",
                          "ff7d02db-c3ef-4f45-aa12-849df984742d"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 94.93205261230469,
              "Text": "00",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.030866727232933044,
                      "Height": 0.01087992638349533,
                      "Left": 0.8771761655807495,
                      "Top": 0.6427604556083679
                  },
                  "Polygon": [
                      {
                          "X": 0.8771761655807495,
                          "Y": 0.6427604556083679
                      },
                      {
                          "X": 0.908011257648468,
                          "Y": 0.6432732939720154
                      },
                      {
                          "X": 0.9080429077148438,
                          "Y": 0.6536403894424438
                      },
                      {
                          "X": 0.8771988153457642,
                          "Y": 0.6531245112419128
                      }
                  ]
              },
              "Id": "61186512-02d7-4f42-a3c4-782c9f794a20",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "3bd3b917-d7a6-46ca-9319-0cc380885d9c"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 54.6651611328125,
              "Text": "Hgb",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.048564035445451736,
                      "Height": 0.03159789368510246,
                      "Left": 0.03214912861585617,
                      "Top": 0.643310010433197
                  },
                  "Polygon": [
                      {
                          "X": 0.032811298966407776,
                          "Y": 0.643310010433197
                      },
                      {
                          "X": 0.08071316033601761,
                          "Y": 0.6441130042076111
                      },
                      {
                          "X": 0.08009210973978043,
                          "Y": 0.674907922744751
                      },
                      {
                          "X": 0.03214912861585617,
                          "Y": 0.6740910410881042
                      }
                  ]
              },
              "Id": "67b04383-6ade-4246-a220-4dfe7f703652",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "00731c9a-adb7-484d-bc5f-dfc64d5971d4"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 75.85057830810547,
              "Text": "x 5 days",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.16121938824653625,
                      "Height": 0.03471646457910538,
                      "Left": 0.6489865779876709,
                      "Top": 0.6629862189292908
                  },
                  "Polygon": [
                      {
                          "X": 0.6491212248802185,
                          "Y": 0.6629862189292908
                      },
                      {
                          "X": 0.8101962208747864,
                          "Y": 0.6656997203826904
                      },
                      {
                          "X": 0.8102059960365295,
                          "Y": 0.6977026462554932
                      },
                      {
                          "X": 0.6489865779876709,
                          "Y": 0.694940984249115
                      }
                  ]
              },
              "Id": "20d0c9e1-21ba-414d-bd61-fcdb478c97cc",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "96a4a5fb-ef73-4d1a-97b7-22646659c759",
                          "1a295243-a975-401f-bc41-6318c937f8ae"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 65.65172576904297,
              "Text": "Me",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.05056183412671089,
                      "Height": 0.02317528799176216,
                      "Left": 0.03731340542435646,
                      "Top": 0.673555850982666
                  },
                  "Polygon": [
                      {
                          "X": 0.03778986260294914,
                          "Y": 0.673555850982666
                      },
                      {
                          "X": 0.08787523955106735,
                          "Y": 0.6744089126586914
                      },
                      {
                          "X": 0.08742991834878922,
                          "Y": 0.6967311501502991
                      },
                      {
                          "X": 0.03731340542435646,
                          "Y": 0.6958675384521484
                      }
                  ]
              },
              "Id": "1bcff7af-e7da-4bfd-97bc-927333320fac",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "34469a33-5eea-4d92-97ba-da235715fe8e"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 42.01013946533203,
              "Text": "Dic",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.06565796583890915,
                      "Height": 0.021100953221321106,
                      "Left": 0.05345910042524338,
                      "Top": 0.702776312828064
                  },
                  "Polygon": [
                      {
                          "X": 0.05387600511312485,
                          "Y": 0.702776312828064
                      },
                      {
                          "X": 0.11911706626415253,
                          "Y": 0.703904390335083
                      },
                      {
                          "X": 0.11873643100261688,
                          "Y": 0.7238772511482239
                      },
                      {
                          "X": 0.05345910042524338,
                          "Y": 0.7227369546890259
                      }
                  ]
              },
              "Id": "3a0058e3-1b75-403e-a7b7-90e7ab410cc1",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "a773eefa-5a12-4211-b7e6-00e7296aa570"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 53.94317626953125,
              "Text": "a as / his of x-52,",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.5015391111373901,
                      "Height": 0.046376440674066544,
                      "Left": 0.46040618419647217,
                      "Top": 0.7095404863357544
                  },
                  "Polygon": [
                      {
                          "X": 0.4607622027397156,
                          "Y": 0.7095404863357544
                      },
                      {
                          "X": 0.9617737531661987,
                          "Y": 0.7182021737098694
                      },
                      {
                          "X": 0.9619452953338623,
                          "Y": 0.755916953086853
                      },
                      {
                          "X": 0.46040618419647217,
                          "Y": 0.7470787167549133
                      }
                  ]
              },
              "Id": "76a563b8-062c-44d4-90ed-d4dc46f1bff6",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "43a617ed-6da1-4144-bf9b-21d45d6d8432",
                          "25a60650-34e1-4f44-97a3-18a6532dffbb",
                          "dc50c999-8431-47d1-93a8-fc288fac2a69",
                          "6fcf1f6e-0320-4d2a-a138-a59d48924b09",
                          "ea06fa80-18b4-4f3c-81b3-0c83684fa830",
                          "2ea84963-3302-4f1d-9b31-40270cd3f849"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 68.5794677734375,
              "Text": "->",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.0422450453042984,
                      "Height": 0.026671139523386955,
                      "Left": 0.17647498846054077,
                      "Top": 0.7536861896514893
                  },
                  "Polygon": [
                      {
                          "X": 0.1769263595342636,
                          "Y": 0.7536861896514893
                      },
                      {
                          "X": 0.21872003376483917,
                          "Y": 0.7544270157814026
                      },
                      {
                          "X": 0.21829882264137268,
                          "Y": 0.7803573608398438
                      },
                      {
                          "X": 0.17647498846054077,
                          "Y": 0.7796063423156738
                      }
                  ]
              },
              "Id": "df8d5737-86be-411d-88ec-2df13da1fdfb",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "d5676c2f-3d9e-46d2-875f-4e6931560be9"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 69.89997863769531,
              "Text": "Foli and 5 mg has",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.4792632460594177,
                      "Height": 0.055726006627082825,
                      "Left": 0.23166006803512573,
                      "Top": 0.74213045835495
                  },
                  "Polygon": [
                      {
                          "X": 0.23240715265274048,
                          "Y": 0.74213045835495
                      },
                      {
                          "X": 0.7109233140945435,
                          "Y": 0.7505589723587036
                      },
                      {
                          "X": 0.7108063101768494,
                          "Y": 0.7978564500808716
                      },
                      {
                          "X": 0.23166006803512573,
                          "Y": 0.7892157435417175
                      }
                  ]
              },
              "Id": "dbf12091-7284-4c1e-993b-e304639fa57f",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "b33e3ba8-fd79-425f-afd3-c9fce850dbea",
                          "9916222e-c083-4508-98a7-0e65b642ec29",
                          "56815e83-20d9-4123-9304-0b45b87643d6",
                          "05ef94be-14a9-4854-84eb-47ac4c59bf9c"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 51.227657318115234,
              "Text": "/ tes BD x 1 month",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.43236714601516724,
                      "Height": 0.04916108027100563,
                      "Left": 0.5179348587989807,
                      "Top": 0.7940749526023865
                  },
                  "Polygon": [
                      {
                          "X": 0.5182585120201111,
                          "Y": 0.7940749526023865
                      },
                      {
                          "X": 0.9501276612281799,
                          "Y": 0.8018619418144226
                      },
                      {
                          "X": 0.950302004814148,
                          "Y": 0.8432360291481018
                      },
                      {
                          "X": 0.5179348587989807,
                          "Y": 0.8352817296981812
                      }
                  ]
              },
              "Id": "d2856dc9-0969-4171-a548-6c644490292b",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "3d5f3785-67bb-4091-a870-e6eefede2e0d",
                          "b30ebf45-ccba-4efd-9e7e-e019af5b9ae2",
                          "18c05f39-44f5-4291-8189-ca343a24fca6",
                          "a57a91f8-bdcc-4e0a-be3a-37a54dab9ac5",
                          "43473fc2-74fd-4f0a-813f-06a001afe681",
                          "a1f7d333-c5a7-4ddd-94f2-2d70460262a3"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 99.65506744384766,
              "Text": "23",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.036083023995161057,
                      "Height": 0.018637703731656075,
                      "Left": 0.07503761351108551,
                      "Top": 0.8296199440956116
                  },
                  "Polygon": [
                      {
                          "X": 0.07540088891983032,
                          "Y": 0.8296199440956116
                      },
                      {
                          "X": 0.11112063378095627,
                          "Y": 0.8302778601646423
                      },
                      {
                          "X": 0.1107751727104187,
                          "Y": 0.8482576012611389
                      },
                      {
                          "X": 0.07503761351108551,
                          "Y": 0.8475936651229858
                      }
                  ]
              },
              "Id": "0b19579d-c088-4a81-bb0a-250184215d3b",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "71bcff96-1ddf-4f34-9abc-87648bfd3f19"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 74.77666473388672,
              "Text": "Ref to G.I. Surgey for caused 7",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.8044761419296265,
                      "Height": 0.06635536253452301,
                      "Left": 0.15893438458442688,
                      "Top": 0.8281505107879639
                  },
                  "Polygon": [
                      {
                          "X": 0.1598483771085739,
                          "Y": 0.8281505107879639
                      },
                      {
                          "X": 0.9631747007369995,
                          "Y": 0.842925488948822
                      },
                      {
                          "X": 0.9634105563163757,
                          "Y": 0.8945058584213257
                      },
                      {
                          "X": 0.15893438458442688,
                          "Y": 0.8793424963951111
                      }
                  ]
              },
              "Id": "8e5bd4e8-c271-45dc-a117-54f66a645314",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "0feea785-f2cf-4bbc-ac65-4cf8d8e753e3",
                          "e7adebf0-d11b-484a-9e9d-8bf0fffcdee0",
                          "ca6b577e-03bc-4338-940e-14129adaeed9",
                          "01b29c7d-c523-4d05-a06c-d116a8c4b12c",
                          "5aca488d-d140-4425-84a1-6b0d3083ac8e",
                          "7f860500-6a38-4ad1-9b59-007a06020a16",
                          "e2f6ab97-c9db-4c85-8c53-2e0c762efd4b"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 48.5959587097168,
              "Text": "hangers S Ninny",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.504582941532135,
                      "Height": 0.06923249363899231,
                      "Left": 0.2594127655029297,
                      "Top": 0.8627006411552429
                  },
                  "Polygon": [
                      {
                          "X": 0.2603079080581665,
                          "Y": 0.8627006411552429
                      },
                      {
                          "X": 0.7639957070350647,
                          "Y": 0.8721113204956055
                      },
                      {
                          "X": 0.7639367580413818,
                          "Y": 0.9319331645965576
                      },
                      {
                          "X": 0.2594127655029297,
                          "Y": 0.9222392439842224
                      }
                  ]
              },
              "Id": "b0783889-b45e-4163-9f72-f255e9be90ad",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "1f654ce0-3892-40dc-853e-4be4d411a34b",
                          "b2fa0040-09e5-4f29-a277-4c3544eee580",
                          "ae3e4065-adfc-4848-b0a1-80321e62b597"
                      ]
                  }
              ]
          },
          {
              "BlockType": "LINE",
              "Confidence": 23.45681381225586,
              "Text": "Netand",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.24690492451190948,
                      "Height": 0.0331333763897419,
                      "Left": 0.7122930288314819,
                      "Top": 0.9159460067749023
                  },
                  "Polygon": [
                      {
                          "X": 0.712361752986908,
                          "Y": 0.9159460067749023
                      },
                      {
                          "X": 0.9590715169906616,
                          "Y": 0.9206535220146179
                      },
                      {
                          "X": 0.959197998046875,
                          "Y": 0.9490793943405151
                      },
                      {
                          "X": 0.7122930288314819,
                          "Y": 0.9443060755729675
                      }
                  ]
              },
              "Id": "a8f9d6d6-cc42-48e2-a14d-2237f532d67b",
              "Relationships": [
                  {
                      "Type": "CHILD",
                      "Ids": [
                          "41b3be0e-658a-405a-9fd0-02606b52b29a"
                      ]
                  }
              ]
          },
          {
              "BlockType": "WORD",
              "Confidence": 30.12681007385254,
              "Text": "Monel",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.07564767450094223,
                      "Height": 0.03282663971185684,
                      "Left": 0.04799625650048256,
                      "Top": 0.015182998031377792
                  },
                  "Polygon": [
                      {
                          "X": 0.04868181422352791,
                          "Y": 0.015182998031377792
                      },
                      {
                          "X": 0.12364393472671509,
                          "Y": 0.016019226983189583
                      },
                      {
                          "X": 0.12302642315626144,
                          "Y": 0.048009637743234634
                      },
                      {
                          "X": 0.04799625650048256,
                          "Y": 0.04715123772621155
                      }
                  ]
              },
              "Id": "3dd8178b-f6a0-45f8-991d-d67505823062"
          },
          {
              "BlockType": "WORD",
              "Confidence": 24.767831802368164,
              "Text": "worl",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.06942474097013474,
                      "Height": 0.03420193865895271,
                      "Left": 0.07282102108001709,
                      "Top": 0.037002984434366226
                  },
                  "Polygon": [
                      {
                          "X": 0.07351317256689072,
                          "Y": 0.037002984434366226
                      },
                      {
                          "X": 0.14224576950073242,
                          "Y": 0.037782933562994
                      },
                      {
                          "X": 0.1416187733411789,
                          "Y": 0.07120492309331894
                      },
                      {
                          "X": 0.07282102108001709,
                          "Y": 0.07040373235940933
                      }
                  ]
              },
              "Id": "41ee4235-c0a0-47e9-9eb5-955e95ff26dd"
          },
          {
              "BlockType": "WORD",
              "Confidence": 29.58051300048828,
              "Text": "Ueth",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.21486303210258484,
                      "Height": 0.06057402119040489,
                      "Left": 0.7151963114738464,
                      "Top": 0.019497660920023918
                  },
                  "Polygon": [
                      {
                          "X": 0.7153356671333313,
                          "Y": 0.019497660920023918
                      },
                      {
                          "X": 0.929842472076416,
                          "Y": 0.021884620189666748
                      },
                      {
                          "X": 0.9300593733787537,
                          "Y": 0.08007168024778366
                      },
                      {
                          "X": 0.7151963114738464,
                          "Y": 0.07757005840539932
                      }
                  ]
              },
              "Id": "5220a9a3-f55a-4b11-ae7c-92b860c8ef50"
          },
          {
              "BlockType": "WORD",
              "Confidence": 46.48875427246094,
              "Text": "friency",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.09021639823913574,
                      "Height": 0.031470540910959244,
                      "Left": 0.07151820510625839,
                      "Top": 0.07119612395763397
                  },
                  "Polygon": [
                      {
                          "X": 0.07214877009391785,
                          "Y": 0.07119612395763397
                      },
                      {
                          "X": 0.16173459589481354,
                          "Y": 0.07224004715681076
                      },
                      {
                          "X": 0.1611812710762024,
                          "Y": 0.10266666114330292
                      },
                      {
                          "X": 0.07151820510625839,
                          "Y": 0.10159751027822495
                      }
                  ]
              },
              "Id": "3b995ad7-1fbf-4f53-a1fd-258d6b3d5f8d"
          },
          {
              "BlockType": "WORD",
              "Confidence": 26.092708587646484,
              "Text": "46",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.026360230520367622,
                      "Height": 0.023595336824655533,
                      "Left": 0.27402567863464355,
                      "Top": 0.09732390195131302
                  },
                  "Polygon": [
                      {
                          "X": 0.2743740379810333,
                          "Y": 0.09732390195131302
                      },
                      {
                          "X": 0.3003859221935272,
                          "Y": 0.0976325199007988
                      },
                      {
                          "X": 0.30005475878715515,
                          "Y": 0.12091924250125885
                      },
                      {
                          "X": 0.27402567863464355,
                          "Y": 0.12060502171516418
                      }
                  ]
              },
              "Id": "935fe6bf-1cf6-44ef-85d5-e86c92f46ba4"
          },
          {
              "BlockType": "WORD",
              "Confidence": 42.736976623535156,
              "Text": "AAT",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.05733242258429527,
                      "Height": 0.01879069209098816,
                      "Left": 0.5010558366775513,
                      "Top": 0.10187233239412308
                  },
                  "Polygon": [
                      {
                          "X": 0.5012096166610718,
                          "Y": 0.10187233239412308
                      },
                      {
                          "X": 0.5583882331848145,
                          "Y": 0.10255167633295059
                      },
                      {
                          "X": 0.558263897895813,
                          "Y": 0.12066302448511124
                      },
                      {
                          "X": 0.5010558366775513,
                          "Y": 0.11997412890195847
                      }
                  ]
              },
              "Id": "74e4776f-d4fd-4485-876d-7fdab3e4d827"
          },
          {
              "BlockType": "WORD",
              "Confidence": 75.70492553710938,
              "Text": "mu",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.020055005326867104,
                      "Height": 0.032022032886743546,
                      "Left": 0.5706749558448792,
                      "Top": 0.09629856795072556
                  },
                  "Polygon": [
                      {
                          "X": 0.5708819031715393,
                          "Y": 0.09629856795072556
                      },
                      {
                          "X": 0.5907299518585205,
                          "Y": 0.09653325378894806
                      },
                      {
                          "X": 0.5905409455299377,
                          "Y": 0.1283206045627594
                      },
                      {
                          "X": 0.5706749558448792,
                          "Y": 0.1280800998210907
                      }
                  ]
              },
              "Id": "90432ed7-f79c-4e62-9d9c-56948960cacf"
          },
          {
              "BlockType": "WORD",
              "Confidence": 76.5798568725586,
              "Text": "I",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.007455215789377689,
                      "Height": 0.019975362345576286,
                      "Left": 0.60276198387146,
                      "Top": 0.10370058566331863
                  },
                  "Polygon": [
                      {
                          "X": 0.6028733253479004,
                          "Y": 0.10370058566331863
                      },
                      {
                          "X": 0.6102172136306763,
                          "Y": 0.1037878766655922
                      },
                      {
                          "X": 0.6101100444793701,
                          "Y": 0.12367594987154007
                      },
                      {
                          "X": 0.60276198387146,
                          "Y": 0.12358731031417847
                      }
                  ]
              },
              "Id": "6678faa3-dd47-49c4-9df1-cd5ed4e0d5fa"
          },
          {
              "BlockType": "WORD",
              "Confidence": 99.93692779541016,
              "Text": "NO",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.05355644226074219,
                      "Height": 0.021304406225681305,
                      "Left": 0.6229238510131836,
                      "Top": 0.09756143391132355
                  },
                  "Polygon": [
                      {
                          "X": 0.6230276823043823,
                          "Y": 0.09756143391132355
                      },
                      {
                          "X": 0.6764802932739258,
                          "Y": 0.09819377213716507
                      },
                      {
                          "X": 0.6764078736305237,
                          "Y": 0.11886584013700485
                      },
                      {
                          "X": 0.6229238510131836,
                          "Y": 0.11822331696748734
                      }
                  ]
              },
              "Id": "44f0d914-579a-4e00-a270-364d180b6561"
          },
          {
              "BlockType": "WORD",
              "Confidence": 67.63599395751953,
              "Text": "SMOKING",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.18093585968017578,
                      "Height": 0.023257756605744362,
                      "Left": 0.686410665512085,
                      "Top": 0.09831312298774719
                  },
                  "Polygon": [
                      {
                          "X": 0.6864784955978394,
                          "Y": 0.09831312298774719
                      },
                      {
                          "X": 0.8673056364059448,
                          "Y": 0.10045228898525238
                      },
                      {
                          "X": 0.8673465251922607,
                          "Y": 0.121570885181427
                      },
                      {
                          "X": 0.686410665512085,
                          "Y": 0.11939657479524612
                      }
                  ]
              },
              "Id": "55d634cc-0040-473d-9a65-640d59832aa1"
          },
          {
              "BlockType": "WORD",
              "Confidence": 97.60096740722656,
              "Text": "OPR6",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.07613501697778702,
                      "Height": 0.01423902902752161,
                      "Left": 0.8802350759506226,
                      "Top": 0.1128881424665451
                  },
                  "Polygon": [
                      {
                          "X": 0.8802350759506226,
                          "Y": 0.1128881424665451
                      },
                      {
                          "X": 0.9563104510307312,
                          "Y": 0.11379638314247131
                      },
                      {
                          "X": 0.9563700556755066,
                          "Y": 0.12712717056274414
                      },
                      {
                          "X": 0.8802657723426819,
                          "Y": 0.12620960175991058
                      }
                  ]
              },
              "Id": "ad224982-6c2f-4f61-b763-8d859deb915c"
          },
          {
              "BlockType": "WORD",
              "Confidence": 97.89556121826172,
              "Text": "MOM",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.11827152222394943,
                      "Height": 0.0391656719148159,
                      "Left": 0.23323741555213928,
                      "Top": 0.12206529080867767
                  },
                  "Polygon": [
                      {
                          "X": 0.23384465277194977,
                          "Y": 0.12206529080867767
                      },
                      {
                          "X": 0.3515089452266693,
                          "Y": 0.12348776310682297
                      },
                      {
                          "X": 0.35102754831314087,
                          "Y": 0.16123096644878387
                      },
                      {
                          "X": 0.23323741555213928,
                          "Y": 0.15976740419864655
                      }
                  ]
              },
              "Id": "dec9dde8-9138-449b-9527-8734591bf58c"
          },
          {
              "BlockType": "WORD",
              "Confidence": 82.01026153564453,
              "Text": "To",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.026828089728951454,
                      "Height": 0.013307680375874043,
                      "Left": 0.4410734176635742,
                      "Top": 0.13467702269554138
                  },
                  "Polygon": [
                      {
                          "X": 0.4412057399749756,
                          "Y": 0.13467702269554138
                      },
                      {
                          "X": 0.4679014980792999,
                          "Y": 0.13500215113162994
                      },
                      {
                          "X": 0.4677789807319641,
                          "Y": 0.14798469841480255
                      },
                      {
                          "X": 0.4410734176635742,
                          "Y": 0.1476563662290573
                      }
                  ]
              },
              "Id": "45451547-d5cb-4561-b960-d3a15d9429af"
          },
          {
              "BlockType": "WORD",
              "Confidence": 42.061580657958984,
              "Text": "THERS",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.13717243075370789,
                      "Height": 0.04214225709438324,
                      "Left": 0.2692664861679077,
                      "Top": 0.1506827175617218
                  },
                  "Polygon": [
                      {
                          "X": 0.26987528800964355,
                          "Y": 0.1506827175617218
                      },
                      {
                          "X": 0.4064389169216156,
                          "Y": 0.15236793458461761
                      },
                      {
                          "X": 0.40598657727241516,
                          "Y": 0.19282497465610504
                      },
                      {
                          "X": 0.2692664861679077,
                          "Y": 0.19108860194683075
                      }
                  ]
              },
              "Id": "4238da7c-87bb-4114-8864-d0addc189a46"
          },
          {
              "BlockType": "WORD",
              "Confidence": 64.3135986328125,
              "Text": "O.",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.019043849781155586,
                      "Height": 0.011559314094483852,
                      "Left": 0.4546593725681305,
                      "Top": 0.1541362851858139
                  },
                  "Polygon": [
                      {
                          "X": 0.45477041602134705,
                          "Y": 0.1541362851858139
                      },
                      {
                          "X": 0.4737032353878021,
                          "Y": 0.15437011420726776
                      },
                      {
                          "X": 0.47359830141067505,
                          "Y": 0.16569560766220093
                      },
                      {
                          "X": 0.4546593725681305,
                          "Y": 0.1654597818851471
                      }
                  ]
              },
              "Id": "13bb42bf-3f84-43d7-91fa-5e11ae166496"
          },
          {
              "BlockType": "WORD",
              "Confidence": 99.6290054321289,
              "Text": "P.",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.01574552059173584,
                      "Height": 0.01253665890544653,
                      "Left": 0.47969117760658264,
                      "Top": 0.15373852849006653
                  },
                  "Polygon": [
                      {
                          "X": 0.4798033833503723,
                          "Y": 0.15373852849006653
                      },
                      {
                          "X": 0.4954366981983185,
                          "Y": 0.15393151342868805
                      },
                      {
                          "X": 0.49532994627952576,
                          "Y": 0.16627518832683563
                      },
                      {
                          "X": 0.47969117760658264,
                          "Y": 0.16608041524887085
                      }
                  ]
              },
              "Id": "16b0a790-3e2b-4385-a66c-69038a5bf97d"
          },
          {
              "BlockType": "WORD",
              "Confidence": 99.65428924560547,
              "Text": "D.",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.01736041158437729,
                      "Height": 0.011309425346553326,
                      "Left": 0.5054917931556702,
                      "Top": 0.15392307937145233
                  },
                  "Polygon": [
                      {
                          "X": 0.5055844783782959,
                          "Y": 0.15392307937145233
                      },
                      {
                          "X": 0.5228521823883057,
                          "Y": 0.15413622558116913
                      },
                      {
                          "X": 0.5227648615837097,
                          "Y": 0.16523250937461853
                      },
                      {
                          "X": 0.5054917931556702,
                          "Y": 0.16501760482788086
                      }
                  ]
              },
              "Id": "f16a66c4-eded-46fa-bff1-60a12ed7be2c"
          },
          {
              "BlockType": "WORD",
              "Confidence": 99.95467376708984,
              "Text": "RECORD",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.07288070768117905,
                      "Height": 0.013553180731832981,
                      "Left": 0.5291102528572083,
                      "Top": 0.15290521085262299
                  },
                  "Polygon": [
                      {
                          "X": 0.5292074680328369,
                          "Y": 0.15290521085262299
                      },
                      {
                          "X": 0.6019909381866455,
                          "Y": 0.15380273759365082
                      },
                      {
                          "X": 0.6019198894500732,
                          "Y": 0.166458398103714
                      },
                      {
                          "X": 0.5291102528572083,
                          "Y": 0.16555234789848328
                      }
                  ]
              },
              "Id": "b330ada5-3600-48b5-999f-6ceeb1605d04"
          },
          {
              "BlockType": "WORD",
              "Confidence": 99.08197021484375,
              "Text": "5127",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.1091473400592804,
                      "Height": 0.03269708529114723,
                      "Left": 0.7630082368850708,
                      "Top": 0.13736450672149658
                  },
                  "Polygon": [
                      {
                          "X": 0.7630406022071838,
                          "Y": 0.13736450672149658
                      },
                      {
                          "X": 0.8720905780792236,
                          "Y": 0.13869144022464752
                      },
                      {
                          "X": 0.8721556067466736,
                          "Y": 0.17006158828735352
                      },
                      {
                          "X": 0.7630082368850708,
                          "Y": 0.1687031239271164
                      }
                  ]
              },
              "Id": "7cfa5acc-a2db-4523-bf67-85fa60f35035"
          },
          {
              "BlockType": "WORD",
              "Confidence": 90.5758056640625,
              "Text": "To",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.02385587990283966,
                      "Height": 0.011605912819504738,
                      "Left": 0.6360535025596619,
                      "Top": 0.17748931050300598
                  },
                  "Polygon": [
                      {
                          "X": 0.636106014251709,
                          "Y": 0.17748931050300598
                      },
                      {
                          "X": 0.6599094271659851,
                          "Y": 0.17778775095939636
                      },
                      {
                          "X": 0.6598645448684692,
                          "Y": 0.18909521400928497
                      },
                      {
                          "X": 0.6360535025596619,
                          "Y": 0.18879428505897522
                      }
                  ]
              },
              "Id": "6883257c-5488-4b55-bb7b-64c608accd71"
          },
          {
              "BlockType": "WORD",
              "Confidence": 22.835826873779297,
              "Text": "fao",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.02836029604077339,
                      "Height": 0.015730498358607292,
                      "Left": 0.7066353559494019,
                      "Top": 0.17363066971302032
                  },
                  "Polygon": [
                      {
                          "X": 0.7066758871078491,
                          "Y": 0.17363066971302032
                      },
                      {
                          "X": 0.7349956631660461,
                          "Y": 0.173984557390213
                      },
                      {
                          "X": 0.7349675297737122,
                          "Y": 0.18936116993427277
                      },
                      {
                          "X": 0.7066353559494019,
                          "Y": 0.18900325894355774
                      }
                  ]
              },
              "Id": "dd2ed816-bdb6-408e-a822-4d092996a2b5"
          },
          {
              "BlockType": "WORD",
              "Confidence": 98.69392395019531,
              "Text": "Income",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.06263279169797897,
                      "Height": 0.013638014905154705,
                      "Left": 0.11380179226398468,
                      "Top": 0.19153641164302826
                  },
                  "Polygon": [
                      {
                          "X": 0.11405184864997864,
                          "Y": 0.19153641164302826
                      },
                      {
                          "X": 0.17643459141254425,
                          "Y": 0.1923300325870514
                      },
                      {
                          "X": 0.17620716989040375,
                          "Y": 0.20517443120479584
                      },
                      {
                          "X": 0.11380179226398468,
                          "Y": 0.20437337458133698
                      }
                  ]
              },
              "Id": "ae68bd65-3a47-4175-92d1-cde3db45b5c4"
          },
          {
              "BlockType": "WORD",
              "Confidence": 98.0462875366211,
              "Text": "O.P.D.",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.05434073880314827,
                      "Height": 0.01256303209811449,
                      "Left": 0.6357476115226746,
                      "Top": 0.19390912353992462
                  },
                  "Polygon": [
                      {
                          "X": 0.6358028054237366,
                          "Y": 0.19390912353992462
                      },
                      {
                          "X": 0.6900883316993713,
                          "Y": 0.19459767639636993
                      },
                      {
                          "X": 0.6900514960289001,
                          "Y": 0.20647215843200684
                      },
                      {
                          "X": 0.6357476115226746,
                          "Y": 0.20577766001224518
                      }
                  ]
              },
              "Id": "6ac8d217-88b9-480e-a7f2-264d6d2248d7"
          },
          {
              "BlockType": "WORD",
              "Confidence": 99.477783203125,
              "Text": "Regn.",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.04682833328843117,
                      "Height": 0.013835259713232517,
                      "Left": 0.6990199089050293,
                      "Top": 0.19425874948501587
                  },
                  "Polygon": [
                      {
                          "X": 0.6990576386451721,
                          "Y": 0.19425874948501587
                      },
                      {
                          "X": 0.7458482384681702,
                          "Y": 0.1948520392179489
                      },
                      {
                          "X": 0.7458280920982361,
                          "Y": 0.20809400081634521
                      },
                      {
                          "X": 0.6990199089050293,
                          "Y": 0.20749498903751373
                      }
                  ]
              },
              "Id": "8bcb35f8-af6e-4e22-9432-ae951769dc2c"
          },
          {
              "BlockType": "WORD",
              "Confidence": 99.45989227294922,
              "Text": "No.",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.029539527371525764,
                      "Height": 0.011422267183661461,
                      "Left": 0.7559945583343506,
                      "Top": 0.19484488666057587
                  },
                  "Polygon": [
                      {
                          "X": 0.7560081481933594,
                          "Y": 0.19484488666057587
                      },
                      {
                          "X": 0.7855340838432312,
                          "Y": 0.1952192485332489
                      },
                      {
                          "X": 0.7855297327041626,
                          "Y": 0.20626716315746307
                      },
                      {
                          "X": 0.7559945583343506,
                          "Y": 0.20588980615139008
                      }
                  ]
              },
              "Id": "f7755561-4f78-4485-8ea5-44f60da3111e"
          },
          {
              "BlockType": "WORD",
              "Confidence": 51.05428695678711,
              "Text": "7/57",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.11035317182540894,
                      "Height": 0.09840262681245804,
                      "Left": 0.8451910614967346,
                      "Top": 0.12928186357021332
                  },
                  "Polygon": [
                      {
                          "X": 0.8451910614967346,
                          "Y": 0.12928186357021332
                      },
                      {
                          "X": 0.9551135897636414,
                          "Y": 0.13061057031154633
                      },
                      {
                          "X": 0.9555442333221436,
                          "Y": 0.22768448293209076
                      },
                      {
                          "X": 0.8453176617622375,
                          "Y": 0.22625738382339478
                      }
                  ]
              },
              "Id": "52fb6c22-fe66-4bd3-a05a-711622c62f55"
          },
          {
              "BlockType": "WORD",
              "Confidence": 45.091121673583984,
              "Text": "HTo",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.04057684540748596,
                      "Height": 0.015499616041779518,
                      "Left": 0.40373802185058594,
                      "Top": 0.2191641628742218
                  },
                  "Polygon": [
                      {
                          "X": 0.4039061665534973,
                          "Y": 0.2191641628742218
                      },
                      {
                          "X": 0.4443148672580719,
                          "Y": 0.2196868360042572
                      },
                      {
                          "X": 0.44416385889053345,
                          "Y": 0.23466376960277557
                      },
                      {
                          "X": 0.40373802185058594,
                          "Y": 0.2341354936361313
                      }
                  ]
              },
              "Id": "156bcf6e-0cab-4839-932c-aa24fd0cd70e"
          },
          {
              "BlockType": "WORD",
              "Confidence": 34.354225158691406,
              "Text": "fao",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.040837157517671585,
                      "Height": 0.02166907861828804,
                      "Left": 0.5144821405410767,
                      "Top": 0.2125324010848999
                  },
                  "Polygon": [
                      {
                          "X": 0.5146530866622925,
                          "Y": 0.2125324010848999
                      },
                      {
                          "X": 0.5553193092346191,
                          "Y": 0.21305549144744873
                      },
                      {
                          "X": 0.5551727414131165,
                          "Y": 0.23420149087905884
                      },
                      {
                          "X": 0.5144821405410767,
                          "Y": 0.2336704283952713
                      }
                  ]
              },
              "Id": "5e777302-e40b-4755-9e43-ed883f4fb842"
          },
          {
              "BlockType": "WORD",
              "Confidence": 41.77305221557617,
              "Text": "offeto",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.0765867605805397,
                      "Height": 0.033081188797950745,
                      "Left": 0.7453332543373108,
                      "Top": 0.22268348932266235
                  },
                  "Polygon": [
                      {
                          "X": 0.7453824281692505,
                          "Y": 0.22268348932266235
                      },
                      {
                          "X": 0.8218994736671448,
                          "Y": 0.22367259860038757
                      },
                      {
                          "X": 0.8219200372695923,
                          "Y": 0.2557646632194519
                      },
                      {
                          "X": 0.7453332543373108,
                          "Y": 0.25475287437438965
                      }
                  ]
              },
              "Id": "5ea31774-f682-4159-ba50-03d1a98ac52b"
          },
          {
              "BlockType": "WORD",
              "Confidence": 94.99281311035156,
              "Text": "A.I.I.M.S.",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.14811637997627258,
                      "Height": 0.024014517664909363,
                      "Left": 0.34874606132507324,
                      "Top": 0.2423086166381836
                  },
                  "Polygon": [
                      {
                          "X": 0.3490277826786041,
                          "Y": 0.2423086166381836
                      },
                      {
                          "X": 0.4968624413013458,
                          "Y": 0.24425220489501953
                      },
                      {
                          "X": 0.49667295813560486,
                          "Y": 0.26632314920425415
                      },
                      {
                          "X": 0.34874606132507324,
                          "Y": 0.2643493115901947
                      }
                  ]
              },
              "Id": "2381615b-7fd6-4420-9753-0d080c82639a"
          },
          {
              "BlockType": "WORD",
              "Confidence": 99.91873168945312,
              "Text": "HOSPITAL",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.17914071679115295,
                      "Height": 0.023840583860874176,
                      "Left": 0.5316735506057739,
                      "Top": 0.24244318902492523
                  },
                  "Polygon": [
                      {
                          "X": 0.5318364500999451,
                          "Y": 0.24244318902492523
                      },
                      {
                          "X": 0.7108142375946045,
                          "Y": 0.2447926104068756
                      },
                      {
                          "X": 0.710760235786438,
                          "Y": 0.26628378033638
                      },
                      {
                          "X": 0.5316735506057739,
                          "Y": 0.2638987600803375
                      }
                  ]
              },
              "Id": "f09d6520-daf5-44c4-99c7-91070799eb8e"
          },
          {
              "BlockType": "WORD",
              "Confidence": 59.693241119384766,
              "Text": "30",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.02743014320731163,
                      "Height": 0.01782952807843685,
                      "Left": 0.1801440268754959,
                      "Top": 0.26402997970581055
                  },
                  "Polygon": [
                      {
                          "X": 0.18045060336589813,
                          "Y": 0.26402997970581055
                      },
                      {
                          "X": 0.20757417380809784,
                          "Y": 0.26439234614372253
                      },
                      {
                          "X": 0.2072809636592865,
                          "Y": 0.28185951709747314
                      },
                      {
                          "X": 0.1801440268754959,
                          "Y": 0.2814927101135254
                      }
                  ]
              },
              "Id": "134fb32d-7f51-4f39-a7e1-bb51b05aa650"
          },
          {
              "BlockType": "WORD",
              "Confidence": 22.727294921875,
              "Text": "ter",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.04117259755730629,
                      "Height": 0.016135593876242638,
                      "Left": 0.21518562734127045,
                      "Top": 0.2642875611782074
                  },
                  "Polygon": [
                      {
                          "X": 0.21544373035430908,
                          "Y": 0.2642875611782074
                      },
                      {
                          "X": 0.25635823607444763,
                          "Y": 0.26483413577079773
                      },
                      {
                          "X": 0.25611811876296997,
                          "Y": 0.2804231643676758
                      },
                      {
                          "X": 0.21518562734127045,
                          "Y": 0.2798706889152527
                      }
                  ]
              },
              "Id": "f0a14161-a76f-4637-a18a-5faa6f6b5bb7"
          },
          {
              "BlockType": "WORD",
              "Confidence": 66.45530700683594,
              "Text": "DUnit",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.05620552599430084,
                      "Height": 0.016759773716330528,
                      "Left": 0.0904061570763588,
                      "Top": 0.2895587980747223
                  },
                  "Polygon": [
                      {
                          "X": 0.09072737395763397,
                          "Y": 0.2895587980747223
                      },
                      {
                          "X": 0.14661169052124023,
                          "Y": 0.2903187572956085
                      },
                      {
                          "X": 0.14631566405296326,
                          "Y": 0.3063185513019562
                      },
                      {
                          "X": 0.0904061570763588,
                          "Y": 0.3055502772331238
                      }
                  ]
              },
              "Id": "8bb7976e-cb50-4562-abc9-b1ef61383634"
          },
          {
              "BlockType": "WORD",
              "Confidence": 99.18856811523438,
              "Text": "K.",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.02217830717563629,
                      "Height": 0.015001354739069939,
                      "Left": 0.1654844582080841,
                      "Top": 0.2877454161643982
                  },
                  "Polygon": [
                      {
                          "X": 0.1657485067844391,
                          "Y": 0.2877454161643982
                      },
                      {
                          "X": 0.1876627653837204,
                          "Y": 0.2880428731441498
                      },
                      {
                          "X": 0.18740782141685486,
                          "Y": 0.3027467727661133
                      },
                      {
                          "X": 0.1654844582080841,
                          "Y": 0.30244630575180054
                      }
                  ]
              },
              "Id": "85f2d342-9652-44d9-ba6b-eb1574eb7ad2"
          },
          {
              "BlockType": "WORD",
              "Confidence": 99.87132263183594,
              "Text": "TANDON",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.1143755242228508,
                      "Height": 0.023144232109189034,
                      "Left": 0.1984419822692871,
                      "Top": 0.28004592657089233
                  },
                  "Polygon": [
                      {
                          "X": 0.19880947470664978,
                          "Y": 0.28004592657089233
                      },
                      {
                          "X": 0.3128175139427185,
                          "Y": 0.281585156917572
                      },
                      {
                          "X": 0.31251949071884155,
                          "Y": 0.3031901717185974
                      },
                      {
                          "X": 0.1984419822692871,
                          "Y": 0.301628053188324
                      }
                  ]
              },
              "Id": "c1c8c1d7-a67e-4a0d-baf7-3fb611ccee3e"
          },
          {
              "BlockType": "WORD",
              "Confidence": 59.825836181640625,
              "Text": "GE",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.07061963528394699,
                      "Height": 0.029823554679751396,
                      "Left": 0.7343981266021729,
                      "Top": 0.25961288809776306
                  },
                  "Polygon": [
                      {
                          "X": 0.7344512939453125,
                          "Y": 0.25961288809776306
                      },
                      {
                          "X": 0.805013120174408,
                          "Y": 0.2605482339859009
                      },
                      {
                          "X": 0.8050177693367004,
                          "Y": 0.2894364595413208
                      },
                      {
                          "X": 0.7343981266021729,
                          "Y": 0.2884822487831116
                      }
                  ]
              },
              "Id": "20685cae-ac19-4fd0-bdb5-37fea4b51d45"
          },
          {
              "BlockType": "WORD",
              "Confidence": 99.66842651367188,
              "Text": "CLINIC",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.10144129395484924,
                      "Height": 0.03483544662594795,
                      "Left": 0.8112119436264038,
                      "Top": 0.26949968934059143
                  },
                  "Polygon": [
                      {
                          "X": 0.8112119436264038,
                          "Y": 0.26949968934059143
                      },
                      {
                          "X": 0.9125457406044006,
                          "Y": 0.27085089683532715
                      },
                      {
                          "X": 0.9126532673835754,
                          "Y": 0.3043351471424103
                      },
                      {
                          "X": 0.8112232089042664,
                          "Y": 0.3029525876045227
                      }
                  ]
              },
              "Id": "d5939ac7-ed12-41a9-8656-65b18160fc41"
          },
          {
              "BlockType": "WORD",
              "Confidence": 99.8342514038086,
              "Text": "Dept.",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.04512938857078552,
                      "Height": 0.014142487198114395,
                      "Left": 0.7259083986282349,
                      "Top": 0.29579678177833557
                  },
                  "Polygon": [
                      {
                          "X": 0.7259365320205688,
                          "Y": 0.29579678177833557
                      },
                      {
                          "X": 0.7710378170013428,
                          "Y": 0.29640913009643555
                      },
                      {
                          "X": 0.7710269689559937,
                          "Y": 0.30993926525115967
                      },
                      {
                          "X": 0.7259083986282349,
                          "Y": 0.30932125449180603
                      }
                  ]
              },
              "Id": "2ab94df9-59fa-4e44-bdce-0f492c0181b4"
          },
          {
              "BlockType": "WORD",
              "Confidence": 43.743019104003906,
              "Text": "FAT",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.03426191210746765,
                      "Height": 0.015937166288495064,
                      "Left": 0.5166423320770264,
                      "Top": 0.3260548412799835
                  },
                  "Polygon": [
                      {
                          "X": 0.5167660713195801,
                          "Y": 0.3260548412799835
                      },
                      {
                          "X": 0.5509042739868164,
                          "Y": 0.326528400182724
                      },
                      {
                          "X": 0.5507954955101013,
                          "Y": 0.34199202060699463
                      },
                      {
                          "X": 0.5166423320770264,
                          "Y": 0.3415135443210602
                      }
                  ]
              },
              "Id": "812a5994-da38-4cc9-a0ae-edcf22e67e2a"
          },
          {
              "BlockType": "WORD",
              "Confidence": 60.17013168334961,
              "Text": "gar",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.03294433653354645,
                      "Height": 0.012362753972411156,
                      "Left": 0.823658287525177,
                      "Top": 0.3313595652580261
                  },
                  "Polygon": [
                      {
                          "X": 0.823658287525177,
                          "Y": 0.3313595652580261
                      },
                      {
                          "X": 0.8565833568572998,
                          "Y": 0.3318166136741638
                      },
                      {
                          "X": 0.856602668762207,
                          "Y": 0.34372231364250183
                      },
                      {
                          "X": 0.823666512966156,
                          "Y": 0.3432616591453552
                      }
                  ]
              },
              "Id": "bb77b700-ad5e-400e-8614-dd0474fc8fcb"
          },
          {
              "BlockType": "WORD",
              "Confidence": 99.5710220336914,
              "Text": "NAME",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.055117759853601456,
                      "Height": 0.012913093902170658,
                      "Left": 0.17236007750034332,
                      "Top": 0.3444611728191376
                  },
                  "Polygon": [
                      {
                          "X": 0.17257532477378845,
                          "Y": 0.3444611728191376
                      },
                      {
                          "X": 0.22747784852981567,
                          "Y": 0.34523409605026245
                      },
                      {
                          "X": 0.2272813618183136,
                          "Y": 0.35737428069114685
                      },
                      {
                          "X": 0.17236007750034332,
                          "Y": 0.35659512877464294
                      }
                  ]
              },
              "Id": "09db556a-de82-4ceb-a52c-2897cf48bdfa"
          },
          {
              "BlockType": "WORD",
              "Confidence": 99.73475646972656,
              "Text": "Sex",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.03093370981514454,
                      "Height": 0.01242797914892435,
                      "Left": 0.519440233707428,
                      "Top": 0.3477020561695099
                  },
                  "Polygon": [
                      {
                          "X": 0.5195351839065552,
                          "Y": 0.3477020561695099
                      },
                      {
                          "X": 0.550373911857605,
                          "Y": 0.34813573956489563
                      },
                      {
                          "X": 0.5502894520759583,
                          "Y": 0.3601300120353699
                      },
                      {
                          "X": 0.519440233707428,
                          "Y": 0.35969287157058716
                      }
                  ]
              },
              "Id": "d4b786af-30d3-4786-aebc-6c6ff99d3ee1"
          },
          {
              "BlockType": "WORD",
              "Confidence": 99.51527404785156,
              "Text": "Age",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.03461696207523346,
                      "Height": 0.012650472111999989,
                      "Left": 0.6132961511611938,
                      "Top": 0.34822335839271545
                  },
                  "Polygon": [
                      {
                          "X": 0.6133601665496826,
                          "Y": 0.34822335839271545
                      },
                      {
                          "X": 0.6479131579399109,
                          "Y": 0.3487090468406677
                      },
                      {
                          "X": 0.6478610038757324,
                          "Y": 0.36087384819984436
                      },
                      {
                          "X": 0.6132961511611938,
                          "Y": 0.3603842258453369
                      }
                  ]
              },
              "Id": "fc519694-f657-4b61-b66e-56af68c82a7d"
          },
          {
              "BlockType": "WORD",
              "Confidence": 99.60099792480469,
              "Text": "Address",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.06934842467308044,
                      "Height": 0.013510841876268387,
                      "Left": 0.8059684634208679,
                      "Top": 0.3480507731437683
                  },
                  "Polygon": [
                      {
                          "X": 0.8059684634208679,
                          "Y": 0.3480507731437683
                      },
                      {
                          "X": 0.8752899169921875,
                          "Y": 0.3490234315395355
                      },
                      {
                          "X": 0.875316858291626,
                          "Y": 0.3615616261959076
                      },
                      {
                          "X": 0.8059707880020142,
                          "Y": 0.3605809211730957
                      }
                  ]
              },
              "Id": "de57a668-85d0-4525-9da8-2657d1f6651d"
          },
          {
              "BlockType": "WORD",
              "Confidence": 99.77033996582031,
              "Text": "Madha",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.12667231261730194,
                      "Height": 0.0456232950091362,
                      "Left": 0.07261613011360168,
                      "Top": 0.35525941848754883
                  },
                  "Polygon": [
                      {
                          "X": 0.07351534813642502,
                          "Y": 0.35525941848754883
                      },
                      {
                          "X": 0.19928844273090363,
                          "Y": 0.3570437729358673
                      },
                      {
                          "X": 0.1985442042350769,
                          "Y": 0.40088269114494324
                      },
                      {
                          "X": 0.07261613011360168,
                          "Y": 0.399046927690506
                      }
                  ]
              },
              "Id": "9dac69b8-b055-4a19-acc4-e571a0da23ed"
          },
          {
              "BlockType": "WORD",
              "Confidence": 25.9481201171875,
              "Text": "Afrid",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.09941994398832321,
                      "Height": 0.07523445785045624,
                      "Left": 0.21948373317718506,
                      "Top": 0.3468009829521179
                  },
                  "Polygon": [
                      {
                          "X": 0.220691978931427,
                          "Y": 0.3468009829521179
                      },
                      {
                          "X": 0.31890368461608887,
                          "Y": 0.34818509221076965
                      },
                      {
                          "X": 0.317899614572525,
                          "Y": 0.42203545570373535
                      },
                      {
                          "X": 0.21948373317718506,
                          "Y": 0.42058372497558594
                      }
                  ]
              },
              "Id": "d9a75b02-27ed-4003-a6c9-2752232b7983"
          },
          {
              "BlockType": "WORD",
              "Confidence": 98.48682403564453,
              "Text": "F/S/W/H/D",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.09060990810394287,
                      "Height": 0.014900111593306065,
                      "Left": 0.34305527806282043,
                      "Top": 0.36595824360847473
                  },
                  "Polygon": [
                      {
                          "X": 0.3432307243347168,
                          "Y": 0.36595824360847473
                      },
                      {
                          "X": 0.4336651861667633,
                          "Y": 0.3672467768192291
                      },
                      {
                          "X": 0.43352439999580383,
                          "Y": 0.3808583617210388
                      },
                      {
                          "X": 0.34305527806282043,
                          "Y": 0.37955838441848755
                      }
                  ]
              },
              "Id": "31765d55-3697-48c0-986e-3cceda6c60e0"
          },
          {
              "BlockType": "WORD",
              "Confidence": 99.9284896850586,
              "Text": "of",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.0171730387955904,
                      "Height": 0.012251938693225384,
                      "Left": 0.44167575240135193,
                      "Top": 0.36606523394584656
                  },
                  "Polygon": [
                      {
                          "X": 0.4417971670627594,
                          "Y": 0.36606523394584656
                      },
                      {
                          "X": 0.458848774433136,
                          "Y": 0.3663080036640167
                      },
                      {
                          "X": 0.45873314142227173,
                          "Y": 0.3783171772956848
                      },
                      {
                          "X": 0.44167575240135193,
                          "Y": 0.37807250022888184
                      }
                  ]
              },
              "Id": "547ed139-820d-4991-ae30-d64c01269904"
          },
          {
              "BlockType": "WORD",
              "Confidence": 99.81615447998047,
              "Text": "25",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.07006408274173737,
                      "Height": 0.03199693188071251,
                      "Left": 0.5074201226234436,
                      "Top": 0.36107179522514343
                  },
                  "Polygon": [
                      {
                          "X": 0.5076757669448853,
                          "Y": 0.36107179522514343
                      },
                      {
                          "X": 0.5774841904640198,
                          "Y": 0.3620619475841522
                      },
                      {
                          "X": 0.5772895812988281,
                          "Y": 0.39306873083114624
                      },
                      {
                          "X": 0.5074201226234436,
                          "Y": 0.39205843210220337
                      }
                  ]
              },
              "Id": "0b5721a6-4501-4d16-8d96-444d275bb1d9"
          },
          {
              "BlockType": "WORD",
              "Confidence": 58.06257629394531,
              "Text": "r",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.038904670625925064,
                      "Height": 0.036385077983140945,
                      "Left": 0.6077318787574768,
                      "Top": 0.35815903544425964
                  },
                  "Polygon": [
                      {
                          "X": 0.6079258918762207,
                          "Y": 0.35815903544425964
                      },
                      {
                          "X": 0.6466365456581116,
                          "Y": 0.35870662331581116
                      },
                      {
                          "X": 0.6464816927909851,
                          "Y": 0.3945440948009491
                      },
                      {
                          "X": 0.6077318787574768,
                          "Y": 0.3939836323261261
                      }
                  ]
              },
              "Id": "1bf99db8-2fcf-432e-a60a-53ce5314906a"
          },
          {
              "BlockType": "WORD",
              "Confidence": 23.22693634033203,
              "Text": "Whereture",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.2216053307056427,
                      "Height": 0.03165729343891144,
                      "Left": 0.23103991150856018,
                      "Top": 0.40639758110046387
                  },
                  "Polygon": [
                      {
                          "X": 0.2314949631690979,
                          "Y": 0.40639758110046387
                      },
                      {
                          "X": 0.4526452422142029,
                          "Y": 0.4096314311027527
                      },
                      {
                          "X": 0.4523668587207794,
                          "Y": 0.4380548894405365
                      },
                      {
                          "X": 0.23103991150856018,
                          "Y": 0.43476250767707825
                      }
                  ]
              },
              "Id": "64b81bcd-59bf-45f9-86e7-48366e52de22"
          },
          {
              "BlockType": "WORD",
              "Confidence": 29.94753646850586,
              "Text": "cohli-",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.12358441203832626,
                      "Height": 0.03443291038274765,
                      "Left": 0.4959578514099121,
                      "Top": 0.4062536954879761
                  },
                  "Polygon": [
                      {
                          "X": 0.49623697996139526,
                          "Y": 0.4062536954879761
                      },
                      {
                          "X": 0.6195422410964966,
                          "Y": 0.40805235505104065
                      },
                      {
                          "X": 0.6193764805793762,
                          "Y": 0.4406866133213043
                      },
                      {
                          "X": 0.4959578514099121,
                          "Y": 0.4388505220413208
                      }
                  ]
              },
              "Id": "a8cda558-d3c9-4031-a4fa-eec74f5a8842"
          },
          {
              "BlockType": "WORD",
              "Confidence": 99.71035766601562,
              "Text": "Diagnosis",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.08218327164649963,
                      "Height": 0.015368768014013767,
                      "Left": 0.10261436551809311,
                      "Top": 0.427989661693573
                  },
                  "Polygon": [
                      {
                          "X": 0.10289248824119568,
                          "Y": 0.427989661693573
                      },
                      {
                          "X": 0.18479764461517334,
                          "Y": 0.4292044937610626
                      },
                      {
                          "X": 0.18455205857753754,
                          "Y": 0.4433584213256836
                      },
                      {
                          "X": 0.10261436551809311,
                          "Y": 0.44213277101516724
                      }
                  ]
              },
              "Id": "a6c9f4d8-0e1d-4497-9eff-533f44be37ca"
          },
          {
              "BlockType": "WORD",
              "Confidence": 25.511348724365234,
              "Text": "faat",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.05425892770290375,
                      "Height": 0.018049433827400208,
                      "Left": 0.10035345703363419,
                      "Top": 0.4566520154476166
                  },
                  "Polygon": [
                      {
                          "X": 0.10069301724433899,
                          "Y": 0.4566520154476166
                      },
                      {
                          "X": 0.15461237728595734,
                          "Y": 0.4574655294418335
                      },
                      {
                          "X": 0.15429888665676117,
                          "Y": 0.4747014343738556
                      },
                      {
                          "X": 0.10035345703363419,
                          "Y": 0.47387921810150146
                      }
                  ]
              },
              "Id": "b9c4ceb2-f04c-4e79-b631-64915e6c2850"
          },
          {
              "BlockType": "WORD",
              "Confidence": 99.85767364501953,
              "Text": "Date",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.04095349460840225,
                      "Height": 0.012860267423093319,
                      "Left": 0.10092471539974213,
                      "Top": 0.4753761887550354
                  },
                  "Polygon": [
                      {
                          "X": 0.10116557776927948,
                          "Y": 0.4753761887550354
                      },
                      {
                          "X": 0.14187821745872498,
                          "Y": 0.47599726915359497
                      },
                      {
                          "X": 0.14165131747722626,
                          "Y": 0.4882364571094513
                      },
                      {
                          "X": 0.10092471539974213,
                          "Y": 0.48761072754859924
                      }
                  ]
              },
              "Id": "9f713ff7-8c35-45d1-a12c-a6d4bcf4ecac"
          },
          {
              "BlockType": "WORD",
              "Confidence": 99.80016326904297,
              "Text": "Treatment",
              "TextType": "PRINTED",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.08343305438756943,
                      "Height": 0.013763020746409893,
                      "Left": 0.5305263996124268,
                      "Top": 0.4787593185901642
                  },
                  "Polygon": [
                      {
                          "X": 0.5306209921836853,
                          "Y": 0.4787593185901642
                      },
                      {
                          "X": 0.6139594316482544,
                          "Y": 0.48002833127975464
                      },
                      {
                          "X": 0.6138941645622253,
                          "Y": 0.49252235889434814
                      },
                      {
                          "X": 0.5305263996124268,
                          "Y": 0.4912436604499817
                      }
                  ]
              },
              "Id": "0057190d-0c1d-4f6f-afcd-8edb3614f275"
          },
          {
              "BlockType": "WORD",
              "Confidence": 92.93000793457031,
              "Text": "14/9",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.0945139229297638,
                      "Height": 0.06618105620145798,
                      "Left": 0.03799891099333763,
                      "Top": 0.49293017387390137
                  },
                  "Polygon": [
                      {
                          "X": 0.03938442841172218,
                          "Y": 0.49293017387390137
                      },
                      {
                          "X": 0.13251283764839172,
                          "Y": 0.49436622858047485
                      },
                      {
                          "X": 0.1312960982322693,
                          "Y": 0.5591112375259399
                      },
                      {
                          "X": 0.03799891099333763,
                          "Y": 0.5576186776161194
                      }
                  ]
              },
              "Id": "c3dab58a-5af6-4330-996c-fb2010e88260"
          },
          {
              "BlockType": "WORD",
              "Confidence": 85.76448822021484,
              "Text": "2",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.034064363688230515,
                      "Height": 0.0232683215290308,
                      "Left": 0.58878493309021,
                      "Top": 0.49517425894737244
                  },
                  "Polygon": [
                      {
                          "X": 0.5889197587966919,
                          "Y": 0.49517425894737244
                      },
                      {
                          "X": 0.6228492856025696,
                          "Y": 0.4956955909729004
                      },
                      {
                          "X": 0.6227361559867859,
                          "Y": 0.5184425711631775
                      },
                      {
                          "X": 0.58878493309021,
                          "Y": 0.5179140567779541
                      }
                  ]
              },
              "Id": "5f29fc8f-513b-4524-b8a7-4297e9e69007"
          },
          {
              "BlockType": "WORD",
              "Confidence": 98.17239379882812,
              "Text": "tab",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.07370024919509888,
                      "Height": 0.026718702167272568,
                      "Left": 0.6398657560348511,
                      "Top": 0.4978131055831909
                  },
                  "Polygon": [
                      {
                          "X": 0.6399805545806885,
                          "Y": 0.4978131055831909
                      },
                      {
                          "X": 0.71356600522995,
                          "Y": 0.4989449381828308
                      },
                      {
                          "X": 0.7135041356086731,
                          "Y": 0.5245317816734314
                      },
                      {
                          "X": 0.6398657560348511,
                          "Y": 0.5233824253082275
                      }
                  ]
              },
              "Id": "c62bcafb-fe65-494f-811d-a408128cdc61"
          },
          {
              "BlockType": "WORD",
              "Confidence": 37.7523307800293,
              "Text": "BD",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.062034908682107925,
                      "Height": 0.028821971267461777,
                      "Left": 0.7642174363136292,
                      "Top": 0.5037428736686707
                  },
                  "Polygon": [
                      {
                          "X": 0.7642449736595154,
                          "Y": 0.5037428736686707
                      },
                      {
                          "X": 0.8262311816215515,
                          "Y": 0.5046985149383545
                      },
                      {
                          "X": 0.8262523412704468,
                          "Y": 0.5325648784637451
                      },
                      {
                          "X": 0.7642174363136292,
                          "Y": 0.5315931439399719
                      }
                  ]
              },
              "Id": "566d22eb-dfd2-4279-ae71-9cc9470a56ee"
          },
          {
              "BlockType": "WORD",
              "Confidence": 17.10405731201172,
              "Text": "Wypohne",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.24164599180221558,
                      "Height": 0.042330607771873474,
                      "Left": 0.2447545826435089,
                      "Top": 0.5414038896560669
                  },
                  "Polygon": [
                      {
                          "X": 0.24535377323627472,
                          "Y": 0.5414038896560669
                      },
                      {
                          "X": 0.4864005744457245,
                          "Y": 0.5452181696891785
                      },
                      {
                          "X": 0.48606136441230774,
                          "Y": 0.5837345123291016
                      },
                      {
                          "X": 0.2447545826435089,
                          "Y": 0.5798335075378418
                      }
                  ]
              },
              "Id": "6183bb6e-88ea-4028-82c1-42bf2ea449fa"
          },
          {
              "BlockType": "WORD",
              "Confidence": 99.98296356201172,
              "Text": "3",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.021699298173189163,
                      "Height": 0.023618612438440323,
                      "Left": 0.5515867471694946,
                      "Top": 0.5437893271446228
                  },
                  "Polygon": [
                      {
                          "X": 0.5517489314079285,
                          "Y": 0.5437893271446228
                      },
                      {
                          "X": 0.5732860565185547,
                          "Y": 0.5441296100616455
                      },
                      {
                          "X": 0.5731379389762878,
                          "Y": 0.5674079060554504
                      },
                      {
                          "X": 0.5515867471694946,
                          "Y": 0.5670629143714905
                      }
                  ]
              },
              "Id": "0fb55e29-4afd-4226-a17a-59815e758da9"
          },
          {
              "BlockType": "WORD",
              "Confidence": 79.71612548828125,
              "Text": "tas",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.0658869668841362,
                      "Height": 0.025476079434156418,
                      "Left": 0.6086124777793884,
                      "Top": 0.542443037033081
                  },
                  "Polygon": [
                      {
                          "X": 0.6087434887886047,
                          "Y": 0.542443037033081
                      },
                      {
                          "X": 0.6744994521141052,
                          "Y": 0.5434808135032654
                      },
                      {
                          "X": 0.6744136214256287,
                          "Y": 0.567919135093689
                      },
                      {
                          "X": 0.6086124777793884,
                          "Y": 0.566866397857666
                      }
                  ]
              },
              "Id": "689c711e-9d8f-4069-994c-a4f90658a3d5"
          },
          {
              "BlockType": "WORD",
              "Confidence": 56.42025375366211,
              "Text": "os",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.05043679103255272,
                      "Height": 0.022628679871559143,
                      "Left": 0.73020339012146,
                      "Top": 0.5474992990493774
                  },
                  "Polygon": [
                      {
                          "X": 0.73024582862854,
                          "Y": 0.5474992990493774
                      },
                      {
                          "X": 0.780640184879303,
                          "Y": 0.5482960343360901
                      },
                      {
                          "X": 0.7806287407875061,
                          "Y": 0.5701279640197754
                      },
                      {
                          "X": 0.73020339012146,
                          "Y": 0.5693209767341614
                      }
                  ]
              },
              "Id": "7c120cc1-0354-44db-bce5-dd8b96cae206"
          },
          {
              "BlockType": "WORD",
              "Confidence": 92.02914428710938,
              "Text": "000",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.055902257561683655,
                      "Height": 0.011151381768286228,
                      "Left": 0.8942099809646606,
                      "Top": 0.5671035051345825
                  },
                  "Polygon": [
                      {
                          "X": 0.8942099809646606,
                          "Y": 0.5671035051345825
                      },
                      {
                          "X": 0.9500687718391418,
                          "Y": 0.567995011806488
                      },
                      {
                          "X": 0.9501122832298279,
                          "Y": 0.5782548785209656
                      },
                      {
                          "X": 0.8942373394966125,
                          "Y": 0.5773580074310303
                      }
                  ]
              },
              "Id": "edd01508-ee95-4d45-8319-09e723b63804"
          },
          {
              "BlockType": "WORD",
              "Confidence": 43.8520622253418,
              "Text": "X ?",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.0731833353638649,
                      "Height": 0.029608627781271935,
                      "Left": 0.6221923232078552,
                      "Top": 0.5863935947418213
                  },
                  "Polygon": [
                      {
                          "X": 0.6223336458206177,
                          "Y": 0.5863935947418213
                      },
                      {
                          "X": 0.6953756809234619,
                          "Y": 0.5875746607780457
                      },
                      {
                          "X": 0.695292592048645,
                          "Y": 0.6160022020339966
                      },
                      {
                          "X": 0.6221923232078552,
                          "Y": 0.6148017048835754
                      }
                  ]
              },
              "Id": "99c6b32f-e978-4d93-b22d-624a872725e2"
          },
          {
              "BlockType": "WORD",
              "Confidence": 59.51809310913086,
              "Text": "wh",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.06985912472009659,
                      "Height": 0.022316396236419678,
                      "Left": 0.7226383686065674,
                      "Top": 0.5875877737998962
                  },
                  "Polygon": [
                      {
                          "X": 0.7226839661598206,
                          "Y": 0.5875877737998962
                      },
                      {
                          "X": 0.792497456073761,
                          "Y": 0.5887163877487183
                      },
                      {
                          "X": 0.7924934029579163,
                          "Y": 0.6099041700363159
                      },
                      {
                          "X": 0.7226383686065674,
                          "Y": 0.608761727809906
                      }
                  ]
              },
              "Id": "35556753-bad4-4d45-acb8-12496ecd7322"
          },
          {
              "BlockType": "WORD",
              "Confidence": 92.92711639404297,
              "Text": "2",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.02484859898686409,
                      "Height": 0.017959121614694595,
                      "Left": 0.4287698268890381,
                      "Top": 0.627314567565918
                  },
                  "Polygon": [
                      {
                          "X": 0.42895230650901794,
                          "Y": 0.627314567565918
                      },
                      {
                          "X": 0.45361843705177307,
                          "Y": 0.6277230978012085
                      },
                      {
                          "X": 0.453448086977005,
                          "Y": 0.6452736854553223
                      },
                      {
                          "X": 0.4287698268890381,
                          "Y": 0.644861102104187
                      }
                  ]
              },
              "Id": "6392c4f2-33c0-4961-8278-c1145dc62d26"
          },
          {
              "BlockType": "WORD",
              "Confidence": 97.86537170410156,
              "Text": "the",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.06704097986221313,
                      "Height": 0.02721448615193367,
                      "Left": 0.47601065039634705,
                      "Top": 0.6221428513526917
                  },
                  "Polygon": [
                      {
                          "X": 0.4762474000453949,
                          "Y": 0.6221428513526917
                      },
                      {
                          "X": 0.5430516004562378,
                          "Y": 0.6232457160949707
                      },
                      {
                          "X": 0.5428637266159058,
                          "Y": 0.6493573188781738
                      },
                      {
                          "X": 0.47601065039634705,
                          "Y": 0.6482381224632263
                      }
                  ]
              },
              "Id": "bf490c38-6262-4f00-9b83-264d9722bf4c"
          },
          {
              "BlockType": "WORD",
              "Confidence": 30.01580810546875,
              "Text": "26s",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.0806044414639473,
                      "Height": 0.028017958626151085,
                      "Left": 0.5914679765701294,
                      "Top": 0.6251813173294067
                  },
                  "Polygon": [
                      {
                          "X": 0.5916234850883484,
                          "Y": 0.6251813173294067
                      },
                      {
                          "X": 0.6720724105834961,
                          "Y": 0.6265102624893188
                      },
                      {
                          "X": 0.6719770431518555,
                          "Y": 0.6531992554664612
                      },
                      {
                          "X": 0.5914679765701294,
                          "Y": 0.6518502831459045
                      }
                  ]
              },
              "Id": "8b06d02a-d671-401d-b44f-06c3161f0162"
          },
          {
              "BlockType": "WORD",
              "Confidence": 45.787803649902344,
              "Text": "or",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.061716485768556595,
                      "Height": 0.026626668870449066,
                      "Left": 0.715604841709137,
                      "Top": 0.6325622797012329
                  },
                  "Polygon": [
                      {
                          "X": 0.7156649827957153,
                          "Y": 0.6325622797012329
                      },
                      {
                          "X": 0.7773213386535645,
                          "Y": 0.6335837244987488
                      },
                      {
                          "X": 0.777305543422699,
                          "Y": 0.659188985824585
                      },
                      {
                          "X": 0.715604841709137,
                          "Y": 0.6581528186798096
                      }
                  ]
              },
              "Id": "ff7d02db-c3ef-4f45-aa12-849df984742d"
          },
          {
              "BlockType": "WORD",
              "Confidence": 94.93205261230469,
              "Text": "00",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.030866727232933044,
                      "Height": 0.01087992638349533,
                      "Left": 0.8771761655807495,
                      "Top": 0.6427604556083679
                  },
                  "Polygon": [
                      {
                          "X": 0.8771761655807495,
                          "Y": 0.6427604556083679
                      },
                      {
                          "X": 0.908011257648468,
                          "Y": 0.6432732939720154
                      },
                      {
                          "X": 0.9080429077148438,
                          "Y": 0.6536403894424438
                      },
                      {
                          "X": 0.8771988153457642,
                          "Y": 0.6531245112419128
                      }
                  ]
              },
              "Id": "3bd3b917-d7a6-46ca-9319-0cc380885d9c"
          },
          {
              "BlockType": "WORD",
              "Confidence": 54.6651611328125,
              "Text": "Hgb",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.048564035445451736,
                      "Height": 0.03159789368510246,
                      "Left": 0.03214912861585617,
                      "Top": 0.643310010433197
                  },
                  "Polygon": [
                      {
                          "X": 0.032811298966407776,
                          "Y": 0.643310010433197
                      },
                      {
                          "X": 0.08071316033601761,
                          "Y": 0.6441130042076111
                      },
                      {
                          "X": 0.08009210973978043,
                          "Y": 0.674907922744751
                      },
                      {
                          "X": 0.03214912861585617,
                          "Y": 0.6740910410881042
                      }
                  ]
              },
              "Id": "00731c9a-adb7-484d-bc5f-dfc64d5971d4"
          },
          {
              "BlockType": "WORD",
              "Confidence": 55.72362518310547,
              "Text": "x 5",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.08162543177604675,
                      "Height": 0.027071792632341385,
                      "Left": 0.6490103006362915,
                      "Top": 0.6636332273483276
                  },
                  "Polygon": [
                      {
                          "X": 0.6491184830665588,
                          "Y": 0.6636332273483276
                      },
                      {
                          "X": 0.7306357622146606,
                          "Y": 0.6650069952011108
                      },
                      {
                          "X": 0.7305862307548523,
                          "Y": 0.6907050609588623
                      },
                      {
                          "X": 0.6490103006362915,
                          "Y": 0.6893117427825928
                      }
                  ]
              },
              "Id": "96a4a5fb-ef73-4d1a-97b7-22646659c759"
          },
          {
              "BlockType": "WORD",
              "Confidence": 95.97752380371094,
              "Text": "days",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.07424398511648178,
                      "Height": 0.033252567052841187,
                      "Left": 0.7359619736671448,
                      "Top": 0.6644501090049744
                  },
                  "Polygon": [
                      {
                          "X": 0.7360187768936157,
                          "Y": 0.6644501090049744
                      },
                      {
                          "X": 0.8101962208747864,
                          "Y": 0.6656997203826904
                      },
                      {
                          "X": 0.8102059960365295,
                          "Y": 0.6977026462554932
                      },
                      {
                          "X": 0.7359619736671448,
                          "Y": 0.6964308619499207
                      }
                  ]
              },
              "Id": "1a295243-a975-401f-bc41-6318c937f8ae"
          },
          {
              "BlockType": "WORD",
              "Confidence": 65.65172576904297,
              "Text": "Me",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.05056183412671089,
                      "Height": 0.02317528799176216,
                      "Left": 0.03731340542435646,
                      "Top": 0.673555850982666
                  },
                  "Polygon": [
                      {
                          "X": 0.03778986260294914,
                          "Y": 0.673555850982666
                      },
                      {
                          "X": 0.08787523955106735,
                          "Y": 0.6744089126586914
                      },
                      {
                          "X": 0.08742991834878922,
                          "Y": 0.6967311501502991
                      },
                      {
                          "X": 0.03731340542435646,
                          "Y": 0.6958675384521484
                      }
                  ]
              },
              "Id": "34469a33-5eea-4d92-97ba-da235715fe8e"
          },
          {
              "BlockType": "WORD",
              "Confidence": 42.01013946533203,
              "Text": "Dic",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.06565796583890915,
                      "Height": 0.021100953221321106,
                      "Left": 0.05345910042524338,
                      "Top": 0.702776312828064
                  },
                  "Polygon": [
                      {
                          "X": 0.05387600511312485,
                          "Y": 0.702776312828064
                      },
                      {
                          "X": 0.11911706626415253,
                          "Y": 0.703904390335083
                      },
                      {
                          "X": 0.11873643100261688,
                          "Y": 0.7238772511482239
                      },
                      {
                          "X": 0.05345910042524338,
                          "Y": 0.7227369546890259
                      }
                  ]
              },
              "Id": "a773eefa-5a12-4211-b7e6-00e7296aa570"
          },
          {
              "BlockType": "WORD",
              "Confidence": 90.71820068359375,
              "Text": "a",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.07332739979028702,
                      "Height": 0.023497553542256355,
                      "Left": 0.4605484902858734,
                      "Top": 0.7098575830459595
                  },
                  "Polygon": [
                      {
                          "X": 0.4607592225074768,
                          "Y": 0.7098575830459595
                      },
                      {
                          "X": 0.5338758826255798,
                          "Y": 0.7111219167709351
                      },
                      {
                          "X": 0.5337105393409729,
                          "Y": 0.7333551645278931
                      },
                      {
                          "X": 0.4605484902858734,
                          "Y": 0.7320756316184998
                      }
                  ]
              },
              "Id": "43a617ed-6da1-4144-bf9b-21d45d6d8432"
          },
          {
              "BlockType": "WORD",
              "Confidence": 29.137493133544922,
              "Text": "as",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.05898929759860039,
                      "Height": 0.01863139681518078,
                      "Left": 0.5578416585922241,
                      "Top": 0.7136045098304749
                  },
                  "Polygon": [
                      {
                          "X": 0.5579606890678406,
                          "Y": 0.7136045098304749
                      },
                      {
                          "X": 0.6168309450149536,
                          "Y": 0.7146235704421997
                      },
                      {
                          "X": 0.6167409420013428,
                          "Y": 0.7322359085083008
                      },
                      {
                          "X": 0.5578416585922241,
                          "Y": 0.7312071919441223
                      }
                  ]
              },
              "Id": "25a60650-34e1-4f44-97a3-18a6532dffbb"
          },
          {
              "BlockType": "WORD",
              "Confidence": 67.60977935791016,
              "Text": "/",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.015285414643585682,
                      "Height": 0.02386876754462719,
                      "Left": 0.6531979441642761,
                      "Top": 0.7140865921974182
                  },
                  "Polygon": [
                      {
                          "X": 0.6532945036888123,
                          "Y": 0.7140865921974182
                      },
                      {
                          "X": 0.6684833765029907,
                          "Y": 0.7143493294715881
                      },
                      {
                          "X": 0.6683968305587769,
                          "Y": 0.7379553318023682
                      },
                      {
                          "X": 0.6531979441642761,
                          "Y": 0.737689197063446
                      }
                  ]
              },
              "Id": "dc50c999-8431-47d1-93a8-fc288fac2a69"
          },
          {
              "BlockType": "WORD",
              "Confidence": 76.67054748535156,
              "Text": "his",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.04885909706354141,
                      "Height": 0.024086181074380875,
                      "Left": 0.6932096481323242,
                      "Top": 0.7135603427886963
                  },
                  "Polygon": [
                      {
                          "X": 0.6932786703109741,
                          "Y": 0.7135603427886963
                      },
                      {
                          "X": 0.7420687675476074,
                          "Y": 0.7144038677215576
                      },
                      {
                          "X": 0.7420315146446228,
                          "Y": 0.7376465201377869
                      },
                      {
                          "X": 0.6932096481323242,
                          "Y": 0.7367923855781555
                      }
                  ]
              },
              "Id": "6fcf1f6e-0320-4d2a-a138-a59d48924b09"
          },
          {
              "BlockType": "WORD",
              "Confidence": 37.848411560058594,
              "Text": "of",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.039207734167575836,
                      "Height": 0.02222450263798237,
                      "Left": 0.7700464725494385,
                      "Top": 0.721401035785675
                  },
                  "Polygon": [
                      {
                          "X": 0.770064115524292,
                          "Y": 0.721401035785675
                      },
                      {
                          "X": 0.8092482089996338,
                          "Y": 0.7220807075500488
                      },
                      {
                          "X": 0.8092541694641113,
                          "Y": 0.7436255216598511
                      },
                      {
                          "X": 0.7700464725494385,
                          "Y": 0.7429379224777222
                      }
                  ]
              },
              "Id": "ea06fa80-18b4-4f3c-81b3-0c83684fa830"
          },
          {
              "BlockType": "WORD",
              "Confidence": 21.674610137939453,
              "Text": "x-52,",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.12947720289230347,
                      "Height": 0.03505222871899605,
                      "Left": 0.8324681520462036,
                      "Top": 0.7208647131919861
                  },
                  "Polygon": [
                      {
                          "X": 0.8324681520462036,
                          "Y": 0.7208647131919861
                      },
                      {
                          "X": 0.9617960453033447,
                          "Y": 0.7231062054634094
                      },
                      {
                          "X": 0.9619452953338623,
                          "Y": 0.755916953086853
                      },
                      {
                          "X": 0.8324985504150391,
                          "Y": 0.753635823726654
                      }
                  ]
              },
              "Id": "2ea84963-3302-4f1d-9b31-40270cd3f849"
          },
          {
              "BlockType": "WORD",
              "Confidence": 68.5794677734375,
              "Text": "->",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.0422450453042984,
                      "Height": 0.026671139523386955,
                      "Left": 0.17647498846054077,
                      "Top": 0.7536861896514893
                  },
                  "Polygon": [
                      {
                          "X": 0.1769263595342636,
                          "Y": 0.7536861896514893
                      },
                      {
                          "X": 0.21872003376483917,
                          "Y": 0.7544270157814026
                      },
                      {
                          "X": 0.21829882264137268,
                          "Y": 0.7803573608398438
                      },
                      {
                          "X": 0.17647498846054077,
                          "Y": 0.7796063423156738
                      }
                  ]
              },
              "Id": "d5676c2f-3d9e-46d2-875f-4e6931560be9"
          },
          {
              "BlockType": "WORD",
              "Confidence": 92.40518188476562,
              "Text": "Foli",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.1021200641989708,
                      "Height": 0.03690885379910469,
                      "Left": 0.2317931056022644,
                      "Top": 0.7457475662231445
                  },
                  "Polygon": [
                      {
                          "X": 0.23234975337982178,
                          "Y": 0.7457475662231445
                      },
                      {
                          "X": 0.3339131772518158,
                          "Y": 0.747539758682251
                      },
                      {
                          "X": 0.33345580101013184,
                          "Y": 0.7826564311981201
                      },
                      {
                          "X": 0.2317931056022644,
                          "Y": 0.7808306813240051
                      }
                  ]
              },
              "Id": "b33e3ba8-fd79-425f-afd3-c9fce850dbea"
          },
          {
              "BlockType": "WORD",
              "Confidence": 81.30310821533203,
              "Text": "and",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.08158253878355026,
                      "Height": 0.025387214496731758,
                      "Left": 0.3878587782382965,
                      "Top": 0.7580397725105286
                  },
                  "Polygon": [
                      {
                          "X": 0.3881340026855469,
                          "Y": 0.7580397725105286
                      },
                      {
                          "X": 0.469441294670105,
                          "Y": 0.7594814300537109
                      },
                      {
                          "X": 0.4692203402519226,
                          "Y": 0.7834270000457764
                      },
                      {
                          "X": 0.3878587782382965,
                          "Y": 0.781967043876648
                      }
                  ]
              },
              "Id": "9916222e-c083-4508-98a7-0e65b642ec29"
          },
          {
              "BlockType": "WORD",
              "Confidence": 46.12440490722656,
              "Text": "5 mg",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.09620923548936844,
                      "Height": 0.030192511156201363,
                      "Left": 0.5108417272567749,
                      "Top": 0.7657901048660278
                  },
                  "Polygon": [
                      {
                          "X": 0.5110712051391602,
                          "Y": 0.7657901048660278
                      },
                      {
                          "X": 0.6070510149002075,
                          "Y": 0.7674967050552368
                      },
                      {
                          "X": 0.60689777135849,
                          "Y": 0.7959825992584229
                      },
                      {
                          "X": 0.5108417272567749,
                          "Y": 0.7942503690719604
                      }
                  ]
              },
              "Id": "56815e83-20d9-4123-9304-0b45b87643d6"
          },
          {
              "BlockType": "WORD",
              "Confidence": 59.767234802246094,
              "Text": "has",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.08396435528993607,
                      "Height": 0.03809836506843567,
                      "Left": 0.626958966255188,
                      "Top": 0.7490831613540649
                  },
                  "Polygon": [
                      {
                          "X": 0.6271352767944336,
                          "Y": 0.7490831613540649
                      },
                      {
                          "X": 0.7109233140945435,
                          "Y": 0.7505589723587036
                      },
                      {
                          "X": 0.7108327150344849,
                          "Y": 0.787181556224823
                      },
                      {
                          "X": 0.626958966255188,
                          "Y": 0.7856769561767578
                      }
                  ]
              },
              "Id": "05ef94be-14a9-4854-84eb-47ac4c59bf9c"
          },
          {
              "BlockType": "WORD",
              "Confidence": 80.6455307006836,
              "Text": "/",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.012756714597344398,
                      "Height": 0.017550410702824593,
                      "Left": 0.5180477499961853,
                      "Top": 0.8035892844200134
                  },
                  "Polygon": [
                      {
                          "X": 0.5181837677955627,
                          "Y": 0.8035892844200134
                      },
                      {
                          "X": 0.530804455280304,
                          "Y": 0.803817868232727
                      },
                      {
                          "X": 0.5306745171546936,
                          "Y": 0.8211396932601929
                      },
                      {
                          "X": 0.5180477499961853,
                          "Y": 0.8209090232849121
                      }
                  ]
              },
              "Id": "3d5f3785-67bb-4091-a870-e6eefede2e0d"
          },
          {
              "BlockType": "WORD",
              "Confidence": 32.166446685791016,
              "Text": "tes",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.08599387854337692,
                      "Height": 0.028010012581944466,
                      "Left": 0.5311520099639893,
                      "Top": 0.7943110466003418
                  },
                  "Polygon": [
                      {
                          "X": 0.5313500165939331,
                          "Y": 0.7943110466003418
                      },
                      {
                          "X": 0.6171458959579468,
                          "Y": 0.7958579659461975
                      },
                      {
                          "X": 0.6170111298561096,
                          "Y": 0.8223210573196411
                      },
                      {
                          "X": 0.5311520099639893,
                          "Y": 0.820752739906311
                      }
                  ]
              },
              "Id": "b30ebf45-ccba-4efd-9e7e-e019af5b9ae2"
          },
          {
              "BlockType": "WORD",
              "Confidence": 27.059762954711914,
              "Text": "BD",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.06872881203889847,
                      "Height": 0.04203332960605621,
                      "Left": 0.6458294987678528,
                      "Top": 0.7966191172599792
                  },
                  "Polygon": [
                      {
                          "X": 0.6460041999816895,
                          "Y": 0.7966191172599792
                      },
                      {
                          "X": 0.7145583033561707,
                          "Y": 0.7978553771972656
                      },
                      {
                          "X": 0.7144616842269897,
                          "Y": 0.838652491569519
                      },
                      {
                          "X": 0.6458294987678528,
                          "Y": 0.8373900055885315
                      }
                  ]
              },
              "Id": "18c05f39-44f5-4291-8189-ca343a24fca6"
          },
          {
              "BlockType": "WORD",
              "Confidence": 42.2682991027832,
              "Text": "x",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.049688003957271576,
                      "Height": 0.035863447934389114,
                      "Left": 0.7243249416351318,
                      "Top": 0.8041289448738098
                  },
                  "Polygon": [
                      {
                          "X": 0.724398136138916,
                          "Y": 0.8041289448738098
                      },
                      {
                          "X": 0.7740129828453064,
                          "Y": 0.8050263524055481
                      },
                      {
                          "X": 0.7739881873130798,
                          "Y": 0.8399924039840698
                      },
                      {
                          "X": 0.7243249416351318,
                          "Y": 0.8390787243843079
                      }
                  ]
              },
              "Id": "a57a91f8-bdcc-4e0a-be3a-37a54dab9ac5"
          },
          {
              "BlockType": "WORD",
              "Confidence": 43.30770492553711,
              "Text": "1",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.015526529401540756,
                      "Height": 0.027116572484374046,
                      "Left": 0.8060406446456909,
                      "Top": 0.8025715947151184
                  },
                  "Polygon": [
                      {
                          "X": 0.8060406446456909,
                          "Y": 0.8025715947151184
                      },
                      {
                          "X": 0.8215505480766296,
                          "Y": 0.802851676940918
                      },
                      {
                          "X": 0.821567177772522,
                          "Y": 0.8296881318092346
                      },
                      {
                          "X": 0.8060457110404968,
                          "Y": 0.8294041156768799
                      }
                  ]
              },
              "Id": "43473fc2-74fd-4f0a-813f-06a001afe681"
          },
          {
              "BlockType": "WORD",
              "Confidence": 81.9181900024414,
              "Text": "month",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.11854323744773865,
                      "Height": 0.025688471272587776,
                      "Left": 0.831718385219574,
                      "Top": 0.8079659938812256
                  },
                  "Polygon": [
                      {
                          "X": 0.831718385219574,
                          "Y": 0.8079659938812256
                      },
                      {
                          "X": 0.950162410736084,
                          "Y": 0.8101102709770203
                      },
                      {
                          "X": 0.950261652469635,
                          "Y": 0.8336544632911682
                      },
                      {
                          "X": 0.8317396640777588,
                          "Y": 0.8314840793609619
                      }
                  ]
              },
              "Id": "a1f7d333-c5a7-4ddd-94f2-2d70460262a3"
          },
          {
              "BlockType": "WORD",
              "Confidence": 99.65506744384766,
              "Text": "23",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.036083023995161057,
                      "Height": 0.018637703731656075,
                      "Left": 0.07503761351108551,
                      "Top": 0.8296199440956116
                  },
                  "Polygon": [
                      {
                          "X": 0.07540088891983032,
                          "Y": 0.8296199440956116
                      },
                      {
                          "X": 0.11112063378095627,
                          "Y": 0.8302778601646423
                      },
                      {
                          "X": 0.1107751727104187,
                          "Y": 0.8482576012611389
                      },
                      {
                          "X": 0.07503761351108551,
                          "Y": 0.8475936651229858
                      }
                  ]
              },
              "Id": "71bcff96-1ddf-4f34-9abc-87648bfd3f19"
          },
          {
              "BlockType": "WORD",
              "Confidence": 32.90352249145508,
              "Text": "Ref",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.15880998969078064,
                      "Height": 0.04732014611363411,
                      "Left": 0.1590087115764618,
                      "Top": 0.8308354616165161
                  },
                  "Polygon": [
                      {
                          "X": 0.1598004400730133,
                          "Y": 0.8308354616165161
                      },
                      {
                          "X": 0.31781870126724243,
                          "Y": 0.8337455987930298
                      },
                      {
                          "X": 0.3172217309474945,
                          "Y": 0.8781556487083435
                      },
                      {
                          "X": 0.1590087115764618,
                          "Y": 0.8751794099807739
                      }
                  ]
              },
              "Id": "0feea785-f2cf-4bbc-ac65-4cf8d8e753e3"
          },
          {
              "BlockType": "WORD",
              "Confidence": 99.8892593383789,
              "Text": "to",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.04221319779753685,
                      "Height": 0.029927752912044525,
                      "Left": 0.35280826687812805,
                      "Top": 0.8345642685890198
                  },
                  "Polygon": [
                      {
                          "X": 0.3531712591648102,
                          "Y": 0.8345642685890198
                      },
                      {
                          "X": 0.3950214684009552,
                          "Y": 0.8353350162506104
                      },
                      {
                          "X": 0.39469239115715027,
                          "Y": 0.8644919991493225
                      },
                      {
                          "X": 0.35280826687812805,
                          "Y": 0.8637097477912903
                      }
                  ]
              },
              "Id": "e7adebf0-d11b-484a-9e9d-8bf0fffcdee0"
          },
          {
              "BlockType": "WORD",
              "Confidence": 91.65739440917969,
              "Text": "G.I.",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.08727359026670456,
                      "Height": 0.035442836582660675,
                      "Left": 0.43925100564956665,
                      "Top": 0.8357150554656982
                  },
                  "Polygon": [
                      {
                          "X": 0.43959057331085205,
                          "Y": 0.8357150554656982
                      },
                      {
                          "X": 0.5265246033668518,
                          "Y": 0.8373158574104309
                      },
                      {
                          "X": 0.526266872882843,
                          "Y": 0.8711578845977783
                      },
                      {
                          "X": 0.43925100564956665,
                          "Y": 0.8695294260978699
                      }
                  ]
              },
              "Id": "ca6b577e-03bc-4338-940e-14129adaeed9"
          },
          {
              "BlockType": "WORD",
              "Confidence": 76.52875518798828,
              "Text": "Surgey",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.1943425089120865,
                      "Height": 0.05503972992300987,
                      "Left": 0.544808566570282,
                      "Top": 0.8352375030517578
                  },
                  "Polygon": [
                      {
                          "X": 0.5451730489730835,
                          "Y": 0.8352375030517578
                      },
                      {
                          "X": 0.7391510605812073,
                          "Y": 0.8388051986694336
                      },
                      {
                          "X": 0.7390645742416382,
                          "Y": 0.8902772068977356
                      },
                      {
                          "X": 0.544808566570282,
                          "Y": 0.8866157531738281
                      }
                  ]
              },
              "Id": "01b29c7d-c523-4d05-a06c-d116a8c4b12c"
          },
          {
              "BlockType": "WORD",
              "Confidence": 98.8202133178711,
              "Text": "for",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.061561670154333115,
                      "Height": 0.02651798352599144,
                      "Left": 0.7478634119033813,
                      "Top": 0.8453158736228943
                  },
                  "Polygon": [
                      {
                          "X": 0.7478998303413391,
                          "Y": 0.8453158736228943
                      },
                      {
                          "X": 0.8094179034233093,
                          "Y": 0.8464508056640625
                      },
                      {
                          "X": 0.8094250559806824,
                          "Y": 0.871833860874176
                      },
                      {
                          "X": 0.7478634119033813,
                          "Y": 0.8706843256950378
                      }
                  ]
              },
              "Id": "5aca488d-d140-4425-84a1-6b0d3083ac8e"
          },
          {
              "BlockType": "WORD",
              "Confidence": 24.11393928527832,
              "Text": "caused",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.10447900742292404,
                      "Height": 0.022188859060406685,
                      "Left": 0.8331281542778015,
                      "Top": 0.8504068851470947
                  },
                  "Polygon": [
                      {
                          "X": 0.8331281542778015,
                          "Y": 0.8504068851470947
                      },
                      {
                          "X": 0.9375290274620056,
                          "Y": 0.8523362278938293
                      },
                      {
                          "X": 0.9376071691513062,
                          "Y": 0.8725957870483398
                      },
                      {
                          "X": 0.8331472277641296,
                          "Y": 0.8706466555595398
                      }
                  ]
              },
              "Id": "7f860500-6a38-4ad1-9b59-007a06020a16"
          },
          {
              "BlockType": "WORD",
              "Confidence": 99.5235595703125,
              "Text": "7",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.02176380157470703,
                      "Height": 0.017424024641513824,
                      "Left": 0.9416056275367737,
                      "Top": 0.8680926561355591
                  },
                  "Polygon": [
                      {
                          "X": 0.9416056275367737,
                          "Y": 0.8680926561355591
                      },
                      {
                          "X": 0.9632916450500488,
                          "Y": 0.8684964179992676
                      },
                      {
                          "X": 0.9633694291114807,
                          "Y": 0.8855167031288147
                      },
                      {
                          "X": 0.9416731595993042,
                          "Y": 0.8851094841957092
                      }
                  ]
              },
              "Id": "e2f6ab97-c9db-4c85-8c53-2e0c762efd4b"
          },
          {
              "BlockType": "WORD",
              "Confidence": 21.310283660888672,
              "Text": "hangers",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.21693623065948486,
                      "Height": 0.059484630823135376,
                      "Left": 0.2594127655029297,
                      "Top": 0.8669131994247437
                  },
                  "Polygon": [
                      {
                          "X": 0.26024457812309265,
                          "Y": 0.8669131994247437
                      },
                      {
                          "X": 0.47634896636009216,
                          "Y": 0.8709589242935181
                      },
                      {
                          "X": 0.47584962844848633,
                          "Y": 0.9263978600502014
                      },
                      {
                          "X": 0.2594127655029297,
                          "Y": 0.9222392439842224
                      }
                  ]
              },
              "Id": "1f654ce0-3892-40dc-853e-4be4d411a34b"
          },
          {
              "BlockType": "WORD",
              "Confidence": 98.62908935546875,
              "Text": "S",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.02432343363761902,
                      "Height": 0.025844432413578033,
                      "Left": 0.5081523060798645,
                      "Top": 0.8759605288505554
                  },
                  "Polygon": [
                      {
                          "X": 0.5083582997322083,
                          "Y": 0.8759605288505554
                      },
                      {
                          "X": 0.5324757695198059,
                          "Y": 0.8764129877090454
                      },
                      {
                          "X": 0.5322868227958679,
                          "Y": 0.9018049836158752
                      },
                      {
                          "X": 0.5081523060798645,
                          "Y": 0.901346743106842
                      }
                  ]
              },
              "Id": "b2fa0040-09e5-4f29-a277-4c3544eee580"
          },
          {
              "BlockType": "WORD",
              "Confidence": 25.8485050201416,
              "Text": "Ninny",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.2089352011680603,
                      "Height": 0.05003724992275238,
                      "Left": 0.5550605058670044,
                      "Top": 0.8682135343551636
                  },
                  "Polygon": [
                      {
                          "X": 0.5553737878799438,
                          "Y": 0.8682135343551636
                      },
                      {
                          "X": 0.7639957070350647,
                          "Y": 0.8721113204956055
                      },
                      {
                          "X": 0.7639502286911011,
                          "Y": 0.9182507991790771
                      },
                      {
                          "X": 0.5550605058670044,
                          "Y": 0.9142625331878662
                      }
                  ]
              },
              "Id": "ae3e4065-adfc-4848-b0a1-80321e62b597"
          },
          {
              "BlockType": "WORD",
              "Confidence": 23.45681381225586,
              "Text": "Netand",
              "TextType": "HANDWRITING",
              "Geometry": {
                  "BoundingBox": {
                      "Width": 0.24690492451190948,
                      "Height": 0.0331333763897419,
                      "Left": 0.7122930288314819,
                      "Top": 0.9159460067749023
                  },
                  "Polygon": [
                      {
                          "X": 0.712361752986908,
                          "Y": 0.9159460067749023
                      },
                      {
                          "X": 0.9590715169906616,
                          "Y": 0.9206535220146179
                      },
                      {
                          "X": 0.959197998046875,
                          "Y": 0.9490793943405151
                      },
                      {
                          "X": 0.7122930288314819,
                          "Y": 0.9443060755729675
                      }
                  ]
              },
              "Id": "41b3be0e-658a-405a-9fd0-02606b52b29a"
          }
      ]}
      />
    </div>
  )
}
