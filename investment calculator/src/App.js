import React, { useState }  from 'react'; 
import './App.css';
import Header from './components/Header/Header';
import UserInput from './components/UserInput/UserInput';
import ResultTable from './components/ResultTable/ResultTable';

const App = () => { 
  const [input, setInput] = useState(null);
  
  const CalculateHandler = (formData) => {
    setInput(formData);
  }

  let yearlyData = [];
  if(input){
    const { 
      'current-savings' : currentSavings,
      'yearly-contribution' : yearlyContribution ,
      'expected-return' : expectedReturn , 
      duration }
    = input;

    let yearlyInterest;
    let currentSavedAmount = currentSavings;
    let InterestRate = expectedReturn / 100;

    for(let i = 0; i < duration; i++) {
      yearlyInterest = currentSavedAmount * InterestRate;
      currentSavedAmount += yearlyInterest + yearlyContribution;     

      yearlyData.push({
        year: i+1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavedAmount,
        yearlyContribution: yearlyContribution,
      }) 
    }

  }



  return (
    <div> 
      
      <Header />
      <UserInput  CalculateHandler={CalculateHandler}  />
      { input &&   <ResultTable yearlyData={yearlyData}
      initialInvestment={input['current-savings']} /> }
      { !input && <h4 style={{'textAlign': 'center'}}>No investment calculated yet.</h4> }

    </div>

  );
};

export default App;