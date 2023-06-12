import React from 'react';
import '../../styles/globals.css';
import Image from 'next/image';
import Link from 'next/link';
import Scriptsnew from '../../Scriptnew';
import Footer from '../../Footer';
import Headpage from '../../Headpage';
// import Preloader from '../../Preloader';
import Header from '../../Header';

const Services = () => {
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
        <h2 className="intro-title text-center">Our Services</h2>
        <p>
          Our flexible, reliable, and extensive services provide companies with
          world-class solutions. Across different arms of the IT umbrella, we
          offer a broad range of technology and domain expertise.
        </p>
        <ul className="page-breadcrumb style-none d-flex justify-content-center">
          {/* <li>
            <Link href="/">Home</Link>
          </li> */}
          <li className="current-page">Services</li>
        </ul>
      </div>
      <Image src="images/shape/shape_38.svg" alt="" className="shapes shape-one" width={40} height={40}/>
      <Image src="images/shape/shape_39.svg" alt="" className="shapes shape-two" width={40} height={40} />
    </div>
  {/* /.theme-inner-banner */}
  {/* 
			=============================================
				Feature Section Twenty Four
			============================================== 
			*/}
  <div className="fancy-feature-twentyFour pb-50">
      <div className="container">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide col-lg-4 col-sm-6 d-flex">
              <div className="block-style-four">
                <div className="icon d-flex align-items-end justify-content-center">
                  {/* <Image src="/images/icon/icon_35.svg" alt="" /> */}
                </div>
                <Link href="ServiceSoftwareDevelopment.html">
                  
                    <h5>Software Development</h5>
               
                </Link>
                <p>
                  Cutting-edge software solutions are built on the most effective development methodologies.
                </p>
                <Link href="ServiceSoftwareDevelopment.html" className="more-btn">
               
                    <Image src="/images/icon/icon_13.svg" alt="" className="tran3s" width={40} height={40} />
               
                </Link>
              </div>
            </div>

            {/* Add the remaining slides here */}
            
          </div>
          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
        </div>
      </div>
    </div>
  {/*
			=====================================================
				Industries and technologies we work with
			=====================================================
			*/}
 <div className="technology-section pt-70">
      <div className="container">
        <div className="block-style-seventeen">
          <h3 className="p-5 text-center">
            Technologies We Work With
          </h3>
          <div className="row row-cols-lg-5 row-cols-md-3 row-cols-2 d-flex flex-wrap justify-content-between">
            <div
              className="text-center p-3 block-style-eighteen"
             
            >
              <Image src="/images/assets/ror.png" alt="technology icon" width={64} height={64} />
              Ruby On Rails
            </div>
            <div
              className="text-center p-3 block-style-eighteen"
             
            >
              <Image src="/images/assets/python.png" alt="technology icon" width={64} height={64} />
              Python
            </div>
            <div
              className="text-center p-3 block-style-eighteen"
            
            >
              <Image src="/images/assets/django.png" alt="technology icon" width={64} height={64} />
              Django
            </div>
            <div
              className="text-center p-3 block-style-eighteen"
            
            >
              <Image src="/images/assets/js.png" alt="technology icon" width={64} height={64} />
              JavaScript
            </div>
            <div
              className="text-center p-3 block-style-eighteen"
              
            >
              <Image src="/images/assets/react.png" alt="technology icon" width={64} height={64} />
              ReactJS
            </div>
            <div
              className="text-center p-3 block-style-eighteen"
              
            >
              <Image src="/images/assets/angular.png" alt="technology icon" width={64} height={64} />
              AngularJS
            </div>
            <div
              className="text-center p-3 block-style-eighteen"
              
            >
              <Image src="/images/assets/html.png" alt="technology icon" width={64} height={64} />
              HTML5
            </div>
            <div
              className="text-center p-3 block-style-eighteen"
              
            >
              <Image src="/images/assets/css.png" alt="technology icon" width={64} height={64} />
              CSS3
            </div>
            <div
              className="text-center p-3 block-style-eighteen"
              
            >
              <Image src="/images/assets/redux.png" alt="technology icon" width={64} height={64} />
              REDUX
            </div>
            <div
              className="text-center p-3 block-style-eighteen"
             
            >
              <Image src="/images/assets/bootstrap.png" alt="technology icon" width={64} height={64} />
              Bootstrap
            </div>
          </div>
        </div>
        <div className="block-style-seventeen mt-3">
          <h3 className="p-5 text-center" >
            Industries We Serve
          </h3>
          <div className="row">
            <div className="col-md-6 industry-p text-xs	" >
              <p>
                Our industry specific software solutions streamlined business
                process along with efficient customer’s engagement. We identify
                opportunities to provide competitive advantages to our clients by
                leveraging the latest technology. Boost your revenue and drive
                operational excellence with our customized software industries
                solutions.
              </p>
              <ul>
                <div className="soft-dev" >
                  <Image
                    src="/images/assets/checked.png"
                    className="checked"
                    alt=""
                    width={16}
                    height={16}
                  />
                  Increased company value
                </div>
                <div className="soft-dev" >
                  <Image
                    src="/images/assets/checked.png"
                    className="checked"
                    alt=""
                    width={16}
                    height={16}
                  />
                  Reduces training overheads
                </div>
                <div className="soft-dev" >
                  <Image
                    src="/images/assets/checked.png"
                    className="checked"
                    alt=""
                    width={16}
                    height={16}
                  />
                  Increases employees efficiency and productivity
                </div>
                <div className="soft-dev" >
                  <Image
                    src="/images/assets/checked.png"
                    className="checked"
                    alt=""
                    width={16}
                    height={16}
                  />
                  Accelerate growth
                </div>
                <div className="soft-dev" >
                  <Image
                    src="/images/assets/checked.png"
                    className="checked"
                    alt=""
                    width={16}
                    height={16}
                  />
                  Streamline business operations and accounts
                </div>
                <div className="soft-dev" >
                  <Image
                    src="/images/assets/checked.png"
                    className="checked"
                    alt=""
                    width={16}
                    height={16}
                  />
                  Effective communication with customers, suppliers and partners
                </div>
                <div className="soft-dev" >
                  <Image
                    src="/images/assets/checked.png"
                    className="checked"
                    alt=""
                    width={16}
                    height={16}
                  />
                  Reduction in cost
                </div>
              </ul>
            </div>
            <div className="col-md-6" >
              <Image src="/images/assets/industry.png" alt="industries" width={500} height={500} />
            </div>
          </div>
        </div>
      </div>
    </div>
  {/* 
			=============================================
				Feature Section Nineteen
			============================================== 
			*/}
  <div className="position-relative pt-80">
      <div className="container">
        <div className="row">
          <div className="block-style-thirteen" >
            <div className={`title-style-three text-center pb-15`}>
              <div className="sc-title">WORK PROCESS</div>
              <h2 className="main-title">
                What Precious Infosystem <span>Does</span> And How It Works.
              </h2>
            </div>

            <div className={`style-none list-item row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 d-flex justify-content-center`}>
              <div >
                <div >1</div>
                <h6>Planning</h6>
                <span>
                  A solid project plan is developed with our customers at the
                  beginning of each project.
                </span>
              </div>

              <div  data-aos-delay={50}>
                <div >2</div>
                <h6>Wireframing</h6>
                <span>
                  Our wireframe team creates the software layout based on the
                  finalized plan.
                </span>
              </div>

              <div data-aos-delay={50}>
                <div >3</div>
                <h6>Design</h6>
                <span>
                  Now that we have locked down the wireframes for all pages, it is
                  time for our design team to create the final appearance and
                  feel.
                </span>
              </div>

              <div data-aos-delay={50}>
                <div >4</div>
                <h6>Code</h6>
                <span>
                  We are ready to begin coding the software and making it
                  functional now that the wireframes and designs have been
                  finalized.
                </span>
              </div>

              <div data-aos-delay={50}>
                <div >5</div>
                <h6>Deployment</h6>
                <span>
                  Deployment begins once the code has been tested, approved for
                  release, and sold or distributed to production.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div />
      <div />
      <Image src="/images/shape/shape_35.svg" alt="" width={60} height={60} />
    </div>
  {/* /.fancy-feature-nineteen */}
  {/* 
			=============================================
				Feature Section Nineteen
			============================================== 
			*/}
    <div className="fancy-feature-nineteen position-relative pt-80">
      <div className="container">
        <div className="row">
          <div className="">
            <div className="block-style-thirteen" >
              <div className="title-style-three text-center pb-15">
                <div className="sc-title">WORK PROCESS</div>
                <h2 className="main-title">
                  The Benefits of<span> Hiring </span> Our Software Developers
                </h2>
              </div>{" "}
              {/* /.title-style-three */}
              <div className="style-none list-item row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 d-flex justify-content-center">
                <div className="soft-dev">
                  <div className="numb tran3s">1</div>
                  <h6>Real-Time Communication</h6>
                  <span>
                    To allow real-time collaboration, our developers work within
                    your nearshore time zone.
                  </span>
                </div>
                <div className="soft-dev" data-aos-delay={50}>
                  <div className="numb tran3s">2</div>
                  <h6>Scalable Business Model</h6>
                  <span>
                    Using our expertise, we find the areas where you can gain the
                    most benefit.
                  </span>
                </div>
                <div className="soft-dev"  data-aos-delay={100}>
                  <div className="numb tran3s">3</div>
                  <h6>You Own The Source Code</h6>
                  <span>
                    The vast majority of software companies insist on owning the
                    source code, but not You, the sole owner of the source code
                    and intellectual property.
                  </span>
                </div>
              </div>
            </div>{" "}
            {/* /.block-style-thirteen */}
          </div>
        </div>
      </div>{" "}
      {/* /.container */}
      <div className="shapes oval-one" />
      <div className="shapes oval-two" />
      <Image src="/images/shape/shape_47.svg" alt="" className="shapes bg-shape-two" width={300} height={300} />
      <div className="feedback-section-five bg-white pt-80">
        <div className="container">
          <div className="title-style-three text-center" >
            <div className="sc-title">Testimonials</div>
            <h2 className="main-title">
              {" "}
              Our Process For <span>Software Development</span>
            </h2>
            <h5 className="mt-40">
              In a structured and systematic manner, we develop cutting-edge
              technology solutions based on industry best practices and
              development methodologies.
            </h5>
          </div>
          <div className="block-style-thirteen">
            <div className="style-none list-item row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 d-flex justify-content-center">
              <div className="soft-dev">
                <div className="numb tran3s">1</div>
                <h6>Planning</h6>
                <span>
                  We collect all the relevant information from them to develop
                  custom software development solutions according to the
                  customer's expectations.
                </span>
              </div>
              <div className="soft-dev">
                <div className="numb tran3s">2</div>
                <h6>Designing</h6>
                <span>
                  Specifications are followed when preparing documents and
                  systems. As a result, we can define the overall system
                  architecture and technology stack.
                </span>
              </div>
              <div className="soft-dev" data-aos-delay={50}>
                <div className="numb tran3s">3</div>
                <h6>Defining</h6>
                <span>
                  Defining and documenting software requirements is the next step
                  after requirement analysis.
                </span>
              </div>
              <div className="soft-dev"  data-aos-delay={50}>
                <div className="numb tran3s">4</div>
                <h6>Building</h6>
                <span>
                  Developers create the entire system using the chosen programming
                  language, techniques, and methodologies.
                </span>
              </div>
              <div className="soft-dev" data-aos-delay={50}>
                <div className="numb tran3s">5</div>
                <h6>Testing</h6>
                <span>
                  To find and fix defects in the software, we evaluate its
                  quality.
                </span>
              </div>
              <div className="soft-dev"  data-aos-delay={50}>
                <div className="numb tran3s">6</div>
                <h6>Deployment</h6>
                <span>
                  Upon release, the final software is checked for deployment
                  issues.
                </span>
              </div>
              <div className="soft-dev"  data-aos-delay={50}>
                <div className="numb tran3s">7</div>
                <h6>Maintenance</h6>
                <span>
                  Our goal is to ensure that needs are met and that the system
                  continues to perform as specified in the project's first phase.
                </span>
              </div>
            </div>
          </div>{" "}
          {/* /.block-style-thirteen */}
        </div>
      </div>
    </div>
  {/* 
			=============================================
				Fancy Short Banner Five
			============================================== 
			*/}
 <div className="fancy-short-banner-five">
      <div className="container">
        <div className="bg-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center text-lg-start" >
              <h3>
                Our engineers combine top tech skills with stellar ideas for winning projects.
              </h3>
            </div>
            <div className="col-lg-6 text-center text-lg-end" >
              <Link href="/contactUs"  className="msg-btn tran3s ripple-btn">
              
                  Send Us Message
               
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/* /.fancy-short-banner-five */}
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

