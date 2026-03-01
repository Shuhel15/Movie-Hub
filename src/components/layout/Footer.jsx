 export const Footer = ()=>{
  return(
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h2 className="logo"><i class="fa-solid fa-clapperboard"></i>  Movie<span className="footer-span">Hub</span></h2>
          <p>Your ultimate destination for latest movies and reviews.</p>
        </div>

        <div className="footer-section">
          <h3 className="logo">Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/movies">Movies</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@moviehub.com</p>
          <p>Phone: +91 9876543210</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MovieHub | All Rights Reserved</p>
      </div>
    </footer>
  )
}