// Replace with your free API key from https://www.exchangerate-api.com/
const API_KEY = "a41e8ffeca133732874431ae";
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/`;

document.getElementById("convert").addEventListener("click", () => {
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;
  const amount = document.getElementById("amount").value;

  if (amount === "" || isNaN(amount)) {
    alert("Please enter a valid amount!");
    return;
  }

  // Fetch the exchange rate
  fetch(`${BASE_URL}${fromCurrency}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch exchange rates.");
      }
      return response.json();
    })
    .then((data) => {
      const rate = data.conversion_rates[toCurrency];
      if (!rate) {
        throw new Error("Invalid currency conversion.");
      }

      const convertedAmount = (amount * rate).toFixed(2);
      document.getElementById(
        "result"
      ).innerHTML = `Converted Amount: ${convertedAmount} ${toCurrency}`;
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred while fetching exchange rates.");
    });
});

const currencyList_ = ["CAD","USD","EUR","GBP"];
var CalcRate_;
var CalcAmount

for (let i = 0; i <= currencyList_.length - 1; i++) {
    document.getElementById(currencyList_[i] + "_rate").innerHTML = '100';
}

document.getElementById("CalculateRateButton").addEventListener('click', pullRates );

function pullRates() {
    
    const CurrencyToConvertValue_ = document.getElementById("CurrencyToConvert").value;
    const OrgCurrencyAmountValue_ = document.getElementById("OrgCurrencyAmount").value;

    console.log("CalculateRateButton clicked")
    // fetch currency based on selected currency
    fetch(`${BASE_URL}${CurrencyToConvertValue_}`)
        .then((response) => {
        // throw error if fetch fails  
        if (!response.ok) {
            throw new Error("Failed to fetch exchange rates.");
        }
        return response.json();
        })
        .then((data) => {
            for(let i = 0; i <= currencyList_.length - 1; i++) {
                CalcRate_ = data.conversion_rates[currencyList_[i]];
                CalcAmount = (OrgCurrencyAmountValue_ * CalcRate_).toFixed(2);
                // throw error if rate invalid
                if (!CalcRate_) {
                    throw new Error("Invalid currency conversion.");
                }
                // Update table to display rate
                document.getElementById(currencyList_[i] + "_rate").innerHTML = CalcRate_;
                document.getElementById(currencyList_[i] + "_value").innerHTML = CalcAmount;
            }
        })
        .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while fetching exchange rates.");
        });
}