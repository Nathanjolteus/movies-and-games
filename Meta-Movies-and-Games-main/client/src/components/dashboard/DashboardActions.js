import React from 'react'
import { Link } from "react-router-dom"

export const DashboardActions = () => {
    return (
        <div>
           <section className="container">
              <Link to="/edit-profile"><button>Edit Profile</button></Link>
           </section>
        </div>
    )
}

export default DashboardActions
