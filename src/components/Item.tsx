import React from "react";
import { todoType } from "../App";
import { ListProps } from "./List";

export type ItemProps = {
  todo: todoType;
  deleteTodo: ListProps["deleteTodo"];
  checkedTodo: ListProps["checkedTodo"];
};

const Item: React.FC<ItemProps> = ({ todo, deleteTodo, checkedTodo }) => {
  function handleDelete(id: string) {
    deleteTodo(id);
  }
  function handleChecked(id: string) {
    checkedTodo(id);
  }

  return (
    <div className="item">
      <div className="itemHeader"></div>
      <input
        title="完成請打勾"
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => {
          handleChecked(todo.id);
        }}
      />
      <p className={todo.isCompleted ? "strike-through" : ""}>{todo.title}</p>
      <p
        className="btn-delete"
        onClick={() => {
          handleDelete(todo.id);
        }}
      >
        x
      </p>
    </div>
  );
};

export default Item;
