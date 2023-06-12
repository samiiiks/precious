import React from 'react';
import '../../styles/globals.css';
import Link from 'next/link';
import Image from 'next/image';
import Headpage from '../../Headpage.jsx';
import Scriptnew from '../../Scriptnew.jsx';
// import '../../../public/css/responsive.css';
//  import Preloader from '../../Preloader.jsx';
import Header from '../../Header.jsx';
import Footer from '../../Footer.jsx';
const about = () => {
  return (
    <>
      <Headpage />
      <div className="main-page-wrapper">
        {/* <Preloader/> */}
        <Header />
        <div className="theme-inner-banner">
          <div className="container">
            <h2 className="intro-title text-center">About Company</h2>
            <ul className="page-breadcrumb style-none d-flex justify-content-center">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="current-page">About us</li>
            </ul>
          </div>

          {/* <Image  src="/images/shape/shape_38.svg" alt="" className="shapes shape-one" width={80} height={80} />
    <Image  src="/images/shape/shape_39.svg" alt="" className="shapes shape-two" width={80} height={80} /> */}
        </div>{" "}
        {/* /.theme-inner-banner */}
        {/* 
			=============================================
				Feature Section Eighteen
			============================================== 
			*/}
        {/* <div className="fancy-feature-eighteen position-relative pb-80 pt-80"> */}
        <div>
          <div className="fancy-feature-eighteen position-relative pb-80 pt-80">
            <div className="container">
              <div className="row">
                <div className="col-xl-5 col-lg-6 col-md-7 ms-auto">
                  {/* <div className="block-style-two" data-aos="fade-left"> */}
                  <div className="block-style-two" >
                    <div className="title-style-three">
                      <div className="sc-title">Over 150k+ Client</div>
                      <h3 className="main-title font text-5xl">
                        A <span>Customer-Centric</span> Approach To IT Solutions
                      </h3>
                    </div>
                    <p className="pt-20 pb-25 lg-pb-20">
                      By offering IT solutions that help organizations achieve agility
                      and responsiveness, we enable them to remain relevant in the
                      digital age.
                    </p>
                    <ul className="style-none list-item color-rev">
                      <li>Our services are tailored to your needs</li>
                      <li>Team of professionals dedicated to your success</li>
                      <li>On-time and within budget</li>
                    </ul>
                    <Link href="/contactUs" className="btn-eight ripple-btn mt-30">
                      Contact us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="illustration-holder" data-aos="fade-right"> */}
            <div className="illustration-holder" >
              <Image
                src="/images/assets/ils_14.svg"
                alt=""
                // className="w-100 main-illustration"
                width={567} height={515}
              />
              </div>
              {/* <Image 
        src="images/assets/ils_14_1.svg"
        alt=""
        className="shapes shape-one"
        width={567}
        height={515}
      /> */}
              {/* <Image 
        src="/images/assets/ils_14_2.svg"
        alt=""
        className="shapes shape-two"
        data-aos="fade-down"
        data-aos-delay={100}
        width={567}
        height={515}
      /> */}
              {/* <Image 
        src="images/assets/ils_14_3.svg"
        alt=""
        // className="shapes shape-three"
        // data-aos="fade-down"
        // data-aos-delay={200}
        width={567}
        height={515}
      /> */}
              {/* <Image 
        src="/images/assets/ils_14_4.svg"
        alt=""
        className="shapes shape-four"
        width={567}
        height={515}
      /> */}
              {/* <Image 
        src="images/assets/ils_14_5.svg"
        alt=""
        className="shapes shape-five"
        width={567}
        height={515}
      /> */}
              {/* <Image 
        src="/images/assets/ils_14_6.svg"
        alt=""
        className="shapes shape-six"
        width={567}
        height={515}
      /> */}
              {/* <Image 
        src="/images/assets/ils_14_7.svg"
        alt=""
        className="shapes shape-seven"
        width={567}
        height={515}
      /> */}
            </div>
            <div className="shapes oval-one" />
            <div className="shapes oval-two" />
            <div className="shapes oval-three" />
          </div>
          {/* 
			=============================================
				Feature Section Two
			============================================== 
			*/}
          {/* <div className="fancy-feature-two position-relative md-pt-10 pt-80"> */}
          <div className='fancy-feature-two position-relative md-pt-10 pt-80'>
            <div className="container">
              <div className="row">
                <div className="col-xxl-5 col-lg-6 col-md-7 ms-auto">
                  <div>
                    {/* <div className="block-style-two" data-aos="fade-left"> */}
                    <div className="title-style-three">
                      <div className="sc-title">WHO WE ARE</div>
                      <h3 className="main-title">We help brands grow and succeed. </h3>
                    </div>{" "}
                    {/* /.title-style-one */}
                    <p className="pt-10 pb-20 lg-pb-10">
                      Precious Infosystem is a software development company that has
                      been helping businesses embrace digital experiences for the past
                      10 years. We believe in innovation and continuous learning to
                      transform business models by leveraging next-gen technologies. We
                      help leading enterprises and businesses achieve digital
                      transformation goals through our wide range of IT services,
                      business solutions, and custom software development.
                    </p>
                    <ul >
                      <li>Various analysis options.</li>
                      <li>Page Load (time, size, number of requests).</li>
                      <li>Big data analysis.</li>
                      <li>Adance Data analysis operation.</li>
                    </ul>
                    {/* <a href="contact-us.html" class="btn-eight ripple-btn mt-30">Contact us</a> */}
                  </div>{" "}
                  {/* /.block-style-two */}
                </div>
              </div>
            </div>{" "}
            {/* /.container */}
            {/* <div> */}
            <div className='illustration-holder-two sm-mt-40'>
            {/* <div className="shapes shape-four"> */}
              <Image
                src="images/assets/ils_05.svg"
                alt=""
                className='imagestyle'
                width={675}
                height={609}
              />
              <Image
                src="/images/assets/ils_05_1.svg"
                alt=""
                className='shapes shape-one'
                width={176}
                height={334}
              />
              </div>
              <Image 
        src="/images/assets/ils_05_2.svg"
        alt=""
        data-aos-delay={100}
        data-aos-duration={2000}
        className='shapes shape-two aos-init aos-animate'
        width={58}
        height={107}
      /> 
               <Image 
        src="images/assets/ils_05_3.svg"
        alt=""
        data-aos-delay={150}
        data-aos-duration={2000}
        className='shapes shape-three aos-init aos-animate'
        width={58}
        height={109}
      /> 
               <Image 
        src="/images/assets/ils_05_4.svg"
        alt=""
       className='shapes shape-four'
        width={71}
        height={71}
      /> 
               <Image 
        src="images/assets/ils_05_5.svg"
        alt=""
        className="shapes shape-four"
        width={74}
        height={74}
      /> 
            {/* </div> */}
            {/* </div> */}
            {/* /.illustration-holder-two */}
          </div>{" "}
          {/* /.fancy-feature-two */}
          {/* 
			=============================================
				Feature Section Twenty Two
			============================================== 
			*/}
          {/* <div className="fancy-feature-twentyTwo pt-5 mt-100"> */}
          <div className='fancy-feature-twentyTwo pt-5 mt-100'>
            <div className="container">
              <div className="row gx-xxl-5">
                {/* <div className="col-lg-4 col-sm-6 d-flex" data-aos="fade-up"> */}
                <div className="col-lg-4 col-sm-6 d-flex" >

                  <div className="block-style-fourteen mt-35">
                    <h5>Our Vision</h5>
                    <p>
                      To provide our clients with the highest value possible by being
                      the industry's leading provider of services. Simplicity is the
                      key, not complexity. A high priority is also placed on innovation.
                    </p>
                  </div>{" "}
                  {/* /.block-style-fourteen */}
                </div>
                {/* <div
          className="col-lg-4 col-sm-6 d-flex"
          data-aos="fade-up"
          data-aos-delay={100}
        > */}
                <div className="col-lg-4 col-sm-6 d-flex">
                  <div className="block-style-fourteen mt-35">
                    <h5>Our Mission</h5>
                    <p>
                      By using state-of-the-art technology and competent employees, we
                      provide businesses with an attractive package of IT services.
                    </p>
                  </div>{" "}
                  {/* /.block-style-fourteen */}
                </div>
                {/* <div
          className="col-lg-4 d-flex"
          data-aos="fade-up"
          data-aos-delay={200}
        > */}
                <div className="col-lg-4 d-flex">
                  <div className="block-style-fourteen mt-35">
                    <h5>Our Values</h5>
                    <p>
                      A successful relationship is built on trust. To make it, we do
                      everything we can. Honesty is paramount to us, and we expect the
                      same from others.{" "}
                    </p>
                  </div>{" "}
                  {/* /.block-style-fourteen */}
                </div>
              </div>
            </div>
          </div>{" "}
          {/* /.fancy-feature-twentyTwo */}
          {/*
			=====================================================
				Counter Section One
			=====================================================
			*/}
          <div className="counter-section-one">
            <div className="inner-container bg-color style-two rounded-0 w-100">
              <div className="container">
                <div className="row justify-content-center">
                  {/* <div
            className="col-md-4 col-sm-6"
            data-aos="fade-up"
            data-aos-delay={100}
          > */}
                  <div className="col-md-4 col-sm-6">
                    <div className="counter-block-one text-center mb-20">
                      <div className="main-count">
                        <span className="counter">96</span>%
                      </div>
                      <p> enterprise client retention</p>
                    </div>{" "}
                    {/* /.counter-block-one */}
                  </div>
                  {/* <div
            className="col-md-4 col-sm-6"
            data-aos="fade-up"
            data-aos-delay={200}
          > */}
                  <div className="col-md-4 col-sm-6">
                    <div className="counter-block-one text-center mb-20">
                      <div className="main-count">
                        <span className="counter">300</span>+
                      </div>
                      <p>happy clients</p>
                    </div>{" "}
                    {/* /.counter-block-one */}
                  </div>
                  {/* <div
            className="col-md-4 col-sm-6"
            data-aos="fade-up"
            data-aos-delay={200}
          > */}
                  <div className="col-md-4 col-sm-6">
                    <div className="counter-block-one text-center mb-20">
                      <div className="main-count">
                        <span className="counter">5</span>+
                      </div>
                      <p>years of experience</p>
                    </div>{" "}
                    {/* /.counter-block-one */}
                  </div>
                </div>
              </div>
              <div className='illustration-holder-two sm-mt-40'>
              <Image
                src="/images/shape/shape_40.svg"
                alt=""
                className="shapes shape-three"
                width={678} height={678}
              />
              <Image
                src="/images/shape/shape_41.svg"
                alt=""
                className="shapes shape-four"
                width={678} height={678}
              />
              </div>
            </div>{" "}
            {/* /.inner-container */}
          </div>{" "}
          {/* /.counter-section-one */}
          {/* 
			=============================================
				Feature Section Five
			============================================== 
			*/}
          {/* <div className="fancy-feature-five position-relative"> */}
          <div className='position-relative">'>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xxl-4 col-lg-5 col-md-6">
                  <div
                    className="block-style-five pt-80 md-pt-50"
                  >
                    <div className="title-style-three">
                      <div className="sc-title">WHY CHOOSE US</div>
                      <h3 className="main-title"> Why Choose Us?</h3>
                    </div>{" "}
                    {/* /.title-style-one */}
                    <p className="pt-10 pb-70">
                      Our vast experience allows us to provide quality and reliability
                      to our clients. We design solutions that are tailored to your
                      specific needs. With Precious Infosystem, you will be guided
                      through the entire process of planning, web development,
                      completion, and maintenance.{" "}
                    </p>
                    <div className="skills-progress skills">
                      <div className="habilidades_contenedor">
                        <div className="codeconSkills">
                          <div className="codeconSkillbar mb-80 md-mb-60">
                            <div className="skill-text">
                              <span className="codeconSkillArea">SKIll</span>
                            </div>
                            <div
                              className="skillBar"
                              data-percent="73%"
                              style={{ background: "#F25DFF" }}
                            >
                              <span className="PercentText">73%</span>
                            </div>
                          </div>
                          <div className="codeconSkillbar">
                            <div className="skill-text">
                              <span className="codeconSkillArea ">Performance</span>
                            </div>
                            <div
                              className="skillBar"
                              data-percent="91%"
                              style={{ background: "#00E8FA" }}
                            >
                              <span className="PercentText">91%</span>
                            </div>
                          </div>
                        </div>{" "}
                        {/* /.codeconSkills */}
                      </div>{" "}
                      {/* /.habilidades_contenedor */}
                    </div>{" "}
                    {/* /.skills-progress */}
                  </div>{" "}
                  {/* /.block-style-five */}
                </div>
                <div className="col-xxl-8 col-lg-7 col-md-6 text-end">
                  <div className="illustration-holder d-inline-block position-relative xs-mt-20">
                    <Image 
              src="/images/assets/ils_06.svg"
              alt=""
              className="main-illustration w-100"
              width={655} height={627}
            /> 
                     <Image 
              src="images/assets/ils_06_1.svg"
              alt=""
              className="shapes shape-one"
              width={64} height={48}
            /> 
                     <Image 
              src="/images/assets/ils_06_2.svg"
              alt=""
              className="shapes shape-two"
              width={77} height={62}
            /> 
                     <Image 
              src="/images/assets/ils_06_3.svg"
              alt=""
              className="shapes shape-three"
              data-aos="fade-down"
              data-aos-duration={1800}
              width={96} height={140}
            />
            <Image 
              src="/images/assets/ils_06_4.svg"
              alt=""
              className="shapes shape-four"
              data-aos="fade-left"
              data-aos-duration={1800}
              width={212} height={124}
            />
            <Image 
              src="/images/assets/ils_06_5.svg"
              alt=""
              className="shapes shape-five"
              width={76} height={57}            /> 
                  </div>
                  {/*  /.illustration-holder */}
                </div>
              </div>
            </div>{" "}
            {/* /.container */}
          </div>{" "}
          {/* /.fancy-feature-five */}
          {/*
			=====================================================
				Team Section One
			=====================================================
			*/}
          <div className="team-section-one pt-50 pb-100 lg-pt-30 lg-pb-60">
            <div className="container">
              <div className="row align-items-center">
                {/* <div className="title-style-three text-center" data-aos="fade-right"> */}
                <div>
                  <div className="sc-title">OUR TEAM</div>
                  <h3 className="main-title"> Who We Are</h3>
                </div>{" "}
                {/* /.title-style-one */}
              </div>
              <div className="block-style-thirteen pt-20">
                <div className="ssd-box style-none list-item">
                  <div className="soft-dev">
                    <div className="numb tran3s">1</div>
                    <p>
                      With modern, secure, customer-centric, and cutting-edge digital
                      products, we help global enterprises navigate digital
                      transformation.
                    </p>
                  </div>
                  {/* <div
            className="soft-dev ms-auto"
            data-aos="fade-up"
            data-aos-delay={50}
          > */}
                  <div className='soft-dev ms-auto'>
                    <div className="numb tran3s">2</div>
                    <p>
                      Our success depends on the success of our clients. We have decades
                      of experience creating digital solutions for world-famous
                      organizations.
                    </p>
                  </div>
                  <div className="soft-dev" >
                    {/* <div className="soft-dev" data-aos="fade-up" data-aos-delay={50}> */}
                    <div className="numb tran3s">3</div>
                    <p>
                      With modern, secure, customer-centric, and cutting-edge digital
                      products, we help global enterprises navigate digital
                      transformation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <Image  src="/images/shape/shape_42.svg" alt="" className="shapes shape-one" width={80} height={80} />
    <Image  src="/images/shape/shape_43.svg" alt="" className="shapes shape-two"  width={80} height={80}/> */}
          </div>{" "}
          {/* /.team-section-one */}
          <Footer />
        </div>
        <Scriptnew />
      </>
