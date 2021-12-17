const fs = require("fs");
const downloadVideos = require("../src/downloadVideos");

let filename = process.argv[2] || "videos.json";

path = require('path')

// console.log(path.join(__dirname , '..\\src\\course-video-lists\\all.json'));
videos = JSON.parse(fs.readFileSync(__dirname + "\\..\\src\\" + filename));

!(async () => {
  await downloadVideos(videos);
})();
