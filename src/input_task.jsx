import { useState } from 'react'
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function Inputbox( { onAddTask } ) {
    const [text, setText] = useState([])

    const handleAddTask = () => {
        if (text.trim() !== '') {
            onAddTask(text);
            setText("");
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddTask();
        }
    };


        return (
            <div>
                <TextField id="outlined-basic" label="Задача" variant="outlined"
                    type="text"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Новая задача"/>
                <Button variant="outlined" onClick={handleAddTask}>Добавить</Button>
            </div>
        );
    }