import React from "react";
import {
  editItem,
  deleteItem,
  markComplete,
  markInComplete,
} from "../redux/Actions";
import { useSelector, useDispatch } from "react-redux";

function TodoItem() {
  const todoItemsList = useSelector((state) => state.todoItems);
  console.log(todoItemsList, typeof todoItemsList);
  const dispatch = useDispatch();

  const handleEdit = (e, id) => {
    e.preventDefault();
    const newTodoContent = prompt("Enter new todo title:");
    todoItemsList.filter((item) => item.id !== id);
    dispatch(editItem(id, newTodoContent));
    console.log("edit action called");
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    const bool = window.confirm("Are you sure?");
    if (bool) {
      dispatch(deleteItem(id));
      console.log("delete action called");
    } else {
      return;
    }
  };

  const handleMarkComplete = (id) => {
    dispatch(markComplete(id));
  };
  const handleMarkInComplete = (id) => {
    dispatch(markInComplete(id));
  };

  return (
    <>
      {todoItemsList.map((item) => {
        return (
          <div key={item.id} className="todo-item-container">
            <div className="todo-content-container">
              {item.completed ? (
                <p style={{ color: "rgba(128, 128, 128, 0.66)" }}>
                  {item.title}
                </p>
              ) : (
                <p>{item.title}</p>
              )}
            </div>

            <div className="todo-icons-container">
              <div className="todo-icon-grp">
                <i
                  onClick={(e) => handleEdit(e, item.id)}
                  className="fa-solid fa-pen-to-square"
                ></i>
                <button
                  onClick={
                    item.completed
                      ? () => handleMarkInComplete(item.id)
                      : () => handleMarkComplete(item.id)
                  }
                  className="mark-done-btn"
                >
                  {item.completed ? "Mark as Undone" : "Mark as Done"}
                </button>
                <i
                  onClick={(e) => handleDelete(e, item.id)}
                  className="fa-solid fa-trash"
                ></i>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default TodoItem;
