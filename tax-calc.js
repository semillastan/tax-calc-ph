
function computeTaxSemi(status, salary){
	var arr = getBracketSemi(status, salary);
	var bracket = getBracketIndexSemi(arr, salary);
	
	var exemption = new Array(0,0,20.83,104.17,354.17,937.50,2083.33,5208.33);
	var percentage = new Array(0,0.05,0.1,0.15,0.2,0.25,0.3,0.32);
	
	var diff = salary - arr[bracket-1];
	var tax = diff * percentage[bracket-1];
	var total = tax + exemption[bracket-1];
	alert("Total tax : " + total + ", Gross Salary : " + (salary-total));
}

function getBracketSemi(status, salary){
	var zArr = new Array(1,0,417,1250,2917,5833,10417,20833,999999999);
	var sArr = new Array(1,2083,2500,3333,5000,7917,12500,22917,999999999);
	var s1Arr = new Array(1,3125,3542,4375,6042,8958,13542,23958,999999999);
	var s2Arr = new Array(1,4167,4583,5417,7083,10000,14583,25000,999999999);
	var s3Arr = new Array(1,5208,5625,6458,8125,11042,15625,26042,999999999);
	var s4Arr = new Array(1,6250,6667,7500,9167,12083,16667,27083,999999999);
	
	var main = new Array();
	
	if(status == 1){
		main = zArr;
	}else if(status == 2){
		main = sArr;
	}else if(status == 3){
		main = s1Arr;
	}else if(status == 4){
		main = s2Arr;
	}else if(status == 5){
		main = s3Arr;
	}else if(status == 6){
		main = s4Arr;
	}
	
	return main;
}

function getBracketIndexSemi(array, salary){
	var i = 0;
	var toReturn = 0;
	for(i=0;i<8;i++){
		if(salary >= array[i] && salary < array[i+1]){
			toReturn = i+1;
			break;
		}
	}
	
	return toReturn;
}
