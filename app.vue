<template>
  <main>
    <Navigation />
    <NuxtPage />
    <WebSocketInfo />
  </main>
</template>
<script setup>
const log = useState('wslog', () => []);
</script>
<style>
body {
  font-family: helvetica, arial, sans-serif;
}
</style>
