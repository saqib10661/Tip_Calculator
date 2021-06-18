function calculateTip(){
	let amount = document.getElementById("amount").value;
	let selected = document.getElementById("howmuch").value;

	const num1 = (amount * 10)/100;
	const num2 = (amount * 20)/100;
	const num3 = (amount * 30)/100;
	const num4 = (amount * 40)/100;
	const num5 = (amount * 50)/100;

//check if input is empty
	if(amount === ""){
		alert("Enter Amount Paid");
	}

//calculating the tip value
	if (selected == 10){
		tip.innerHTML = "£"+ num1.toFixed(2);
	} else if (selected == 20) {
		tip.innerHTML = "£"+ num2.toFixed(2);
	}else if (selected == 30){
		tip.innerHTML = "£"+ num3.toFixed(2);
	}else if (selected == 40){
		tip.innerHTML = "£" + num4.toFixed(2);
	}else if (selected == 50){
		alert("Your Generousity Knows No Bounds, Thank You")
		tip.innerHTML = "£" + num5.toFixed(2);
	}else {
		alert("Enter Tip");
	}



}