//Authors: Denis Maximov and Nikita Atroshenko
//Date: 05/08/19
//version # 01110100 01101001 00100000 01110000 01101001 01100100 01101111 01110010
//----------------------------------------------------------------------------------
//Authors: Pavo And Vinnie 
//Date: 30/11/19
//version # 01000010 01000001 01000100 00100000 01000010 01001111 01011001 01010011 00100000 01000110 01001111 01010010 00100000 01001100 01001001 01000110 01000101 
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$j$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$j$$$$$$$$$$
// $$$$$$$$$'                                                        `$$$$$$$$$
// $$$$$$$' .sS$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$Ss. `$$$$$$$
// $$$$$' .$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$' $$$$$$$$$$. `$$$$$
// $$$$  S$$$$$$$V `S$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$'   $$$$$$$$$$$S  $$$$
// $$$$ $$$$$$$$$$   `!$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$'    $$$$$$$$$$$$$ $$$$
// $$$$ $$$$$$$$$s      `S$$$$$$$$$$$$$$$$$$$$$$$$$$$$$'     $$$$$$$$$$$$$ $$$$
// $$$$ $$$$$$$$$$.        `S$$$$$$$$$$$$$$$$$$$$$$$$'       $$$$$$$$$$$$$ $$$$
// $$$$ $$$$$$$$$$$.          `4$$$$$$$$$$$$$$$$$$$$'        $$$$$$$$$$$$$ $$$$
// $$$$ $$$$$$$$$$$$.           `4$$$$$$$$$$$$$$$$$'         $$$$$$$$$$$$$ $$$$
// $$$$ $$$$$$$$$$$$$s            `$$$$$$$$$$$$$$$'         .$$$$$$$$$$$$$ $$$$
// $$$$ $$$$$$$$$$$$$$$.            4$$$$$$$$$$$$'          s$$$$$$$$$$$$$ $$$$
// $$$$ $$$$$$$$$$$$$$$$.            `$$$$$$$$$$'           4$$$$$$$$$$$$$ $$$$
// $$$$ $$$$$$$$$$$$$$$$Ss.            `$$$$$$$'           s$$$$$$$$$$$$$$ $$$$
// $$$$ $$$$$$$$$$$$$$$$$$Ss.            4$$$$!           .4$$$$$$$$$$$$$$ $$$$
// $$$$ $$$$$$$$$$$$$$$$$$$$Ss.           `$$$$          .$$$$$$$$$$$$$$$$ $$$$
// $$$$ $$$$$$$$$$$$$$$$$$$$$$$$Ss.         $$$         .$$$$$$$$$$$$$$$$$ $$$$
// $$$$ $$$$$$$$$$$$$$$$$$$$$$$$$$$Ss.       $$        .$$$$$$$$$$$$$$$$$$ $$$$
// $$$$ $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$Ss    V       .$$$$$$$$$$$$$$$$$$$ $$$$
// $$$$ $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$Ss        .s$$$$$$$$$$$$$$$$$$$$ $$$$
// $$$$ $$$$$$$$$$$$$$$$$$$$$$$$$'                   s$$$$$$$$$$$$$$$$$$$$ $$$$
// $$$$ $$$$$$$$$$$$$$$$$$$$$$'                       $$$$$$$$$$$$$$$$$$$$ $$$$
// $$$$ $$$$$$$$$$$$$$$$$$$$'  .sS$Ss.                 $$$$$$$$$$$$$$$$$$$ $$$$
// $$$$ $$$$$$$$$$$$$$$$$$$'   $$$$$$$                  $$$$$$$$$$$$$$$$$$ $$$$
// $$$$ $$$$$$$$$$$$$$$$$$'    `s$j$s'                  V$$$$$$$$$$$$$$$$$ $$$$
// $$$$ $$$$$$$$$$$$$$$$$'                              `$$$$$$$$$$$$$$$$$ $$$$
// $$$$ $$$$$$$$$$$$$$$$$                                $$$$$$$$$$$$$$$$$ $$$$
// $$$$ $$$$$$$$$$$$$$$$$$.                              $$$$$$$$$$$$$$$$$ $$$$
// $$$$ $$$$$$$$$$$$$$$$$$$.                            .$$$$$$$$$$$$$$$$$ $$$$
// $$$$ $$$$$$$$$$$$$$$$$$$$.                           $$$$$$$$$$$$$$$$$$ $$$$
// $$$$ $$$$$$$$$$$$$$$$$$$$$$s.                        $$$$$$$$$$$$$$$$$$ $$$$
// $$$$ $$$$$$$$$$$$$$$$$$$$$$$$Ss.                    .$$$$$$$$$$$$$$$$$$ $$$$
// $$$$ $$$$$$$$$$$$$$$$$$$$$$$$$$$$$7                .s$$$$$$$$$$$$$$$$$$ $$$$
// $$$$ $$$$$$$$$$$$$$$$$$$$$$$$j$$$j   .ss7      .sS$$  $$$$$$$$$$$$$$$$$ $$$$
// $$$$ $$$$$$$$$$$$$$$$$$$$$$$$ $$$$ s$$S$$ .sS$$$$$' .4$$$$$$$$$$$$$$$$$ $$$$
// $$$$ $$$$$$$$$$$$$$$$$$$$$$$$  `S$jS'  $$$$j$$$'  .4$$$$$$$$$$$$$$$$$$$ $$$$
// $$$$ S$$$$$$$$$$$$$$$$$$$$$$$          $$S'    .4$$$$$$$$$$$$$$$$$$$$$S $$$$
// $$$$  $$$$$$$$$$$$$$$$$$$$$$$ .sS$$s   $  .sS$$$$$$$$$$$$$$$$$$$$$$$$$  $$$$
// $$$$S. `$$$$$$$$$$$$$$$$$$$$$s$$$$$$$. $$$$$$$$$$$$$$$$$$$$$$$$$$$$$' .S$$$$
// $$$$$$$. `S$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$S' .s$$$$$$
// $$$$$$$$$.                                                        .$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$[dp]$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

const CRM_TOKEN_REQ =
  "https://accounts.zoho.com/oauth/v2/token?client_id=1000.6EJYLGFBLO0250439MEEWBADJFBYZH&grant_type=refresh_token&refresh_token=1000.a7164248454a8c7b7025f372ae66ff68.9e8fde479f3290125e965a744ba7ae0d&client_secret=9563e60145f2f97ee56c97b2a7a7884e0294071413&redirect_url=https://www.zoho.com";

const crm_token = platform.api.post(CRM_TOKEN_REQ).content.access_token;

