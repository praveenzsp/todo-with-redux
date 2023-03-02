export const ADD_ITEM = "ADD_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const MARK_COMPLETE = "MARK_COMPLETE";
export const MARK_INCOMPLETE = "MARK_INCOMPLETE";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const FETCH_DATA_LOADING = "FETCH_DATA_LOADING";

export const addItem = (todoItemContent) => {
  return {
    type: ADD_ITEM,
    payload: todoItemContent,
  };
};

export const editItem = (todoItemId, newTodoItemContent) => {
  return {
    type: EDIT_ITEM,
    payload: { title: newTodoItemContent, id: todoItemId },
  };
};

export const deleteItem = (todoItemId) => {
  return {
    type: DELETE_ITEM,
    payload: todoItemId,
  };
};

export const markComplete = (todoItemId) => {
  return {
    type: MARK_COMPLETE,
    payload: todoItemId,
  };
};
export const markInComplete = (todoItemId) => {
  return {
    type: MARK_INCOMPLETE,
    payload: todoItemId,
  };
};

export const fetchDataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
};
export const fetchDataFailure = (error) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error,
  };
};
export const fetchDataLoading = () => {
  return {
    type: FETCH_DATA_LOADING,
  };
};

export const fetchTodoData = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchDataSuccess(data));
      })
      .catch((err) => {
        dispatch(fetchDataFailure(err));
      });
  }
};
