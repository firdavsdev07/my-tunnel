import { WebSocketServer } from "ws";
import { v4 as uuid } from "uuid";
const wss = new WebSocketServer({ port: 8080 });

console.log("Simple tunnel server running on ws://localhost:8080");

const clients = new Map<string, any>();

wss.on("connection", (ws) => {
  const id = uuid();

  clients.set(id, ws);

  console.log("Client connected", id);

  ws.send(
    JSON.stringify({
      type: "REGISTERED",
      id: id,
    }),
  );

  ws.on("message", (msg) => {
    console.log("client message :", msg.toString());
  });

  ws.on("close", () => {
    clients.delete(id);
    console.log("Client disconnected", id);
  });
});
