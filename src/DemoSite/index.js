// @flow
import React from "react"
import Annotator from "../Annotator"
let editable_data = [
  {
    title: "sku",
    mandatory: "non-mandatory",
    input_type: "textArea",
    other_value: [],
    default_type: "sku",
    display_label: "sku",
    other_default_value: "",
    history_hide: true,
    readonly: true,
    content: 1,
  },
  {
    title: "image_url",
    mandatory: "non-mandatory",
    input_type: "image_ocr_annotation",
    other_value: [],
    default_type: "image_url",
    display_label: "image_url",
    other_default_value: "",
    history_hide: true,
    readonly: true,
    content:
      "https://netscribes-development.s3.ap-south-1.amazonaws.com/sample_images/Prescription_samples/108305-1650045029_2.jpg",
  },
  {
    title: "doctors_name",
    mandatory: "mandatory",
    input_type: "textArea",
    other_value: [],
    default_type: "doctors_name",
    display_label: "doctors_name",
    other_default_value: "",
    history_hide: true,
    readonly: true,
    content: null,
  },
  {
    title: "doctors_qualification",
    mandatory: "non-mandatory",
    input_type: "textArea",
    other_value: [],
    default_type: "doctors_qualification",
    display_label: "doctors_qualification",
    other_default_value: "",
    history_hide: true,
    readonly: true,
    content: null,
  },
  {
    title: "prescription_visit_date",
    mandatory: "non-mandatory",
    input_type: "textArea",
    other_value: [],
    default_type: "prescription_visit_date",
    display_label: "prescription_visit_date",
    other_default_value: "",
    history_hide: true,
    readonly: true,
    content: null,
  },
  {
    title: "patient_name",
    mandatory: "mandatory",
    input_type: "textArea",
    other_value: [],
    default_type: "patient_name",
    display_label: "patient_name",
    other_default_value: "",
    history_hide: true,
    readonly: true,
    content: null,
  },
  {
    title: "hospital_address",
    mandatory: "non-mandatory",
    input_type: "textArea",
    other_value: [],
    default_type: "hospital_address",
    display_label: "hospital_address",
    other_default_value: "",
    history_hide: true,
    readonly: true,
    content: null,
  },
  {
    title: "medicine_name_with_strength",
    mandatory: "non-mandatory",
    input_type: "textArea",
    other_value: [],
    default_type: "medicine_name_with_strength",
    display_label: "medicine_name_with_strength",
    other_default_value: "",
    history_hide: true,
    readonly: true,
    content: null,
  },
  {
    title: "medicine1",
    mandatory: "non-mandatory",
    input_type: "textArea",
    other_value: [],
    default_type: "medicine1",
    display_label: "medicine1",
    other_default_value: "",
    history_hide: true,
    readonly: true,
    content: null,
  },
  {
    title: "dosage1",
    mandatory: "non-mandatory",
    input_type: "textArea",
    other_value: [],
    default_type: "dosage1",
    display_label: "dosage1",
    other_default_value: "",
    history_hide: true,
    readonly: true,
    content: null,
  },
  {
    title: "duration1",
    mandatory: "non-mandatory",
    input_type: "textArea",
    other_value: [],
    default_type: "duration1",
    display_label: "duration1",
    other_default_value: "",
    history_hide: true,
    readonly: true,
    content: null,
  },
  {
    title: "medicine2",
    mandatory: "non-mandatory",
    input_type: "textArea",
    other_value: [],
    default_type: "medicine2",
    display_label: "medicine2",
    other_default_value: "",
    history_hide: true,
    readonly: true,
    content: null,
  },
  {
    title: "dosage2",
    mandatory: "non-mandatory",
    input_type: "textArea",
    other_value: [],
    default_type: "dosage2",
    display_label: "dosage2",
    other_default_value: "",
    history_hide: true,
    readonly: true,
    content: null,
  },
  {
    title: "duration2",
    mandatory: "non-mandatory",
    input_type: "textArea",
    other_value: [],
    default_type: "duration2",
    display_label: "duration2",
    other_default_value: "",
    history_hide: true,
    readonly: true,
    content: null,
  },
  {
    title: "medicine3",
    mandatory: "non-mandatory",
    input_type: "textArea",
    other_value: [],
    default_type: "medicine3",
    display_label: "medicine3",
    other_default_value: "",
    history_hide: true,
    readonly: true,
    content: null,
  },
  {
    title: "dosage3",
    mandatory: "non-mandatory",
    input_type: "textArea",
    other_value: [],
    default_type: "dosage3",
    display_label: "dosage3",
    other_default_value: "",
    history_hide: true,
    readonly: true,
    content: null,
  },
  {
    title: "duration3",
    mandatory: "non-mandatory",
    input_type: "textArea",
    other_value: [],
    default_type: "duration3",
    display_label: "duration3",
    other_default_value: "",
    history_hide: true,
    readonly: true,
    content: null,
  },
  {
    title: "medicine4",
    mandatory: "non-mandatory",
    input_type: "textArea",
    other_value: [],
    default_type: "medicine4",
    display_label: "medicine4",
    other_default_value: "",
    history_hide: true,
    readonly: true,
    content: null,
  },
  {
    title: "dosage4",
    mandatory: "non-mandatory",
    input_type: "textArea",
    other_value: [],
    default_type: "dosage4",
    display_label: "dosage4",
    other_default_value: "",
    history_hide: true,
    readonly: true,
    content: null,
  },
  {
    title: "duration4",
    mandatory: "non-mandatory",
    input_type: "textArea",
    other_value: [],
    default_type: "duration4",
    display_label: "duration4",
    other_default_value: "",
    history_hide: true,
    readonly: true,
    content: null,
  },
  {
    title: "medicine5",
    mandatory: "non-mandatory",
    input_type: "textArea",
    other_value: [],
    default_type: "medicine5",
    display_label: "medicine5",
    other_default_value: "",
    history_hide: true,
    readonly: true,
    content: null,
  },
  {
    title: "dosage5",
    mandatory: "non-mandatory",
    input_type: "textArea",
    other_value: [],
    default_type: "dosage5",
    display_label: "dosage5",
    other_default_value: "",
    history_hide: true,
    readonly: true,
    content: null,
  },
  {
    title: "duration5",
    mandatory: "non-mandatory",
    input_type: "textArea",
    other_value: [],
    default_type: "duration5",
    display_label: "duration5",
    other_default_value: "",
    history_hide: true,
    readonly: true,
    content: null,
  },
  {
    title: "medicine6",
    mandatory: "non-mandatory",
    input_type: "textArea",
    other_value: [],
    default_type: "medicine6",
    display_label: "medicine6",
    other_default_value: "",
    history_hide: true,
    readonly: true,
    content: null,
  },
  {
    title: "dosage6",
    mandatory: "non-mandatory",
    input_type: "textArea",
    other_value: [],
    default_type: "dosage6",
    display_label: "dosage6",
    other_default_value: "",
    history_hide: true,
    readonly: true,
    content: null,
  },
  {
    title: "duration6",
    mandatory: "non-mandatory",
    input_type: "textArea",
    other_value: [],
    default_type: "duration6",
    display_label: "duration6",
    other_default_value: "",
    history_hide: true,
    readonly: true,
    content: null,
  },
  {
    title: "medicine7",
    mandatory: "non-mandatory",
    input_type: "textArea",
    other_value: [],
    default_type: "medicine7",
    display_label: "medicine7",
    other_default_value: "",
    history_hide: true,
    readonly: true,
    content: null,
  },
  {
    title: "dosage7",
    mandatory: "non-mandatory",
    input_type: "textArea",
    other_value: [],
    default_type: "dosage7",
    display_label: "dosage7",
    other_default_value: "",
    history_hide: true,
    readonly: true,
    content: null,
  },
  {
    title: "duration7",
    mandatory: "non-mandatory",
    input_type: "textArea",
    other_value: [],
    default_type: "duration7",
    display_label: "duration7",
    other_default_value: "",
    history_hide: true,
    readonly: true,
    content: null,
  },
  {
    title: "medicine8",
    mandatory: "non-mandatory",
    input_type: "textArea",
    other_value: [],
    default_type: "medicine8",
    display_label: "medicine8",
    other_default_value: "",
    history_hide: true,
    readonly: true,
    content: null,
  },
  {
    title: "dosage8",
    mandatory: "non-mandatory",
    input_type: "textArea",
    other_value: [],
    default_type: "dosage8",
    display_label: "dosage8",
    other_default_value: "",
    history_hide: true,
    readonly: true,
    content: null,
  },
  {
    title: "duration8",
    mandatory: "non-mandatory",
    input_type: "textArea",
    other_value: [],
    default_type: "duration8",
    display_label: "duration8",
    other_default_value: "",
    history_hide: true,
    readonly: true,
    content: null,
  },
  {
    title: "medicine9",
    mandatory: "non-mandatory",
    input_type: "textArea",
    other_value: [],
    default_type: "medicine9",
    display_label: "medicine9",
    other_default_value: "",
    history_hide: true,
    readonly: true,
    content: null,
  },
  {
    title: "dosage9",
    mandatory: "non-mandatory",
    input_type: "textArea",
    other_value: [],
    default_type: "dosage9",
    display_label: "dosage9",
    other_default_value: "",
    history_hide: true,
    readonly: true,
    content: null,
  },
  {
    title: "duration9",
    mandatory: "non-mandatory",
    input_type: "textArea",
    other_value: [],
    default_type: "duration9",
    display_label: "duration9",
    other_default_value: "",
    history_hide: true,
    readonly: true,
    content: null,
  },
  {
    title: "medicine10",
    mandatory: "non-mandatory",
    input_type: "textArea",
    other_value: [],
    default_type: "medicine10",
    display_label: "medicine10",
    other_default_value: "",
    history_hide: true,
    readonly: true,
    content: null,
  },
  {
    title: "dosage10",
    mandatory: "non-mandatory",
    input_type: "textArea",
    other_value: [],
    default_type: "dosage10",
    display_label: "dosage10",
    other_default_value: "",
    history_hide: true,
    readonly: true,
    content: null,
  },
  {
    title: "duration10",
    mandatory: "non-mandatory",
    input_type: "textArea",
    other_value: [],
    default_type: "duration10",
    display_label: "duration10",
    other_default_value: "",
    history_hide: true,
    readonly: true,
    content: null,
  },
  {
    title: "doctors_advice",
    mandatory: "non-mandatory",
    input_type: "textArea",
    other_value: [],
    default_type: "doctors_advice",
    display_label: "doctors_advice",
    other_default_value: "",
    history_hide: true,
    readonly: true,
    content: null,
  },
  {
    title: "test_result",
    mandatory: "non-mandatory",
    input_type: "textArea",
    other_value: [],
    default_type: "test_result",
    display_label: "test_result",
    other_default_value: "",
    history_hide: true,
    readonly: true,
    content: null,
  },
  {
    title: "and_any_other_critical_information_which_might_be_relevant",
    mandatory: "non-mandatory",
    input_type: "textArea",
    other_value: [],
    default_type: "and_any_other_critical_information_which_might_be_relevant",
    display_label: "and_any_other_critical_information_which_might_be_relevant",
    other_default_value: "",
    history_hide: true,
    readonly: true,
    content: null,
  },
]
export default () => {
  const [annotatorProps, changeAnnotatorProps] = React.useState({
    taskDescription:
      "Annotate each image according to this _markdown_ specification.",

    regionClsList: [
      "doctors_name",
      "doctors_qualification",
      "prescription_visit_date",
      "patient_name",
      "hospital_address",
      "medicine_name_with_strength",
      "medicine1",
      "dosage1",
      "duration1",
      "medicine2",
      "dosage2",
      "duration2",
      "medicine3",
      "dosage3",
      "duration3",
      "medicine4",
      "dosage4",
      "duration4",
      "medicine5",
      "dosage5",
      "duration5",
      "medicine6",
      "dosage6",
      "duration6",
      "medicine7",
      "dosage7",
      "duration7",
      "medicine8",
      "dosage8",
      "duration8",
      "medicine9",
      "dosage9",
      "duration9",
      "medicine10",
      "dosage10",
      "duration10",
      "doctors_advice",
      "test_result",
      "and_any_other_critical_information_which_might_be_relevant",
    ],
    enabledTools: ["select", "create-box", "create-polygon"],
    videoName: "",
    videoTime: "0",
    videoSrc:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    images: [
      {
        src: "https://netscribes-development.s3.ap-south-1.amazonaws.com/sample_images/Prescription_samples/108305-1650045029_2.jpg",
        name: "hot-dogs-1",
        regions: [
          {
            h: 0.16571428571428573,
            w: 0.40421052631578946,
            x: 0.39596133190118155,
            y: 0.08811507815406436,
            id: "8749454114716795",
            cls: "doctors_name",
            type: "box",
            color: "#2196f3",
            qc_label: false,
            keyframes: "0",
            ocr_value:
              "Dr. (Prof.) S. K. Pal MD (Medicine), DM (Endocrinology) CONSULTANT PHYSICIAN & ENDOCRINOLOGIST DIABETOLOGIST & THYROID SPECIALIST MON, WED, SAT TIME : 6 P.M. TO 8 P.M. MOBILE : 98311 22577 Regn. No. 45344 (W.B.M.C.) 2-4-22 Abhijus Dutt 46yrs the Rx",
            highlighted: false,
            editingLabels: false,
          },
          {
            h: 0.16761904761904767,
            w: 0.26809881847475836,
            x: 0.3712137486573577,
            y: 0.33382936386835005,
            id: "7378965560566455",
            cls: "patient_name",
            type: "box",
            color: "#795548",
            qc_label: false,
            keyframes: "0",
            ocr_value: "\\ Dianicron ' Oxra 75 HDL33'0. Istamet",
            highlighted: true,
            editingLabels: false,
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
  const handleSubmit = () => {}
  return (
    <div>
      <Annotator
        {...(annotatorProps: any)}
        onExit={(e) => console.log(e)}
        column_key={""}
        enabledTools={
          isImageMode
            ? ["create-box", "create-polygon", "zoom", "zoom_tool_minus"]
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
        rightMenu={!isImageMode}
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
        handleSubmit={(state, ocr) => console.log(state, ocr)}
        tilte_key={"image_le"}
        deleteAnnotationAllow={false}
        annotation_index={0}
        isMediaLayout={true}
        blocks={[
          {
            BlockType: "WORD",
            Confidence: 97.0848388671875,
            Text: "11/21",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.07095417380332947,
                Height: 0.019806401804089546,
                Left: 0.7090104818344116,
                Top: 0.06557528674602509,
              },
              Polygon: [
                {
                  X: 0.7090104818344116,
                  Y: 0.06738793849945068,
                },
                {
                  X: 0.7799472212791443,
                  Y: 0.06557528674602509,
                },
                {
                  X: 0.7799646854400635,
                  Y: 0.08359535783529282,
                },
                {
                  X: 0.7090322971343994,
                  Y: 0.08538168668746948,
                },
              ],
            },
            Id: "335e1918-f350-42a3-a2ea-eb9220ca255e",
          },
          {
            BlockType: "WORD",
            Confidence: 99.79647064208984,
            Text: "Dr.",
            TextType: "PRINTED",
            Geometry: {
              BoundingBox: {
                Width: 0.04056214168667793,
                Height: 0.018823299556970596,
                Left: 0.03279059752821922,
                Top: 0.11475273966789246,
              },
              Polygon: [
                {
                  X: 0.03279059752821922,
                  Y: 0.11576145142316818,
                },
                {
                  X: 0.07329214364290237,
                  Y: 0.11475273966789246,
                },
                {
                  X: 0.07335273921489716,
                  Y: 0.132582426071167,
                },
                {
                  X: 0.0328536257147789,
                  Y: 0.13357603549957275,
                },
              ],
            },
            Id: "285a3815-2f16-4bcf-909d-799b1c13a758",
          },
          {
            BlockType: "WORD",
            Confidence: 99.65576934814453,
            Text: "Pradip",
            TextType: "PRINTED",
            Geometry: {
              BoundingBox: {
                Width: 0.09557891637086868,
                Height: 0.023927969858050346,
                Left: 0.08352754265069962,
                Top: 0.11254043132066727,
              },
              Polygon: [
                {
                  X: 0.08352754265069962,
                  Y: 0.11491840332746506,
                },
                {
                  X: 0.17904092371463776,
                  Y: 0.11254043132066727,
                },
                {
                  X: 0.1791064590215683,
                  Y: 0.13413342833518982,
                },
                {
                  X: 0.08360002934932709,
                  Y: 0.13646839559078217,
                },
              ],
            },
            Id: "f8477137-4d84-4262-a4ac-eb4ea90f1fe5",
          },
          {
            BlockType: "WORD",
            Confidence: 99.76776123046875,
            Text: "Gupta",
            TextType: "PRINTED",
            Geometry: {
              BoundingBox: {
                Width: 0.089155413210392,
                Height: 0.024078549817204475,
                Left: 0.18831810355186462,
                Top: 0.11107521504163742,
              },
              Polygon: [
                {
                  X: 0.18831810355186462,
                  Y: 0.11329160630702972,
                },
                {
                  X: 0.2774144411087036,
                  Y: 0.11107521504163742,
                },
                {
                  X: 0.277473509311676,
                  Y: 0.13297797739505768,
                },
                {
                  X: 0.1883837729692459,
                  Y: 0.13515377044677734,
                },
              ],
            },
            Id: "dbd9dae3-4d07-4671-8518-b370d624dfb8",
          },
          {
            BlockType: "WORD",
            Confidence: 95.98793029785156,
            Text: "LDL-",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.056022100150585175,
                Height: 0.01786365546286106,
                Left: 0.2976963222026825,
                Top: 0.09782106429338455,
              },
              Polygon: [
                {
                  X: 0.2976963222026825,
                  Y: 0.09922684729099274,
                },
                {
                  X: 0.35367831587791443,
                  Y: 0.09782106429338455,
                },
                {
                  X: 0.35371842980384827,
                  Y: 0.11429810523986816,
                },
                {
                  X: 0.29773956537246704,
                  Y: 0.11568471789360046,
                },
              ],
            },
            Id: "28165aeb-86cc-47a5-8db8-62c5f33073cf",
          },
          {
            BlockType: "WORD",
            Confidence: 58.77348327636719,
            Text: "56.",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.04261941835284233,
                Height: 0.019418053328990936,
                Left: 0.3640676736831665,
                Top: 0.09485097974538803,
              },
              Polygon: [
                {
                  X: 0.3640676736831665,
                  Y: 0.09592161327600479,
                },
                {
                  X: 0.4066457450389862,
                  Y: 0.09485097974538803,
                },
                {
                  X: 0.4066871106624603,
                  Y: 0.11321462690830231,
                },
                {
                  X: 0.36411169171333313,
                  Y: 0.11426903307437897,
                },
              ],
            },
            Id: "7cb45126-6084-4e5c-af62-409fc5f52e33",
          },
          {
            BlockType: "WORD",
            Confidence: 49.57720184326172,
            Text: "Hh",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.03740841522812843,
                Height: 0.023524263873696327,
                Left: 0.4761769771575928,
                Top: 0.09533030539751053,
              },
              Polygon: [
                {
                  X: 0.4761769771575928,
                  Y: 0.09626743942499161,
                },
                {
                  X: 0.5135427713394165,
                  Y: 0.09533030539751053,
                },
                {
                  X: 0.5135853886604309,
                  Y: 0.1179349347949028,
                },
                {
                  X: 0.4762224555015564,
                  Y: 0.1188545748591423,
                },
              ],
            },
            Id: "2fb7826f-1f38-48f4-a800-27341b1be2df",
          },
          {
            BlockType: "WORD",
            Confidence: 78.31932067871094,
            Text: "-",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.010615845210850239,
                Height: 0.00431275786831975,
                Left: 0.5202786922454834,
                Top: 0.10394000262022018,
              },
              Polygon: [
                {
                  X: 0.5202786922454834,
                  Y: 0.10420408844947815,
                },
                {
                  X: 0.5308871865272522,
                  Y: 0.10394000262022018,
                },
                {
                  X: 0.5308945775032043,
                  Y: 0.10798957198858261,
                },
                {
                  X: 0.5202862620353699,
                  Y: 0.10825276374816895,
                },
              ],
            },
            Id: "55cfdbaf-5cfe-4414-8c77-53ceff98b8bd",
          },
          {
            BlockType: "WORD",
            Confidence: 21.865848541259766,
            Text: "-16.2923",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.14249727129936218,
                Height: 0.0430658683180809,
                Left: 0.5233364701271057,
                Top: 0.08399499207735062,
              },
              Polygon: [
                {
                  X: 0.5233364701271057,
                  Y: 0.08758947253227234,
                },
                {
                  X: 0.6657798290252686,
                  Y: 0.08399499207735062,
                },
                {
                  X: 0.6658337116241455,
                  Y: 0.12358278781175613,
                },
                {
                  X: 0.5234095454216003,
                  Y: 0.12706086039543152,
                },
              ],
            },
            Id: "80846ecd-1d8e-4cef-964c-7ad8e2dabc5c",
          },
          {
            BlockType: "WORD",
            Confidence: 88.57534790039062,
            Text: "FBG",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.06726515293121338,
                Height: 0.026279235258698463,
                Left: 0.6833763718605042,
                Top: 0.08948921412229538,
              },
              Polygon: [
                {
                  X: 0.6833763718605042,
                  Y: 0.09117540717124939,
                },
                {
                  X: 0.7506151795387268,
                  Y: 0.08948921412229538,
                },
                {
                  X: 0.7506415247917175,
                  Y: 0.114116370677948,
                },
                {
                  X: 0.6834083795547485,
                  Y: 0.1157684475183487,
                },
              ],
            },
            Id: "b2a64e3f-212c-485e-9c42-80544b4cbf9b",
          },
          {
            BlockType: "WORD",
            Confidence: 21.187183380126953,
            Text: "123rg/10",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.12904323637485504,
                Height: 0.03687067702412605,
                Left: 0.7837225198745728,
                Top: 0.07129109650850296,
              },
              Polygon: [
                {
                  X: 0.7837225198745728,
                  Y: 0.07456407696008682,
                },
                {
                  X: 0.9127484560012817,
                  Y: 0.07129109650850296,
                },
                {
                  X: 0.9127657413482666,
                  Y: 0.10497806966304779,
                },
                {
                  X: 0.7837546467781067,
                  Y: 0.10816176980733871,
                },
              ],
            },
            Id: "95ff8bf9-8df8-45e6-94ec-3fe7b10c52cf",
          },
          {
            BlockType: "WORD",
            Confidence: 68.38106536865234,
            Text: "D.N.B.(I).",
            TextType: "PRINTED",
            Geometry: {
              BoundingBox: {
                Width: 0.07627289742231369,
                Height: 0.015083029866218567,
                Left: 0.028541501611471176,
                Top: 0.14220598340034485,
              },
              Polygon: [
                {
                  X: 0.028541501611471176,
                  Y: 0.14405973255634308,
                },
                {
                  X: 0.10477079451084137,
                  Y: 0.14220598340034485,
                },
                {
                  X: 0.10481439530849457,
                  Y: 0.15545634925365448,
                },
                {
                  X: 0.02858850546181202,
                  Y: 0.15728901326656342,
                },
              ],
            },
            Id: "2ca84ce9-b029-485a-8e4a-9b7f45f6f7fb",
          },
          {
            BlockType: "WORD",
            Confidence: 86.79397583007812,
            Text: "D.T.M.H.",
            TextType: "PRINTED",
            Geometry: {
              BoundingBox: {
                Width: 0.07282176613807678,
                Height: 0.013363679870963097,
                Left: 0.11091197282075882,
                Top: 0.14029723405838013,
              },
              Polygon: [
                {
                  X: 0.11091197282075882,
                  Y: 0.14206725358963013,
                },
                {
                  X: 0.18369868397712708,
                  Y: 0.14029723405838013,
                },
                {
                  X: 0.183733731508255,
                  Y: 0.1519085019826889,
                },
                {
                  X: 0.11094988137483597,
                  Y: 0.15366090834140778,
                },
              ],
            },
            Id: "fe1f48cd-86ac-46b0-ba6e-3c673f7e50fd",
          },
          {
            BlockType: "WORD",
            Confidence: 99.54505920410156,
            Text: "(CAL)",
            TextType: "PRINTED",
            Geometry: {
              BoundingBox: {
                Width: 0.04948096722364426,
                Height: 0.01587584801018238,
                Left: 0.1896190494298935,
                Top: 0.1391678750514984,
              },
              Polygon: [
                {
                  X: 0.1896190494298935,
                  Y: 0.14036992192268372,
                },
                {
                  X: 0.2390584647655487,
                  Y: 0.1391678750514984,
                },
                {
                  X: 0.23910002410411835,
                  Y: 0.1538567990064621,
                },
                {
                  X: 0.18966305255889893,
                  Y: 0.15504372119903564,
                },
              ],
            },
            Id: "80b062b6-2666-4b69-847b-97f06a3e0af6",
          },
          {
            BlockType: "WORD",
            Confidence: 92.30481719970703,
            Text: "M.B.B.S.",
            TextType: "PRINTED",
            Geometry: {
              BoundingBox: {
                Width: 0.07486459612846375,
                Height: 0.014515957795083523,
                Left: 0.24360057711601257,
                Top: 0.13838694989681244,
              },
              Polygon: [
                {
                  X: 0.24360057711601257,
                  Y: 0.14020459353923798,
                },
                {
                  X: 0.31843265891075134,
                  Y: 0.13838694989681244,
                },
                {
                  X: 0.3184651732444763,
                  Y: 0.15110504627227783,
                },
                {
                  X: 0.24363631010055542,
                  Y: 0.15290290117263794,
                },
              ],
            },
            Id: "2741973b-8441-4804-a064-826090840a35",
          },
          {
            BlockType: "WORD",
            Confidence: 99.13465118408203,
            Text: "(CAL)",
            TextType: "PRINTED",
            Geometry: {
              BoundingBox: {
                Width: 0.04929940402507782,
                Height: 0.015377623029053211,
                Left: 0.32374307513237,
                Top: 0.13833297789096832,
              },
              Polygon: [
                {
                  X: 0.32374307513237,
                  Y: 0.1395283341407776,
                },
                {
                  X: 0.3730088472366333,
                  Y: 0.13833297789096832,
                },
                {
                  X: 0.373042494058609,
                  Y: 0.152529776096344,
                },
                {
                  X: 0.32377907633781433,
                  Y: 0.15371060371398926,
                },
              ],
            },
            Id: "9b27e0b4-a849-4858-8fb0-88d9543b39ed",
          },
          {
            BlockType: "WORD",
            Confidence: 23.46705436706543,
            Text: "TG43 PW",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.1378875970840454,
                Height: 0.032683663070201874,
                Left: 0.3829147219657898,
                Top: 0.11863207817077637,
              },
              Polygon: [
                {
                  X: 0.3829147219657898,
                  Y: 0.12202217429876328,
                },
                {
                  X: 0.5207476615905762,
                  Y: 0.11863207817077637,
                },
                {
                  X: 0.5208023190498352,
                  Y: 0.14800947904586792,
                },
                {
                  X: 0.38298311829566956,
                  Y: 0.15131573379039764,
                },
              ],
            },
            Id: "5e7bd305-14cd-43d5-93fa-372a13350ebc",
          },
          {
            BlockType: "WORD",
            Confidence: 53.05150604248047,
            Text: "44",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.06897082924842834,
                Height: 0.026966823264956474,
                Left: 0.5413248538970947,
                Top: 0.11179979890584946,
              },
              Polygon: [
                {
                  X: 0.5413248538970947,
                  Y: 0.11350178718566895,
                },
                {
                  X: 0.6102563738822937,
                  Y: 0.11179979890584946,
                },
                {
                  X: 0.6102956533432007,
                  Y: 0.13710066676139832,
                },
                {
                  X: 0.5413700342178345,
                  Y: 0.13876661658287048,
                },
              ],
            },
            Id: "e3976c38-a8bb-464e-8328-5d6a5074a4f1",
          },
          {
            BlockType: "WORD",
            Confidence: 43.796852111816406,
            Text: "HDL-",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.05907924473285675,
                Height: 0.01708504743874073,
                Left: 0.30206531286239624,
                Top: 0.12010162323713303,
              },
              Polygon: [
                {
                  X: 0.30206531286239624,
                  Y: 0.12155679613351822,
                },
                {
                  X: 0.36110687255859375,
                  Y: 0.12010162323713303,
                },
                {
                  X: 0.3611445724964142,
                  Y: 0.1357506960630417,
                },
                {
                  X: 0.3021061420440674,
                  Y: 0.1371866762638092,
                },
              ],
            },
            Id: "e525d9b7-83d4-46ac-9c6e-aa8faf1098cf",
          },
          {
            BlockType: "WORD",
            Confidence: 97.79010772705078,
            Text: "57",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.03649682179093361,
                Height: 0.016506655141711235,
                Left: 0.36867278814315796,
                Top: 0.115472212433815,
              },
              Polygon: [
                {
                  X: 0.36867278814315796,
                  Y: 0.11637353152036667,
                },
                {
                  X: 0.4051343500614166,
                  Y: 0.115472212433815,
                },
                {
                  X: 0.40516960620880127,
                  Y: 0.13108935952186584,
                },
                {
                  X: 0.3687099516391754,
                  Y: 0.1319788694381714,
                },
              ],
            },
            Id: "82460bfd-b8c9-4f96-899e-5ea37ce5fca3",
          },
          {
            BlockType: "WORD",
            Confidence: 24.700132369995117,
            Text: "Undh",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.09076086431741714,
                Height: 0.021990038454532623,
                Left: 0.682270884513855,
                Top: 0.11491324752569199,
              },
              Polygon: [
                {
                  X: 0.682270884513855,
                  Y: 0.11714046448469162,
                },
                {
                  X: 0.773012101650238,
                  Y: 0.11491324752569199,
                },
                {
                  X: 0.7730317711830139,
                  Y: 0.1347130835056305,
                },
                {
                  X: 0.6822966933250427,
                  Y: 0.1369032859802246,
                },
              ],
            },
            Id: "7d8781fc-a9f9-463d-834c-05fdd8b897a4",
          },
          {
            BlockType: "WORD",
            Confidence: 42.496253967285156,
            Text: "17.7-",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.09053559601306915,
                Height: 0.023872990161180496,
                Left: 0.7904963493347168,
                Top: 0.10345037281513214,
              },
              Polygon: [
                {
                  X: 0.7904963493347168,
                  Y: 0.10568853467702866,
                },
                {
                  X: 0.8810184597969055,
                  Y: 0.10345037281513214,
                },
                {
                  X: 0.8810319304466248,
                  Y: 0.12512552738189697,
                },
                {
                  X: 0.7905165553092957,
                  Y: 0.12732335925102234,
                },
              ],
            },
            Id: "3b751ab2-b97b-4a9c-a286-5161e9ed352f",
          },
          {
            BlockType: "WORD",
            Confidence: 46.02585983276367,
            Text: "07/22",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.0557531863451004,
                Height: 0.02593955211341381,
                Left: 0.9428978562355042,
                Top: 0.09934020042419434,
              },
              Polygon: [
                {
                  X: 0.9428978562355042,
                  Y: 0.10071993619203568,
                },
                {
                  X: 0.9986456632614136,
                  Y: 0.09934020042419434,
                },
                {
                  X: 0.9986510276794434,
                  Y: 0.12392812222242355,
                },
                {
                  X: 0.9429078698158264,
                  Y: 0.1252797544002533,
                },
              ],
            },
            Id: "35993e11-3712-49ee-8483-d342ddaf8c52",
          },
          {
            BlockType: "WORD",
            Confidence: 26.414104461669922,
            Text: "1",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.046430207788944244,
                Height: 0.005926871206611395,
                Left: 0.9435589909553528,
                Top: 0.12414495646953583,
              },
              Polygon: [
                {
                  X: 0.9435589909553528,
                  Y: 0.12527073919773102,
                },
                {
                  X: 0.9899880290031433,
                  Y: 0.12414495646953583,
                },
                {
                  X: 0.9899892210960388,
                  Y: 0.12895061075687408,
                },
                {
                  X: 0.9435609579086304,
                  Y: 0.13007181882858276,
                },
              ],
            },
            Id: "1ef7c048-4269-4798-9f14-8182ff7afed6",
          },
          {
            BlockType: "WORD",
            Confidence: 97.93624114990234,
            Text: "Consultant",
            TextType: "PRINTED",
            Geometry: {
              BoundingBox: {
                Width: 0.09002278745174408,
                Height: 0.013278483413159847,
                Left: 0.027466487139463425,
                Top: 0.1594746857881546,
              },
              Polygon: [
                {
                  X: 0.027466487139463425,
                  Y: 0.16163009405136108,
                },
                {
                  X: 0.11745309084653854,
                  Y: 0.1594746857881546,
                },
                {
                  X: 0.1174892783164978,
                  Y: 0.1706186830997467,
                },
                {
                  X: 0.02750604972243309,
                  Y: 0.17275317013263702,
                },
              ],
            },
            Id: "5e6b7ef7-362e-4435-b48e-546ddffefde5",
          },
          {
            BlockType: "WORD",
            Confidence: 99.83953094482422,
            Text: "Physician",
            TextType: "PRINTED",
            Geometry: {
              BoundingBox: {
                Width: 0.08168057352304459,
                Height: 0.015717776492238045,
                Left: 0.12154771387577057,
                Top: 0.15691770613193512,
              },
              Polygon: [
                {
                  X: 0.12154771387577057,
                  Y: 0.158874049782753,
                },
                {
                  X: 0.20318758487701416,
                  Y: 0.15691770613193512,
                },
                {
                  X: 0.20322827994823456,
                  Y: 0.17070259153842926,
                },
                {
                  X: 0.1215922087430954,
                  Y: 0.17263548076152802,
                },
              ],
            },
            Id: "9a517a4c-ab8b-4fc7-8e7e-4827345d6be5",
          },
          {
            BlockType: "WORD",
            Confidence: 99.95524597167969,
            Text: "&",
            TextType: "PRINTED",
            Geometry: {
              BoundingBox: {
                Width: 0.014387836679816246,
                Height: 0.012089583091437817,
                Left: 0.20678609609603882,
                Top: 0.1572580486536026,
              },
              Polygon: [
                {
                  X: 0.20678609609603882,
                  Y: 0.15760178864002228,
                },
                {
                  X: 0.22113996744155884,
                  Y: 0.1572580486536026,
                },
                {
                  X: 0.2211739420890808,
                  Y: 0.16900742053985596,
                },
                {
                  X: 0.20682063698768616,
                  Y: 0.1693476289510727,
                },
              ],
            },
            Id: "13a54141-c387-4370-9779-296e9971da3f",
          },
          {
            BlockType: "WORD",
            Confidence: 99.02281951904297,
            Text: "Cardiologist",
            TextType: "PRINTED",
            Geometry: {
              BoundingBox: {
                Width: 0.10126396268606186,
                Height: 0.01767447032034397,
                Left: 0.22554242610931396,
                Top: 0.15518540143966675,
              },
              Polygon: [
                {
                  X: 0.22554242610931396,
                  Y: 0.1576085090637207,
                },
                {
                  X: 0.32676777243614197,
                  Y: 0.15518540143966675,
                },
                {
                  X: 0.3268063962459564,
                  Y: 0.17046892642974854,
                },
                {
                  X: 0.22558628022670746,
                  Y: 0.17285987734794617,
                },
              ],
            },
            Id: "41b28cf8-908b-4575-9a8e-d3fe01c86c99",
          },
          {
            BlockType: "WORD",
            Confidence: 96.16277313232422,
            Text: "Regn.",
            TextType: "PRINTED",
            Geometry: {
              BoundingBox: {
                Width: 0.04915071651339531,
                Height: 0.015191708691418171,
                Left: 0.02617577649652958,
                Top: 0.17747826874256134,
              },
              Polygon: [
                {
                  X: 0.02617577649652958,
                  Y: 0.1786370575428009,
                },
                {
                  X: 0.07527883350849152,
                  Y: 0.17747826874256134,
                },
                {
                  X: 0.07532649487257004,
                  Y: 0.19152559340000153,
                },
                {
                  X: 0.026225754991173744,
                  Y: 0.19266997277736664,
                },
              ],
            },
            Id: "99417c63-fe1c-4b8c-8c74-4b96e571fece",
          },
          {
            BlockType: "WORD",
            Confidence: 98.19882202148438,
            Text: "No.",
            TextType: "PRINTED",
            Geometry: {
              BoundingBox: {
                Width: 0.02842649444937706,
                Height: 0.011768697760999203,
                Left: 0.08087866008281708,
                Top: 0.17669086158275604,
              },
              Polygon: [
                {
                  X: 0.08087866008281708,
                  Y: 0.17736083269119263,
                },
                {
                  X: 0.10926877707242966,
                  Y: 0.17669086158275604,
                },
                {
                  X: 0.10930515825748444,
                  Y: 0.18779617547988892,
                },
                {
                  X: 0.08091609925031662,
                  Y: 0.18845956027507782,
                },
              ],
            },
            Id: "0ccfab77-00fa-4caf-80e6-036b535ecac4",
          },
          {
            BlockType: "WORD",
            Confidence: 99.05938720703125,
            Text: "49034",
            TextType: "PRINTED",
            Geometry: {
              BoundingBox: {
                Width: 0.05322914198040962,
                Height: 0.012743333354592323,
                Left: 0.11487434059381485,
                Top: 0.17496295273303986,
              },
              Polygon: [
                {
                  X: 0.11487434059381485,
                  Y: 0.17621862888336182,
                },
                {
                  X: 0.16806814074516296,
                  Y: 0.17496295273303986,
                },
                {
                  X: 0.16810348629951477,
                  Y: 0.1864633560180664,
                },
                {
                  X: 0.114911749958992,
                  Y: 0.18770627677440643,
                },
              ],
            },
            Id: "eea27eb7-18ca-42e0-91ec-0a99a9d72635",
          },
          {
            BlockType: "WORD",
            Confidence: 89.30984497070312,
            Text: "(WBMC).",
            TextType: "PRINTED",
            Geometry: {
              BoundingBox: {
                Width: 0.0783221498131752,
                Height: 0.016414348036050797,
                Left: 0.1734563112258911,
                Top: 0.1732473522424698,
              },
              Polygon: [
                {
                  X: 0.1734563112258911,
                  Y: 0.1750948280096054,
                },
                {
                  X: 0.2517378032207489,
                  Y: 0.1732473522424698,
                },
                {
                  X: 0.2517784535884857,
                  Y: 0.18783800303936005,
                },
                {
                  X: 0.17350080609321594,
                  Y: 0.18966169655323029,
                },
              ],
            },
            Id: "3e80c7ec-c106-4822-b9d5-c9dc81d3999b",
          },
          {
            BlockType: "WORD",
            Confidence: 99.81204223632812,
            Text: "Member",
            TextType: "PRINTED",
            Geometry: {
              BoundingBox: {
                Width: 0.07027693837881088,
                Height: 0.013030873611569405,
                Left: 0.024183152243494987,
                Top: 0.19450248777866364,
              },
              Polygon: [
                {
                  X: 0.024183152243494987,
                  Y: 0.1961345225572586,
                },
                {
                  X: 0.0944221094250679,
                  Y: 0.19450248777866364,
                },
                {
                  X: 0.09446009248495102,
                  Y: 0.2059180736541748,
                },
                {
                  X: 0.024223828688263893,
                  Y: 0.2075333595275879,
                },
              ],
            },
            Id: "2969409f-223e-4766-a282-03f7a9d24cee",
          },
          {
            BlockType: "WORD",
            Confidence: 96.20206451416016,
            Text: "ESICM",
            TextType: "PRINTED",
            Geometry: {
              BoundingBox: {
                Width: 0.06011241674423218,
                Height: 0.013385799713432789,
                Left: 0.11263620853424072,
                Top: 0.19196850061416626,
              },
              Polygon: [
                {
                  X: 0.11263620853424072,
                  Y: 0.19336527585983276,
                },
                {
                  X: 0.17271192371845245,
                  Y: 0.19196850061416626,
                },
                {
                  X: 0.1727486252784729,
                  Y: 0.20397254824638367,
                },
                {
                  X: 0.11267534643411636,
                  Y: 0.20535428822040558,
                },
              ],
            },
            Id: "529e6b4d-db10-4f26-a518-6b68249c1f33",
          },
          {
            BlockType: "WORD",
            Confidence: 91.23999786376953,
            Text: "(Brussels,",
            TextType: "PRINTED",
            Geometry: {
              BoundingBox: {
                Width: 0.0846991017460823,
                Height: 0.016865989193320274,
                Left: 0.17800940573215485,
                Top: 0.19022218883037567,
              },
              Polygon: [
                {
                  X: 0.17800940573215485,
                  Y: 0.19218991696834564,
                },
                {
                  X: 0.2626674771308899,
                  Y: 0.19022218883037567,
                },
                {
                  X: 0.26270851492881775,
                  Y: 0.20514674484729767,
                },
                {
                  X: 0.17805469036102295,
                  Y: 0.2070881724357605,
                },
              ],
            },
            Id: "46e8c5d5-58c6-4afb-9d5a-94034c4afdc7",
          },
          {
            BlockType: "WORD",
            Confidence: 94.02450561523438,
            Text: "Belgium)",
            TextType: "PRINTED",
            Geometry: {
              BoundingBox: {
                Width: 0.0761755108833313,
                Height: 0.016715718433260918,
                Left: 0.2688930928707123,
                Top: 0.19082684814929962,
              },
              Polygon: [
                {
                  X: 0.2688930928707123,
                  Y: 0.192592591047287,
                },
                {
                  X: 0.3450317084789276,
                  Y: 0.19082684814929962,
                },
                {
                  X: 0.3450686037540436,
                  Y: 0.20580051839351654,
                },
                {
                  X: 0.26893386244773865,
                  Y: 0.2075425684452057,
                },
              ],
            },
            Id: "36e61a58-101a-45f6-9026-b4fb93804e1d",
          },
          {
            BlockType: "WORD",
            Confidence: 68.8049087524414,
            Text: "PPBG-249mg",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.2750858962535858,
                Height: 0.04052009806036949,
                Left: 0.3877010941505432,
                Top: 0.16473212838172913,
              },
              Polygon: [
                {
                  X: 0.3877010941505432,
                  Y: 0.1712164580821991,
                },
                {
                  X: 0.6627399921417236,
                  Y: 0.16473212838172913,
                },
                {
                  X: 0.6627869606018066,
                  Y: 0.19896219670772552,
                },
                {
                  X: 0.38778001070022583,
                  Y: 0.20525223016738892,
                },
              ],
            },
            Id: "12c26990-a7de-4fa0-ab46-bf21950a571c",
          },
          {
            BlockType: "WORD",
            Confidence: 82.2249755859375,
            Text: "Us",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.04103890061378479,
                Height: 0.018846573308110237,
                Left: 0.6966568827629089,
                Top: 0.1708325743675232,
              },
              Polygon: [
                {
                  X: 0.6966568827629089,
                  Y: 0.17179301381111145,
                },
                {
                  X: 0.7376758456230164,
                  Y: 0.1708325743675232,
                },
                {
                  X: 0.7376958131790161,
                  Y: 0.18873383104801178,
                },
                {
                  X: 0.6966793537139893,
                  Y: 0.18967914581298828,
                },
              ],
            },
            Id: "eb761173-a58c-4dc7-b82b-89d59173c41a",
          },
          {
            BlockType: "WORD",
            Confidence: 45.56641387939453,
            Text: "Ac",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.04369612783193588,
                Height: 0.023678531870245934,
                Left: 0.7518311738967896,
                Top: 0.15979920327663422,
              },
              Polygon: [
                {
                  X: 0.7518311738967896,
                  Y: 0.1608305126428604,
                },
                {
                  X: 0.7955065369606018,
                  Y: 0.15979920327663422,
                },
                {
                  X: 0.7955272793769836,
                  Y: 0.1824668049812317,
                },
                {
                  X: 0.7518553137779236,
                  Y: 0.1834777295589447,
                },
              ],
            },
            Id: "f474fcaa-7f7e-4020-bd83-d31212b08152",
          },
          {
            BlockType: "WORD",
            Confidence: 24.76773452758789,
            Text: "Crust",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.10268190503120422,
                Height: 0.03387663885951042,
                Left: 0.6865336298942566,
                Top: 0.13771460950374603,
              },
              Polygon: [
                {
                  X: 0.6865336298942566,
                  Y: 0.14018534123897552,
                },
                {
                  X: 0.7891860008239746,
                  Y: 0.13771460950374603,
                },
                {
                  X: 0.7892155051231384,
                  Y: 0.1691870242357254,
                },
                {
                  X: 0.6865741610527039,
                  Y: 0.17159123718738556,
                },
              ],
            },
            Id: "f64cd3a9-843e-44dd-8824-d3b97438f59e",
          },
          {
            BlockType: "WORD",
            Confidence: 99.32040405273438,
            Text: "3.8",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.061077781021595,
                Height: 0.02049136348068714,
                Left: 0.8289701342582703,
                Top: 0.15576735138893127,
              },
              Polygon: [
                {
                  X: 0.8289701342582703,
                  Y: 0.1572115570306778,
                },
                {
                  X: 0.8900366425514221,
                  Y: 0.15576735138893127,
                },
                {
                  X: 0.8900479078292847,
                  Y: 0.17483842372894287,
                },
                {
                  X: 0.8289853930473328,
                  Y: 0.17625871300697327,
                },
              ],
            },
            Id: "c5290bfb-2bde-47bd-90e2-efbe3e045e92",
          },
          {
            BlockType: "WORD",
            Confidence: 21.53903579711914,
            Text: "40-77-2012",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.19669920206069946,
                Height: 0.03527956083416939,
                Left: 0.7974915504455566,
                Top: 0.1265256702899933,
              },
              Polygon: [
                {
                  X: 0.7974915504455566,
                  Y: 0.13128496706485748,
                },
                {
                  X: 0.9941835999488831,
                  Y: 0.1265256702899933,
                },
                {
                  X: 0.9941907525062561,
                  Y: 0.15716949105262756,
                },
                {
                  X: 0.7975192666053772,
                  Y: 0.16180522739887238,
                },
              ],
            },
            Id: "26743c49-37d7-4bc1-8881-c476fa87baf2",
          },
          {
            BlockType: "WORD",
            Confidence: 98.58773040771484,
            Text: "ASCCM",
            TextType: "PRINTED",
            Geometry: {
              BoundingBox: {
                Width: 0.07051554322242737,
                Height: 0.013416566886007786,
                Left: 0.1075621172785759,
                Top: 0.20939026772975922,
              },
              Polygon: [
                {
                  X: 0.1075621172785759,
                  Y: 0.21100325882434845,
                },
                {
                  X: 0.1780417263507843,
                  Y: 0.20939026772975922,
                },
                {
                  X: 0.17807766795158386,
                  Y: 0.22121119499206543,
                },
                {
                  X: 0.1076008528470993,
                  Y: 0.22280682623386383,
                },
              ],
            },
            Id: "106b96c8-7bf1-4c55-a28c-ecd4873d5158",
          },
          {
            BlockType: "WORD",
            Confidence: 99.73692321777344,
            Text: "(USA)",
            TextType: "PRINTED",
            Geometry: {
              BoundingBox: {
                Width: 0.053257063031196594,
                Height: 0.01625916361808777,
                Left: 0.18330764770507812,
                Top: 0.208615243434906,
              },
              Polygon: [
                {
                  X: 0.18330764770507812,
                  Y: 0.20983248949050903,
                },
                {
                  X: 0.23652195930480957,
                  Y: 0.208615243434906,
                },
                {
                  X: 0.23656469583511353,
                  Y: 0.22367386519908905,
                },
                {
                  X: 0.18335309624671936,
                  Y: 0.22487440705299377,
                },
              ],
            },
            Id: "8261f3fd-960d-477b-9f0e-57f6b143874d",
          },
          {
            BlockType: "WORD",
            Confidence: 99.65107727050781,
            Text: "ADA",
            TextType: "PRINTED",
            Geometry: {
              BoundingBox: {
                Width: 0.04061194136738777,
                Height: 0.012245794758200645,
                Left: 0.10722944885492325,
                Top: 0.22805263102054596,
              },
              Polygon: [
                {
                  X: 0.10722944885492325,
                  Y: 0.2289661169052124,
                },
                {
                  X: 0.14780573546886444,
                  Y: 0.22805263102054596,
                },
                {
                  X: 0.14784139394760132,
                  Y: 0.23939456045627594,
                },
                {
                  X: 0.10726665705442429,
                  Y: 0.24029843509197235,
                },
              ],
            },
            Id: "f176eac2-dbc0-47cd-93c2-f109cd2c7463",
          },
          {
            BlockType: "WORD",
            Confidence: 99.70135498046875,
            Text: "(USA)",
            TextType: "PRINTED",
            Geometry: {
              BoundingBox: {
                Width: 0.05284358188509941,
                Height: 0.015325919725000858,
                Left: 0.1519196480512619,
                Top: 0.2271769940853119,
              },
              Polygon: [
                {
                  X: 0.1519196480512619,
                  Y: 0.22836525738239288,
                },
                {
                  X: 0.20472151041030884,
                  Y: 0.2271769940853119,
                },
                {
                  X: 0.2047632336616516,
                  Y: 0.24133022129535675,
                },
                {
                  X: 0.15196388959884644,
                  Y: 0.24250291287899017,
                },
              ],
            },
            Id: "7bcdc161-e0fd-4660-bc38-8dd97f4e8230",
          },
          {
            BlockType: "WORD",
            Confidence: 50.15143585205078,
            Text: "Uo.AeR",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.12677782773971558,
                Height: 0.033980969339609146,
                Left: 0.3376235365867615,
                Top: 0.19906486570835114,
              },
              Polygon: [
                {
                  X: 0.3376235365867615,
                  Y: 0.20197470486164093,
                },
                {
                  X: 0.4643373191356659,
                  Y: 0.19906486570835114,
                },
                {
                  X: 0.46440133452415466,
                  Y: 0.2302177995443344,
                },
                {
                  X: 0.33770090341567993,
                  Y: 0.23304583132266998,
                },
              ],
            },
            Id: "964ce7d0-79f6-426d-bce0-5417c6cde5e9",
          },
          {
            BlockType: "WORD",
            Confidence: 81.66569519042969,
            Text: "-",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.025720546022057533,
                Height: 0.00635693920776248,
                Left: 0.4752936065196991,
                Top: 0.21213014423847198,
              },
              Polygon: [
                {
                  X: 0.4752936065196991,
                  Y: 0.21271315217018127,
                },
                {
                  X: 0.5010030269622803,
                  Y: 0.21213014423847198,
                },
                {
                  X: 0.5010141730308533,
                  Y: 0.2179071456193924,
                },
                {
                  X: 0.4753052592277527,
                  Y: 0.21848708391189575,
                },
              ],
            },
            Id: "4643491c-ebf9-45f6-a55d-9f3a15839e1e",
          },
          {
            BlockType: "WORD",
            Confidence: 98.55738067626953,
            Text: "232",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.06965481489896774,
                Height: 0.020439811050891876,
                Left: 0.5079576373100281,
                Top: 0.20673349499702454,
              },
              Polygon: [
                {
                  X: 0.5079576373100281,
                  Y: 0.2083175927400589,
                },
                {
                  X: 0.577580988407135,
                  Y: 0.20673349499702454,
                },
                {
                  X: 0.5776124596595764,
                  Y: 0.22561639547348022,
                },
                {
                  X: 0.5079935789108276,
                  Y: 0.22717329859733582,
                },
              ],
            },
            Id: "7a9f9572-62a6-4011-bab8-dc2d133595df",
          },
          {
            BlockType: "WORD",
            Confidence: 94.95941162109375,
            Text: "(<30)",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.08074493706226349,
                Height: 0.03235733136534691,
                Left: 0.5919027328491211,
                Top: 0.19438691437244415,
              },
              Polygon: [
                {
                  X: 0.5919027328491211,
                  Y: 0.19624000787734985,
                },
                {
                  X: 0.6726067662239075,
                  Y: 0.19438691437244415,
                },
                {
                  X: 0.6726476550102234,
                  Y: 0.22494201362133026,
                },
                {
                  X: 0.5919520258903503,
                  Y: 0.22674424946308136,
                },
              ],
            },
            Id: "f605d5c9-8ff0-4116-ae09-884b7d5912cc",
          },
          {
            BlockType: "WORD",
            Confidence: 97.579345703125,
            Text: "09/12/2021",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.22006911039352417,
                Height: 0.04735048487782478,
                Left: 0.6921679377555847,
                Top: 0.18678826093673706,
              },
              Polygon: [
                {
                  X: 0.6921679377555847,
                  Y: 0.19185036420822144,
                },
                {
                  X: 0.9122151732444763,
                  Y: 0.18678826093673706,
                },
                {
                  X: 0.9122370481491089,
                  Y: 0.22926856577396393,
                },
                {
                  X: 0.6922217011451721,
                  Y: 0.23413874208927155,
                },
              ],
            },
            Id: "ac74c9dd-28a7-4a16-8839-8c607e64bcb9",
          },
          {
            BlockType: "WORD",
            Confidence: 44.417823791503906,
            Text: "yrs.",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.06787551939487457,
                Height: 0.04590317979454994,
                Left: 0,
                Top: 0.23247019946575165,
              },
              Polygon: [
                {
                  X: 0,
                  Y: 0.23403391242027283,
                },
                {
                  X: 0.06772369146347046,
                  Y: 0.23247019946575165,
                },
                {
                  X: 0.06787551939487457,
                  Y: 0.27687424421310425,
                },
                {
                  X: 0,
                  Y: 0.2783733606338501,
                },
              ],
            },
            Id: "ead61bb7-3212-4176-941b-ef68bbc6ab38",
          },
          {
            BlockType: "WORD",
            Confidence: 33.30198287963867,
            Text: "HbALC",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.10406425595283508,
                Height: 0.027346903458237648,
                Left: 0.3474520444869995,
                Top: 0.22799858450889587,
              },
              Polygon: [
                {
                  X: 0.3474520444869995,
                  Y: 0.2303255945444107,
                },
                {
                  X: 0.4514636695384979,
                  Y: 0.22799858450889587,
                },
                {
                  X: 0.4515163004398346,
                  Y: 0.2530725598335266,
                },
                {
                  X: 0.3475135266780853,
                  Y: 0.25534549355506897,
                },
              ],
            },
            Id: "575a30ac-8ad9-41c2-8576-a5137e293e4f",
          },
          {
            BlockType: "WORD",
            Confidence: 89.13003540039062,
            Text: "9.2%",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.09343655407428741,
                Height: 0.026819011196494102,
                Left: 0.48796623945236206,
                Top: 0.22967220842838287,
              },
              Polygon: [
                {
                  X: 0.48796623945236206,
                  Y: 0.2317528873682022,
                },
                {
                  X: 0.5813618302345276,
                  Y: 0.22967220842838287,
                },
                {
                  X: 0.5814027786254883,
                  Y: 0.25445836782455444,
                },
                {
                  X: 0.4880150556564331,
                  Y: 0.25649121403694153,
                },
              ],
            },
            Id: "d3f25e2d-f888-49cc-b627-197755657cf0",
          },
          {
            BlockType: "WORD",
            Confidence: 86.78801727294922,
            Text: "FOR",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.0625285804271698,
                Height: 0.036077242344617844,
                Left: 0.13286720216274261,
                Top: 0.2533431351184845,
              },
              Polygon: [
                {
                  X: 0.13286720216274261,
                  Y: 0.25471431016921997,
                },
                {
                  X: 0.19529218971729279,
                  Y: 0.2533431351184845,
                },
                {
                  X: 0.19539578258991241,
                  Y: 0.2880943715572357,
                },
                {
                  X: 0.13297809660434723,
                  Y: 0.28942036628723145,
                },
              ],
            },
            Id: "c3bd526a-4dc3-43bc-89aa-3dd2f5e919c8",
          },
          {
            BlockType: "WORD",
            Confidence: 94.60258483886719,
            Text: "LFT-",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.07519868016242981,
                Height: 0.0217834934592247,
                Left: 0.318135142326355,
                Top: 0.2520904839038849,
              },
              Polygon: [
                {
                  X: 0.318135142326355,
                  Y: 0.2537364065647125,
                },
                {
                  X: 0.39328745007514954,
                  Y: 0.2520904839038849,
                },
                {
                  X: 0.3933338224887848,
                  Y: 0.2722594738006592,
                },
                {
                  X: 0.3181866705417633,
                  Y: 0.2738739848136902,
                },
              ],
            },
            Id: "70d32aff-5616-41d4-81d6-94c08a9c655d",
          },
          {
            BlockType: "WORD",
            Confidence: 99.30258178710938,
            Text: "N",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.023052264004945755,
                Height: 0.01456999871879816,
                Left: 0.4097670316696167,
                Top: 0.2573382258415222,
              },
              Polygon: [
                {
                  X: 0.4097670316696167,
                  Y: 0.25783953070640564,
                },
                {
                  X: 0.43278881907463074,
                  Y: 0.2573382258415222,
                },
                {
                  X: 0.43281927704811096,
                  Y: 0.271413654088974,
                },
                {
                  X: 0.40979859232902527,
                  Y: 0.2719082236289978,
                },
              ],
            },
            Id: "3e66fc2c-721e-4ba1-89d2-223ca6cbb0c5",
          },
          {
            BlockType: "WORD",
            Confidence: 31.413061141967773,
            Text: "As",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.05112706869840622,
                Height: 0.029606303200125694,
                Left: 0,
                Top: 0.2900111973285675,
              },
              Polygon: [
                {
                  X: 0,
                  Y: 0.29112154245376587,
                },
                {
                  X: 0.051027871668338776,
                  Y: 0.2900111973285675,
                },
                {
                  X: 0.05112706869840622,
                  Y: 0.31853824853897095,
                },
                {
                  X: 0,
                  Y: 0.31961750984191895,
                },
              ],
            },
            Id: "3c0ba078-54b6-4667-a423-ff65b7d3c12a",
          },
          {
            BlockType: "WORD",
            Confidence: 50.12776184082031,
            Text: "SUPROKASHI",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.2536429166793823,
                Height: 0.040776364505290985,
                Left: 0.18883487582206726,
                Top: 0.27491122484207153,
              },
              Polygon: [
                {
                  X: 0.18883487582206726,
                  Y: 0.2803395390510559,
                },
                {
                  X: 0.44240206480026245,
                  Y: 0.27491122484207153,
                },
                {
                  X: 0.4424777925014496,
                  Y: 0.31044602394104004,
                },
                {
                  X: 0.18894103169441223,
                  Y: 0.3156875967979431,
                },
              ],
            },
            Id: "8c1a8056-9569-45a7-9142-e3c893a353c4",
          },
          {
            BlockType: "WORD",
            Confidence: 60.87809371948242,
            Text: "DUTTA",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.143179789185524,
                Height: 0.036789339035749435,
                Left: 0.46079474687576294,
                Top: 0.26919710636138916,
              },
              Polygon: [
                {
                  X: 0.46079474687576294,
                  Y: 0.27226778864860535,
                },
                {
                  X: 0.6039212346076965,
                  Y: 0.26919710636138916,
                },
                {
                  X: 0.6039745211601257,
                  Y: 0.3030157685279846,
                },
                {
                  X: 0.46086445450782776,
                  Y: 0.3059864640235901,
                },
              ],
            },
            Id: "ce2e6ba3-681f-4561-b25d-a3e9beff07b1",
          },
          {
            BlockType: "WORD",
            Confidence: 40.7470703125,
            Text: "44mgs",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.12164875119924545,
                Height: 0.042638976126909256,
                Left: 0.626351535320282,
                Top: 0.2680065333843231,
              },
              Polygon: [
                {
                  X: 0.626351535320282,
                  Y: 0.2706107497215271,
                },
                {
                  X: 0.7479569911956787,
                  Y: 0.2680065333843231,
                },
                {
                  X: 0.7480003237724304,
                  Y: 0.308141827583313,
                },
                {
                  X: 0.626411497592926,
                  Y: 0.31064552068710327,
                },
              ],
            },
            Id: "4864049f-ad2a-44ce-8f62-0c47964d0e07",
          },
          {
            BlockType: "WORD",
            Confidence: 35.78532409667969,
            Text: "11/",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.050586193799972534,
                Height: 0.05145470052957535,
                Left: 0.7592601180076599,
                Top: 0.2535480558872223,
              },
              Polygon: [
                {
                  X: 0.7592601180076599,
                  Y: 0.2546440362930298,
                },
                {
                  X: 0.8098026514053345,
                  Y: 0.2535480558872223,
                },
                {
                  X: 0.8098463416099548,
                  Y: 0.3039591610431671,
                },
                {
                  X: 0.7593125700950623,
                  Y: 0.30500274896621704,
                },
              ],
            },
            Id: "2ef85861-2b44-4ac2-aeab-6eb4c9f2fc47",
          },
          {
            BlockType: "WORD",
            Confidence: 22.59462547302246,
            Text: "0'folys",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.14861616492271423,
                Height: 0.04316858574748039,
                Left: 0.8142778873443604,
                Top: 0.2537660002708435,
              },
              Polygon: [
                {
                  X: 0.8142778873443604,
                  Y: 0.2569776177406311,
                },
                {
                  X: 0.9628804326057434,
                  Y: 0.2537660002708435,
                },
                {
                  X: 0.9628940224647522,
                  Y: 0.2938450872898102,
                },
                {
                  X: 0.8143119215965271,
                  Y: 0.296934574842453,
                },
              ],
            },
            Id: "50d85f2b-9ddd-4417-9a37-4c9eb6178bd5",
          },
          {
            BlockType: "WORD",
            Confidence: 81.14903259277344,
            Text: "Rs",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.045776430517435074,
                Height: 0.047019269317388535,
                Left: 0.11131952702999115,
                Top: 0.3119513988494873,
              },
              Polygon: [
                {
                  X: 0.11131952702999115,
                  Y: 0.3128989636898041,
                },
                {
                  X: 0.1569523960351944,
                  Y: 0.3119513988494873,
                },
                {
                  X: 0.15709595382213593,
                  Y: 0.35806697607040405,
                },
                {
                  X: 0.11147019267082214,
                  Y: 0.35897067189216614,
                },
              ],
            },
            Id: "cf8e734a-0f0c-41cd-a5d7-1b86ee0cee20",
          },
          {
            BlockType: "WORD",
            Confidence: 53.297950744628906,
            Text: "As",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.04342346638441086,
                Height: 0.03429849445819855,
                Left: 0.0012539292220026255,
                Top: 0.35860541462898254,
              },
              Polygon: [
                {
                  X: 0.0012539292220026255,
                  Y: 0.35946470499038696,
                },
                {
                  X: 0.04456023499369621,
                  Y: 0.35860541462898254,
                },
                {
                  X: 0.04467739537358284,
                  Y: 0.39207491278648376,
                },
                {
                  X: 0.001375964260660112,
                  Y: 0.3929039239883423,
                },
              ],
            },
            Id: "01ef0279-a7db-4676-af08-e607069c7b63",
          },
          {
            BlockType: "WORD",
            Confidence: 99.6192398071289,
            Text: "LANTUS",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.1499854326248169,
                Height: 0.03478354588150978,
                Left: 0.16742832958698273,
                Top: 0.3446623682975769,
              },
              Polygon: [
                {
                  X: 0.16742832958698273,
                  Y: 0.3476632833480835,
                },
                {
                  X: 0.31733208894729614,
                  Y: 0.3446623682975769,
                },
                {
                  X: 0.3174137473106384,
                  Y: 0.3765442967414856,
                },
                {
                  X: 0.16752614080905914,
                  Y: 0.3794459402561188,
                },
              ],
            },
            Id: "dc4979a4-bd3d-408e-b00c-ef8e87ecc217",
          },
          {
            BlockType: "WORD",
            Confidence: 99.9527587890625,
            Text: "36",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.054922763258218765,
                Height: 0.02862468548119068,
                Left: 0.35097548365592957,
                Top: 0.3413495719432831,
              },
              Polygon: [
                {
                  X: 0.35097548365592957,
                  Y: 0.3424495756626129,
                },
                {
                  X: 0.4058360457420349,
                  Y: 0.3413495719432831,
                },
                {
                  X: 0.40589824318885803,
                  Y: 0.36890560388565063,
                },
                {
                  X: 0.35104280710220337,
                  Y: 0.3699742555618286,
                },
              ],
            },
            Id: "990a1992-a3ef-4da6-9dee-1e1361686f24",
          },
          {
            BlockType: "WORD",
            Confidence: 97.43928527832031,
            Text: "U",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.021144544705748558,
                Height: 0.019287846982479095,
                Left: 0.4222568869590759,
                Top: 0.34826216101646423,
              },
              Polygon: [
                {
                  X: 0.4222568869590759,
                  Y: 0.3486819565296173,
                },
                {
                  X: 0.4433612823486328,
                  Y: 0.34826216101646423,
                },
                {
                  X: 0.4434014558792114,
                  Y: 0.36713844537734985,
                },
                {
                  X: 0.4222984313964844,
                  Y: 0.3675500154495239,
                },
              ],
            },
            Id: "a93e795a-b327-44f7-a7f7-7c96ef17bbda",
          },
          {
            BlockType: "WORD",
            Confidence: 29.089975357055664,
            Text: "s.clag",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.0955369845032692,
                Height: 0.056642528623342514,
                Left: 0.45304015278816223,
                Top: 0.32965201139450073,
              },
              Polygon: [
                {
                  X: 0.45304015278816223,
                  Y: 0.33158305287361145,
                },
                {
                  X: 0.5484803318977356,
                  Y: 0.32965201139450073,
                },
                {
                  X: 0.5485771298408508,
                  Y: 0.38447168469429016,
                },
                {
                  X: 0.4531547725200653,
                  Y: 0.38629454374313354,
                },
              ],
            },
            Id: "3dea5a11-39f6-4742-acd6-8d5e6e753eaa",
          },
          {
            BlockType: "WORD",
            Confidence: 95.85275268554688,
            Text: "before",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.09662432223558426,
                Height: 0.04917909577488899,
                Left: 0.5762206315994263,
                Top: 0.3252372145652771,
              },
              Polygon: [
                {
                  X: 0.5762206315994263,
                  Y: 0.3271946907043457,
                },
                {
                  X: 0.6727816462516785,
                  Y: 0.3252372145652771,
                },
                {
                  X: 0.6728449463844299,
                  Y: 0.3725530505180359,
                },
                {
                  X: 0.5762995481491089,
                  Y: 0.374416321516037,
                },
              ],
            },
            Id: "6b2155f9-c25d-4804-bcd5-936493445004",
          },
          {
            BlockType: "WORD",
            Confidence: 87.8724136352539,
            Text: "dinn",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.10289011895656586,
                Height: 0.03131132945418358,
                Left: 0.6788937449455261,
                Top: 0.3260708451271057,
              },
              Polygon: [
                {
                  X: 0.6788937449455261,
                  Y: 0.3281496465206146,
                },
                {
                  X: 0.7817556262016296,
                  Y: 0.3260708451271057,
                },
                {
                  X: 0.7817838788032532,
                  Y: 0.3553653955459595,
                },
                {
                  X: 0.678932249546051,
                  Y: 0.3573821783065796,
                },
              ],
            },
            Id: "5935e2cf-0cf0-4f46-bb5c-277ec79ea43c",
          },
          {
            BlockType: "WORD",
            Confidence: 70.05561828613281,
            Text: "R",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.02419283241033554,
                Height: 0.025197405368089676,
                Left: 0.011199701577425003,
                Top: 0.40243083238601685,
              },
              Polygon: [
                {
                  X: 0.011199701577425003,
                  Y: 0.402887225151062,
                },
                {
                  X: 0.03530508279800415,
                  Y: 0.40243083238601685,
                },
                {
                  X: 0.035392533987760544,
                  Y: 0.4271843135356903,
                },
                {
                  X: 0.011289159767329693,
                  Y: 0.4276282489299774,
                },
              ],
            },
            Id: "091eb76f-8a09-4444-bd2c-c4df34267f5f",
          },
          {
            BlockType: "WORD",
            Confidence: 99.559814453125,
            Text: "DAPANDVA",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.21943317353725433,
                Height: 0.031941063702106476,
                Left: 0.17099310457706451,
                Top: 0.38971585035324097,
              },
              Polygon: [
                {
                  X: 0.17099310457706451,
                  Y: 0.3938964009284973,
                },
                {
                  X: 0.39036181569099426,
                  Y: 0.38971585035324097,
                },
                {
                  X: 0.39042627811431885,
                  Y: 0.4176032543182373,
                },
                {
                  X: 0.17107820510864258,
                  Y: 0.42165693640708923,
                },
              ],
            },
            Id: "7f6f99ac-e1d2-4f2d-8223-243b462e1b3d",
          },
          {
            BlockType: "WORD",
            Confidence: 56.96381378173828,
            Text: "\\",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.012381433509290218,
                Height: 0.02032371610403061,
                Left: 0.4223769009113312,
                Top: 0.38847967982292175,
              },
              Polygon: [
                {
                  X: 0.4223769009113312,
                  Y: 0.38871490955352783,
                },
                {
                  X: 0.4347149729728699,
                  Y: 0.38847967982292175,
                },
                {
                  X: 0.43475833535194397,
                  Y: 0.40857329964637756,
                },
                {
                  X: 0.42242109775543213,
                  Y: 0.40880340337753296,
                },
              ],
            },
            Id: "4031cc0c-ff81-472e-b041-a89a1443a267",
          },
          {
            BlockType: "WORD",
            Confidence: 48.23262405395508,
            Text: "Ong",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.07282313704490662,
                Height: 0.03986867144703865,
                Left: 0.4426640570163727,
                Top: 0.38199281692504883,
              },
              Polygon: [
                {
                  X: 0.4426640570163727,
                  Y: 0.3833872675895691,
                },
                {
                  X: 0.5154147148132324,
                  Y: 0.38199281692504883,
                },
                {
                  X: 0.5154871940612793,
                  Y: 0.42052504420280457,
                },
                {
                  X: 0.44274604320526123,
                  Y: 0.4218614995479584,
                },
              ],
            },
            Id: "be4b39ae-c6b3-4e56-a306-a771f2b57f09",
          },
          {
            BlockType: "WORD",
            Confidence: 99.33029174804688,
            Text: "before",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.1056818887591362,
                Height: 0.04620838910341263,
                Left: 0.5533095598220825,
                Top: 0.3848020136356354,
              },
              Polygon: [
                {
                  X: 0.5533095598220825,
                  Y: 0.3868143856525421,
                },
                {
                  X: 0.6589300632476807,
                  Y: 0.3848020136356354,
                },
                {
                  X: 0.6589914560317993,
                  Y: 0.42909449338912964,
                },
                {
                  X: 0.553386926651001,
                  Y: 0.4310103952884674,
                },
              ],
            },
            Id: "f9a39ce2-d68d-4f74-b959-6faceca6478f",
          },
          {
            BlockType: "WORD",
            Confidence: 34.2519416809082,
            Text: "before",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.18402191996574402,
                Height: 0.06764435023069382,
                Left: 0.6760372519493103,
                Top: 0.35636356472969055,
              },
              Polygon: [
                {
                  X: 0.6760372519493103,
                  Y: 0.3599615693092346,
                },
                {
                  X: 0.8600145578384399,
                  Y: 0.35636356472969055,
                },
                {
                  X: 0.8600592017173767,
                  Y: 0.4206528663635254,
                },
                {
                  X: 0.6761223077774048,
                  Y: 0.42400792241096497,
                },
              ],
            },
            Id: "8f49e27f-9ede-49ee-beb0-9dad43c6f736",
          },
          {
            BlockType: "WORD",
            Confidence: 29.74258041381836,
            Text: "ration",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.10940870642662048,
                Height: 0.05712227523326874,
                Left: 0.006053594872355461,
                Top: 0.4734324812889099,
              },
              Polygon: [
                {
                  X: 0.006053594872355461,
                  Y: 0.47533583641052246,
                },
                {
                  X: 0.11528196930885315,
                  Y: 0.4734324812889099,
                },
                {
                  X: 0.1154623031616211,
                  Y: 0.5287774801254272,
                },
                {
                  X: 0.006254282314330339,
                  Y: 0.5305547714233398,
                },
              ],
            },
            Id: "c2d90f39-814c-4079-bad3-d4e4012021b4",
          },
          {
            BlockType: "WORD",
            Confidence: 83.37368774414062,
            Text: "&",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.029691431671380997,
                Height: 0.018670381978154182,
                Left: 0.03349803015589714,
                Top: 0.5154752135276794,
              },
              Polygon: [
                {
                  X: 0.03349803015589714,
                  Y: 0.5159661769866943,
                },
                {
                  X: 0.06312691420316696,
                  Y: 0.5154752135276794,
                },
                {
                  X: 0.06318946182727814,
                  Y: 0.5336659550666809,
                },
                {
                  X: 0.033562395721673965,
                  Y: 0.5341455936431885,
                },
              ],
            },
            Id: "2aa8d3eb-773b-4ba1-a067-8351f62faa0b",
          },
          {
            BlockType: "WORD",
            Confidence: 92.99855041503906,
            Text: "ISTAVEL",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.18888957798480988,
                Height: 0.03656835854053497,
                Left: 0.17105093598365784,
                Top: 0.4736548364162445,
              },
              Polygon: [
                {
                  X: 0.17105093598365784,
                  Y: 0.47692736983299255,
                },
                {
                  X: 0.35985973477363586,
                  Y: 0.4736548364162445,
                },
                {
                  X: 0.3599405288696289,
                  Y: 0.5070815682411194,
                },
                {
                  X: 0.17115303874015808,
                  Y: 0.5102232098579407,
                },
              ],
            },
            Id: "367bf711-e015-41d9-a9fc-121a89e48113",
          },
          {
            BlockType: "WORD",
            Confidence: 87.0519027709961,
            Text: "100mg",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.1386934071779251,
                Height: 0.04992673918604851,
                Left: 0.3961390256881714,
                Top: 0.46724405884742737,
              },
              Polygon: [
                {
                  X: 0.3961390256881714,
                  Y: 0.4696561098098755,
                },
                {
                  X: 0.534745991230011,
                  Y: 0.46724405884742737,
                },
                {
                  X: 0.5348324775695801,
                  Y: 0.5148952603340149,
                },
                {
                  X: 0.396247923374176,
                  Y: 0.517170786857605,
                },
              ],
            },
            Id: "8cc029fe-cfe6-4edd-9c02-cfd050e376f3",
          },
          {
            BlockType: "WORD",
            Confidence: 99.86756134033203,
            Text: "before",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.11094846576452255,
                Height: 0.05247444659471512,
                Left: 0.5561437010765076,
                Top: 0.4448661804199219,
              },
              Polygon: [
                {
                  X: 0.5561437010765076,
                  Y: 0.4468414783477783,
                },
                {
                  X: 0.6670234203338623,
                  Y: 0.4448661804199219,
                },
                {
                  X: 0.6670922040939331,
                  Y: 0.4954809844493866,
                },
                {
                  X: 0.5562316179275513,
                  Y: 0.4973406195640564,
                },
              ],
            },
            Id: "330d6a08-f369-4f50-847f-b4bf71061809",
          },
          {
            BlockType: "WORD",
            Confidence: 31.966833114624023,
            Text: "lanch",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.11471091210842133,
                Height: 0.047747496515512466,
                Left: 0.6799633502960205,
                Top: 0.4256643056869507,
              },
              Polygon: [
                {
                  X: 0.6799633502960205,
                  Y: 0.4277469217777252,
                },
                {
                  X: 0.7946321368217468,
                  Y: 0.4256643056869507,
                },
                {
                  X: 0.794674277305603,
                  Y: 0.47143712639808655,
                },
                {
                  X: 0.6800233721733093,
                  Y: 0.47341182827949524,
                },
              ],
            },
            Id: "6c59af82-403a-4826-84ff-0a418c08ced5",
          },
          {
            BlockType: "WORD",
            Confidence: 73.69129943847656,
            Text: "VOGLI",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.10605291277170181,
                Height: 0.02978776954114437,
                Left: 0.1746966391801834,
                Top: 0.429047167301178,
              },
              Polygon: [
                {
                  X: 0.1746966391801834,
                  Y: 0.4309850037097931,
                },
                {
                  X: 0.2806745171546936,
                  Y: 0.429047167301178,
                },
                {
                  X: 0.2807495594024658,
                  Y: 0.4569585621356964,
                },
                {
                  X: 0.1747816801071167,
                  Y: 0.4588349461555481,
                },
              ],
            },
            Id: "b20ff9e1-aef2-48ee-bb0e-e067fb39afc8",
          },
          {
            BlockType: "WORD",
            Confidence: 96.44038391113281,
            Text: "0.3mg",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.1390659660100937,
                Height: 0.04855233430862427,
                Left: 0.3235255479812622,
                Top: 0.41769319772720337,
              },
              Polygon: [
                {
                  X: 0.3235255479812622,
                  Y: 0.4202573597431183,
                },
                {
                  X: 0.46249639987945557,
                  Y: 0.41769319772720337,
                },
                {
                  X: 0.4625915288925171,
                  Y: 0.46381404995918274,
                },
                {
                  X: 0.32364243268966675,
                  Y: 0.46624553203582764,
                },
              ],
            },
            Id: "96c3bef5-6474-4557-85c2-7c83630f434a",
          },
          {
            BlockType: "WORD",
            Confidence: 99.00505828857422,
            Text: "ROSEDAY",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.1936628222465515,
                Height: 0.035715263336896896,
                Left: 0.1789654642343521,
                Top: 0.50995272397995,
              },
              Polygon: [
                {
                  X: 0.1789654642343521,
                  Y: 0.513161838054657,
                },
                {
                  X: 0.3725508451461792,
                  Y: 0.50995272397995,
                },
                {
                  X: 0.37262827157974243,
                  Y: 0.5425899028778076,
                },
                {
                  X: 0.17906427383422852,
                  Y: 0.5456680059432983,
                },
              ],
            },
            Id: "6937e021-aff7-42b0-b0ab-7b96e64fa560",
          },
          {
            BlockType: "WORD",
            Confidence: 34.05398178100586,
            Text: "Ong",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.09504211694002151,
                Height: 0.04246469587087631,
                Left: 0.4434506297111511,
                Top: 0.5027462840080261,
              },
              Polygon: [
                {
                  X: 0.4434506297111511,
                  Y: 0.5043293237686157,
                },
                {
                  X: 0.5384189486503601,
                  Y: 0.5027462840080261,
                },
                {
                  X: 0.538492739200592,
                  Y: 0.543708324432373,
                },
                {
                  X: 0.4435376822948456,
                  Y: 0.5452109575271606,
                },
              ],
            },
            Id: "81296ce6-3d19-41bf-bbc7-e81f1d4b8fa1",
          },
          {
            BlockType: "WORD",
            Confidence: 65.53329467773438,
            Text: "NEUROBIAN",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.2328273057937622,
                Height: 0.054207365959882736,
                Left: 0.17148083448410034,
                Top: 0.5398443341255188,
              },
              Polygon: [
                {
                  X: 0.17148083448410034,
                  Y: 0.543555736541748,
                },
                {
                  X: 0.404193252325058,
                  Y: 0.5398443341255188,
                },
                {
                  X: 0.40430814027786255,
                  Y: 0.5905849933624268,
                },
                {
                  X: 0.17163564264774323,
                  Y: 0.594051718711853,
                },
              ],
            },
            Id: "996b0391-7394-4469-b910-75ba89dee2c2",
          },
          {
            BlockType: "WORD",
            Confidence: 80.1519775390625,
            Text: "Chuk",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.11307124048471451,
                Height: 0.03143654018640518,
                Left: 0.17395204305648804,
                Top: 0.6018646359443665,
              },
              Polygon: [
                {
                  X: 0.17395204305648804,
                  Y: 0.6035258769989014,
                },
                {
                  X: 0.286943644285202,
                  Y: 0.6018646359443665,
                },
                {
                  X: 0.28702327609062195,
                  Y: 0.6317099928855896,
                },
                {
                  X: 0.17404308915138245,
                  Y: 0.6333011984825134,
                },
              ],
            },
            Id: "57065645-e998-4c00-8b70-bb2881b8e2c9",
          },
          {
            BlockType: "WORD",
            Confidence: 81.24478149414062,
            Text: "FBG,",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.10989371687173843,
                Height: 0.03398234769701958,
                Left: 0.3115314841270447,
                Top: 0.5889875888824463,
              },
              Polygon: [
                {
                  X: 0.3115314841270447,
                  Y: 0.5906269550323486,
                },
                {
                  X: 0.42135369777679443,
                  Y: 0.5889875888824463,
                },
                {
                  X: 0.4214251935482025,
                  Y: 0.6214042901992798,
                },
                {
                  X: 0.3116150498390198,
                  Y: 0.622969925403595,
                },
              ],
            },
            Id: "18f95d26-490b-4a43-85de-6dc5c7125142",
          },
          {
            BlockType: "WORD",
            Confidence: 39.17869567871094,
            Text: "FORTE",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.10170283168554306,
                Height: 0.03116012178361416,
                Left: 0.4306483864784241,
                Top: 0.5329167246818542,
              },
              Polygon: [
                {
                  X: 0.4306483864784241,
                  Y: 0.5345481038093567,
                },
                {
                  X: 0.5322972536087036,
                  Y: 0.5329167246818542,
                },
                {
                  X: 0.5323511958122253,
                  Y: 0.5625076293945312,
                },
                {
                  X: 0.4307125508785248,
                  Y: 0.564076840877533,
                },
              ],
            },
            Id: "43513405-2f52-4676-b88d-ca11af8f7800",
          },
          {
            BlockType: "WORD",
            Confidence: 97.01964569091797,
            Text: "PPBG",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.11725126206874847,
                Height: 0.03170597180724144,
                Left: 0.45418092608451843,
                Top: 0.5749766230583191,
              },
              Polygon: [
                {
                  X: 0.45418092608451843,
                  Y: 0.5767545104026794,
                },
                {
                  X: 0.5713815093040466,
                  Y: 0.5749766230583191,
                },
                {
                  X: 0.5714321732521057,
                  Y: 0.6049772500991821,
                },
                {
                  X: 0.454243540763855,
                  Y: 0.6066825985908508,
                },
              ],
            },
            Id: "4805e5c4-8172-4cab-84bc-661a7ed03d1d",
          },
          {
            BlockType: "WORD",
            Confidence: 96.83943176269531,
            Text: "regularly",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.19379422068595886,
                Height: 0.06452244520187378,
                Left: 0.6017456650733948,
                Top: 0.5490623712539673,
              },
              Polygon: [
                {
                  X: 0.6017456650733948,
                  Y: 0.5520907640457153,
                },
                {
                  X: 0.7954832911491394,
                  Y: 0.5490623712539673,
                },
                {
                  X: 0.795539915561676,
                  Y: 0.6108022332191467,
                },
                {
                  X: 0.6018431186676025,
                  Y: 0.6135848164558411,
                },
              ],
            },
            Id: "abbb39e1-9433-430e-8bd2-f94f4be2a7fe",
          },
          {
            BlockType: "WORD",
            Confidence: 51.42583084106445,
            Text: ".",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.008059642277657986,
                Height: 0.005954894702881575,
                Left: 0.704240620136261,
                Top: 0.607640266418457,
              },
              Polygon: [
                {
                  X: 0.704240620136261,
                  Y: 0.6077566146850586,
                },
                {
                  X: 0.7122932076454163,
                  Y: 0.607640266418457,
                },
                {
                  X: 0.7123002409934998,
                  Y: 0.6134796738624573,
                },
                {
                  X: 0.7042478322982788,
                  Y: 0.6135951280593872,
                },
              ],
            },
            Id: "1aa8db61-d53a-423e-b4e4-b6d30255816d",
          },
          {
            BlockType: "WORD",
            Confidence: 26.780546188354492,
            Text: "dorech",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.1727544218301773,
                Height: 0.044125281274318695,
                Left: 0.8143208622932434,
                Top: 0.5331161618232727,
              },
              Polygon: [
                {
                  X: 0.8143208622932434,
                  Y: 0.5358620882034302,
                },
                {
                  X: 0.9870645999908447,
                  Y: 0.5331161618232727,
                },
                {
                  X: 0.9870752692222595,
                  Y: 0.5746423602104187,
                },
                {
                  X: 0.8143561482429504,
                  Y: 0.5772414803504944,
                },
              ],
            },
            Id: "57a18771-58bc-4786-afea-f3adc7f5b6c5",
          },
          {
            BlockType: "WORD",
            Confidence: 51.025726318359375,
            Text: "thought",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.13571929931640625,
                Height: 0.04731636866927147,
                Left: 0.5337644815444946,
                Top: 0.6012070775032043,
              },
              Polygon: [
                {
                  X: 0.5337644815444946,
                  Y: 0.6031876802444458,
                },
                {
                  X: 0.6694223284721375,
                  Y: 0.6012070775032043,
                },
                {
                  X: 0.6694837808609009,
                  Y: 0.6466699242591858,
                },
                {
                  X: 0.533846914768219,
                  Y: 0.6485234498977661,
                },
              ],
            },
            Id: "62d11a09-ca58-4630-8096-086352703238",
          },
          {
            BlockType: "WORD",
            Confidence: 89.16322326660156,
            Text: "-",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.03660254925489426,
                Height: 0.010875968262553215,
                Left: 0.318205326795578,
                Top: 0.6691759824752808,
              },
              Polygon: [
                {
                  X: 0.318205326795578,
                  Y: 0.6696620583534241,
                },
                {
                  X: 0.3547825515270233,
                  Y: 0.6691759824752808,
                },
                {
                  X: 0.35480785369873047,
                  Y: 0.6795737743377686,
                },
                {
                  X: 0.3182319402694702,
                  Y: 0.6800519227981567,
                },
              ],
            },
            Id: "bc1ae83c-ca76-46f7-a5df-2e73d65d9ec0",
          },
          {
            BlockType: "WORD",
            Confidence: 99.96498107910156,
            Text: "F",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.026136932894587517,
                Height: 0.025631960481405258,
                Left: 0.38054102659225464,
                Top: 0.6516805291175842,
              },
              Polygon: [
                {
                  X: 0.38054102659225464,
                  Y: 0.652036190032959,
                },
                {
                  X: 0.40662088990211487,
                  Y: 0.6516805291175842,
                },
                {
                  X: 0.4066779613494873,
                  Y: 0.6769705414772034,
                },
                {
                  X: 0.38060033321380615,
                  Y: 0.6773124933242798,
                },
              ],
            },
            Id: "49a144ce-7721-4ffe-8650-65d16ef72444",
          },
          {
            BlockType: "WORD",
            Confidence: 22.99915313720703,
            Text: "100-110-110",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.20490531623363495,
                Height: 0.02750525251030922,
                Left: 0.43075627088546753,
                Top: 0.63593590259552,
              },
              Polygon: [
                {
                  X: 0.43075627088546753,
                  Y: 0.6387827396392822,
                },
                {
                  X: 0.6356252431869507,
                  Y: 0.63593590259552,
                },
                {
                  X: 0.6356616020202637,
                  Y: 0.6606989502906799,
                },
                {
                  X: 0.4308098554611206,
                  Y: 0.6634411811828613,
                },
              ],
            },
            Id: "c3418df8-eee4-4bfa-834e-36ab61e36bcd",
          },
          {
            BlockType: "WORD",
            Confidence: 72.7000503540039,
            Text: "pp",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.05789698287844658,
                Height: 0.03158149868249893,
                Left: 0.3908596634864807,
                Top: 0.675295889377594,
              },
              Polygon: [
                {
                  X: 0.3908596634864807,
                  Y: 0.6760556101799011,
                },
                {
                  X: 0.4486914873123169,
                  Y: 0.675295889377594,
                },
                {
                  X: 0.4487566649913788,
                  Y: 0.7061546444892883,
                },
                {
                  X: 0.3909309208393097,
                  Y: 0.7068774104118347,
                },
              ],
            },
            Id: "3dc0ba02-9761-4d26-91da-18d91f10fe41",
          },
          {
            BlockType: "WORD",
            Confidence: 91.33749389648438,
            Text: "140-",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.07925878465175629,
                Height: 0.0246433075517416,
                Left: 0.45811185240745544,
                Top: 0.6662293672561646,
              },
              Polygon: [
                {
                  X: 0.45811185240745544,
                  Y: 0.6672829389572144,
                },
                {
                  X: 0.5373279452323914,
                  Y: 0.6662293672561646,
                },
                {
                  X: 0.5373706221580505,
                  Y: 0.6898578405380249,
                },
                {
                  X: 0.4581609070301056,
                  Y: 0.6908727288246155,
                },
              ],
            },
            Id: "88bcf1f5-3785-49cd-9032-6e982880929e",
          },
          {
            BlockType: "WORD",
            Confidence: 25.05919075012207,
            Text: "15th ng",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.09971954673528671,
                Height: 0.027746638283133507,
                Left: 0.5442885160446167,
                Top: 0.661090612411499,
              },
              Polygon: [
                {
                  X: 0.5442885160446167,
                  Y: 0.6624239683151245,
                },
                {
                  X: 0.6439699530601501,
                  Y: 0.661090612411499,
                },
                {
                  X: 0.6440080404281616,
                  Y: 0.6875582933425903,
                },
                {
                  X: 0.5443356037139893,
                  Y: 0.6888372898101807,
                },
              ],
            },
            Id: "d5064899-12e1-4dd1-a812-338f47653432",
          },
          {
            BlockType: "WORD",
            Confidence: 66.78565216064453,
            Text: "No.",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.043540339916944504,
                Height: 0.030670298263430595,
                Left: 0.6519114971160889,
                Top: 0.6511344909667969,
              },
              Polygon: [
                {
                  X: 0.6519114971160889,
                  Y: 0.6517246961593628,
                },
                {
                  X: 0.6954138278961182,
                  Y: 0.6511344909667969,
                },
                {
                  X: 0.6954518556594849,
                  Y: 0.6812416315078735,
                },
                {
                  X: 0.6519539952278137,
                  Y: 0.6818048357963562,
                },
              ],
            },
            Id: "160f0691-d43c-4ac0-8e7e-28bd927e5199",
          },
          {
            BlockType: "WORD",
            Confidence: 99.63835906982422,
            Text: "Urine",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.1192232146859169,
                Height: 0.035955991595983505,
                Left: 0.21425345540046692,
                Top: 0.7136138081550598,
              },
              Polygon: [
                {
                  X: 0.21425345540046692,
                  Y: 0.7150880694389343,
                },
                {
                  X: 0.33338993787765503,
                  Y: 0.7136138081550598,
                },
                {
                  X: 0.3334766626358032,
                  Y: 0.7481809258460999,
                },
                {
                  X: 0.21435415744781494,
                  Y: 0.7495697736740112,
                },
              ],
            },
            Id: "6e9641d8-2cb6-4db6-80e8-141642a3cc00",
          },
          {
            BlockType: "WORD",
            Confidence: 97.6366195678711,
            Text: "ACR",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.09372200071811676,
                Height: 0.029915940016508102,
                Left: 0.35001811385154724,
                Top: 0.7083978652954102,
              },
              Polygon: [
                {
                  X: 0.35001811385154724,
                  Y: 0.7095643281936646,
                },
                {
                  X: 0.44367876648902893,
                  Y: 0.7083978652954102,
                },
                {
                  X: 0.4437401294708252,
                  Y: 0.7372031211853027,
                },
                {
                  X: 0.35008862614631653,
                  Y: 0.7383137941360474,
                },
              ],
            },
            Id: "3caa247e-e466-4dc2-9ab5-4eacf64df2e0",
          },
          {
            BlockType: "WORD",
            Confidence: 19.96227264404297,
            Text: "(GPOS)",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.16599403321743011,
                Height: 0.06081442907452583,
                Left: 0.44602179527282715,
                Top: 0.6827557682991028,
              },
              Polygon: [
                {
                  X: 0.44602179527282715,
                  Y: 0.6849023699760437,
                },
                {
                  X: 0.6119245886802673,
                  Y: 0.6827557682991028,
                },
                {
                  X: 0.6120158433914185,
                  Y: 0.7416250109672546,
                },
                {
                  X: 0.44614624977111816,
                  Y: 0.7435702085494995,
                },
              ],
            },
            Id: "7162b6c3-652a-4b4d-875a-802e0886a48d",
          },
          {
            BlockType: "WORD",
            Confidence: 21.001649856567383,
            Text: "Harl.",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.15376536548137665,
                Height: 0.042895931750535965,
                Left: 0.6538393497467041,
                Top: 0.7028017044067383,
              },
              Polygon: [
                {
                  X: 0.6538393497467041,
                  Y: 0.7047196626663208,
                },
                {
                  X: 0.8075687289237976,
                  Y: 0.7028017044067383,
                },
                {
                  X: 0.8076047301292419,
                  Y: 0.743909478187561,
                },
                {
                  X: 0.6538969278335571,
                  Y: 0.7456976771354675,
                },
              ],
            },
            Id: "1d9489d3-4aa8-4b4c-b41f-8949898be649",
          },
          {
            BlockType: "WORD",
            Confidence: 38.652740478515625,
            Text: "Jafa",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.10751338303089142,
                Height: 0.0807502344250679,
                Left: 0.8109841346740723,
                Top: 0.6557171940803528,
              },
              Polygon: [
                {
                  X: 0.8109841346740723,
                  Y: 0.6571584939956665,
                },
                {
                  X: 0.9184582829475403,
                  Y: 0.6557171940803528,
                },
                {
                  X: 0.9184975624084473,
                  Y: 0.7352011203765869,
                },
                {
                  X: 0.811052680015564,
                  Y: 0.7364674210548401,
                },
              ],
            },
            Id: "8d240e83-66ab-4265-9f10-f76f3909fa97",
          },
          {
            BlockType: "WORD",
            Confidence: 49.984066009521484,
            Text: "-",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.07345930486917496,
                Height: 0.019846277311444283,
                Left: 0.9157096743583679,
                Top: 0.6959009766578674,
              },
              Polygon: [
                {
                  X: 0.9157096743583679,
                  Y: 0.696824312210083,
                },
                {
                  X: 0.9891642332077026,
                  Y: 0.6959009766578674,
                },
                {
                  X: 0.9891690015792847,
                  Y: 0.7148523330688477,
                },
                {
                  X: 0.915719211101532,
                  Y: 0.7157472372055054,
                },
              ],
            },
            Id: "5829b743-ad45-479f-8909-74ae7910fdb9",
          },
          {
            BlockType: "WORD",
            Confidence: 50.832008361816406,
            Text: "2",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.053830597549676895,
                Height: 0.02772383578121662,
                Left: 0.9272915124893188,
                Top: 0.6664804220199585,
              },
              Polygon: [
                {
                  X: 0.9272915124893188,
                  Y: 0.6671894788742065,
                },
                {
                  X: 0.9811146259307861,
                  Y: 0.6664804220199585,
                },
                {
                  X: 0.9811221361160278,
                  Y: 0.6935250163078308,
                },
                {
                  X: 0.9273040294647217,
                  Y: 0.6942042708396912,
                },
              ],
            },
            Id: "2556190a-f115-40f3-a242-001f6d3e0c89",
          },
          {
            BlockType: "WORD",
            Confidence: 64.41380310058594,
            Text: ", Blood",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.16595259308815002,
                Height: 0.04390363767743111,
                Left: 0.1827426701784134,
                Top: 0.748810887336731,
              },
              Polygon: [
                {
                  X: 0.1827426701784134,
                  Y: 0.7507417798042297,
                },
                {
                  X: 0.34859174489974976,
                  Y: 0.748810887336731,
                },
                {
                  X: 0.3486952781677246,
                  Y: 0.7909284234046936,
                },
                {
                  X: 0.1828698068857193,
                  Y: 0.792714536190033,
                },
              ],
            },
            Id: "5538b4d1-f99a-4cb5-a139-f7048a95c9ed",
          },
          {
            BlockType: "WORD",
            Confidence: 75.79052734375,
            Text: "/",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.013892801478505135,
                Height: 0.016196129843592644,
                Left: 0.18572300672531128,
                Top: 0.77557772397995,
              },
              Polygon: [
                {
                  X: 0.18572300672531128,
                  Y: 0.7757317423820496,
                },
                {
                  X: 0.19956813752651215,
                  Y: 0.77557772397995,
                },
                {
                  X: 0.19961582124233246,
                  Y: 0.7916244864463806,
                },
                {
                  X: 0.18577145040035248,
                  Y: 0.7917738556861877,
                },
              ],
            },
            Id: "248510ab-a5e6-4f5d-9507-971279cf3f9d",
          },
          {
            BlockType: "WORD",
            Confidence: 33.77278137207031,
            Text: ",",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.013138877227902412,
                Height: 0.013507065363228321,
                Left: 0.18664050102233887,
                Top: 0.7385724782943726,
              },
              Polygon: [
                {
                  X: 0.18664050102233887,
                  Y: 0.7387282252311707,
                },
                {
                  X: 0.1997397094964981,
                  Y: 0.7385724782943726,
                },
                {
                  X: 0.19977937638759613,
                  Y: 0.7519274353981018,
                },
                {
                  X: 0.18668076395988464,
                  Y: 0.7520795464515686,
                },
              ],
            },
            Id: "210eaa31-e0f6-40b8-b93f-a34d0a0432cb",
          },
          {
            BlockType: "WORD",
            Confidence: 71.83983612060547,
            Text: "Singar",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.13801278173923492,
                Height: 0.058629002422094345,
                Left: 0.38148367404937744,
                Top: 0.736055850982666,
              },
              Polygon: [
                {
                  X: 0.38148367404937744,
                  Y: 0.7376920580863953,
                },
                {
                  X: 0.5193896293640137,
                  Y: 0.736055850982666,
                },
                {
                  X: 0.5194964408874512,
                  Y: 0.7932114601135254,
                },
                {
                  X: 0.3816172778606415,
                  Y: 0.7946848273277283,
                },
              ],
            },
            Id: "17514801-ab13-417c-b3da-6fabbdc3c4a0",
          },
          {
            BlockType: "WORD",
            Confidence: 73.85974884033203,
            Text: "<",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.036162059754133224,
                Height: 0.022173840552568436,
                Left: 0.520223081111908,
                Top: 0.7384481430053711,
              },
              Polygon: [
                {
                  X: 0.520223081111908,
                  Y: 0.738874614238739,
                },
                {
                  X: 0.5563472509384155,
                  Y: 0.7384481430053711,
                },
                {
                  X: 0.5563851594924927,
                  Y: 0.760211706161499,
                },
                {
                  X: 0.520263671875,
                  Y: 0.760621964931488,
                },
              ],
            },
            Id: "7a23544a-b753-4305-b36c-e65d3bb6d69e",
          },
          {
            BlockType: "WORD",
            Confidence: 34.17426300048828,
            Text: "pp'",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.06663531064987183,
                Height: 0.02788655087351799,
                Left: 0.562717854976654,
                Top: 0.7388454079627991,
              },
              Polygon: [
                {
                  X: 0.562717854976654,
                  Y: 0.7396299242973328,
                },
                {
                  X: 0.6293127536773682,
                  Y: 0.7388454079627991,
                },
                {
                  X: 0.6293531656265259,
                  Y: 0.7659847140312195,
                },
                {
                  X: 0.5627644658088684,
                  Y: 0.7667319774627686,
                },
              ],
            },
            Id: "e0e82769-0380-473c-bc28-b011b7879334",
          },
          {
            BlockType: "WORD",
            Confidence: 25.124004364013672,
            Text: "For",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.06776109337806702,
                Height: 0.028608057647943497,
                Left: 0.5633406043052673,
                Top: 0.7186173796653748,
              },
              Polygon: [
                {
                  X: 0.5633406043052673,
                  Y: 0.7194433212280273,
                },
                {
                  X: 0.6310604214668274,
                  Y: 0.7186173796653748,
                },
                {
                  X: 0.6311017274856567,
                  Y: 0.7464383840560913,
                },
                {
                  X: 0.5633883476257324,
                  Y: 0.7472254633903503,
                },
              ],
            },
            Id: "685fb936-3e73-41a6-9f11-11c0ab45b1bf",
          },
          {
            BlockType: "WORD",
            Confidence: 44.104705810546875,
            Text: "the",
            TextType: "HANDWRITING",
            Geometry: {
              BoundingBox: {
                Width: 0.14528727531433105,
                Height: 0.09743412584066391,
                Left: 0.8510496616363525,
                Top: 0.7213118076324463,
              },
              Polygon: [
                {
                  X: 0.8510496616363525,
                  Y: 0.72306227684021,
                },
                {
                  X: 0.9963153004646301,
                  Y: 0.7213118076324463,
                },
                {
                  X: 0.9963369369506836,
                  Y: 0.817280650138855,
                },
                {
                  X: 0.8511191606521606,
                  Y: 0.8187459707260132,
                },
              ],
            },
            Id: "a82f69f1-03e3-41c8-ac90-8cef3f56de0e",
          },
        ]}
        image_ocr_map={[]}
        editable_data={editable_data}
        customize_data={[
          {
            title: "test_custum",
            mandatory: "non-mandatory",
            input_type: "input",
            description: "",
            default_type: "sku",
            display_label: "test_custum",
            other_default_value: "",
            history_hide: true,
            readonly: true,
            content: "test123",
          },
          {
            title: "test_result_data",
            mandatory: "non-mandatory",
            input_type: "dependentDropdown",
            description: "",
            default_type: "test_result_data",
            display_label: "Test Result Data",
            other_default_value: "",
            history_hide: true,
            readonly: true,
          },
        ]}
      />
    </div>
  )
}

