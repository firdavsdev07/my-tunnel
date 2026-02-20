import WebSocket from "ws";

const ws = new WebSocket("ws://localhost:8080");

ws.on("message", (data) => {
  console.log("Serverdan xabar:", data.toString());

  ws.send("Xabar olindi, rahmat!");
});

ws.on("open", () => {
  console.log("Serverga ulandik!");
});
