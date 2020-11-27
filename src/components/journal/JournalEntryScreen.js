import React from 'react';

export const JournalEntryScreen = () => {
    return (
        <div className="journal__entry pointer">
            <div className="journal__entry-picture" style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://static.13.cl/7/sites/default/files/esports/articulos/field-image/portadacyber_0.jpg)'
            }}></div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo d&iacute;a
                </p>
                <p className="journal__entry-content">
                    Lorem ipsum dolor sit amet.
                </p>
            </div>
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>27-11-2020</h4>
            </div>
        </div>
    )
}
