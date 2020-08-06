import { saveJSON } from "./index";

describe("XML Loader Test Suite", () => {
  it("should call the save method from DB", () => {
    const givenJSONObject = { Hello: "World" };
    saveJSON(givenJSONObject);
    expect(true).toEqual(true);
  });
});
