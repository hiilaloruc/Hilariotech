
//-------Statictics Counter Start----------------//
function function1CW(){
	
	document.getElementById('imgOfFunction').src="assets/icon/f1.png";
	document.getElementById('titleOfFunction').innerHTML="Analytics & Insıghts";
	document.getElementById('expOfFunction').innerHTML="Access real-time data on touch-points such as interest, behavior, registrations, engagement, and business transactions to plan and execute events better.";
}

function function2CW(){
	
	document.getElementById('imgOfFunction').src="assets/icon/f2.png";
	document.getElementById('titleOfFunction').innerHTML="Customized Website";
	document.getElementById('expOfFunction').innerHTML="Craft responsive website using pre-configured templates and drag & drop builder options to manage events digitally. Marketing is one of the most important step between the customer and company.";
}

function function3CW(){
	
	document.getElementById('imgOfFunction').src="assets/icon/f3.png";
	document.getElementById('titleOfFunction').innerHTML="Mobile App";
	document.getElementById('expOfFunction').innerHTML="Stay connected to your event through a powerful native mobile application to manage everything on-the-go. Mobile phones are more on our lifes than computers. ";
}

function function4CW(){
	
	document.getElementById('imgOfFunction').src="assets/icon/f4.png";
	document.getElementById('titleOfFunction').innerHTML="Online Meetings";
	document.getElementById('expOfFunction').innerHTML="Set up native online meetings with enhanced engagement options like polls, hand-raising, and chats. With native and customisable virtual rooms, our networking platform provides a hassle-free and no installs experience during online meetings.";
}


function function5CW(){
	
	document.getElementById('imgOfFunction').src="assets/icon/f5.png";
	document.getElementById('titleOfFunction').innerHTML="E-mail Notifications";
	document.getElementById('expOfFunction').innerHTML="Send automated campaigns by creating customised emails with pre-built templates and drag & drop email builder.";
}


function targetG1(){
	document.getElementById('btnComp').className="buttonisActive";
	document.getElementById('btnEnt').className="#";



	document.getElementById('targetTitle').innerHTML="Teams & Collabratıon";
	document.getElementById('targetExpl').innerHTML="By working with us, companies and business leaders can actively engage in making an important contribution to sustainably managing and protecting our global environmental resources.";
	document.getElementById('targetImg').src="assets/icon/company.png";
}

function targetG2(){
	
	document.getElementById('btnEnt').className="buttonisActive";
	document.getElementById('btnComp').className="#";



	document.getElementById('targetTitle').innerHTML="Indıvıdual Inıtıatıve";
	document.getElementById('targetExpl').innerHTML="Within the scope of the research conducted with a survey attended by 350 start-ups every year, entrepreneurs were asked to choose the friendliest corporate companies.";
	document.getElementById('targetImg').src="assets/icon/experienced.png";
}
//-------Statictics Counter Finish----------------//

var show = true;
function showCheckboxes() {
  var checkboxes = document.getElementById("checkBoxes");

  if (show) {
    checkboxes.style.display = "block";

    show = false;
  } else {
    checkboxes.style.display = "none";

    show = true;
  }
}



//-------Events Start----------------//
function EventsUpcoming(){
	document.getElementById('upcomingEvents').className="mytitle activeTitle";
	document.getElementById('pastEvents').className="mytitle";

	document.getElementById('event1-date').innerHTML="13";
	document.getElementById('event1-month').innerHTML="Jan";
	document.getElementById('event1-hour').innerHTML="15:00";
	document.getElementById('event1-img').src="assets/images/event1.png";
	document.getElementById('event1-name').innerHTML="WOMEN IN TECH SUMMIT";
	document.getElementById('event1-exp').innerHTML="The Perspektywy Women in Tech Summit is the favorite event for women in Tech&IT in Europe. Last year’s edition brought together over 6 300 participants from 52 countries. This year Summit goes online! 2 days full of new ideas, meetings with great people, job opportunities and deep networking. Please join us for the big celebration for women in computing, tech and science! Let’s make the end of 2020 brilliant together!";

	document.getElementById('event2-date').innerHTML="22";
	document.getElementById('event2-month').innerHTML="Feb";
	document.getElementById('event2-hour').innerHTML="16:00";
	document.getElementById('event2-img').src="assets/images/event2.png";
	document.getElementById('event2-name').innerHTML="HEALTH TECH SUMMIT 2021";
	document.getElementById('event2-exp').innerHTML="Health Tech Summit 2020 invites you to discover through prominent speakers the technological advances in the health sector, and to learn how technology optimizes quality and access to medical care. ";

}


