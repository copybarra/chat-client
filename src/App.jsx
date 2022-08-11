import { createEffect, createSignal, For } from 'solid-js';
import { io } from 'socket.io-client';

function App() {
  const [messages, setMessages] = createSignal([]);
  const [message, setMessage] = createSignal("asd");
  const socket = io('http://localhost:4000');

  socket.on('connected', (data) => {
    console.log('connected');
  });
  socket.on('chat-message', (data) => {
    console.log(data)
    appendMessage(data);
  });

  const appendMessage = (message) => {
    setMessages([...messages(), message]);
  }

  const sendMessage = () => {
    appendMessage({ text: message() });
    socket.emit('send-chat-message', message());
  }

  return (
    <div class='bg-green-100 min-h-screen w-full flex flex-col items-center' >
      <h1>Chat</h1>
      <div class="flex w-1/2 flex-col">
        <For each={messages()}>
          {(message) => (
            <div class="rounded-md w-96 my-3 p-1" classList={{ 'self-end': !!message.id, 'bg-white': !message.id, 'bg-red-300': !!message.id }}>
              {message.text}
            </div>
          )}
        </For>
        <div class="w-full flex">
          <input class="flex-1 rounded-xl text-xl" type="text" onChange={e => setMessage(e.target.value)} />
          <button class="rounded-xl bg-red-400 p-3" onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div >
  );
}

export default App;
