
const EventEmitter = require('events');

// Create an EventEmitter object
const schoolBell = new EventEmitter();

// Create classStart event
schoolBell.on('classStart', () => {
    console.log("Class has started! Ring the bell.");
});

// Create classEnd event
schoolBell.on('classEnd', () => {
    console.log("Class has ended! Ring the bell.");
});

// Trigger events
schoolBell.emit('classStart');
schoolBell.emit('classEnd');

// Event Loop demonstration
console.log("School Bell System Started");

setTimeout(() => {
    console.log("setTimeout: Ring bell");
}, 0);

setImmediate(() => {
    console.log("setImmediate: Ring bell");
});

process.nextTick(() => {
    console.log("process.nextTick: Ring bell");
});

console.log("End of main program");