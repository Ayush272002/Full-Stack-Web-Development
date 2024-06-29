import EventEmitter from "events";

//creating instance
const customEmitter = new EventEmitter();

//1. on : listen/register for an event
//2. once: liste/register for an event
//3. emit: emit/call an event

customEmitter.on("response", (name, id) => {
  console.log(`user : ${name} id : ${id}`);
});

customEmitter.emit("response", "Ayush", 1)
