function calculateOil()
{
	//The following variables represent the differences of counter records between 2 consecutive oil purchases
	var sDk = document.getElementById('totaloil_cost').value;
	var sMo = document.getElementById('floor1_counter').value;
	var sMi = document.getElementById('floor0_counter').value;
	var sMb = document.getElementById('boiler_counter').value;
	var sMe = document.getElementById('tenant_counter').value;
	
	if ( sDk == "" || sMo == "" || sMi == "" || sMb == "" || sMe == ""
	|| !isNumeric(sDk) || !isNumeric(sMo) || !isNumeric(sMi) || !isNumeric(sMb) || !isNumeric(sMe))
	{
		alert("Please Fill All Required Fields");
		return false;
	}
	else
	{
		var Dk = parseFloat(sDk);	//The oil refill purchase cost
		var Mo = parseFloat(sMo);	//The difference between 2 records of the floor 1 counter
		var Mi = parseFloat(sMi);	//The difference between 2 records of the ground floor counter
		var Mb = parseFloat(sMb);	//The difference between 2 records of the boiler counter
		var Me = parseFloat(sMe);	//The difference between 2 records of the tenant counter
	}

	var resultTenant = 0;
	var resultOwner = 0;
	var resultVerif = 0;
	var floatTolerance = 0.01;	//1% should be enough

	//do calculation by formula
	resultOwner = 0.15*Dk*(1-0.286) + 0.85*Dk*((Mi*0.290 + Mo*0.316 + Mb*0.108)/(Me*0.286 + Mi*0.290 + Mo*0.316 + Mb*0.108));
	resultTenant = 0.15*Dk*0.286 + 0.85*Dk*((Me*0.286)/(Me*0.286 + Mi*0.290 + Mo*0.316 + Mb*0.108));
	resultVerif = resultTenant + resultOwner;
	if ((Math.abs(resultVerif - Dk)) >  (resultVerif * floatTolerance))
	{
		window.alert("Amount Verification Failed!");
		return false;
	}
	else if (resultVerif != Dk)
	{
		window.alert("Rounding Error, please verify amounts!");
	}

	//return the result to form
	document.getElementById('tenant_cost').value = resultTenant;
	document.getElementById('owner_cost').value = resultOwner;
	document.getElementById('verification_total').value = resultVerif;
	chartPlot();
	return true;
}

function clearAll()
{
	document.getElementById('totaloil_cost').value = "";
	document.getElementById('floor1_counter').value = "";
	document.getElementById('floor0_counter').value = "";
	document.getElementById('boiler_counter').value = "";
	document.getElementById('tenant_counter').value = "";

	document.getElementById('tenant_cost').value = "";
	document.getElementById('owner_cost').value = "";
	document.getElementById('verification_total').value = "";
}

function isNumeric(num)
{
	return !isNaN(num)
}
