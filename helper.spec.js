const { saveJSON } = require("./helper.js");

describe("XML Loader Test Suite", () => {
  it("should call the save method from DB", () => {
    const givenJSONObject = { Hello: "World" };
    saveJSON(givenJSONObject).then((result) => {
      expect(result["Updated"]).toEqual("True");
    });
  });

  it("should call the read file with path and enconding", () => {
    const givenPath = "./fake.xml";
  });
});
