import React from 'react';
import { useSelector } from 'react-redux';
import { JournalEntryScreen } from './JournalEntryScreen';

export const JournalEntriesScreen = () => {

    const { notes } = useSelector(state => state.notes);

    return (
        <div className="journal__entries">
            {
                notes.map(note => (
                    <JournalEntryScreen
                        key={note.id}
                        {...note}
                    />
                ))
            }
        </div>
    )
}
