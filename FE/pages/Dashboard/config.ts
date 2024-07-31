const DashboardConfig = {
  tradingChartStaticConfig: {
    autosize: true,
    hide_top_toolbar: true,
    timezone: "Etc/UTC",
    locale: "en",
  },
  chartIntervals: [
    {
      label: "1D",
      value: "D",
    },
    {
      label: "1W",
      value: "W",
    },
    {
      label: "4H",
      value: "240",
    },
    {
      label: "1H",
      value: "60",
    },
    {
      label: "30M",
      value: "30",
    },
  ],
};

export default DashboardConfig;
