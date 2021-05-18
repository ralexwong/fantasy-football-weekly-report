import React, { useState } from 'react';

import OptionalInput from './OptionalInput';

import { Jumbotron } from 'reactstrap';

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
      <Jumbotron className="input__jumbotron">
        <p className="heading-tertiary">Optional Inputs</p>

        {inputs.map((input, i) => {
          return <div className='accordian' key={i}>
            <div className='accordian__title' onClick={() => handleClick(i)} >
              {input}
            </div>
            <OptionalInput platform={props.platform} input={input} open={open[i]} />
          </div>
        })}

      </Jumbotron>
    </>
  );
}