//#1 Function to check and replace all odd characters
function OddCharacters(textentry) {
  return textentry.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
//#1 End

//#2 Funtion forces global replace all characters
function replaceAll(address, find, replace) {
  return address.replace(new RegExp(find, "g"), replace);
}
//#2 End

//#3 Function to get correct address country
function codeToName(address) {
  switch (address) {
    case "AUT":
      address = "Austria";
      break;
    case "AND":
      address = "Andorra";
      break;
    case "ALB":
      address = "Albania";
      break;
    case "BLR":
      address = "Belarus";
      break;
    case "BEL":
      address = "Belgium";
      break;
    case "BIH":
      address = "Bosnia and Herzegovina";
      break;
    case "BGR":
      address = "Bulgaria";
      break;
    case "HRV":
      address = "Croatia";
      break;
    case "CYP":
      address = "Cyprus";
      break;
    case "CZE":
      address = "Czech Republic";
      break;
    case "DNK":
      address = "Denmark";
      break;
    case "EST":
      address = "Estonia";
      break;
    case "FRO":
      address = "Faroe Islands";
      break;
    case "FIN":
      address = "Finland";
      break;
    case "FRA":
      address = "France";
      break;
    case "DEU":
      address = "Germany";
      break;
    case "GIB":
      address = "Gibralta";
      break;
    case "GRC":
      address = "Greece";
      break;
    case "HUN":
      address = "Hungary";
      break;
    case "ISL":
      address = "Iceland";
      break;
    case "IRL":
      address = "Ireland";
      break;
    case "ITA":
      address = "Italy";
      break;
    case "LVA":
      address = "Latvia";
      break;
    case "LIE":
      address = "Liechenstein";
      break;
    case "LTU":
      address = "Lithuania";
      break;
    case "LUX":
      address = "Luxembourg";
      break;
    case "MKD":
      address = "Macedonia";
      break;
    case "MLT":
      address = "Malta";
      break;
    case "MDA":
      address = "Moldova";
      break;
    case "MCO":
      address = "Monaco";
      break;
    case "NLD":
      address = "Netherlands";
      break;
    case "NOR":
      address = "Norway";
      break;
    case "POL":
      address = "Poland";
      break;
    case "PRT":
      address = "Portugal";
      break;
    case "ROU":
      address = "Romania";
      break;
    case "RUS":
      address = "Russia";
      break;
    case "SMR":
      address = "San Marino";
      break;
    case "SBR":
      address = "Serbia";
      break;
    case "SVK":
      address = "Slovakia";
      break;
    case "SVN":
      address = "Slovenia";
      break;
    case "ESP":
      address = "Spain";
      break;
    case "SWE":
      address = "Sweden";
      break;
    case "CHE":
      address = "Switzerland";
      break;
    case "UKR":
      address = "Ukraine";
      break;
    case "GBR":
      address = "United Kingdom";
      break;
    case "VAT":
      address = "Vatican City";
      break;
    case "RSB":
      address = "Yugoslavia";
      break;
    case "IMN":
      address = "Isle of Man";
      break;
    case "XKX":
      address = "Kosovo";
      break;
    case "MNE":
      address = "Montenegro";
      break;
    default:
      address = address;
  }

  return address;
}
//#3 End

//#4 Function to check if Dover Ferry Required
function fxDoverFerry(Lat, Long) {
  if (Lat < 59 && Lat > 49 && Long > -10.79 && Long < 1.76) {
    return true;
  } else {
    return false;
  }
}
//#4 End

//#6 function to Calculate total transport cost
function transportCosts(
  Distance,
  Volume,
  Dover,
  AltFerry,
  StorageWeeks,
  UpperFloorCollection,
  UpperFloorDelivery,
  WeekendCollection,
  WeekendDelivery,
  vanNumber,
  intDistanceStorage,
  intDistToStore,
  intDistFromStore,
  intFixedDelStore,
  intFixedColStore,
  NoVans,
  fixedcubic,
  NoofFloorsC,
  LiftAvailable,
  NoofFloorsD
) {
  var AltFerry20 = AltFerry;

  // Fixed Variable
  var fixedDoverFerry = 120.0;
  var fixedExchangeRate = 1.14;
  var fixedUpperFloorCost = 105.0;
  var fixedUpperFloorEachCost = 20.0;
  var fixedUpperFloorEachWithLiftCost = 10.0;
  var fixedStorageMargin = 30.0;
  var fixedOptionsMargin = 30.0;
  var fixedMinimumNettSell = 535.0;
  var fixedMinimumNettSellPLFF = 300.0;
  var fixedMinimumNettSellPLSF = 400.0;
  var fixedMinimumNettSellPLSTD = 500.0;
  var fixedStorageTransportMinFeeUK = 150.0; //GBP
  var fixedStorageTransportMaxFeeUK = 500.0; //GBP
  var fixedStorageTransportMargin = 30.0;
  var fixedFullVanSize = 20.0;

  // Fixed Part Load (On Full Load % Increase)
  var fixedIncreasePLFF = 10.0;
  var fixedIncreasePLSF = 20.0;
  var fixedIncreasePLSTD = 30.0;
  var fixedMinimumCostRevisedMargin = 20.0;

  // Fixed Minium Transport Data
  var fixedMinumTransportFee20 = 400.0;
  var fixedMinumTransportFee3 = 200.0;
  var fixedMinumTransportMargin = 25.0;
  var fixedMinumTransportMarginAtMinCost20 = 30.0;
  var fixedMinumTransportMarginAtMinCost15 = 32.5;
  var fixedMinumTransportMarginAtMinCost10 = 35.0;
  var fixedMinumTransportMarginAtMinCost5 = 37.5;

  // Fixed Km Costs
  var fixedCostPerKM20 = 0.45;
  var fixedCostPerKM15 = 0.3375;
  var fixedCostPerKM10 = 0.225;
  var fixedCostPerKM5 = 0.1125;

  // Fixed Load N Go Costs
  var fixedLoadNGoFee20 = -50.0;
  var fixedLoadNGoFee15 = -40.0;
  var fixedLoadNGoFee10 = -30.0;
  var fixedLoadNGoFee5 = -20.0;
  var fixedLoadNGoFee4 = -17.5;
  var fixedLoadNGoFee3 = -15.0;

  // Fixed UK Transport Costs
  var fixedMinCost20 = 150.0;
  var fixedMinCost3 = 80.0;
  var fixedMaxCost20 = 500.0;
  var fixedMaxCost3 = 300.0;
  var fixedMinDist = 80;
  var fixedMaxDist = 630;

  // Fixed Multi Van Margins
  var fixedMultiVanMargin4 = 30.0;
  var fixedMultiVanMargin3 = 27.5;
  var fixedMultiVanDiscount = 10.0;

  // Variables declared - Costs
  var setTransportCostEasyMoves = 0.0;
  var setTransportCostLoadNGo = 0.0;
  var setTransportCostEasyMoves20 = 0.0;
  var setTransportCostLoadNGo20 = 0.0;
  var setTransportCostTransToStorageEU = 0.0;
  var setTransportCostTransFromStorageEU = 0.0;
  var setTransportCostTransToStorageUK = 0.0;
  var setTransportCostTransFromStorageUK = 0.0;
  var setTransportCostMinimum = 0.0;
  var setTransportCostMinimum20 = 0.0;
  var setTotalOptionsCosts = 0.0;
  var setUpperFloorCollectionCost = 0.0;
  var setUpperFloorDeliveryCost = 0.0;
  var doverferrycost = 0.0;
  var doverferrycost20 = 0.0;

  // Variables declared - Costs for Ireland
  var setIrelandToUK = 500.0;
  var setUKtoIreland = 900.0;
  var setIrelandToUK20 = setIrelandToUK;
  var setUKtoIreland20 = setUKtoIreland;
  var setIrelandToUK3m = 200.0;
  var setUKtoIreland3m = 400.0;
  var fixedMarginIreland20 = 30.0;
  var fixedMarginIreland15 = 32.5;
  var fixedMarginIreland10 = 35.0;
  var fixedMarginIreland5 = 37.5;
  var setMarginIreland = 0.0;
  var setMarginIreland20 = 0.0;

  // Variables declared - Calcs
  var setArrCaluclusEZM = [];
  var setArrCaluclusEZM20 = [];
  var setAddCalculusTransForStorageUK = [];

  // Variables declared - Margins
  var setTransportMarginEZM = 0.0;
  var setTransportMarginEZM20 = 0.0;
  var setTransportMarginTransForStorageUK = 0.0;

  // Variables declared - Selling Prices
  var setNetSellEasyMoves = 0.0;
  var setNetSellEasyMovesPLFF = 0.0;
  var setNetSellEasyMovesPLSF = 0.0;
  var setNetSellEasyMovesPLSTD = 0.0;
  var setNetSellLoadNGo = 0.0;

  // Variables declared and set
  var setNoVans = NoVans;
  var dynCostPerKM = fixedCostPerKM20;
  var dynLoadNGoFee = fixedLoadNGoFee20;
  var dynCostPerKM20 = fixedCostPerKM20;
  var dynLoadNGoFee20 = fixedLoadNGoFee20;

  var setVolumeCalc = Volume / fixedFullVanSize;
  //test of new Function - Nikita 06 05 2019
  var setVolumeCalcUpper = VolumeUpper / fixedFullVanSize;
  //end

  var intOptionsMargin = fixedOptionsMargin;

  var setFerryFees = AltFerry;
  var setFerryFees20 = AltFerry20;
  var setfixedcubic = fixedcubic;
  var setfixedcubic20 = fixedcubic;

  // Set Exchange Rate throughout code;
  CurrencyUsedValue = fixedExchangeRate;

  // Set GBP fees to Euros
  fixedStorageTransportMinFeeUK =
    fixedStorageTransportMinFeeUK * fixedExchangeRate;
  fixedStorageTransportMaxFeeUK =
    fixedStorageTransportMaxFeeUK * fixedExchangeRate;

  //Set volume of 1 van to max 20
  var newVolume = Volume;
  var newVolume20 = fixedFullVanSize;

  if (Volume > fixedFullVanSize) {
    newVolume = fixedFullVanSize;
  } else {
    newVolume = Volume;
  }
  if (newVolume < 3) {
    newVolume = 3;
  }

  //set minimum transport cost
  if (newVolume <= 3) {
    setTransportCostMinimum = fixedMinumTransportFee3;
  } else {
    setTransportCostMinimum =
      fixedMinumTransportFee3 +
      ((fixedMinumTransportFee20 - fixedMinumTransportFee3) / 17) *
        (newVolume - 3);
  }
  if (setTransportCostMinimum <= fixedMinumTransportFee3) {
    setTransportCostMinimum = fixedMinumTransportFee3;
  }

  setTransportCostMinimum20 = fixedMinumTransportFee20;

  // Calculate UK Costs using UK Formula
  var setDistanceToStore = intDistToStore;
  var setDistanceFromStore = intDistFromStore;

  if (setDistanceToStore <= 80) {
    setDistanceToStore = 80;
  }
  if (setDistanceToStore >= 630) {
    setDistanceToStore = 630;
  }
  if (setDistanceFromStore <= 80) {
    setDistanceFromStore = 80;
  }
  if (setDistanceFromStore >= 630) {
    setDistanceFromStore = 630;
  }

  var setDistanceToStoreRatio =
    (setDistanceToStore - fixedMinDist) / (fixedMaxDist - fixedMinDist);
  var setDistanceFromStoreRatio =
    (setDistanceFromStore - fixedMinDist) / (fixedMaxDist - fixedMinDist);

  var setSizeRatio = (newVolume - 3) / (fixedFullVanSize - 3);

  var setCostToStoreRatio20 =
    (fixedMaxCost20 - fixedMinCost20) * setDistanceToStoreRatio +
    fixedMinCost20;
  var setCostFromStoreRatio20 =
    (fixedMaxCost20 - fixedMinCost20) * setDistanceFromStoreRatio +
    fixedMinCost20;
  var setCostToStoreRatio3 =
    (fixedMaxCost3 - fixedMinCost3) * setDistanceToStoreRatio + fixedMinCost3;
  var setCostFromStoreRatio3 =
    (fixedMaxCost3 - fixedMinCost3) * setDistanceFromStoreRatio + fixedMinCost3;

  var setCostToStore =
    (setCostToStoreRatio20 - setCostToStoreRatio3) * setSizeRatio +
    setCostToStoreRatio3;
  var setCostFromStore =
    (setCostFromStoreRatio20 - setCostFromStoreRatio3) * setSizeRatio +
    setCostFromStoreRatio3;

  // Calculate margins using graph formulas
  var fixedJSONCalculusEZM = {
    "20": [
      3.895691921 / Math.pow(10, 34),
      1.079746998 / Math.pow(10, 29),
      1.213124991 / Math.pow(10, 25),
      6.884820278 / Math.pow(10, 22),
      1.889809945 / Math.pow(10, 18),
      9.616326282 / Math.pow(10, 16),
      7.582131191 / Math.pow(10, 12),
      1.74395515 / Math.pow(10, 8),
      1.141676806 / Math.pow(10, 5),
      2.093291146 / Math.pow(10, 3),
      fixedMinumTransportMarginAtMinCost20
    ],
    "15": [
      3.895691921 / Math.pow(10, 34),
      1.079746998 / Math.pow(10, 29),
      1.213124991 / Math.pow(10, 25),
      6.884820278 / Math.pow(10, 22),
      1.889809945 / Math.pow(10, 18),
      9.616326282 / Math.pow(10, 16),
      7.582131191 / Math.pow(10, 12),
      1.74395515 / Math.pow(10, 8),
      1.141676806 / Math.pow(10, 5),
      2.093291146 / Math.pow(10, 3),
      fixedMinumTransportMarginAtMinCost15
    ],
    "10": [
      3.895691921 / Math.pow(10, 34),
      1.079746998 / Math.pow(10, 29),
      1.213124991 / Math.pow(10, 25),
      6.884820278 / Math.pow(10, 22),
      1.889809945 / Math.pow(10, 18),
      9.616326282 / Math.pow(10, 16),
      7.582131191 / Math.pow(10, 12),
      1.74395515 / Math.pow(10, 8),
      1.141676806 / Math.pow(10, 5),
      2.093291146 / Math.pow(10, 3),
      fixedMinumTransportMarginAtMinCost10
    ],
    "5": [
      3.895691921 / Math.pow(10, 34),
      1.079746998 / Math.pow(10, 29),
      1.213124991 / Math.pow(10, 25),
      6.884820278 / Math.pow(10, 22),
      1.889809945 / Math.pow(10, 18),
      9.616326282 / Math.pow(10, 16),
      7.582131191 / Math.pow(10, 12),
      1.74395515 / Math.pow(10, 8),
      1.141676806 / Math.pow(10, 5),
      2.093291146 / Math.pow(10, 3),
      fixedMinumTransportMarginAtMinCost5
    ]
  };

  var dynJSONCalculusEZM = {
    "20":
      0 -
      fixedJSONCalculusEZM["20"][0] * Math.pow(Distance, 10) +
      fixedJSONCalculusEZM["20"][1] * Math.pow(Distance, 9) -
      fixedJSONCalculusEZM["20"][2] * Math.pow(Distance, 8) +
      fixedJSONCalculusEZM["20"][3] * Math.pow(Distance, 7) -
      fixedJSONCalculusEZM["20"][4] * Math.pow(Distance, 6) +
      fixedJSONCalculusEZM["20"][5] * Math.pow(Distance, 5) +
      fixedJSONCalculusEZM["20"][6] * Math.pow(Distance, 4) -
      fixedJSONCalculusEZM["20"][7] * Math.pow(Distance, 3) +
      fixedJSONCalculusEZM["20"][8] * Math.pow(Distance, 2) -
      fixedJSONCalculusEZM["20"][9] * Distance +
      fixedJSONCalculusEZM["20"][10],
    "15":
      0 -
      fixedJSONCalculusEZM["15"][0] * Math.pow(Distance, 10) +
      fixedJSONCalculusEZM["15"][1] * Math.pow(Distance, 9) -
      fixedJSONCalculusEZM["15"][2] * Math.pow(Distance, 8) +
      fixedJSONCalculusEZM["15"][3] * Math.pow(Distance, 7) -
      fixedJSONCalculusEZM["15"][4] * Math.pow(Distance, 6) +
      fixedJSONCalculusEZM["15"][5] * Math.pow(Distance, 5) +
      fixedJSONCalculusEZM["15"][6] * Math.pow(Distance, 4) -
      fixedJSONCalculusEZM["15"][7] * Math.pow(Distance, 3) +
      fixedJSONCalculusEZM["15"][8] * Math.pow(Distance, 2) -
      fixedJSONCalculusEZM["15"][9] * Distance +
      fixedJSONCalculusEZM["15"][10],
    "10":
      0 -
      fixedJSONCalculusEZM["10"][0] * Math.pow(Distance, 10) +
      fixedJSONCalculusEZM["10"][1] * Math.pow(Distance, 9) -
      fixedJSONCalculusEZM["10"][2] * Math.pow(Distance, 8) +
      fixedJSONCalculusEZM["10"][3] * Math.pow(Distance, 7) -
      fixedJSONCalculusEZM["10"][4] * Math.pow(Distance, 6) +
      fixedJSONCalculusEZM["10"][5] * Math.pow(Distance, 5) +
      fixedJSONCalculusEZM["10"][6] * Math.pow(Distance, 4) -
      fixedJSONCalculusEZM["10"][7] * Math.pow(Distance, 3) +
      fixedJSONCalculusEZM["10"][8] * Math.pow(Distance, 2) -
      fixedJSONCalculusEZM["10"][9] * Distance +
      fixedJSONCalculusEZM["10"][10],
    "5":
      0 -
      fixedJSONCalculusEZM["5"][0] * Math.pow(Distance, 10) +
      fixedJSONCalculusEZM["5"][1] * Math.pow(Distance, 9) -
      fixedJSONCalculusEZM["5"][2] * Math.pow(Distance, 8) +
      fixedJSONCalculusEZM["5"][3] * Math.pow(Distance, 7) -
      fixedJSONCalculusEZM["5"][4] * Math.pow(Distance, 6) +
      fixedJSONCalculusEZM["5"][5] * Math.pow(Distance, 5) +
      fixedJSONCalculusEZM["5"][6] * Math.pow(Distance, 4) -
      fixedJSONCalculusEZM["5"][7] * Math.pow(Distance, 3) +
      fixedJSONCalculusEZM["5"][8] * Math.pow(Distance, 2) -
      fixedJSONCalculusEZM["5"][9] * Distance +
      fixedJSONCalculusEZM["5"][10]
  };

  //set data based on volume
  if (newVolume <= 5) {
    setArrCaluclusEZM = fixedJSONCalculusEZM["5"];
    dynCostPerKM = fixedCostPerKM5;
    dynLoadNGoFee = fixedLoadNGoFee5;
    if (newVolume == 4) {
      dynLoadNGoFee = fixedLoadNGoFee4;
    }
    if (newVolume <= 3) {
      dynLoadNGoFee = fixedLoadNGoFee3;
    }
  } else if (newVolume <= 10) {
    setArrCaluclusEZM = fixedJSONCalculusEZM["10"];
    dynCostPerKM =
      fixedCostPerKM10 -
      ((fixedCostPerKM10 - fixedCostPerKM5) / 5) * (10 - newVolume);
    dynLoadNGoFee =
      fixedLoadNGoFee10 -
      ((fixedLoadNGoFee10 - fixedLoadNGoFee5) / 5) * (10 - newVolume);
  } else if (newVolume <= 15) {
    setArrCaluclusEZM = fixedJSONCalculusEZM["15"];
    dynCostPerKM =
      fixedCostPerKM15 -
      ((fixedCostPerKM15 - fixedCostPerKM10) / 5) * (15 - newVolume);
    dynLoadNGoFee =
      fixedLoadNGoFee15 -
      ((fixedLoadNGoFee15 - fixedLoadNGoFee10) / 5) * (15 - newVolume);
  } else if (newVolume <= 20) {
    setArrCaluclusEZM = fixedJSONCalculusEZM["20"];
    dynCostPerKM =
      fixedCostPerKM20 -
      ((fixedCostPerKM20 - fixedCostPerKM15) / 5) * (20 - newVolume);
    dynLoadNGoFee =
      fixedLoadNGoFee20 -
      ((fixedLoadNGoFee20 - fixedLoadNGoFee15) / 5) * (20 - newVolume);
  }

  setArrCaluclusEZM20 = fixedJSONCalculusEZM["20"];
  dynCostPerKM20 = fixedCostPerKM20;
  dynLoadNGoFee20 = fixedLoadNGoFee20;

  //set load N Go cost for collection and delivery x2
  dynLoadNGoFee = dynLoadNGoFee * 2;
  intLoadNGo = dynLoadNGoFee;
  dynLoadNGoFee20 = dynLoadNGoFee20 * 2;
  intLoadNGo20 = dynLoadNGoFee20;

  // calculate total ferry costs

  if (Dover === true) {
    doverferrycost = fixedDoverFerry * setVolumeCalc;
    if (doverferrycost < 30) {
      doverferrycost = 30;
    }
    doverferrycost20 = fixedDoverFerry;
  }

  if (setfixedcubic === 0) {
    setFerryFees = setFerryFees * setVolumeCalc;
    AltFerry = setFerryFees * setVolumeCalc;
  } else {
    setFerryFees = setFerryFees;
    AltFerry = setFerryFees;
  }

  setFerryFees20 = setFerryFees20;
  AltFerry20 = setFerryFees20;

  setFerryFees += doverferrycost;
  setFerryFees20 += doverferrycost20;

  // calculate total upper floor costs
  if (UpperFloorDelivery === true) {
    if (LiftAvailable === "Delivery" || LiftAvailable === "Both") {
      if (NoofFloorsD > 0 && NoofFloorsD <= 2) {
        setUpperFloorDeliveryCost += 80 * setVolumeCalcUpper;
      } else if (NoofFloorsD > 2) {
        setUpperFloorDeliveryCost +=
          setVolumeCalcUpper *
          (80 + (NoofFloorsD - 2) * fixedUpperFloorEachWithLiftCost);
      } else {
        setUpperFloorDeliveryCost +=
          (fixedUpperFloorCost / 2) * setVolumeCalcUpper;
      }
    } else {
      if (NoofFloorsD > 0 && NoofFloorsD <= 2) {
        setUpperFloorDeliveryCost += 80 * setVolumeCalcUpper;
      } else if (NoofFloorsD > 2) {
        setUpperFloorDeliveryCost +=
          setVolumeCalcUpper *
          (80 + (NoofFloorsD - 2) * fixedUpperFloorEachCost);
      } else {
        setUpperFloorDeliveryCost +=
          (fixedUpperFloorCost / 2) * setVolumeCalcUpper;
      }
    }
  }
  //SET MINIMUM DELIVERY UPPERFLOOR COST
  if (UpperFloorDelivery === true && setUpperFloorDeliveryCost < 30) {
    setUpperFloorDeliveryCost = 30;
  }
  if (UpperFloorCollection === true) {
    if (LiftAvailable === "Collection" || LiftAvailable === "Both") {
      if (NoofFloorsC > 0 && NoofFloorsC <= 2) {
        setUpperFloorCollectionCost += 80 * setVolumeCalcUpper;
      } else if (NoofFloorsC > 2) {
        setUpperFloorCollectionCost +=
          setVolumeCalcUpper *
          (80 + (NoofFloorsC - 2) * fixedUpperFloorEachWithLiftCost);
      } else {
        setUpperFloorCollectionCost +=
          (fixedUpperFloorCost / 2) * setVolumeCalcUpper;
      }
    } else {
      if (NoofFloorsC > 0 && NoofFloorsC <= 2) {
        setUpperFloorCollectionCost += 80 * setVolumeCalcUpper;
      } else if (NoofFloorsC > 2) {
        setUpperFloorCollectionCost +=
          setVolumeCalcUpper *
          (80 + (NoofFloorsC - 2) * fixedUpperFloorEachCost);
      } else {
        setUpperFloorCollectionCost +=
          (fixedUpperFloorCost / 2) * setVolumeCalcUpper;
      }
    }
  }

  //SET MINIMUM COLLECTION UPPERFLOOR COST
  if (UpperFloorCollection === true && setUpperFloorCollectionCost < 30) {
    setUpperFloorCollectionCost = 30;
  }
  // calc margins based on volume
  if (newVolume <= 5) {
    setMarginIreland = fixedMarginIreland5;
    setTransportMarginEZM = dynJSONCalculusEZM["5"];
  } else if (newVolume < 10) {
    setMarginIreland =
      fixedMarginIreland5 +
      ((fixedMarginIreland10 - fixedMarginIreland5) / 5) * (newVolume - 5);
    setTransportMarginEZM =
      dynJSONCalculusEZM["5"] +
      ((dynJSONCalculusEZM["10"] - dynJSONCalculusEZM["5"]) / 5) *
        (newVolume - 5);
  } else if (newVolume == 10) {
    setMarginIreland = fixedMarginIreland10;
    setTransportMarginEZM = dynJSONCalculusEZM["10"];
  } else if (newVolume < 15) {
    setMarginIreland =
      fixedMarginIreland10 +
      ((fixedMarginIreland15 - fixedMarginIreland10) / 5) * (newVolume - 10);
    setTransportMarginEZM =
      dynJSONCalculusEZM["10"] +
      ((dynJSONCalculusEZM["15"] - dynJSONCalculusEZM["10"]) / 5) *
        (newVolume - 10);
  } else if (newVolume == 15) {
    setMarginIreland = fixedMarginIreland15;
    setTransportMarginEZM = dynJSONCalculusEZM["15"];
  } else if (newVolume < 20) {
    setMarginIreland =
      fixedMarginIreland15 +
      ((fixedMarginIreland20 - fixedMarginIreland15) / 5) * (newVolume - 15);
    setTransportMarginEZM =
      dynJSONCalculusEZM["15"] +
      ((dynJSONCalculusEZM["20"] - dynJSONCalculusEZM["15"]) / 5) *
        (newVolume - 15);
  } else if (newVolume == 20) {
    setMarginIreland = fixedMarginIreland20;
    setTransportMarginEZM = dynJSONCalculusEZM["20"];
  }
  setMarginIreland20 = fixedMarginIreland20;
  setTransportMarginEZM20 = dynJSONCalculusEZM["20"];

  // calculate total costs
  setTransportCostEasyMoves =
    Distance * dynCostPerKM + dynLoadNGoFee * -1 + setFerryFees;
  setTransportCostLoadNGo = Distance * dynCostPerKM + setFerryFees;
  setTransportCostTransToStorageEU =
    intDistToStore * dynCostPerKM + dynLoadNGoFee * -1 + setFerryFees;
  setTransportCostTransFromStorageEU =
    intDistFromStore * dynCostPerKM + dynLoadNGoFee * -1 + setFerryFees;
  setTransportCostTransToStorageUK = setCostToStore;
  setTransportCostTransFromStorageUK = setCostFromStore;

  setTransportCostEasyMoves20 =
    Distance * dynCostPerKM20 + dynLoadNGoFee20 * -1 + setFerryFees20;
  setTransportCostLoadNGo20 = Distance * dynCostPerKM20 + setFerryFees20;

  // set total costs if below min cost
  if (setTransportCostEasyMoves < setTransportCostMinimum) {
    setTransportCostEasyMoves = setTransportCostMinimum;
  }
  if (setTransportCostLoadNGo < setTransportCostMinimum) {
    setTransportCostLoadNGo = setTransportCostMinimum;
  }
  if (setTransportCostTransToStorageEU < setTransportCostMinimum) {
    setTransportCostTransToStorageEU = setTransportCostMinimum;
  }
  if (setTransportCostTransFromStorageEU < setTransportCostMinimum) {
    setTransportCostTransFromStorageEU = setTransportCostMinimum;
  }
  if (setTransportCostTransToStorageUK < fixedStorageTransportMinFeeUK) {
    setTransportCostTransToStorageUK = fixedStorageTransportMinFeeUK;
  }
  if (setTransportCostTransToStorageUK > fixedStorageTransportMaxFeeUK) {
    setTransportCostTransToStorageUK = fixedStorageTransportMaxFeeUK;
  }
  if (setTransportCostTransFromStorageUK < fixedStorageTransportMinFeeUK) {
    setTransportCostTransFromStorageUK = fixedStorageTransportMinFeeUK;
  }
  if (setTransportCostTransFromStorageUK > fixedStorageTransportMaxFeeUK) {
    setTransportCostTransFromStorageUK = fixedStorageTransportMaxFeeUK;
  }
  if (intFixedDelStore > 0) {
    setTransportCostTransFromStorageUK = intFixedDelStore;
  }
  if (intFixedColStore > 0) {
    setTransportCostTransToStorageUK = intFixedColStore;
  }
  if (setTransportCostEasyMoves20 < setTransportCostMinimum20) {
    setTransportCostEasyMoves20 = setTransportCostMinimum20;
  }

  // calculate set margins for multivans new way
  var setCostOfAllVans = 0;
  var setVan1Margin = 0;
  var setVan1Margin20 = 0;
  var setVan2Margin = 0;
  var setVan3Margin = 0;
  var setVan1Sell = 0;
  var setVan1Sell20 = 0;
  var setVan2Sell = 0;
  var setVan3Sell = 0;
  var setCalcVan2Sell = 0;
  var setCalcVan3Sell = 0;
  var setVan2TotalSell = 0;
  var setVan3TotalSell = 0;

  setCostOfAllVans = setTransportCostEasyMoves * setNoVans;

  if (setNoVans >= 1) {
    if (setTransportMarginEZM < fixedMinumTransportMargin) {
      setTransportMarginEZM = fixedMinumTransportMargin;
      setVan1Margin = setTransportMarginEZM;
    } else {
      setVan1Margin = setTransportMarginEZM;
    }
    setVan1Sell = setTransportCostEasyMoves / ((100 - setVan1Margin) / 100);
  }

  if (setTransportMarginEZM20 < fixedMinumTransportMargin) {
    setTransportMarginEZM20 = fixedMinumTransportMargin;
    setVan1Margin20 = setTransportMarginEZM20;
  } else {
    setVan1Margin20 = setTransportMarginEZM20;
  }
  setVan1Sell20 = setTransportCostEasyMoves20 / ((100 - setVan1Margin20) / 100);

  // set margins
  var marginEZM = (100 - setTransportMarginEZM) / 100;
  var marginTransForStorageUK = (100 - fixedStorageTransportMargin) / 100;

  var marginEZM20 = (100 - setTransportMarginEZM20) / 100;

  // calculate nett selling prices
  var setTransNetSellEasyMoves = (
    setTransportCostEasyMoves / marginEZM
  ).toFixed(2);
  var setTransNetSellLoadNGo = (setTransportCostLoadNGo / marginEZM).toFixed(2);
  var setTransNetSellTransToStorageEU = (
    setTransportCostTransToStorageEU / marginEZM
  ).toFixed(2);
  var setTransNetSellTransFromStorageEU = (
    setTransportCostTransFromStorageEU / marginEZM
  ).toFixed(2);
  var setTransNetSellTransToStorageUK = (
    setTransportCostTransToStorageUK / marginTransForStorageUK
  ).toFixed(2);
  var setTransNetSellTransFromStorageUK = (
    setTransportCostTransFromStorageUK / marginTransForStorageUK
  ).toFixed(2);

  var setTransNetSellEasyMoves20 = (
    setTransportCostEasyMoves20 / marginEZM20
  ).toFixed(2);

  //Added on 11-06-18 to allow a discount from the list price for all additional vans.

  // calculate nett option selling prices
  var setNetOptions =
    (setUpperFloorCollectionCost + setUpperFloorDeliveryCost) /
    ((100 - fixedOptionsMargin) / 100);
  var setNetUpperFloorCollectionOptions =
    setUpperFloorCollectionCost / ((100 - fixedOptionsMargin) / 100);
  var setNetUpperFloorDeliveryOptions =
    setUpperFloorDeliveryCost / ((100 - fixedOptionsMargin) / 100);
  var setOptionsCosts = setUpperFloorCollectionCost + setUpperFloorDeliveryCost;

  if (verifyDeliveryCountry === "United Kingdom") {
  }

  // Check for Ireland and price accordingly
  if (newVolume <= 3) {
    setUKtoIreland = setUKtoIreland3m;
    setIrelandToUK = setIrelandToUK3m;
  }
  if (newVolume > 3) {
    setUKtoIreland =
      ((setUKtoIreland - setUKtoIreland3m) / 17) * (newVolume - 3) +
      setUKtoIreland3m;
    setIrelandToUK =
      ((setIrelandToUK - setIrelandToUK3m) / 17) * (newVolume - 3) +
      setIrelandToUK3m;
  }

  if (verifyDeliveryCountry === "Ireland") {
    if (verifyCollectionCountry === "United Kingdom") {
      marginEZM = (100 - setMarginIreland) / 100;
      setTransNetSellEasyMoves = setUKtoIreland / marginEZM;
      setTransNetSellLoadNGo = setTransNetSellEasyMoves;
      setTransportCostEasyMoves = setUKtoIreland;
      setTransportCostLoadNGo = setTransportCostEasyMoves;

      marginEZM20 = (100 - setMarginIreland20) / 100;
      setTransNetSellEasyMoves20 = setUKtoIreland20 / marginEZM20;
      setTransportCostEasyMoves20 = setUKtoIreland20;
    }
  }

  if (verifyDeliveryCountry === "United Kingdom") {
    if (verifyCollectionCountry === "Ireland") {
      marginEZM = (100 - setMarginIreland) / 100;
      setTransNetSellEasyMoves = setIrelandToUK / marginEZM;
      setTransNetSellLoadNGo = setTransNetSellEasyMoves;
      setTransportCostEasyMoves = setIrelandToUK;
      setTransportCostLoadNGo = setTransportCostEasyMoves;

      marginEZM20 = (100 - setMarginIreland20) / 100;
      setTransNetSellEasyMoves20 = setIrelandToUK20 / marginEZM20;
      setTransportCostEasyMoves20 = setIrelandToUK20;
    }
  }

  //Northern Ireland
  if (Delivery_Longitutde > -8.25861) {
    if (Delivery_Longitutde < -5.32526) {
      if (Delivery_Latitude > 53.881183) {
        if (Delivery_Latitude < 55.369269) {
          if (verifyCollectionCountry === "United Kingdom") {
            marginEZM = (100 - setMarginIreland) / 100;
            setTransNetSellEasyMoves = setUKtoIreland / marginEZM;
            setTransNetSellLoadNGo = setTransNetSellEasyMoves;
            setTransportCostEasyMoves = setUKtoIreland;
            setTransportCostLoadNGo = setTransportCostEasyMoves;

            marginEZM20 = (100 - setMarginIreland20) / 100;
            setTransNetSellEasyMoves20 = setUKtoIreland20 / marginEZM20;
            setTransportCostEasyMoves20 = setUKtoIreland20;
          }
        }
      }
    }
  }

  if (verifyDeliveryCountry === "United Kingdom") {
    if (Collection_Longitutde > -8.25861) {
      if (Collection_Longitutde < -5.32526) {
        if (Collection_Latitude > 53.881183) {
          if (Collection_Latitude < 55.369269) {
            marginEZM = (100 - setMarginIreland) / 100;
            setTransNetSellEasyMoves = setIrelandToUK / marginEZM;
            setTransNetSellLoadNGo = setTransNetSellEasyMoves;
            setTransportCostEasyMoves = setIrelandToUK;
            setTransportCostLoadNGo = setTransportCostEasyMoves;

            marginEZM20 = (100 - setMarginIreland20) / 100;
            setTransNetSellEasyMoves20 = setIrelandToUK20 / marginEZM20;
            setTransportCostEasyMoves20 = setIrelandToUK20;
          }
        }
      }
    }
  }

  // New Part Load System - FF, SF, STD

  var setTransNetSellEasyMovesFF = 0;
  var setTransNetSellEasyMovesSF = 0;
  var setTransNetSellEasyMovesSTD = 0;
  var setTransportCostEasyMovesPLFF = 0;
  var setTransportCostEasyMovesPLSF = 0;
  var setTransportCostEasyMovesPLSTD = 0;
  var marginEZMPLFF = 0;
  var marginEZMPLSF = 0;
  var marginEZMPLSTD = 0;

  if (Volume < 20) {
    setTransNetSellEasyMovesFF =
      ((setTransNetSellEasyMoves20 * ((100 + fixedIncreasePLFF) / 100)) /
        fixedFullVanSize) *
      Volume;
    setTransNetSellEasyMovesSF =
      ((setTransNetSellEasyMoves20 * ((100 + fixedIncreasePLSF) / 100)) /
        fixedFullVanSize) *
      Volume;
    setTransNetSellEasyMovesSTD =
      ((setTransNetSellEasyMoves20 * ((100 + fixedIncreasePLSTD) / 100)) /
        fixedFullVanSize) *
      Volume;
    if (setTransNetSellEasyMovesFF < fixedMinimumNettSellPLFF) {
      setTransNetSellEasyMovesFF = fixedMinimumNettSellPLFF;
    }
    if (setTransNetSellEasyMovesSF < fixedMinimumNettSellPLSF) {
      setTransNetSellEasyMovesSF = fixedMinimumNettSellPLSF;
    }
    if (setTransNetSellEasyMovesSTD < fixedMinimumNettSellPLSTD) {
      setTransNetSellEasyMovesSTD = fixedMinimumNettSellPLSTD;
    }

    //Force cost to be no less than the minimum fixed revised margin.  This basically overwrites the cost so the margin for each part load option is no less than the minimum.
    setTransportCostEasyMovesPLFF = setTransportCostEasyMoves;
    setTransportCostEasyMovesPLSF = setTransportCostEasyMoves;
    setTransportCostEasyMovesPLSTD = setTransportCostEasyMoves;
    marginEZMPLFF =
      100 - (setTransportCostEasyMoves / setTransNetSellEasyMovesFF) * 100;
    marginEZMPLSF =
      100 - (setTransportCostEasyMoves / setTransNetSellEasyMovesSF) * 100;
    marginEZMPLSTD =
      100 - (setTransportCostEasyMoves / setTransNetSellEasyMovesSTD) * 100;

    if (marginEZMPLFF < fixedMinimumCostRevisedMargin) {
      marginEZMPLFF = fixedMinimumCostRevisedMargin;
      setTransportCostEasyMovesPLFF =
        setTransNetSellEasyMovesFF * ((100 - marginEZMPLFF) / 100);
    }
    if (marginEZMPLSF < fixedMinimumCostRevisedMargin) {
      marginEZMPLSF = fixedMinimumCostRevisedMargin;
      setTransportCostEasyMovesPLSF =
        setTransNetSellEasyMovesSF * ((100 - marginEZMPLSF) / 100);
    }
    if (marginEZMPLSTD < fixedMinimumCostRevisedMargin) {
      marginEZMPLSTD = fixedMinimumCostRevisedMargin;
      setTransportCostEasyMovesPLSTD =
        setTransNetSellEasyMovesSTD * ((100 - marginEZMPLSTD) / 100);
    }
  }

  //fixedMultiVanDiscount

  if (vanNumber >= 1) {
    setTransNetSellEasyMoves =
      setTransNetSellEasyMoves * ((100 - fixedMultiVanDiscount) / 100);
    setTransNetSellLoadNGo =
      setTransNetSellLoadNGo * ((100 - fixedMultiVanDiscount) / 100);
    setTransNetSellTransToStorageEU =
      setTransNetSellTransToStorageEU * ((100 - fixedMultiVanDiscount) / 100);
    setTransNetSellTransFromStorageEU =
      setTransNetSellTransFromStorageEU * ((100 - fixedMultiVanDiscount) / 100);
    setTransNetSellTransToStorageUK =
      setTransNetSellTransToStorageUK * ((100 - fixedMultiVanDiscount) / 100);
    setTransNetSellTransFromStorageUK =
      setTransNetSellTransFromStorageUK * ((100 - fixedMultiVanDiscount) / 100);
  }

  return {
    LoadNGo: setTransNetSellLoadNGo,
    "LoadNGo wFees": setTransNetSellLoadNGo / 0.9, // * 1.2,
    EasyMoves: setTransNetSellEasyMoves,
    "EasyMoves wFees": setTransNetSellEasyMoves / 0.9, // * 1.2,
    OptionsCosts: setOptionsCosts.toFixed(2),
    transportCostsEZM: setTransportCostEasyMoves.toFixed(2),
    transportCostsLNG: setTransportCostLoadNGo.toFixed(2),
    transportProfitEZM: (
      setTransNetSellEasyMoves +
      setNetOptions -
      setTransportCostEasyMoves
    ).toFixed(2),
    transportProfitLNG: (
      setTransNetSellLoadNGo +
      setNetOptions -
      setTransportCostLoadNGo
    ).toFixed(2),
    MarginEZM: setTransportMarginEZM + " (" + marginEZM + ")",
    "Storage Fee": 1 / 0.9,
    "Options Fee": setNetOptions,
    dOVEER: Dover,
    Distance: Distance,
    "Ferry Fees": setFerryFees,
    CostperKM: dynCostPerKM,
    "Upper Floor Collection Option": setNetUpperFloorCollectionOptions / 0.9,
    "Upper Floor Delivery Option": setNetUpperFloorDeliveryOptions / 0.9,
    "Weekend Collection Option": 1 / 0.9,
    "Weekend Delivery Option": 1 / 0.9,
    "Upper Floor Collection Cost": setUpperFloorCollectionCost,
    "Upper Floor Delivery Cost": setUpperFloorDeliveryCost,
    "Weekend Collection Cost": 1,
    "Weekend Delivery Cost": 1,
    TransStorage: 1,
    "TransStorage wFees": 1 / 0.9, // * 1.2,
    transportCostsTransStorage: 1,
    transportProfitTransStorage: 1 - 1,
    TransToStorageEU: setTransNetSellTransToStorageEU,
    "TransToStorageEU wFees": setTransNetSellTransToStorageEU / 0.9, // * 1.2,
    transportCostsTransToStorageEU: setTransportCostTransToStorageEU.toFixed(2),
    transportProfitTransToStorageEU: (
      setTransNetSellTransToStorageEU - setTransportCostTransToStorageEU
    ).toFixed(2),
    TransFromStorageEU: setTransNetSellTransFromStorageEU,
    "TransFromStorageEU wFees": setTransNetSellTransFromStorageEU / 0.9, // * 1.2,
    transportCostsTransFromStorageEU: setTransportCostTransFromStorageEU.toFixed(
      2
    ),
    transportProfitTransFromStorageEU: (
      setTransNetSellTransFromStorageEU - setTransportCostTransFromStorageEU
    ).toFixed(2),
    TransToStorageUK: setTransNetSellTransToStorageUK,
    "TransToStorageUK wFees": setTransNetSellTransToStorageUK / 0.9, // * 1.2,
    transportCostsTransToStorageUK: setTransportCostTransToStorageUK.toFixed(2),
    transportProfitTransToStorageUK: (
      setTransNetSellTransToStorageUK - setTransportCostTransToStorageUK
    ).toFixed(2),
    TransFromStorageUK: setTransNetSellTransFromStorageUK,
    "TransFromStorageUK wFees": setTransNetSellTransFromStorageUK / 0.9, // * 1.2,
    transportCostsTransFromStorageUK: setTransportCostTransFromStorageUK,
    transportProfitTransFromStorageUK: (
      setTransNetSellTransFromStorageUK - setTransportCostTransFromStorageUK
    ).toFixed(2),
    test1: setTransNetSellTransToStorageUK,
    test2: setTransportCostTransToStorageUK.toFixed(2),
    test3: "0",
    test4: "0",
    test5: intDistToStore,
    test6: dynCostPerKM,
    test7: "0",
    vanNumber: vanNumber,
    doverferrycost: doverferrycost,
    AltFerry: AltFerry,
    dynLoadNGoFee: dynLoadNGoFee,
    PLFF: setTransNetSellEasyMovesFF,
    PLSF: setTransNetSellEasyMovesSF,
    PLSTD: setTransNetSellEasyMovesSTD,
    CostPLFF: setTransportCostEasyMovesPLFF,
    CostPLSF: setTransportCostEasyMovesPLSF,
    CostPLSTD: setTransportCostEasyMovesPLSTD,
    MarginPLFF: marginEZMPLFF,
    MarginPLSF: marginEZMPLSF,
    MarginPLSTD: marginEZMPLSTD
  };
}
//#6 End

//#7 Start Of Main Code - Checks Done

var params,
  required,
  ContactID,
  Template,
  EmailTemplate,
  resource,
  result,
  AutoReQuote,
  NiftyEmailTemplate;

var lodash = require("lodash.min.js");

if (event.request.method !== "GET") {
  throw "Only HTTP GET is allowed on this service.";
}

params = event.request.parameters;
//#7 End

//#8 get resource, /math —> "", /math/add —> "add"
resource = event.resource;
if (resource !== "") {
  // check for required params
  required = ["ContactID"];
  lodash._.each(required, function(element) {
    if (!params.hasOwnProperty(element) || !params[element]) {
      throw "Missing '" + element + "' in params\n";
    }
  });
  ContactID = params.ContactID;
  AutoReQuote = params.AutoReQuote;
}
//#8 End

//#9 get values from CRM
var url =
  "https://www.zohoapis.com/crm/v2/Contacts/" +
  params.ContactID;
var ArchiveJSON = platform.api.get(url, {}, {
  "headers": {
    "Authorization": "Zoho-oauthtoken " + crm_token,
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
});

var arrContact = ArchiveJSON.content.data[0]
var tkey;
var tvalue;
var arrVal2 = [];
var arrContent2 = [];
var CRMStatus;
var CRMSystemStatus;
var CurrencyUsedValue = 1;
var intLoadNGo = 15;
var intLoadNGo20 = 15;

//if (arrContact["Origin"]){var Origin = arrContact["Origin"];}else{var Origin = null;}
//if (arrContact["Destination"]){var Destination = arrContact["Destination"];}else{var Destination = null;}

CRMStatus = arrContact.Status;
CRMSystemStatus = arrContact["System_Status"];
var col_addresses_arr = [];
var del_addresses_arr = [];
if (arrContact["Collection_Date_s"]) {
  var CollectionDate = arrContact["Collection_Date_s"];
} else {
  var CollectionDate = null;
}
if (arrContact.Phone) {
  var Phone = arrContact.Phone;
} else {
  var Phone = null;
}
if (arrContact["Territory_Assigned"]) {
  var CountryAssigned = arrContact["Territory_Assigned"];
} else {
  var CountryAssigned = null;
}
if (arrContact.Name) {
  var FirstName = arrContact.Name;
} else {
  var FirstName = null;
}
if (arrContact["Last_Name"]) {
  var LastName = arrContact["Last_Name"];
} else {
  var LastName = null;
}
if (arrContact["Job_Reference"]) {
  var Reference = arrContact["Job_Reference"];
} else {
  var Reference = null;
}
if (arrContact.Email) {
  var Email = arrContact.Email;
} else {
  var Email = null;
}

if (arrContact.Test) {
  var Test = arrContact.Test;
} else {
  var Test = null;
}
if (arrContact["Quote Count"]) {
  var QuoteCount = Number(arrContact["Quote Count"]);
} else {
  var QuoteCount = 0;
}
if (arrContact.Phone) {
  var Phone = arrContact.Phone;
  var dontTrustOtherPhones = arrContact.Phone;
} else {
  var Phone = 0;
  var dontTrustOtherPhones = "45PhoneDoesntexist";
}
if (arrContact["Coll_Address1"]) {
  var cAddress1 = OddCharacters(arrContact["Coll_Address1"]);
  col_addresses_arr.push(cAddress1);
} else {
  cAddress1 = null;
}
if (arrContact["Coll_Address2"]) {
  var cAddress2 = arrContact["Coll_Address2"];
  col_addresses_arr.push(cAddress2);
} else {
  var cAddress2 = null;
}
if (arrContact["Coll_City"]) {
  var cAddress3 = OddCharacters(arrContact["Coll_City"]);
  col_addresses_arr.push(cAddress3);
} else {
  var cAddress3 = null;
}
if (arrContact["Collection_Country"]) {
  var cAddress5 = OddCharacters(arrContact["Collection_Country"]);
  cAddress5 = codeToName(cAddress5);
  col_addresses_arr.push(cAddress5);
} else {
  var cAddress5 = "";
}
if (arrContact["Collection_Postcode"]) {
  var cAddress4 = arrContact["Collection_Postcode"];
  col_addresses_arr.push(cAddress4);
} else {
  var cAddress4 = null;
}
if (arrContact["Del_Address1"]) {
  var dAddress1 = OddCharacters(arrContact["Del_Address1"]);
  del_addresses_arr.push(dAddress1);
} else {
  var dAddress1 = null;
}
if (arrContact["Del_Address2"]) {
  var dAddress2 = OddCharacters(arrContact["Del_Address2"]);
  del_addresses_arr.push(dAddress2);
} else {
  var dAddress2 = null;
}
if (arrContact["Del_City"]) {
  var dAddress3 = OddCharacters(arrContact["Del_City"]);
  del_addresses_arr.push(dAddress3);
} else {
  var dAddress3 = null;
}
if (arrContact["Delivery_Country"]) {
  var dAddress5 = OddCharacters(arrContact["Delivery_Country"]);
  dAddress5 = codeToName(dAddress5);
  del_addresses_arr.push(dAddress5);
} else {
  var dAddress5 = "";
}
if (arrContact["Delivery_Postcode"]) {
  var dAddress4 = OddCharacters(arrContact["Delivery_Postcode"]);
  del_addresses_arr.push(dAddress4);
} else {
  var dAddress4 = null;
}

if (arrContact["Upperfloor Supplement Collection"]) {
  var UpperFloorCollection = Number(
    arrContact["Upperfloor Supplement Collection"]
  );
} else {
  var UpperFloorCollection = 0;
}
if (arrContact["Upperfloor Supplement Delivery"]) {
  var UpperFloorDelivery = Number(arrContact["Upperfloor Supplement Delivery"]);
} else {
  var UpperFloorDelivery = 0;
}
if (arrContact["Free Upperfloor Supplement"]) {
  var FreeUpperFloor = arrContact["Free Upperfloor Supplement"];
} else {
  var FreeUpperFloor = "false";
}
if (arrContact["Extra Storage Cost"]) {
  var ExtraStorageCost = Number(arrContact["Extra Storage Cost"]);
} else {
  var ExtraStorageCost = 0;
}
if (arrContact["Discount (%)"]) {
  var DiscountAdditional = Number(arrContact["Discount (%)"]);
} else {
  var DiscountAdditional = 0;
}
if (arrContact["Force Load N Go"]) {
  var FreeEasyMoves = arrContact["Force Load N Go"];
} else {
  var FreeEasyMoves = null;
}

if (arrContact["Extra Charge"]) {
  var ExtraCharge = Number(arrContact["Extra Charge"]);
} else {
  var ExtraCharge = 0;
}
//Nikita's Extra manpower calculator - 28.11.18
if (arrContact["Extra_Manpower_Collection"]) {
  var ExtraManpowerCollection = Number(arrContact["Extra_Manpower_Collection"]);
} else {
  var ExtraManpowerCollection = 0;
}
if (arrContact["Extra_Manpower_Delivery"]) {
  var ExtraManpowerDelivery = Number(arrContact["Extra_Manpower_Delivery"]);
} else {
  var ExtraManpowerDelivery = 0;
}
//end
// Nikita's Packing service - 21.01.19
if (arrContact["Packing_Service"]) {
  var PackingService = arrContact["Packing_Service"];
} else {
  var PackingService = "false";
}
if (arrContact["Unpacking_Service"]) {
  var UnpackingService = arrContact["Unpacking_Service"];
} else {
  var UnpackingService = "false";
}

if (arrContact["Sent_quotes_IDs"]) {
  var sentQuotes = arrContact["Sent_quotes_IDs"];
} else {
  var sentQuotes = "false";
}
// end
if (arrContact["Send_Email_Quote_do_not_touch"]) {
  var previewEmail = arrContact["Send_Email_Quote_do_not_touch"];
} else {
  var previewEmail = "false";
}
//Nikita's Tail Lift service - 08.05.19
if (arrContact["Tail_Lift"]) {
  var TailLift = arrContact["Tail_Lift"];
} else {
  var TailLift = "false";
}
//end
// Denis' external lift service - 17.06.19
if (arrContact["External_Lift"]) {
  var ExternalLift = arrContact["External_Lift"];
} else {
  var ExternalLift = "false";
}
//end
if (arrContact["Hold_A_Van_In_days1"]) {
  var HoldAVan = Number(arrContact["Hold_A_Van_In_days1"]);
} else {
  HoldAVan = 0;
}
//end
if (arrContact["Your Details"]) {
  var YourDetailsOverride = arrContact["Your Details"];
} else {
  var YourDetailsOverride = "false";
}
if (arrContact["Hide All Extras"]) {
  var HideAllExtras = arrContact["Hide All Extras"];
} else {
  var HideAllExtras = "false";
}
if (arrContact["All Extras Optional"]) {
  var AllExtrasOptional = arrContact["All Extras Optional"];
} else {
  var AllExtrasOptional = "false";
}
if (arrContact["Preview_Quote"]) {
  var PreviewQuote = arrContact["Preview Quote"];
} else {
  var PreviewQuote = "false";
}

if (arrContact["Load_Size_m"]) {
  var LoadSize = Number(arrContact["Load_Size_m"]);
} else {
  var LoadSize = 0;
}
//test of new Function - Nikita 06 05 2019
if (arrContact["Upper_Floor_m3"]) {
  var VolumeUpper = Number(arrContact["Upper_Floor_m3"]);
} else {
  var VolumeUpper = LoadSize;
}
if (arrContact["Owner"]) {
  var ContactOwner = arrContact["Owner"].name;
} else {
  ContactOwner = "Web Sales Team";
}
var CollectionDateZMH = CollectionDate; //Collection date for Zoho Marketing Hub
//end

//#9 End

//#10 handle load size, if the default field is empty try and resolve from the old field
if (LoadSize === 0) {
  if (arrContact["AutoQuote_Template"]) {
    if (arrContact["AutoQuote_Template"] == "1 Van") {
      LoadSize = 20;
    } else if (arrContact["AutoQuote_Template"] == "2 Vans") {
      LoadSize = 40;
    } else if (arrContact["AutoQuote_Template"] == "3 Vans") {
      LoadSize = 60;
    } else if (arrContact["AutoQuote_Template"] == "4 Vans") {
      LoadSize = 80;
    } else if (arrContact["AutoQuote_Template"] == "5 Vans") {
      LoadSize = 100;
    } else {
      var LoadSize = parseInt(arrContact["AutoQuote_Template"]);
    }
  } else {
    LoadSize = 20;
  }
}
var LoadSizeBeforeRound = LoadSize;


//stop part loads combination with full loads over 22m3
var intchecksize = 0;
if (LoadSize > 200) {
  LoadSize = 220;
}
if (intchecksize === 0) {
  if (LoadSize > 180) {
    LoadSize = 200;
    intchecksize = 1;
  }
}
if (intchecksize === 0) {
  if (LoadSize > 160) {
    LoadSize = 180;
    intchecksize = 1;
  }
}
if (intchecksize === 0) {
  if (LoadSize > 140) {
    LoadSize = 160;
    intchecksize = 1;
  }
}
if (intchecksize === 0) {
  if (LoadSize > 120) {
    LoadSize = 140;
    intchecksize = 1;
  }
}
if (intchecksize === 0) {
  if (LoadSize > 100) {
    LoadSize = 120;
    intchecksize = 1;
  }
}
if (intchecksize === 0) {
  if (LoadSize > 80) {
    LoadSize = 100;
    intchecksize = 1;
  }
}
if (intchecksize === 0) {
  if (LoadSize > 60) {
    LoadSize = 80;
    intchecksize = 1;
  }
}
if (intchecksize === 0) {
  if (LoadSize > 40) {
    LoadSize = 60;
    intchecksize = 1;
  }
}
if (intchecksize === 0) {
  if (LoadSize > 22) {
    LoadSize = 40;
    intchecksize = 1;
  }
}

//#10 End
//Nikita's Extra Manpower calculator - 28.11.18
var EMPCollectionCost;
var EMPDeliveryCost;
var EMPCollectionCostUK;
var EMPDeliveryCostUK;

// Collection
if (ExtraManpowerCollection == 1) {
  //1 helpers upon Collection
  EMPCollectionCost = 250;
  EMPCollectionCostUK = 226;
} else if (ExtraManpowerCollection == 2) {
  //2 helpers upon Collection
  EMPCollectionCost = 450;
  EMPCollectionCostUK = 395.5;
} else if (ExtraManpowerCollection == 3) {
  // 3 helpers upon Collection
  EMPCollectionCost = 600;
  EMPCollectionCostUK = 565;
} else {
  EMPCollectionCost = 0;
  EMPCollectionCostUK = 0;
}

// Delivery
if (ExtraManpowerDelivery == 1) {
  //1 helper upon Delivery
  EMPDeliveryCost = 250;
  EMPDeliveryCostUK = 226;
} else if (ExtraManpowerDelivery == 2) {
  //2 helpers upon Delivery
  EMPDeliveryCost = 450;
  EMPDeliveryCostUK = 395.5;
} else if (ExtraManpowerDelivery == 3) {
  // 3 helpers upon Delivery
  EMPDeliveryCost = 600;
  EMPDeliveryCostUK = 565;
} else {
  EMPDeliveryCost = 0;
  EMPDeliveryCostUK = 0;
}

var EMPCost = EMPCollectionCost + EMPDeliveryCost;
var EMPCostUK = EMPCollectionCostUK + EMPDeliveryCostUK;
var EMPCollectionOrDelivery;
if (ExtraManpowerCollection == 0 && ExtraManpowerDelivery != 0) {
  EMPCollectionOrDelivery = "Delivery";
} else if (ExtraManpowerCollection != 0 && ExtraManpowerDelivery == 0) {
  EMPCollectionOrDelivery = "Collection";
} else if (ExtraManpowerCollection != 0 && ExtraManpowerDelivery != 0) {
  EMPCollectionOrDelivery = "Both";
} else {
  EMPCollectionOrDelivery = "NONE";
}
//end
// Nikita's Packing service - 21.01.19
var PackingServiceMultiplier;
if (LoadSize <= 20) {
  PackingServiceMultiplier = 1;
} else if (LoadSize > 20 && LoadSize <= 40) {
  PackingServiceMultiplier = 2;
} else if (LoadSize > 40 && LoadSize <= 60) {
  PackingServiceMultiplier = 3;
}
var PackingPrice;
if (PackingService != "false" && PackingServiceMultiplier == 1) {
  PackingPrice = 1375;
} else if (PackingService != "false" && PackingServiceMultiplier == 2) {
  PackingPrice = 2695;
} else if (PackingService != "false" && PackingServiceMultiplier == 3) {
  PackingPrice = 3850;
} else {
  PackingPrice = 0;
}
var UnpackingServiceMultiplier;

if (LoadSize <= 20) {
  UnpackingServiceMultiplier = 1;
} else if (LoadSize > 20 && LoadSize <= 40) {
  UnpackingServiceMultiplier = 2;
} else if (LoadSize > 40 && LoadSize <= 60) {
  UnpackingServiceMultiplier = 3;
}
var UnpackingPrice;
if (UnpackingService != "false" && UnpackingServiceMultiplier == 1) {
  UnpackingPrice = 1100;
} else if (UnpackingService != "false" && UnpackingServiceMultiplier == 2) {
  UnpackingPrice = 2200;
} else if (UnpackingService != "false" && UnpackingServiceMultiplier == 3) {
  UnpackingPrice = 3300;
} else {
  UnpackingPrice = 0;
}
// end
//Nikita's Tail Lift function - 08 05 19
var TailLiftCheck;
var TailLiftPrice;
if (LoadSize < 20) {
  TailLiftCheck = 0;
} else {
  TailLiftCheck = 1;
}

if (TailLiftCheck == 1 && TailLift != "false") {
  TailLiftPrice = 200;
} else {
  TailLiftPrice = 0;
}
//end

//Denis' external lift service 17 06 2019
var ExternalLiftPrice;

if (ExternalLift != "false") {
  ExternalLiftPrice = 400;
} else {
  ExternalLiftPrice = 0;
}

//end

//Nikita's Hold A Van Service
var HoldAVanPriceForOneDay = 150;
var HoldAVanPrice = 0;
if (HoldAVan != 0) {
  HoldAVanPrice = HoldAVan * HoldAVanPriceForOneDay;
} else {
  HoldAVanPrice = 0;
}
//end
//#11 Storage Weeks
var ServiceT = "Easy Moves";
if (arrContact["Service_Type"]) {
  if (arrContact["Service_Type"] === "") {
  } else {
    ServiceT = arrContact["Service_Type"];
  }
}
if (arrContact["Storage_Weeks1"]) {
  var StorageWeeks = Number(arrContact["Storage_Weeks1"]);
} else {
  var StorageWeeks = 0;
}
if (arrContact["Storage_Weeks1"]) {
  var intStorageWeeks = Number(arrContact["Storage_Weeks1"]);
} else {
  var intStorageWeeks = 0;
}
if (intStorageWeeks <= 0 || intStorageWeeks >= 999) {
  intStorageWeeks = 0;
}

//#11 End

//#12 Upper Floor Service
if (arrContact["Upper_Floor_Service_Required"]) {
  var UpperFloorSelection = arrContact["Upper_Floor_Service_Required"];
} else {
  var UpperFloorSelection = "None";
}
if (arrContact["No_of_Floors"]) {
  var NoofFloorsC = arrContact["No_of_Floors"];
} else {
  var NoofFloorsC = 0;
}
if (arrContact["No_of_Floors_Delivery"]) {
  var NoofFloorsD = arrContact["No_of_Floors_Delivery"];
} else {
  var NoofFloorsD = 0;
}
if (arrContact["Lift_Available2"]) {
  var LiftAvailable = arrContact["Lift_Available2"];
} else {
  var LiftAvailable = "None";
}
//#12 End

//#13 Weekend
if (arrContact["Weekend Service Required"]) {
  var WeekendServiceSelection = arrContact["Weekend Service Required"];
} else {
  var WeekendServiceSelection = "None";
}
//#13 End


YourDetailsOverride = YourDetailsOverride.replace(/\n/g, "<br>");
//#15

var cAddress;
var dAddress;
for (var i = 0; i < col_addresses_arr.length; i++) {
  if (col_addresses_arr[i] != null) {
    cAddress = cAddress + " " + OddCharacters(col_addresses_arr[i]);
  } else {
    cAddress = cAddress;
  }
}
for (var i = 0; i < del_addresses_arr.length; i++) {
  if (del_addresses_arr[i] != null) {
    dAddress = dAddress + " " + OddCharacters(del_addresses_arr[i]);
  } else {
    dAddress = dAddress;
  }
}

cAddress = encodeURI(cAddress);
dAddress = encodeURI(dAddress);
//#16 End

//#17 get distance from google
var distUrl;
var distApi;
var testmate = "ok";

// If storage calculate extra distance to and from FLk storage.  (Dont calc Luxembourg storage as it we will uk FLK storage because LUX is more expensive and the extra distance will allow for it (excluding Ferry cost))
var stanDistanceToStore = 0;
var stanDistanceFromStore = 0;
var distToStore;
var distApiToStore;
var APIStatusToStore;
var distFromStore;
var distApiFromStore;
var APIStatusFromStore;

if (intStorageWeeks > 0) {
  distToStore =
    "https://maps.googleapis.com/maps/api/distancematrix/json?origins=" +
    cAddress +
    "&destinations=Folkestone,UK&key=AIzaSyAA-T91wH9wyuSXHghvjRSMBIZ1X59Ym-8&avoid=tolls";
  distApiToStore = platform.api.get(distToStore);
  //APIStatusToStore;

  if (distApiToStore.content.status == "OK") {
    if (distApiToStore.content.rows[0].elements[0].status == "OK") {
      stanDistanceToStore =
        distApiToStore.content.rows[0].elements[0].distance.value;
      APIStatusToStore = distApiToStore.content.rows[0].elements[0].status;
    }
  } else {
    APIStatusToStore = "";
  }
}

if (intStorageWeeks > 0) {
  distFromStore =
    "https://maps.googleapis.com/maps/api/distancematrix/json?origins=Folkestone,UK&destinations=" +
    dAddress +
    "&key=AIzaSyAA-T91wH9wyuSXHghvjRSMBIZ1X59Ym-8&avoid=tolls";
  distApiFromStore = platform.api.get(distFromStore);
  //APIStatusFromStore;

  if (distApiFromStore.content.status == "OK") {
    if (distApiFromStore.content.rows[0].elements[0].status == "OK") {
      stanDistanceFromStore =
        distApiFromStore.content.rows[0].elements[0].distance.value;
      APIStatusFromStore = distApiFromStore.content.rows[0].elements[0].status;
    }
  } else {
    APIStatusFromStore = "";
  }
}

distUrl =
  "https://maps.googleapis.com/maps/api/distancematrix/json?origins=" +
  cAddress +
  "&destinations=" +
  dAddress +
  "&key=AIzaSyAA-T91wH9wyuSXHghvjRSMBIZ1X59Ym-8&avoid=tolls";
distApi = platform.api.get(distUrl);
var stanOrigin = distApi.content.origin_addresses[0];
var stanDestination = distApi.content.destination_addresses[0];
//"status" : "INVALID_REQUEST"
var stanDistance;
var APIStatus;

if (distApi.content.status == "OK") {
  if (distApi.content.rows[0].elements[0].status == "OK") {
    stanDistance = distApi.content.rows[0].elements[0].distance.value;
    APIStatus = distApi.content.rows[0].elements[0].status;
  }
} else {
  APIStatus = "";
}

testmate =
  testmate +
  " origCadd: " +
  cAddress +
  " origDadd: " +
  dAddress +
  " distapi = " +
  distApi.content.status +
  " - ";

var postCRMURL;
var postXMLDATA;
var crmURL;
var postCRMData;

if (APIStatus != "OK") {
  var log = [];
  var arrCAddress = [];
  var arrDAddress = [];
  // AF Maybe need to exclude all blank fields first then run code on variations of filled in fields.  this could shorten the number of calls to goole.
  //arrCAddress.push(cAddress);
  arrCAddress.push(cAddress);
  arrDAddress.push(dAddress);

  for (var i = 0; i < arrCAddress.length; i++) {
    testmate = testmate + " i:" + i + " ";
    cAddress = encodeURI(arrCAddress[i]);
    for (var z = 0; z < arrDAddress.length; z++) {
      testmate = testmate + " z:" + z + " ";
      dAddress = encodeURI(arrDAddress[z]);
      testmate = testmate + " cadd: " + cAddress + " dadd: " + dAddress;
      distUrl =
        "https://maps.googleapis.com/maps/api/distancematrix/json?origins=" +
        cAddress +
        "&destinations=" +
        dAddress +
        "&key=AIzaSyAA-T91wH9wyuSXHghvjRSMBIZ1X59Ym-8&avoid=tolls";
      distApi = platform.api.get(distUrl);
      testmate = testmate + " " + distApi.content.status + ". ";

      if (distApi.content.status == "OK") {
        if (distApi.content.rows[0].elements[0].status == "OK") {
          stanDistance = distApi.content.rows[0].elements[0].distance.value;
          APIStatus = distApi.content.rows[0].elements[0].status;

          if (APIStatusToStore != "OK") {
            if (intStorageWeeks > 0) {
              var distToStore =
                "https://maps.googleapis.com/maps/api/distancematrix/json?origins=" +
                cAddress +
                "&destinations=Folkestone,UK&key=AIzaSyAA-T91wH9wyuSXHghvjRSMBIZ1X59Ym-8&avoid=tolls";
              var distApiToStore = platform.api.get(distToStore);
              var APIStatusToStore;

              if (distApiToStore.content.status == "OK") {
                if (distApiToStore.content.rows[0].elements[0].status == "OK") {
                  stanDistanceToStore =
                    distApiToStore.content.rows[0].elements[0].distance.value;
                  APIStatusToStore =
                    distApiToStore.content.rows[0].elements[0].status;
                }
              } else {
                APIStatusToStore = "";
              }
            }
          }

          if (APIStatusFromStore != "OK") {
            if (intStorageWeeks > 0) {
              var distFromStore =
                "https://maps.googleapis.com/maps/api/distancematrix/json?origins=Folkestone,UK&destinations=" +
                dAddress +
                "&key=AIzaSyAA-T91wH9wyuSXHghvjRSMBIZ1X59Ym-8&avoid=tolls";
              var distApiFromStore = platform.api.get(distFromStore);
              var APIStatusFromStore;

              if (distApiFromStore.content.status == "OK") {
                if (
                  distApiFromStore.content.rows[0].elements[0].status == "OK"
                ) {
                  stanDistanceFromStore =
                    distApiFromStore.content.rows[0].elements[0].distance.value;
                  APIStatusFromStore =
                    distApiFromStore.content.rows[0].elements[0].status;
                }
              } else {
                APIStatusFromStore = "";
              }
            }
          }
        }
      } else {
        APIStatus = "";
      }

      if (APIStatus == "OK" || stanDistance < 5) {
        stanOrigin = distApi.content.origin_addresses[0];
        stanDestination = distApi.content.destination_addresses[0];
        stanDistance = distApi.content.rows[0].elements[0].distance.value;
        break;
      }
    }
    // break from code if address ok
    if (APIStatus == "OK" || stanDistance < 5) {
      break;
    }
  }
} else {
}
//#17

//#22 get geolocations from Google Maps
var stanOrigin2 = encodeURI(stanOrigin);
var stanDestination2 = encodeURI(stanDestination);

var Collection_Geolocation = platform.api.get(
  "https://maps.googleapis.com/maps/api/geocode/json?address=" +
    stanOrigin2 +
    "&key=AIzaSyAA-T91wH9wyuSXHghvjRSMBIZ1X59Ym-8&avoid=tolls"
);
//return "Test: " + stanOrigin;
//return "Test: " + JSON.stringify(Collection_Geolocation.content);
var Collection_Latitude =
  Collection_Geolocation.content.results[0].geometry.location.lat;
var Collection_Longitutde =
  Collection_Geolocation.content.results[0].geometry.location.lng;
var intLength =
  Collection_Geolocation.content.results[0].address_components.length - 1;
var strCountry;
var strCountryTest;
var intCountryUK = 0;
for (
  var intCountryCount = 0;
  intCountryCount < intLength + 1;
  intCountryCount++
) {
  if (
    Collection_Geolocation.content.results[0].address_components[
      intCountryCount
    ].types[0] == "country"
  ) {
    //return "test: " + Collection_Geolocation.content.results[0].address_components[intCountryCount].types[0];
    strCountryTest =
      Collection_Geolocation.content.results[0].address_components[
        intCountryCount
      ].long_name;
    if (strCountryTest == "United Kingdom") {
      intCountryUK = 1;
      strCountry =
        Collection_Geolocation.content.results[0].address_components[
          intCountryCount
        ].long_name;
    }
  }
}

if (intCountryUK == 1) {
  var verifyCollectionCountry = strCountry;
} else {
  var verifyCollectionCountry = strCountryTest;
}

var Delivery_Geolocation = platform.api.get(
  "https://maps.googleapis.com/maps/api/geocode/json?address=" +
    stanDestination2 +
    "&key=AIzaSyAA-T91wH9wyuSXHghvjRSMBIZ1X59Ym-8&avoid=tolls"
);
var Delivery_Latitude =
  Delivery_Geolocation.content.results[0].geometry.location.lat;
var Delivery_Longitutde =
  Delivery_Geolocation.content.results[0].geometry.location.lng;
var intLength2 =
  Delivery_Geolocation.content.results[0].address_components.length - 1;
var strCountry2;
var strCountryTest2;
var intCountryUK2 = 0;
for (
  var intCountryCount2 = 0;
  intCountryCount2 < intLength2 + 1;
  intCountryCount2++
) {
  if (
    Delivery_Geolocation.content.results[0].address_components[intCountryCount2]
      .types[0] == "country"
  ) {
    strCountryTest2 =
      Delivery_Geolocation.content.results[0].address_components[
        intCountryCount2
      ].long_name;
    if (strCountryTest2 == "United Kingdom") {
      intCountryUK2 = 1;
      strCountry2 =
        Delivery_Geolocation.content.results[0].address_components[
          intCountryCount2
        ].long_name;
    }
  }
}
if (intCountryUK2 == 1) {
  var verifyDeliveryCountry = strCountry2;
} else {
  var verifyDeliveryCountry = strCountryTest2;
}

var waypoint0 = "Calais,France";
var waypoint1 = "Grenoble,France";
var waypoint2 = "Gyor,Hungary";
var waypoint3 = "Ostopovice,Czechia";
var waypoint4 = "Craiova,Romania";
var waypoint5 = "Sofia,Bulgaria";
var waypointsRequired = "N";
var waypointUKReq = "N";
var waypointsDesc = "";
var waypointNotes = "";

//special waypoints because of areas that we wont travel through
if (verifyCollectionCountry === "United Kingdom") {
  if (
    verifyDeliveryCountry === "United Kingdom" ||
    verifyDeliveryCountry === "Ireland"
  ) {
  } else {
    waypointUKReq = "Y";
    waypointsRequired = "Y";
    waypointsDesc = waypoint0;
    waypointNotes = "Waypoints: 0. " + waypoint0;
  }
}

if (verifyCollectionCountry === "Ireland") {
  if (
    verifyDeliveryCountry === "United Kingdom" ||
    verifyDeliveryCountry === "Ireland"
  ) {
  } else {
    waypointUKReq = "Y";
    waypointsRequired = "Y";
    waypointsDesc = waypoint0;
    waypointNotes = "Waypoints: 0. " + waypoint0;
  }
}

if (verifyCollectionCountry === "Italy") {
  if (
    verifyDeliveryCountry === "United Kingdom" ||
    verifyDeliveryCountry === "Ireland" ||
    verifyDeliveryCountry === "France" ||
    verifyDeliveryCountry === "Luxembourg" ||
    verifyDeliveryCountry === "Belgium" ||
    verifyDeliveryCountry === "Netherlands" ||
    verifyDeliveryCountry === "Germany" ||
    verifyDeliveryCountry === "Denmark" ||
    verifyDeliveryCountry === "Norway" ||
    verifyDeliveryCountry === "Sweden" ||
    verifyDeliveryCountry === "Spain" ||
    verifyDeliveryCountry === "Portugal" ||
    verifyDeliveryCountry === "Czechia"
  ) {
    if (waypointUKReq === "Y") {
      waypointsRequired = "Y";
      waypointsDesc = waypoint1 + "|via:" + waypoint0;
      waypointNotes = "Waypoints: 0. " + waypoint0 + " 1. " + waypoint1;
    } else {
      waypointsRequired = "Y";
      waypointsDesc = waypoint1;
      waypointNotes = "Waypoints: 1. " + waypoint1;
    }
  }
}

if (
  verifyCollectionCountry === "United Kingdom" ||
  verifyCollectionCountry === "Ireland" ||
  verifyCollectionCountry === "France" ||
  verifyCollectionCountry === "Luxembourg" ||
  verifyCollectionCountry === "Belgium" ||
  verifyCollectionCountry === "Netherlands" ||
  verifyCollectionCountry === "Germany" ||
  verifyCollectionCountry === "Denmark" ||
  verifyCollectionCountry === "Norway" ||
  verifyCollectionCountry === "Sweden" ||
  verifyCollectionCountry === "Spain" ||
  verifyCollectionCountry === "Portugal" ||
  verifyCollectionCountry === "Czechia"
) {
  if (verifyDeliveryCountry === "Italy") {
    if (waypointUKReq === "Y") {
      waypointsRequired = "Y";
      waypointsDesc = waypoint0 + "|via:" + waypoint1;
      waypointNotes = "Waypoints: 0. " + waypoint0 + " 1. " + waypoint1;
    } else {
      waypointsRequired = "Y";
      waypointsDesc = waypoint1;
      waypointNotes = "Waypoints: 1. " + waypoint1;
    }
  }
}

if (
  verifyCollectionCountry === "Italy" ||
  verifyCollectionCountry === "Slovenia" ||
  verifyCollectionCountry === "Croatia"
) {
  if (
    verifyDeliveryCountry === "Poland" ||
    verifyDeliveryCountry === "Slovakia" ||
    verifyDeliveryCountry === "Lithuania" ||
    verifyDeliveryCountry === "Latvia" ||
    verifyDeliveryCountry === "Estonia" ||
    verifyDeliveryCountry === "Finland"
  ) {
    if (waypointUKReq === "Y") {
      waypointsRequired = "Y";
      waypointsDesc = waypoint2 + "|via:" + waypoint0;
      waypointNotes = "Waypoints: 0. " + waypoint0 + " 1. " + waypoint2;
    } else {
      waypointsRequired = "Y";
      waypointsDesc = waypoint2;
      waypointNotes = "Waypoints: 1. " + waypoint2;
    }
  }
}

if (
  verifyCollectionCountry === "Poland" ||
  verifyCollectionCountry === "Slovakia" ||
  verifyCollectionCountry === "Lithuania" ||
  verifyCollectionCountry === "Latvia" ||
  verifyCollectionCountry === "Estonia" ||
  verifyCollectionCountry === "Finland"
) {
  if (
    verifyDeliveryCountry === "Italy" ||
    verifyDeliveryCountry === "Slovenia" ||
    verifyDeliveryCountry === "Croatia"
  ) {
    if (waypointUKReq === "Y") {
      waypointsRequired = "Y";
      waypointsDesc = waypoint0 + "|via:" + waypoint2;
      waypointNotes = "Waypoints: 0. " + waypoint0 + " 1. " + waypoint2;
    } else {
      waypointsRequired = "Y";
      waypointsDesc = waypoint2;
      waypointNotes = "Waypoints: 1. " + waypoint2;
    }
  }
}

if (
  verifyCollectionCountry === "Slovakia" ||
  verifyCollectionCountry === "Hungary" ||
  verifyCollectionCountry === "Romania"
) {
  if (
    verifyDeliveryCountry === "United Kingdom" ||
    verifyDeliveryCountry === "Ireland" ||
    verifyDeliveryCountry === "France" ||
    verifyDeliveryCountry === "Luxembourg" ||
    verifyDeliveryCountry === "Belgium" ||
    verifyDeliveryCountry === "Netherlands" ||
    verifyDeliveryCountry === "Germany" ||
    verifyDeliveryCountry === "Denmark" ||
    verifyDeliveryCountry === "Norway" ||
    verifyDeliveryCountry === "Sweden" ||
    verifyDeliveryCountry === "Spain" ||
    verifyDeliveryCountry === "Portugal" ||
    verifyDeliveryCountry === "Czechia" ||
    verifyDeliveryCountry === "Switzerland"
  ) {
    if (waypointUKReq === "Y") {
      waypointsRequired = "Y";
      waypointsDesc = waypoint3 + "|via:" + waypoint0;
      waypointNotes = "Waypoints: 0. " + waypoint0 + " 1. " + waypoint3;
    } else {
      waypointsRequired = "Y";
      waypointsDesc = waypoint3;
      waypointNotes = "Waypoints: 1. " + waypoint3;
    }
  }
}

if (
  verifyCollectionCountry === "United Kingdom" ||
  verifyCollectionCountry === "Ireland" ||
  verifyCollectionCountry === "France" ||
  verifyCollectionCountry === "Luxembourg" ||
  verifyCollectionCountry === "Belgium" ||
  verifyCollectionCountry === "Netherlands" ||
  verifyCollectionCountry === "Germany" ||
  verifyCollectionCountry === "Denmark" ||
  verifyCollectionCountry === "Norway" ||
  verifyCollectionCountry === "Sweden" ||
  verifyCollectionCountry === "Spain" ||
  verifyCollectionCountry === "Portugal" ||
  verifyCollectionCountry === "Czechia" ||
  verifyCollectionCountry === "Switzerland"
) {
  if (
    verifyDeliveryCountry === "Slovakia" ||
    verifyDeliveryCountry === "Hungary" ||
    verifyDeliveryCountry === "Romania"
  ) {
    if (waypointUKReq === "Y") {
      waypointsRequired = "Y";
      waypointsDesc = waypoint0 + "|via:" + waypoint3;
      waypointNotes = "Waypoints: 0. " + waypoint0 + " 1. " + waypoint3;
    } else {
      waypointsRequired = "Y";
      waypointsDesc = waypoint3;
      waypointNotes = "Waypoints: 1. " + waypoint3;
    }
  }
}

if (verifyCollectionCountry === "Bulgaria") {
  if (
    verifyDeliveryCountry === "United Kingdom" ||
    verifyDeliveryCountry === "Ireland" ||
    verifyDeliveryCountry === "France" ||
    verifyDeliveryCountry === "Luxembourg" ||
    verifyDeliveryCountry === "Belgium" ||
    verifyDeliveryCountry === "Netherlands" ||
    verifyDeliveryCountry === "Germany" ||
    verifyDeliveryCountry === "Denmark" ||
    verifyDeliveryCountry === "Norway" ||
    verifyDeliveryCountry === "Sweden" ||
    verifyDeliveryCountry === "Spain" ||
    verifyDeliveryCountry === "Portugal" ||
    verifyDeliveryCountry === "Czechia" ||
    verifyDeliveryCountry === "Switzerland"
  ) {
    if (waypointUKReq === "Y") {
      waypointsRequired = "Y";
      waypointsDesc =
        waypoint4 +
        "|via:" +
        waypoint2 +
        "|via:" +
        waypoint3 +
        "|via:" +
        waypoint0;
      waypointNotes =
        "Waypoints: 0. " +
        waypoint0 +
        " 1. " +
        waypoint4 +
        " 2. " +
        waypoint2 +
        " 3. " +
        waypoint3;
    } else {
      waypointsRequired = "Y";
      waypointsDesc = waypoint4 + "|via:" + waypoint2 + "|via:" + waypoint3;
      waypointNotes =
        "Waypoints: 1. " + waypoint4 + " 2. " + waypoint2 + " 3. " + waypoint3;
    }
  }
}

if (
  verifyCollectionCountry === "United Kingdom" ||
  verifyCollectionCountry === "Ireland" ||
  verifyCollectionCountry === "France" ||
  verifyCollectionCountry === "Luxembourg" ||
  verifyCollectionCountry === "Belgium" ||
  verifyCollectionCountry === "Netherlands" ||
  verifyCollectionCountry === "Germany" ||
  verifyCollectionCountry === "Denmark" ||
  verifyCollectionCountry === "Norway" ||
  verifyCollectionCountry === "Sweden" ||
  verifyCollectionCountry === "Spain" ||
  verifyCollectionCountry === "Portugal" ||
  verifyCollectionCountry === "Czechia" ||
  verifyCollectionCountry === "Switzerland"
) {
  if (verifyDeliveryCountry === "Bulgaria") {
    if (waypointUKReq === "Y") {
      waypointsRequired = "Y";
      waypointsDesc =
        waypoint0 +
        "|via:" +
        waypoint3 +
        "|via:" +
        waypoint2 +
        "|via:" +
        waypoint4;
      waypointNotes =
        "Waypoints: 0. " +
        waypoint0 +
        " 1. " +
        waypoint3 +
        " 2. " +
        waypoint2 +
        " 3. " +
        waypoint4;
    } else {
      waypointsRequired = "Y";
      waypointsDesc = waypoint3 + "|via:" + waypoint2 + "|via:" + waypoint4;
      waypointNotes =
        "Waypoints: 1. " + waypoint3 + " 2. " + waypoint2 + " 3. " + waypoint4;
    }
  }
}

if (verifyCollectionCountry === "Greece") {
  if (
    verifyDeliveryCountry === "United Kingdom" ||
    verifyDeliveryCountry === "Ireland" ||
    verifyDeliveryCountry === "France" ||
    verifyDeliveryCountry === "Luxembourg" ||
    verifyDeliveryCountry === "Belgium" ||
    verifyDeliveryCountry === "Netherlands" ||
    verifyDeliveryCountry === "Germany" ||
    verifyDeliveryCountry === "Denmark" ||
    verifyDeliveryCountry === "Norway" ||
    verifyDeliveryCountry === "Sweden" ||
    verifyDeliveryCountry === "Spain" ||
    verifyDeliveryCountry === "Portugal" ||
    verifyDeliveryCountry === "Czechia" ||
    verifyDeliveryCountry === "Switzerland"
  ) {
    if (waypointUKReq === "Y") {
      waypointsRequired = "Y";
      waypointsDesc =
        waypoint5 +
        "|via:" +
        waypoint4 +
        "|via:" +
        waypoint2 +
        "|via:" +
        waypoint3 +
        "|via:" +
        waypoint0;
      waypointNotes =
        "Waypoints: 0. " +
        waypoint0 +
        " 1. " +
        waypoint5 +
        " 2. " +
        waypoint4 +
        " 3. " +
        waypoint2 +
        " 4. " +
        waypoint3;
    } else {
      waypointsRequired = "Y";
      waypointsDesc =
        waypoint5 +
        "|via:" +
        waypoint4 +
        "|via:" +
        waypoint2 +
        "|via:" +
        waypoint3;
      waypointNotes =
        "Waypoints: 1. " +
        waypoint5 +
        " 2. " +
        waypoint4 +
        " 3. " +
        waypoint2 +
        " 4. " +
        waypoint3;
    }
  }
}

if (
  verifyCollectionCountry === "United Kingdom" ||
  verifyCollectionCountry === "Ireland" ||
  verifyCollectionCountry === "France" ||
  verifyCollectionCountry === "Luxembourg" ||
  verifyCollectionCountry === "Belgium" ||
  verifyCollectionCountry === "Netherlands" ||
  verifyCollectionCountry === "Germany" ||
  verifyCollectionCountry === "Denmark" ||
  verifyCollectionCountry === "Norway" ||
  verifyCollectionCountry === "Sweden" ||
  verifyCollectionCountry === "Spain" ||
  verifyCollectionCountry === "Portugal" ||
  verifyCollectionCountry === "Czechia" ||
  verifyCollectionCountry === "Switzerland"
) {
  if (verifyDeliveryCountry === "Greece") {
    if (waypointUKReq === "Y") {
      waypointsRequired = "Y";
      waypointsDesc =
        waypoint0 +
        "|via:" +
        waypoint3 +
        "|via:" +
        waypoint2 +
        "|via:" +
        waypoint4 +
        "|via:" +
        waypoint5;
      waypointNotes =
        "Waypoints: 0. " +
        waypoint0 +
        " 1. " +
        waypoint3 +
        " 2. " +
        waypoint2 +
        " 3. " +
        waypoint4 +
        " 4. " +
        waypoint5;
    } else {
      waypointsRequired = "Y";
      waypointsDesc =
        waypoint3 +
        "|via:" +
        waypoint2 +
        "|via:" +
        waypoint4 +
        "|via:" +
        waypoint5;
      waypointNotes =
        "Waypoints: 1. " +
        waypoint3 +
        " 2. " +
        waypoint2 +
        " 3. " +
        waypoint4 +
        " 4. " +
        waypoint5;
    }
  }
}

if (verifyCollectionCountry === "Bulgaria") {
  if (
    verifyDeliveryCountry === "Slovakia" ||
    verifyDeliveryCountry === "Hungary" ||
    verifyDeliveryCountry === "Poland" ||
    verifyDeliveryCountry === "Finland" ||
    verifyDeliveryCountry === "Lithuania" ||
    verifyDeliveryCountry === "Latvia" ||
    verifyDeliveryCountry === "Estonia" ||
    verifyDeliveryCountry === "Italy" ||
    verifyDeliveryCountry === "Slovenia" ||
    verifyDeliveryCountry === "Croatia" ||
    verifyDeliveryCountry === "Austria" ||
    verifyDeliveryCountry === "Liechtenstein"
  ) {
    waypointsRequired = "Y";
    waypointsDesc = waypoint4;
    waypointNotes = "Waypoints: 1. " + waypoint4;
  }
}

if (
  verifyCollectionCountry === "Slovakia" ||
  verifyCollectionCountry === "Hungary" ||
  verifyCollectionCountry === "Poland" ||
  verifyCollectionCountry === "Finland" ||
  verifyCollectionCountry === "Lithuania" ||
  verifyCollectionCountry === "Latvia" ||
  verifyCollectionCountry === "Estonia" ||
  verifyCollectionCountry === "Italy" ||
  verifyCollectionCountry === "Slovenia" ||
  verifyCollectionCountry === "Croatia" ||
  verifyCollectionCountry === "Austria" ||
  verifyCollectionCountry === "Liechtenstein"
) {
  if (verifyDeliveryCountry === "Bulgaria") {
    waypointsRequired = "Y";
    waypointsDesc = waypoint4;
    waypointNotes = "Waypoints: 1. " + waypoint4;
  }
}

if (verifyCollectionCountry === "Greece") {
  if (
    verifyDeliveryCountry === "Slovakia" ||
    verifyDeliveryCountry === "Hungary" ||
    verifyDeliveryCountry === "Poland" ||
    verifyDeliveryCountry === "Finland" ||
    verifyDeliveryCountry === "Lithuania" ||
    verifyDeliveryCountry === "Latvia" ||
    verifyDeliveryCountry === "Estonia" ||
    verifyDeliveryCountry === "Italy" ||
    verifyDeliveryCountry === "Slovenia" ||
    verifyDeliveryCountry === "Croatia" ||
    verifyDeliveryCountry === "Austria" ||
    verifyDeliveryCountry === "Liechtenstein"
  ) {
    waypointsRequired = "Y";
    waypointsDesc = waypoint5 + "|via:" + waypoint4;
    waypointNotes = "Waypoints: 1. " + waypoint5 + " 2. " + waypoint4;
  }
}

if (
  verifyCollectionCountry === "Slovakia" ||
  verifyCollectionCountry === "Hungary" ||
  verifyCollectionCountry === "Poland" ||
  verifyCollectionCountry === "Finland" ||
  verifyCollectionCountry === "Lithuania" ||
  verifyCollectionCountry === "Latvia" ||
  verifyCollectionCountry === "Estonia" ||
  verifyCollectionCountry === "Italy" ||
  verifyCollectionCountry === "Slovenia" ||
  verifyCollectionCountry === "Croatia" ||
  verifyCollectionCountry === "Austria" ||
  verifyCollectionCountry === "Liechtenstein"
) {
  if (verifyDeliveryCountry === "Greece") {
    waypointsRequired = "Y";
    waypointsDesc = waypoint4 + "|via:" + waypoint5;
    waypointNotes = "Waypoints: 1. " + waypoint4 + " 2. " + waypoint5;
  }
}

if (waypointsRequired === "Y") {
  distUrl =
    "https://maps.googleapis.com/maps/api/directions/json?origin=" +
    cAddress +
    "&destination=" +
    dAddress +
    "&waypoints=via:" +
    waypointsDesc +
    "&key=AIzaSyAA-T91wH9wyuSXHghvjRSMBIZ1X59Ym-8&avoid=tolls";
  distApi = platform.api.get(distUrl);
  testmate = JSON.stringify(distApi.content) + ". routecheck";
  if (distApi.content.status == "OK") {
    stanDistance = distApi.content.routes[0].legs[0].distance.value;
    APIStatus = distApi.content.status;
  } else {
    APIStatus = "";
  }
}
//#17.2 Additional Strorage Transport costs calc

var intStorageTransCost = 0;
var intStorageTransDist = 0;
if (intStorageWeeks > 0) {
  intStorageTransDist =
    stanDistanceToStore + stanDistanceFromStore - stanDistance;
}

//#17.2

//#18 Decode Address
stanDistance = Number(stanDistance) / 1000;
intStorageTransDist = Number(intStorageTransDist) / 1000;
stanDistanceToStore = Number(stanDistanceToStore) / 1000;
stanDistanceFromStore = Number(stanDistanceFromStore) / 1000;

if (!stanOrigin || stanOrigin == "null") {
  stanOrigin = decodeURI(cAddress);
}
if (!stanDestination || stanDestination == "null") {
  stanDestination = decodeURI(dAddress);
}
//#18 End

//#20 determain van size/weight limits for the vans based on country and calculate
var intVanCounter = 1;
var arrVansSize = [];
var arrVansWeight = [];
var LoadSizeTemp = LoadSize;
var VanSizeScaleTemp = 0;
var VanSizeScale1st = 22;
var VanSizeScale = 20;
var VanWeightScale = 1000;
var mustBeFull = false;
var VantrueCount = 0;
var LoadTrueSize = 0;
VanSizeScaleTemp = VanSizeScale1st;

//#21 Check Upper Floor and Weekend Options
var boolUpperFloorCollection = false;
var boolUpperFloorDelivery = false;
var boolWeekendCollection = false;
var boolWeekendDelivery = false;
//determain upperfloor and weekend collection services
if (UpperFloorSelection == "Collection") {
  var boolUpperFloorCollection = true;
  var boolUpperFloorDelivery = false;
} else if (UpperFloorSelection == "Delivery") {
  var boolUpperFloorCollection = false;
  var boolUpperFloorDelivery = true;
} else if (UpperFloorSelection == "Both") {
  var boolUpperFloorCollection = true;
  var boolUpperFloorDelivery = true;
}

if (WeekendServiceSelection == "Collection") {
  var boolWeekendCollection = true;
  var boolWeekendDelivery = false;
} else if (WeekendServiceSelection == "Delivery") {
  var boolWeekendCollection = false;
  var boolWeekendDelivery = true;
} else if (WeekendServiceSelection == "Both") {
  var boolWeekendCollection = true;
  var boolWeekendDelivery = true;
}
//#21

var spFerries = platform.api.get(
  "https://df3.europeanmoving.eu/api/v2/db/_table/tblFerrys?api_key=813b0d263f902fc8118336c76779a019a6ba541eeca062b08e877a9f27a941bb"
);
var rCCountry;
var rDCountry;
var rCountry;
var intFixDelStor = 0;
var intFixColStor = 0;
var rArray = spFerries.content.resource;
var intI = 0;
for (var i = 0; i < rArray.length; i++) {
  rCountry = rArray[i].Country;
  rCCountry = Number(rArray[i].ToStorageFixed);
  rDCountry = Number(rArray[i].FromStorageFixed);
  if (intI == 1) {
  } else {
    if (rCountry == verifyDeliveryCountry) {
      intI = 1;
      intFixDelStor = rDCountry;
    }
    if (rCountry == verifyCollectionCountry) {
      intI = 1;
      intFixColStor = rCCountry;
    }
  }
}

var boolcDover = fxDoverFerry(Collection_Latitude, Collection_Longitutde);
var booldDover = fxDoverFerry(Delivery_Latitude, Delivery_Longitutde);
var boolDover = false;

if (boolcDover) {
  boolDover = true;
}
if (booldDover) {
  boolDover = true;
}
//#22 End

//#23 determain additionalFees
var TaxRate = 20;
var AdditionalFees = platform.api.get(
  encodeURI(
    "https://df3.europeanmoving.eu/api/v2/additionalFees/hidden?api_key=813b0d263f902fc8118336c76779a019a6ba541eeca062b08e877a9f27a941bb&clat=" +
      Collection_Latitude +
      "&clng=" +
      Collection_Longitutde +
      "&dlat=" +
      Delivery_Latitude +
      "&dlng=" +
      Delivery_Longitutde +
      "&loadSize=" +
      LoadSize
  )
);
var FerryCost = AdditionalFees.content.hiddenFee;
TaxRate = AdditionalFees.content.taxFee;
var customsCost = AdditionalFees.content.customsFee;
var salesRate = AdditionalFees.content.ratesFee;
var HiddenFeeBreakdown = AdditionalFees.content.HiddenFeeBreakdown;
var fixedcubic = AdditionalFees.content.fixedcubic;
var AFAdditional =
  " FerryCost: " +
  FerryCost +
  " TaxRate: " +
  TaxRate +
  " customsCost: " +
  customsCost +
  " salesRate: " +
  salesRate +
  " HiddenFeeBreakdown: " +
  HiddenFeeBreakdown +
  " fixedcubic: " +
  fixedcubic;

if (FerryCost === 0 || !FerryCost) {
  FerryCost = 0;
  fixedcubic = 0;
}

if (isNaN(TaxRate)) {
  TaxRate = 20;
}

if (verifyCollectionCountry === "Switzerland") {
  TaxRate = 0;
}
if (verifyDeliveryCountry === "Switzerland") {
  TaxRate = 0;
}
if (verifyCollectionCountry === "Norway") {
  TaxRate = 0;
}
if (verifyDeliveryCountry === "Norway") {
  TaxRate = 0;
}

if (customsCost === 0 || !customsCost) {
  customsCost = 0;
}

if (salesRate === 0 || !salesRate) {
  salesRate = 1;
}
//#23 End

//#20 moved from 20 above

// AF Changed - Sam said to use up to 22m3 for 1st full van (28-11-17)

//Check if Area forces full van and apply if needed
if (fixedcubic !== 0) {
  VanSizeScale = 20;
  VanSizeScale1st = 22;
  VanWeightScale = 1000;
  mustBeFull = true;
  VanSizeScaleTemp = VanSizeScale1st;
}

//if ((stanDestination.includes("Switzerland")) || (stanDestination.includes("Norway"))) {
if (
  verifyDeliveryCountry === "Switzerland" ||
  verifyDeliveryCountry === "Norway"
) {
  VanSizeScale = 20;
  VanSizeScale1st = 22;
  VanWeightScale = 800;
  mustBeFull = true;
  VanSizeScaleTemp = VanSizeScale1st;
}

//if ((stanOrigin.includes("Switzerland")) || (stanOrigin.includes("Norway"))) {
if (
  verifyCollectionCountry === "Switzerland" ||
  verifyCollectionCountry === "Norway"
) {
  VanSizeScale = 20;
  VanSizeScale1st = 22;
  VanWeightScale = 800;
  mustBeFull = true;
  VanSizeScaleTemp = VanSizeScale1st;
}

//if ((stanDestination.includes("Austria")) || (stanOrigin.includes("Austria"))) {
if (
  verifyDeliveryCountry === "Austria" ||
  verifyCollectionCountry === "Austria"
) {
  VanSizeScale = 20;
  VanSizeScale1st = 22;
  VanWeightScale = 800;
  VanSizeScaleTemp = VanSizeScale1st;
}

if (
  LoadSizeTemp / 20 - Math.floor(LoadSizeTemp / 20) <= 0.11 &&
  LoadSizeTemp / 20 - Math.floor(LoadSizeTemp / 20) > 0
) {
  if (LoadSizeTemp > VanSizeScale1st) {
    VantrueCount = Math.ceil(
      (LoadSizeTemp - VanSizeScale1st) / VanSizeScale + 1
    );
    LoadTrueSize = VanSizeScale1st;
  } else {
    if (mustBeFull === true) {
      VantrueCount = Math.ceil(
        (LoadSizeTemp - VanSizeScale1st) / VanSizeScale + 1
      );
      LoadTrueSize = VanSizeScale1st;
    } else {
      VantrueCount = Math.ceil(LoadSizeTemp / VanSizeScale1st);
      LoadTrueSize = LoadSizeTemp;
    }
  }
} else {
  if (LoadSizeTemp > VanSizeScale) {
    VantrueCount = Math.ceil((LoadSizeTemp - VanSizeScale) / VanSizeScale + 1);
    LoadTrueSize = VanSizeScale;
  } else {
    if (mustBeFull === true) {
      VantrueCount = Math.ceil(
        (LoadSizeTemp - VanSizeScale) / VanSizeScale + 1
      );
      LoadTrueSize = VanSizeScale;
    } else {
      VantrueCount = Math.ceil(LoadSizeTemp / VanSizeScale);
      LoadTrueSize = LoadSizeTemp;
    }
  }
}

var VanSizeWeightRatio = 0;
while (LoadSizeTemp >= LoadTrueSize) {
  //return "test: " + LoadSizeTemp + " " + LoadTrueSize;
  arrVansSize.push(LoadTrueSize);
  VanSizeWeightRatio = VanWeightScale / VanSizeScale;
  if (LoadTrueSize > VanSizeScale) {
    arrVansWeight.push(VanSizeScale * VanSizeWeightRatio);
  } else {
    arrVansWeight.push(LoadTrueSize * VanSizeWeightRatio);
  }
  LoadSizeTemp = LoadSizeTemp - LoadTrueSize;
  LoadTrueSize = VanSizeScale;
  VanSizeScaleTemp = VanSizeScale;
}

if (LoadSizeTemp > 0) {
  if (mustBeFull === true) {
    arrVansSize.push(VanSizeScale);
    arrVansWeight.push(VanWeightScale);
  } else if (LoadSizeTemp > 3) {
    arrVansSize.push(LoadSizeTemp);
    arrVansWeight.push(LoadSizeTemp * VanSizeWeightRatio);
  } else {
    arrVansSize.push(3);
    arrVansWeight.push(3 * VanSizeWeightRatio);
  }
}

if (arrVansSize.length === 0) {
  throw "No Vans Listed";
}
if (TailLiftPrice != 0) {
  arrVansWeight.length = 0;
  arrVansWeight.push(700);
  arrVansWeight.push(700);
  arrVansWeight.push(700);
  arrVansWeight.push(700);
  arrVansWeight.push(700);
  arrVansWeight.push(700);
  arrVansWeight.push(700);
  arrVansWeight.push(700);
}
//Make Full Load For 16M3
if (
  verifyCollectionCountry == "Switzerland" ||
  verifyCollectionCountry == "Austria" ||
  verifyCollectionCountry == "Norway"
) {
  if (LoadSize >= 16 && LoadSize <= 20) {
    arrVansSize.length = 0;
    arrVansSize.push(20);
    arrVansWeight.length = 0;
    arrVansWeight.push(800);
  }
} else if (
  verifyDeliveryCountry == "Switzerland" ||
  verifyDeliveryCountry == "Austria" ||
  verifyDeliveryCountry == "Norway"
) {
  if (LoadSize >= 16 && LoadSize <= 20) {
    arrVansSize.length = 0;
    arrVansSize.push(20);
    arrVansWeight.length = 0;
    arrVansWeight.push(800);
  }
} else {
  if (LoadSize >= 16 && LoadSize <= 20) {
    arrVansSize.length = 0;
    arrVansSize.push(20);
    arrVansWeight.length = 0;
    arrVansWeight.push(1000);
  }
}
//#20 End

//#24 calculate price for each van in preparation for nifty
var arrVanPriceEZM = [];
var arrVanPriceLNG = [];

var arrVanPriceMarginEZM = [];
var arrVanPriceMarginLNG = [];
var arrVanPriceMarginPLFF = [];
var arrVanPriceMarginPLSF = [];
var arrVanPriceMarginPLSTD = [];
var arrVanCostPLFF = [];
var arrVanCostPLSF = [];
var arrVanCostPLSTD = [];
var arrVanCostEZM = [];
var arrVanCostLNG = [];
var arrVanOptionsCosts = [];
var arrUpperFloorColCosts = [];
var arrUpperFloorDelCosts = [];
var arrWeekendColCosts = [];
var arrWeekendDelCosts = [];
var UpperFloorColCosts = 0;
var UpperFloorDelCosts = 0;
var WeekendColCosts = 0;
var WeekendDelCosts = 0;
var OptionsCosts = 0;
var arrVanCost = [];
var StorageFee = 0;
var vanCost = 0;
var totalPriceEZM = 0;
var totalPriceLNG = 0;
var totalCostEZM = 0;
var totalCostLNG = 0;
var totalFeesEZM = 0;
var totalFeesLNG = 0;
var totalEstimateEZM = 0;
var totalEstimateLNG = 0;
var UpperFloorCollectionFee = 0;
var UpperFloorDeliveryFee = 0;
var WeekendCollectionFee = 0;
var WeekendDeliveryFee = 0;

var arrVanPriceTransStorage = [];
var arrVanPriceMarginTransStorage = [];
var arrVanCostTransStorage = [];
var totalPriceTransStorage = 0;
var totalCostTransStorage = 0;
var totalFeesTransStorage = 0;
var totalEstimateTransStorage = 0;

var arrVanPriceTransToStorageEU = [];
var arrVanPriceMarginTransToStorageEU = [];
var arrVanCostTransToStorageEU = [];
var totalPriceTransToStorageEU = 0;
var totalCostTransToStorageEU = 0;
var totalFeesTransToStorageEU = 0;
var totalEstimateTransToStorageEU = 0;

var arrVanPriceTransFromStorageEU = [];
var arrVanPriceMarginTransFromStorageEU = [];
var arrVanCostTransFromStorageEU = [];
var totalPriceTransFromStorageEU = 0;
var totalCostTransFromStorageEU = 0;
var totalFeesTransFromStorageEU = 0;
var totalEstimateTransFromStorageEU = 0;

var arrVanPriceTransToStorageUK = [];
var arrVanPriceMarginTransToStorageUK = [];
var arrVanCostTransToStorageUK = [];
var totalPriceTransToStorageUK = 0;
var totalCostTransToStorageUK = 0;
var totalFeesTransToStorageUK = 0;
var totalEstimateTransToStorageUK = 0;

var arrVanPriceTransFromStorageUK = [];
var arrVanPriceMarginTransFromStorageUK = [];
var arrVanCostTransFromStorageUK = [];
var totalPriceTransFromStorageUK = 0;
var totalCostTransFromStorageUK = 0;
var totalFeesTransFromStorageUK = 0;
var totalEstimateTransFromStorageUK = 0;

//var i = 0;
//vanCost = transportCosts(stanDistance, arrVansSize[i], boolDover, FerryCost, StorageWeeks, boolUpperFloorCollection, boolUpperFloorDelivery, boolWeekendCollection, boolWeekendDelivery);
//return vanCost;
var Discounts = [];
Discounts.push(1);

if (CountryAssigned == "French") {
  //var DiscountString = " à tarif réduit ";
  var DiscountString = "";
} else {
  var DiscountString = "";
}
var DiscountsText = [];
DiscountsText.push(" ");
//24-2 get cost from calling transportcosts function and prepare fields for niftyquoter

var AFTotalVan = " ";
var AFTotal = 0;
var AFTotalTransStorage = 0;
var doverferrycost = 0;
var doverferrycost20 = 0;
var AltFerry = 0;
var AltFerry20 = 0;
var dynCostPerKM = 0;
var dynLoadNGoFee = 0;
var PricePLFF = 0;
var PricePLSF = 0;
var PricePLSTD = 0;

for (var i = 0; i < arrVansSize.length; i++) {
  //24-3 call transportcosts funtion for pricing for each van)
  vanCost = transportCosts(
    stanDistance,
    arrVansSize[i],
    boolDover,
    FerryCost,
    StorageWeeks,
    boolUpperFloorCollection,
    boolUpperFloorDelivery,
    boolWeekendCollection,
    boolWeekendDelivery,
    i,
    intStorageTransDist,
    stanDistanceToStore,
    stanDistanceFromStore,
    intFixDelStor,
    intFixColStor,
    arrVansSize.length,
    fixedcubic,
    NoofFloorsC,
    LiftAvailable,
    NoofFloorsD
  );
  arrVanPriceEZM.push(vanCost.EasyMoves);
  arrVanPriceLNG.push(vanCost.LoadNGo);
  arrVanCostPLFF.push(vanCost.CostPLFF);
  arrVanCostPLSF.push(vanCost.CostPLSF);
  arrVanCostPLSTD.push(vanCost.CostPLSTD);
  arrVanPriceMarginPLFF.push(vanCost.MarginPLFF);
  arrVanPriceMarginPLSF.push(vanCost.MarginPLST);
  arrVanPriceMarginPLSTD.push(vanCost.MarginPLSTD);
  arrVanPriceMarginEZM.push(vanCost.MarginEZM);
  arrVanPriceMarginLNG.push(vanCost.MarginLNG);
  arrVanCostEZM.push(vanCost.transportCostsEZM);
  arrVanCostLNG.push(vanCost.transportCostsLNG);
  arrVanOptionsCosts.push(vanCost.OptionsCosts);
  arrUpperFloorColCosts.push(vanCost["Upper Floor Collection Cost"]);
  arrUpperFloorDelCosts.push(vanCost["Upper Floor Delivery Cost"]);
  arrWeekendColCosts.push(vanCost["Weekend Collection Cost"]);
  arrWeekendDelCosts.push(vanCost["Weekend Delivery Cost"]);
  OptionsCosts += vanCost.OptionsCosts;
  UpperFloorColCosts += vanCost["Upper Floor Collection Cost"];
  UpperFloorDelCosts += vanCost["Upper Floor Delivery Cost"];
  WeekendColCosts += vanCost["Weekend Collection Cost"];
  WeekendDelCosts += vanCost["Weekend Delivery Cost"];
  arrVanCost.push(vanCost);
  Discounts.push(1); //1 as discounts have changed
  DiscountsText.push(DiscountString);
  totalPriceEZM += vanCost.EasyMoves * Discounts[i];
  totalPriceLNG += vanCost.LoadNGo * Discounts[i];
  totalCostEZM += vanCost.transportCostsEZM * Discounts[i];
  totalCostLNG += vanCost.transportCostsLNG * Discounts[i];
  doverferrycost += vanCost.doverferrycost;
  AltFerry += vanCost.AltFerry;
  dynCostPerKM += vanCost.CostperKM;
  dynLoadNGoFee += vanCost.dynLoadNGoFee;

  StorageFee += vanCost["Storage Fee"];

  UpperFloorCollectionFee += vanCost["Upper Floor Collection Option"];
  UpperFloorDeliveryFee += vanCost["Upper Floor Delivery Option"];
  WeekendCollectionFee += vanCost["Weekend Collection Option"];
  WeekendDeliveryFee += vanCost["Weekend Delivery Option"];

  arrVanPriceTransStorage.push(vanCost.TransStorage);
  arrVanPriceMarginTransStorage.push(vanCost.MarginTransStorage);
  arrVanCostTransStorage.push(vanCost.transportCostsTransStorage);
  totalPriceTransStorage += vanCost.TransStorage * Discounts[i];
  totalCostTransStorage += vanCost.transportCostsTransStorage * Discounts[i];

  arrVanPriceTransToStorageEU.push(vanCost.TransToStorageEU);
  arrVanPriceMarginTransToStorageEU.push(vanCost.MarginTransToStorageEU);
  arrVanCostTransToStorageEU.push(vanCost.transportCostsTransToStorageEU);
  totalPriceTransToStorageEU += vanCost.TransToStorageEU * Discounts[i];
  totalCostTransToStorageEU +=
    vanCost.transportCostsTransToStorageEU * Discounts[i];

  arrVanPriceTransFromStorageEU.push(vanCost.TransFromStorageEU);
  arrVanPriceMarginTransFromStorageEU.push(vanCost.MarginTransFromStorageEU);
  arrVanCostTransFromStorageEU.push(vanCost.transportCostsTransFromStorageEU);
  totalPriceTransFromStorageEU += vanCost.TransFromStorageEU * Discounts[i];
  totalCostTransFromStorageEU +=
    vanCost.transportCostsTransFromStorageEU * Discounts[i];

  arrVanPriceTransToStorageUK.push(vanCost.TransToStorageUK);
  arrVanPriceMarginTransToStorageUK.push(vanCost.MarginTransToStorageUK);
  arrVanCostTransToStorageUK.push(vanCost.transportCostsTransToStorageUK);
  totalPriceTransToStorageUK += vanCost.TransToStorageUK * Discounts[i];
  totalCostTransToStorageUK +=
    vanCost.transportCostsTransToStorageUK * Discounts[i];

  arrVanPriceTransFromStorageUK.push(vanCost.TransFromStorageUK);
  arrVanPriceMarginTransFromStorageUK.push(vanCost.MarginTransFromStorageUK);
  arrVanCostTransFromStorageUK.push(vanCost.transportCostsTransFromStorageUK);
  totalPriceTransFromStorageUK += vanCost.TransFromStorageUK * Discounts[i];
  totalCostTransFromStorageUK +=
    vanCost.transportCostsTransFromStorageUK * Discounts[i];

  PricePLFF = vanCost.PLFF;
  PricePLSF = vanCost.PLSF;
  PricePLSTD = vanCost.PLSTD;

  //24-3 End
}

//24-2 End

AFTotalVan = AFTotalVan + vanCost.transportCostsEZM + " ";
AFTotal =
  AFTotal +
  totalCostEZM +
  UpperFloorColCosts +
  UpperFloorDelCosts +
  WeekendColCosts +
  WeekendDelCosts;
AFTotalTransStorage =
  AFTotalTransStorage + vanCost.transportCostsTransStorage + " ";

var totalProfitEZM = totalPriceEZM - totalCostEZM;
var totalProfitLNG = totalPriceLNG - totalCostLNG;
var totalMarginEZM = (totalProfitEZM / totalPriceEZM) * 100;
var totalMarginLNG = (totalProfitLNG / totalPriceLNG) * 100;
totalEstimateEZM = totalPriceEZM / 0.9; // * 1.2);
totalEstimateLNG = totalPriceLNG / 0.9; // * 1.2);
//#24 End

//#25 Prepare Country Currency
//get the country name from geolocations
function getCountry(lat, lng) {
  var geonames =
    "http://dev.virtualearth.net/REST/v1/Locations/" +
    lat +
    "," +
    lng +
    "?o=json&key=Vlclqgho04HlJkMv13ea~-3TqrEaCfwIWO0l4rdIpNg~AvbhQVABSChNQjEGwK6VJLVVPVfEM1eTPrJpnukHm-TdeoBgjxR6XlCDWR0j-OtL";
  var req = platform.api.get(encodeURI(geonames));
  var country = "";
  try {
    country = req.content.resourceSets[0].resources[0].address.countryRegion;
  } catch (err) {
    country = "Unknown";
  }
  return country;
}

var CurrencyUsed = "EUR";
var CurrencySymbol = "€";

if (
  CountryAssigned != "French" &&
  CountryAssigned != "Germany" &&
  CountryAssigned != "Spain" &&
  CountryAssigned != "Italy" 
  //CountryAssigned != "Sweden"
) {
  var tblCurrency = platform.api.get(
    "https://df3.europeanmoving.eu/api/v2/db/_table/tblCurrency?api_key=813b0d263f902fc8118336c76779a019a6ba541eeca062b08e877a9f27a941bb"
  );
  var rArrayCurrency = tblCurrency.content.resource;
  for (var z = 0; z < rArrayCurrency.length; z++) {
    var rCountry = rArrayCurrency[z].CountryName;
    if (verifyCollectionCountry == rCountry) {
      CurrencyUsed = rArrayCurrency[z].Currency;
      CurrencySymbol = rArrayCurrency[z].Symbol;
    }
  }
}
if (CurrencyUsed == "EUR") {
  CurrencyUsedValue = 1;
} else {
  var ExchangeRates = platform.api.get(
    "https://api.exchangeratesapi.io/latest"
  );
  var CurrencyUsedValue = ExchangeRates.content.rates[CurrencyUsed];
  CurrencyUsedValue = 1 + (1 - ExchangeRates.content.rates[CurrencyUsed]);
  //CurrencyUsedValue = ExchangeRates.content.rates[CurrencyUsed];
}
//minimum exchange rate - Stefan 03.06
if (CurrencyUsed != "EUR") {
  if (CurrencyUsedValue < 1.1) {
    CurrencyUsedValue = 1.1;
  }
}
//#25

//#26 Prepare json of prices for array
var totalsjson = {
  totals: {
    "Total Price EZM":
      CurrencySymbol + (totalPriceEZM / CurrencyUsedValue).toFixed(2),
    "Total Price LNG":
      CurrencySymbol + (totalPriceLNG / CurrencyUsedValue).toFixed(2),
    "Total Cost EZM":
      CurrencySymbol + (totalCostEZM / CurrencyUsedValue).toFixed(2),
    "Total Cost LNG":
      CurrencySymbol + (totalCostLNG / CurrencyUsedValue).toFixed(2),
    "Total Profit EZM":
      CurrencySymbol + (totalProfitEZM / CurrencyUsedValue).toFixed(2),
    "Total Profit LNG":
      CurrencySymbol + (totalProfitLNG / CurrencyUsedValue).toFixed(2),
    "Margin EZM": totalMarginEZM.toFixed(2) + "%",
    "Margin LNG": totalMarginLNG.toFixed(2) + "%",
    "Storage Fee": CurrencySymbol + (StorageFee / CurrencyUsedValue).toFixed(2),
    "Total Estimate EZM":
      CurrencySymbol + (totalEstimateEZM / CurrencyUsedValue).toFixed(2),
    "Total Estimate LNG":
      CurrencySymbol + (totalEstimateLNG / CurrencyUsedValue).toFixed(2),
    Distance: stanDistance
  }
};

arrVanCost.push(totalsjson);
//#26 End

//#27 prepare size and distance

var TotalSizeCubic = LoadSize * 35.33147;
TotalSizeCubic = TotalSizeCubic.toFixed(1);
//#27 End
//Seasonal Multiplier created by Nikita - 14.11.18
var weekDate = CollectionDate;
let seasonalMultiplier = 1;

if (CollectionDate != null) {
  var easterDate = CollectionDate;
  var easterDay = easterDate.substring(8);
} else {
  var easterDay = 0;
}

Date.prototype.getWeek = function() {
  var date = new Date(this.getTime());
  date.setHours(0, 0, 0, 0);

  date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));

  var week1 = new Date(date.getFullYear(), 0, 4);
  return (
    1 +
    Math.round(
      ((date.getTime() - week1.getTime()) / 86400000 -
        3 +
        ((week1.getDay() + 6) % 7)) /
        7
    )
  );
};
if (weekDate != null) {
  var weekOfBooking = new Date(weekDate).getWeek();

  if (weekOfBooking >= 47 && weekOfBooking <= 50) {
    //low Season
    seasonalMultiplier = 0.95;
  } else if (weekOfBooking == 51) {
    //Christmas week 1
    seasonalMultiplier = 1.2;
  } else if (weekOfBooking == 52) {
    // Christmas week 2
    seasonalMultiplier = 1.4;
  } else if (weekOfBooking == 53 || weekOfBooking == 1) {
    //Christmas week 3
    seasonalMultiplier = 1.2;
  } else if (weekOfBooking >= 2 && weekOfBooking <= 4) {
    // low season
    seasonalMultiplier = 0.95;
  } else if (weekOfBooking == 16 && easterDay >= 17) {
    //easter week
    seasonalMultiplier = 1.2;
  } else if (weekOfBooking == 17 && easterDay <= 24) {
    //easter week
    seasonalMultiplier = 1.2;
  } else if (weekOfBooking >= 27 && weekOfBooking <= 36) {
    //peak season
    seasonalMultiplier = 1.05;
  } else {
    seasonalMultiplier = 1;
  }
} else {
  seasonalMultiplier = 1;
}