//  <>

// <Headpage />
// <Header />
// <div className="theme-inner-banner">
//      <div className="container">
//        <h2 className="intro-title text-center">About Company</h2>
//        <ul className="page-breadcrumb style-none d-flex justify-content-center">
//          <li>
//            <a href="index.html">Home</a>
//          </li>
//        </ul>
//      </div>
//      <Image src="/images/shape/shape_38.svg" alt="" className="shapes shape-one" width={80} height={80} />
//      <Image src="/images/shape/shape_39.svg" alt="" className="shapes shape-two" width={80} height={80} />
//    </div>{" "}
//    {/* /.theme-inner-banner */}
// //    <div className="fancy-feature-eighteen position-relative pb-80 pt-80">
// //      <div className="container">
// //        <div className="row">
// //          <div className="col-xl-5 col-lg-6 col-md-7 ms-auto">
// //            <div className="block-style-two" data-aos="fade-left">
// //              <div className="title-style-three">
// //                <div className="sc-title">Over 150k+ Client</div>
// //                <h3 className="main-title">
// //                </h3>
// //              </div>
// //              <p className="pt-20 pb-25 lg-pb-20">
// //                By offering IT solutions that help organizations achieve agility
// //                and responsiveness, we enable them to remain relevant in the
// //                digital age.
// //              </p>
// //              <ul className="style-none list-item color-rev">
// //                <li>Our services are tailored to your needs</li>
// //                <li>Team of professionals dedicated to your success</li>
// //                <li>On-time and within budget</li>
// //              </ul>
// //              <a href="contact-us.html" className="btn-eight ripple-btn mt-30">
// //                Contact us
// //              </a>
// //            </div>
// //          </div>
// //        </div>

