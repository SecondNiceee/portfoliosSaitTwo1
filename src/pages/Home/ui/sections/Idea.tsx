import React, { useCallback, useEffect, useRef } from 'react';
import Image from '../../../../shared/ui/Image';
import LogButton from '../../../../shared/ui/LogButton/LogButton';
import StarText from '../../../../shared/ui/StarText/StarText';
import IdeaButtons from '../components/IdeaButtons';

const Idea = () => {



    return (
        <section className='idea'>
            <div className="container">
                <div className="idea__text-block">
                    <div className='idea__welcome'>
                        <StarText>
                            Welcome to Click craft
                        </StarText>
                    </div>
                    <h3 className='idea__header'>Your Story, Your Way
                    Build Your Personal Portfolio</h3>
                    <p className='idea__description'>Showcase your journey by crafting a personal portfolio in minutes</p>
                </div>
                <IdeaButtons />
                <div className="idea__image-block">
                    <Image className='idea__stars' imageName='stars.svg' />
                    <Image className='idea__image' imageName='ideaHeader.png' />
                </div>
            </div>
        </section>
    );
};

export default Idea;