import React, { useState } from 'react';

import OptionalInput from './OptionalInput';

const inputs = ['Season', 'Title', 'Caption']

export default function OptionalInputs(props) {

  const [open, setOpen] = useState(new Array(inputs.length).fill(false))
  const handleClick = (i) => {
    console.log(i)
    let set = [...open]
    set[i] = !set[i]
    setOpen(set)
  }

  return (
    <>
      <div className="input__jumbotron">
        <p className="heading-tertiary">Optional Inputs</p>

        {inputs.map((input, i) => {
          return <div className='accordian' key={i}>
            <div className='accordian__title' onClick={() => handleClick(i)} >
              {input} <span className={open[i] === true ? 'accordian__arrow--active' : 'accordian__arrow'}>V</span>
            </div>
            <OptionalInput platform={props.platform} input={input} open={open[i]} />
          </div>
        })}

      </div>
    </>
  );
}