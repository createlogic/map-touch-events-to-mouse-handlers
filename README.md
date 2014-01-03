Map Touch Events to Mouse Event Handlers
=====

This is a simple function that has been created to help support responsive development where often both `mouse` and `touch` events are needed to be supported & code to actually create handlers for both types of events get a bit over complicated. 

Simply include the function into your source and bind the required `touch` events to their counterpart `mouse` events.


 	document.addEventListener('touchstart',function(e){ mapTouchEvents(e,'mousedown'); },true);
	document.addEventListener('touchmove',function(e){ mapTouchEvents(e,'mousemove'); },true);
	document.addEventListener('touchend',function(e){ mapTouchEvents(e,'mouseup'); },true);
	document.addEventListener('touchcancel',function(e){ mapTouchEvents(e,'mouseup'); },true);


Above snippet shows how to map the `touch` events to `mouse` events. Please make sure your bind the events as exactly shown above having the `function(e){mapTouchEvents(e,'mousedown');}` where `mousedown` is the `mouse` event being mapped to `touchstart` event.


Now if you have defined an event handler for `mousedown` it would also be called when `touchstart` happens. 
