var size_name = "";
var size_price = 0;

var type_name = "";
var type_price = 0;

var side_dish = "nema priloga";
var side_dish_price = 0;

var result = document.getElementById("result");

function click_size (pizza_size) {
	var x = document.getElementById(pizza_size);
	size_price = parseFloat(x.value);
	switch (size_price) {
		case 100:
			size_name = "24'";
			break;
		case 150:
			size_name = "32'";
			break;
		case 230:
			size_name = "46'";
			break;
		default:
			size_name = "ne postoji pizza";
			break;
	}
	resultat();
}

function submit_pizza (pizza_id) {
	var x = document.getElementById(pizza_id);
	type_price = parseFloat(x.value);
	type_name = x.name;
	resultat();
}

function check_dishes () {
	var checks = document.getElementsByClassName("side_dishes");
	var price = 0;
	var side_dish_name = "";
	for (var i = 0; i < checks.length; i++) {
		if (checks[i].checked === true) {
			price += parseFloat(checks[i].value);
			side_dish_name += checks[i].name + " ";
		}
	}
	side_dish_price = price;	
	side_dish = side_dish_name;
	resultat();
}

function resultat () {
	result.value = parseFloat(side_dish_price + size_price + type_price);
}

function order() {
	var customer_name = document.getElementById("name").value;
	var customer_surname = document.getElementById("surname").value;
	var customer_address = document.getElementById("address").value;
	var customer_phone = document.getElementById("phone").value;
	var price = parseFloat(result.value);

    alert("You ordered " + type_name + " pizza size " + size_name + ", with following side dishes: " + side_dish + ". Pizza will be delivered on "
+ customer_address + ". The total amount for the payment is: " + price) 
}