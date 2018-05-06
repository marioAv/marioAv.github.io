
      function initMap() {
        var uluru = {lat:  32.531655, lng: -117.036558};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
	  
  var iconMenu= document.getElementById("hamburger-menu");
  var menu= document.getElementsByTagName("NAV");
  var title= document.querySelector("#home h1");
  var titleP= document.querySelector("#home p");

  iconMenu.addEventListener("click", function(){
  
   if(menu[0].style.display == "none"){
   menu[0].style.display = "block";
   title.style.display="none";
   titleP.style.display="none";
   }
	
	else {menu[0].style.display= "none";
	      title.style.display="block";
		  titleP.style.display="block";}
	

	
  });