//end

//#37 set tax vat rate
var lTax;

if (TaxRate > 0) {
  lTax = TaxRate;
} else {
  lTax = 0.0;
}
//#37 end

//#38 add each item to nifty by calling a function
var intTotalVans = 0;
var intTotalVansEZM = 0;
var intTotalVansLNG = 0;

for (var n = 0; n < arrVansSize.length; n++) {
  var intTestNewPLSys = 0;
  if (CountryAssigned == "French") {
    intTestNewPLSys = 1;
  } else {
    if (arrVansSize[0] < 20) {
    } else {
      intTestNewPLSys = 1;
    }
  }
  if (intTestNewPLSys == 0) {
    if (ServiceT == "Load N Go") {
      for (var x = 0; x < arrVansSize.length; x++) {
        if (parseInt(arrVansSize[x]) < 11) {
          finalPrice =
            ((arrVanPriceLNG[n] * Discounts[n] * salesRate) /
              CurrencyUsedValue /
              0.9) *
            1.1;
        } else {
          finalPrice =
            (arrVanPriceLNG[n] * Discounts[n] * salesRate) /
            CurrencyUsedValue /
            0.9;
        }
      }
      if (stanDistance <= 500) {
        finalPrice *= 1.05;
      }
      if (finalPrice < 526.315789474) {
        finalPrice = 526.315789474;
      }
      intTotalVansLNG = intTotalVansLNG + finalPrice;
    } else {
      for (var x = 0; x < arrVansSize.length; x++) {
        if (parseInt(arrVansSize[x]) < 11) {
          finalPrice =
            ((PricePLSTD * Discounts[n] * salesRate) /
              CurrencyUsedValue /
              0.9) *
            1.1;
        } else {
          finalPrice =
            (PricePLSTD * Discounts[n] * salesRate) / CurrencyUsedValue / 0.9;
        }
      }
      if (stanDistance <= 500) {
        finalPrice *= 1.05;
      }
      intTotalVansEZM = intTotalVansEZM + finalPrice;
    }
  } else {
    if (arrVansSize.length == 1) {
      if (intStorageWeeks > 0) {
        if (ServiceT === "Easy Moves") {
          if (verifyCollectionCountry === "United Kingdom") {
            if (verifyDeliveryCountry === "United Kingdom") {
              intTotalVansEZM =
                intTotalVansEZM +
                ((arrVanPriceTransToStorageUK[n] * 1 +
                  arrVanPriceTransFromStorageUK[n] * 1) *
                  Discounts[n] *
                  salesRate) /
                  CurrencyUsedValue /
                  0.9;
              if (intTotalVansEZM < 500) {
                intTotalVansEZM = 500;
              } else intTotalVansEZM;
            } else {
              intTotalVansEZM =
                intTotalVansEZM +
                ((arrVanPriceTransToStorageUK[n] * 1 +
                  arrVanPriceTransFromStorageEU[n] * 1) *
                  Discounts[n] *
                  salesRate) /
                  CurrencyUsedValue /
                  0.9;
              if (intTotalVansEZM < 500) {
                intTotalVansEZM = 500;
              } else intTotalVansEZM;
            }
          } else {
            if (verifyDeliveryCountry === "United Kingdom") {
              intTotalVansEZM =
                intTotalVansEZM +
                ((arrVanPriceTransToStorageEU[n] * 1 +
                  arrVanPriceTransFromStorageUK[n] * 1) *
                  Discounts[n] *
                  salesRate) /
                  CurrencyUsedValue /
                  0.9;
              if (intTotalVansEZM < 500) {
                intTotalVansEZM = 500;
              } else intTotalVansEZM;
            } else {
              intTotalVansEZM =
                intTotalVansEZM +
                ((arrVanPriceTransToStorageEU[n] * 1 +
                  arrVanPriceTransFromStorageEU[n] * 1) *
                  Discounts[n] *
                  salesRate) /
                  CurrencyUsedValue /
                  0.9;
              if (intTotalVansEZM < 500) {
                intTotalVansEZM = 500;
              } else intTotalVansEZM;
            }
          }
        } else {
          if (verifyCollectionCountry === "United Kingdom") {
            if (verifyDeliveryCountry === "United Kingdom") {
              intTotalVansLNG =
                intTotalVansLNG +
                ((arrVanPriceTransToStorageUK[n] * 1 +
                  arrVanPriceTransFromStorageUK[n] * 1) *
                  Discounts[n] *
                  salesRate) /
                  CurrencyUsedValue /
                  0.9;
            } else {
              intTotalVansLNG =
                intTotalVansLNG +
                ((arrVanPriceTransToStorageUK[n] * 1 +
                  arrVanPriceTransFromStorageEU[n] * 1) *
                  Discounts[n] *
                  salesRate) /
                  CurrencyUsedValue /
                  0.9;
            }
          } else {
            if (verifyDeliveryCountry === "United Kingdom") {
              intTotalVansLNG =
                intTotalVansLNG +
                ((arrVanPriceTransToStorageEU[n] * 1 +
                  arrVanPriceTransFromStorageUK[n] * 1) *
                  Discounts[n] *
                  salesRate) /
                  CurrencyUsedValue /
                  0.9;
            } else {
              intTotalVansLNG = intTotalVansLNG + finalPrice;
            }
          }
        }
      } else {
        for (var x = 0; x < arrVansSize.length; x++) {
          if (parseInt(arrVansSize[x]) < 11) {
            finalPrice =
              ((arrVanPriceEZM[n] * Discounts[n] * salesRate) /
                CurrencyUsedValue /
                0.9) *
              1.1;
          } else {
            finalPrice =
              (arrVanPriceEZM[n] * Discounts[n] * salesRate) /
              CurrencyUsedValue /
              0.9;
          }
        }
        if (stanDistance <= 500) {
          finalPrice *= 1.05;
        }
        if (finalPrice < 526.315789474) {
          finalPrice = 526.315789474;
        }
        intTotalVansEZM = intTotalVansEZM + finalPrice; //test
        if (arrVanCostEZM[n] - arrVanCostLNG[n] < intLoadNGo * -1) {
        } else {
          for (var x = 0; x < arrVansSize.length; x++) {
            if (parseInt(arrVansSize[x]) < 11) {
              finalPrice =
                ((arrVanPriceLNG[n] * Discounts[n] * salesRate) /
                  CurrencyUsedValue /
                  0.9) *
                1.1;
            } else {
              finalPrice =
                (arrVanPriceLNG[n] * Discounts[n] * salesRate) /
                CurrencyUsedValue /
                0.9;
            }
          }
          if (stanDistance <= 500) {
            finalPrice *= 1.05;
          }
          if (finalPrice < 526.315789474) {
            finalPrice = 526.315789474;
          }
          intTotalVansLNG = intTotalVansLNG + finalPrice;
        }
      }
    } else {
      if (FreeEasyMoves === "true") {
        intTotalVansLNG =
          intTotalVansLNG +
          (arrVanPriceLNG[n] * Discounts[n] * salesRate) / 0.9;
      } else {
        intTotalVansEZM =
          intTotalVansEZM +
          (arrVanPriceEZM[n] * Discounts[n] * salesRate) / 0.9;
      }
    }
  }
}
var PriceTotal = (arrVanPriceEZM[0] * salesRate) / CurrencyUsedValue / 0.9;
if(verifyCollectionCountry == "Sweden"){
    var CurrencyUsed = "SEK";
    var CurrencySymbol = "kr";
    var CurrencyUsedValue = 0.095
    PriceTotal = (arrVanPriceEZM[0] * salesRate) / CurrencyUsedValue / 0.9;
}
//end

