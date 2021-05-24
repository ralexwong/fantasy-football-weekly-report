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
              <p>{input} <span className={`accordian__arrow ${open[i] === true ? 'accordian__arrow--active' : ''}`}><svg width="16" height="10">
    <polygon points="0,0 16,0 8,10"/>
</svg></span></p>
            </div>
            <OptionalInput platform={props.platform} input={input} open={open[i]} />
          </div>
        })}

      </div>
    </>
  );
}