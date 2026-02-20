import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

console.log("Simple tunnel server running on ws://localhost:8080");

wss.on("connection", (ws) => {
  console.log("Client connected");
  ws.send("Salom client");

  ws.on("message", (msg) => {
    console.log("Clientdan xabar :", msg.toString());
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});
