<!DOCTYPE html>
<html lang="en">
   <head>

      <title>Home | Hilariotech</title>

      <?php include("inc/head.php"); ?>

   </head>
   <body>

      <?php include("inc/header.php"); ?>
      
      <div class="homepicture">
         <img src="assets/images/new_banner.jpeg">
         <!-- denemeeee -->
         <!-- denemeeee -->
         <div class="text-area">
            <h1>Al-Powered <br> Events & Communities</h1>
            <h2>Live Hybrid Virtual</h2>
         </div>
      </div>
      <div class="maincontainer">
         <div class="titleCool">
            <h2> <b>Smart solutions </b>for  <br> delivering successful events</h2>
            <p> All you need to run virtual and hybrid events, and grow online communities</p>
         </div>
         <!-- #####################################################-->
         <div class="js-dedector"></div>
         <!-- #####################################################-->
         <div class="Statictics-Container" id="Statictics-Container">
            <div class="statistic-box">
               <h1 class="counter" data-target="28" sign="" >0</h1>
               <span>years of experience</span>
            </div>
            <div class="statistic-box">
               <h1 class="counter" data-target="100" sign="%">0 </h1>
               <span>customer satisfaction</span>
            </div>
            <div class="statistic-box">
               <h1 class="counter" data-target="67" sign="">0</h1>
               <span>country</span>
            </div>
         </div>
         <!-- #####################################################-->
         <!-- #####################################################-->
         <div class="wrapperbox">
            <div class="vipBoxes">
               <div class="iconCircle" ><img src="assets/icon/001.png" ></div>
               <div class="explanationBox">
                  <h3>High Attendee Engagement</h3>
                  <p>Our solutions aid quality interactions between the audience and event-program via effective engagement tools for meetings, sessions, and networking profiles.</p>
               </div>
            </div>
            <div class="vipBoxes">
               <div class="iconCircle" ><img src="assets/icon/002.png"></div>
               <div class="explanationBox">
                  <h3>'Person-to-Object' Matchmaking</h3>
                  <p>The real-time reporting allows exhibitors and sponsors to track potential leads and business opportunities, and measure the success of their sponsorship initiatives.</p>
               </div>
            </div>
            <div class="vipBoxes">
               <div class="iconCircle" ><img src="assets/icon/003.png"></div>
               <div class="explanationBox">
                  <h3>Analytics for Exhibitors & Sponsors</h3>
                  <p>Our solutions aid quality interactions between the audience and event-program via effective engagement tools for meetings, sessions, and networking profiles.</p>
               </div>
            </div>
         </div>
         <!-- #####################################################-->
         <!-- #####################################################-->
         <div class="titleCool">
            <h2> What functions do we <b>provide</b>?</h2>
         </div>
         <div class="block-Container">
            <a  onclick="function1CW()">
               <div class="function">
                  <img src="assets/icon/f1.png">
                  <h2>Analytics</h2>
               </div>
            </a>
            <a  onclick="function2CW()">
               <div class="function">
                  <img src="assets/icon/f2.png">
                  <h2>Customized Website</h2>
               </div>
            </a>
            <a  onclick="function3CW()">
               <div class="function">
                  <img src="assets/icon/f3.png">
                  <h2>Mobile App</h2>
               </div>
            </a>
            <a  onclick="function4CW()">
               <div class="function">
                  <img src="assets/icon/f4.png">
                  <h2>Online Meetings</h2>
               </div>
            </a>
            <a  onclick="function5CW()">
               <div class="function">
                  <img src="assets/icon/f5.png">
                  <h2>E-mail Notifications</h2>
               </div>
            </a>
            <div class="iconNeartoText">
               <div class="myIcon">
                  <img id="imgOfFunction" src="assets/icon/f1.png">
               </div>
               <div class="myText">
                  <h2 id="titleOfFunction"> <b> Analytics & Insıghts </b></h2>
                  <p id="expOfFunction"> Access real-time data on touch-points such as interest, behavior, registrations, engagement, and business transactions to plan and execute events better.</p>
               </div>
            </div>
         </div>
         <div class="Line"></div>
         <!-- #####################################################-->
         <!-- #####################################################-->
        <div class="forHov">
         <div class="titleCool">
            <h2> Supporting you <b>regardless of </b>your target group </h2>
         </div>
         <div class="block-Container">
            <div class="targetButtons">
               <a class="buttonisActive"  id="btnComp" onclick="targetG1()">FOR COMPANIES</a>
               <a class="#"  id="btnEnt"onclick="targetG2()" >FOR ENTREPRENEURS</a>
            </div>
            <div class="iconNeartoText">
               <div class="myText">
                  <h2 id="targetTitle"> <b> Teams & Collabratıon </b></h2>
                  <p id="targetExpl"> By working with us, companies and business leaders can actively engage in making an important contribution to sustainably managing and protecting our global environmental resources.</p>
               </div>
               <div class="myIcon">
                  <img id="targetImg" style="    filter: none;" src="assets/icon/company.png">
               </div>
            </div>
         </div>
         </div>
         <!-- #####################################################-->
         <!-- #####################################################-->

            <div class="partnershipC main-container">
               <div class="inside-rectangle">
                  <div class="picturee">
                     <img src="assets/icon/vectorpaint.png">
                  </div>
                  <div class="Huge-Title">
                     Want to work with us?
                  </div>
                  <div class="right-content">
                     <button onclick="document.location='contact-us.php'" style="background-color: #a08ef6;    margin-bottom: 10px;">CONTACT US</button>
                     <div class="become-our-partner_text">leave your interests and we will contact you!</div>
                  </div>
               </div>
               
            </div>
            <!-- #####################################################-->
            <!-- #####################################################-->
      </div>

      <?php include("inc/footer.php"); ?>

      <script type="text/javascript" src="assets/js/main.js"></script>
      <script type="text/javascript" src="assets/js/statistics.js"></script>
   </body>
</html>