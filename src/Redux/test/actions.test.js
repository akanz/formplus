import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import * as actions from "../Actions";
import * as types from "../Types";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const mock = new MockAdapter(axios);
const store = mockStore();

// search bar
describe("test searchbar action", () => {
  it("should create an action to change the value of the search", () => {
    const searchvalue = "Finish docs";
    const expectedAction = {
      type: types.CHANGE_SEARCH_FIELD,
      payload: searchvalue,
    };
    expect(actions.changesearchfield(searchvalue)).toEqual(expectedAction);
  });
});

// sort by category
describe("test change category action", () => {
  it("should create an action to change the value of the category", () => {
    const category = "All";
    const expectedAction = {
      type: types.CHANGE_CATEGORY,
      payload: category,
    };
    expect(actions.changecategory(category)).toEqual(expectedAction);
  });
});

// sort by order
describe("test change order action", () => {
  it("should create an action to change the value of the order", () => {
    const order = "Default";
    const expectedAction = {
      type: types.CHANGE_ORDER_FIELD,
      payload: order,
    };
    expect(actions.changeorderfield(order)).toEqual(expectedAction);
  });
});

// sort by date
describe("test change date action", () => {
  it("should create an action to change the value of the date", () => {
    const date = "Default";
    const expectedAction = {
      type: types.CHANGE_DATE_FIELD,
      payload: date,
    };
    expect(actions.changedatefield(date)).toEqual(expectedAction);
  });
});

// test API request
describe("Test API calls", () => {
  beforeEach(() => {
    store.clearActions();
  });

  it("creates FETCH_TEMPLATE_SUCCESS when fetching templates has been done", () => {
    mock
      .onGet(
        "https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates"
      )
      .reply(200, {
        results: [
          {
            category: ["Health", "E-commerce", "Education"],
            created: "2021-06-03T04:01:08.057259",
            description: "amet, incididunt nostrud laborum. velit",
            link: "https://formpl.us/templates",
            name: "deserunt Excepteur Lorem",
          },
        ],
      });

    store.dispatch(actions.fetchfromapi()).then(() => {
      let expectedActions = [
        { type: types.FETCH_TEMPLATE_REQUEST },
        {
          type: types.FETCH_TEMPLATE_SUCCESS,
          payload: {
            results: [
              {
                category: ["Health", "E-commerce", "Education"],
                created: "2021-06-03T04:01:08.057259",
                description: "amet, incididunt nostrud laborum. velit",
                link: "https://formpl.us/templates",
                name: "deserunt Excepteur Lorem",
              },
            ],
          },
        },
      ];
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches GET_TODO_FAILURE after a FAILED API requets', () => {	        
      mock.onGet('https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates')
      .reply(400, { error: { message: 'error message' } });	        
      store.dispatch(actions.fetchfromapi()).then(() => {	            
          let expectedActions = [	                
              { type: FETCH_TEMPLATE_REQUEST },	                
              {	                    
                  type: types.FETCH_TEMPLATE_ERROR,	                    
                  payload: { error: { message: 'error message' } }	                
                }	            
            ]	            
            expect(store.getActions()).toEqual(expectedActions)	        
        });	    
    });
});
