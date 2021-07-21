import './footer.css';
import React from 'react'

const BottomNavigation = () => {
    return (
        <div className="container py-3 foo-color">
            <div className="foo-icon">
                <a>
                <i class="fa fa-home fa-3x" aria-hidden="true"></i>
                </a>
            </div>
            <div className="foo-icon">
                <a>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="45" fill="currentColor" class="bi bi-compass" viewBox="0 0 16 16">
                    <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                    <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
                </svg>
                </a>
            </div>
            <div className="foo-icon">
                <a>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="45" fill="currentColor" class="bi bi-headset" viewBox="0 0 16 16">
                    <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
                </svg>
                </a>
               
            </div>
        </div>
    )
}

export default BottomNavigation;