var floatCustFees = 0.0;
var numberOfVansCustoms = LoadSize / 20;
numberOfVansCustoms = Number(numberOfVansCustoms.toFixed(0));

if (customsCost > 0) {
  floatCustFees = customsCost;
  if (
    (verifyCollectionCountry == "Norway" &&
      verifyDeliveryCountry == "Switzerland") ||
    (verifyCollectionCountry == "Switzerland" &&
      verifyDeliveryCountry == "Norway")
  ) {
    floatCustFees = 500;
  }
  if (numberOfVansCustoms != 0) {
    floatCustFees *= numberOfVansCustoms;
  }
}
var floatFerryFees = 0.0;
var numberOfVansCustoms = LoadSize / 20;
numberOfVansCustoms = Number(numberOfVansCustoms.toFixed(0));
//#45 Prepare sms message and send if draft not required to be created.
var strName1;
var strPhone1;

strName1 = FirstName;
strPhone1 = Phone;
strEmail1 = Email;

var strMessageEU =
  "Hello " +
  strName1 +
  "," +
  " We have sent you a relocation quote by email .You can contact us on +442039662905";
var strMessageFR =
  "Hello " +
  strName1 +
  "," +
  " We have sent you a relocation quote by email .You can contact us on +442039662905";
var strMessageIT =
  "Hello " +
  strName1 +
  "," +
  " We have sent you a relocation quote by email .You can contact us on +442039662905";
