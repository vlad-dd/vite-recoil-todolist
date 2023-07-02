import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil';
import { todoList } from './state';

const InputText = () => {
    const [text, setText] = useState("");
    const [check, setCheck] = useState(false);
    const addToTheList = useSetRecoilState(todoList);
    return (
        <div>
            <label style={{ margin: "15px" }}>Add new todo item</label>
            <input value={text} onChange={({ target: { value } }) => setText(value)} />
            <input type="checkbox" checked={check} onChange={() => setCheck((prev) => !prev)} />
            <button
                style={{ margin: "15px" }}
                onClick={() => addToTheList((list) => [...list, { id: Math.floor(Math.random() * 100), text, isCompleted: check }])}
            >
                Add to the list
            </button>
        </div>
    )
}

export default InputText