import { useState } from 'react'
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {InputBoxProps} from "./types";

export function Inputbox( { onAddTask  }: InputBoxProps ) {
    const [text, setText] = useState<string>("")

    const handleAddTask = () => {
        if (text.trim() !== '') {
            onAddTask(text);
            setText("");
        }
    };

    const handleKeyPress = (e : React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleAddTask();
        }
    };


    return (
        <div>
            <TextField id="outlined-basic" label="Задача" variant="outlined"
                       type="text"
                       value={text}
                       onChange={(e : React.ChangeEvent<HTMLInputElement>)   => setText(e.target.value)}
                       onKeyPress={handleKeyPress}
                       placeholder="Новая задача"/>
            <Button variant="outlined" onClick={handleAddTask}>Добавить</Button>
        </div>
    );
}