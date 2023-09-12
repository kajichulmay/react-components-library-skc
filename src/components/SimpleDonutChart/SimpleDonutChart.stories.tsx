import type { Meta, StoryObj } from "@storybook/react";

import SimpleDonutChart from "./SimpleDonutChart";
import { donutChartsColors, donutChartsLabels, donutChartsSeries } from "../../__mocks__/mockData";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: any = {
  title: "ReactComponentLibrary/SimpleDonutChart",
  component: SimpleDonutChart,
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
} satisfies Meta<typeof SimpleDonutChart>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const haveData: Story = {
  args: {
    series: donutChartsSeries,
    labels: donutChartsLabels,
    colors: donutChartsColors,
  },
};