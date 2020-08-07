const { saveJSON, readFile, parseFile } = require("./helper.js");

const localFilePath =
  "/Users/juanramirezcastaneda/DevelopmentProjects/xml-reader/CodeTest-XML.xml";

readFile(localFilePath, "utf-8")
  .then(parseFile)
  .then(saveJSON)
  .catch((err) => {
    console.error(err);
  });
