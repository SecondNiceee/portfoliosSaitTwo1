import React from 'react';
import Image from '../../../../shared/ui/Image';

const User = () => {
    return (
        <div className='user'>
            <Image className='user__img' imageName='userIcon.svg' />
            <p className='user__name'>Yagna Kusumanchi</p>
        </div>
    );
};

export default React.memo(User);