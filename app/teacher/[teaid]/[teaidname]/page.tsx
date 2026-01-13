import React from 'react'

interface PageParams{
    params:{
        teaid: string;
        teaidname: string;
    }
}

export default function Teacher({params}: PageParams) {

    const {teaid,teaidname} =  params;

  return (
    <>
    <h1 className='text-center font-bold mt-10'>
      wallcome to SAU
    </h1>
    <h3>
        ID:{teaid}
        <br />
        Name:{teaidname}
    </h3>
    <hr />
    <p className='text-center'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, nisi!
    </p>
  </>
  )
}
