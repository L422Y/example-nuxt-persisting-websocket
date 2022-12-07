export default defineNuxtPlugin(async (nuxtApp) => {
  const states = ['CONNECTING', 'OPEN', 'CLOSING', 'CLOSED'];
  const endpoint = 'wss://ws.postman-echo.com/raw';
  const websocket = useState('websocket', () => new WebSocket(endpoint));
  const wsState = useState('wsState', () => 'CONNECTING');
  const log = useState('wslog', () => [] as string[]);

  websocket.value.addEventListener('close', (event) => {
    wsState.value = states[websocket.value.readyState];
    log.value.push('closed');
  });

  websocket.value.addEventListener('open', (event) => {
    wsState.value = states[websocket.value.readyState];
    console.log('connected');
    log.value.push('connected');
  });

  websocket.value.addEventListener('error', (err) => {
    log.value.push(`error: ${err}`);
  });

  websocket.value.addEventListener('message', (event) => {
    log.value.push(`recvd msg: ${event.data}`);
  });

  return {
    provide: {
      websocket: {
        log,
        socket: websocket.value,
        state: wsState,
        sendMessage(msg: string) {
          console.log(websocket?.value?.readyState);
          if (websocket?.value?.readyState === 1) {
            websocket.value.send(msg);
            console.log(`sent msg: ${msg}`);
            log.value.push(`sent msg: ${msg}`);
          } else {
            console.log(`unable to send, not connected`);
            log.value.push(`unable to send, not connected`);
          }
        },
      },
    },
  };
});
