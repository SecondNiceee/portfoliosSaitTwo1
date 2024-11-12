import React from 'react';
import Image from '../../../../shared/ui/Image';
import { incons } from '../../config';
import Reveal from '../../../../shared/ui/Reveal/Reveal';

const Reachable = () => {
    return (
        <section className='reachable'>
            <Reveal className="container">
                <div className="reachable__left-part">

                    <div className="reachable__text-block">
                        <h3 className="reachable__header">
                            Always Reachable
                        </h3>
                        <p className='reachable__description'>
                            Feel free to reach out to us anytime through email or LinkedIn. We're here to assist you and answer any queries you may have. Let's stay connected!
                        </p>
                    </div>
                    <div className="reachable__line">

                    </div>
                    <div className="reachable__user">
                        <Image className='reachable__user-image' imageName='reacheIcon.png' />
                        <div className="reachable__user-tblock">
                            <h3 className='reachable__user-header'>Yagna Kusumanchi</h3>
                            <p className='reachable__user-description'>Founder and CEO of Click Craft</p>
                            <div className="reachable__user-icons">
                                {incons.map( (e, i) => {
                                    return (
                                        <Image imageName={e} key={i} className='reachable__user-icon' />
                                    )
                                } )}
                            </div>
                        </div>
                    </div>

                </div>
                <Image imageName='robot.png' className='reachable__image' />
            </Reveal>
        </section>
    );
};

export default Reachable;