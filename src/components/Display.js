import React from 'react'

export const Display = (props)=> {
  return (
    <div>
      <p>{props.objectState.name}'s time</p>
      <p>{props.objectState.hours} : {props.objectState.minutes} : {props.objectState.seconds}</p>
    </div>
  );
}
