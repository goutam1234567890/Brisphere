import React, { useRef, useEffect } from 'react';
import './index.css';

function DatePicker({ date, onSelect }) {
    const dateInputRef = useRef(null);

    // Set default date based on props or today's date
    useEffect(() => {
        const formattedDate = date
            ? new Date(date).toISOString().split('T')[0] // Format the date prop to YYYY-MM-DD
            : new Date().toISOString().split('T')[0]; // Today's date

        if (dateInputRef.current) {
            dateInputRef.current.value = formattedDate;
        }
    }, [date]); // Add `date` as a dependency to update if props change

    const handleClick = () => {
        if (dateInputRef.current) {
            dateInputRef.current.showPicker(); // Opens the date picker programmatically
        }
    };

    const handleChange = (event) => {
        if (onSelect) {
            onSelect(event.target.value); // Pass the selected date to parent component
        }
    };

    return (
        <div className="date-input-container" onClick={handleClick}>
            <input
                type="date"
                className="date-input"
                ref={dateInputRef}
                min="1900-01-01"
                max="2100-12-31"
                onChange={handleChange}
            />
        </div>
    );
}

export default DatePicker;
