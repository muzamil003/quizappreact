import './App.css';
import { useState } from 'react';

function App() {
  const [questionscount , setquestioncount] = useState(0)
  const [score , setScore]=useState(0)
  const [result, setResult] = useState(false)
  const questionData = [
    {
      question: "who is founder of pakistan",
      options: [
        "MA JINNAH",
        "LIAQAT ALI KHAN",
        "FATIMA JINNAH",
        "BEGUM RA'ANA LIAQAT"
      ],
      answer: "MA JINNAH"
    },
    {
      question: "who is founder of india",
      options: [
        "GANDHI",
        "LIAQAT ALI KHAN",
        "FATIMA JINNAH",
        "BEGUM RA'ANA LIAQAT"
      ],
      answer: "GANDHI"
    },
    {
      question: "who is 1st PM of pakistan",
      options: [
        "MA JINNAH",
        "LIAQAT ALI KHAN",
        "FATIMA JINNAH",
        "BEGUM RA'ANA LIAQAT"
      ],
      answer: "LIAQAT ALI KHAN"
    },
    {
      question: "In which year Pakistan played first match?",
      options: [
        "October 1952",
        "December 1952",
        "November 1948",
        "August 1948"
      ],
      answer: "October 1952"
    },
  ]

  const next = (e)=>{
    const next = questionscount+1
    if(next<questionData.length){
      setquestioncount(next)    
    }else{
      console.log("finish");
      setResult(true)
      
    }
    if(e ===questionData[questionscount].answer){
      setScore((prev)=>prev+1)
    }
    // console.log(e);
    // console.log(next,"count==>", questionscount);
  }
  console.log(result);
    return (
     result ? <div>
      resutlt {score}
     </div>
     :
     <div><h1>QUIZ APP</h1>
     <div><h3>QUESTION {questionscount+1}/{questionData.length}</h3></div>
     <div>
       {
         questionData[questionscount].question
       }
       </div>
     <div>
       {
         questionData[questionscount].options.map((e,i)=>{
           return <button key={i} onClick={()=>next(e)}>
             {
               e
             }
           </button>
          }) }  
       
       </div>
       <div>
         {
           score
         }
       </div>
     
     
     
     
     </div>
      
    );

}

export default App;
