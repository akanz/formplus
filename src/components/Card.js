import React from 'react'

function Card(props) {
   
    return (
        <div className='card min-h-1'>
            <div className='p-4 h-4/5'>
                <div className='text-2xl h-2/4 py-2 flex items-center capitalize'>
                    {props.info.name}
                </div>
                <div className='text-sm h-2/4 py-2 flex items-center font-normal text-gray-600 text-base'>
                    {props.info.description}
                </div>
            </div>
            <div className='h-1/5 w-full bg-gray-100 text-lightgreen font-medium text-sm p-4 py-2 flex items-center bottom-0 left-0'>
                <a>
                    {props.info.link}
                </a>
            </div>
        </div>
    )
} 

export default Card
