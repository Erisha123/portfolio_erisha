const txtElement = ['freelancer', 'web Developer', 'Graphic Designer'];
let count = 0;
let txtIndex = 0;
let currenTxt= '';
let words = '';

(function ngetik(){
	if(count == txtElement.length){
	     count= 0;
	}
	currentTxt = txtElement[count];

	words = currentTxt.slice(0, ++txtIndex);
	document.querySelector('.efek-ngetik').textContent = words;

	if(words.lenght == currentTxt.lenght){
	    count++;
	    txtIndex = 0;
	}
	setTimeout(ngetik, 500);
})();