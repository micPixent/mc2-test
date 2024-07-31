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
import { useStore } from "~/composables/useStore";

type Props = {
  selectedSymbol?: string;
  watchList?: Array<string>;
};

const store = useStore();

const widgetContainerRef = ref<HTMLDivElement | null>(null);

const props = withDefaults(defineProps<Props>(), {
  selectedSymbol: "BINANCE:BTCUSD",
  watchlist: ["BINANCE:BNBUSD", "BINANCE:BTCUSD", "BINANCE:ETHUSD"],
});

const renderTradingChart = async () => {
  if (!widgetContainerRef.value) {
    return;
  }

  widgetContainerRef.value.innerHTML = "";

  const script = document.createElement("script");
  script.type = "text/javascript";
  script.async = true;
  script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";

  const plainChartConfig = { ...chartConfig.value };
  script.innerHTML = JSON.stringify(plainChartConfig);

  widgetContainerRef.value.appendChild(script);

  const widget = document?.querySelector(".tradingview-widget-container__widget");
  if (widget) {
    widget.appendChild(script);
  }
  return;
};

const intervalValue = computed(() => store.getValue());

const chartConfig = computed(() => ({
  ...DashboardConfig.tradingChartStaticConfig,
  symbol: props.selectedSymbol,
  interval: intervalValue.value,
  watchlist: props.watchlist,
}));

watch(
  chartConfig,
  () => {
    renderTradingChart();
  },
  { deep: true },
);

onMounted(() => {
  widgetContainerRef.value = document.querySelector(".tradingview-widget-container__widget");

  renderTradingChart();
});
</script>
