import React, { useRef, useEffect } from "react";
import Item from "./Item";
import { todoType } from "../App";

export type ListProps = {
  todoList: todoType[];
  deleteTodo: (id: string) => void;
  checkedTodo: (id: string) => void;
  todoListLength: number;
};

const List: React.FC<ListProps> = ({
  todoList,
  deleteTodo,
  checkedTodo,
  todoListLength,
}) => {
  const listRef = useRef<HTMLInputElement>(null);
  //todolist資料更新自動跳到最新的todo
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [todoListLength]);
  return (
    <div className="list" ref={listRef}>
      {todoList.map((todo) => {
        return (
          <Item
            todo={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            checkedTodo={checkedTodo}
          ></Item>
        );
      })}
    </div>
  );
};

export default List;