var strMessageDE =
  "Hello " +
  strName1 +
  "," +
  " We have sent you a relocation quote by email .You can contact us on +442039662905";
var strMessageSE =
  "Hello " +
  strName1 +
  "," +
  " We have sent you a relocation quote by email .You can contact us on +442039662905";
var strMessageES =
  "Hello " +
  strName1 +
  "," +
  " We have sent you a relocation quote by email .You can contact us on +442039662905";
var VoxSMSCountries = {
  // object of listkeys for every country
  French: strMessageFR,
  Italy: strMessageIT,
  Spain: strMessageES,
  Germany: strMessageDE,
  Sweden: strMessageSE,
  English: strMessageEU
};

if (CountryAssigned) {
  var SMSmessage = VoxSMSCountries[CountryAssigned]; //takes CountryAssigned and assigns its key to SMSmessage variable
}

var SMSmessage = encodeURI(SMSmessage);
if (previewEmail != "false") {
  var sendSMS = platform.api.get(
    "https://df3.europeanmoving.eu/api/v2/VoxSMS?api_key=813b0d263f902fc8118336c76779a019a6ba541eeca062b08e877a9f27a941bb&phoneNumber=" +
      Phone +
      "&message=" +
      SMSmessage
  );
}

//#45 End

//#46 Prepare Guide Cost creation for CRM
var Guide_Cost =
  stanDistance *
  0.5 *
  arrVansSize.length *
  (1 - (arrVansSize.length - 1) * 0.05);

