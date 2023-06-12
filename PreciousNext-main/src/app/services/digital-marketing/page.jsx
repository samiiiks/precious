import React from 'react';
import '../../../styles/globals.css';
import Link from 'next/link';
import Image from 'next/image';
import Scriptsnew from '../../../Scriptnew';
// import Preloader from '../../../Preloader';
import Header from '../../../Header';
import Footer from '../../../Footer'
import Headpage from '../../../Headpage';

const ServiceDigitalMarketing = () => {
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
        Digital Marketing <br />
        <span>Services</span>
      </h2>
      <ul className="page-breadcrumb style-none d-flex">
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/services">
            Services
          </Link>
        </li>
        <li className="current-page">Digital Marketing Services</li>
      </ul>
    </div>
    <Image
      src="/images/assets/ils_20.svg"
      alt=""
      className="shapes illustration-two"
      width={40} height={40}
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
          <div className="col-md-6">
            <Image src="/images/assets/boost.png" alt="" width={400} height={400} />
          </div>
          <div className="col-md-6">
            <div className="service-common-meta ps-lg-5 ms-xxl-4">
              <h3 className="main-title mt-30">
                Boost Your Client Base With Data-Driven and Targeted Strategies
              </h3>
              <p>
                We offer a veritable cornucopia of digital marketing solutions to
                help elevate your business online. Our experts can take your
                digital presence to new heights, from creating a captivating
                website to executing a well-organized social media campaign.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  <div className="fancy-feature-nineteen position-relative pt-80">
      <div className="team-section-one bg-pink-gradient pb-80">
        <div className="container">
          <div className="title-style-one text-center pt-30 xs-pb-20" >
            <h3 className="main-title mx-md-5 px-md-5 mx-2">
              Enhance Your Digital Presence and <br /> Magnify Sales With Our
              Exclusive Marketing Services
            </h3>
            <p className="sub-title">
              Our team of experts has over a decade of experience crafting
              responsive online marketing strategies.
            </p>
          </div>
          <div className="block-style-thirteen pt-30">
            <div className="dm-box style-none list-item">
              <div className="soft-dev" >
                <div className="numb tran3s">1</div>
                <p>Are you experiencing a marketing slump?</p>
              </div>
              <div className="soft-dev ms-auto"  data-aos-delay={50}>
                <div className="numb tran3s">2</div>
                <p>
                  Have you noticed a decline in lead generation and business
                  inquiries?
                </p>
              </div>
              <div className="soft-dev"  data-aos-delay={50}>
                <div className="numb tran3s">3</div>
                <p>
                  Do you have no idea where to start when it comes to marketing?
                </p>
              </div>
              <div className="soft-dev ms-auto"  data-aos-delay={50}>
                <div className="numb tran3s">4</div>
                <p>
                  Does your agency's current marketing strategy not achieve the
                  results you expect?
                </p>
              </div>
            </div>
          </div>
        </div>
        <Image src="/images/shape/shape_42.svg" alt="" className="shapes shape-one" width={200} height={200} />
        <Image src="/images/shape/shape_43.svg" alt="" className="shapes shape-two" width={200} height={200} />
      </div>
    </div>
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

export default ServiceDigitalMarketing
