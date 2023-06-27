import { expect, describe, it } from "@jest/globals";
import { filterData } from "../shared/functions";

describe("filterData", () => {
  const testData: any = [
    { orderId: 1, type: "A" },
    { orderId: 2, type: "B" },
    { orderId: 3, type: "C" },
    { orderId: 4, type: "A" },
    { orderId: 5, type: "B" },
  ];

  it("should filter data based on orderIds and types", () => {
    const orderIds = [2, 4];
    const types = ["A", "B"];
    const result = filterData(testData, orderIds, types);
    expect(result).toEqual([
      { orderId: 2, type: "B" },
      { orderId: 4, type: "A" },
    ]);
  });

  it("should filter data based on orderIds only", () => {
    const orderIds = [1, 3, 5];
    const result = filterData(testData, orderIds, undefined);
    expect(result).toEqual([
      { orderId: 1, type: "A" },
      { orderId: 3, type: "C" },
      { orderId: 5, type: "B" },
    ]);
  });

  it("should filter data based on types only", () => {
    const types = ["C"];
    const result = filterData(testData, undefined, types);
    expect(result).toEqual([{ orderId: 3, type: "C" }]);
  });

  it("should return an empty array when no filter parameters are provided", () => {
    const result = filterData(testData, undefined, undefined);
    expect(result).toEqual([]);
  });
});
