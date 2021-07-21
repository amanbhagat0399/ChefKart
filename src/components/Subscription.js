import React from 'react'
import './subscription.css'

const Subscription = () => {
    return (
        <div className=" container sub">
            <div id="profile">
                <div className="premium"> &nbsp; Premium   &nbsp;</div>
                <h1>Aman Bhagat</h1>
                <h3>7982344341</h3>
                <hr/>
            </div>
            <div id="button1">
                <button type="button" class="btn btn-light btn1">Cancel Plan</button>
            </div>
            <div id="button2">
                <button type="button" class="btn btn-light btn2">Renew Plan</button>
            </div>
        </div>
    )
}
export default Subscription;

