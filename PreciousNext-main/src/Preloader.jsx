import React from 'react';

import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

const Preloader = () => {

  return (
    <div>
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
    </div>
    
    )}
    export default Preloader;