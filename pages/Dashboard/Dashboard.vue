<template>
  <StandardLayout>
    <div class="flex">
      <Containers>
        <TransakBuy />
      </Containers>

      <Containers classname="w-full">
        <div class="flex space-x-4">
          <Dropdown :options="AppConfig.cryptoCurrencyOption" />
          <IntervalOption />
        </div>
        <TradingChart />
      </Containers>
    </div>
  </StandardLayout>
</template>

<script lang="ts" setup>
import Dropdown from "~/components/Inputs/Dropdown.vue";
import TradingChart from "./components/TradingChart.vue";
import StandardLayout from "~/layouts/StandardLayout/StandardLayout.vue";
import AppConfig from "~/config/AppConfig";
import Containers from "~/components/Containers/Containers.vue";
import TransakBuy from "./components/TransakBuy.vue";
import IntervalOption from "./components/IntervalOption.vue";
</script>
