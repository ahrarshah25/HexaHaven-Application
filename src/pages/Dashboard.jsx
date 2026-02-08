import React, { useEffect } from 'react'
import Navigator from '../Components/Dashboard Page/Navigator/Navigator'
import checkUser from '../utils/checkUser'

const Dashboard = () => {

  useEffect(() => {
    const getCurrentUser = async () => {
      const user = await checkUser();
      if(!user) return window.location.href = "/login"
    }
    getCurrentUser();
  })

  return (
    <div className='flex'>
        <Navigator />

        <main className='flex-1 p-6'>

            <title>Hexa Haven</title>

        </main>
    </div>
  )
}

export default Dashboard