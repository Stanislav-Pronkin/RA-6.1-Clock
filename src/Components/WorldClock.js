import React, { useState } from 'react';
import Clock from './Clock';
import ClockForm from './ClockForm';

export default function WorldClock() {
    const [clocks, setClocks] = useState([]);

    const handleAdd = (clock) => {
        setClocks([...clocks, clock]);
    }

    const handleDelete = (id) => {
        setClocks(prevClocks => prevClocks.filter(o => o.id !== id));
    }

    return (
        <div className='clock-widget'>
            <ClockForm onAdd={handleAdd} />
            <ul className='clock-list'>
                {clocks.map((clock) =>
                    <li className='clock-item' key={clock.id}>
                        <Clock clock={clock} onDelete={handleDelete} />
                    </li>
                )}
            </ul>
        </div>
    )
}