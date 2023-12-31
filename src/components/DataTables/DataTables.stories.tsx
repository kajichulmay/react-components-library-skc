import type { Meta, StoryObj } from "@storybook/react";

import DataTables from "./DataTables";
import { columnsDataTable, rowDataTable } from "../../__mocks__/mockData";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: any = {
  title: "ReactComponentLibrary/DataTables",
  component: DataTables,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: "color" },
  //   },
} satisfies Meta<typeof DataTables>;

export default meta;
type Story = StoryObj<typeof meta>;

const onChangePagination = (page: number, pageSize: number) => {
  // console.log("page :>> ", page);
  // console.log("pageSize :>> ", pageSize);
};

const onSort = (columnName: string, sortType: string) => {
  // console.log("columnName :>> ", columnName);
  // console.log("sortType :>> ", sortType);
};
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const haveData: Story = {
  args: {
    column: columnsDataTable,
    row: rowDataTable?.data,
    isShowBorderLine: true,
    isPagination: true,
    pageSize: 10,
    total: rowDataTable?.totalItems,
    page: 1,
    onChangePagination: onChangePagination,
    onSort: onSort,
  },
};
