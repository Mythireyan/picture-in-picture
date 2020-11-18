const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//FUNCTION TO ACTIVATE PICTURE IN PICTURE MODE

async function streamMedia(){
	try{
		const media = await navigator.mediaDevices.getDisplayMedia();
		videoElement.srcObject = media;
		videoElement.onloadmetadata = () =>{
			videoElement.play();
		}
	}catch(error){
		console.log('oops!!! something is wrong', error);
	}	
}
//EVENT LISTENER TO HIDE VIDEO AND DISPLAY P IN P
button.addEventListener('click', async ()=>{
	button.disabled = true;
	//AT STARTING THE VIDEO IS PAUSED . WE ARE DIRECTLY VIEWING P IN P ON BUTTON CLICK THE VIDEO SHOULD BE PLAYED.
	video.play();
	await videoElement.requestPictureInPicture()
	.catch(error =>{
		console.log('error', error);
	});
	button.disabled = false;
});

streamMedia();