//added AF 24/11/17 for min cost
if (Guide_Cost < 400) {
  Guide_Cost = 400;
}
// added AF End

var Guide_Margin =
  (1 - Guide_Cost / (arrVanPriceEZM[0] * arrVansSize.length)) * 100;

//added AF 24/11/17 for min cost and margin
if (Guide_Cost == 400) {
  Guide_Margin = 30 - 5 * arrVansSize.length - 5;
}
// added AF End

var estimatedCost;
var taxRegion = "";
if (lTax == "23") {
  taxRegion = "Ireland";
}
if (lTax == "20") {
  //if (stanOrigin.includes("France")) {
  if (stanOrigin.endsWith("France")) {
    taxRegion = "France";
  } else {
    taxRegion = "United Kingdom";
  }
  if (lTax == "17") {
    taxRegion = "Luxembourg";
  }
} else {
  taxRegion = "Malta";
}

if (verifyCollectionCountry === "Switzerland") {
  taxRegion = "Switzerland";
}
if (verifyDeliveryCountry === "Switzerland") {
  taxRegion = "Switzerland";
}
if (verifyCollectionCountry === "Norway") {
  taxRegion = "Norway";
}
if (verifyDeliveryCountry === "Norway") {
  taxRegion = "Norway";
}

estimatedCost =
  (arrVanPriceEZM[0] + FerryCost) *
  arrVansSize.length *
  (1 - (arrVansSize.length - 1) * 0.05) *
  0.95;
