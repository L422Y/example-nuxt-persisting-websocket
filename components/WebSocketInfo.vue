<template>
  <section v-if="$websocket">
    <aside>
      <div>WebSocket status: {{ $websocket.state }}</div>
      <div v-if="$websocket?.socket.url">
        WebSocket URL: {{ $websocket?.socket.url }}
      </div>
      <strong>WEBSOCKET LOG</strong>
      <div
        v-for="(line, idx) in $websocket.log.value"
        v-html="`${idx + 1}) ${line}`"
      ></div>
    </aside>
  </section>
</template>
<style>
aside {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-family: monospace;
  padding: 0.8rem 1rem;
  background: #eeeeee;
}
strong {
  display: block;
  margin: 1rem 0;
}
</style>
