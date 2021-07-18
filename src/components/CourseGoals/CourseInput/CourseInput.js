import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const[validCheck,setValidCheck]=useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    setValidCheck(true);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length>0) {
    props.onAddGoal(enteredValue);
    }
    else{
      setValidCheck(
        false
      );
      alert('Please enter a valid goal');
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!validCheck?'invalid':''}`}>
        <label>Course Goal</label>
        <input type="text" className={`form-control ${!validCheck?'invalidInput':''}`} onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
