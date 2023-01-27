<!DOCTYPE html>
<html lang="en">
   <head>
      <title>Contact Us | Hilariotech</title>
      <?php include("inc/head.php"); ?>
   </head>
   <body>
      
      <?php include("inc/header.php"); ?>

      <div class="homepicture">
         <img src="assets/images/new_banner.jpeg">
         <div class="text-area">
            <h1>Ready To Grow</h1>
            <h2>Together</h2>
            <h1>In Each Moment</h1>
         </div>
      </div>
      <!-- #####################################################-->
      <!-- #####################################################-->
      <div class="main-container" >
         <div class="formBlock">
            <div class="formElements">
               <h2 style="    font-weight: normal;"> Contact Us</h2>
               <div class="expContactUs">
                  <p style=" font-weight: 100;  font-size:17px;">Deliver seamless experiences with an effective event management software. Learn more about Hilariotech by booking a personalised web-session with our event management expert. Let’s grow your events together.</p>
               </div>
               <form method="POST" id="myForm">
                  <input id="firstName" type="text" name="firstName" placeholder="First Name">
                  <input id="lastName" type="text" name="lastName" placeholder="Last Name">
                  <input id="E-mail" type="email" name="E-mail" placeholder="E-mail">
                  <input id="OrganisationName" type="text" name="OrganisationName" placeholder="Organisation Name ">
                  <div class="SelectContainer"  style="position: relative;width: 100%;">
                     <div class="selectBox"  onclick="showCheckboxes()">
                        <select>
                           <option >Select options</option>
                        </select>
                        <div class="overSelect"></div>
                     </div>
                     <div id="checkBoxes" >
                        <label for="Analytics">
                        <input type="checkbox" name="platformFunctions[]" value="Analytics" id="Analytics" />
                        Analytics
                        </label>
                        <label for="CustomizedWebsite">
                        <input type="checkbox" name="platformFunctions[]" value="CustomizedWebsite" id="CustomizedWebsite" />
                        Customized Website
                        </label>
                        <label for="MobileApp">
                        <input type="checkbox" name="platformFunctions[]" value="MobileApp" id="MobileApp" />
                        Mobile App
                        </label>
                        <label for="OnlineMeetings">
                        <input type="checkbox" name="platformFunctions[]" value="OnlineMeetings" id="OnlineMeetings" />
                        Online Meetings
                        </label>
                        <label for="EmailNot">
                        <input type="checkbox" name="platformFunctions[]" value="EmailNot" id="EmailNot" />
                        E-mail Notifications
                        </label>
                     </div>
                  </div>
                  <input placeholder="When you want to meet (GMT+3)" type="datetime-local" id="meetingDate" name="meetingDate">
                  <textarea class="formTextarea" placeholder="Your Message"rows="8"cols="50"name="yourMessage"id="yourMessage"form="myForm"></textarea>
                  <input class="formbutton" type="submit" value="Submit" name="submit" >
                  <!--<button type="submit" id="formButton">SUBMIT</button> -->
               </form>
            </div>
         </div>
         <!-- #####################################################-->
         <!-- #####################################################-->
         <div class="Right-Side">
            <div class="Blocks">
               <p><b>Email</b></p>
               <a href="mailto:hiilaloruc@gmail.com" target="_blank">hiilaloruc@gmail.com</a>
            </div>
            <div class="Blocks">
               <p><b>Phone</b></p>
               <span>+01 (654) 321 0123</span>
            </div>
            <div class="Blocks">
               <p><b>Working Hours</b></p>
               <span>Weekdays: 8 AM - 8 PM <br> </span>
               <span>Weekend: 11 AM - 6 PM</span>
            </div>
            <div class="Blocks">
               <p><b>Address</b></p>
               <span>908 Broadway <br> San Francisco <br> CA 94133</span>
            </div>
         </div>
         <!-- #####################################################-->
         <!-- #####################################################-->
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.686988166589!2d-122.41470938474772!3d37.797374718632085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580f208e94253%3A0xe8757764a32ac575!2s908%20Broadway%2C%20San%20Francisco%2C%20CA%2094133%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1618756749231!5m2!1str!2str" width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
         <!-- #####################################################-->
         <!-- #####################################################-->

      </div>
      
      <?php include("inc/footer.php"); ?>

      <script type="text/javascript" src="assets/js/main.js"></script>

   </body>


    <?php
  
   $link=mysqli_connect('localhost','root','');
   mysqli_select_db($link,'HilarioTech');

   if(isset($_POST["submit"])){

    $FirstName=$_POST["firstName"];
    $LastName=$_POST["lastName"];
    $Email=$_POST["E-mail"];
    $OrganisationName=$_POST["OrganisationName"];
    $PlatformFunctions=$_POST["platformFunctions"];
    $MeetingDate=$_POST["meetingDate"];
    $YourMessage=$_POST["yourMessage"];


    $allOfFunc="";
    $counter=0;

       if(!empty($PlatformFunctions)) {

        foreach($PlatformFunctions as $value){
           $allOfFunc.=$value;
            if ($counter!=count($PlatformFunctions)-1) {
               $allOfFunc.=", ";
            }
           $counter++;
        }
   
    }

  $myquery="INSERT INTO Clients (FirstName, LastName, Email, OrganisationName, PlatformFunctions, MeetingDate, YourMessage) VALUES ('$FirstName','$LastName','$Email','$OrganisationName','$allOfFunc','$MeetingDate','$YourMessage')";

   $insert=mysqli_query($link,$myquery);   

   ?>


       echo'<script>window.onload=function(){

       alert("Successfully Sent!!");
       //location.href='WelcomePage.php';
       } 
         </script>';




 <?php  

    }
    
    ?>







</html>