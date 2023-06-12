import React from 'react';
import Script from "next/script";
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
// import '../styles/globals.css';
import Headpage from '../Headpage.jsx';
import '../../public/css/responsive.css'
import '../../public/css/style.css'
import Scriptnew from '../Scriptnew.jsx';
// import Preloader from '../Preloader.jsx';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';

const index = () => {
  const heading = 'Precious Infosystem Pvt. Ltd.'
  const paragraph = 'Our Commitment: Making Technology Work for You!'
  const address = "142A, Third floor, New IT park, Electronic Complex, Pardesipura, Indore, Madhya Pradesh 452010"
  const label = 'Inquiry'
  const contact = 'Contact us'
  const technologyData = [
    {
      id: "1",
      image: "images/assets/ror.png",
      name: "Ruby On Rails"
    },
    {
      id: "2",
      image: "images/assets/python.png",
      name: " Python"
    },
    {
      id: "3",
      image: "images/assets/django.png",
      name: "Django"
    },
    {
      id: "4",
      image: "images/assets/js.png",
      name: "Javascript"
    },
    {
      id: "5",
      image: "images/assets/react.png",
      name: "React"
    },
    {
      id: "6",
      image: "images/assets/angular.png",
      name: "Angular"
    },
    {
      id: "7",
      image: "images/assets/html.png",
      name: "html"
    },
    {
      id: "8",
      image: "images/assets/css.png",
      name: "css"
    },
    {
      id: "9",
      image: "images/assets/redux.png",
      name: "Redux"
    },
    {
      id: "10",
      image: "images/assets/bootstrap.png",
      name: "Bootstrap"
    },
  ]

  return (
    <div>

      <Headpage />
      <div className="main-page-wrapper">
        {/* ===================================================
				Loading Transition
			==================================================== */}

        {/* ===================================================
        Loading Transition
      ==================================================== */}

        {/* <Preloader/> */}

        {/* 
			=============================================
				Theme Main Menu
			============================================== 
			*/}
        <Header label={label} />
        {/* /.theme-main-menu */}
        {/* 
			=============================================
				Theme Hero Banner
			============================================== 
			*/}
        <div className="hero-banner-five">
          <div class="container">
            <div class="row">
              <div class="col-xxl-6 col-md-7">
                <h1 class="hero-heading fw-bold wow slideInLeft" data-wow-duration="2s" data-wow-delay="1s">
                  Developing Software For Your Digital Success
                </h1>
                <p class="text-lg mb-3 pt-10 pb-10 pe-xl-5 md-pt-30 md-mb-40 wow slideInLeft" data-wow-duration="2s"
                  data-wow-delay="1.2s">
                  We enable businesses to meet today's needs through robust and
                  adaptable digital solutions while unlocking tomorrow's
                  possibilities.
                </p>
                <ul class="style-none button-group d-flex align-items-center wow slideInLeft" data-wow-duration="2s"
                  data-wow-delay="1.4s">
                  <li class="me-4">
                    <a href="contact-us.html" class="demo-btn ripple-btn tran3s">{contact}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* /.container */}
          <div class="illustration-holder wow slideInRight" data-wow-duration="2s" data-wow-delay="1s">
            <img src="images/assets/ils_13.svg" alt="" class="main-illustration ms-auto" />
            <img src="images/assets/ils_13_1.svg" alt="" class="shapes shape-one" />
            <img src="images/assets/ils_13_2.svg" alt="" class="shapes shape-two" />
            <img src="images/assets/ils_13_2.svg" alt="" class="shapes shape-three" />
          </div>
          <div class="shapes oval-one"></div>
        </div>
        {/* /.hero-banner-five */}
        <section class="about-text">
          <div class="container">
            <div class="row">
              <div class="col-xxl-12 col-md-12 text-center">
                <h2>Empowering Digital Success through Software Solutions</h2>
                <p>Empowering digital success through our robust and adaptable software solutions, we enable businesses to meet their current needs while unlocking endless possibilities for tomorrow. With our expertise and forward-thinking approach, we provide businesses with the tools and technologies they need to thrive in the digital realm. Our tailored software solutions are designed to drive growth, enhance efficiency, and deliver exceptional results, ensuring long-term success in today's dynamic business landscape.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* 
			=============================================
				Feature Section Seventeen
			============================================== 
			*/}

        {/*
			=====================================================
				Counter Section One
			=====================================================

			*/}


        <div className="counter-section-one mt-80 lg-mt-100">
          <div className="container">
            <div className="inner-container bg-color position-relative" >
              <div className="row justify-content-center">
                <div className="col-md-3 col-sm-6" data-aos-delay={50}>
                  <div className="counter-block-one text-center mb-20">
                    <div className="main-count">
                      <img src="/images/assets/project.png" alt="" width={80} height={80} />
                    </div>
                    <div className="main-count">
                      <span className="counter">500</span>+
                    </div>
                    <p>projects delivered</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6" data-aos-delay={200}>
                  <div className="counter-block-one text-center mb-20">
                    <div className="main-count">
                      <img src="/images/assets/success.png" alt="" width={80} height={80} />
                    </div>
                    <div className="main-count">
                      <span className="counter">96</span>%
                    </div>
                    <p>enterprise client retention</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6" data-aos-delay={350}>
                  <div className="counter-block-one text-center mb-20">
                    <div className="main-count">
                      <img src="/images/assets/client.png" alt="" width={80} height={80} />
                    </div>
                    <div className="main-count">
                      <span className="counter">300</span>+
                    </div>
                    <p>happy clients</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6" data-aos-delay={500}>
                  <div className="counter-block-one text-center mb-20">
                    <div className="main-count">
                      <img src="/images/assets/year.png" alt="" width={80} height={80} />
                    </div>
                    <div className="main-count">
                      <span className="counter" id="year">{/* Dynamic content here */}</span>+
                    </div>
                    <p>years of experience</p>
                  </div>
                </div>
              </div>
            </div>
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
              <h3 className="p-5 text-center" >
                Technologies We Work With
              </h3>
              <div class="row row-cols-lg-5 row-cols-md-3 row-cols-2 d-flex flex-wrap justify-content-between">
                {technologyData.map((item, ind) => {
                  return <div key={ind} class="text-center p-3 block-style-eighteen">
                    <img src={item.image} alt="technology icon" />
                    {item.name}
                  </div>
                })}
                {/* Rest of the code */}
              </div>
            </div>
            <div class="block-style-seventeen mt-3">
              <h3 class="p-5 text-center" >
                Industries We Serve
              </h3>
              <div class="row align-items-center">
                <div class="col-md-6 industry-p">
                  <p>
                    Our industry specific software solutions streamlined business
                    process along with efficient customer’s engagement. We
                    identify opportunities to provide competitive advantages to
                    our clients by leveraging the latest technology. Boost your
                    revenue and drive operational excellence with our customized
                    software industries solutions.
                  </p>
                  <div>
                    <div class="soft-dev" >
                      <img src="images/assets/checked.png" class="checked" alt="" />
                      Increased company value
                    </div>
                    <div class="soft-dev" >
                      <img src="images/assets/checked.png" class="checked" alt="" />
                      Reduces training overheads
                    </div>
                    <div class="soft-dev">
                      <img src="images/assets/checked.png" class="checked" alt="" />
                      Increases employees efficiency and productivity
                    </div>
                    <div class="soft-dev" >
                      <img src="images/assets/checked.png" class="checked" alt="" />
                      Accelerate growth
                    </div>
                    <div class="soft-dev" >
                      <img src="images/assets/checked.png" class="checked" alt="" />
                      Streamline business operations and accounts
                    </div>
                    <div class="soft-dev" >
                      <img src="images/assets/checked.png" class="checked" alt="" />
                      Effective communication with customers, suppliers and
                      partners
                    </div>
                    <div class="soft-dev" >
                      <img src="images/assets/checked.png" class="checked" alt="" />
                      Reduction in cost
                    </div>
                  </div>
                </div>
                <div class="col-md-6 md-pt-50 technology-right">
                  <img src="images/assets/industry.png" alt="industries" />
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
            <div className="title-style-three text-center">
              <div className="sc-title">Testimonials</div>
              <h2 className="main-title">
                Words from <span>Client</span>
              </h2>
            </div>
            <div className="pb-50 mt-80">
              <div className="container">
                <div className="swiper-container">
                  <div className="swiper-wrapper">
                    <div
                      className="swiper-slide col-lg-3 col-sm-12 col-md-6 d-flex"
                    >
                      <h1>hello</h1>
                      <div className="block-style-four">
                        <div className="row review-box">
                          <img
                            src="images/assets/john.jpeg"
                            alt=""
                            className="mt-sm-0 mt-4"
                          />
                          <div className="swiper-content">
                            <p className="">
                              Working with Precious Infosystem has been a game-changer
                              for our business. Their expertise in software development
                              and their dedication to understanding our unique
                              requirements resulted in a solution that exceeded our
                              expectations. Highly recommended!"
                            </p>
                          </div>
                          <div className="cp-info">
                            <h6>
                              John Smith <span>CEO of Aahan technologies</span>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="swiper-slide col-lg-3 col-sm-12 col-md-6 d-flex"
                      data-aos-delay={100}
                    >
                      <div className="block-style-four">
                        <div className="row review-box">
                          <img
                            src="images/assets/sarah.jpg"
                            alt=""
                            className="mt-sm-0 mt-4"
                          />
                          <div className="swiper-content">
                            <p>
                              "The team at Precious Infosystem transformed our outdated
                              website into a modern and user-friendly platform. Their
                              exceptional UI/UX design skills and attention to detail
                              made a significant impact on our online presence. We are
                              thrilled with the results!"
                            </p>
                          </div>
                          <div className="cp-info">
                            <h6>
                              Sarah Johnson{" "}
                              <span>Marketing Manager at bluetick Corporation</span>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="swiper-slide col-lg-3 col-sm-12 col-md-6 d-flex"
                      data-aos-delay={200}
                    >
                      <div className="block-style-four">
                        <div className="row review-box">
                          <img
                            src="images/assets/david.jpg"
                            alt=""
                            className="mt-sm-0 mt-4"
                          />
                          <div className="swiper-content">
                            <p className="">
                              "Partnering with Precious Infosystem for our mobile app
                              development project was the best decision we made. Their
                              technical proficiency, seamless communication, and on-time
                              delivery surpassed our expectations. The app has received
                              excellent feedback from our users!"
                            </p>
                          </div>
                          <div className="cp-info">
                            <h6>
                              David Thompson <span>CTO of Parikya Enterprises</span>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="swiper-slide col-lg-3 col-sm-12 col-md-6 d-flex"
                      data-aos-delay={200}
                    >
                      <div className="block-style-four">
                        <div className="row review-box">
                          <img
                            src="images/assets/emildy.jpg"
                            alt=""
                            className="mt-sm-0 mt-4"
                          />
                          <div className="swiper-content">
                            <p className="">
                              "Precious Infosystem's digital marketing services have
                              been instrumental in boosting our online visibility and
                              driving traffic to our website. Their strategic approach,
                              data-driven insights, and continuous optimization have
                              significantly improved our brand reach. Thank you for your
                              exceptional work!"
                            </p>
                          </div>
                          <div className="cp-info">
                            <h6>
                              Emily Davis{" "}
                              <span>Marketing Director at NDC Solutions</span>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="swiper-slide col-lg-3 col-sm-12 col-md-6 d-flex"
                      data-aos-delay={200}
                    >
                      <div className="block-style-four">
                        <div className="row review-box">
                          <img
                            src="images/assets/michael.jpg"
                            alt=""
                            className="mt-sm-0 mt-4"
                          />
                          <div className="swiper-content">
                            <p className="">
                              We approached Precious Infosystem for custom software
                              development, and they delivered a solution that
                              streamlined our operations and enhanced our productivity.
                              Their professionalism, technical expertise, and
                              post-launch support made the entire process seamless.
                              Highly satisfied!"
                            </p>
                          </div>
                          <div className="cp-info">
                            <h6>
                              Michael Johnson<span>COO of diaspark Industries</span>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="swiper-slide col-lg-3 col-sm-12 col-md-6 d-flex"
                      data-aos-delay={200}
                    >
                      <div className="block-style-four">
                        <div className="row review-box">
                          <img
                            src="images/assets/amanda.jpg"
                            alt=""
                            className="mt-sm-0 mt-4"
                          />
                          <div className="swiper-content">
                            <p className="">
                              "Working with the team at Precious Infosystem has been a
                              pleasure from start to finish. Their collaborative
                              approach, proactive communication, and ability to
                              understand our business needs set them apart. They
                              delivered a software solution that has transformed our
                              business processes. Highly recommend their services!"{" "}
                            </p>
                          </div>
                          <div className="cp-info">
                            <h6>
                              Amanda Roberts{" "}
                              <span>Operations Manager at taskup Corporation</span>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-pagination" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="subscribe-area theme-basic-footer">
          <div className="container">
            <div className="row py-md-5 py-4">
              <div className="col-md-6">
                <div className="title-style-four sm-pb-10">
                  <h3 className="main-title">
                    Get in Touch with Us.
                    {/* <span>Newsletter</span> and get updated. */}
                  </h3>
                  <p>
                    We are dedicated to providing world-class solutions that suit the
                    needs of both small and large companies, as well as individuals.
                    Technology seamlessly works with and for you when you connect with
                    us today. Our satisfied clients have achieved success through our
                    exceptional projects. Join our community of satisfied clients today!
                  </p>
                </div>
                {/* /.title-style-four */}
              </div>
              <div className="col-md-6">
                <div className="subscribe-form" >
                  <form
                    action="inc/contact.php"
                    id="contact-form"
                    data-toggle="validator"
                  >
                    <div className="messages" />
                    <div className="row controls mx-sm-4">
                      <div className="col-12">
                        <div className="input-group-meta form-group mb-20">
                          <label>Name*</label>
                          <input
                            type="text"
                            placeholder="Your Full Name"
                            name="name"
                            required="required"
                            data-error="Name is required."
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="input-group-meta form-group mb-20">
                          <label>Company</label>
                          <input
                            type="text"
                            placeholder="Your Company Name"
                            name="name"
                            required="required"
                            data-error="Company name is required."
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="input-group-meta form-group mb-20">
                          <label>Country</label>
                          <input
                            type="text"
                            placeholder="Your Country Name"
                            name="name"
                            required="required"
                            data-error="Country name is required."
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="input-group-meta form-group mb-20">
                          <label>Phone*</label>
                          <input
                            type="number"
                            placeholder="Your Mobile Number"
                            name="name"
                            required="required"
                            data-error="Phone is required."
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="input-group-meta form-group mb-20">
                          <label>Email*</label>
                          <input
                            type="email"
                            placeholder="Your Email"
                            name="email"
                            required="required"
                            data-error="Valid email is required."
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input-group-meta form-group mb-20">
                          <label>Give Us A Message*</label>
                          <textarea
                            placeholder="Your Message*"
                            name="message"
                            required="required"
                            data-error="Please,leave us a message."
                            defaultValue={""}
                          />
                          <p>
                            Contact us to experience global quality solutions. Join our
                            satisfied clients with successful projects
                          </p>
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-12 text-left">
                        <button className="btn-eight d-inline ripple-btn">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                  {/* <p class="mt-md-0 mt-3">
          We only send interesting and relevant emails.
        </p> */}
                </div>
                {/* /.subscribe-form */}
              </div>
            </div>
          </div>
        </div>

        {/* /.feedback-section-five */}
        {/*
			=====================================================
				Blog Section Three
			=====================================================
			*/}
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
                  <h3 className="main-title">
                    Join Our <span>Newsletter</span> and get updated.
                  </h3>
                </div>
              </div>
              <div className="col-md-6">
                <div className="subscribe-form" >
                  <form action="#">
                    <input type="email" placeholder="Enter your email" />
                    <button className="ripple-btn tran3s">Subscribe</button>
                  </form>
                  <p className="mt-md-0 mt-3">
                    We only send interesting and relevant emails.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <Footer heading={heading} paragraph={paragraph} address={address} />
      </div>
      <Scriptnew />
    </div>
  )
}

export default index
