import React, { useEffect, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';

import { NotesAppBarScreen } from './NotesAppBarScreen';

export const NotesScreen = () => {

    const dispatch = useDispatch();

    const { active: note } = useSelector(state => state.notes);
    const [values, handleInputChange, resetState] = useForm(note);
    const { body, title, id } = values;

    const activeId = useRef(note.id);

    useEffect(() => {
        if (note.id !== activeId.current) {
            resetState(note);
            activeId.current = note.id;
        }
    }, [note, resetState]);

    useEffect(() => {
        dispatch(activeNote(values.id, { ...values }));
    }, [values, dispatch]);

    const handleDelete = () => {
        dispatch(startDeleting(id));
    }

    return (
        <div className="notes__main-content">
            <NotesAppBarScreen />
            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    name="title"
                    value={title}
                    onChange={handleInputChange} />
                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    name="body"
                    value={body}
                    onChange={handleInputChange}>
                </textarea>
                {
                    (note.url) && (
                        <div className="notes__img">
                            <img
                                src={note.url}
                                alt="Something" />
                        </div>
                    )
                }
            </div>
            <button
                className="btn btn-danger"
                onClick={handleDelete}>
                Delete
            </button>
        </div>
    )
}
