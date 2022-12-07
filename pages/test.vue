<template>
  <article>
    <h1>Test.vue</h1>
    <p>
      This button uses the websocket from the global provide (from the client
      plugin).
    </p>
    <button @click="sayHello">Send Hello From Test</button>
  </article>
</template>
<script setup>
const app = useNuxtApp();
const sayHello = () => {
  app.$websocket.sendMessage('hello from test');
};
</script>
