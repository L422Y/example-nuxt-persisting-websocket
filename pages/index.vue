<template>
  <article>
    <h1>Index.vue</h1>
    <p>
      This button uses the websocket from the global provide (from the client
      plugin).
    </p>
    <button @click="sayHello">Send Hello From Index</button>
  </article>
</template>
<script setup>
const app = useNuxtApp();
const sayHello = () => {
  app.$websocket.sendMessage('hello from index');
};
</script>
