let captcha;
let alphabets = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
let status= document.getElementById("status");
status.innerText = "Capcha Generator";

generate=()=>{
	let first = alphabets[Math.floor(Math.random() * alphabets.length)];
	let second =Math.floor(Math.random() * 10);
    let third = Math.floor(Math.random() * 10);
    let four = alphabets[Math.floor(Math.random() * alphabets.length)];
    let five = alphabets[Math.floor(Math.random() * alphabets.length)];
    let six = 	Math.floor(Math.random() * 10);
	
	captcha = first.toString()+ second.toString() + third.toString() + four.toString() + five.toString() + six.toString();
	
	document.getElementById("generate-captcha").value=captcha;
	document.getElementById("entered-captcha").value ="";
	
}

check=()=>{
	let uservalue = document.getElementById("entered-captcha").value;
	if(uservalue==captcha){
		 status.innerText="correct";
	}else{
		
		status.innerText="wrong";
		document.getElementById("entered-captcha").value ="";
	}
	
	
}