import React from 'react';
import '../../../styles/globals.css';
import Link from 'next/link';
import Image from 'next/image';
import Scriptsnew from '../../../Scriptnew';
// import Preloader from '../../../Preloader';
import Header from '../../../Header';
import Footer from '../../../Footer'
import Headpage from '../../../Headpage';

const ServiceFullStackDevelopment = () => {
  return (
  
    <div>
   <Headpage/>
      <>
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
          Full Stack Development <br />
          <span>Services</span>
        </h2>
        <ul className="page-breadcrumb style-none d-flex">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="Services.html">Services</a>
          </li>
          <li className="current-page">Full Stack Development Services</li>
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
          <div className="col-md-6">
            <Image
              src="/images/assets/full-stack.png"
              className="img-common"
              alt=""
              width={400}
              height={300}
            />
          </div>
          <div className="col-md-6">
            <div className="service-common-meta">
              <h3 className="main-title">
                Work with the best-in-class full-stack development company.
              </h3>
              <p>
                We provide full-stack development services, including
                development, testing, deployment, and management. As a custom,
                seamless, and scalable software provider, we help you realize
                your vision at scale.
              </p>
              <h3 className="sub-title mt-50">
                Industry-leading technical skills are one of our strengths.
              </h3>
              <p>
                Evernote Web offers a complete lineup of features from any major
                Maecena quis interdum, orci at euis dapibus, mass ante pharetra
                tellus done.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <img src="images/shape/shape_48.svg" alt="" class="shapes bg-shape"> */}
  </div>{" "}
  {/* /.service-details */}
  {/* 
			=============================================
				Fancy Short Banner Five
			============================================== 
			*/}
  <div className="fancy-feature-nineteen position-relative pt-80 pb-30">
      <div className="container">
        <div className="row">
          {/* <div class="col-xxl-5 col-lg-6 col-md-7"> */}
          <div className="block-style-thirteen">
            <div className="title-style-three text-center pb-15">
              <div className="sc-title">WORK PROCESS</div>
              <h3 className="main-title">
                Industry-Leading <span> Technical Skills</span> <br /> Are One Of
                Our Strengths.
              </h3>
            </div>{" "}
            {/* /.title-style-three */}
            <div className="fsd-box d-flex flex-wrap style-none list-item">
              <div
                className="soft-dev tech-box position-relative"
                
              >
                <div className="development-img">
                  <Image src="/images/assets/front_end_development.svg" alt="" width={200} height={200} />
                </div>
                <h6>Front-end Development</h6>
                <p className="fsd-sub-box">
                  Besides HTML and CSS, our full-stack front-end developers have
                  Bootstrap, JavaScript, Vue.js, Node.js, and React.js. We use
                  technologies that make your solutions more appealing and
                  efficient. You can expect a user-friendly UX/UI platform for
                  your websites, applications, and products with our services.
                </p>
              </div>
              <div
                className="soft-dev tech-box position-relative"
                
                data-aos-delay={50}
              >
                <div className="development-img">
                  <Image src="/images/assets/back-end_development.svg" alt="" width={200} height={200} />
                </div>
                <h6>Back-end Development</h6>
                <p className="fsd-sub-box">
                  Our full-stack developers have experience with server-side
                  applications such as APIs and applications. We build websites
                  that deliver exactly what customers expect. Ruby on Rails,
                  Python, and Node.js are some of the programming languages we use
                  for our back-end developers.
                </p>
              </div>
              <div
                className="soft-dev tech-box position-relative"
               
                data-aos-delay={50}
              >
                <div className="development-img">
                  <Image src="/images/assets/api-backend-banner.svg" alt="" width={200} height={200} />
                </div>
                <h6>API Integration</h6>
                <p className="fsd-sub-box">
                  We have extensive experience building custom web APIs and
                  integrating them with our clients' systems. We provide API
                  development services and assistance with your solution's smooth
                  and seamless operation. We can build custom APIs that external
                  applications can use without issues. With our tools, you can
                  integrate your payment systems, social networks, business tools,
                  etc.
                </p>
              </div>
              <div
                className="soft-dev tech-box position-relative"
                
                data-aos-delay={50}
              >
                <div className="development-img">
                  <Image src="/images/assets/database.png" alt="" width={200} height={200} />
                </div>
                <h6> Database Configuration</h6>
                <p className="fsd-sub-box">
                  Our full-stack developers gather and organize crucial
                  information using vast amounts of data. When it comes to custom
                  database development, we've done almost everything. Databases
                  can now be linked to any back-end language.
                </p>
              </div>
            </div>
          </div>{" "}
          {/* /.block-style-thirteen */}
          {/* </div> */}
        </div>
      </div>{" "}
      {/* /.container */}
    </div>
  {/* /.fancy-feature-nineteen */}
  {/*
			=====================================================
				Team Section One
			=====================================================
			*/}
 <div className="fancy-feature-nineteen position-relative">
      <div className="team-section-one pt-50 pb-80">
        <div className="container">
          <div className="row align-items-center">
            {/* <div class="col-sm-6"> */}
            <div
              className="title-style-one text-center xs-pb-20"
              
            >
              <h3 className="main-title">
                {" "}
                Why Choose Precious Infosystem For <br /> Full-Stack Development?
              </h3>
            </div>
          </div>
          <div className="block-style-thirteen row pt-0">
            <div className="fsd-box d-flex flex-wrap style-none list-item">
              <div className="soft-dev" >
                <div className="numb tran3s">1</div>
                <p>A dedicated team of developers</p>
              </div>
              <div className="soft-dev"  data-aos-delay={50}>
                <div className="numb tran3s">2</div>
                <p>Timelines that are suitable for projects</p>
              </div>
              <div className="soft-dev"  data-aos-delay={50}>
                <div className="numb tran3s">3</div>
                <p>Several people can manage the site at the same time.</p>
              </div>
              {/* Rest of the items */}
            </div>
          </div>
        </div>
        <Image
          src="/images/shape/shape_42.svg"
          alt=""
          className="shapes shape-one"
          width={100} // Set the desired width
          height={100} // Set the desired height
        />
        <Image
          src="/images/shape/shape_43.svg"
          alt=""
          className="shapes shape-two"
          width={100} // Set the desired width
          height={100} // Set the desired height
        />
      </div>
    </div>
  {/*
			=====================================================
				Footer
			=====================================================
			*/}
 <Footer/>
</>
	<Scriptsnew/>
    </div>
  )
}

export default ServiceFullStackDevelopment
