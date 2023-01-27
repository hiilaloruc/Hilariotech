
//-------Statictics Counter Start----------------//
function function1CW(){
	
	document.getElementById('imgOfFunction').src="../assets/icon/f1.png";
	document.getElementById('titleOfFunction').innerHTML="Analitik & Analizler";
	document.getElementById('expOfFunction').innerHTML="Olayları daha iyi planlamak ve yürütmek için ilgi alanları, davranışlar, kayıtlar, katılım ve ticari işlemler gibi temas noktalarına ilişkin gerçek zamanlı verilere erişin.";
}

function function2CW(){
	
	document.getElementById('imgOfFunction').src="../assets/icon/f2.png";
	document.getElementById('titleOfFunction').innerHTML="Özelleştirilmiş Web Sitesi";
	document.getElementById('expOfFunction').innerHTML="Önceden yapılandırılmış şablonları kullanarak duyarlı web sitesi oluşturun ve etkinlikleri dijital olarak yönetmek için sürükle ve bırak oluşturucu seçeneklerini kullanın. Pazarlama, müşteri ile şirket arasındaki en önemli adımlardan biridir.";
}

function function3CW(){
	
	document.getElementById('imgOfFunction').src="../assets/icon/f3.png";
	document.getElementById('titleOfFunction').innerHTML="Mobil uygulama";
	document.getElementById('expOfFunction').innerHTML="Hareket halindeyken her şeyi yönetmek için güçlü bir yerel mobil uygulama aracılığıyla etkinliğinize bağlı kalın. Cep telefonları bilgisayarlardan çok hayatımızda. ";
}

function function4CW(){
	
	document.getElementById('imgOfFunction').src="../assets/icon/f4.png";
	document.getElementById('titleOfFunction').innerHTML="Çevrimiçi Toplantılar";
	document.getElementById('expOfFunction').innerHTML="Anketler, el kaldırma ve sohbetler gibi gelişmiş katılım seçenekleriyle yerel çevrimiçi toplantılar ayarlayın. Yerel ve özelleştirilebilir sanal odalar ile ağ platformumuz, çevrimiçi toplantılar sırasında sorunsuz ve kurulum gerektirmeyen bir deneyim sağlar.";
}


function function5CW(){
	
	document.getElementById('imgOfFunction').src="../assets/icon/f5.png";
	document.getElementById('titleOfFunction').innerHTML="E-posta Bildirimleri";
	document.getElementById('expOfFunction').innerHTML="Önceden oluşturulmuş şablonlar ve sürükle ve bırak e-posta oluşturucu ile özelleştirilmiş e-postalar oluşturarak otomatik kampanyalar gönderin.";
}


function targetG1(){
	document.getElementById('btnComp').className="buttonisActive";
	document.getElementById('btnEnt').className="#";



	document.getElementById('targetTitle').innerHTML="Takımlar & İşbirliği";
	document.getElementById('targetExpl').innerHTML="Bizimle çalışarak, şirketler ve iş liderleri, küresel çevre kaynaklarımızı sürdürülebilir bir şekilde yönetmeye ve korumaya önemli bir katkıda bulunmaya aktif olarak katılabilirler.";
	document.getElementById('targetImg').src="../assets/icon/company.png";
}

function targetG2(){
	
	document.getElementById('btnEnt').className="buttonisActive";
	document.getElementById('btnComp').className="#";



	document.getElementById('targetTitle').innerHTML="Bireysel Girişim";
	document.getElementById('targetExpl').innerHTML="Her yıl 350 start-up'ın katıldığı anket ile yapılan araştırma kapsamında girişimcilerden en cana yakın kurumsal firmaları seçmeleri istendi.";
	document.getElementById('targetImg').src="../assets/icon/experienced.png";
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
	document.getElementById('event1-img').src="../assets/images/event1.png";
	document.getElementById('event1-name').innerHTML="WOMEN IN TECH SUMMIT";
	document.getElementById('event1-exp').innerHTML="Perspektywy Women in Tech Summit, Avrupa'daki Teknoloji ve BT'deki kadınların en sevdiği etkinliktir. Geçen yılki etkinlik 52 ülkeden 6300'ün üzerinde katılımcıyı bir araya getirdi. Bu yıl Zirve çevrimiçi oluyor! Yeni fikirlerle, harika insanlarla toplantılar, iş fırsatları ve derin ağlarla dolu 2 gün. Bilgisayar, teknoloji ve bilimdeki kadınlara yönelik büyük kutlama için lütfen bize katılın! 2020'nin sonunu hep birlikte mükemmel hale getirelim!";

	document.getElementById('event2-date').innerHTML="22";
	document.getElementById('event2-month').innerHTML="Feb";
	document.getElementById('event2-hour').innerHTML="16:00";
	document.getElementById('event2-img').src="../assets/images/event2.png";
	document.getElementById('event2-name').innerHTML="HEALTH TECH SUMMIT 2021";
	document.getElementById('event2-exp').innerHTML="Health Tech Summit 2020, sizi önde gelen konuşmacılar aracılığıyla sağlık sektöründeki teknolojik gelişmeleri keşfetmeye ve teknolojinin kaliteyi ve tıbbi bakıma erişimi nasıl optimize ettiğini öğrenmeye davet ediyor.";

}


function EventsPast(){
	document.getElementById('pastEvents').className="mytitle activeTitle";
	document.getElementById('upcomingEvents').className="mytitle";
	
	document.getElementById('event1-date').innerHTML="18";
	document.getElementById('event1-month').innerHTML="Apr";
	document.getElementById('event1-hour').innerHTML="12:00";
	document.getElementById('event1-img').src="../assets/images/old-event1.png";
	document.getElementById('event1-name').innerHTML="ASEAN HR SUMMIT 2020";
	document.getElementById('event1-exp').innerHTML="Geçen yıl, 18-19 Ekim'de, ASEAN HR Tech Venture Summit, teknolojinin sürece nasıl adapte edildiği de dahil olmak üzere Filipinler ve diğer Güneydoğu Asya ülkelerindeki İK'nın durumu hakkında kapsamlı güncellemeyi vurguladı. Diğer önemli noktalar, İK'nın gelenekselden çevikliğe geçişine, bir Birleşmenin başarısızlığına ve kurumsal İK'nın birleşme sonrası entegrasyonu nasıl başarılı bir şekilde sürdürebileceğine dair bir vaka çalışmasına odaklanıyor.";

	document.getElementById('event2-date').innerHTML="3,4";
	document.getElementById('event2-month').innerHTML="Dec";
	document.getElementById('event2-hour').innerHTML="11:00";
	document.getElementById('event2-img').src="../assets/images/old-event2.png";
	document.getElementById('event2-name').innerHTML="IP TECH SUMMIT 2020";
	document.getElementById('event2-exp').innerHTML="Teknoloji endüstrisinde dünyanın en ünlü markalarından biri olan Microsoft hizmetleri tarafından desteklenen, hizmetleri, finansmanı ve sektörü, özellikle de bazılarını etkileyen en yeni teknolojik, düzenleyici, yasal, veri ve fikri mülkiyet sorunları hakkında çevrimiçi olarak iki günlük genel bir zirve yayınlandı. Fikri mülkiyet korumasını desteklemeye odaklanan dikeyler (mobil cihazlar, otomotiv endüstrisi, akıllı ölçüm).";
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























