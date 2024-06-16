import React, { useEffect, useState } from 'react';
import styles from './Post.module.css';

export const Post = ({title, body}) => {
    const [isHot, setIsHot] = useState(false);
    const [showBorder, setShowBorder] = useState(false);

    const onClick = () => {
        setIsHot((prev) => !prev);
    };

    useEffect(() => {
        let intervalId;

        if (isHot) {
            intervalId = setInterval(() => {
                setShowBorder((prev) => !prev);
            }, 500);
        }
        
        return () => {
            clearInterval(intervalId);
        };
        
    }, [isHot]);

    return (
        <div className={showBorder ? styles.hot : ''}>
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick={onClick}>toggle hot</button>
        </div>
    );
};

