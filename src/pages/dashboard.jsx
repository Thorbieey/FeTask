import React from 'react'

const Dashboard = () => {
  return (
    <div style={{ gridTemplateColumns: '256px repeat(auto-fit, minmax(256px, 1fr))', boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.06)' }} className='grid ' >
        <div id='SideBar'>
            <img src="/LOGO.svg" alt="Logo of business" />
        </div>
        <div> hi</div>
    </div>
  )
}

export default Dashboard

// box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.06);
