import React from 'react';
import { JournalEntryScreen } from './JournalEntryScreen';

export const JournalEntriesScreen = () => {

    const entries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div className="journal__entries">
            {
                entries.map(value => (
                    <JournalEntryScreen value={value} />
                ))
            }
        </div>
    )
}
