"use strict";
// Ingridient Prices

let coffeePrice = 630;
const coffeePricePerGram = coffeePrice / 1000;
let milkPrice = 440;
const milkPricePerGram = milkPrice / 1000;
let cacaoPrice = 330;
const cacaoPricePerGram = cacaoPrice / 1000;
let toffeePrice = 450;
const toffeePricePerGram = toffeePrice / 1000;
let scandiaPrice = 450;
const scandiaPricePerGram = scandiaPrice / 1000;
let waterPrice = 2;
const waterPricePerGram = 2 / 1000;


// Supplies Prices
let cupPricePerItem = 2.13;
let cupLidPricePerItem = 1.70;
let strawPrice = 100;
const strawPricePerItem = strawPrice / 200;
let stickPice = 150;
const stickPricePerItem = stickPice / 500;
let sugarPrice = 80;
const sugarPricePerItem = sugarPrice / 200;

const averageSupplieCostPerCup = (cupPricePerItem) + (cupLidPricePerItem) + (stickPricePerItem) + (sugarPricePerItem * 2);

// Drinks Self Cost

const espressoSelfCost = (coffeePricePerGram * 9) + (waterPricePerGram * 50);
const espressoMacchiatoSelfCost = (coffeePricePerGram * 9) + (waterPricePerGram * 50) + (milkPricePerGram * 6);
const americanoSelfCost = (coffeePricePerGram * 9) + (waterPricePerGram * 150);
const americanoMilkSelfCost = (coffeePricePerGram * 9) + (waterPricePerGram * 150) + (milkPricePerGram * 12);
const cappuccinoSelfCost = (coffeePricePerGram * 9) + (waterPricePerGram * 165) + (milkPricePerGram * 26);
const latteSelfCost = (coffeePricePerGram * 9) + (waterPricePerGram * 180) + (milkPricePerGram * 28);
const moccaSelfCost = (coffeePricePerGram * 10) + (waterPricePerGram * 250) + (milkPricePerGram * 8) + (cacaoPricePerGram * 12);
const flatWhiteSelfCost = (coffeePricePerGram * 13.5) + (waterPricePerGram * 300) + (milkPricePerGram * 12);
const chocolateSelfCost = (waterPricePerGram * 230) + (cacaoPricePerGram * 38);
const cacaoSelfCost = (waterPricePerGram * 200) + (milkPricePerGram * 19) + (cacaoPricePerGram * 19);
const latteToffeeSelfCost = (waterPricePerGram * 300) + (toffeePricePerGram * 30);
const latteScandiaSelfCost = (waterPricePerGram * 300) + (scandiaPricePerGram * 30);


// Vending Prices 

let espressoVendingPrice = 25;
let espressoMacchiatoVendingPrice = 30;
let americanoVendingPrice = 30;
let americanoMilkVendingPrice = 35;
let cappuccinoVendingPrice = 40;
let latteVendingPrice = 40;
let moccaVendingPrice = 40;
let flatWhiteVendingPrice = 40;
let chocolateVendingPrice = 35;
let cacaoVendingPrice = 40;
let latteToffeeVendingPrice = 40;
let latteScandiaVendingPrice = 40;


// Drinks Profit 

const espressoProfit = espressoVendingPrice - espressoSelfCost;
const espressoMacchiatoProfit = espressoMacchiatoVendingPrice - espressoMacchiatoSelfCost;
const americanoProfit = americanoVendingPrice - americanoSelfCost;
const americanoMilkProfit = americanoMilkVendingPrice - americanoMilkSelfCost;
const cappuccinoProfit = cappuccinoVendingPrice - cappuccinoSelfCost;
const latteProfit = latteVendingPrice - latteSelfCost;
const moccaProfit = moccaVendingPrice - moccaSelfCost;
const flatWhiteProfit = flatWhiteVendingPrice - flatWhiteSelfCost;
const chocolateProfit = chocolateVendingPrice - chocolateSelfCost;
const cacaoProfit = cacaoVendingPrice - cacaoSelfCost;
const latteToffeeProfit = latteToffeeVendingPrice - latteToffeeSelfCost;
const latteScandiaProfit = latteScandiaVendingPrice - latteScandiaSelfCost;


// Drinks Profit including supplies

const espressoProfitIncludingSupplies = espressoProfit - averageSupplieCostPerCup;
const espressoMacchiatoProfitIncludingSupplies = espressoMacchiatoProfit - averageSupplieCostPerCup;
const americanoProfitIncludingSupplies = americanoProfit - averageSupplieCostPerCup;
const americanoMilkProfitIncludingSupplies = americanoMilkProfit - averageSupplieCostPerCup;
const cappuccinoProfitIncludingSupplies = cappuccinoProfit - averageSupplieCostPerCup;
const latteProfitIncludingSupplies = latteProfit - averageSupplieCostPerCup;
const moccaProfitIncludingSupplies = moccaProfit - averageSupplieCostPerCup;
const flatWhiteProfitIncludingSupplies = flatWhiteProfit - averageSupplieCostPerCup;
const chocolateProfitIncludingSupplies = chocolateProfit - averageSupplieCostPerCup;
const cacaoProfitIncludingSupplies = cacaoProfit - averageSupplieCostPerCup;
const latteToffeeProfitIncludingSupplies = latteToffeeProfit - averageSupplieCostPerCup;
const latteScandiaProfitIncludingSupplies = latteScandiaProfit - averageSupplieCostPerCup;


