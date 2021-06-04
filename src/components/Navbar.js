import React, { useEffect } from "react";
import { connect } from "react-redux";
import { changesearchfield,fetchfromapi, changecategory, changeorderfield, changedatefield } from "../Redux/Actions";
import search from '../img/search.svg'

function Navbar({ searchvalue,dateValue, orderValue, onsearchchange, fetchtemplates,changecategory, changingorder, changebydate}) {
  useEffect(() => {
    fetchtemplates();
  }, []);

  console.log(searchvalue);
  const handleChange =(e)=> {
    changecategory(e);
    searchvalue = ''
    dateValue = 'Default'
    orderValue = 'Default'
  }
  return (
    <div>
      <nav className="m-4 mt-8 flow-root">
        <div className="w-full md:w-4/6 lg:w-2/6 lg:float-left">
          <input value={searchvalue}
            onChange={(e) => onsearchchange(e.target.value)}
            type="text"
            placeholder="Search Templates"
            className="border border-gray-200 rounded-sm p-3 pt-2 px-4 w-full md:w-4/5 focus:outline-none focus:ring focus:ring-gray-100"
          />
          <button className='p-1 outline-none align-middle -ml-10'>
              <img className='w-5 opacity-60' src={search}/>
          </button>
        </div>
        <div className="my-4 text-gray-400 text-sm md:w-5/6 md:justify-start md:flex lg:float-right lg:my-0 lg:w-4/6 lg:justify-end">
          <div className="md:my-3 md:mr-3 pt-2 text-gray-400 lg:mx-4 lg:my-1">
            Sort By:
          </div>
          <div className="grid grid-cols-1 md:gap-8 md:grid-cols-3">
              <fieldset className='fieldset'>
                  <legend className='mx-1'>
                    category
                  </legend>
                  <select className="select" onChange={e => handleChange(e.target.value)}>
                    <option value="all">All</option>
                    <option value="education">Education</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="health">Health</option>
                </select>
              </fieldset>
            
            <fieldset className='fieldset'>
                <legend className='mx-1'>
                    order
                </legend>
                <select className="select" value={orderValue} onChange={e=>changingorder(e.target.value)}>
                    <option value="Default">Default</option>
                    <option value="Ascending">Ascending</option>
                    <option value="Descending">Descending</option>
                </select>
            </fieldset>
            
            <fieldset className='fieldset'>
                <legend className='mx-1'>
                    date
                </legend>
                <select className="select" value={dateValue} onChange={e=>changebydate(e.target.value)}>
                <option value="Default">Default</option>
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
                </select>
            </fieldset>
           
          </div>
        </div>
      </nav>

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    searchvalue: state.searchfield,
    dateValue: state.datefield,
    orderValue: state.orderfield,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onsearchchange: (eventval) => {
      dispatch(changesearchfield(eventval));
    },
    fetchtemplates: ()=>{
        dispatch(fetchfromapi())
    },
    changecategory:(e)=>{
        dispatch(changecategory(e))
    },
    changingorder:(eventval)=>{
        dispatch(changeorderfield(eventval))
    },
    changebydate:(e)=>{
        dispatch(changedatefield(e))
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
