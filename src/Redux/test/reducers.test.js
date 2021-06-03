import * as types from '../Types'
import reducer from '../Reducers'
import {initialstate} from '../Reducers'


describe('All reducers', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot()
  })

  it('should handle CHANGE_CATEGORY',()=> {
    const category = reducer(initialstate, { type: types.CHANGE_CATEGORY });
      expect(category).toMatchSnapshot()
  })
  it('should handle CHANGE_ORDER_FIELD',()=> {
    const order = reducer(initialstate, { type:types.CHANGE_ORDER_FIELD });
    expect(order).toMatchSnapshot()
  })
  it('should handle CHANGE_SEARCH_FIELD', ()=> {
    const search = reducer(initialstate, { type:types.CHANGE_SEARCH_FIELD });
    expect(search).toMatchSnapshot()
  })
  it('should handle CHANGE_DATE_FIELD', ()=> {
    const date = reducer(initialstate, { type:types.CHANGE_DATE_FIELD });
    expect(date).toMatchSnapshot()
  })
 
  it('should handle FETCH_REQUEST', ()=> {
    const fetch = reducer(initialstate, { type:types.FETCH_TEMPLATE_REQUEST });
    expect(fetch).toMatchSnapshot()
  })
  it('should handle FETCH_TEMPLATE_SUCCESS', ()=> {
    const fetch = reducer(initialstate, { type:types.FETCH_TEMPLATE_SUCCESS });
    expect(fetch).toMatchSnapshot()
  })
  it('should handle FETCH_ERROR', ()=> {
    const fetch = reducer(initialstate, { type:types.FETCH_TEMPLATE_ERROR });
    expect(fetch).toMatchSnapshot()
  })

})