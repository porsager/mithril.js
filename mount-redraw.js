"use strict"

var render = require("./render")

module.exports = require("./api/mount-redraw")(render, window.requestAnimationFrame, console)
