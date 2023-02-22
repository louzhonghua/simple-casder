import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './index.css'


function CalendarApp() {
    const [value, onChange] = useState(new Date());

    const TileContent = ({ date, view }) => {
        return <div>
            <span>已完成</span>
            <span>未完成</span>
            <span>未发布</span>
        </div>;
    };

    return (
        <div className='my-app'>
            <Calendar onChange={onChange} tileContent={<TileContent />} value={value} />
        </div>
    );
}

export default CalendarApp;