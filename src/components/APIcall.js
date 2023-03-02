import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodoData } from "../redux/Actions";
import store from "../redux/store";

function APIcall() {
  const todoItemsList = useSelector((state) => state.todoItems);
  const dataLoading = useSelector((state) => state.dataLoading);
  const hasError = useSelector((state) => state.hasError);
  console.log(todoItemsList, dataLoading);
  const dispatch = useDispatch();

  const handleAPIcall = () => {
    dispatch(fetchTodoData());
    console.log("api called");
  };
  return (
    <>
      {dataLoading ? (
        <button onClick={() => handleAPIcall()}>Get More data</button>
      ) : (
        <></>
      )}
      {dataLoading ? (
        <h1>Loading...</h1>
      ) : hasError ? (
        <h1>Some error occured</h1>
      ) : (
        <div>
          {todoItemsList.map((item) => {
            return (
              <p style={{ textAlign: "center", fontSize: "1em" }} key={item.id}>
                {item.id}. {item.title}
              </p>
            );
          })}
        </div>
      )}
    </>
  );
}

export default APIcall;
