<template>
  <Containers class="h-96 lg:h-full">
    <iframe id="transakIframe" :src="iframeSrc" class="w-full h-5/6 pt-10 pb-2 px-2"></iframe>
    <Text class="text-black text-xs mx-2">* Staging Environment for testing purposes only!</Text>
  </Containers>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from "#app";
import Containers from "~/components/Containers/Containers.vue";
import Text from "~/components/Typography/Text.vue";

const config = useRuntimeConfig();
// const queryParams = "environment=staging";

const iframeSrc = `https://global-stg.transak.com/?apiKey=${config.public.transakApiKey}`;

// const transakIframe = ref(null);

// window.addEventListener("message", (message) => {
//   if (message.source !== transakIframe.value?.contentWindow) return;

//   console.log("Event ID: ", message?.data?.event_id);
//   console.log("Data: ", message?.data?.data);

//   if (message?.data?.event_id === "TRANSAK_ORDER_SUCCESSFUL") {
//     console.log("Order Data: ", message?.data?.data);
//   }
// });
</script>
