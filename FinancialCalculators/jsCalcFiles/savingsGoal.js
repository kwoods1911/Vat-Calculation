// alert('test');
//Selecting Variables



let form = document.querySelector("#savingsForm");
let calculationResults = document.querySelector("#results");

let monthlyDeposits;

let  anticipatedTimeLine = document.querySelector("#anticipatedTimeline");
let savingsGoal =document.querySelector("#savingsGoal");
let currentSavings = document.querySelector("#currentSavings");
let interestRate = document.querySelector("#interestRate");
let DisplayResults;
let resultsExplaination;

//Default Values
savingsGoal.value = 0.00;
currentSavings.value = 0.00;

/*When the form submits it calculates:
Savings
Compunded interest
*/
form.addEventListener('submit',function(e){

	//prevents default action by form
	e.preventDefault(e);
	

	//Calculate monthly deposits and compound interest
	monthlyDeposits = (savingsGoal.value - currentSavings.value) /anticipatedTimeLine.value;
	let compundedInterest = savingsGoal.value * (1+(interestRate.value/100));
	console.log("Your monthly deposits should be " + monthlyDeposits);
	console.log("Your current savings is "+ currentSavings.value);

	//Display the results into a table for user to view
	DisplayResults = "<table>"+
	"<tr>"+
	"<th>Savings Goal ($)</th>"+
	"<th>Amount of Time (months)</th>"+
	"<th>Monthly Deposits </th>"+
	"<th>Interest Rate</th>"+
	"<th>Compound Savings</th>"+
	"</tr>"+
	"<tr>"+
	"<td> $"+savingsGoal.value + "</td>"+
	"<td>"+anticipatedTimeLine.value+ " (months)</td>"+
	"<td><b> $ "+monthlyDeposits.toFixed(2)+ "</b></td>"+
	"<td>"+interestRate.value+" % </td>"+
	"<td> $"+compundedInterest+"</td>"+
	"</table>";

	//Further explaination of the table by user
	resultsExplaination = "<h4> If you already have  $"+ currentSavings.value + " saved, then you will need to make a monthly deposits of $"+
	monthlyDeposits.toFixed(2) + " in order to achieve your savings goal of $" + savingsGoal.value;

	//Clear input values after form in submutted
	savingsGoal.value = "";
	currentSavings.value = "";
	interestRate.value="";
	anticipatedTimeLine.value="";


	//Rendering the displayed results and explaination to the HTML document
	calculationResults.innerHTML = DisplayResults + resultsExplaination;


	//Animating results onto the screen using Jquery
	$('#results').fadeIn(500)
	$('html, body').animate({
        scrollTop: 500
    }, 2000);
});





