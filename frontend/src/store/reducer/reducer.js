import {REQUEST_ERROR, REQUEST_START, REQUEST_SUCCESS} from "../actions/action";

const initialState ={
    threads:[],
  loading:false,
    error: null
};
const reducer = (state = initialState,action)=>{
  switch (action.type) {
      case REQUEST_START:
          return{
              ...state,
              loading: true
          };
      case REQUEST_SUCCESS:
          return {
              ...state,
              threads:action.data,
              loading: false
          };
      case REQUEST_ERROR:
          return {
              ...state,
              loading: false,
              error: action.err
          };
      default: return state
  }
};
export default reducer;