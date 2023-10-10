import React from "react";
import"./App.css";

function App(){
  let data ="Code4Education";

  const demo= () => {
    data="Akash Domadiya"
    alert(data)
  };
  return(
    <>
    <div className="App">
    <h1>{data}</h1>
    <button onClick={()=> demo()}>Click Me</button>
    </div>
    </>
  )
};
export default App;