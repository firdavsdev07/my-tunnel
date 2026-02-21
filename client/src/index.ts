import WebSocket from "ws";

const ws = new WebSocket("ws://localhost:8080");

ws.on("open", () => {
  console.log("We connected to the server!");
});

ws.on("message", (data) => {
  const msg = JSON.parse(data.toString());

  if (msg.type === "REGISTERED") {
    console.log("My tunnel ID:", msg.id);
  }

  ws.send("Hello from the client!");
});
