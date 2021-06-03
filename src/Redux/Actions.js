import {
  CHANGE_SEARCH_FIELD,
  FETCH_TEMPLATE_DETAILS,
  FETCH_TEMPLATE_SUCCESS,
  FETCH_TEMPLATE_ERROR,
  FETCH_TEMPLATE_REQUEST,
  CHANGE_ORDER_FIELD,
  CHANGE_DATE_FIELD,
  CHANGE_CATEGORY
} from "./Types"
import axios from 'axios'

//action creator
export const changecategory=(category)=>{
    return{
        type: CHANGE_CATEGORY,
        payload: category
    }
}
export const changeorderfield=(ordervalue)=>{
    return{
        type: CHANGE_ORDER_FIELD,
        payload: ordervalue
    }
}
export const changedatefield=(datevalue)=>{
    return{
        type: CHANGE_DATE_FIELD,
        payload: datevalue
    }
}
export const changesearchfield = (searchvalue) => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: searchvalue,
  };
};
export const fetchtemplatesrequest = () => {
  return {
    type: FETCH_TEMPLATE_REQUEST,
  };
};
export const fetchtemplateserror =(errormessage)=>{
    return{
        type: FETCH_TEMPLATE_ERROR,
        payload: errormessage
    }
}
export const fetchtemplatessuccess=(results)=>{
    return{
        type: FETCH_TEMPLATE_SUCCESS,
        payload:results
    }
}

export const fetchfromapi = () => {
  return (dispatch) => {
      dispatch( fetchtemplatesrequest)
    return axios.get("https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates")
      .then(result=> dispatch(fetchtemplatessuccess(result.data)))
      .catch(error => dispatch(fetchtemplateserror(error.message)));
  };
};

