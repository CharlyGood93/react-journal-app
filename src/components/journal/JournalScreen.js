import React from 'react';
import { useSelector } from 'react-redux';
import { NotesScreen } from '../notes/NotesScreen';
import { NothingSelectedScreen } from './NothingSelectedScreen';
import { SidebarScreen } from './SidebarScreen';

export const JournalScreen = () => {

    const { active } = useSelector(state => state.notes);


    return (
        <div className="journal__main-content animate__animated animate__fadeIn animate_faster">
            <SidebarScreen />
            <main>
                {
                    (active)
                        ? (<NotesScreen />)
                        : (<NothingSelectedScreen />)
                }
            </main>
        </div>
    )
}