//}
var Guide_Profit = estimatedCost - Guide_Cost;
//#47 Return VanCost Array

//Test Separete vans
let priceForEZM = 0;
let priceForLNG = 0;
let pricesForVans = [];
let allVansSum = 0;
let allVansSumWithotVAT = 0;
let amountOfVans = 0;
if (LoadSize <= 22) {
  priceForEZM = intTotalVansEZM;
  priceForLNG = intTotalVansLNG;
  amountOfVans = 1;
} else if (LoadSize >= 23) {
  amountOfVans =
    LoadSize % 20 === 0 ? LoadSize / 20 : Math.round(LoadSize / 20) + 1;
}
const prices = (amount_of_vans, price) => {
  let arr = [];
  for (let i = 0; i < amount_of_vans - 1; i++) {
    arr.push(price * 0.9);
  }

  return [PriceTotal, ...arr];
};
pricesForVans = prices(amountOfVans, PriceTotal);

if (pricesForVans.length > 1) {
  allVansSumWithotVAT = pricesForVans.reduce((a, b) => a + b);
} else if (ServiceT == "Easy Moves") {
  allVansSumWithotVAT = priceForEZM;
} else if (ServiceT == "Load N Go") {
  allVansSumWithotVAT = priceForLNG;
}
allVansSumWithotVAT = allVansSumWithotVAT.toFixed(2);
var netPrice =
  (allVansSumWithotVAT * seasonalMultiplier * 1.05) / CurrencyUsedValue;
