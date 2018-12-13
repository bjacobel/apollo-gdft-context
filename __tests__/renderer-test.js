/**
 * @jest-environment node
 */
import React from "react";

import renderer from "../renderer";
import MyContext from "../MyContext";

describe("apollo-client getDataFromTree repro case", () => {
  it("gives the ContextEater component the correct context type", async () => {
    const createElSpy = jest.spyOn(React, "createElement");
    const result = await renderer();
    expect(result).toEqual("Context: a string | Data: 1");
    const contextEater = createElSpy.mock.calls.find(
      ([call]) => call.prototype && call.prototype.constructor.name === "ContextEater"
    )[0];
    expect(contextEater.contextType).toEqual(MyContext);
  });
})
