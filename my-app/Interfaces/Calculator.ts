/*
         Calculates payment per month using the principle, yearly interest rate, and years as inputs
         Unit conversions are done for interestRate(yearly percent to monthly decimal) and the timePeriod(years to months)
    */
    
    export function monthlyMortagePayment (principle:number, interestRate:number, timePeriod:number){
        let m = 0;
        let roundedFinal = 0;
        interestRate = interestRate/(12*100);
        timePeriod = timePeriod * 12;
        m = (principle * interestRate) / (1 - Math.pow(1 + interestRate, -timePeriod))
        roundedFinal = Math.round(m * 100) / 100
        return roundedFinal;
        
    }
