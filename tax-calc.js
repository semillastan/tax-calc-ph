
function computeTax(status, salary){
	var percent = getPercent(salary);
	return percent;
}

function getPercent(salary){
	var toReturn = 1;
	if(salary >= 1000 && salary < 2000){
		toReturn = 1;
	}else if(salary >= 2000 && salary < 3000){
		toReturn = 2;
	}else if(salary >= 4000 && salary < 5000){
		toReturn = 3;
	}else if(salary >= 5000 && salary < 6000){
		toReturn = 4;
	}else if(salary >= 7000 && salary < 8000){
		toReturn = 5;
	}else if(salary >= 8000 && salary < 9000){
		toReturn = 6;
	}else if(salary >= 9000 && salary < 10000){
		toReturn = 7;
	}else if(salary >= 10000 && salary < 11000){
		toReturn = 8;
	}else if(salary >= 11000 && salary < 12000){
		toReturn = 9;
	}else if(salary >= 12000 && salary < 13000){
		toReturn = 10;
	}
	return toReturn;
}

function getExemption(salary){
	var toReturn = 1;
	if(salary >= 1000 && salary < 2000){
		toReturn = 1;
	}else if(salary >= 2000 && salary < 3000){
		toReturn = 2;
	}else if(salary >= 4000 && salary < 5000){
		toReturn = 3;
	}else if(salary >= 5000 && salary < 6000){
		toReturn = 4;
	}else if(salary >= 7000 && salary < 8000){
		toReturn = 5;
	}else if(salary >= 8000 && salary < 9000){
		toReturn = 6;
	}else if(salary >= 9000 && salary < 10000){
		toReturn = 7;
	}else if(salary >= 10000 && salary < 11000){
		toReturn = 8;
	}else if(salary >= 11000 && salary < 12000){
		toReturn = 9;
	}else if(salary >= 12000 && salary < 13000){
		toReturn = 10;
	}
	return toReturn * 100;
}
