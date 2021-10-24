import React, { useState, useEffect } from 'react';
import "./ProcessCard.css";

function ProcessCard({process}) {
    const [time, setTime] = useState(Date.now());
    
    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 30000);
        
        return () => {
            clearInterval(interval);
        };
    }, []);
    
    console.log("test");

    return (
        <li className={`process process_${process.status}`}>
            <h2 className="process__title">{process.title}</h2>
            <ul className="process__action-list">
            {
                process.actions.map(action => <li className={`process__action process__action_${action.title}`} onClick={action.exec}></li>)
            }
            </ul>
        </li>
    )
}

export default ProcessCard;