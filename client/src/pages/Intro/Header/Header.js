import React from 'react'

const Header = (props) => {
    return (
        <header className='introHeader'>
            <div className='introHeader__text-box'>
                <h1 className='heading-primary'>
                    <span className='heading-primary--main'>Fantasy Football</span>
                    <span className='heading-primary--sub'>Weekly Reports</span>
                </h1>

                <button style={{ height: '7rem', fontSize: '2rem' }} onClick={props.click} className='btn btn--white btn--animated'>Choose Your Platform!</button>  
            </div>
        </header>
    )
}

export default Header;
