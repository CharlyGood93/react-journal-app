import React from 'react';
import { NotesAppBarScreen } from './NotesAppBarScreen';

export const NotesScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBarScreen />
            <div className="notes__content">
                <input 
                type="text" 
                placeholder="Some awesome title" 
                className="notes__title-input"
                autoComplete="off" />
                <textarea placeholder="What happened today" className="notes__textarea">
                </textarea>
                <div className="notes__img">
                    <img src="https://image.shutterstock.com/image-photo/colorful-hot-air-balloons-flying-260nw-1033306540.jpg" alt="Some Picture" />
                </div>
            </div>
        </div>
    )
}
