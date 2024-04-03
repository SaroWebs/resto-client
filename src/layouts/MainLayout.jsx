import React from 'react'
import BottomNav from '../components/navigation/BottomNav'

const MainLayout = (props) => {
  return (
    <div>
        {props.children}
        <BottomNav/>
    </div>
  )
}

export default MainLayout