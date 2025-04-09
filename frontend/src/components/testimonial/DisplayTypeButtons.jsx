import React from 'react';
import DisplayType from './DisplayType';

const DisplayTypeButtons = ({ handleClick }) => {
    return (
        <div className="flex justify-around items-center gap-8">
            <DisplayType displayType="Text" onClick={() => handleClick('text')} />
            <DisplayType displayType="Image" onClick={() => handleClick('image')} />
            <DisplayType displayType="Video" onClick={() => handleClick('video')} />
        </div>
    );
};

export default DisplayTypeButtons;
