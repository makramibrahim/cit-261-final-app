
     <!-- Get costumer information-->

     <span><?php echo "Cardholder's Name: " . $_POST['fName'] . " " . $_POST['lName']; ?></span><br>
     <span><?php echo $_POST['phoneNumber']; ?></span><br>
     <span><?php echo $_POST['email']; ?></span><br>
     <span><?php echo $_POST['stAddress']; ?></span><br>
     <span><?php echo $_POST['city']; ?></span><br>
     <span><?php echo $_POST['state']; ?></span><br>
     <span><?php echo $_POST['zip']; ?></span><br>
     <span><?php echo $_POST['visaCard']; ?></span><br>

     <span><?php
              
              // The first number determines the card type: 3 - American Express, 4 - Visa, 5 - Master Card, 6 - Discover
              switch ($_POST['cardtype'])
              {
                  case "Visa":
                      echo 'Visa';
                      break;
                  case "Master Card":
                      echo 'Master Card';
                      break;
                  case "Discover":
                      echo 'Discover';
                      break;
                  case "American":
                      echo 'American';
                      break;
              }
          ?></span><br>

          <span><?php  

          $cc = array(
                      "01" => "January",
                      "02" => "February",
                      "03" => "March",
                      "04" => "April",
                      "05" => "May",
                      "06" => "June",
                      "07" => "July",
                      "08" => "August",
                      "09" => "September",
                      "10" => "October",
                      "11" => "November",
                      "12" => "December");

          echo $cc[$_POST['month']];
          echo $_POST['year'];

                ?>
          </span><br>
    
    