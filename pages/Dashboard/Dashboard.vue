<template>
  <StandardLayout>
    <div class="flex">
      <Containers>
        <TransakBuy />
      </Containers>

      <Containers>
        <Dropdown :options="AppConfig.cryptoCurrencyOption" />
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
</script>
