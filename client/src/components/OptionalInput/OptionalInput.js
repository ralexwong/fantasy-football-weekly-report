import React, { useState } from 'react';
import { setEspnSeason, setEspnTitle, setEspnCaption } from '../../actions/Espn';
import { setSleeperSeason, setSleeperTitle, setSleeperCaption } from '../../actions/Sleeper';

const OptionalInput = ( props ) => {
    const [input, setInput] = useState('') 

    const handleChange = (e) => {
        let regex = /^[A-Za-z0-9 ]+$/;

        let isValid = regex.test(e.target.value);
        if (!isValid) {

        } else {
            let maxLength;

            if (props.input === 'Season') {
                maxLength = 2
            } else if (props.input === 'Caption') {
                maxLength = 100
            } else if (props.input === 'Title') {
                maxLength = 30
            }

            const message = e.target.value.slice(0, maxLength);
            setInput(message);
        }
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(input);
    
        if (props.platform === 'sleeper') {
            if (props.input === 'Season') {
                setSleeperSeason(input);
            } else if (props.input === 'Caption') {
                setSleeperCaption(input)
            } else if (props.input === 'Title') {
                setSleeperTitle(input)
            }
        } else if (props.platform === 'espn') {
            if (props.input === 'Season') {
                setEspnSeason(input);
            } else if (props.input === 'Caption') {
                setEspnCaption(input)
            } else if (props.input === 'Title') {
                setEspnTitle(input)
            }
        }
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    className="sleeper__input"
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder={input} 
                    value={input}
                />
                <p className='helperText'></p>

            </form>
            <button onClick={onSubmit} type="button" className={`btn btn--${props.platform}`}>Submit</button>
        </>
    )
    
}

export default OptionalInput;
