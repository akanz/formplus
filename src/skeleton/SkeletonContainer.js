import React from 'react'
import SkeletonCard from './SkeletonCard'
import Shimmer from './Shimmer'


function SkeletonContainer() {
    return (
        <div className='card h-40 w-11/12 relative overflow-hidden'>
            <div className='p-2 px-4 h-3/5'>
                    <SkeletonCard type="title" />
                    <SkeletonCard type="text" />
                    <SkeletonCard type="text" />
            </div>
            <div className='h-2/5 p-2 px-4'>
                <SkeletonCard type="text" />
            </div> 
            <Shimmer />
        </div>
    )
}

export default SkeletonContainer
