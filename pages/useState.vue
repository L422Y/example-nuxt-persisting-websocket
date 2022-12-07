<template>
  <article>
    <h1>useState.vue</h1>
    <p>This button uses the websocket from useState, not the global provide.</p>
    <p>
      <em>
        Note: since we are using the object directly, and bypassing the
        insertion of our outgoing message into our log, so we will only see the
        echo/incoming message.
      </em>
    </p>

    <button @click="sayHello">Send Hello From useState</button>
  </article>
</template>
<script setup>
const ws = useState('websocket');
const sayHello = () => {
  ws.value.send('hello from useState');
};
</script>
