<template>
  <div class="container">
    <div class="h-full">
      <iframe
        id="transakIframe"
        :src="iframeSrc"
        allow="camera;microphone;payment"
        class="w-full h-5/6 rounded-lg"
      ></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from "#app";

const config = useRuntimeConfig();
const queryParams = "";

const iframeSrc = `https://global-stg.transak.com/?apiKey=${config.public.transakApiKey}&${queryParams}`;

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

<style scoped>
.container {
  margin: 0;
  padding: 0;
  height: 100vh;
  display: grid;
}
.iframe-wrapper {
  position: relative;
  width: 500px;
  height: 80vh;
  margin: auto;
  box-shadow: 0 0 15px #1461db;
  border-radius: 15px;
  overflow: hidden;
}
</style>
