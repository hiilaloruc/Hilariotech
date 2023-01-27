//-------Statictics Counter Start----------------//

var observer = new IntersectionObserver(function(entries) {
    if(entries[0]['isIntersecting'] === true) {
        if(entries[0]['intersectionRatio'] === 1)
			increaseNums();
    }
 
}, { threshold: [0, 0.5, 1] });

observer.observe(document.querySelector(".js-dedector")); //which div triggers counting



function increaseNums(){
	const counters = document.querySelectorAll('.counter');
	counters.forEach(counter => {
		const updateCount = () => {
			const target = +counter.getAttribute('data-target');
			const isaret=counter.getAttribute('sign');//to show percent 
			const count = +counter.innerText;//number at that moment

			// Check if target is reached
			if (count < target) {

				counter.innerText = count+1;
				//counter.innerText += isaret;
				// Call function every ms
				setTimeout(updateCount, 25);
			} else {
				counter.innerText = target;
				counter.innerText += isaret;

			}
		};

		updateCount();
	});
}
//-------Statictics Counter Start----------------//