import React from 'react';

import ReactPlayer from 'react-player'

const Video = () => {
    return (
        <div className='max-w-7xl mx-auto mt-10 p-2'>
            <ReactPlayer className="rounded-3xl" controls={true} width="100%" height="500px" url='https://youtu.be/AzRYJRmuMWg?si=q5XHp7AK00Relw4e' />
        </div>
    );
};

export default Video;