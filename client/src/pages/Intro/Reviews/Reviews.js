import React from 'react';
import { Link } from "react-router-dom";

const Reviews = () => {
    return (
        <section className='reviews'>
            {/* <video className='bg-video' autoPlay muted loop>
                <source src='./images/intro/video.mp4' type='video/mp4' />
                <source src='./images/intro/video.webm' type='video/webm' />
                your browser is not supporterd
            </video> */}
            <h2 className='heading-secondary u-margin-bottom-big'>Check out these reviews</h2>

            <div className='review'>
                <figure className='review__shape'>
                    <img className='review__img' src='./images/intro/nat-8.jpg' alt='review'></img>
                    <figcaption className='review__caption'>
                        Mary Smith
                        </figcaption>
                </figure>
                <div className='review__text'>
                    <h3 className="heading-tertiary u-margin-bottom-small">
                        The most fun I had playing fantasy
                        </h3>
                    <p>
                        Aperiam, ipsum sapiente aspernatur. tur adipisicing elit. Aperiam, ipsum sapiente aspernatur
                        tur adipisicing elit. Aperiam, ipsum sapiente aspernatur. tur adipisicing elit. Aperiam, ipsum sapiente aspernatur
                        tur adipisicing elit. Aperiam, ipsum sapiente aspernatur. tur adipisicing elit. Aperiam, ipsum sapiente aspernatur
                        </p>
                </div>
            </div>

            <div className='review'>
                <figure className='review__shape'>
                    <img className='review__img' src='./images/intro/nat-7.jpg' alt='review'></img>
                    <figcaption className='review__caption'>
                        Jack Wilson
                        </figcaption>
                </figure>
                <div className='review__text'>
                    <h3 className="heading-tertiary u-margin-bottom-small">
                        My league is so much more active now
                        </h3>
                    <p>
                        Aperiam, ipsum sapiente aspernatur. tur adipisicing elit. Aperiam, ipsum sapiente aspernatur
                        tur adipisicing elit. Aperiam, ipsum sapiente aspernatur. tur adipisicing elit. Aperiam, ipsum sapiente aspernatur
                        tur adipisicing elit. Aperiam, ipsum sapiente aspernatur. tur adipisicing elit. Aperiam, ipsum sapiente aspernatur
                        </p>
                </div>
            </div>

            <div>
                <Link to="#" className='btn-text u-margin-top-huge'>Learn more &rarr;</Link>
            </div>

        </section>
    )
}

export default Reviews;
