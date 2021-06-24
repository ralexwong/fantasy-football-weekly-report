import React, { useState } from 'react';
import { setEspnSeason, setEspnTitle, setEspnCaption } from '../../actions/Espn';
import { setSleeperSeason, setSleeperTitle, setSleeperCaption } from '../../actions/Sleeper';

const OptionalInput = (props) => {
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        let regex = /^[A-Za-z0-9 ]+$/;

        if (e.target.value === '') {
            setInput('');
            return
        }

        let isValid = regex.test(e.target.value);
        if (isValid) {
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
        onLoading();
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

    const onLoading = () => {
        setLoading(true);
        setTimeout(() => { 
            setLoading(false)
        }, 
        1500);
    }


    return (
        <div className={props.open === true ? 'accordian__form--open' : 'accordian__form--close'}>
            <form onSubmit={onSubmit}>
                <input
                    className="input__input"
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder={input ? input : `${props.input}`}
                    value={input}
                />
                <p className='input__helpertext'></p>

            </form>

            {loading ? (
                <button className={`btn btn--${props.platform === 'sleeper' ? 'sleeper' : 'espn'}`} type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Loading...
                </button>
            ) : (
                <button onClick={onSubmit} type="button" className={`btn btn--${props.platform === 'sleeper' ? 'sleeper' : 'espn'}`}>Submit</button>
            )}
        </div>
    )

}

export default OptionalInput;
