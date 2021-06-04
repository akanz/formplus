import React from 'react'
import info from "../img/info.svg";
import { connect } from 'react-redux'

function Subnav({category}) {
    return (
        <div>
        <div className="bg-lightorange text-center font-bold flex justify-center items-center text-xs md:text-sm p-3 my-6 mx-4 md:p-3 md:my-12 lg:p-4">
          <span className="mx-1 md:mx-3">
            <img className="w-16 md:w-6" src={info} />
          </span>
          Tada! Get started with a free template. Can't find what you are
          looking for? Search from 1000 available templates
        </div>
        <div className="text-gray-600 my-5 mx-4 text-base font-medium flow-root">
          <div className="float-left">{category} templates</div>
          <div className="float-right text-xs text-gray-400">
            2000 templates
          </div>
        </div>
      </div>
    )
}

const mapStateToProps =(state)=> {
    return {
        category: state.categoryfield
    }
}

export default connect(mapStateToProps)(Subnav)
