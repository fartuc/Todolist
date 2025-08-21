import { useState } from 'react'

export function Inputbox( {onAddTask} ) {
    const [text, setText] = useState([])

    const handleAddTask = () => {
        if (text.trim() !== '') {
            onAddTask(text);
            setText(""); // Очищаем input после добавления
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddTask();
        }
    };


        return (
            <div>
                <input
                    type="text"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Введите новую задачу..."/>
                <button onClick={handleAddTask}>Добавить</button>
            </div>
        );
    }