export default Services

// import '../../../styles/globals.css';
// import Link from 'next/link';
// import Image from 'next/image';
// import Scriptsnew from '../../../Scriptnew';
// // import Preloader from '../../../Preloader';
// import Header from '../../../Header';
// import Footer from '../../../Footer'
// import Headpage from '../../../Headpage';

// const ServiceFullStackDevelopment = () => {
//   return (
  
//     <div>
//    <Headpage/>
//       <>
//   <div className="main-page-wrapper">
    
//     {/* ===================================================
// 				Loading Transition
// 			==================================================== */}
//   {/* <Preloader/> */}
//     {/* 
// 			=============================================
// 				Theme Main Menu
// 			============================================== 
// 			*/}
//   <Header/>
//     {/* /.theme-main-menu */}
//     {/* 
// 			=============================================
// 				Theme Inner Banner
// 			============================================== 
// 			*/}
//      <div className="theme-inner-banner">
//       <div className="container">
//         <h2 className="intro-title">
//           Full Stack Development <br />
//           <span>Services</span>
//         </h2>
//         <ul className="page-breadcrumb style-none d-flex">
//           <li>
//             <a href="/services">Home</a>
//           </li>
//           <li>
//             <a href="/services">Services</a>
//           </li>
//           <li className="current-page">Full Stack Development Services</li>
//         </ul>
//       </div>
//       <img
//         src="images/assets/ils_20.svg"
//         alt=""
//         className="shapes illustration-two"
//       />
//     </div>
//     {/* /.theme-inner-banner */}
//     {/* 
// 			=============================================
// 				Service Details
// 			============================================== 
// 			*/}
//     <div className="service-common position-relative pt-80">
//       <div className="container">
//         <div className="row d-flex align-items-center">
//           <div className="col-md-6">
//             <Image
//               src="/images/assets/full-stack.png"
//               className="img-common"
//               alt=""
//               width={400}
//               height={300}
//             />
//           </div>
//           <div className="col-md-6">
//             <div className="service-common-meta">
//               <h3 className="main-title">
//                 Work with the best-in-class full-stack development company.
//               </h3>
//               <p>
//                 We provide full-stack development services, including
//                 development, testing, deployment, and management. As a custom,
//                 seamless, and scalable software provider, we help you realize
//                 your vision at scale.
//               </p>
//               <h3 className="sub-title mt-50">
//                 Industry-leading technical skills are one of our strengths.
//               </h3>
//               <p>
//                 Evernote Web offers a complete lineup of features from any major
//                 Maecena quis interdum, orci at euis dapibus, mass ante pharetra
//                 tellus done.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     {/* <img src="images/shape/shape_48.svg" alt="" class="shapes bg-shape"> */}
//   </div>{" "}
//   {/* /.service-details */}
//   {/* 
// 			=============================================
// 				Fancy Short Banner Five
// 			============================================== 
// 			*/}
//   <div className="fancy-feature-nineteen position-relative pt-80 pb-30">
//       <div className="container">
//         <div className="row">
//           {/* <div class="col-xxl-5 col-lg-6 col-md-7"> */}
//           <div className="block-style-thirteen" data-aos="fade-right">
//             <div className="title-style-three text-center pb-15">
//               <div className="sc-title">WORK PROCESS</div>
//               <h3 className="main-title">
//                 Industry-Leading <span> Technical Skills</span> <br /> Are One Of
//                 Our Strengths.
//               </h3>
//             </div>{" "}
//             {/* /.title-style-three */}
//             <div className="fsd-box d-flex flex-wrap style-none list-item">
//               <div
//                 className="soft-dev tech-box position-relative"
//                 data-aos="fade-up"
//               >
//                 <div className="development-img">
//                   <Image src="/images/assets/front_end_development.svg" alt="" width={200} height={200} />
//                 </div>
//                 <h6>Front-end Development</h6>
//                 <p className="fsd-sub-box">
//                   Besides HTML and CSS, our full-stack front-end developers have
//                   Bootstrap, JavaScript, Vue.js, Node.js, and React.js. We use
//                   technologies that make your solutions more appealing and
//                   efficient. You can expect a user-friendly UX/UI platform for
//                   your websites, applications, and products with our services.
//                 </p>
//               </div>
//               <div
//                 className="soft-dev tech-box position-relative"
//                 data-aos="fade-up"
//                 data-aos-delay={50}
//               >
//                 <div className="development-img">
//                   <Image src="/images/assets/back-end_development.svg" alt="" width={200} height={200} />
//                 </div>
//                 <h6>Back-end Development</h6>
//                 <p className="fsd-sub-box">
//                   Our full-stack developers have experience with server-side
//                   applications such as APIs and applications. We build websites
//                   that deliver exactly what customers expect. Ruby on Rails,
//                   Python, and Node.js are some of the programming languages we use
//                   for our back-end developers.
//                 </p>
//               </div>
//               <div
//                 className="soft-dev tech-box position-relative"
//                 data-aos="fade-up"
//                 data-aos-delay={50}
//               >
//                 <div className="development-img">
//                   <Image src="/images/assets/api-backend-banner.svg" alt="" width={200} height={200} />
//                 </div>
//                 <h6>API Integration</h6>
//                 <p className="fsd-sub-box">
//                   We have extensive experience building custom web APIs and
//                   integrating them with our clients' systems. We provide API
//                   development services and assistance with your solution's smooth
//                   and seamless operation. We can build custom APIs that external
//                   applications can use without issues. With our tools, you can
//                   integrate your payment systems, social networks, business tools,
//                   etc.
//                 </p>
//               </div>
//               <div
//                 className="soft-dev tech-box position-relative"
//                 data-aos="fade-up"
//                 data-aos-delay={50}
//               >
//                 <div className="development-img">
//                   <Image src="/images/assets/database.png" alt="" width={200} height={200} />
//                 </div>
//                 <h6> Database Configuration</h6>
//                 <p className="fsd-sub-box">
//                   Our full-stack developers gather and organize crucial
//                   information using vast amounts of data. When it comes to custom
//                   database development, we've done almost everything. Databases
//                   can now be linked to any back-end language.
//                 </p>
//               </div>
//             </div>
//           </div>{" "}
//           {/* /.block-style-thirteen */}
//           {/* </div> */}
//         </div>
//       </div>{" "}
//       {/* /.container */}
//     </div>
//   {/* /.fancy-feature-nineteen */}
//   {/*
// 			=====================================================
// 				Team Section One
// 			=====================================================
// 			*/}
//  <div className="fancy-feature-nineteen position-relative">
//       <div className="team-section-one pt-50 pb-80">
//         <div className="container">
//           <div className="row align-items-center">
//             {/* <div class="col-sm-6"> */}
//             <div
//               className="title-style-one text-center xs-pb-20"
//               data-aos="fade-right"
//             >
//               <h3 className="main-title">
//                 {" "}
//                 Why Choose Precious Infosystem For <br /> Full-Stack Development?
//               </h3>
//             </div>
//           </div>
//           <div className="block-style-thirteen row pt-0">
//             <div className="fsd-box d-flex flex-wrap style-none list-item">
//               <div className="soft-dev" data-aos="fade-up">
//                 <div className="numb tran3s">1</div>
//                 <p>A dedicated team of developers</p>
//               </div>
//               <div className="soft-dev" data-aos="fade-up" data-aos-delay={50}>
//                 <div className="numb tran3s">2</div>
//                 <p>Timelines that are suitable for projects</p>
//               </div>
//               {/* Rest of the items */}
//             </div>
//           </div>
//         </div>
//         <Image
//           src="/images/shape/shape_42.svg"
//           alt=""
//           className="shapes shape-one"
//           width={100} // Set the desired width
//           height={100} // Set the desired height
//         />
//         <Image
//           src="/images/shape/shape_43.svg"
//           alt=""
//           className="shapes shape-two"
//           width={100} // Set the desired width
//           height={100} // Set the desired height
//         />
//       </div>
//     </div>
//   {/*
// 			=====================================================
// 				Footer
// 			=====================================================
// 			*/}
//  <Footer/>
// </>
// 	<Scriptsnew/>
//     </div>
//   )
// }

// export default ServiceFullStackDevelopment

