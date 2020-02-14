import {axiosApi} from "../../axiosApi";

export const REQUEST_START = 'REQUEST_START';
export const REQUEST_SUCCESS = "REQUEST_SUCCESS";
export const REQUEST_ERROR = 'REQUEST_ERROR';

export const request = ()=>{
  return {type:REQUEST_START}
};
export const requestError = (err)=>{
    return {type:REQUEST_ERROR,err}
};
export const requestSuccess = (data)=>{
  return {type:REQUEST_SUCCESS,data}
};
export const postThread = (data)=>{
  return async (dispatch)=>{
      try {
          dispatch(request());
          await axiosApi.post('/thread',data);
          dispatch(getThreads())
      } catch (e) {
          dispatch(requestError(e))

      }
  }
};
export const getThreads = ()=>{
    return async (dispatch)=>{
        try {
            dispatch(request());
        const response = await  axiosApi.get('/thread');
            dispatch(requestSuccess(response.data))

        } catch (e) {
            dispatch(requestError(e))
        }
    }

};