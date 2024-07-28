<template>
  <StandardLayout>
    <div class="flex justify-between">
      <Containers>
        <TransakBuy />
      </Containers>

      <Containers classname="w-full space-x-10">
        <Block classname="flex w-full justify-start space-x-5">
          <Containers classname="items-center">
            <Dropdown :options="AppConfig.cryptoCurrencyOption" />
          </Containers>
          <IntervalOption />
          <ClockIcon class="text-white h-10 hover:cursor-pointer" />
          <BellAlertIcon class="text-white h-10 hover:cursor-pointer" />
        </Block>

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
import Block from "~/components/Containers/Block.vue";
import { ClockIcon, BellAlertIcon } from "@heroicons/vue/24/solid";
</script>
