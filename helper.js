const fs = require("fs");
const xml2js = require("xml2js");

const db = {
  save: (jsonObjectToSave) => {
    return new Promise((resolve, reject) => {
      console.log("DB Operation", jsonObjectToSave);
      resolve({ Updated: "True" });
    });
  },
};

exports.saveJSON = async (jsonObject) => {
  return await db.save(jsonObject);
};

exports.parseText = async (text) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await xml2js.parseStringPromise(text, {});
      const jsonResult = JSON.stringify(result);
      resolve(jsonResult);
    } catch (error) {
      reject(error);
    }
  });
};

exports.readFile = async (path, encoding) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, encoding, function (err, data) {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};
