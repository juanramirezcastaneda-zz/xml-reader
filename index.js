const fs = require("fs");
const xml2js = require("xml2js");
const libxmljs = require("libxmljs");

const db = {
  save: (jsonObjectToSave) => {
    return new Promise((resolve, reject) => {
      console.log("DB Operation", jsonObjectToSave);
      resolve({ Updated: "True" });
    });
  },
};

async function readFile(path, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, encoding, function (err, data) {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

async function parseFile(text) {
  const result = await xml2js.parseStringPromise(text, {});
  const jsonResult = JSON.stringify(result);

  return jsonResult;
}

async function saveJSON(jsonObject) {
  await db.save(jsonObject);
}

const localFilePath =
  "/Users/juanramirezcastaneda/DevelopmentProjects/xml-reader/CodeTest-XML.xml";

readFile(localFilePath, "utf-8")
  .then(parseFile)
  .then(saveJSON)
  .catch((err) => {
    console.error(err);
  });