function mapTouchEvents(event,simulatedType) {
	
	//Ignore any mapping if more than 1 fingers touching 
	if(event.changedTouches.length>1){return;}
	
	var touch = event.changedTouches[0];
	
	//--https://developer.mozilla.org/en/DOM/document.createEvent--
	eventToSimulate = document.createEvent('MouseEvent');
	
	//--https://developer.mozilla.org/en-US/docs/Web/API/event.initMouseEvent--
	eventToSimulate.initMouseEvent(
		simulatedType,		//type
		true,				//bubbles
		true,				//cancelable
		window,				//view
		1,					//detail
		touch.screenX,		//screenX
		touch.screenY,		//screenY
		touch.clientX,		//clientX
		touch.clientY,		//clientY
		false,				//ctrlKey
		false,				//altKey
		false,				//shiftKey
		false,				//metaKey
		0,					//button
		null				//relatedTarget
	);

	touch.target.dispatchEvent(eventToSimulate);
	//This ignores the default scroll behavior
	event.preventDefault();				
	
}


