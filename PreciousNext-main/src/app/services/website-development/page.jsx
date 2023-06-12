import React from 'react';
import '../../../styles/globals.css';
import Link from 'next/link';
import Image from 'next/image';
import Scriptsnew from '../../../Scriptnew';
// import Preloader from '../../../Preloader';
import Header from '../../../Header';
import Footer from '../../../Footer'
import Headpage from '../../../Headpage';

const ServiceWebsitedevelopment = () => {
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
          Website Development <br />
          <span>Services</span>
        </h2>
        <ul className="page-breadcrumb style-none d-flex">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li className="current-page">Website Development Services</li>
        </ul>
      </div>
      <Image
        src="/images/assets/ils_20.svg"
        alt=""
        className="shapes illustration-two"
        width={500}
        height={300}
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
          <div className="col-md-4 ssd-img">
            <Image src="/images/assets/robust-software.png" alt="" width={300} height={200} />
          </div>
          <div className="col-md-8">
            <div className="service-common-meta ps-lg-5 ms-xxl-4">
              <h3 className="main-title">
                For every project, we deliver top-notch website solutions.
              </h3>
              <p>
                Websites are virtual worlds where you can communicate with your
                target audience. We have completed successful projects for a
                variety of clients across the globe. The purpose of custom website
                development is to meet the specific needs of each business owner.
                A website is an essential part of improving a business. Today's
                competitive market makes it difficult to survive without a
                top-quality website. You need the most effective Digital Marketing
                Solution and Professional Web Development Services for your
                business to grow. The most innovative Website Development
                Services, combined with the most up-to-date technology, are
                offered by Precious Infosystem.
              </p>
              <h3 className="sub-title">
                How does Precious Infosystem stand out from the competition?
              </h3>
              <p>
                Websites are essential to the success of every organization. If
                you want an attractive and stylish website for your business, you
                should hire the Best Web Development Company.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <img src="/images/shape/shape_48.svg" alt="" className="shapes bg-shape" /> */}
    </div>
  {/* /.service-details */}
  {/*
			=====================================================
				Team Section One
			=====================================================
			*/}
 <div className="fancy-feature-nineteen position-relative pt-80 pb-50">
      <div className="container">
        <div className="row align-items-center">
          <div className="title-style-one text-center xs-pb-20">
            <h3 className="main-title">
              Precious Infosystem ensures the following:
            </h3>
            <p>
              Our team of highly qualified and talented Web Developers is Precious
              Infosystem's core strength as a Web Development company. Our members
              have experience in a variety of industries.
            </p>
          </div>
        </div>
        <div className="block-style-thirteen row pt-0">
          <div className="swd-box d-flex flex-wrap style-none list-item">
            <div className="soft-dev">
              <div className="numb tran3s">1</div>
              <p>
                By setting the highest standards of quality and effectiveness, we
                design websites for our clients that meet their business
                objectives and goals.
              </p>
            </div>
            <div className="soft-dev"  data-aos-delay={50}>
              <div className="numb tran3s">2</div>
              <p>We extensively test our code to ensure that it is bug-free.</p>
            </div>
            <div className="soft-dev"  data-aos-delay={50}>
              <div className="numb tran3s">3</div>
              <p>Several people can manage the site at the same time.</p>
            </div>
            <div className="soft-dev"  data-aos-delay={50}>
              <div className="numb tran3s">4</div>
              <p>Pixel-perfect and responsive design.</p>
            </div>
          </div>
        </div>
      </div>
      <Image src="/images/shape/shape_42.svg" alt="" className="shapes shape-one" width={100} height={100} />
      <Image src="/images/shape/shape_43.svg" alt="" className="shapes shape-two" width={100} height={100} />
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

export default ServiceWebsitedevelopment
