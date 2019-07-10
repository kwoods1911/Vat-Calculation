const netPrice = document.querySelector('#net-price')
const selectedCountry = document.querySelector('#select-country')
// let vatRate = document.querySelector('#vat-rate')
let vatRate = selectedCountry.options[selectedCountry.selectedIndex].value
// vatRate.value = '12'
const vatForm = document.querySelector('#vat-form')
const excludeVat = document.querySelector('#exclude-vat')
const includeVat = document.querySelector('#include-vat')
let calculationResults = document.querySelector('#results')

const errorMessage = '<h2> Error! You Must choose to include or Exclude VAT</h2>'

const disclaimer = '<h6>Note: This application calculates the amount of Value Added Tax added or removed from the net price. We are not responsible for any loss that you may encounter using this application.</h6>'

console.log(includeVat)
let vatPrice
let vatAmount


// Display Resuts in a div
const displayResults = function(vatPrice,vatRate,operation){
	return '<h3>Total Cost: ' + vatPrice.toFixed(2) +  '</h3>'+'<h4> VAT Amount:  ' + vatAmount.toFixed(2) + '</h4>' + '<h4> VAT Rate: '+ vatRate + ' % </h4>' + '<h4> Operation: ' + operation+'</h4>' + disclaimer
}
// Remove Vat From an Net Price
const removeVat = function(netPrice,vatRate){
	let operation = 'Exclude VAT'
	vatPrice = (netPrice - ((vatRate/100) * netPrice))
	vatAmount = (vatRate/100) * netPrice
	calculationResults.innerHTML = displayResults(vatPrice,vatRate,operation)
}

// Add Vat to Net Price
const addVat = function(netPrice,vatRate){
	let operation = 'Include VAT'
	vatPrice = (netPrice * ((vatRate/100)+1))
	vatAmount = (vatRate/100) * netPrice
	calculationResults.innerHTML = displayResults(vatPrice,vatRate,operation)
}


const validateForm = function(formValue1,formValue2){
	if(formValue1 === '' || formValue2.value === ''){
		alert('Please complete both forms! ')
	}
}


	


vatForm.addEventListener('submit',function(e){
	e.preventDefault(e)
	// Declare the VAT Rate based on the country selected
	let vatRate = selectedCountry.options[selectedCountry.selectedIndex].value
	// Ensure both forms are completed.
	validateForm(netPrice.value,vatRate)


	// Convert strings to integers and store them in variables
	let parsedPrice = JSON.parse(netPrice.value)
	let parsedRate = JSON.parse(vatRate)

// Determine if Exclude or Include Vat options are selected.
if(excludeVat.checked){
	removeVat(parsedPrice,parsedRate)
	$('#results').fadeIn(2300)
}else if(includeVat.checked){
	addVat(parsedPrice,parsedRate)
	$('#results').fadeIn(2300)
}else{
	calculationResults.innerHTML = errorMessage
}

})






	




