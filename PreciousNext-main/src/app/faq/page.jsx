import React from 'react';
import '../../styles/globals.css';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../Footer';
import Scriptsnew from '../../Scriptnew';
import Headpage from '../../Headpage';
//import Preloader from '../../Preloader';
import Header from '../../Header';

const faq = () => {
  return (
   
    <div>
    
      <Headpage/>
      <div className="main-page-wrapper">
  {/* ===================================================
				Loading Transition
			==================================================== */}
 
    {/* <Preloader/> */}
  {/* 
			=============================================
				Theme Main Menu
			============================================== 
			*/}
  
<Header/>
  {/* /.theme-main-menu */}
  {/* 
			=============================================
				Theme Inner Banner
			============================================== 
			*/}
   <div className="theme-inner-banner">
      <div className="container">
        <h2 className="intro-title text-center">Contact Page</h2>
        <ul className="page-breadcrumb style-none d-flex justify-content-center">
          <li>
            <Link href="index.html">Home</Link>
          </li>
          <li className="current-page">Contact</li>
        </ul>
      </div>
      <Image src="/images/shape/shape_38.svg" alt="" className="shapes shape-one" width={40} height={40}/>
      <Image src="/images/shape/shape_39.svg" alt="" className="shapes shape-two" width={40} height={40}/>
    </div>
  {/* /.theme-inner-banner */}
  {/*
			=====================================================
				Feature Section Twenty
			=====================================================
			*/}
  <div className="fancy-feature-twenty position-relative pb-50 pt-100">
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <div className="block-style-five pe-xxl-5 me-xxl-5 md-pb-50">
            <div className="title-style-three">
              <div className="sc-title">QUESTIONS &amp; ANSWERS</div>
              <h2 className="main-title">
                Any <span>Questions?</span> Find here.
              </h2>
            </div>
            <p className="pt-20 pb-15">
              Do you have any questions? Check it out here. Can't find the
              answer you're looking for? Feel free to contact us
            </p>
            <Link href="/contactUs" className="btn-eight ripple-btn">
              Contact us
            </Link>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="accordion accordion-style-one" id="accordionOne">
            <div className="accordion-item">
              <div className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  A custom application has been developed. Would you be able to
                  take over the software development process?
                </button>
              </div>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionOne"
              >
                <div className="accordion-body">
                  <p>
                    We are familiar with legacy software and older programming
                    languages and are capable of taking over projects.
                    Generally, we can either:
                  </p>
                  <ul>
                    <li>Develop your platform on an ongoing basis; or</li>
                    <li>
                      If you would like to rebuild an ancient system, we can use
                      this as the starting point for developing a modern
                      application.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Rest of the accordion items */}
          </div>
        </div>
      </div>
    </div>
    <Image src="images/shape/shape_36.svg" alt="" className="shapes shape-one" width={40} height={40}/>
    <div className="shapes oval-one" />
  </div>
  {/* /.fancy-feature-twenty */}
  {/*
			=====================================================
				Footer
			=====================================================
			*/}
    {/* <div className="footer-style-four theme-basic-footer">
      <div className="container">
        <div className="inner-wrapper">
          <div className="row">
            <div className="col-lg-4 footer-intro mb-40" data-aos="fade-up">
              <div className="footerlogo">
                <Link href="/">
                  <a data-aos="fade-up">
                    <Image
                      src="images/logo/preciousLogoSquare.png"
                      alt=""
                      width={130}
                    />
                  </a>
                </Link>
              </div>
              <p>
                We are committed to our relentless pursuit of developing efficient
                solutions for small to large companies and individuals to make
                technology work with you, for you!
              </p>
            </div>
            <div className="col-lg-2 col-sm-4 ms-auto mb-30">
              <h5 className="footer-title">Links</h5>
              <ul className="footer-nav-link style-none">
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a>About us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <a>Services</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us">
                    <a>Contact Us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/faq">
                    <a>FAQ</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-4 mb-30">
              <h5 className="footer-title">Services</h5>
              <ul className="footer-nav-link style-none">
                <li>
                  <Link href="/service-software-development">
                    <a>Software Development Services</a>
                  </Link>
                </li>
                <li>
                  <Link href="/service-website-development">
                    <a>Website Development Services</a>
                  </Link>
                </li>
                <li>
                  <Link href="/service-full-stack-development">
                    <a>Full Stack Development Services</a>
                  </Link>
                </li>
                <li>
                  <Link href="/service-ui-ux-design">
                    <a>UI/UX Development Services</a>
                  </Link>
                </li>
                <li>
                  <Link href="/service-digital-marketing">
                    <a>Digital Marketing Services</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4 mb-30">
              <h5 className="footer-title">Social</h5>
              <ul className="d-flex social-icon style-none">
                <li>
                  <a href="https://www.facebook.com/PreciousInfoSystem/" target="_blank">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/preciousinfosystem/" target="_blank">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/precious.infosystem/" target="_blank">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="bottom-footer">
            <div className="d-lg-flex justify-content-between align-items-center mt-2">
              <ul className="order-lg-1 pb-15 d-flex justify-content-center footer-nav style-none">
               
              </ul>
              <p className="copyright text-center order-lg-0 pb-15">
                Copyright @2023 | <b>Precious Infosystem Pvt. Ltd.</b>
              </p>
            </div>
          </div>
        </div>
       
      </div>
    </div>
 
  <button className="scroll-top">
    <i className="bi bi-arrow-up-short" />
  </button> */}
  <Footer/>
</div>
	{/* <Script src="vendor/jquery.min.js"></Script>
		
		<Script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></Script>

		<Script src="vendor/aos-next/dist/aos.js"></Script>
	
		<Script src="vendor/slick/slick.min.js"></Script>
		
		<Script src="vendor/jquery.counterup.min.js"></Script>
		<Script src="vendor/jquery.waypoints.min.js"></Script>
		
		<Script src="vendor/fancybox/dist/jquery.fancybox.min.js"></Script>
		
		<Script  src="vendor/isotope.pkgd.min.js"></Script>

		
		<Script src="js/theme.js"></Script> */}
	<Scriptsnew/>
    </div>
  )
}

export default faq
