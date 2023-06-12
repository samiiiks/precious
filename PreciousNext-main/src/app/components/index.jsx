import React from 'react';
import Script from "next/script";
import Link from 'next/link';
import Head from 'next/head';
import Main from '../../app/Main/page'

const index = () => {
  return (
    <div>
     <Head>
  <meta charSet="UTF-8" />
  <meta
    name="keywords"
    content="Web Development, Web Design, Frontend Development, Mobile Application Development, Backend Development"
  />
  <meta name="description" content="Precious" />
  <meta property="og:site_name" content="Precious" />
  <meta property="og:url" content="https://www.preciousinfosystem.com/" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Precious - Best Software Development Company"
  />
  {/* <meta name='og:image' content='images/assets/ogg.png'> */}
  {/* For IE */}
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  {/* For Resposive Device */}
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  {/* For Window Tab Color */}
  {/* Chrome, Firefox OS and Opera */}
  <meta name="theme-color" content="#913BFF" />
  {/* Windows Phone */}
  <meta name="msapplication-navbutton-color" content="#913BFF" />
  {/* iOS Safari */}
  <meta
    name="apple-mobile-web-app-status-bar-style"
    content="#913BFF"
  />
  <title>Precious Infosystem</title>
  {/* Favicon */}
  <link
    rel="icon"
    type="image/png"
    sizes="56x56"
    href="images/logo/preciousLogo01.png"
  />
  {/* Main style sheet */}
  <link
    rel="stylesheet"
    type="text/css"
    href="css/style.css"
    media="all"
  />
  {/* responsive style sheet */}
  <link
    rel="stylesheet"
    type="text/css"
    href="css/responsive.css"
    media="all"
  />
</Head>
    <div className="main-page-wrapper">
  {/* ===================================================
				Loading Transition
			==================================================== */}
   <section>
    <div id="preloader">
      <div id="ctn-preloader" className="ctn-preloader">
        <div className="animation-preloader">
          <div className="icon">
            <Image
              src="/images/logo/precious icon.png"
              alt=""
              className="m-auto d-block"
              width={150}
              height={150}
            />
          </div>
          <div className="txt-loading mt-2">
            <span data-text-preloader="P" className="letters-loading">
              {" "}
              P{" "}
            </span>
            <span data-text-preloader="R" className="letters-loading">
              {" "}
              R{" "}
            </span>
            <span data-text-preloader="E" className="letters-loading">
              {" "}
              E{" "}
            </span>
            <span data-text-preloader="C" className="letters-loading">
              {" "}
              C{" "}
            </span>
            <span data-text-preloader="I" className="letters-loading">
              {" "}
              I{" "}
            </span>
            <span data-text-preloader="O" className="letters-loading">
              {" "}
              O{" "}
            </span>
            <span data-text-preloader="U" className="letters-loading">
              {" "}
              U{" "}
            </span>
            <span data-text-preloader="S" className="letters-loading">
              {" "}
              S{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* 
			=============================================
				Theme Main Menu
			============================================== 
			*/}
 <header className="theme-main-menu sticky-menu theme-menu-four">
    <div className="inner-content container-fluid-lg">
      <div className="d-flex align-items-center">
        <div className="logo order-lg-0">
          <Link href="/">
            <a className="d-block">
              <img
                src="/images/logo/preciousLogoSquare.png"
                className="navlogo"
                alt="Logo"
                width={128}
              />
              <img
                src="/images/logo/precious icon.png"
                className="stickylogo"
                alt="Logo"
                width={80}
              />
            </a>
          </Link>
        </div>
        <div className="right-widget d-flex align-items-center ms-auto order-lg-3">
          <div className="call-button d-none d-xl-block me-5">
            Call us <a href="tel:+91-9522280818">+91-9522280818</a>
          </div>
          <Link href="/contact-us.html">
            <a className="send-msg-btn tran3s d-none d-lg-block ripple-btn">
              Send us Message
            </a>
          </Link>
        </div>
        <nav className="navbar navbar-expand-lg order-lg-2">
          <button
            className="navbar-toggler d-block d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link href="/">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link">Company</a>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/Services"
                  role="button"
                  id="servicesDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="servicesDropdown"
                >
                  <li>
                    <Link href="/service/software-development">
                      <a className="dropdown-item">Software Development Service</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/website-development">
                      <a className="dropdown-item">Website Development Service</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/full-stack-development">
                      <a className="dropdown-item">Full-Stack Development Service</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/ui-ux-design">
                      <a className="dropdown-item">UI/UX Design Service</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/digital-marketing">
                      <a className="dropdown-item">Digital Marketing Service</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link href="/contact-us">
                  <a className="nav-link">Contact</a>
                </Link>
              </li>
            </ul>
            <div className="mobile-content d-block d-lg-none">
              <div className="d-flex flex-column align-items-center justify-content-center mt-70">
                <Link href="/contact-us">
                  <a className="send-msg-btn tran3s mb-10">Send us Message</a>
                </Link>
                <div className="call-button">
                  Call us <a href="#">+91-9522280818</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
  {/* /.theme-main-menu */}
  {/* 
			=============================================
				Theme Hero Banner
			============================================== 
			*/}
   <div className="hero-banner-five">
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-md-7">
            <h1 className="hero-heading fw-bold">
              Developing Software For Your Digital <span>Success.</span>
            </h1>
            <p className="text-lg mb-3 pt-40 pe-xl-5 md-pt-30 md-mb-40">
              We enable businesses to meet today's needs through robust and adaptable digital solutions while unlocking tomorrow's possibilities.
            </p>
            <ul className="style-none button-group d-flex align-items-center">
              <li className="me-4">
                <a href="Services.html" className="demo-btn ripple-btn tran3s">
                  Explore Services
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* /.container */}
      <div className="illustration-holder">
        <img src="images/assets/ils_13.svg" alt="" className="main-illustration ms-auto" />
        <img src="images/assets/ils_13_1.svg" alt="" className="shapes shape-one" />
        <img src="images/assets/ils_13_2.svg" alt="" className="shapes shape-two" data-aos="fade-down" />
        <img src="images/assets/ils_13_2.svg" alt="" className="shapes shape-three" data-aos="fade-down" />
      </div>
      <div className="shapes oval-one" />
    </div>
  {/* /.hero-banner-five */}
  {/* 
			=============================================
				Feature Section Seventeen
			============================================== 
			*/}
  {/* <div class="fancy-feature-seventeen position-relative mt-160 xl-mt-50">
				<div class="container">
					<div class="row align-items-center">
						<div class="col-xl-6 col-lg-5" data-aos="fade-right">
							<div class="title-style-three text-center text-lg-start">
								<h2 class="main-title"><span> Your </span> Innovative Ideas Need Quality Software Services</h2>
							</div> 
							</div>
						<div class="col-xl-6 col-lg-7" data-aos="fade-left">
							<p class="m0 text-center text-lg-start md-pt-30">With our exceptional services, you will receive a flexible and seamless solution to fit your business and project needs.</p>
						</div>
					</div>

					<div class="container">
						<div class="swiper-container">
						<div class="swiper-wrapper">
							<div class="bg-white swiper-slide" data-aos="fade-right">
								<div class="block-style-twelve mt-30 ps-lg-0 pe-xl-5 me-xl-2">
									<div class="icon d-flex align-items-end"><img src="images/icon/icon_31.svg" alt=""></div>
									<h5 ><a href="service-details-V1.html">Software Development</a></h5>
									<p>Creating cutting-edge software solutions starts with employing the most effective development methodologies available. </p>
									<a href="service-details-V1.html" class="tran3s more-btn"><img src="images/icon/icon_20.svg" alt=""></a>
								</div> 
								</div>
							<div class="bg-white swiper-slide" data-aos="fade-up" data-aos-delay="100">
								<div class="block-style-twelve mt-30 active">
									<div class="icon d-flex align-items-end"><img src="images/icon/icon_32.svg" alt=""></div>
									<h5><a href="service-details-V1.html">Website Development</a></h5>
									<p>Creating customer-centric, client-focused websites that deliver tangible business results is what we do.</p>
									<a href="service-details-V1.html" class="tran3s more-btn"><img src="images/icon/icon_20.svg" alt=""></a>
								</div> 
							</div> 
							<div class="bg-white swiper-slide" data-aos="fade-left">
								<div class="block-style-twelve mt-30">
									<div class="icon d-flex align-items-end"><img src="images/icon/icon_33.svg" alt=""></div>
									<h5><a href="service-details-V1.html">Full-Stack Development</a></h5>
									<p>Make the most of the top full-stack development services that are expertly matched to meet your business's urgent needs.</p>
									<a href="service-details-V1.html" class="tran3s more-btn"><img src="images/icon/icon_20.svg" alt=""></a>
								</div> 
							</div>
							<div class="bg-white swiper-slide" data-aos="fade-up" data-aos-delay="100">
								<div class="block-style-twelve mt-30 active">
									<div class="icon d-flex align-items-end"><img src="images/icon/icon_32.svg" alt=""></div>
									<h5><a href="service-details-V1.html">UX/UI Designing</a></h5>
									<p>With a decade of software design experience, Precious Infosystem's UI and UX services can provide you with a superior user experience.</p>
									<a href="service-details-V1.html" class="tran3s more-btn"><img src="images/icon/icon_20.svg" alt=""></a>
								</div> 
							</div> 
							<div class="bg-white swiper-slide" data-aos="fade-up" data-aos-delay="100">
								<div class="block-style-twelve mt-30 active">
									<div class="icon d-flex align-items-end"><img src="images/icon/icon_32.svg" alt=""></div>
									<h5><a href="service-details-V1.html">Digital Marketing</a></h5>
									<p>Using our digital marketing services, you can identify your goals, benchmark your performance against your competitors, and measure the results.</p>
									<a href="service-details-V1.html" class="tran3s more-btn"><img src="images/icon/icon_20.svg" alt=""></a>
								</div>
							</div> 
						</div>
					
                      <div class="swiper-button-prev"></div>
                      <div class="swiper-button-next"></div>
					</div>
					</div>
				</div> 
				<div class="shapes shape-one"></div>
			</div>  */}
  {/* 
			=============================================
				Feature Section Eighteen
			============================================== 
			*/}
  {/* <div class="fancy-feature-eighteen position-relative pt-200 pb-225 lg-pt-130 md-pt-100 xl-pb-150 lg-pb-100">
				<div class="container">
					<div class="row">
						<div class="col-xl-5 col-lg-6 col-md-7 ms-auto">
							<div class="block-style-two" data-aos="fade-left">
								<div class="title-style-three">
									<div class="sc-title">Over 150k+ Client</div>
									<h2 class="main-title">A <span>Customer-Centric</span> Approach To IT Solutions</h2>
								</div> 
								<p class="pt-20 pb-25 lg-pb-20">By offering IT solutions that help organizations achieve agility and responsiveness, we enable them to remain relevant in the digital age.</p>
								<ul class="style-none list-item color-rev">
									<li>Our services are tailored to your needs</li>
									<li>Team of professionals dedicated to your success</li>
									<li>On-time and within budget</li>
								</ul>
								<a href="about-us2.html" class="btn-eight mt-50 lg-mt-30">More about us</a>
							</div> 
						</div>
					</div>
				</div> 
				<div class="illustration-holder" data-aos="fade-right">
					<img src="images/assets/ils_14.svg" alt="" class="w-100 main-illustration">
					<img src="images/assets/ils_14_1.svg" alt="" class="shapes shape-one" data-aos="fade-down">
					<img src="images/assets/ils_14_2.svg" alt="" class="shapes shape-two" data-aos="fade-down" data-aos-delay="100">
					<img src="images/assets/ils_14_3.svg" alt="" class="shapes shape-three" data-aos="fade-down" data-aos-delay="200">
					<img src="images/assets/ils_14_4.svg" alt="" class="shapes shape-four">
					<img src="images/assets/ils_14_5.svg" alt="" class="shapes shape-five">
					<img src="images/assets/ils_14_6.svg" alt="" class="shapes shape-six">
					<img src="images/assets/ils_14_7.svg" alt="" class="shapes shape-seven">
				</div> 
				<div class="shapes oval-one"></div>
				<div class="shapes oval-two"></div>
				<div class="shapes oval-three"></div>
			</div>  */}
  {/* 
			=============================================
				Feature Section Nineteen
			============================================== 
			*/}
  {/* <div class="fancy-feature-nineteen position-relative pt-130 lg-pt-80">
				<div class="container">
					<div class="row">
						<div class="col-xxl-5 col-lg-6 col-md-7">
							<div class="block-style-thirteen" data-aos="fade-right">
								<div class="title-style-three pb-15">
									<div class="sc-title">WORK PROCESS</div>
									<h2 class="main-title">What Precious Infosystem <span>Does</span> And How It Works.</h2>
								</div> 
								<ul class="style-none list-item">
									<li data-aos="fade-up">
										<div class="numb tran3s">1</div>
										<h6>Planning</h6>
										<span>A solid project plan is developed with our customers at the beginning of each project.</span>
									</li>
									<li data-aos="fade-up" data-aos-delay="50">
										<div class="numb tran3s">2</div>
										<h6>Wireframing</h6>
										<span>Our wireframe team creates the software layout based on the finalized plan. </span>
									</li>
									<li data-aos="fade-up" data-aos-delay="50">
										<div class="numb tran3s">3</div>
										<h6>Design</h6>
										<span>Now that we have locked down the wireframes for all pages, it is time for our design team to create the final appearance and feel.</span>
									</li>
									<li data-aos="fade-up" data-aos-delay="50">
										<div class="numb tran3s">4</div>
										<h6>Code</h6>
										<span>We are ready to begin coding the software and making it functional now that the wireframes and designs have been finalized.</span>
									</li>
									<li data-aos="fade-up" data-aos-delay="50">
										<div class="numb tran3s">5</div>
										<h6>Deployment</h6>
										<span>Deployment begins once the code has been tested, approved for release, and sold or distributed to production.</span>
									</li>
								</ul>
							</div> 
						</div>
					</div>
				</div> 
				<div class="illustration-holder" data-aos="fade-left">
					<img src="images/assets/ils_15.svg" alt="" class="w-100 main-illustration">
					<img src="images/assets/ils_15_1.svg" alt="" class="shapes shape-one">
					<img src="images/assets/ils_15_2.svg" alt="" class="shapes shape-two">
					<img src="images/assets/ils_15_3.svg" alt="" class="shapes shape-three">
					<img src="images/assets/ils_15_4.svg" alt="" class="shapes shape-four">
					<img src="images/assets/ils_15_5.svg" alt="" class="shapes shape-five" data-aos="fade-down" data-aos-delay="200" data-aos-duration="2000">
					<img src="images/assets/ils_15_6.svg" alt="" class="shapes shape-six" data-aos="fade-down" data-aos-delay="100" data-aos-duration="2000">
					<img src="images/assets/ils_15_7.svg" alt="" class="shapes shape-seven" data-aos="fade-down" data-aos-duration="2000">
				</div> 
				<div class="shapes oval-one"></div>
				<div class="shapes oval-two"></div>
				<img src="images/shape/shape_35.svg" alt="" class="shapes bg-shape">
			</div>  */}
  {/*
			=====================================================
				Counter Section One
			=====================================================
			*/}
<div className="counter-section-one mt-80 lg-mt-100">
      <div className="container">
        <div className="inner-container bg-color position-relative" data-aos="zoom-in">
          <div className="row justify-content-center">
            <div className="col-md-3 col-sm-6" data-aos="fade-up" data-aos-delay={50}>
              <div className="counter-block-one text-center mb-20">
                <div className="main-count">
                  <img src="images/assets/project.png" width={80} alt="" />
                </div>
                <div className="main-count">
                  <span className="counter">500</span>+
                </div>
                <p>projects delivered</p>
              </div>
              {/* /.counter-block-one */}
            </div>
            <div className="col-md-3 col-sm-6" data-aos="fade-up" data-aos-delay={200}>
              <div className="counter-block-one text-center mb-20">
                <div className="main-count">
                  <img src="images/assets/success.png" width={80} alt="" />
                </div>
                <div className="main-count">
                  <span className="counter">96</span>%
                </div>
                <p>enterprise client retention</p>
              </div>
              {/* /.counter-block-one */}
            </div>
            <div className="col-md-3 col-sm-6" data-aos="fade-up" data-aos-delay={350}>
              <div className="counter-block-one text-center mb-20">
                <div className="main-count">
                  <img src="images/assets/client.png" width={80} alt="" />
                </div>
                <div className="main-count">
                  <span className="counter">300</span>+
                </div>
                <p>happy clients</p>
              </div>
              {/* /.counter-block-one */}
            </div>
            <div className="col-md-3 col-sm-6" data-aos="fade-up" data-aos-delay={500}>
              <div className="counter-block-one text-center mb-20">
                <div className="main-count">
                  <img src="images/assets/year.png" alt="" />
                </div>
                <div className="main-count">
                  <span className="counter" id="year" />+
                </div>
                <p>years of experience</p>
              </div>
              {/* /.counter-block-one */}
            </div>
          </div>
        </div>
        {/* /.inner-container */}
      </div>
    </div>
  {/* /.counter-section-one */}
  {/*
			=====================================================
				Industries and technologies we work with
			=====================================================
			*/}
     <div className="technology-section pt-70">
      <div className="container">
        <div className="block-style-seventeen">
          <h3 className="p-5 text-center" data-aos="zoom-in">
            Technologies We Work With
          </h3>
          <div className="row row-cols-lg-5 row-cols-md-3 row-cols-2 d-flex flex-wrap justify-content-between">
            <div className="text-center p-3 block-style-eighteen" data-aos="fade-up">
              <Image src="/images/assets/ror.png" alt="technology icon" width={100} height={100} />
              Ruby On Rails
            </div>
            <div className="text-center p-3 block-style-eighteen" >
              <Image src="/images/assets/python.png" alt="technology icon" width={100} height={100} />
              Python
            </div>
            {/* Add the remaining technology items */}
          </div>
        </div>
        <div className="block-style-seventeen mt-3">
          <h3 className="p-5 text-center" data-aos="fade-up">
            Industries We Serve
          </h3>
          <div className="row">
            <div className="col-md-6 industry-p" data-aos="fade-up">
              <p>
                Our industry specific software solutions streamlined business
                process along with efficient customer’s engagement. We identify
                opportunities to provide competitive advantages to our clients by
                leveraging the latest technology. Boost your revenue and drive
                operational excellence with our customized software industries
                solutions.
              </p>
              <div>
                <div className="soft-dev" data-aos="fade-up">
                  <Image src="/images/assets/checked.png" className="checked" alt="" width={20} height={20} />
                  Increased company value
                </div>
                {/* Add the remaining industry items */}
              </div>
            </div>
            <div className="col-md-6 md-pt-50" data-aos="fade-left">
              <Image src="/images/assets/industry.png" alt="industries" width={400} height={400} />
            </div>
          </div>
        </div>
      </div>
    </div>
  {/*
			=====================================================
				Feedback Slider Four
			=====================================================
			*/}
      <div className="feedback-section-five pt-70 lg-pt-70 pb-25 lg-pb-20">
      <div className="container">
        <div className="title-style-three text-center" data-aos="fade-up">
          <div className="sc-title">Testimonials</div>
          <h2 className="main-title">
            Words from <span>Client</span>
          </h2>
        </div>
        <div className="feedback_slider_four pt-10 lg-pt-10" data-aos="fade-up">
          <div className="item">
            <div className="row">
              <div className="col-xxl-9 col-xl-10 col-lg-8 m-auto">
                <div className="feedback-block-four mb-80 ms-xxl-4 me-xxl-4">
                  <img src="/images/icon/icon_34.svg" alt="" className="m-auto" />
                  <div className="row review-box d-flex">
                    <div className="col-sm-3">
                      <Image
                        src="/images/assets/m1.png"
                        alt=""
                        className="mt-sm-0 mt-4"
                        width={120}
                        height={120}
                      />
                    </div>
                    <div className="col-sm-9">
                      <p className="ps-md-3">
                        Precious Infosystem is a delight to work with. There is an
                        incredible team of developers. I believe they would win
                        against the best!
                      </p>
                      <div className="cp-info">
                        <h6>Rich Miller</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="row">
              <div className="col-xxl-9 col-xl-10 col-lg-8 m-auto">
                <div className="feedback-block-four mb-80 ms-xxl-4 me-xxl-4">
                  <img src="/images/icon/icon_34.svg" alt="" className="m-auto" />
                  <div className="row review-box d-flex">
                    <div className="col-sm-3">
                      <Image
                        src="/images/assets/m1.png"
                        alt=""
                        className="mt-sm-0 mt-4"
                        width={120}
                        height={120}
                      />
                    </div>
                    <div className="col-sm-9">
                      <p className="ps-md-3">
                        Precious Infosystem is a delight to work with. There is an
                        incredible team of developers. I believe they would win
                        against the best!
                      </p>
                      <div className="cp-info">
                        <h6>Rich Miller</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4 m-auto">
                <div className="feedback-block-four mb-80 ms-xxl-4 me-xxl-4">
                  <img src="/images/icon/icon_34.svg" alt="" className="m-auto" />
                  <div className="row review-box d-flex">
                    <div className="col-sm-3">
                      <Image
                        src="/images/assets/m3.jpg"
                        alt=""
                        className="mt-sm-0 mt-4"
                        width={120}
                        height={120}
                      />
                    </div>
                    <div className="col-sm-9">
                      <p className="ps-md-3">
                        It's a pleasure working with Precious Infosystem. They are
                        responsive, communicative, and willing to work on all
                        aspects of the project. They work hard and take pride in it.
                      </p>
                      <div className="cp-info">
                        <h6>Kevin Davis</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="row">
              <div className="col-xxl-9 col-xl-10 col-lg-8 m-auto">
                <div className="feedback-block-four mb-80 ms-xxl-4 me-xxl-4">
                  <img src="/images/icon/icon_34.svg" alt="" className="m-auto" />
                  <div className="row review-box d-flex">
                    <div className="col-sm-3">
                      <Image
                        src="/images/assets/m2.png"
                        alt=""
                        className="mt-sm-0 mt-4"
                        width={120}
                        height={120}
                      />
                    </div>
                    <div className="col-sm-9">
                      <p className="ps-md-3">
                        It's a pleasure working with Precious Infosystem. They are
                        responsive, communicative, and willing to work on all
                        aspects of the project. They work hard and take pride in it.
                      </p>
                      <div className="cp-info">
                        <h6>Kevin Davis</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/images/assets/m3.jpg"
        alt=""
        className="shapes avatar-one"
        width={45}
        height={45}
        style={{ outlineWidth: 6 }}
      />
      <Image
        src="/images/assets/m1.png"
        alt=""
        className="shapes avatar-two"
        width={85}
        height={85}
        style={{ outlineWidth: 10 }}
      />
      <Image
        src="/images/assets/m2.png"
        alt=""
        className="shapes avatar-three"
        width={85}
        height={85}
        style={{ outlineWidth: 10 }}
      />
      <Image
        src="/images/assets/m3.jpg"
        alt=""
        className="shapes avatar-four"
        width={50}
        height={50}
        style={{ outlineWidth: 5 }}
      />
    </div>
    <Main/>
  {/* /.feedback-section-five */}
  {/*
			=====================================================
				Blog Section Three
			=====================================================
			*/}
  {/* <div class="blog-section-three position-relative pt-70 lg-pt-40">
				<div class="container">
					<div class="title-style-three text-center mb-50 lg-mb-20" data-aos="fade-up">
						<div class="sc-title">RECENT NEWS</div>
						<h2 class="main-title">A Look At Trends, Technologies, And <span>Transformations</span></h2>
					</div> 

					<div class="row gx-xxl-5">
						<div class="col-lg-4 col-sm-6 d-flex" data-aos="fade-up">
							<article class="blog-meta-one color-two tran3s mt-30">
								<figure class="post-img m0"><a href="blog-details.html" class="w-100 d-block"><img src="images/blog/blog_img_01.jpg" alt="" class="w-100 tran4s"></a></figure>
								<div class="post-data">
									<div class="post-tag"><a href="blog-details.html">Data Science</a> - 15 minute read</div>
									<a href="blog-details.html" class="blog-title"><h5>Make more daily productive  working flow like pro.</h5></a>
								</div> 
							</article>
						</div>
						<div class="col-lg-4 col-sm-6 d-flex" data-aos="fade-up" data-aos-delay="100">
							<article class="blog-meta-one color-two tran3s mt-30">
								<figure class="post-img m0"><a href="blog-details.html" class="w-100 d-block"><img src="images/blog/blog_img_02.jpg" alt="" class="w-100 tran4s"></a></figure>
								<div class="post-data">
									<div class="post-tag"><a href="blog-details.html">UI/UX Design</a> - 10 minute read</div>
									<a href="blog-details.html" class="blog-title"><h5>Internet of the things and why it’s becoming important in the century.</h5></a>
								</div> 
							</article>
						</div>
						<div class="col-lg-4 col-sm-6 d-flex" data-aos="fade-up" data-aos-delay="200">
							<article class="blog-meta-one color-two tran3s mt-30">
								<figure class="post-img m0"><a href="blog-details.html" class="w-100 d-block"><img src="images/blog/blog_img_03.jpg" alt="" class="w-100 tran4s"></a></figure>
								<div class="post-data">
									<div class="post-tag"><a href="blog-details.html">Marketing</a> - 8 minute read</div>
									<a href="blog-details.html" class="blog-title"><h5>The power product and the quotient rules.</h5></a>
								</div> 
							</article>
						</div>
						<div class="col-lg-4 col-sm-6 d-lg-none d-flex" data-aos="fade-up">
							<article class="blog-meta-one color-two tran3s mt-30">
								<figure class="post-img m0"><a href="blog-details.html" class="w-100 d-block"><img src="images/blog/blog_img_01.jpg" alt="" class="w-100 tran4s"></a></figure>
								<div class="post-data">
									<div class="post-tag"><a href="blog-details.html">Data Science</a> - 15 minute read</div>
									<a href="blog-details.html" class="blog-title"><h5>Make more daily productive  working flow like pro.</h5></a>
								</div> 
							</article>
						</div>
					</div>
				</div>
			</div>  */}
  {/*
			=====================================================
				Feature Section Twenty One
			=====================================================
			*/}
  {/* <div class="fancy-feature-twentyOne mt-200 pb-100 lg-mt-120 lg-pb-50">
				<div class="container">
					<div class="row">
						<div class="col-lg-6 col-md-7 ms-auto">
							<div class="block-style-five ps-xxl-5" data-aos="fade-left">
								<div class="title-style-three">
									<div class="sc-title">Contact us</div>
									<h2 class="main-title"> Innovate. Create. Inspire: Building A Digital Future</h2>
								</div> 
								<p class="pt-20 pb-15">In everything we do, we strive for the highest quality and deliver results aligned with your business goals.</p>
								<a href="contact-us.html" class="btn-eight ripple-btn">Send Message</a>
							</div> 
						</div>
					</div>
				</div>
				<div class="illustration-holder" data-aos="fade-right">
					<img src="images/assets/ils_16.svg" alt="" class="w-100 main-illustration">
				</div> 
				<img src="images/shape/shape_37.svg" alt="" class="shapes shape-one">
				<div class="shapes oval-one"></div>
				<div class="shapes oval-two"></div>
			</div>  */}
  {/*
			=====================================================
				Feature Section Twenty
			=====================================================
			*/}
  {/* <div class="fancy-feature-twenty position-relative mt-160 pb-100 lg-mt-100 lg-pb-70">
				<div class="container">
					<div class="row">
						<div class="col-lg-5">
							<div class="block-style-five pe-xxl-5 me-xxl-5 md-pb-50" data-aos="fade-right">
								<div class="title-style-three">
									<div class="sc-title">QUESTIONS & ANSWERS</div>
									<h2 class="main-title">Any <span>Questions?</span> Find here.</h2>
								</div> 
								<p class="pt-20 pb-15">Do you have any questions? Check it out here. Can't find the answer you're looking for? Feel free to contact us</p>
								<a href="contact-us.html" class="btn-eight ripple-btn">Contact us</a>
							</div> 
						</div>

						<div class="col-lg-7" data-aos="fade-left">
							<div class="accordion accordion-style-one" id="accordionOne">
								<div class="accordion-item">
								    <div class="accordion-header" id="headingOne">
								      	<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
								        A custom application has been developed. Would you be able to take over the software development process? 
								      	</button>
								    </div>
								    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionOne">
								    	<div class="accordion-body">
								        	<p>We are familiar with legacy software and older programming languages and are capable of taking over projects. Generally, we can either:
												<ul><li>
 												  Develop your platform on an ongoing basis; or 
												</li>
												<li>
												 If you would like to rebuild an ancient system, we can use this as the starting point for developing a modern application.
												</li>
												</ul>
											</p>
								    	</div>
								    </div>
							  	</div>
							  	<div class="accordion-item">
								    <div class="accordion-header" id="headingTwo">
								      	<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
								        	There is an idea I have for software. How do we proceed?
								      	</button>
								    </div>
								    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionOne">
								      	<div class="accordion-body">
								        	<p>Each software idea begins with a concept. After that, we create a functional features list or a scope document. This document describes your vision for the software and all the features you envision.</p>
								    	</div>
								    </div>
							  	</div>
							  	<div class="accordion-item">
								    <div class="accordion-header" id="headingThree">
								   		<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
								      			In the course of a project, how do payments work? 
								      	</button>
								    </div>
								    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionOne">
								    	<div class="accordion-body">
								        	<p>We offer fixed prices for our projects and make payments as the project progresses. Each project begins with a milestone list, including the dates for deploying each milestone and the associated fee. The initial price and part of the initial cost will also be held until final approval and sign-off are obtained. </p>
								    	</div>
								    </div>
								</div>
								<div class="accordion-item">
								    <div class="accordion-header" id="headingFour">
								   		<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
								      			What is the cost of building software? 
								      	</button>
								    </div>
								    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionOne">
								    	<div class="accordion-body">
								        	<p>Typically, there is no quick answer to this question, but once we build your feature list, we can provide you with a rough ballpark estimate. Various options can affect the price; for example, a responsive web application costs less than a native app.</p>
								    	</div>
								    </div>
								</div>
								<div class="accordion-item">
								    <div class="accordion-header" id="headingFive">
								   		<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
								        	Would you be able to build a prototype of my software idea?  
								      	</button>
								    </div>
								    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionOne">
								    	<div class="accordion-body">
								        	<p>We make MVP - the Minimum Viable Product - when building software in the early stages. To get your software to market, you must create as few features as possible, test customer response while keeping costs down, and then add new features.</p>
								    	</div>
								    </div>
								</div>
								<div class="accordion-item">
								    <div class="accordion-header" id="headingSix">
								   		<button class="accordion-button collapsed 1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
								        	How soon would you be able to begin working on our project? 
								      	</button>
								    </div>
								    <div id="collapseSix" class="accordion-collapse collapse " aria-labelledby="headingSix" data-bs-parent="#accordionOne">
								    	<div class="accordion-body">
								        	<p>Our full-time developers can begin working on your project immediately. The schedule may need to be adjusted after assigning the appropriate team member, but typically wireframes and designs are ready at the start.</p>
								    	</div>
								    </div>
								</div>
							</div>
						</div>
					</div>
				</div> 
				<img src="images/shape/shape_36.svg" alt="" class="shapes shape-one">
				<div class="shapes oval-one"></div>
			</div>  */}
  {/*
			=====================================================
				Partner Section Two
			=====================================================
			*/}
  {/* <div class="partner-section-two mt-30 mb-130 lg-mb-80">
				<div class="container">
					<div class="row">
						<div class="col-12 m-auto">
							<ul class="style-none text-center mt-40 lg-mt-10">
								<li class="partner-logo-block-one d-inline-block" data-aos="fade-up"><a href="#" class="d-flex align-items-center justify-content-center"><img src="images/logo/Plogo-13.png" alt=""></a></li>
								<li class="partner-logo-block-one d-inline-block" data-aos="fade-up" data-aos-delay="100"><a href="#" class="d-flex align-items-center justify-content-center"><img src="images/logo/Plogo-12.png" alt=""></a></li>
								<li class="partner-logo-block-one d-inline-block" data-aos="fade-up" data-aos-delay="200"><a href="#" class="d-flex align-items-center justify-content-center"><img src="images/logo/Plogo-9.png" alt=""></a></li>
								<li class="partner-logo-block-one d-inline-block" data-aos="fade-up" data-aos-delay="300"><a href="#" class="d-flex align-items-center justify-content-center"><img src="images/logo/Plogo-7.png" alt=""></a></li>
								<li class="partner-logo-block-one d-inline-block" data-aos="fade-up" data-aos-delay="400"><a href="#" class="d-flex align-items-center justify-content-center"><img src="images/logo/Plogo-8.png" alt=""></a></li>
							</ul>
						</div>
					</div>
				</div> 
				
			</div> */}
  {/* /.partner-section-two */}
  {/*   
			=====================================================
				Contact Form
			=====================================================
			*/}
  {/* <div class="contact-part">
			<div class="overlay"></div>
			<div class="container">
				<div class="row gx-xxl-5">
					<div class="col-md-6 contact-img d-flex align-items-center">
						<img src="images/assets/contact-person.png" alt="" data-aos="fade-up">
					</div>
					<div class="col-md-6 d-flex order-lg-last mt-4 mt-md-0">
						<div class="form-style-one col-12 mx-sm-auto">
							<h3 class="form-title pb-2 text-center lg-pb-20" data-aos="fade-up">Get in Touch</h3>
							<form action="inc/contact.php" id="contact-form" data-toggle="validator">
								<div class="messages"></div>
								<div class="row controls" data-aos="fade-up">
									<div class="col-12">
										<div class="input-group-meta mx-md-3 mx-1 form-group mb-3">
											<label>Name*</label>
											<input type="text" placeholder="Enter Full Name" name="name"
												required="required" data-error="Name is required." />
											<div class="help-block with-errors"></div>
										</div>
									</div>
									<div class="col-12">
										<div class="input-group-meta mx-md-3 mx-1 form-group mb-3">
											<label>Phone*</label>
											<input type="number" placeholder="Enter Mobile Number" name="name" required="required"
												data-error="Phone is required." />
											<div class="help-block with-errors"></div>
										</div>
									</div>

									<div class="col-12">
										<div class="input-group-meta mx-md-3 mx-1 form-group mb-3">
											<label>Email*</label>
											<input type="email" placeholder="Enter Email" name="email"
												required="required" data-error="Valid email is required." />
											<div class="help-block with-errors"></div>
										</div>
									</div>
									<div class="col-12">
										<div class="input-group-meta mx-md-3 mx-1 form-group mb-3">
											<label>Give Us A Message*</label>
											<textarea placeholder="Your Message*" name="message" required="required"
												data-error="Please,leave us a message."></textarea>
											<div class="help-block with-errors"></div>
										</div>
									</div>
									<div class="col-12 d-flex justify-content-center">
										<button class="btn-eight ripple-btn">Submit</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div> */}
  {/*
			=====================================================
				Footer
			=====================================================
			*/}
    <div className="subscribe-area theme-basic-footer">
      <div className="container">
        <div className="row align-items-center py-md-5 py-4">
          <div className="col-md-6">
            <div className="title-style-four sm-pb-10">
              <h3 className="main-title" data-aos="fade-up">
                Join Our <span>Newsletter</span> and get updated.
              </h3>
            </div>
          </div>
          <div className="col-md-6">
            <div className="subscribe-form" data-aos="fade-up">
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleInputChange}
                />
                <button type="submit" className="ripple-btn tran3s">
                  Subscribe
                </button>
              </form>
              <p className="mt-md-0 mt-3">
                We only send interesting and relevant emails.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-style-four theme-basic-footer">
      <div className="container">
        <div className="inner-wrapper">
          <div className="row">
            <div className="col-lg-4 footer-intro mb-40" data-aos="fade-up">
              <div className="footerlogo">
                <Link href="/" passHref>
                  <a data-aos="fade-up">
                    <img src="/images/logo/preciousLogoSquare.png" alt="" width={130} />
                  </a>
                </Link>
              </div>
              <p>
                We are committed to our relentless pursuit of developing efficient solutions for small to large companies and individuals to make technology work with you, for you!
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
                  <Link href="/services/software-development">
                    <a>Software Development Services</a>
                  </Link>
                </li>
                <li>
                  <Link href="/services/website-development">
                    <a>Website Development Services</a>
                  </Link>
                </li>
                <li>
                  <Link href="/services/full-stack-development">
                    <a>Full Stack Development Services</a>
                  </Link>
                </li>
                <li>
                  <Link href="/services/ui-ux-design">
                    <a>UI/UX Development Services</a>
                  </Link>
                </li>
                <li>
                  <Link href="/services/digital-marketing">
                    <a>Digital Marketing Services</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4 mb-30">
              <h5 className="footer-title">Social</h5>
              <ul className="d-flex social-icon style-none">
                <li>
                  <a href="https://www.facebook.com/PreciousInfoSystem/">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/preciousinfosystem/">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/precious.infosystem/">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="bottom-footer">
            <div className="d-lg-flex justify-content-between align-items-center mt-2">
              <ul className="order-lg-1 pb-15 d-flex justify-content-center footer-nav style-none">
                {/* <li><Link href="/faq"><a className="footer-privacy">Privacy &amp; Terms.</a></Link></li> */}
                {/* <li><Link href="/faq"><a className="footer-faq">FAQ</a></Link></li> */}
              </ul>
              <p className="copyright text-center order-lg-0 pb-15">
                &copy; 2023 | <b>Precious Infosystem Pvt. Ltd.</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/* /.footer-style-four */}
  <button className="scroll-top">
    <i className="bi bi-arrow-up-short" />
  </button>
</div>
<Script src="vendor/jquery.min.js"></Script>
    
      <Script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></Script>
    
      <Script src="vendor/aos-next/dist/aos.js"></Script>
      
      <Script src="vendor/slick/slick.min.js"></Script>
     
      <Script src="vendor/jquery.counterup.min.js"></Script>
      <Script src="vendor/jquery.waypoints.min.js"></Script>
    
      <Script src="vendor/fancybox/dist/jquery.fancybox.min.js"></Script>
   
      <Script src="vendor/validator.js"></Script>

      <Script src="js/theme.js"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></Script>
      <Script src="js/CustomSwiper.js"></Script>
      <Script src="js/wow.min.js"></Script>
      <Script>
        new WOW().init();
      </Script>

    </div>
  )
}

export default index
