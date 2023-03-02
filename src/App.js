import "./App.css";
import TodoItem from "./components/TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "./redux/Actions";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import APIcall from "./components/APIcall";


function MainPage(){
  const dispatch = useDispatch();

  const handleAdd = () => {
    const x = prompt("Enter Todo name: ");
    if(x=='' || x==null){
      alert('Enter a title:')
    }
    else{
    dispatch(addItem(x));
    console.log(x);
    }
  };
  return (
    <>
    <div className="App">
        <h2>Todo List</h2>
        <TodoItem/>
        <button  id='item-add-btn'onClick={handleAdd}>
          <i className="fa-solid fa-plus"></i>
        </button>
        <Link to='/more_data'><button>Get more data</button></Link>
    </div>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route  exact path="/" element={<MainPage />} />
          <Route  path="/more_data" element={<APIcall />}>
        </Route>
      </Routes>
    </BrowserRouter>     
  );
}

export default App;
