import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { todoType } from "../App";

type AddProps = {
  addTodo: (todo: todoType) => void;
};

const Add: React.FC<AddProps> = ({ addTodo }) => {
  const [todo, setTodo] = useState("");
  //取得搜尋欄輸入的值
  function inputValue(e: React.ChangeEvent<HTMLInputElement>) {
    setTodo(e.target.value);
  }
  //滑鼠點擊傳送todo
  function sendTodo() {
    if (todo.trim() === "") {
      alert("輸入代辦事項不可以空白");
      return;
    }
    addTodo({
      id: uuidv4(),
      title: todo,
      isCompleted: false,
      time: Date.now(),
    });
    setTodo("");
  }
  //鍵盤點擊傳送todo
  function sendTodo_Key(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      sendTodo();
    }
  }

  return (
    <div className="add">
      <h2>Add to list</h2>
      <div className="box">
        <input
          type="text"
          autoFocus
          value={todo}
          onChange={inputValue}
          onKeyDown={sendTodo_Key}
          placeholder="請輸入代辦事項"
        />
        <button onClick={sendTodo}>+</button>
      </div>
    </div>
  );
};

export default Add;
