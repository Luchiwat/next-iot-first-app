import React from 'react'

interface PageParams{
    params:{
        stdId: string;
    }
}

export default function Student({params}: PageParams) {

    const {stdId} = params;

  return (
    <>
    <h1 className='text-center font-bold mt-10'>
      wallcome to SAu
    </h1>
    <h3>
        ID:{stdId}
    </h3>
    <hr />
    <p className='text-center'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, nisi!
    </p>
  </>
  )
}
