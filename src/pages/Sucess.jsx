import React, { useEffect, useState } from 'react'
import { PropagateLoader } from 'react-spinners'
const Sucess = () => {
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
     setLoading(false);
    },3000)
  },[])
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      {
        loading ? (
          <PropagateLoader />
        ): (
          <div>
            <h2 className='text-3xl font-semibold mb-4 text-center'>Order Sucessful!</h2>
            <p>Your order has been placed sucessfully.</p>
          </div>
        )
      }
    </div>
  )
}

export default Sucess