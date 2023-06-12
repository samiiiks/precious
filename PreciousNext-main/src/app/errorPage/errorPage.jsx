import React from 'react';
import Script from "next/script";
import Link from 'next/link';
import Head from 'next/head';

const errorPage = () => {
    return (
      <><h1>hii</h1></>
//         <div>
//  <Head>
//         <meta charSet="UTF-8" />
//         <meta
//           name="keywords"
//           content="Web Development, Web Design, Frontend Development, Mobile Application Development, Backend Development"
//         />
//         <meta name="description" content="Precious" />
//         <meta property="og:site_name" content="Precious" />
//         <meta property="og:url" content="https://www.preciousinfosystem.com/" />
//         <meta property="og:type" content="website" />
//         <meta
//           property="og:title"
//           content="Precious - Best Software Development Company"
//         />
//         {/* <meta name='og:image' content='images/assets/ogg.png'> */}
//         {/* For IE */}
//         <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//         {/* For Resposive Device */}
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         {/* For Window Tab Color */}
//         {/* Chrome, Firefox OS and Opera */}
//         <meta name="theme-color" content="#913BFF" />
//         {/* Windows Phone */}
//         <meta name="msapplication-navbutton-color" content="#913BFF" />
//         {/* iOS Safari */}
//         <meta
//           name="apple-mobile-web-app-status-bar-style"
//           content="#913BFF"
//         />
//         <title>Precious Infosystem</title>
//         {/* Favicon */}
//         <link
//           rel="icon"
//           type="image/png"
//           sizes="56x56"
//           href="images/logo/preciousLogo01.png"
//         />
//         {/* Main style sheet */}
//         <link rel="stylesheet" type="text/css" href="css/style.css" media="all" />
//         {/* responsive style sheet */}
//         <link
//           rel="stylesheet"
//           type="text/css"
//           href="css/responsive.css"
//           media="all"
//         />
//       </Head>

//             <div className="main-page-wrapper">
//                 {/* ===================================================
// 				Loading Transition
// 			==================================================== */}
//                   <section>
//       <div id="preloader">
//         <div id="ctn-preloader" className="ctn-preloader">
//           <div className="animation-preloader">
//             <div className="icon">
//               <img
//                 src="/path/to/logo/preciousLogoSquare.png"
//                 alt=""
//                 className="m-auto d-block"
//               />
//             </div>
//             <div className="txt-loading mt-2">
//               <span data-text-preloader="P" className="letters-loading">
//                 P
//               </span>
//               <span data-text-preloader="R" className="letters-loading">
//                 R
//               </span>
//               <span data-text-preloader="E" className="letters-loading">
//                 E
//               </span>
//               <span data-text-preloader="C" className="letters-loading">
//                 C
//               </span>
//               <span data-text-preloader="I" className="letters-loading">
//                 I
//               </span>
//               <span data-text-preloader="O" className="letters-loading">
//                 O
//               </span>
//               <span data-text-preloader="U" className="letters-loading">
//                 U
//               </span>
//               <span data-text-preloader="S" className="letters-loading">
//                 S
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//                 {/* 
// 			=============================================
// 				Search
// 			============================================== 
// 			*/}
//                  <div className="offcanvas offcanvas-top theme-search-form bg-three justify-content-center">
//       <button
//         type="button"
//         className="close-btn tran3s"
//         data-bs-dismiss="offcanvas"
//         aria-label="Close"
//       >
//         <i className="bi bi-x-lg" />
//       </button>
//       <div className="form-wrapper">
//         <form action="#">
//           <input
//             type="text"
//             placeholder="Search Keyword...."
//             value={searchKeyword}
//             onChange={handleInputChange}
//           />
//         </form>
//       </div>
//     </div>
//                 {/* 
// 			=============================================
// 				Theme Main Menu
// 			============================================== 
// 			*/}
//                <header className="theme-main-menu sticky-menu theme-menu-four">
//     <div className="inner-content">
//       <div className="d-flex align-items-center">
//         <div className="logo order-lg-0">
//           <Link href="/">
//             <a className="d-block">
//               <img src="images/logo/preciousLogoSquare.png" alt="" width={128} />
//             </a>
//           </Link>
//         </div>
//         <div className="right-widget d-flex align-items-center ms-auto order-lg-3">
//           <div className="call-button d-none d-xl-block me-5">
//             Call us <a href="tel:+91-9522280818">+91-9522280818</a>
//           </div>
//           <button
//             className="menu-search-btn tran3s"
//             type="button"
//             data-bs-toggle="offcanvas"
//             data-bs-target="#offcanvasTop"
//             aria-controls="offcanvasTop"
//           >
//             <i className="bi bi-search" />
//           </button>
//           <Link href="/contact-us.html">
//             <a className="send-msg-btn tran3s d-none d-lg-block">
//               Send us Message
//             </a>
//           </Link>
//         </div>{" "}
//         {/* /.right-widget */}
//         <nav className="navbar navbar-expand-lg order-lg-2">
//           <button
//             className="navbar-toggler d-block d-lg-none"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span />
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav">
//               <li className="d-block d-lg-none">
//                 <div className="logo">
//                   <Link href="/">
//                     <a>
//                       <img src="images/logo/logo_01.png" alt="" width={130} />
//                     </a>
//                   </Link>
//                 </div>
//               </li>
//               <li className="nav-item dropdown">
//                 <a
//                   className="nav-link dropdown-toggle"
//                   href="#"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   data-bs-auto-close="outside"
//                   aria-expanded="false"
//                 >
//                   Home
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <Link href="/index.html">
//                       <a className="dropdown-item">
//                         <span>User Analysis</span>
//                       </a>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/index-2.html">
//                       <a className="dropdown-item">
//                         <span>Artificial Intelligence</span>
//                       </a>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/index-3.html">
//                       <a className="dropdown-item">
//                         <span>Data Science</span>
//                       </a>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/index-4.html">
//                       <a className="dropdown-item">
//                         <span>Chatbot</span>
//                       </a>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/index-5.html">
//                       <a className="dropdown-item">
//                         <span>Machine Learning</span>
//                       </a>
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//               <li className="nav-item active dropdown">
//                 <a
//                   className="nav-link dropdown-toggle"
//                   href="#"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   data-bs-auto-close="outside"
//                   aria-expanded="false"
//                 >
//                   Pages
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li className="dropdown-submenu dropdown">
//                     <a
//                       className="dropdown-item dropdown-toggle"
//                       data-bs-toggle="dropdown"
//                       data-bs-auto-close="outside"
//                       aria-expanded="false"
//                       href="#"
//                     >
//                       <span>About Us</span>
//                     </a>
//                     <ul className="dropdown-menu">
//                       <li>
//                         <Link href="/About.html">
//                           <a className="dropdown-item">
//                             <span>About Us One</span>
//                           </a>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/about-us2.html">
//                           <a className="dropdown-item">
//                             <span>About Us Two</span>
//                           </a>
//                         </Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li className="dropdown-submenu dropdown">
//                     <a
//                       className="dropdown-item dropdown-toggle"
//                       data-bs-toggle="dropdown"
//                       data-bs-auto-close="outside"
//                       aria-expanded="false"
//                       href="#"
//                     >
//                       <span>Services</span>
//                     </a>
//                     <ul className="dropdown-menu">
//                       <li>
//                         <Link href="/Services.html">
//                           <a className="dropdown-item">
//                             <span>Service One</span>
//                           </a>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/service-V2.html">
//                           <a className="dropdown-item">
//                             <span>Service Two</span>
//                           </a>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/service-details-V1.html">
//                           <a className="dropdown-item">
//                             <span>Service Details</span>
//                           </a>
//                         </Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li className="dropdown-submenu dropdown">
//                     <a
//                       className="dropdown-item dropdown-toggle"
//                       data-bs-toggle="dropdown"
//                       data-bs-auto-close="outside"
//                       aria-expanded="false"
//                       href="#"
//                     >
//                       <span>Our Team</span>
//                     </a>
//                     <ul className="dropdown-menu">
//                       <li>
//                         <Link href="/team.html">
//                           <a className="dropdown-item">
//                             <span>Team Member</span>
//                           </a>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/team-details.html">
//                           <a className="dropdown-item">
//                             <span>Team Details</span>
//                           </a>
//                         </Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li className="dropdown-submenu dropdown">
//                     <a
//                       className="dropdown-item dropdown-toggle"
//                       data-bs-toggle="dropdown"
//                       data-bs-auto-close="outside"
//                       aria-expanded="false"
//                       href="#"
//                     >
//                       <span>Other Pages</span>
//                     </a>
//                     <ul className="dropdown-menu">
//                       <li>
//                         <Link href="/faq.html">
//                           <a className="dropdown-item">
//                             <span>Faq</span>
//                           </a>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/signin.html">
//                           <a className="dropdown-item">
//                             <span>Signin</span>
//                           </a>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/sign-up.html">
//                           <a className="dropdown-item">
//                             <span>Signup</span>
//                           </a>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/404.html">
//                           <a className="dropdown-item">
//                             <span>404 Error</span>
//                           </a>
//                         </Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li>
//                     <Link href="/testimonial.html">
//                       <a className="dropdown-item">
//                         <span>Testimonials</span>
//                       </a>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/pricing.html">
//                       <a className="dropdown-item">
//                         <span>Our Pricing</span>
//                       </a>
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//               <li className="nav-item dropdown">
//                 <a
//                   className="nav-link dropdown-toggle"
//                   href="#"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   data-bs-auto-close="outside"
//                   aria-expanded="false"
//                 >
//                   Portfolio
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <Link href="/portfolio-V1.html">
//                       <a className="dropdown-item">
//                         <span>Portfolio 3 Column</span>
//                       </a>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/portfolio-V2.html">
//                       <a className="dropdown-item">
//                         <span>Portfolio 2 Column</span>
//                       </a>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/portfolio-V3.html">
//                       <a className="dropdown-item">
//                         <span>Portfolio Masonry</span>
//                       </a>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/portfolio-details-V1.html">
//                       <a className="dropdown-item">
//                         <span>Single Portfolio</span>
//                       </a>
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//               <li className="nav-item dropdown">
//                 <a
//                   className="nav-link dropdown-toggle"
//                   href="#"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   data-bs-auto-close="outside"
//                   aria-expanded="false"
//                 >
//                   Blog
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <Link href="/blog-V1.html">
//                       <a className="dropdown-item">
//                         <span>Grid Layout</span>
//                       </a>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/blog-V2.html">
//                       <a className="dropdown-item">
//                         <span>Grid With Sidebar</span>
//                       </a>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/blog-V3.html">
//                       <a className="dropdown-item">
//                         <span>Blog Masonary</span>
//                       </a>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/blog-V4.html">
//                       <a className="dropdown-item">
//                         <span>Blog Standard</span>
//                       </a>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/blog-details.html">
//                       <a className="dropdown-item">
//                         <span>Blog Details</span>
//                       </a>
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//               <li className="nav-item">
//                 <Link href="/contact-us.html">
//                   <a className="nav-link" role="button">
//                     Contact
//                   </a>
//                 </Link>
//               </li>
//             </ul>
//             {/* Mobile Content */}
//             <div className="mobile-content d-block d-lg-none">
//               <div className="d-flex flex-column">
//                 <Link href="/contact-us.html">
//                   <a className="contact-btn">Contact</a>
//                 </Link>
//                 <div className="call-button">
//                   Call us <a href="tel:+91-9522280818">+91-9522280818</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </div>{" "}
//       {/* /.inner-content */}
//     </div>{" "}
//     {/* /.theme-menu */}
//   </header>
//                 {/* /.theme-main-menu */}
//                 {/* 
// 			=============================================
// 				Error Page
// 			============================================== 
// 			*/}
//                   <div className="error-page-content d-flex align-items-center justify-content-center">
//       <div className="container">
//         <div className="row">
//           <div className="col-xxl-6 col-lg-7 m-auto">
//             <h2>Opps! you're on the wrong place.</h2>
//             <p className="me-xxl-5 ms-xxl-5">
//               Can not find what you need? Take a moment and do a search below or start from our Homepage.
//             </p>
//             <a href="/" className="btn-eight">
//               Back to home
//             </a>
//           </div>
//         </div>
//         <div className="m-auto">
//           <Image src="/images/assets/ils_21.svg" alt="" width={300} height={300} />
//         </div>
//       </div>
//       <Image src="/images/shape/shape_49.svg" alt="" className="shapes shape-one w-100" layout="fill" />
//     </div>
//                 {/* /.error-page-content */}
//                 <button className="scroll-top">
//                     <i className="bi bi-arrow-up-short" />
//                 </button>
//             </div>
//             <Script src="vendor/jquery.min.js"></Script>

//             <Script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></Script>

//             <Script src="vendor/aos-next/dist/aos.js"></Script>

//             <Script src="vendor/slick/slick.min.js"></Script>

//             <Script src="vendor/jquery.counterup.min.js"></Script>
//             <Script src="vendor/jquery.waypoints.min.js"></Script>

//             <Script src="vendor/fancybox/dist/jquery.fancybox.min.js"></Script>
//             <Script src="vendor/isotope.pkgd.min.js"></Script>
//             <Script src="js/theme.js"></Script>

//         </div>
    )
}

export default errorPage;
