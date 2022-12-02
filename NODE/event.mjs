import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.addListener("bye", (name) => {
    console.info(`Bye ${name}`);
})

emitter.addListener("bye", (name) => {
    console.info(`GoodBye ${name}`);
})

emitter.emit("bye", "Azizi")