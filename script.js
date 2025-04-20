const currencyList = {
   "USD": "us",
   "EUR": "eu",
   "RUB": "ru",
   "AED": "ae",
   "TRY": "tr",
   "CNY": "cn",
   "JPY": "jp",
   "GBP": "gb",
   "UZS": "uz",
   "KZT": "kz"
 };

 const fromSelect = document.getElementById('from');
 const toSelect = document.getElementById('to');
 const fromFlag = document.getElementById('from-flag');
 const toFlag = document.getElementById('to-flag');


 for (let code in currencyList) {
   let option1 = document.createElement('option');
   option1.value = code;
   option1.text = code;
   fromSelect.appendChild(option1);

   let option2 = document.createElement('option');
   option2.value = code;
   option2.text = code;
   toSelect.appendChild(option2);
 }

 fromSelect.value = "USD";
 toSelect.value = "AED";

 fromSelect.addEventListener("change", () => {
   fromFlag.src =` https://flagcdn.com/w40/${currencyList[fromSelect.value]}.png`;
 });

 toSelect.addEventListener("change", () => {
   toFlag.src = `https://flagcdn.com/w40/${currencyList[toSelect.value]}.png`;
 });

 function convertCurrency() {
   const amount = document.getElementById('amount').value;
   const from = fromSelect.value;
   const to = toSelect.value;

   fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
     .then(res => res.json())
     .then(data => {
       const rate = data.rates[to];
       const result = (amount * rate).toFixed(2);
       document.getElementById('result').innerText = `${amount} ${from} = ${result} ${to}`;
     })
    
 }



