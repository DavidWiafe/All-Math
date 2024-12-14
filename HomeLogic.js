// Category drop down - Rent/Mor
var HomeCategory = document.querySelector('#HomeCategory');
// grab both Rent & Mort DIV sections
var RentSection = document.querySelector('.RentSection');
var MortgageSection = document.querySelector('.MortgageSection');
// Rent Calc Button
let RentCalcButton = document.querySelector('#RentCalcButton');
var RentYearCalc = document.querySelector('#RentYearCalc');
var RentAmount = document.querySelector('#RentAmount');

// Store users selection
var UserSelection_;
var rentValue_; // get rent amount per month value

// default hide div sections
/*RentSection.style.display = "block";
MortgageSection.style.display = "block";*/

// Add an event listener to check when the selection changes
HomeCategory.addEventListener('change', function() {
    UserSelection_ = HomeCategory.value;
    if (HomeCategory.value === 'Rent') {
        DisplaySelectedCategory(RentSection);
        hideCategorySection(MortgageSection);
    } else if (HomeCategory.value === 'Mortgage'){
        DisplaySelectedCategory(MortgageSection);
        hideCategorySection(RentSection);
    }
})

// Display Query DIV Section
function DisplaySelectedCategory(querySelector_) {
    querySelector_.style.display = "block";
}

// Hide Query DIV Section
function hideCategorySection(querySelector_){
    querySelector_.style.display = "none";
}

// once RentCalcButton is clicked
RentCalcButton.addEventListener("click",function() {
   rentValue_ = RentAmount.value * 12;
   RentYearCalc.textContent = "12 Month Total: " + rentValue_;
})