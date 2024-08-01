<template>
  <StandardLayout>
    <div class="flex space-x-3 h-dvh">
      <!-- <Containers classname="lg:basis-1/2"> -->
      <!-- <TransakBuy /> -->
      <!-- </Containers> -->

      <Containers classname="w-full bg-white h-auto">
        <Block classname="block lg:flex w-full justify-start space-y-3 lg:space-x-5 px-10">
          <Containers classname="my-auto">
            <Dropdown :options="AppConfig.cryptoCurrencyOption" @update:selectedOption="handleSelectedOption" />
          </Containers>
          <IntervalOption />
          <div class="flex space-x-3 items-center">
            <ClockIcon class="text-primary-500 h-5 lg:h-7 hover:cursor-pointer" />
            <BellAlertIcon class="text-primary-500 h-5 lg:h-7 hover:cursor-pointer" @click="handleOpenWatchlistModal" />
          </div>
        </Block>

        <TradingChart :selectedSymbol="selectedOption" />
      </Containers>
    </div>

    <Modal :close="watchlistModal.close" :is-open="watchlistModal.isOpen.value" :open="watchlistModal.open">
      <Containers class="px-2 py-2 mx-2">
        <Text class="text-center font-bold">Watchlist To Add</Text>
        <div v-for="(item, index) in watchlistOptions" :key="index" class="space-y-4">
          <Containers
            v-if="!userWatchlists.includes(item.value)"
            class="border-2 my-4 py-2 rounded-lg flex items-center justify-around"
          >
            <span class="basis-1/4">{{ item.label }}</span>
            <PlusCircleIcon class="h-5 w-5 my-auto cursor-pointer" @click="handleAddWatchlist(item.value)" />
          </Containers>
        </div>

        <Containers><Text class="text-center font-bold">My Watchlist</Text></Containers>
        <Containers>
          <div
            v-for="(items, index) in userWatchlists"
            :key="index"
            class="border-2 my-4 py-2 rounded-lg flex items-center justify-around"
          >
            <span class="basis-1/4">{{ items }}</span>
            <XCircleIcon class="h-5 w-5 my-auto cursor-pointer" @click="handleRemoveWatchlist(items)" />
          </div>
        </Containers>
        <Button class="text-center py-2 my-5" @click="handleUpdateWatchlist">Submit</Button>
      </Containers>
    </Modal>

    <Modal :close="successModal.close" :is-open="successModal.isOpen.value" :open="successModal.open">
      <Containers class="px-2 py-2 mx-2">
        <CheckIcon class="h-20 w-20 my-5 mx-auto text-green-500" />
        <Text class="text-center font-bold">Watchlist Added</Text>
        <Button class="text-center py-2 my-5" @click="successModal.close">Close</Button>
      </Containers>
    </Modal>
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
import { ClockIcon, BellAlertIcon, CheckIcon, PlusCircleIcon, XCircleIcon } from "@heroicons/vue/24/solid";
import type { IOptions } from "~/components/Inputs/type";
import { useNuxtApp } from "#app";
import { useOpenClose } from "~/composables/useOpenClose";
import Text from "~/components/Typography/Text.vue";
import Button from "~/components/Buttons/Button.vue";

const { $axios } = useNuxtApp();

const watchlistModal = useOpenClose();
const successModal = useOpenClose();

const userWatchlists = ref<Array<string>>([]);

const watchlistOptions = [
  { label: "Ethereum", value: "BINANCE:ETHUSD" },
  { label: "Bincance", value: "BINANCE:BNBUSD" },
  { label: "Bitcoin", value: "BINANCE:BTCUSD" },
];

const selectedOption = ref(AppConfig.cryptoCurrencyOption[0].value);

const handleOpenWatchlistModal = () => {
  fetchWatchlist();
  watchlistModal.open();
};

const fetchWatchlist = async () => {
  const id = localStorage.getItem("mctest.user_id");

  if (!id) {
    return;
  }

  try {
    const response = await $axios.get(`/getWatchlist?id=${id}`);
    userWatchlists.value = response.data.data.watchlist;

    console.log(response, "response watchlis");
  } catch (error) {
    console.error("Error getting watchlist:", error);
  }
};

// const handleUpdateWatchlist = async () => {
//   const id = localStorage.getItem("user_id");

//   if (!id) {
//     return;
//   }

//   try {
//     const response = await $axios.get(`/updateWatchlist?id=${id}`);

//     console.log(response, "response watchlis");
//   } catch (error) {
//     console.error("Error getting watchlist:", error);
//   }
// };

const handleAddWatchlist = async (item: string) => {
  if (userWatchlists.value.includes(item)) {
    return;
  }

  userWatchlists.value = [...userWatchlists.value, item];
};

const handleRemoveWatchlist = async (item: string) => {
  if (userWatchlists.value.includes(item)) {
    return;
  }

  userWatchlists.value = userWatchlists.value.filter((currentWatchlist) => currentWatchlist !== item);
};

const handleUpdateWatchlist = async () => {
  try {
    const id = localStorage.getItem("mctest.user_id");

    if (!id) {
      return;
    }
    const response = await $axios.put(`/updateWatchlist?id=${id}`, { watchlist: userWatchlists.value });
    console.log(response, "res watchlist");

    if (!response.data.error) {
      successModal.open();
    }
  } catch (error) {
    console.error("Error updating watchlist:", error);
  }
};

const handleSelectedOption = (option: IOptions) => {
  selectedOption.value = option.value;
};
</script>
