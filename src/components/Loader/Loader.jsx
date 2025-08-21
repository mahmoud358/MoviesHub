import React from 'react'

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-600"></div>
    </div>
  )
}

export default Loader