//Declares variables for the slideshow functionality
var slideshowImages=document.getElementsByClassName("images");
var leftArrow= document.getElementById("previous");
var rightArrow=document.getElementById("next");


//Adds functionality to the slideshow arrows
slideshowImages[0].style.display="block";
var i=0;
var j=0;
console.log(i);
console.log(j);
rightArrow.addEventListener("click", function(){
	if(slideshowImages.length -1 == i){i=-1;}
    if(slideshowImages.length == j){j= 0;}
	slideshowImages[i+1].style.display="block"
	slideshowImages[j].style.display="none";
	i++;
	j++;
 	
	
	console.log("SHOW" + i + " +1");
	console.log("HIDE" + j);

	
	
})
leftArrow.addEventListener("click", function(){
	if(i == 0){i= slideshowImages.length-1 ;}
	if(j == -1){j= slideshowImages.length -1;}
	slideshowImages[i].style.display="block"
	slideshowImages[j].style.display="none";
	i--;
	j--;
	
	
	console.log("left SHOW I IS " + i);
	console.log("left HIDE J IS " + j);
})


//Adds the google maps API    
 function initMap() {
        var uluru = {lat: 32.829620, lng:-117.278161};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
	  
//Adds functionality to mortgage calculator 
var mortgageForm= document.forms["mortgageform"];
var mortgagePayment= document.getElementById("mortgage-payment");

mortgageForm.addEventListener("submit", function(e){
	e.preventDefault();
	
var downPayment= mortgageForm.querySelector('#downpayment').value;
var loanAmount= mortgageForm.querySelector('#loanamount').value;
var interestRate= mortgageForm.querySelector('#interestrate').value / 100;
var years= mortgageForm.querySelector('#years').value;

loanAmount= loanAmount- downPayment;
var result= (loanAmount * interestRate * years + loanAmount) / years / 12

console.log("Your Monthly Payment is $" + result);
mortgagePayment.innerHTML= " $" + result;

})