import React, { useState } from 'react'
import RemoveButton from './RemoveButton';

// contains the logic for hovering over a given piece of Test Suite information
// such as an event, time, note, etc. 
export default function HoverableTestInfo({ children, remove, className }) {
    const [hover, setHover] = useState(false);
    const [removeHover, setRemoveHover] = useState(false);

    return (
        <div
            className={`${className} ${hover && 'border-1 rounded-lg'} ${removeHover && 'border-red-600'}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className={`flex items-center w-full ${hover ? 'justify-between' : ''}`}>
                {children}
                {hover && 
                    <RemoveButton 
                        onClick={remove} 
                        removeHover={removeHover}
                        setRemoveHover={setRemoveHover}
                    />
                }
            </div>
        </div>
    )
}