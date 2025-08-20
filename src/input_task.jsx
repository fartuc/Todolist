import { useState } from "react";

export function Inputbox() {
    const [text, setText] = useState("");
    return (
        <div>
            <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Введите новую задачу..."/>
            <button>Добавить</button>
        </div>
    );
}