// Average Profit 

const averageVendingPrice = (espressoVendingPrice + espressoMacchiatoVendingPrice + americanoVendingPrice + americanoMilkVendingPrice + cappuccinoVendingPrice + latteVendingPrice + moccaVendingPrice + flatWhiteVendingPrice + chocolateVendingPrice + cacaoVendingPrice + latteToffeeVendingPrice + latteScandiaVendingPrice) / 12;
const averageSelfCost = (espressoSelfCost + espressoMacchiatoSelfCost + americanoSelfCost + americanoMilkSelfCost + cappuccinoSelfCost + latteSelfCost + moccaSelfCost + flatWhiteSelfCost + chocolateSelfCost + cacaoSelfCost + latteToffeeSelfCost + latteScandiaSelfCost) / 12;
const averageProfitIncludingSupplies = (espressoProfitIncludingSupplies + espressoMacchiatoProfitIncludingSupplies + americanoProfitIncludingSupplies + americanoMilkProfitIncludingSupplies + cappuccinoProfitIncludingSupplies + latteProfitIncludingSupplies + moccaProfitIncludingSupplies + flatWhiteProfitIncludingSupplies + chocolateProfitIncludingSupplies + cacaoProfitIncludingSupplies + latteToffeeProfitIncludingSupplies + latteScandiaProfitIncludingSupplies) / 12;


// Information Output 

console.log (`Ціна еспресо ${espressoVendingPrice}, Собівартість еспресо ${espressoSelfCost.toFixed(2)}, Прибуток ${espressoProfitIncludingSupplies.toFixed(2)}`);
console.log (`Ціна еспресо мак'ято ${espressoMacchiatoVendingPrice}, Собівартість еспресо мак'ято ${espressoMacchiatoSelfCost}, Прибуток ${espressoMacchiatoProfitIncludingSupplies.toFixed(2)}`);
console.log (`Ціна американо ${americanoVendingPrice}, Собівартість американо ${americanoSelfCost.toFixed(2)}, Прибуток ${americanoProfitIncludingSupplies.toFixed(2)}`);
console.log (`Ціна американо з молоком ${americanoMilkVendingPrice}, Собівартість американо з молоком ${americanoMilkSelfCost.toFixed(2)}, Прибуток ${americanoMilkProfitIncludingSupplies.toFixed(2)}`);
console.log (`Ціна капучино ${cappuccinoVendingPrice}, Собівартість капучино ${cappuccinoSelfCost.toFixed(2)}, Прибуток ${cappuccinoProfitIncludingSupplies.toFixed(2)}`);
console.log (`Ціна лате ${latteVendingPrice}, Собівартість лате ${latteSelfCost.toFixed(2)}, Прибуток ${latteProfitIncludingSupplies.toFixed(2)}`);
console.log (`Ціна мока ${moccaVendingPrice}, Собівартість мока ${moccaSelfCost.toFixed(2)}, Прибуток ${moccaProfitIncludingSupplies.toFixed(2)}`);
console.log (`Ціна флет вайт ${flatWhiteVendingPrice}, Собівартість флет вайт ${flatWhiteSelfCost.toFixed(2)}, Прибуток ${flatWhiteProfitIncludingSupplies.toFixed(2)}`);
console.log (`Ціна шоколад ${chocolateVendingPrice}, Собівартість шоколад ${chocolateSelfCost.toFixed(2)}, Прибуток ${chocolateProfitIncludingSupplies.toFixed(2)}`);
console.log (`Ціна какао ${cacaoVendingPrice}, Собівартість какао ${cacaoSelfCost.toFixed(2)}, Прибуток ${cacaoProfitIncludingSupplies.toFixed(2)}`);
console.log (`Ціна карамельний лате ${latteToffeeVendingPrice}, Собівартість карамельний лате ${latteToffeeSelfCost.toFixed(2)}, Прибуток ${latteToffeeProfitIncludingSupplies.toFixed(2)}`);
console.log (`Ціна лате лісовий горіх ${latteScandiaVendingPrice}, Собівартість лате лісовий горіх ${latteScandiaSelfCost.toFixed(2)}, Прибуток ${latteScandiaProfitIncludingSupplies.toFixed(2)}`);
console.log (`Cередня ціна ${averageVendingPrice}, Cередня собівартість ${averageSelfCost.toFixed(2)}, Cередній прибуток ${averageProfitIncludingSupplies.toFixed(2)}`);


// Expenses (витрати)
let rent = 1500;
let singleTax = 1600;
let esvTax = 1760;
let militaryTax = 800;
let employeePDFO = 1440;
let employeeMilitaryTax = 400;
let employeeEsv = 1760;
let televend = 1400;
let wifiCost = 200;
const taxesPerMonth = singleTax + esvTax + militaryTax + employeePDFO + employeeMilitaryTax + employeeEsv;
const expensesPerMonth = rent + televend + wifiCost + taxesPerMonth;
console.log (`Витрати на місяць ${expensesPerMonth}`);


// Calculation

const cupsPerMonthNeeded = Number((expensesPerMonth / averageProfitIncludingSupplies).toFixed(2));
console.log (`Необхідна кількість чашок на місяць ${cupsPerMonthNeeded}`);
const cupsPerDayNeeded = Number((cupsPerMonthNeeded / 30).toFixed(2));
console.log(`Необхідна кількість чашок на день ${cupsPerDayNeeded}`);