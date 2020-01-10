function calculateOil()
{
	//The following variables represent the differences of counter records between 2 consecutive oil purchases
	var Dk = parseFloat(document.getElementById('totaloil_cost').value);	//The oil refill purchase cost
	var Mo = parseFloat(document.getElementById('floor1_counter').value);	//The difference between 2 records of the floor 1 counter
	var Mi = parseFloat(document.getElementById('floor0_counter').value);	//The difference between 2 records of the ground floor counter
	var Mb = parseFloat(document.getElementById('boiler_counter').value);	//The difference between 2 records of the boiler counter
	var Me = parseFloat(document.getElementById('tenant_counter').value);	//The difference between 2 records of the tenant counter
	
	if (Dk == "" || Mo == "", Mi == "" || Mb == "", Me == "" 
		|| Dk == null || Mo == null, Mi == null || Mb == null, Me == null
		|| !isNumeric(Dk) || !isNumeric(Mo) || !isNumeric(Mi) || !isNumeric(Mb) || !isNumeric(Me))
	{
		alert("Please Fill All Required Fields");
		return false;
	}

	var resultTenant = 0;
	var resultOwner = 0;
	var resultVerif = 0;
	var floatTolerance = 0.01;	//1% should be enough
	
	//do calculation by formula
	resultOwner = 0.15*Dk*(1-0.286) + 0.85*Dk*((Mi*0.290 + Mo*0.316 + Mb*0.108)/(Me*0.286 + Mi*0.290 + Mo*0.316 + Mb*0.108));
	resultTenant = 0.15*Dk*0.286 + 0.85*Dk*((Me*0.286)/(Me*0.286 + Mi*0.290 + Mo*0.316 + Mb*0.108));
	resultVerif = resultTenant + resultOwner;
	if (abs(resultVerif - Dk)) >  resultVerif * floatTolerance)
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