// //  <div className="illustration-holder" data-aos="fade-right">
// //        <Image
//         src="/images/assets/ils_14.svg"
//          alt=""
//         className="w-100 main-illustration"
//          width={80} height={80}
//        />
//        <Image
//          src="images/assets/ils_14_1.svg"
//          alt=""
//          className="shapes shape-one"
//          data-aos="fade-down"
//          width={80}
//          height={80}
//        />
//        <Image
//         src="/images/assets/ils_14_2.svg"
//          className="shapes shape-two"
//          data-aos="fade-down"
//          alt=""
//          data-aos-delay={100}
//          width={80} height={80}
//        />
//        <Image
//          alt=""
//         className="shapes shape-three"
//          src="images/assets/ils_14_3.svg"
//          data-aos="fade-down"
//          data-aos-delay={200}
//          width={80} height={80}
//       />
//       <Image
//         src="/images/assets/ils_14_4.svg"
//         alt=""
//         className="shapes shape-four"
//         width={80} height={80}
//       />
//       <Image
//         src="images/assets/ils_14_5.svg"
//         alt=""
//         className="shapes shape-five"
//         width={80} height={80}
//       />
//       <Image
//         src="/images/assets/ils_14_6.svg"
//         alt=""
//         className="shapes shape-six"
//         width={80} height={80}
//       />
//       <Image
//         src="/images/assets/ils_14_7.svg"
//         alt=""
//         className="shapes shape-seven"
//         width={80} height={80}
//       />
//     </div>
//     <div className="shapes oval-one" />
//     <div className="shapes oval-two" />
//     <div className="shapes oval-three" />
//   </div>   </div>
  // <div className="fancy-feature-two position-relative md-pt-10 pt-80">
  //    <div className="container">
  //      <div className="row">
  //        <div className="col-xxl-5 col-lg-6 col-md-7 ms-auto">
  //          <div className="block-style-two" data-aos="fade-left">
  //            <div className="title-style-three">
  //              <div className="sc-title">WHO WE ARE</div>
  //              <h3 className="main-title">We help brands grow and succeed. </h3>
  //            </div>{" "}
  //            {/* /.title-style-one */}
  //            <p className="pt-10 pb-20 lg-pb-10">
  //              Precious Infosystem is a software development company that has
  //              been helping businesses embrace digital experiences for the past
  //              10 years. We believe in innovation and continuous learning to
  //              transform business models by leveraging next-gen technologies. We
  //              help leading enterprises and businesses achieve digital
  //              transformation goals through our wide range of IT services,
  //              business solutions, and custom software development.
  //            </p>
  //            <ul className="style-none list-item color-rev">
  //              <li>Various analysis options.</li>
  //              <li>Page Load (time, size, number of requests).</li>
  //              <li>Big data analysis.</li>
  //              <li>Adance Data analysis operation.</li>
  //            </ul>
  //           {/* <a href="contact-us.html" class="btn-eight ripple-btn mt-30">Contact us</a> */}
  //          </div>{" "}
  //          {/* /.block-style-two */}
  //        </div>
  //      </div>
  //    </div>{" "}
  //    {/* /.container */}
  //    <div className="illustration-holder-two sm-mt-40">
  //     <Image
  //       src="images/assets/ils_05.svg"
  //       alt=""
  //       className="main-illustration w-100"
  //       width={80} height={80}
  //     />
  //     <Image
  //       src="/images/assets/ils_05_1.svg"
  //       alt=""
  //       className="shapes shape-one"
  //       width={80} height={80}
  //     />
  //     <Image
  //       src="/images/assets/ils_05_2.svg"
  //       alt=""
  //       className="shapes shape-two"
  //       data-aos="fade-up"
  //       data-aos-anchor=".fancy-feature-two"
  //       data-aos-delay={100}
  //       data-aos-duration={2000}
  //       width={80} height={80}
  //     />
  //     <Image
  //       src="images/assets/ils_05_3.svg"
  //       alt=""
  //       className="shapes shape-three"
  //       data-aos="fade-up"
  //       data-aos-anchor=".fancy-feature-two"
  //       data-aos-delay={150}
  //       data-aos-duration={2000}
  //       width={80} height={80}
  //     />
  //     <Image
  //       src="/images/assets/ils_05_4.svg"
  //       alt=""
  //       className="shapes shape-four"
  //       width={80} height={80}
  //     />
  //     <Image
  //       src="images/assets/ils_05_5.svg"
  //       alt=""
  //       className="shapes shape-five"
  //       width={80} height={80}
  //     />
  //   </div>
  //   {/* /.illustration-holder-two */}
  // </div>{" "}
  // {/* /.fancy-feature-two */}
  // {/* 
	// 		=============================================
	// 			Feature Section Twenty Two
	// 		============================================== 
	// 		*/}
  // <div className="fancy-feature-twentyTwo pt-5 mt-100">
  //   <div className="container">
  //     <div className="row gx-xxl-5">
  //       <div className="col-lg-4 col-sm-6 d-flex" data-aos="fade-up">
  //         <div className="block-style-fourteen mt-35">
  //           <h5>Our Vision</h5>
  //           <p>
  //             To provide our clients with the highest value possible by being
  //             the industry's leading provider of services. Simplicity is the
  //             key, not complexity. A high priority is also placed on innovation.
  //           </p>
  //         </div>{" "}
  //         {/* /.block-style-fourteen */}
  //       </div>
  //       <div
  //         className="col-lg-4 col-sm-6 d-flex"
  //         data-aos="fade-up"
  //         data-aos-delay={100}
  //       >
  //         <div className="block-style-fourteen mt-35">
  //           <h5>Our Mission</h5>
  //           <p>
  //             By using state-of-the-art technology and competent employees, we
  //             provide businesses with an attractive package of IT services.
  //           </p>
  //         </div>{" "}
  //         {/* /.block-style-fourteen */}
  //       </div>
  //       <div
  //         className="col-lg-4 d-flex"
  //         data-aos="fade-up"
  //         data-aos-delay={200}
  //       >
  //         <div className="block-style-fourteen mt-35">
  //           <h5>Our Values</h5>
  //           <p>
  //             A successful relationship is built on trust. To make it, we do
  //             everything we can. Honesty is paramount to us, and we expect the
  //             same from others.{" "}
  //           </p>
  //         </div>{" "}
  //         {/* /.block-style-fourteen */}
  //       </div>
  //     </div>
  //   </div>
  // </div > { " "}


// <Footer/>

// </> 

  )
 }
export default about;