import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from "react";
import Annotator from "../Annotator";
export default (function () {
  var _useState = useState({
    taskDescription: "Annotate each image according to this _markdown_ specification.",
    regionTagList: ["has-bun"],
    regionClsList: ["hotdog", "not-hotdog"],
    enabledTools: ["select", "create-box"],
    images: [{
      src: "https://images.unsplash.com/photo-1496905583330-eb54c7e5915a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      name: "hot-dogs-1"
    }, {
      src: "https://www.bianchi.com/wp-content/uploads/2019/07/YPB17I555K.jpg",
      name: "bianchi-oltre-xr4"
    }],
    allowComments: true
  }),
      _useState2 = _slicedToArray(_useState, 2),
      annotatorProps = _useState2[0],
      changeAnnotatorProps = _useState2[1];

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Annotator, Object.assign({
    hideFullScreen: true
  }, annotatorProps, {
    onExit: function onExit(e) {
      return console.log(e);
    }
  })));
});