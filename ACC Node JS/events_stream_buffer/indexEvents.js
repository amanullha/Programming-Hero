
//********************events********************


const events = require('events');

const eventEmitter = new events.EventEmitter();




/// creating and event

const handleDemoEvent = () => {

    console.log("showing handle demo event");
}


// assign the handler into an event

eventEmitter.on('demoEvent', handleDemoEvent).handleDemoEvent;



// fire the event

eventEmitter.emit('demoEvent');














































