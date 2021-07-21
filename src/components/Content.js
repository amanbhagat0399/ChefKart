import React from 'react'
import './content.css'
import Subscription from './Subscription'
import Attendance from './Attendance'
import {useState} from 'react'

const Content = () => {

    const [active, setActive] = useState()
    return (
        <div className=" container content">
            <h1> My Subscription</h1>
            <div className="conatiner content-card">
                <Subscription/>
            </div>
            <div className="conatiner content-card-2">
                <div className="conatiner content-card-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
                </div>
            </div>
        </div>
    )
}
export default Content;
