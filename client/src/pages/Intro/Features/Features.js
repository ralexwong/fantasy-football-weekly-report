import React from 'react';

const Features = () => {
    return (
        <section className='features'>
            <div className='box'>
                <i className='icon-basic-world box__icon'></i>
                <h3 className='heading-tertiary'>Connect your league</h3>
                <p className='box__text'>
                    Pick your platform using our navbar or the boxes below and input your information.
                </p>
            </div>


            <div className='box'>
                <i className='icon-basic-picture-multiple box__icon'></i>
                <h3 className='heading-tertiary'>Generate a report</h3>
                <p className='box__text'>
                    We will pull your current league information from your platforms website and create a report for you.
                </p>
            </div>

            <div className='box'>
                <i className='icon-basic-display box__icon'></i>
                <h3 className='heading-tertiary'>Download the report</h3>
                <p className='box__text'>
                    Your report is dynamically generated and ready to be downloaded as a .jpg file.
                </p>
            </div>

            <div className='box'>
                <i className='icon-basic-link box__icon'></i>
                <h3 className='heading-tertiary'>Share with your league!</h3>
                <p className='box__text'>
                    Voila! You are now able to share your report with your league!
                </p>
            </div>
        </section>
    )
}

export default Features;
