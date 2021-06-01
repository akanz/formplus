import React, {useState, useEffect} from 'react'
import Card from './Card'
import SkeletonContainer from '../skeleton/SkeletonContainer'
import axios from 'axios'
import Pagination from './Pagination'
import { connect } from 'react-redux'
import info from '../img/info.svg'

function Content({data, searchvalue, category, ordervalue, datevalue}) {
   /* const [data, setData] = useState([]),
          [filteredData, setfilteredData] = useState(data),*/
          let ordersortvalue, 
              datesortvalue;

          const filteredData = data.filter((res)=>{
              return res.name.search(searchvalue) !== -1
          }),
          [page, setPage] = useState(1),
          [pageAmount] = useState(15),
  
          [pgLimit, setpgLimit] = useState(1),
          [maxPgLimit, setmaxPgLimit] = useState(1),
          [minPgLimit, setminPgLimit] = useState(0)
    
        // sort category
        if(category==="all"){
            category = 'All'
        }
        else if(category==="health"){
            category = 'Health'
        }
        else if (category==='education'){
            category = 'Education'
        }
        else{
            category = 'E-commerce'
        }
        //   sort alphabetically
          if(ordervalue === "Ascending"){
              ordersortvalue = filteredData.sort((a,b)=>{
                 return a.name.localeCompare(b.name)
              })
          }
          else if(ordervalue === "Descending"){
            ordersortvalue= filteredData.sort((a,b)=>{
                return b.name.localeCompare(a.name)
             })
          }
          else{
              ordersortvalue=filteredData
          }

          //   sort by date
          if(datevalue === "Ascending"){
            datesortvalue = filteredData.sort((a,b)=>{
               return new Date(a.created) - new Date(b.created)
            })
        }
        else if(datevalue === "Descending"){
          datesortvalue= filteredData.sort((a,b)=>{
              return new Date(b.created) - new Date(a.created)
           })
        }
        else{
            datesortvalue=filteredData
        }
    
    /*useEffect(() => {
        const fetchData = async() => {
            const res = await axios.get('https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates')
            setData(res.data);
            setfilteredData(res.data);
        }

        fetchData();
    }, [])*/

    

    // Get current page
    const lastContent = page * pageAmount,
          firstContent = lastContent - pageAmount,
          currentContent = ordersortvalue.slice(firstContent, lastContent) ;
          
    // next page 
    const paginate = () => {
        setPage(page + 1)
        if (page + 1 > maxPgLimit) {
            setmaxPgLimit(maxPgLimit + pgLimit)
            setminPgLimit(minPgLimit + pgLimit)
        }
    }

    // previous page
    const prevPaginate = () => {
        setPage(page - 1)
        if ((page - 1) % pgLimit === 0) {
            setmaxPgLimit(maxPgLimit - pgLimit)
            setminPgLimit(minPgLimit - pgLimit)
        }
    }

    return (
        <div>
            <div>
            <div className='bg-lightorange text-center font-bold flex justify-center items-center text-sm p-3 my-6 mx-4 md:p-3 md:my-12 lg:p-4'>
                <span className='mx-3'>
                    <img className='w-6' src={info} />
                </span>
                Tada! Get started with a free template. Can't find what you are looking for? Search from 1000 available templates
            </div>
            <div className='text-gray-600 my-5 mx-4 text-base font-medium flow-root'>
                <div className='float-left'>
                    {category} templates
                </div>
                <div className='float-right text-xs text-gray-400'>
                    2000 templates
                </div>
            </div>
            </div>

            <div>
                {data.length > 0 && (
                    <div className='card-container'>
                    {currentContent.map((data,id) =>  <Card key={id} info={data} />
                    )}
                    </div>
                )}
            {data <= 0 && (
                <div className='card-container'>
                    {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((i)=>  <SkeletonContainer key={i} /> 
                    )}
                
            </div>
                
            )}

            <Pagination pageAmount={pageAmount} 
                        totalContent={data.length} 
                        paginate={paginate}
                        prevPage={prevPaginate} 
                        pgLimit={pgLimit}
                        maxPgLimit={maxPgLimit}
                        minPgLimit={minPgLimit} />
            </div>
        </div>
    )
}

const mapStateToProps =(state)=>{
    return{
        data:state.Data,
        searchvalue: state.searchfield,
        category: state.categoryfield,
        ordervalue: state.orderfield,
        datevalue: state.datefield
    }
}

export default connect(mapStateToProps,)(Content)
