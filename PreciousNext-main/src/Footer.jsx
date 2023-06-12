import React from 'react';

import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import '../public/css/style.css'


const Footer = (props) => {
  const { heading, paragraph, address } = props
  const link = [
    { url: "/", label: 'Industries we serve' },
    { url: "/", label: 'Press Release' },
    { url: "/", label: 'Our work' },
    { url: "/", label: 'Blog' },
    { url: "/", label: 'FAQ' }
  ]
  const services = [
    { url: 'ServiceSoftwareDevelopment.html', name: 'Website Development' },
    { url: 'ServiceWebsitedevelopment.html', name: 'Mobile App Development' },
    { url: 'ServiceFullStackDevelopment.html', name: 'Software Development' },
    { url: 'ServiceUI-UXDesign.html', name: 'Full Stack Development' },
    { url: 'ServiceDigitalMarketing.html', name: 'UI/UX Design' },
    { url: 'ServiceDigitalMarketing.html', name: 'Digital Marketing' },
  ];
  return (

    <div className="footer-style-four theme-basic-footer">
      <div className="container">
        <div className="inner-wrapper">
          <div className="row">
            <div className="col-lg-4 footer-intro mb-40">
              <div className="footerlogo">
              </div>
              {heading &&
                <h4 className='footer-title'>{heading}</h4>
              }
              {paragraph &&
                <p>
                  {paragraph}
                </p>
              }
              <ul className="d-flex social-icon style-none">
                <li>
                  <a href="https://www.facebook.com/PreciousInfoSystem/" target="_blank"><i
                    className="fab fa-facebook-f"></i></a>
                </li>
                <li>
                  <a href=" https://twitter.com/"><i className="fab fa-twitter"></i></a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/preciousinfosystem/" target="_blank"><i
                    className="fab fa-linkedin-in"></i></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/precious.infosystem/" target="_blank"><i
                    className="fab fa-instagram"></i></a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-sm-4 ms-auto mb-30">
              <h5 className="footer-title">Quick Links</h5>
              {link.map((elem, ind) => {
                return <ul className="footer-nav-link style-none">
                  <li><a href={link.url}>{elem.label}</a></li>
                </ul>
              })}
            </div>
            <div className="col-lg-3 col-sm-4 mb-30">
              <div className="service-list">
                <h5 className="footer-title">Services</h5>
                {services.map((item, ind) => {
                  return <ul key={ind}className="footer-nav-link style-none">
                    <li>
                      <a href={item.url}>{item.name}</a>
                    </li>
                  </ul>
                })}
              </div>
            </div>
            <div className="col-lg-3 col-sm-4 mb-30">
              <div className="address">
                <h5 className="footer-title">Contact Us</h5>
                <p>{address}</p>
                <address className='footer-nav-link'>
                  <Link href="mailto:contact@preciousinfosystem.com">contact@preciousinfosystem.com</Link>
                  <Link href="tel:+91- 9522280818">P:
                    +91- 9522280818</Link>
                </address>
              </div>
            </div>
          </div>
          <div class="bottom-footer">
            <div class="d-lg-flex justify-content-between align-items-center mt-2">
              <ul class="order-lg-1 pb-15 d-flex justify-content-center footer-nav style-none">
                <li><a class="footer-privacy" href="/faq">Privacy &amp; Terms.</a></li>
                <li><a class="footer-faq" href="/faq">FAQ</a></li>
              </ul>
              <p class="copyright text-center order-lg-0 pb-15">
                Copyright @2023 | <b>Precious Infosystem Pvt. Ltd.</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer;