import React from "react";
import { useState } from "react";
import "./Form.css";

function Form() {

  const [nums, setNums] = useState("");
  const [selectOperation, setSelectOperation] = useState("");
  const [result, setResult] = useState(0);

  function updateInput(event) {
    setNums(event.target.value);
  }

  function handleSelectChange(event) {
    setSelectOperation(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (selectOperation === "sum") {
      setResult(nums.split(",").reduce((acc,currVal) => acc + Number(currVal), 0));
    } else if (selectOperation === "average") {
      setResult(nums.split(",").reduce((acc,currVal) => acc + Number(currVal), 0)/nums.split(",").length);
    } else if (selectOperation === "mode") {
      const resultObj = {};
      let most = 0;
      let finalKey = "";
      let numsArray = nums.split(",");
      for(let num in numsArray) {
        resultObj[numsArray[num]] = (resultObj[numsArray[num]] || 0) + 1;
      }
      for(let numVal in resultObj) {
        const value = resultObj[numVal]
        if (value > most) {
          most = value;
          finalKey = numVal;
        }
      }
      setResult(finalKey)
  }
}


  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input id="values" name="values" type="text" value={nums} onChange={updateInput}/>
        <select id="operation" name="operation" onChange={handleSelectChange}>
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
      <section id="result">
        <p>{result}</p>
      </section>
    </>
  );
}

export default Form;
