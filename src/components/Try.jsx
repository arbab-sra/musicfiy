import axios from 'axios'

import { BACKEND_URL } from '../../context'
import { useEffect, useState } from 'react'

const Try = () => {
  const [data, setData] = useState()
    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/user/profile`, {
          headers: {
            Authorization: `${localStorage.getItem("token")}`
          }
        }).then(res=>setData(res.data)).catch(err => console.log(err))
    },[])
  return (
    <div>{
      JSON.stringify(data)
      }</div>
  )
}

export default Try