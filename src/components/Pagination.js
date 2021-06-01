import React from 'react'

const Pagination = ({pageAmount, totalContent, paginate, prevPage, pgLimit, maxPgLimit, minPgLimit}) => {
    const pageNumbers = [], totalRows = Math.ceil(totalContent/pageAmount);
    
    for (let i = 1; i <= totalRows; i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            { pageNumbers.map(i => {
                 if (i > minPgLimit && i <= maxPgLimit) {
                     return (
                        <ul key={i} className='w-4/5 mx-auto flex mt-16 font-semibold text-gray-800'>
                            <div>
                                <button onClick={()=> prevPage()} className='font-semibold focus:outline-none'> Previous </button>
                            </div>
                           
                         <div className='w-2/4 mx-auto flex text-center justify-center'>
                             <li className='paginate'>
                                {i}
                            </li> <span className='my-0 mx-3'> of <span className='mx-1'>{totalRows}</span> </span> 
                         </div>
                         <div>
                            <button onClick={()=> paginate()} className='font-semibold focus:outline-none'> 
                                <span className='py-1'> Next</span>
                                <i className="fas fa-chevron-right mx-3"></i> 
                            </button>
                         </div>
                            
                        </ul>
                    )
                 } else {
                     return null;
                 }
                
              } 
             )}
        </div>
    )
}

export default Pagination
