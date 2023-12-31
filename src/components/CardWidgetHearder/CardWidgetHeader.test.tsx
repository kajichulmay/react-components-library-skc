import React from "react";
import { render } from "@testing-library/react";

import CardWidgetHearder from "./CardWidgetHeader";

import "./CardWidgetHearder.scss";

const data = {
  icon: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
  title: "จำนวนลูกค้าที่ลงทะเบียน K-iDrone",
  value: 1234.56,
  percentage: 0,
};
const filterType = "month";

jest.mock("use-resize-observer", () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  })),
}));

describe("CardWidgetHearder Component", () => {
  test("renders the CardWidgetHearder component", () => {
    render(<CardWidgetHearder data={data} filterType={filterType} />);
  });
});