var transportPrice = netPrice * 0.65;
allVansSum =
  (allVansSumWithotVAT * Number(`1.${TaxRate}`) * seasonalMultiplier * 1.05) /
  CurrencyUsedValue;
//addding all Extras to the price
if (verifyCollectionCountry != "United Kingdom") {
  EMPCollectionCostUK = 0;
} else {
  EMPCollectionCost = 0;
}
if (verifyDeliveryCountry != "United Kingdom") {
  EMPDeliveryCostUK = 0;
} else {
  EMPDeliveryCost = 0;
}
allVansSum += EMPCollectionCost;
allVansSum += EMPCollectionCostUK;
allVansSum += EMPDeliveryCostUK;
allVansSum += EMPDeliveryCost;
allVansSum += PackingPrice;
allVansSum += UnpackingPrice;
allVansSum += TailLiftPrice;
allVansSum += HoldAVanPrice;
allVansSum += ExternalLiftPrice;
allVansSum += UpperFloorDeliveryFee;
allVansSum += UpperFloorCollectionFee;
allVansSum += floatCustFees;

allVansSum = allVansSum.toFixed(2);
//end

//Test Van of cost
var numberOfVans = LoadSizeBeforeRound / 20; //get number of vans
var wholeNumberOfVans = 0;
var decimalPartOfVan = 0;
var num1 = Number(numberOfVans.toFixed(2)[numberOfVans.toFixed(1).length - 1]); //getting first decimal of the number of vans
if (num1 >= 8) {
  numberOfVans = Math.round(numberOfVans); //if number of vans is more then.8 round to 1
}
if (Number.isInteger(numberOfVans)) {
  wholeNumberOfVans = parseInt(numberOfVans); //getting the whole number of vans
  decimalPartOfVan = numberOfVans - wholeNumberOfVans; //getting decimal part of the van
} else {
  wholeNumberOfVans = parseInt(numberOfVans); //getting the whole number of vans
  decimalPartOfVan = numberOfVans - wholeNumberOfVans;
}

var priceForWholeVan = Number(vanCost.transportCostsEZM); // getting price for 1 van
var priceForDecimalPartOfTheVan = 0;
if (numberOfVans < 1) {
  priceForDecimalPartOfTheVan = priceForWholeVan;
} else {
  priceForDecimalPartOfTheVan = priceForWholeVan * decimalPartOfVan; //price for any decimal part
}
var arrPriceForVans = [];

for (var i = 0; i < wholeNumberOfVans; i++) {
  arrPriceForVans.push({
    vanNumber: i + 1,
    vanPrice: priceForWholeVan
  });
}

if (decimalPartOfVan !== 0) {
  arrPriceForVans.push({
    vanNumber: arrPriceForVans.length + 1,
    vanPrice: priceForDecimalPartOfTheVan
  });
}

//end
var parsePhoneNumber = phoneNumber => {
  var phone = phoneNumber;
  phone = phone.replace(/\D/g, "");
  if (phone.substring(0, 2) == "00") {
    return phone;
  } else if (phone[0] == "0") {
    phone = phone.slice(1, phone.length);
    phone = "00" + phone;
  } else {
    phone = "00" + phone;
  }
  return phone;
};
var PhoneUpdate = parsePhoneNumber(dontTrustOtherPhones);

// Unique quote ID generation
let uniqueId = Math.random()
  .toString(22)
  .substr(2, 17);
let uuidQuote;
uuidQuote = sentQuotes !== "false" ? sentQuotes + ", " + uniqueId : uniqueId;
// end

var intTestStatus = 0;

if (CRMSystemStatus === "New Lead" ||
CRMSystemStatus === "New Lead - Welcolme Sent" ||
CRMSystemStatus === "New Lead - Welcome Sent") {
  intTestStatus = 1;
}
let CRM_Data = {
  System_Status: "System Quoted",
  Service_Type: ServiceT,
  Phone: PhoneUpdate,
  Sent_quotes_IDs: uuidQuote,
  Last_Quote_ID: uniqueId,
  Distnace_in_KM: "" + stanDistance,
  Seasonal_Multiplier: "" + seasonalMultiplier,
  UpperFloorCollectionCost: "" +(UpperFloorCollectionFee * 1.4).toFixed(2),
  UpperFloorDelCosts: "" + (UpperFloorCollectionFee * 1.4).toFixed(2),
  Upper_Floor_Delivery_Cost:"" + UpperFloorDelCosts.toFixed(2),
  Upper_Floor_Collection_Cost: "" + UpperFloorColCosts.toFixed(2),
  Extra_Manpower_Collection_For_UK: "" + EMPCollectionCostUK,
  Extra_Manpower_Collection1: "" + EMPCollectionCost,
  Extra_Manpower_Delivery_For_UK: "" + EMPDeliveryCostUK,
  Extra_Manpower_Delivery1: "" + EMPDeliveryCost,
  PackingPrice: "" + PackingPrice,
  UnpackingPrice: "" + UnpackingPrice,
  TailLiftPrice: "" + TailLiftPrice,
  HoldAVanPrice: "" + HoldAVanPrice,
  Extra_Manpower2: EMPCollectionOrDelivery,
  Called: CurrencyUsed, //Currency of the quote
  Estimated_Transport_Costs: "" + AFTotal,
  Nifty_Price1: "" + allVansSum,
  NET_PRICE: "" + netPrice.toFixed(2),
  Guide_est_Profit: "" + transportPrice.toFixed(2), //Transport Costs
  VAT_Rate: "" + TaxRate,
  exhcnageRate: "" + CurrencyUsedValue,
  Cost_Breakdown:`
  Nett Sell EUR (EZM): ${totalPriceEZM}    
  Nett Sell EUR (LNG): ${totalPriceLNG} 
  Cost EUR (EZM): ${totalCostEZM}    
  Cost EUR (LNG):  ${totalCostLNG}    
  Cost LNG Downgrade:  ${dynLoadNGoFee}    
  Cost Dover Ferry:  ${doverferrycost}    
  Cost Additional Area/Ferry:  ${AltFerry}    
  Cost Upper Floor Collection:  ${UpperFloorColCosts}    
  Cost Upper Floor Delivery:  ${UpperFloorDelCosts}    
  Cost Per KM: ${dynCostPerKM}    
  Distance Direct: ${stanDistance.toFixed(1)}     
  Distance To Store: ${stanDistanceToStore.toFixed(1)}    
  Distance From Store:  ${stanDistanceFromStore.toFixed(1)} 
  ${waypointNotes}`
}
if (intTestStatus != 1) {
  delete CRM_Data['System_Status']
}

arrPriceForVans.forEach(
  el =>
    CRM_Data[`Van Cost for the ${el.vanNumber} van`] = el.vanPrice.toFixed(2)
    );

if(pricesForVans.length!=0){
pricesForVans.forEach(
    (el, index) => { 
        CRM_Data[`Price for the ${index + 1} van`] = el.toFixed(2)
    }
  )
}

let content = JSON.stringify({
  data: [
    CRM_Data
  ]
})

let res = platform.api.put("https://www.zohoapis.com/crm/v2/Contacts/" + params.ContactID, content, {
  "headers": {
    "Authorization": "Zoho-oauthtoken " + crm_token,
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
})

return {
  "Sales EUROs": {
    totalPriceTransStorage: totalPriceTransStorage
  },
  Location: {
    stanOrigin: stanOrigin,
    stanDestination: stanDestination,
    stanDistance: stanDistance,
    intStorageTransDist: intStorageTransDist,
    stanDistanceToStore: stanDistanceToStore,
    stanDistanceFromStore: stanDistanceFromStore,
    verifyDeliveryCountry: verifyDeliveryCountry,
    verifyCollectionCountry: verifyCollectionCountry,
    Collection_Latitude: Collection_Latitude,
    Collection_Longitutde: Collection_Longitutde,
    Delivery_Latitude: Delivery_Latitude,
    Delivery_Longitutde: Delivery_Longitutde
  },
  Load: {
    LoadSize: LoadSize,
    LoadTrueSize: LoadTrueSize,
    LoadSizeTemp: LoadSizeTemp,
    CRmSystemStatus: CRMSystemStatus
  },
  Storage: {
    intStorageWeeks: intStorageWeeks,
    arrVanPriceTransStorage: arrVanPriceTransStorage,
    arrVanPriceMarginTransStorage: arrVanPriceMarginTransStorage,
    arrVanCostTransStorage: arrVanCostTransStorage,
    totalPriceTransStorage: totalPriceTransStorage,
    totalCostTransStorage: totalCostTransStorage,
    arrVanPriceTransFromStorageUK: arrVanPriceTransFromStorageUK,
    arrVanPriceMarginTransFromStorageUK: arrVanPriceMarginTransFromStorageUK,
    arrVanCostTransFromStorageUK: arrVanCostTransFromStorageUK,
    totalPriceTransFromStorageUK: totalPriceTransFromStorageUK,
    totalCostTransFromStorageUK: totalCostTransFromStorageUK,
    arrVanPriceTransToStorageUK: arrVanPriceTransToStorageUK,
    arrVanPriceMarginTransToStorageUK: arrVanPriceMarginTransToStorageUK,
    arrVanCostTransToStorageUK: arrVanCostTransToStorageUK,
    totalPriceTransToStorageUK: totalPriceTransToStorageUK,
    totalCostTransToStorageUK: totalCostTransToStorageUK,
    arrVanPriceMarginTransFromStorageEU: arrVanPriceMarginTransFromStorageEU,
    arrVanCostTransFromStorageEU: arrVanCostTransFromStorageEU,
    totalPriceTransFromStorageEU: totalPriceTransFromStorageEU,
    totalCostTransFromStorageEU: totalCostTransFromStorageEU,
    arrVanPriceTransToStorageEU: arrVanPriceTransToStorageEU,
    arrVanPriceMarginTransToStorageEU: arrVanPriceMarginTransToStorageEU,
    arrVanCostTransToStorageEU: arrVanCostTransToStorageEU,
    totalPriceTransToStorageEU: totalPriceTransToStorageEU,
    totalCostTransToStorageEU: totalCostTransToStorageEU
  },
  "costs EUROs": {
    AFTotalVan: AFTotalVan,
    AFTotalTransStorage: AFTotalTransStorage,
    AFTotal: AFTotal,
    totalCostEZM: totalCostEZM,
    UpperFloorColCosts: UpperFloorColCosts,
    UpperFloorDelCosts: UpperFloorDelCosts,
    WeekendColCosts: WeekendColCosts,
    WeekendDelCosts: WeekendDelCosts,
    FerryCost: FerryCost,
    TaxRate: TaxRate,
    customsCost: customsCost,
    salesRate: salesRate,
    AdditionalFees: AFAdditional
  },
  "Pricing Details For CRM": {
    "Nett Sell EUR (EZM)": totalPriceEZM,
    "Nett Sell EUR (LNG)": totalPriceLNG,
    "Cost EUR (EZM)": totalCostEZM,
    "Cost EUR (LNG)": totalCostLNG,
    "Cost LNG Downgrade": dynLoadNGoFee,
    "Cost Dover Ferry": doverferrycost,
    "Cost Additional Area/Ferry": AltFerry,
    "Cost Upper Floor Collection": UpperFloorColCosts,
    "Cost Upper Floor Delivery": UpperFloorDelCosts,
    "Cost Per KM": dynCostPerKM,
    "Distance Direct": stanDistance,
    "Distance To Store": stanDistanceToStore,
    "Distance From Store": stanDistanceFromStore,
    "Packing Price": PackingPrice, // Packing Service test
    "Price for UpperFloorCollection": UpperFloorCollectionFee.toFixed(2) * 1.4,
    "Price for UpperFloorDelivery": UpperFloorDeliveryFee.toFixed(2) * 1.4,
    "Price for 1-st Van": priceForEZM,
    "Price for 2-nd Van": priceForLNG,
    "Load Size": LoadSizeBeforeRound,
    "VAN COST VAR TEST": vanCost.transportCostsEZM,
    "VAn COST VAR TEST1": arrPriceForVans[0].vanPrice,
    "VAN PRICE TEST": arrPriceForVans,
    StrPhone1: Phone,
    SendSMS: sendSMS,
    VANPRICE: pricesForVans,
    AllVansSize: allVansSum,
    uniqueId: uniqueId,
    amountOfVans: amountOfVans,
    PriceTotal: allVansSumWithotVAT,
    token: crm_token,
    testres: ArchiveJSON,
    testing: res
  }
};
