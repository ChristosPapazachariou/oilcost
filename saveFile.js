/**
 * It takes a number and a length, and returns a string of the number padded with zeros to the left
 * until it reaches the length.
 * @param number - The number to be padded.
 * @param length - The length of the string you want to return.
 * @returns a string of the number with leading zeros.
 */
function pad(number, length)
{
    var str = '' + number;
    while (str.length < length)
    {
        str = '0' + str;
    }
    return str;
}

/**
 * It creates a JSON file with the values of the input fields.
 */
function saveFile()
{
    var sDk = document.getElementById('totaloil_cost').value;
    var sMo = document.getElementById('floor1_counter').value;
    var sMi = document.getElementById('floor0_counter').value;
    var sMb = document.getElementById('boiler_counter').value;
    var sMe = document.getElementById('tenant_counter').value;

    var resultTenant = document.getElementById('tenant_cost').value;
    var resultOwner = document.getElementById('owner_cost').value;
    var resultVerif = document.getElementById('verification_total').value;

    var originalData =
    {
        members: [
            {
                cost: "totaloil_cost",
                amount: sDk
            },
            {
                meter: "floor1_counter",
                value: sMo
            },
            {
                meter: "floor0_counter",
                value: sMi
            },
            {
                meter: "boiler_counter",
                value: sMb
            },
            {
                meter: "tenant_counter",
                value: sMe
            },
            {
                result: "tenant_cost",
                amount: resultTenant
            },
            {
                result: "owner_cost",
                amount: resultOwner
            },
            {
                result: "verification_total",
                amount: resultVerif
            }
        ]
    };

    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(originalData, null, 2)],
    {
        type: "text/plain"
    }));
    var currentdate = new Date();
    var datetime =
        currentdate.getFullYear() + "_"
        + pad(currentdate.getDate(), 2) + "-"
        + pad((currentdate.getMonth() + 1), 2) + "-"
        + pad(currentdate.getHours(), 2) + "-"
        + pad(currentdate.getMinutes(), 2) + "-"
        + pad(currentdate.getSeconds(), 2);
    var fname = "EnergyCost_" + datetime + ".json";
    a.setAttribute("download", fname);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}