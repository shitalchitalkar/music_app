import "./Navbar.css";

function Navbar(){
    return(
        <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="logo">Ryhthm</a>

        <div className="nav-menu">
          <a href="#">Home</a>
          <a href="#about">About Us</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#tedx">TEDx</a>
          <a href="#contact">Contact Us</a>
        </div>
      </div>
    </nav>

    );
}
export default Navbar;