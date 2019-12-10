const getSecondUser = async () => {
  const url = 'https://api.exchangeratesapi.io/latest';
  const response = await fetch(url);
  let commits = await response.json();
  let arrRates = commits.rates;


  let foo = prompt('Currency Converter | From Euro to ... | Type your money in EURO');



  let curr = 1;
  const one = 1;
  //console.log(commits);
  console.log(`------------------------------------------------------------------------------------------`);
  console.log(`Base: ${commits.base}, by Date; ${commits.date}`);
  console.log(`------------------------------------------------------------------------------------------`);

  for (let key in arrRates) {
    if (key == "GBP") {
      console.log(`--------------------------------------------------------------------------`);

      console.log(`%cCode: ${key}, Price: ${arrRates[key]} | Converted price: ${foo} * ${arrRates[key]} = ${(arrRates[key] * foo).toFixed(2)} ${key}`, "font-weight:800; font-size: 12px");
      console.log(`--------------------------------------------------------------------------`);
    } else if (key == "SEK") {
      console.log(`--------------------------------------------------------------------------`);
      console.log(`%cCode: ${key}, Price: ${arrRates[key]} | Converted price: ${foo} * ${arrRates[key]} = ${(arrRates[key] * foo).toFixed(2)} ${key}`, "font-weight:800; font-size: 12px");
      console.log(`--------------------------------------------------------------------------`);
    } else {
      console.log(`Code: ${key}, Price: ${arrRates[key]} | Converted price: ${foo} * ${arrRates[key]} = ${(arrRates[key] * foo).toFixed(2)} ${key}`);
    }


  }

}

getSecondUser();