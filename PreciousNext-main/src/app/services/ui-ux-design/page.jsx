import React from 'react';
import '../../../styles/globals.css';
import Link from 'next/link';
import Image from 'next/image';
import Scriptsnew from '../../../Scriptnew';
// import Preloader from '../../../Preloader';
import Header from '../../../Header';
import Footer from '../../../Footer'
import Headpage from '../../../Headpage';

const Serviceuiuxdesign = () => {
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
        <h2 className="intro-title">
          UI/UX Design <br />
          <span>Service</span>
        </h2>
        <ul className="page-breadcrumb style-none d-flex">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="Services.html">Services</a>
          </li>
          <li className="current-page">UI/UX Design Services</li>
        </ul>
      </div>
      <img
        src="images/assets/ils_20.svg"
        alt=""
        className="shapes illustration-two"
      />
    </div>
  {/* /.theme-inner-banner */}
  {/* 
			=============================================
				Service Details
			============================================== 
			*/}
    <div className="service-common position-relative pt-80">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 ssd-img">
            <Image src="/images/assets/robust-software.png" alt="" width={500} height={500} />
          </div>
          <div className="col-md-6">
            <div className="service-details-meta ps-lg-5 ms-xxl-4">
              <h3 className="main-title">UX AND UI DESIGN SERVICES</h3>
              <p>
                Precious Infosystem understands the importance of effective design
                for digital success. Modern businesses and enterprises need
                people-first, appealing, and pleasant strategies. Our UI/UX design
                company offers comprehensive UI/UX services, including branding,
                responsive web design, mobile app design, user experience
                consulting, and promotional designs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/* /.service-details */}
  {/* 
			=============================================
				Fancy Short Banner Five
			============================================== 
			*/}
    <div className="fancy-feature-nineteen position-relative pt-130 lg-pt-80">
      <div className="container">
        <div className="row">
          <div className="block-style-thirteen">
            <div className="title-style-three text-center pb-15">
              <div className="sc-title">WORK PROCESS</div>
              <h2 className="main-title">
                Our UI UX <span>Design</span> Services
              </h2>
            </div>
            <div className="style-none ui-ux-box list-item">
              <div className="soft-dev">
                <div className="numb tran3s">1</div>
                <h6>Custom Web Design &amp; Development</h6>
                <span>
                  Providing customized and modern web solutions to meet your
                  products and services needs and fulfil organizational goals is
                  what we do.
                </span>
              </div>
              <div
                className="soft-dev ms-auto"
                data-aos-delay={50}
              >
                <div className="numb tran3s">2</div>
                <h6>Corporate Branding &amp; Graphics Design</h6>
                <span>
                  We ensure the finest corporate graphic designs that create and
                  develop the brand's visual identity, with our skilled designers
                  understanding the value of corporate branding. The design
                  elements represent the brand by visually showcasing the
                  organization's ideals.
                </span>
              </div>
              <div className="soft-dev"  data-aos-delay={50}>
                <div className="numb tran3s">3</div>
                <h6>Wireframing</h6>
                <span>
                  We offer an overview of products based on user requirements,
                  determining the flow and structure of design elements.
                </span>
              </div>
              <div
                className="soft-dev ms-auto"
                data-aos-delay={50}
              >
                <div className="numb tran3s">4</div>
                <h6> Mobile App Design</h6>
                <span>
                  We ensure a perfect look and feel of mobile apps consisting of
                  good quality user interface and user experience elements.
                </span>
              </div>
              <div className="soft-dev" data-aos-delay={50}>
                <div className="numb tran3s">5</div>
                <h6> Wearables App Design</h6>
                <span>
                  Our team designs and creates enriched wearable app designs for
                  your wearables, gadgets, and devices.
                </span>
              </div>
              <div
                className="soft-dev ms-auto"
                data-aos="fade-up"
                data-aos-delay={50}
              >
                <div className="numb tran3s">6</div>
                <h6> Product Design</h6>
                <span>
                  Understanding user expectations allows us to design products
                  that holistically address industry-specific needs.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/* /.fancy-feature-nineteen */}
  {/*
			=====================================================
				Footer
			=====================================================
			*/}
 <Footer/>
</div>
<Scriptsnew/>
      

    </div>
  )
}

export default Serviceuiuxdesign;
