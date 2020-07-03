/*----------FIRST SLIDER---------*/
//$('.single-item').slick();
var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 
// Image Listhttp://lorempixel.com/400/200/animals";
images[1] = "IMAGES/banner_image_1.jpg"
images[0] = "IMAGES/banner_image_2.jpg";
images[2] = "IMAGES/banner_image_3.jpg";


// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;


var ep = new Vue({
  el: '#ep-flowchart',
  data: {
    selected: ''
  },
  methods: {
    

  }
})