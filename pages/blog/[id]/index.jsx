import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const Index = () => {
  const router = useRouter()
    const {id} = router.query



  
  return (
    <div>
      <h1>{id}</h1>
    </div>
  )
}

export default Index
