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
      valuel: "D",
    },
    {
      label: "1W",
      valuel: "W",
    },
    {
      label: "4H",
      valuel: "240",
    },
    {
      label: "1H",
      valuel: "60",
    },
    {
      label: "30M",
      valuel: "30",
    },
  ],
};

export default DashboardConfig;
