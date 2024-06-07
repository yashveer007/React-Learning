import React, { useEffect, useState } from 'react'

export default function Github() {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/yashveer007')
        .then(response=> response.json())
        .then(response =>{
            setData(response)
        })
    }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Follower: {data.followers}
        <img src={data.avatar_url} alt="Git picture" width={400}/>
    </div>
  )
}
