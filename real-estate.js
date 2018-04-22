// Creates a section that will show BUDGET value for the range input
var range1= document.getElementById("myRange1");
var value1=document.getElementById("budgetvalue");
	value1.innerHTML += range1.value;
    range1.oninput= function(){
	value1.innerHTML = range1.value;
}
// Creates a section that wil show SURFACE value for the range input
var range2= document.getElementById("myRange2");
var value2=document.getElementById("surfacevalue");
	value2.innerHTML += range2.value;
    range2.oninput= function(){
	value2.innerHTML = range2.value;
}
// Creates a section that wil show ROOMS value for the range input
var range3= document.getElementById("myRange3");
var value3=document.getElementById("bedroomvalue");
	value3.innerHTML += range3.value;
    range3.oninput= function(){
	value3.innerHTML = range3.value;
}
           
//Function to search results with sliders
var searchButton= document.getElementById("searchbutton");
// Different Sliders
var budgetSlider= document.getElementById("myRange1");
var surfaceSlider= document.getElementById("myRange2");
var numOfRoomsSlider= document.getElementById("myRange3");
//Testing
var testImg=document.getElementById("testimage");

var houseListing = document.getElementsByClassName("houselistings");
var budget= document.querySelectorAll('.houselistings span.one');  //(.houselistings span .one)  (.houselistings h1)
var size= document.querySelectorAll('.houselistings span.two');     //(.houselistings span .two)  ('.houselistings p')
var rooms= document.querySelectorAll('.houselistings span.three'); //(.houselistings span .three)('.houselistings span')

searchButton.addEventListener("click", function(){
for(var i= 0; i<houseListing.length; i++){
	if((budget[i].textContent<= Number(budgetSlider.value))&&
       (size[i].textContent <= Number(surfaceSlider.value))&&
      (rooms[i].textContent <= Number(numOfRoomsSlider.value))){
		    houseListing[i].style.display="block";
		  } else houseListing[i].style.display="none";
}
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*searchButton.addEventListener("click", function(){
for(var i= 1; i<houseListing.length; i++){
	if((budget[i].textContent<= Number(budgetSlider.value))&&
       (size[i].textContent <= Number(surfaceSlider.value))&&
      (rooms[i].textContent <= Number(numOfRoomsSlider.value))){
		    console.log("RESULTS SHOWWING");
		  } else houseListing[i].style.display="none";
}
	});*/
	
	
	/*Given values
var price= document.getElementById("houselistingbudget");
var surface= document.getElementById("houselistingsurface");
var numOfRooms= document.getElementById("houselistingrooms");*/

	/*searchButton.addEventListener("click", function(){
if((price.textContent<= Number(budgetSlider.value))&&
   (surface.textContent <= Number(surfaceSlider.value))&&
    (numOfRooms.textContent <= Number(numOfRoomsSlider.value))){
		
			numOfRooms.innerHTML= "Show results";
			testImg.style.display="block";
			} else testImg.style.display="none";
	});*/







	
	
	
	
	
	
	
	
	
	
	
	


	
