// Category drop down - Rent/Mor
var HomeCategory = document.querySelector('#HomeCategory');
// grab both Rent & Mort DIV sections
const RentSection = document.querySelector('.RentSection');
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

function CreateTableTemp() {
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    const headers = ['Name', 'Age', 'City'];
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
      });
      table.appendChild(headerRow);

       // Add data rows
    const data = [
        { name: 'Alice', age: 25, city: 'New York' },
        { name: 'Bob', age: 30, city: 'Los Angeles' },
        { name: 'Charlie', age: 35, city: 'Chicago' }
      ];

      data.forEach(rowData => {
        const row = document.createElement('tr');
        Object.values(rowData).forEach(cellData => {
          const td = document.createElement('td');
          td.textContent = cellData;
          row.appendChild(td);
        });
        table.appendChild(row);
      });

       // Append the table to the div
       RentSection.appendChild(table);
}

function CreateTableRentDetails() {
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    const headers = ['Time', 'Sum Amount'];

    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
      });
      table.appendChild(headerRow);

    const data = [
        { time: '2 Months', sum: RentAmount.value * 2 },
        { time: '4 Months', sum: RentAmount.value * 4 },
        { time: '6 Months', sum: RentAmount.value  * 6 },
        { time: '8 Months', sum: RentAmount.value  * 8 },
        { time: '10 Months', sum: RentAmount.value  * 10 },
        { time: '12 Months', sum: RentAmount.value  * 12 }
      ];

      data.forEach(rowData => {
        const row = document.createElement('tr');
        Object.values(rowData).forEach(cellData => {
          const td = document.createElement('td');
          td.textContent = cellData;
          row.appendChild(td);
        });
        table.appendChild(row);
      });

      // Append the table to the div
      RentSection.appendChild(table);
}

// once RentCalcButton is clicked
RentCalcButton.addEventListener("click",function() {
   rentValue_ = RentAmount.value * 12;
   RentYearCalc.textContent = "12 Month Total: " + rentValue_;
   //CreateTableTemp();
   CreateTableRentDetails();
})