function EventsPast(){
	document.getElementById('pastEvents').className="mytitle activeTitle";
	document.getElementById('upcomingEvents').className="mytitle";
	
	document.getElementById('event1-date').innerHTML="18";
	document.getElementById('event1-month').innerHTML="Apr";
	document.getElementById('event1-hour').innerHTML="12:00";
	document.getElementById('event1-img').src="assets/images/old-event1.png";
	document.getElementById('event1-name').innerHTML="ASEAN HR SUMMIT 2020";
	document.getElementById('event1-exp').innerHTML="Last year, October 18-19, The ASEAN HR Tech Venture Summit highlighted the comprehensive update on the state of HR in the Philippines and other Southeast Asian nations, including how technology is being adopted into the process. Other highlights focus on the shift of HR from traditional to agile, a case study on the failure of a Merger and how corporate HR can drive a successful post-merger integration. ";

	document.getElementById('event2-date').innerHTML="3,4";
	document.getElementById('event2-month').innerHTML="Dec";
	document.getElementById('event2-hour').innerHTML="11:00";
	document.getElementById('event2-img').src="assets/images/old-event2.png";
	document.getElementById('event2-name').innerHTML="IP TECH SUMMIT 2020";
	document.getElementById('event2-exp').innerHTML="An overall two-day summit streamed online, powered by Microsoft services, one  of the world’s most famous brands in the tech industry, on the hottest technological, regulatory, legal, data and intellectual property issues impacting services, finance and the industry, notably some verticals (mobile devices, automotive industry, smart metering), with a focus on emerging  supporting the intellectual property protection.";
}

//-------Events Finish----------------//


//-------Partnership Cards Start----------------//

function ShowPartner(NumCountry){

	class Ulkeler{
		constructor(contactPerson,email){
			this.contactPerson=contactPerson;
			this.email=email;
		}

	}

var australia = new Ulkeler("Chris Schluter","info@australiaCompany.com");
var france = new Ulkeler("Any Swan","info@franceCompany.com");
var italy = new Ulkeler("Jacop Black","info@italyCompany.com");
var kazakhstan = new Ulkeler("Patty Perkins","info@kazakhstanCompany.com");
var russia = new Ulkeler("Natasha Chico","info@russiaCompany.com");
var spain = new Ulkeler("Natasha Chico","info@spainCompany.com");
var switzerland = new Ulkeler("Natasha Chico","info@switzerlandCompany.com");
var india = new Ulkeler("Natasha Chico","info@indiaCompany.com");
var turkey = new Ulkeler("Natasha Chico","info@turkeyCompany.com");
var thailand = new Ulkeler("Natasha Chico","info@thailandCompany.com");



var UlkeListesi = new Array(australia,france,italy,kazakhstan,russia,spain,switzerland,india,turkey,thailand);

var Descriptions=document.querySelectorAll('.P-description');

var ContactEmails=document.querySelectorAll('.e-mail');

var Links=document.querySelectorAll('.partner-content a');

var Cards=document.querySelectorAll('.partner-card');

var Headers=document.querySelectorAll('.partner-head');


	Cards[NumCountry].classList.add('CoolTurning');
	ContactEmails[NumCountry].innerHTML=UlkeListesi[NumCountry].contactPerson+"<br>"+UlkeListesi[NumCountry].email;
	Descriptions[NumCountry].style.display="none";
	Links[NumCountry].style.display="none";
	Cards[NumCountry].style.background="#35256c";
	Cards[NumCountry].style.color="#ffff";
	Headers[NumCountry].style.background="#fff";
	Headers[NumCountry].style.color="#000000";



}



//-------Partnership Cards Finish----------------//

//-------TEAM START----------------//

var columns = document.querySelectorAll('.columnFor2');
var arrRight= document.querySelector('.toRight');
var arrLeft=document.querySelector('.toLeft');
//console.log(columns.length);
var sliderCounter=0;
function RightArrow(){
	if(sliderCounter!=3){

	columns[sliderCounter].classList.add('hide');
	columns[sliderCounter+3].classList.remove('hide');
	sliderCounter++;
	console.log('sliderCounter++ : '+sliderCounter);

	}

	if(sliderCounter==3){
		arrRight.style.display="none";
	}
	if(sliderCounter==0){
		arrLeft.style.display="none";
	}
	if(sliderCounter!=0){
	arrLeft.style.display="block";
	}
	
}
function LeftArrow(){
	if(sliderCounter!=0){
	arrLeft.style.display="block";
	columns[sliderCounter+2].classList.add('hide'); //5 index for 6 elements
	columns[sliderCounter-1].classList.remove('hide');
	sliderCounter--;
	console.log('sliderCounter++ : '+sliderCounter);
}
	if(sliderCounter==0){
		arrLeft.style.display="none";
	}
	if(sliderCounter!=3){
		arrRight.style.display="block";
	}
	
}




















//-------TEAM FINISH----------------//























