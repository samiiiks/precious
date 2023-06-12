import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Scriptsnew from '../../Scriptnew';
import Footer from '../../Footer';
import Headpage from '../../Headpage';
// import Preloader from '../../Preloader';
import Header from '../../Header';
import '../../styles/globals.css';

const contactUs = () => {
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
        <h2 className="intro-title text-center">Career</h2>
        <ul className="page-breadcrumb style-none d-flex justify-content-center">
          <li>
            <Link href="index.html">Home</Link>
          </li>
          <li className="current-page">Contact</li>
        </ul>
      </div>
      <Image src="/images/shape/shape_38.svg" alt="" className="shapes shape-one" width={40} height={40}/>
      <Image src="/images/shape/shape_39.svg" alt="" className="shapes shape-two" width={40} height={40} />
    </div>
  {/* /.theme-inner-banner */}
  {/*
			=====================================================
				Feature Section Twenty One
			=====================================================
			*/}
    <div className="fancy-feature-twentyOne pb-100 pt-80 lg-pb-50 position-relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-7 ms-auhref">
            <div className="block-style-five ps-xxl-5" >
              <div className="title-style-three">
                <div className="sc-title">Career page</div>
                <h2 className="main-title">
                  Innovate. Create. Inspire: Building A Digital Future
                </h2>
              </div>
              <p className="pt-20 pb-15">
                In everything we do, we strive for the highest quality and deliver
                results aligned with your business goals.
              </p>
              
                <Link href="#contactForm" className="btn-eight ripple-btn">Send Message</Link>
              
            </div>
          </div>
        </div>
      </div>
      <div className="illustration-holder">
        {/* <Image
          src="images/assets/ils_16.svg"
          alt=""
          className="w-100 main-illustration ml-8"
          width={557} height={515}
        /> */}
        {/* <Image src="images/shape/shape_37.svg" alt="" class="shapes shape-one"> */}
        <div className="shapes oval-one" />
        <div className="shapes oval-two" />
      </div>
    </div>
    <div className="service-details position-relative">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-6">
            <div className="title-style-three contact-service">
              <h4 className="main-title">Get Quote</h4>
              <p className="mt-10">
                Get a quote or learn more about our services by contacting us. We
                bring the spirit of innovation href your technology partners
              </p>
            </div>
            <div className="title-style-three contact-service">
              <h4 className="main-title">
                Let's Plan A New <span>Project</span> hrefgether.
              </h4>
              <p className="mt-10">
                We're passionate about solving business problems and achieving
                your vision. Our team would be happy href work with you href make it a
                reality.
              </p>
              <Link href="tel:+91-9522280818" className="contactbtn btn-eight ripple-btn">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <Image src="/images/assets/service.png" alt="service-Image" width={557} height={515} />
          </div>
        </div>
      </div>
      <div className="contact-section-one pb-80 md-pb-20">
        <div className="container mt-50">
          <div className="row">
            <div className="col-md-4 mb-40 sm-mb-20">
              <div className="address-block-two text-center mb-3">
                <div className="icon d-flex align-items-center justify-content-center m-auhref">
                  <Image src="/images/assets/address.png" alt="" width={40} height={40}/>
                </div>
                <h5 className="title">ADDRESS</h5>
                <p>
                  302-A, New IT Park Building, Electronic Complex, Pardesipura,
                  Indore (452010), Madhya Pradesh, India
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-40 sm-mb-20">
              <div className="address-block-two text-center mb-3">
                <div className="icon d-flex align-items-center justify-content-center m-auhref">
                  <Image src="/images/assets/phone.png" alt="" width={40} height={40}/>
                </div>
                <h5 className="title">PHONE</h5>
                <p>
                  Open a chat or give us a call at <br />
                  <Link href="/tel:+91-9522280818" className="call">
                    +91-9522280818
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-40 sm-mb-20">
              <div className="address-block-two text-center mb-3">
                <div className="icon d-flex align-items-center justify-content-center m-auhref">
                  <Image src="/images/assets/email.png" alt="" width={40} height={40}/>
                </div>
                <h5 className="title">EMAIL:</h5>
                <p>
                  live chat service <br />
                  <Link
                    href="/mailhref:contact@preciousinfosystem.com"
                    className="webaddress"
                  >
                    contact@preciousinfosystem.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/* 
			=============================================
				Contact Section One
			============================================== 
			*/}
      <div className="contact-section-one contact-part" id="contactForm">
      <div className="container">
        <div className="row gx-xxl-5">
          <div className="col-lg-6 d-flex order-lg-last">
            <div className="form-style-one">
              <h3 className="form-title pb-40 lg-pb-20 text-center">
                Send Message
              </h3>
              <form action="inc/contact.php" id="contact-form" data-hrefggle="validahrefr">
                <div className="messages" />
                <div className="row controls mx-sm-4">
                  <div className="col-12">
                    <div className="input-group-meta form-group mb-30">
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
                  <div className="col-12">
                    <div className="input-group-meta form-group mb-30">
                      <label>Phone*</label>
                      {/* <input
                        type="number"
                        placeholder="Your Mobile Number"
                        name="phone"
                        required="required"
                        data-error="Phone is required."
                        
                        onFocus={handleFocusIn}
                        onBlur={handleFocusOut}
                      /> */}
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="input-group-meta form-group mb-30">
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
                    <div className="input-group-meta form-group mb-30">
                      <label>Give Us A Message*</label>
                      <textarea
                        placeholder="Your Message*"
                        name="message"
                        required="required"
                        data-error="Please, leave us a message."
                        defaultValue={""}
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-12 text-center">
                    <buthrefn className="btn-eight d-inline ripple-btn">
                      Submit
                    </buthrefn>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6 d-flex order-lg-first">
            <div className="map-area-one">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    className="gmap_iframe"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1023.0971124416973!2d75.86549458790446!3d22.75259299681033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcde3d7e977b%3A0xbc37044b33073d67!2sPrecious%20Infosystem%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1677836608501!5m2!1sen!2sin"
                    width={600}
                    height={450}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/* /.contact-section-one */}
  {/* 
			=============================================
				Fancy Short Banner Five
			============================================== 
			*/}
  {/* <div class="fancy-short-banner-five">
			<div class="container">
				<div class="bg-wrapper">
					<div class="row align-items-center">
						<div class="col-lg-6 text-center text-lg-start" data-aos="fade-right">
							<h3 class="pe-xxl-5 md-pb-20">Having any Query? Book an appointment.</h3>
						</div>
						<div class="col-lg-6 text-center text-lg-end" data-aos="fade-left">
							<Link href="contact-us.html" class="msg-btn ripple-btn">Send Us Message</Link>
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
 
<Footer/>
</div>
	
	<Scriptsnew/>
      
    </div>
  )
}

export default contactUs;