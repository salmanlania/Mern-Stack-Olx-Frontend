import React from 'react';
import '../css/Footer.css'; // Import your custom CSS file

const PopularCategories = () => (
  <nav>
    <ul>
      <li className="boldHead"><b>POPULAR CATEGORIES</b></li>
      <br />
      <li>Cars</li>
      <li>Flats for rent</li>
      <li>Mobile Phones</li>
      <li>Jobs</li>
    </ul>
  </nav>
);

const TrendingSearches = () => (
  <nav>
    <ul>
      <li className="boldHead"><b>TRENDING SEARCHES</b></li>
      <br />
      <li>Watches</li>
      <li>Watches</li>
      <li>Books</li>
      <li>Dogs</li>
    </ul>
  </nav>
);

const AboutUs = () => (
  <nav>
    <ul>
      <li className="boldHead"><b>ABOUT US</b></li>
      <br />
      <li>About EMPG</li>
      <li>OLX Blog</li>
      <li>Contact Us</li>
      <li>OLX for Businesses</li>
    </ul>
  </nav>
);

const OlxNavigation = () => (
  <nav>
    <ul>
      <li className="boldHead"><b>OLX</b></li>
      <br />
      <li>Help</li>
      <li>Sitemap</li>
      <li>Terms of use</li>
      <li>Privacy Policy</li>
    </ul>
  </nav>
);

const FooterIcons = () => (
  <nav>
    <ul className="IconsFooter">
      <li className="boldHeadOne"><b>ABOUT US</b></li>
      <br />
      <div className="footerIcons">
        <img src="./images/s18.jpg" width="90px" alt="" />
        <img src="./images/s19.jpg" width="90px" alt="" />
        <img src="./images/s20.jpg" width="90px" alt="" />
      </div>
    </ul>
  </nav>
);

const FooterPart2 = () => (
  <footer className="footerPart2">
    <div className="footerStarting">
      <div className="footerStart">
        <PopularCategories />
      </div>
      <br />
      <div className="footerStart2">
        <TrendingSearches />
      </div>
      <br />
      <div className="footerStart3">
        <AboutUs />
      </div>
      <br />
      <div className="footerStart4">
        <OlxNavigation />
      </div>
      <br />
      <div className="footerStart5">
        <FooterIcons />
      </div>
    </div>
  </footer>
);

const FooterBottom = () => (
  <footer className="footerBottom">
    <div className="container-fluid myBottom">
      <p>Free Classifieds in Pakistan . © 2006-2022 OLX</p>
    </div>
  </footer>
);

const Footer = () => (
  <div>
    <FooterPart2 />
    <FooterBottom />
  </div>
);

export default Footer;
