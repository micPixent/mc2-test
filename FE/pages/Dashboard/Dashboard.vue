<template>
  <StandardLayout>
    <div class="flex flex-col-reverse justify-around space-y-10 lg:flex-row lg:justify-between space-x-3 h-dvh">
      <!-- <Containers classname="lg:basis-1/2"> -->
      <!-- <TransakBuy /> -->
      <!-- </Containers> -->

      <Containers classname="w-full bg-white h-auto">
        <Block classname="block lg:flex w-full justify-start space-y-1 lg:space-x-5 px-10">
          <Containers classname="my-auto">
            <Dropdown :options="AppConfig.cryptoCurrencyOption" />
          </Containers>
          <IntervalOption />
          <div class="flex space-x-3 items-center">
            <ClockIcon class="text-primary-500 h-5 lg:h-7 hover:cursor-pointer" />
            <BellAlertIcon class="text-primary-500 h-5 lg:h-7 hover:cursor-pointer" />
          </div>
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
// import TransakBuy from "./components/TransakBuy.vue";
import IntervalOption from "./components/IntervalOption.vue";
import Block from "~/components/Containers/Block.vue";
import { ClockIcon, BellAlertIcon } from "@heroicons/vue/24/solid";
</script>
