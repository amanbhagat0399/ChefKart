
function Navigation() {
    let colorStyle = {
        color: 'white',
    }
    return (
        <div className="container py-3 nav-color" style={colorStyle}>
            <nav class="navbar">
                <i class="fa fa-bars fa-2x" aria-hidden="true"></i>
                <span className="nav-content">
                    ChefKart
                </span>
                <i class="fa fa-search fa-lg nav-search" aria-hidden="true"></i>
            </nav>
            <div className="nav-buttons">
                <a> Attendance</a>
            </div>
            <div className="nav-buttons">
                <a> Subscription</a>
            </div>
        </div>
    );
}

export default Navigation;


