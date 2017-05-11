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
        // loop through each value in the list
        for (var i = 0; i < item.length; i++) {
        addItem += item[i];
        }


         // loop again but in total arrary and add to the price list
        for (var i = 0; i < total.length; i++) {
            runTotal += total[i];
        }

   document.getElementById("totalItems").innerHTML = "Total Items: " + addItem;
   document.getElementById("totalDue").innerHTML = "Amount Due: $" + runTotal.toFixed(2);
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
    document.getElementById("totalDue").innerHTML = "Amount Due: $0.00";
}

/********************************************
* Delivery Function
*
*********************************************/
function selectDriver() {

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
function handleManualObjectResponse(response) {

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
}

/**************************************
* Post PHP though Ajax 
***************************************/
function ajaxPost(){
    // Create our XMLHttpRequest object
    var http = new XMLHttpRequest();
    // Create some variables we need to send to PHP file
     var fName = document.getElementById("fName").value;
     var lName = document.getElementById("lName").value;
     var phoneNumber = document.getElementById("phoneNumber").value;
     var email = document.getElementById("email").value;
     var stAddress = document.getElementById("stAddress").value;
     var city = document.getElementById("city").value;
     var state = document.getElementById("state").value;
     var zip = document.getElementById("zip").value;
     var cardtype = document.getElementById("cardtype").value;
     var visaCard = document.getElementById("visaCard").value;
     var month = document.getElementById("month").value;
     var year = document.getElementById("year").value;

     var get = "fName=" + fName +"&lName="+ lName + "<br>" +
               "Phone Number: " + phoneNumber + "<br>" +
                "Email: " + email + "<br>" + 
                "Street Address: " + stAddress + "<br>" +
                "City: " + city + "<br>" +
                "State: " + state + "<br>" +
                "Zip: " + zip + "<br>" +
                "Card Type: " + cardtype + "<br>" +
                "Card #: "+ visaCard + "<br>" +
                "Exp: " + month  + "/" + year;
                
     //    "phoneNumber" + phoneNumber];

    http.open("POST", "app.php", true);
    // Set content type header information for sending url encoded variables in the request
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // Access the onreadystatechange event for the XMLHttpRequest object
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            var return_data = http.responseText;
            document.getElementById("status").innerHTML = return_data;
        }
    }
    // Send the data to PHP now... and wait for response to update the status div
    http.send(get); // Actually execute the request

    document.getElementById("status").innerHTML = "processing...";
    alert("Order Submitted Successfully!");
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

/***********************************************
* Function: Get Name of the Customer
*************************************************/
function validateFirstName(firstName, theClass) {
    
    // if the filed is empty trun the alert message on
    firstName = "invalid!"
    
    if (firstName !== "") {
    
 	      document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';
	}else{ 
         document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
	}

} 

/**************************************************
* Function: Validate the Last Name of the Customer
****************************************************/
function validateLastName(lastName, theClass) {
    
    // if the filed is empty trun the alert message on
    if (lastName !== "") {
    
 	      document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';
	}else{ 
         document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
	}
}          

/**************************************************
* Function: Validate the phone number of the Customer
****************************************************/
function validatePhoneNumber(phoneNumber, theClass) {
    
    // if the phone Number is matching turn on the 
    // invalid message.
    var number = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/;
    
    if (phoneNumber.match(number)) {             
         document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';
	}else{ 
         document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
	}
}

/*************************************************
* Function: Get Name of the Customer
*************************************************/
function validateEmail(email, theClass) {
    
    // if the filed is empty trun the alert message on
    
    if (email !== "") {
    
 	      document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';
	}else{ 
         document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
	}

} 

/**************************************************
* Function: Validate the Street Adress
****************************************************/
function validateStreet(street, theClass) {
    
    // If the address is not there then turn invalid message

    
    if (street !== "") {
          document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';
	}else{ 
         document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
	}
} 

/**************************************************
* Function: Validate the City
****************************************************/
function validateCity(city, theClass) {
    
    // If the city is not there then turn invalid message

    if (city !== "") {
          document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';
	}else{ 
         document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
	}
} 

/**************************************************
* Function: Validate all USA States
****************************************************/
function validateStates(theStates, theClass) {

	// match all the states with uppercase only and white space before and after. 
	var states = /^\s*(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]))(?!\S)/;

	if (theStates.match(states)) {
		
		document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';
	}else{
		document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
	}

}

/**************************************************
* Function: Validate ZIP CODE for the United States
****************************************************/
function validateZip(theZip, theClass) {

	// match all the zip code of the United States of America. 
	var zip = /^\s*((\d{5})|(\d{5}-\d{4}))(?!\S)/;

	if (theZip.match(zip)) {
		
		document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';
	}else{
		document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
	}

}

/**************************************************
* Function: Validate the customer's credit card numer 
****************************************************/
function validateCreditCard(theNum, theClass) {
	// match 16 numbers of credit card form with spaces before and after.
	var num = /^\s*(\d{4}[ ]){3}\d{4}|\d{16}(?!\S)/;
	if (theNum.match(num)) {
		document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';
	}else{
		document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
	}
}

function reset() {
    // on focus, reset field placeholder.
    document.getElementById('expdate').placeholder = '00/00';
}

/**************************************************
* Function: Validate the credit card's expration date 
****************************************************/
function validateDate(theDate, theClass) {

    // if the input is in the passed or more than 4 digits then turn on 
    // invalid message.
    
    var exDate = /^((0[1-9])|(1[0-2]))\/(\d{2})$/;
    if (theDate.match(exDate)) {
        
	document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';
	}else{
        document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
	}
}

/**************************************************
* Function: Rest the entire page! 
****************************************************/
function reset() {
    // reload the page once the user reset!
    location.reload();
}

/**************************************************
* Function: Submit 
****************************************************/
function submit() {
    //Run a message once it submitted
     //reset();
     var submit = "Thanks for your Order! Submitted Successfully";
    alert(submit);
   
}
  