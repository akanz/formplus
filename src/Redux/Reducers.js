import {
  CHANGE_SEARCH_FIELD,
  FETCH_TEMPLATE_DETAILS,
  FETCH_TEMPLATE_SUCCESS,
  FETCH_TEMPLATE_ERROR,
  FETCH_TEMPLATE_REQUEST,
  CHANGE_CATEGORY,
  CHANGE_ORDER_FIELD,
  CHANGE_DATE_FIELD,
} from "./Types";

export const initialstate = {
  searchfield: "",
  loading: false,
  error: "",
  categoryfield: "all",
  orderfield: "default",
  datefield: "default",
  Data: [],
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return {
        ...state,
        searchfield: action.payload,
      };
    case FETCH_TEMPLATE_DETAILS:
      return {
        ...state,
        Data: action.payload,
      };
    case FETCH_TEMPLATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TEMPLATE_SUCCESS:
      return {
        ...state,
        loading: false,
        Data: action.payload,
      };
    case FETCH_TEMPLATE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CHANGE_CATEGORY:
      return {
        ...state,
        categoryfield: action.payload,
      };
    case CHANGE_ORDER_FIELD:
      return {
        ...state,
        orderfield: action.payload,
      };
    case CHANGE_DATE_FIELD:
      return {
        ...state,
        datefield: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
