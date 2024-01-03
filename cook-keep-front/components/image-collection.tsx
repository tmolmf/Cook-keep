"use client"


import React from 'react'
import ImageTile from './image-tile'

interface ImageCollectionProps {
    results: any[];
    title: string;
  }

  function ImageCollection({ results, title }: ImageCollectionProps) {

  return (
    <div className="relative flex flex-col space-y-4 my-1 px-1 max-w-[1400px] mx-1">
        <h2 className='text-lg font-semibold'>{title}</h2>
        <div className='flex p-2 -m-2 space-x-6 overflow-x-scroll overflow-y-hidden scrollbar-hide'>
        {results.map((result) => (
            <ImageTile key={result.id} result={result} isFavorite={null}/>
        ))}
        </div>
    </div>
  )
}

  
export default ImageCollection;