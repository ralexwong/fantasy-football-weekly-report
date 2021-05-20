import React from 'react'

const EspnGuide = () => {
    return (
        <>
            <div className="input__jumbotron">
                    
                <h3 className='steps'><u><b>Step 1</b></u></h3>
                <p className='paragraph-lg'>Log on to the espn website. (ID cannot be viewed on the app)</p>

                <h3 className='steps'><u><b>Step 2</b></u></h3>
                <p className='paragraph-lg'>Copy or remember the highlighted number for your league. This is your league ID.</p>

                <a target="_blank" href='/images/espn-id.png'><img className='espnGuide__image' src="./images/espn-id.png" alt="photo1"></img></a>
            </div>
            <div className="input__jumbotron">
            
                <h3 className='steps'><u><b>Step 3</b></u></h3>
                <p className='paragraph-lg'>Go to your league settings and make the league viewable to public. (Can only be done by the league commissioner)</p>
            
                <a target="_blank" href='/images/espn-public-red-circle.jpg'><img className='espnGuide__image' src="./images/espn-public-red-circle.jpg" alt="photo2"></img></a>
            </div>
        </>
    )
}

export default EspnGuide;