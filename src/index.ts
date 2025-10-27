import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (socket) => {
  console.log("user connected");
  socket.send("hello hi");
  setInterval(()=>{
    socket.send("current price of solona is"+Math.random());
  },5000)

  socket.on("message", (message) => {
    console.log("Received:", message.toString());
  });
}); 