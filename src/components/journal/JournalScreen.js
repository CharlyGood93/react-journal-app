import React from 'react';
import { NotesScreen } from '../notes/NotesScreen';
import { SidebarScreen } from './SidebarScreen';
// import { NothinSelectedScreen } from './NothinSelectedScreen';

export const JournalScreen = () => {
    return (
        <div className="journal__main-content">
            <SidebarScreen />
            <main>
                {/* <NothinSelectedScreen /> */}
                <NotesScreen />
            </main>
        </div>
    )
}
