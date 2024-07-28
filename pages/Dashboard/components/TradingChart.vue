<template>
  <Containers classname="bg-primary-500 h-full ">
    <div class="tradingview-widget-container h-full w-full">
      <div class="tradingview-widget-container__widget w-full" style="height: calc(100% - 32px)"></div>
    </div>
  </Containers>
</template>

<script setup lang="ts">
import Containers from "~/components/Containers/Containers.vue";
import DashboardConfig from "../config";

type Props = {
  selectedSymbol?: string;
  interval?: string;
  watchList?: Array<string>;
};

const props = withDefaults(defineProps<Props>(), {
  selectedSymbol: "BINANCE:BTCUSD",
  interval: "D",
  watchlist: ["BINANCE:BNBUSD", "BINANCE:BTCUSD", "BINANCE:ETHUSD"],
});

const chartConfig = {
  ...DashboardConfig.tradingChartStaticConfig,
  symbol: props.selectedSymbol,
  interval: props.interval,
  watchlist: props.watchlist,
};

const renderTradingChart = () => {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.async = true;
  script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
  script.innerHTML = JSON.stringify(chartConfig);

  const widget = document?.querySelector(".tradingview-widget-container__widget");
  if (widget) {
    widget.appendChild(script);
  }
  return;
};

watch(
  () => props,
  () => {
    renderTradingChart();
  },
);

onMounted(() => {
  renderTradingChart();
});
</script>
