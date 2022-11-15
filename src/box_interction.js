/** @format */

// Coordinates:- top-left (x1,y1), bottom-right (x2,y2)

export const textractObjects = (blocks) => {
  // send image to textract and get the response
  // Temporarily using sample response and sample height,width of image
  console.log(blocks)
  var img_height = 500
  var img_width = 500
  var textractResp = {
    Blocks: blocks || [],
  }
  try {
    // parse textract response and create list of objects
    var op_json = []
    var respBlocks = textractResp["Blocks"]
    for (let i = 0; i < respBlocks.length; i++) {
      var txt_obj = respBlocks[i]
      if (txt_obj["BlockType"] === "WORD") {
        var txt_bb = txt_obj["Geometry"]["BoundingBox"]
        var x1 = txt_bb["Left"] * img_width
        var y1 = txt_bb["Top"] * img_height
        var x2 = (txt_bb["Left"] + txt_bb["Width"]) * img_width
        var y2 = (txt_bb["Top"] + txt_bb["Height"]) * img_height
        op_json.push({ Text: txt_obj["Text"], x1: x1, y1: y1, x2: x2, y2: y2 })
      }
    }
    return op_json
  } catch {
    console.log("text interaction")
  }
}

export const bb_intersection = (ip_bb, bb_list) => {
  // function to return objects from bb_list which intersect with ip_bb box
  try {
    var op_txts = []
    for (let txt in bb_list) {
      var bb_obj = bb_list[txt]
      if (
        !(
          ip_bb.x1 > bb_obj.x2 ||
          ip_bb.x2 < bb_obj.x1 ||
          ip_bb.y1 > bb_obj.y2 ||
          ip_bb.y2 < bb_obj.y1
        )
      ) {
        op_txts.push(bb_obj)
      }
    }
    return op_txts
  } catch {
    console.log("bb_inter")
  }
}
