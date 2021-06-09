import { CHANGE_PAGE, PREV_PAGE } from '../Types'

export const initialstate = {
    page: 1,
    pageAmount: 15,
    pgLimit: 1,
    maxPgLimit: 1,
    minPgLimit: 0
}

const pageReducer = (state= initialstate, action) => {
    switch (action.type){
        case CHANGE_PAGE:
            return {
              ...state,
              page: state.page + 1, 
              maxPgLimit: state.maxPgLimit + state.pgLimit,
              minPgLimit: state.minPgLimit + state.pgLimit, 
            };
          case PREV_PAGE:
            return {
              ...state,
              page: state.page - 1,
              maxPgLimit: state.maxPgLimit - state.pgLimit,
              minPgLimit: state.minPgLimit - state.pgLimit,
            }
          default:
            return state;
        }
    }

export default pageReducer