import React from 'react';
import '../../../styles/globals.css';
import Link from 'next/link';
import Image from 'next/image';
import Scriptsnew from '../../../Scriptnew';
// import Preloader from '../../../Preloader';
import Header from '../../../Header';
import Footer from '../../../Footer'
import Headpage from '../../../Headpage';

const ServicesSoftwareDevelopment = () => {
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
          Software Development <br />
          <span>Service</span>
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
          <li className="current-page">Software Development Service</li>
        </ul>
      </div>
      <Image
        src="/images/assets/ils_20.svg"
        alt=""
        className="shapes illustration-two"
        height={40} width={80}
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
            <Image src="/images/assets/robust-software.png" alt="" width={300} height={300} />
          </div>
          <div className="col-md-6">
            <div className="service-common-meta ps-lg-5 ms-xxl-4">
              <h3 className="main-title">Custom Software Development Services</h3>
              <p>
                We deliver the most innovative solutions to our customers by
                employing the most talented engineers, utilizing cutting-edge
                technology, and using efficient methodologies. The professionals
                on our team have developed expertise in developing desktop, web,
                and mobile applications. Additionally, we provide cloud computing,
                DevOps, QA, UI, and UX. Globally, we have created custom software
                solutions for large, mid-sized, and small businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="fancy-feature-nineteen position-relative pt-80">
      <div className="container">
        <div className="block-style-thirteen mb-60">
          <div className="title-style-three text-center pb-15">
            <h3 className="main-title">
              We Offer A Variety Of <br /> <span>Software Development</span>{" "}
              Services
            </h3>
          </div>
          <div className="ssd-box style-none list-item">
            <div className="soft-dev">
              <div className="numb tran3s">1</div>
              <h6>Software Consulting</h6>
              <span>
                We evaluate, analyze, and explore a wide range of software
                solutions for you.
              </span>
            </div>
            <div
              className="soft-dev ms-auto"
             
            >
              <div className="numb tran3s">2</div>
              <h6>Custom Software Development</h6>
              <span>
                Developing customer-centric software is our specialty.
              </span>
            </div>
            <div className="soft-dev" data-aos-delay={50}>
              <div className="numb tran3s">3</div>
              <h6>Enterprise Software Solution</h6>
              <span>
                Our enterprise software solutions are tailored to meet the needs
                of your business.
              </span>
            </div>
            <div
              className="soft-dev ms-auto"
              data-aos-delay={50}
            >
              <div className="numb tran3s">4</div>
              <h6>Offshore Development Center</h6>
              <span>
                At competitive rates, we offer top-notch software solutions.
              </span>
            </div>
            <div className="soft-dev"  data-aos-delay={50}>
              <div className="numb tran3s">5</div>
              <h6>Software Integration</h6>
              <span>
                Integrated data, reliable APIs, and microservices help you improve
                your software.
              </span>
            </div>
            <div
              className="soft-dev ms-auto"
              data-aos-delay={50}
            >
              <div className="numb tran3s">6</div>
              <h6>Maintenance &amp; support</h6>
              <span>
                Maintaining and resolving our clients' issues round-the-clock is
                part of what we do.
              </span>
            </div>
          </div>
        </div>
        <div className="row d-flex align-items-center">
          <div className="col-md-6 ssd-img">
            <Image src="/images/assets/robust-software.png" alt="" width={600} height={400} />
          </div>
          <div className="col-md-6">
            <h3 className="sub-title">
              Would you like to build a robust software development solution?
            </h3>
            <p>
              Precious Infosystem's developers are subject matter experts. By
              leveraging their expertise and experience, they deliver top-notch
              software solutions.
            </p>
            <Link href="contact-us.html" className="btn-eight ripple-btn tran3s">
              Contact Now
            </Link>
          </div>
        </div>
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

export default ServicesSoftwareDevelopment
