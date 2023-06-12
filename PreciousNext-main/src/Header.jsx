import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = ({ label }) => {

  return (
    <div>
      <header class="theme-main-menu sticky-menu theme-menu-four">
        <div class="inner-content container">
          <div class="d-flex align-items-center justify-content-between">
            <div class="logo order-lg-0">
              <a href="index.html" class="d-block">
                <img src="images/logo/preciousLogoSquare.png" class="navlogo" alt="Logo" width="128" />
                <img src="images/logo/precious icon.png" class="stickylogo" alt="Logo" width="80" />
              </a>
            </div>

            {/* <div class="right-widget d-flex align-items-center">
              <div class="call-button d-none d-xl-block me-5">
                Call us <a href="tel:+91- 9522280818">+91- 9522280818</a>
              </div>
              <button class="menu-search-btn tran3s " type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                <i class="bi bi-search"></i>
              </button>
              <a href="#exampleModalToggle" class="send-msg-btn tran3s d-none d-lg-block ripple-btn" data-bs-toggle="modal" role="button">Contact Us</a>
            </div> */}

            <nav class="navbar navbar-expand-lg">
              <button class="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" href="#" role="button">Home</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="javascript:void(0);"
                      onclick="Services.html"><span>Company</span></a>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item"><span>About US</span></a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item"><span>Industries we serve                      </span></a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item"><span>Career                      </span></a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item"><span>Blog                      </span></a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="javascript:void(0);" role="button">Portfolio</a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="javascript:void(0);"
                      onclick="Services.html"><span>Services</span></a>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item"><span>Website Development
                        </span></a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item"><span>Mobile App Development
                        </span></a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item"><span>Software Development
                        </span></a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item"><span>Full Stack Development
                        </span></a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item"><span>IT Consultancy
                        </span></a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item"><span>UI/UX Design
                        </span></a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item"><span>Digital Marketing
                        </span></a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="javascript:void(0);"
                      onclick="Services.html"><span>Technology </span></a>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item"><span>Ruby On Rails
                        </span></a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item"><span>Vue JS
                        </span></a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item"><span>React JS
                        </span></a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item"><span>Next JS
                        </span></a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item"><span>Shopify
                        </span></a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="contact-us.html" role="button">Contact us</a>
                  </li>
                  <li class="nav-item">
                    <a href="contact-us.html" class="send-msg-btn tran3s d-none d-lg-block ripple-btn">{label}</a>
                  </li>
                  {/* <li class="nav-item active dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Pages</a>
                    <ul class="dropdown-menu">
                      <li class="dropdown-submenu dropdown">
                        <a class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" href="#"><span>About Us</span></a>
                        <ul class="dropdown-menu">
                          <li><a href="About.html" class="dropdown-item"><span>About Us One</span></a></li>
                          <li><a href="about-us2.html" class="dropdown-item"><span>About Us Two</span></a></li>
                        </ul>
                      </li>
                      <li class="dropdown-submenu active dropdown">
                        <a class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" href="#"><span>Services</span></a>
                        <ul class="dropdown-menu">
                          <li><a href="Services.html" class="dropdown-item"><span>Service One</span></a></li>
                          <li><a href="service-V2.html" class="dropdown-item"><span>Service Two</span></a></li>
                          <li><a href="service-details-V1.html" class="dropdown-item"><span>Service Details</span></a></li>
                        </ul>
                      </li>
                      <li class="dropdown-submenu dropdown">
                        <a class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" href="#"><span>Our Team</span></a>
                        <ul class="dropdown-menu">
                          <li><a href="team.html" class="dropdown-item"><span>Team Member</span></a></li>
                          <li><a href="team-details.html" class="dropdown-item"><span>Team Details</span></a></li>
                        </ul>
                      </li>
                      <li class="dropdown-submenu dropdown">
                        <a class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" href="#"><span>Other Pages</span></a>
                        <ul class="dropdown-menu">
                          <li><a href="faq.html" class="dropdown-item"><span>Faq</span></a></li>
                          <li><a href="signin.html" class="dropdown-item"><span>Signin</span></a></li>
                          <li><a href="sign-up.html" class="dropdown-item"><span>Signup</span></a></li>
                          <li><a href="404.html" class="dropdown-item"><span>404 Error</span></a></li>
                        </ul>
                      </li>
                      <li><a href="testimonial.html" class="dropdown-item"><span>Testimonials</span></a></li>
                      <li><a href="pricing.html" class="dropdown-item"><span>Our Pricing</span></a></li>
                    </ul>
                  </li> */}
                  {/* <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Portfolio</a>
                    <ul class="dropdown-menu">
                      <li><a href="portfolio-V1.html" class="dropdown-item"><span>Portfolio 3 Column</span></a></li>
                      <li><a href="portfolio-V2.html" class="dropdown-item"><span>Portfolio 2 Column</span></a></li>
                      <li><a href="portfolio-V3.html" class="dropdown-item"><span>Portfolio Masonry</span></a></li>
                      <li><a href="portfolio-details-V1.html" class="dropdown-item"><span>Single Portfolio</span></a></li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                      data-bs-auto-close="outside" aria-expanded="false">Blog</a>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="blog-V1.html" class="dropdown-item"><span>Grid Layout</span></a>
                      </li>
                      <li>
                        <a href="blog-V2.html" class="dropdown-item"><span>Grid With
                          Sidebar</span></a>
                      </li>
                      <li>
                        <a href="blog-V3.html" class="dropdown-item"><span>Blog Masonary</span></a>
                      </li>
                      <li>
                        <a href="blog-V4.html" class="dropdown-item"><span>Blog Standard</span></a>
                      </li>
                      <li>
                        <a href="blog-details.html" class="dropdown-item"><span>Blog
                          Details</span></a>
                      </li>
                    </ul>
                  </li> */}
                </ul>
                {/* Mobile Content */}
                {/* <div class="mobile-content d-block d-lg-none">
                  <div class="d-flex flex-column align-items-center justify-content-center mt-70">
                    <a href="contact-us.html" class="send-msg-btn tran3s mb-10">Contact Us</a>
                    <div class="call-button">
                      Call us <a href="#">+91- 9522280818</a>
                    </div>
                  </div>
                </div> */}
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
    //   <div>
    //  <header className="theme-main-menu sticky-menu theme-menu-four">
    //         <div className="inner-content container-fluid-lg">
    //           <div className="d-flex align-items-center">
    //             <div className="logo order-lg-0">
    //               <Link href="/about" className="d-block">
    //                 <Image
    //                   src="/images/logo/preciousLogoSquare.png"
    //                   className="navlogo"
    //                   alt="Logo"
    //                   width={128}
    //                   height={128}
    //                 />
    //                 <Image
    //                   src="/images/logo/precious icon.png"
    //                   className="stickylogo"
    //                   alt="Logo"
    //                   width={80}
    //                   height={80}
    //                 />

    //               </Link>
    //             </div>
    //             <div className="right-widget d-flex align-items-center ms-auto order-lg-3">
    //               {/* <div className="call-button d-none d-xl-block me-5">
    //                 Call us     <Link href="tel:+91-9522280818"> +91-9522280818</Link>
    //               </div> */}
    //               <Link href="/contactUs" className="send-msg-btn tran3s d-none d-lg-block ripple-btn">

    //                 Contact Us

    //               </Link>
    //             </div>
    //             <nav className="navbar navbar-expand-lg order-lg-2">
    //               <button
    //                 className="navbar-toggler d-block d-lg-none"
    //                 type="button"
    //                 data-bs-toggle="collapse"
    //                 data-bs-target="#navbarNav"
    //                 aria-controls="navbarNav"
    //                 aria-expanded="false"
    //                 aria-label="Toggle navigation"
    //               >
    //                 <span></span>
    //               </button>
    //               <div className="collapse navbar-collapse" id="navbarNav">
    //                 <ul className="navbar-nav">
    //                   <li className="nav-item active">
    //                     <Link href="/" className="nav-link">
    //                       Home
    //                     </Link>
    //                   </li>
    //                   <li className="nav-item">
    //                     <Link href="/about" className="nav-link">
    //                       About Us
    //                     </Link>
    //                   </li>
    //                   <li className="nav-item dropdown">
    //                     <Link href="#" className="nav-link dropdown-toggle">

    //                       Services

    //                     </Link>
    //                     <ul className="dropdown-menu">
    //                       <li>
    //                         <Link href="/services/software-development" className="dropdown-item">
    //                           Software Development Service
    //                         </Link>
    //                       </li>
    //                       <li>
    //                         <Link href="/services/website-development" className="dropdown-item">
    //                           Website Development Service
    //                         </Link>
    //                       </li>
    //                       <li>
    //                         <Link href="/services/full-stack-development" className="dropdown-item">
    //                           Full-Stack Development Service
    //                         </Link>
    //                       </li>
    //                       <li>
    //                         <Link href="/services/ui-ux-design" className="dropdown-item">
    //                           UI/UX Design Service
    //                         </Link>
    //                       </li>
    //                       <li>
    //                         <Link href="/services/digital-marketing" className="dropdown-item">
    //                           Digital Marketing Service
    //                         </Link>
    //                       </li>
    //                     </ul>
    //                   </li>
    //                   <li className="nav-item">
    //                     <Link href="/contactUs" className="nav-link">
    //                       Contact
    //                     </Link>
    //                   </li>
    //                   <li className="nav-item">
    //                     <Link href="/career" className="nav-link">
    //                       Career
    //                     </Link>
    //                   </li>
    //                 </ul>
    //               </div>
    //             </nav>
    //           </div>
    //         </div>
    //       </header>
    //   </div>

  )
}
export default Header;