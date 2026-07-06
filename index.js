const getNewHealthScore = (data) => {
    var org = ""
  
    try {
      var days = data.daysSinceLastCalving;
      var months = data.noOfMonths || data.noOfMonthsIfPregnant;
      var pregnancy = data.pregnancyStatus;
      if (!pregnancy) {
        pregnancy = data.pregnancyStatusPregnantORNotPregnant;
        if (pregnancy && pregnancy.toLowerCase() == "pregnant") {
          pregnancy = "yes"
        }
        else if (pregnancy && pregnancy.toLowerCase() == "not pregnant") {
          pregnancy = "no"
        }
      }
      pregnancy = pregnancy.toLowerCase();
      let cattleType = data.cattleType || data.stage;
  
      var color = data.BCS ? data.BCS.HealthIndex : data.mlBcsScore || '' ;
  
      if (cattleType.toLowerCase() == 'cow') {
        if (days >= 0 && days <= 30) {
          if (color == "1.5" || color == "4.5") {
            org = 10;
          }
          else if (color == "1.75" || color == "4.25") {
            org = 20;
          }
          else if (color == "2.00" || color == "4.00" || color == "2" || color == "4") {
            org = 40;
          }
          else if (color == "2.25" || color == "3.75") {
            org = 60;
          }
          else if (color == "2.5" || color == "3.5") {
            org = 75;
          }
          else if (color == "2.75" || color == "3.25") {
            org = 90;
          }
          else if (color == "3.00" || color == "3") {
            org = 100;
          }
        }
        else if (days >= 31 && days <= 100) {
          if (color == "1.25" || color == "4.25") {
            org = 10;
          }
          else if (color == "1.5" || color == "4.00" || color == "4") {
            org = 20;
          }
          else if (color == "1.75" || color == "3.75") {
            org = 40;
          }
          else if (color == "2" || color == "2.00" || color == "3.5") {
            org = 60;
          }
          else if (color == "2.25" || color == "3.25") {
            org = 75;
          }
          else if (color == "2.5" || color == "3" || color == "3.00") {
            org = 90;
          }
          else if (color == "2.75") {
            org = 100;
          }
        }
        else if (days >= 101 && days <= 200) {
          if (color == "1.5" || color == "4.5") {
            org = 10;
          }
          else if (color == "1.75" || color == "4.25") {
            org = 20;
          }
          else if (color == "2.00" || color == "4.00" || color == "2" || color == "4") {
            org = 40;
          }
          else if (color == "2.25" || color == "3.75") {
            org = 60;
          }
          else if (color == "2.5" || color == "3.5") {
            org = 75;
          }
          else if (color == "2.75" || color == "3.25") {
            org = 90;
          }
          else if (color == "3.00" || color == "3") {
            org = 100;
          }
        }
        else if (days >= 201 && days <= 305) {
          if (color == "1.75" || color == "5.00" || color == "5") {
            org = 10;
          }
          else if (color == "2.00" || color == "4.75" || color == "2") {
            org = 20;
          }
          else if (color == "2.25" || color == "4.5") {
            org = 40;
          }
          else if (color == "2.5" || color == "4.25") {
            org = 60;
          }
          else if (color == "2.75" || color == "4.00" || color == "4") {
            org = 75;
          }
          else if (color == "3.00" || color == "3" || color == "3.75" || color == "3.5") {
            org = 90;
          }
          else if (color == "3.25") {
            org = 100;
          }
        }
        else if (days >= 306) {
          if (color == "2" || color == "2.00" || color == "5" || color == "5.00") {
            org = 10;
          }
          else if (color == "2.25" || color == "4.75") {
            org = 20;
          }
          else if (color == "2.5" || color == "4.5") {
            org = 40;
          }
          else if (color == "2.75" || color == "4.25") {
            org = 60;
          }
          else if (color == "3.00" || color == "3" || color == "4.00" || color == "4") {
            org = 75;
          }
          else if (color == "3.25" || color == "3.75") {
            org = 90;
          }
          else if (color == "3.5") {
            org = 100;
          }
        }
      }
      else if (cattleType.toLowerCase() == 'heifer') {
        if (pregnancy == 'no') {
          if (color == "1.75" || color == "4.75") {
            org = 10;
          }
          else if (color == "2.00" || color == "4.5") {
            org = 20;
          }
          else if (color == "2.25" || color == "4.25") {
            org = 40;
          }
          else if (color == "2.5" || color == "4.00" || color == "4") {
            org = 60;
          }
          else if (color == "2.75" || color == "3.75") {
            org = 75;
          }
          else if (color == "3.00" || color == "3" || color == "3.5") {
            org = 90;
          }
          else if (color == "3.25") {
            org = 100;
          }
        }
        else if (pregnancy == 'yes' && (months >= 1 && months <= 8)) {
          if (color == "1.75" || color == "5.00" || color == "5") {
            org = 10;
          }
          else if (color == "2.00" || color == "4.75") {
            org = 20;
          }
          else if (color == "2.25" || color == "4.5") {
            org = 40;
          }
          else if (color == "2.5" || color == "4.25") {
            org = 60;
          }
          else if (color == "2.75" || color == "4" || color == "4.00") {
            org = 75;
          }
          else if (color == "3.25" || color == "3.00" || color == "3" || color == "3.75") {
            org = 90;
          }
          else if (color == "3.5") {
            org = 100;
          }
        }
        else if (pregnancy == 'yes' && months == 9) {
          if (color == "2.75" || color == "5.25") {
            org = 10;
          }
          else if (color == "3.00" || color == "3" || color == "5.00" || color == "5") {
            org = 20;
          }
          else if (color == "3.25" || color == "4.75") {
            org = 40;
          }
          else if (color == "3.5" || color == "4.5") {
            org = 60;
          }
          else if (color == "3.75" || color == "4.25") {
            org = 75;
          }
          else if (color == "4.00" || color == "4") {
            org = 90;
          }
        }
      }
      else if (cattleType.toLowerCase() == 'buffalo') {
        if (days >= 0 && days <= 100) {
          if (color == "1.5" || color == "4.5") {
            org = 10;
          }
          else if (color == "1.75" || color == "4.25") {
            org = 20;
          }
          else if (color == "2.00" || color == "4.00" || color == "2" || color == "4") {
            org = 40;
          }
          else if (color == "2.25" || color == "3.75") {
            org = 60;
          }
          else if (color == "2.5" || color == "3.5") {
            org = 75;
          }
          else if (color == "2.75" || color == "3.25") {
            org = 90;
          }
          else if (color == "3.00" || color == "3") {
            org = 100;
          }
        }
        else if (days >= 100 && days <= 200) {
          if (color == "2" || color == "5") {
            org = 10;
          }
          else if (color == "2.25" || color == "4.75") {
            org = 20;
          }
          else if (color == "2.5" || color == "4.5") {
            org = 40;
          }
          else if (color == "2.75" || color == "4.25") {
            org = 60;
          }
          else if (color == "3" || color == "4") {
            org = 75;
          }
          else if (color == "3.25" || color == "3.75") {
            org = 90;
          }
          else if (color == "3.5") {
            org = 100;
          }
        }
        else if (days > 200 && days <= 250) {
          if (color == "1.75" || color == "4.75") {
            org = 10;
          }
          else if (color == "2" || color == "4.5") {
            org = 20;
          }
          else if (color == "2.25" || color == "4.25") {
            org = 40;
          }
          else if (color == "2.5" || color == "4") {
            org = 60;
          }
          else if (color == "2.75" || color == "3.75") {
            org = 75;
          }
          else if (color == "3" || color == "3.5") {
            org = 90;
          }
          else if (color == "3.25") {
            org = 100;
          }
        }
        else if (days > 250 && days <= 330) {
          if (color == "2" || color == "5") {
            org = 10;
          }
          else if (color == "2.25" || color == "4.75") {
            org = 20;
          }
          else if (color == "2.5" || color == "4.5") {
            org = 40;
          }
          else if (color == "2.75" || color == "4.25") {
            org = 60;
          }
          else if (color == "3" || color == "4") {
            org = 75;
          }
          else if (color == "3.25" || color == "3.75") {
            org = 90;
          }
          else if (color == "3.5") {
            org = 100;
          }
        }
        else if (days > 330) {
          if (color == "2" || color == "5") {
            org = 10;
          }
          else if (color == "2.25" || color == "4.75") {
            org = 20;
          }
          else if (color == "2.5" || color == "4.5") {
            org = 40;
          }
          else if (color == "2.75" || color == "4.25") {
            org = 60;
          }
          else if (color == "3" || color == "4") {
            org = 75;
          }
          else if (color == "3.25" || color == "3.75") {
            org = 90;
          }
          else if (color == "3.5") {
            org = 100;
          }
        }
      }
      else if (cattleType.toLowerCase() == 'buffaloheifer') {
        if (pregnancy == 'no') {
          if (color == "1.75" || color == "4.75") {
            org = 10;
          }
          else if (color == "2.00" || color == "4.5") {
            org = 20;
          }
          else if (color == "2.25" || color == "4.25") {
            org = 40;
          }
          else if (color == "2.5" || color == "4.00" || color == "4") {
            org = 60;
          }
          else if (color == "2.75" || color == "3.75") {
            org = 75;
          }
          else if (color == "3.00" || color == "3" || color == "3.5") {
            org = 90;
          }
          else if (color == "3.25") {
            org = 100;
          }
        }
        else if (pregnancy == 'yes' && (months >= 1 && months <= 9)) {
          if (color == "1.75" || color == "5.00" || color == "5") {
            org = 10;
          }
          else if (color == "2.00" || color == "4.75") {
            org = 20;
          }
          else if (color == "2.25" || color == "4.5") {
            org = 40;
          }
          else if (color == "2.5" || color == "4.25") {
            org = 60;
          }
          else if (color == "2.75" || color == "4" || color == "4.00") {
            org = 75;
          }
          else if (color == "3.25" || color == "3.00" || color == "3" || color == "3.75") {
            org = 90;
          }
          else if (color == "3.5") {
            org = 100;
          }
        }
        else if (pregnancy == 'yes' && months == 10) {
          if (color == "2.25" || color == "5.25") {
            org = 10;
          }
          else if (color == "2.5" || color == "5.00" || color == "5") {
            org = 20;
          }
          else if (color == "2.75" || color == "4.75") {
            org = 40;
          }
          else if (color == "3" || color == "4.5") {
            org = 60;
          }
          else if (color == "3.25" || color == "4.25") {
            org = 75;
          }
          else if (color == "3.5" || color == "4") {
            org = 90;
          }
          else if (color == "3.75") {
            org = 100;
          }
        }
      }
      else {
        org = "0"
      }
    } catch (e) {
      org = '0'
    }
    return org;
}
function calculateMarketValue(cattleData, currentMilkYield) {
    
    let marketValue = 0;

    let healthScore;
    try {
        healthScore = Number(getNewHealthScore(cattleData));
    } catch (e) {
        healthScore = 0;
    }
    const noOfMonths = cattleData.noOfMonths || cattleData.noOfMonthsIfPregnant;
    var pregnancy = cattleData.pregnancyStatus;
    if (!pregnancy) {
    pregnancy = cattleData.pregnancyStatusPregnantORNotPregnant;
    if (pregnancy && pregnancy.toLowerCase() == "pregnant") {
        pregnancy = "yes"
    }
    else if (pregnancy && pregnancy.toLowerCase() == "not pregnant") {
        pregnancy = "no"
    }
    }
    pregnancy = pregnancy.toLowerCase();

    const cattleType = cattleData.cattleType || '';
    

    console.log('Health Score:', healthScore);
    console.log('Pregnancy:', pregnancy);
    console.log('No of Months:', noOfMonths);
    console.log('Cattle Type:', cattleType);

    if(cattleType.toLowerCase() === 'cow' || cattleType.toLowerCase() === 'heifer') {
        
        // Health score based market value calculation
        if(healthScore == 100) {
            marketValue = 28000;
        } else if(healthScore == 90) {
            marketValue = 25000;
        } else if(healthScore == 75) {
            marketValue = 22000;
        } else if(healthScore == 60) {
            marketValue = 19000;
        } else if(healthScore == 40) {
            marketValue = 16000;
        } else if(healthScore <= 20) {
            marketValue = 13000;
        }

        // Pregnancy based market value calculation
        if(pregnancy === 'yes' && noOfMonths >= 1 && noOfMonths <= 4) {
            marketValue += 2000;
        } else if(pregnancy === 'yes' && noOfMonths >= 7 && noOfMonths <= 7) {
            marketValue += 5000;
        } else if(pregnancy === 'yes' && noOfMonths >= 8 && noOfMonths <= 10) {
            marketValue += 9000;
        }

        // Milk yield based market value calculation
        if(currentMilkYield <1) {
            marketValue += 0;
        } else if(currentMilkYield >= 1 && currentMilkYield <= 3) {
            marketValue += 6000;
        } else if(currentMilkYield >= 4 && currentMilkYield <= 6) {
            marketValue += 12000;
        } else if(currentMilkYield >= 7 && currentMilkYield <= 9) {
            marketValue += 18000;
        } else if(currentMilkYield >= 10 && currentMilkYield <= 12) {
            marketValue += 24000;
        } else if(currentMilkYield >= 12 && currentMilkYield <= 14) {
            marketValue += 30000;
        } else if(currentMilkYield >= 15) {
            marketValue += 36000;
        }
    } else if(cattleType.toLowerCase() === 'buffalo' || cattleType.toLowerCase() === 'buffaloheifer') {

        // Health score based market value calculation
        if(healthScore == 100) {
            marketValue = 38000;
        } else if(healthScore == 90) {
            marketValue = 35000;
        } else if(healthScore == 75) {
            marketValue = 32000;
        } else if(healthScore == 60) {
            marketValue = 29000;
        } else if(healthScore == 40) {
            marketValue = 26000;
        } else if(healthScore <= 20) {
            marketValue = 23000;
        }

        // Pregnancy based market value calculation
        if(pregnancy === 'yes' && noOfMonths >= 1 && noOfMonths <= 4) {
            marketValue += 3000;
        } else if(pregnancy === 'yes' && noOfMonths >= 7 && noOfMonths <= 7) {
            marketValue += 7000;
        } else if(pregnancy === 'yes' && noOfMonths >= 8 && noOfMonths <= 10) {
            marketValue += 14000;
        }

        // Milk yield based market value calculation
        if(currentMilkYield <1) {
            marketValue += 0;
        } else if(currentMilkYield >= 1 && currentMilkYield <= 3) {
            marketValue += 8000;
        } else if(currentMilkYield >= 4 && currentMilkYield <= 6) {
            marketValue += 16000;
        } else if(currentMilkYield >= 7 && currentMilkYield <= 9) {
            marketValue += 24000;
        } else if(currentMilkYield >= 10 && currentMilkYield <= 12) {
            marketValue += 32000;
        } else if(currentMilkYield >= 12 && currentMilkYield <= 14) {
            marketValue += 40000;
        } else if(currentMilkYield >= 15) {
            marketValue += 48000;
        }
    }

    return marketValue;
}

module.exports = {
    calculateMarketValue
};