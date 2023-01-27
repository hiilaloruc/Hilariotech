<!DOCTYPE html>
<html lang="en">
   <style type="text/css">
   </style>
   <head>
      <title>Team | Hilariotech</title>
      
      <?php include("inc/head.php"); ?>

   </head>
   <body>
      
      <?php include("inc/header.php"); ?>

      <div class="homepicture">
         <img src="assets/images/new_banner.jpeg">
         <div class="text-area">
            <h1> Together </h1>
            <h2> More </h2>
            <h1> To succeed </h1>
         </div>
      </div>
      <div class="maincontainer">
         <div class="titleCool">
            <h2> <b>Our Team </b> <br> <br> Teamwork divides the task and multiplies the success.</h2>
         </div>
         <div class="inside-cont" style="position: relative;">
            <div class="toLeft"  id="toLeft" onclick="LeftArrow()" style="display:none;left:0;"><</div>
            <div class="toRight" id="toRight" onclick="RightArrow()" style="right: 0;">></div>
            <div class="team-container">
               <div class="columnFor2">
                  <div class="teamMember">
                     <div class="memberImage">
                        <img src="assets/images/team/2.png">
                     </div>
                     <div class="memberInfo">
                        <p>Daniel</p>
                        <span>Backend Developer</span>
                     </div>
                  </div>
                  <div class="teamMember">
                     <div class="memberImage">
                        <img src="assets/images/team/1.png">
                     </div>
                     <div class="memberInfo">
                        <p>Emanuela</p>
                        <span>Full-stack Developer</span>
                     </div>
                  </div>
               </div>
               <div class="columnFor2">
                  <div class="teamMember">
                     <div class="memberImage">
                        <img src="assets/images/team/3.png">
                     </div>
                     <div class="memberInfo">
                        <p>Andreea A.</p>
                        <span>Android Developer</span>
                     </div>
                  </div>
                  <div class="teamMember">
                     <div class="memberImage">
                        <img src="assets/images/team/4.png">
                     </div>
                     <div class="memberInfo">
                        <p>Georgiana</p>
                        <span>Product Designer</span>
                     </div>
                  </div>
               </div>
               <div class="columnFor2">
                  <div class="teamMember">
                     <div class="memberImage">
                        <img src="assets/images/team/6.png">
                     </div>
                     <div class="memberInfo">
                        <p>Dan V.</p>
                        <span>iOS Developer</span>
                     </div>
                  </div>
                  <div class="teamMember">
                     <div class="memberImage">
                        <img src="assets/images/team/5.png">
                     </div>
                     <div class="memberInfo">
                        <p>Alice N</p>
                        <span>Product Designer</span>
                     </div>
                  </div>
               </div>
               <!-- start-->
               <div class="columnFor2 hide">
                  <div class="teamMember">
                     <div class="memberImage">
                        <img src="assets/images/team/7.png">
                     </div>
                     <div class="memberInfo">
                        <p>Adina</p>
                        <span>Product Designer</span>
                     </div>
                  </div>
                  <div class="teamMember">
                     <div class="memberImage">
                        <img src="assets/images/team/8.png">
                     </div>
                     <div class="memberInfo">
                        <p>Alexandru S.</p>
                        <span>iOS Developer</span>
                     </div>
                  </div>
               </div>
               <div class="columnFor2 hide">
                  <div class="teamMember">
                     <div class="memberImage">
                        <img src="assets/images/team/9.png">
                     </div>
                     <div class="memberInfo">
                        <p>Cătă D.</p>
                        <span>Front-end Developer</span>
                     </div>
                  </div>
                  <div class="teamMember">
                     <div class="memberImage">
                        <img src="assets/images/team/10.png">
                     </div>
                     <div class="memberInfo">
                        <p>George</p>
                        <span>iOS Developer</span>
                     </div>
                  </div>
               </div>
               <div class="columnFor2 hide">
                  <div class="teamMember">
                     <div class="memberImage">
                        <img src="assets/images/team/11.png">
                     </div>
                     <div class="memberInfo">
                        <p>Cristi D.</p>
                        <span>Product Designer</span>
                     </div>
                  </div>
                  <div class="teamMember">
                     <div class="memberImage">
                        <img src="assets/images/team/12.png">
                     </div>
                     <div class="memberInfo">
                        <p>Ioana C.</p>
                        <span>Full-stack Developer</span>
                     </div>
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
                  Want to join our team?
               </div>
               <div class="right-content">
                  <button onclick="document.location='contact-us.php'" style="background-color: #a08ef6;    margin-bottom: 10px;">JOIN OUR TEAM</button>
                  <div class="become-our-partner_text">leave your information and we will contact you!</div>
               </div>
            </div>
         </div>
         <!-- #####################################################-->
         <!-- #####################################################-->
         <!-- #####################################################-->
         <!-- #####################################################-->
      </div>
      
      <?php include("inc/footer.php"); ?>

      <script type="text/javascript" src="assets/js/main.js"></script>
   </body>
</html>