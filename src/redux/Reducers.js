import { ADD_ITEM,EDIT_ITEM,DELETE_ITEM, MARK_COMPLETE,MARK_INCOMPLETE, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from "./Actions";

const initialState={
    todoItems:[
        {
            id:1000,
            title:'Gotta hit gym',
            completed:true
        },
        {
            id:2000,
            title:'watch movie',
            completed:false
        },
        {
            id:3000,
            title:'Go to beach',
            completed:false
        },

    ],
    dataLoading:true,
    hasError:false
}

const todoReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_ITEM:

            return {
                ...state,
                todoItems:[...state.todoItems,{id: state.todoItems.length+1,title:action.payload}]
            }
        
        case EDIT_ITEM:
            return {
                ...state,
                todoItems:state.todoItems.map(item=>{
                    if(item.id!=action.payload.id){
                        return item
                    }
                    return {
                        ...item,
                        title:action.payload.title
                    }
                })
            }
        
        case DELETE_ITEM:
            return {
                ...state,
                todoItems:state.todoItems.filter(item=>item.id!==action.payload)
            }

        case MARK_COMPLETE:
            return{
                ...state,
                todoItems:state.todoItems.map(item=>{
                    if(item.id!==action.payload){
                        return item
                    }
                    return{
                        ...item,
                        completed:!item.completed
                    }
                })
            }
        case MARK_INCOMPLETE:
            return{
                ...state,
                todoItems:state.todoItems.map(item=>{
                    if(item.id!==action.payload){
                        return item
                    }
                    return{
                        ...item,
                        completed:!item.completed
                    }
                })
            }
        case FETCH_DATA_SUCCESS:
            return{
                ...state,
                todoItems:[...action.payload],
                dataLoading:false
            }
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                hasError:true
            }
        
        default:
            return state
        
    }
}

export default todoReducer