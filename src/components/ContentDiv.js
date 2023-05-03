import React from 'react';
export default function ContentDiv({ classes, children }) {
    return (
        <div className={`flex flex-row justify-center w-full`}>
            <div className={`flex flex-row  max-w-[1200px] lg:px-8 ${classes}`}>
                {children}
            </div>
        </div>
    )
}