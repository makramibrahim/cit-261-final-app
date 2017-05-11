/*************************************
* This is a Car check out funciton that s
* helps the user to add all the desire 
* item and when it's done check the 
* total price. 
**************************************/
function cartTotal() {
    // Menu price list, each item will be added to the total amount.
    var item = [Number(document.getElementById('12.50').value),
                Number(document.getElementById('15.50').value), 
                Number(document.getElementById('17.50').value),
                Number(document.getElementById('16.50').value),
                Number(document.getElementById('20.00').value),
                Number(document.getElementById('21.50').value),
                Number(document.getElementById('13.50').value),
                Number(document.getElementById('14.50').value),
                Number(document.getElementById('11.00').value),
                Number(document.getElementById('25.50').value),
                Number(document.getElementById('5.50').value),
                Number(document.getElementById('8.50').value),
                Number(document.getElementById('9.50').value),
                Number(document.getElementById('10.50').value)];
    
       // multiplay each input item in the total cart
    var total = [document.getElementById('12.50').value * 12.50,
                 document.getElementById('15.50').value * 15.50, 
                 document.getElementById('17.50').value * 17.50,
                 document.getElementById('16.50').value * 16.50,
                 document.getElementById('20.00').value * 20.00,
                 document.getElementById('21.50').value * 21.50,
                 document.getElementById('13.50').value * 13.50,
                 document.getElementById('14.50').value * 14.50,
                 document.getElementById('11.00').value * 11.00,
                 document.getElementById('25.50').value * 25.50,
                 document.getElementById('5.50').value * 5.50,
                 document.getElementById('8.50').value * 8.50,
                 document.getElementById('9.50').value * 9.50,
                 document.getElementById('10.50').value * 10.50];
    
        var addItem = 0;
        var runTotal = 0;
    
        for (var i = 0; i < item.length; i++) {
        addItem += item[i];
        }
    
        for (var i = 0; i < total.length; i++) {
            runTotal += total[i];
        }

   document.getElementById("totalItems").innerHTML = "Total Items: " + addItem;
   document.getElementById("totalDue").innerHTML = "Total Due: $" + runTotal.toFixed(2);
}

/*******************************************
* The clearCart function is going to clear all
* the input and output data. 
********************************************/
function clearCart() {
    document.getElementById('12.50').value = "0";
    document.getElementById('15.50').value = "0";
    document.getElementById('17.50').value = "0";
    document.getElementById('16.50').value = "0";
    document.getElementById('20.00').value = "0";
    document.getElementById('21.50').value = "0";
    document.getElementById('13.50').value = "0";
    document.getElementById('14.50').value = "0";
    document.getElementById('11.00').value = "0";
    document.getElementById('25.50').value = "0";
    document.getElementById('5.50').value = "0";
    document.getElementById('8.50').value = "0";
    document.getElementById('9.50').value = "0";
    document.getElementById('10.50').value = "0";
    document.getElementById("totalItems").innerHTML = "Total Items: 0";
    document.getElementById("totalDue").innerHTML = "Total Due: $0.00";
}

/********************************************
* Delivery Function
*
*********************************************/
function selectDriver(){

		//create xmlhttp request object
		var xmlhttp = new XMLHttpRequest();			
		xmlhttp.onreadystatechange = function (){     //check state and status of server
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
				var response = JSON.parse(this.responseText); //parse response and assign
				handleManualObjectResponse(response);
			}
		}	//choose object in dropdown/filename
		var input = document.getElementById('objectInput').value; 
			//defines open method and set asynch = true
		xmlhttp.open("GET", "" + input + ".txt", true);    
		xmlhttp.send(); //initiates server connection			
}		

/********************************************
* Handle Object response function 
* Get the required info 
*********************************************/
function handleManualObjectResponse(response){

		var result = "";   //create variable for output	
		for (var count = 0; count < response.length; count++){
			result += response[count] + "&nbsp;";
		}			//displays result with a for loop
		
			  //attempting to get this to increase once per button click
			var show = localStorage.numclicks;
			
			document.getElementById(show).innerHTML = result;
			document.getElementById("buttonCount").click();			
}

/********************************************
* Count for each select and get the
* required info from the storages.
*********************************************/
function buttonCount() {    
        if (localStorage.numclicks) {
            localStorage.numclicks = Number(localStorage.numclicks)+1;
        } else {
            localStorage.numclicks = 0;
        }
        document.getElementById("result").innerHTML = "Order Row: " + localStorage.numclicks;
    	}

    	function clearCount(){
    		 localStorage.numclicks = 0;
}

/***********************************
* Open Menu function will help the 
* user to get the menu when it's need it.
************************************/
  function menu(event, menu) {
  var i, x, links;
  x = document.getElementsByClassName("menu");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  links = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
     links[i].className = links[i].className.replace(" get-red", "");
  }
  document.getElementById(menu).style.display = "block";
  event.currentTarget.firstElementChild.className += " get-red";
}

/***********************************
* Checkout function will help the 
* user to get the menu when it's need it.
************************************/
  function checkout(event, checkout) {
  var i, x, links;
  x = document.getElementsByClassName("checkout");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  links = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
     links[i].className = links[i].className.replace(" get-red", "");
  }
  document.getElementById(checkout).style.display = "block";
  event.currentTarget.firstElementChild.className += " get-red";
}


/***********************************
* This map function will help locate 
* the Pizza place for customers
************************************/
function init_map() {
    var myOptions = {zoom:17,center:new google.maps.LatLng(42.2267644,-111.40100560000002),mapTypeId: google.maps.MapTypeId.ROADMAP}; 
    map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
    marker = new google.maps.Marker({map: map,
                                     position: new google.maps.LatLng(42.2267644,-111.40100560000002)});
    infowindow = new google.maps.InfoWindow({
        content:'<strong>Italiano\'s Pizzaria</strong><br>20 Main Street Paris Idaho<br>'});
    google.maps.event.addListener(marker, 'click', 
                                  function(){infowindow.open(map,marker);});
    infowindow.open(map,marker);
}
google.maps.event.addDomListener(window, 'load', init_map);


  