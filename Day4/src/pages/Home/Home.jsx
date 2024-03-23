import React from 'react';
import hexa from '../../assets/images/hexagon.svg';
import pancard from '../../assets/images/pan-card.png';
import addressproof from '../../assets/images/address-proof.png';
import netbanking from '../../assets/images/netbanking.png';
import age from '../../assets/images/age.png';
import income from '../../assets/images/income.png';
import CarouselLogo from '../../components/HomeSlide/Slideinfo';
import AboutSlider from '../../components/About/AboutSlider';
import Slideinfo from '../../components/HomeSlide/Slideinfo';
import Review from '../../components/HomeSlide/Review';
import Carousel from '../../components/carousel/Carousel';
import choose1 from '../../assets/images/choose1.svg' ;
import choose2 from '../../assets/images/choose2.svg' ;
import choose3 from '../../assets/images/choose3.svg' ;
import choose4 from '../../assets/images/choose4.svg' ;
import EMICalculator from '../Emicalculator';
import Footer from '../Footer';
import Navbar from '../Navbar/Navbar';

const Home = () => {
  return (
    <>
    <Navbar/>
      <section className='py-20'>
        <Carousel />
      </section>
      <section>
        <div className="eligibility-section-in-heading text-center font-bold text-3xl">
          <p>Documents Required & Eligibility Criteria</p>
        </div>
        <div className="container ml-28 mt-10">
          <div className="col-xs-12 col-md-12 col-lg-12">
            <ul className="list-unstyled flex flex-wrap justify-between">
              <li className="flex flex-col items-center">
                <div className="sts-icons relative w-24 h-24 flex items-center justify-center">
                  <div className="hex-img absolute inset-0 flex items-center justify-center">
                    <img src={hexa} alt="Design 5" title="Design 5" className="w-3/4 h-auto" />
                    <span className="hex-icon absolute inset-0 flex items-center justify-center">
                      <img src={pancard} alt="Documents for Home Credit Loan" title="Documents for Home Credit Loan" className="w-1/2 h-auto" />
                    </span>
                  </div>
                </div>
                <div className="sts-text text-center">Proof of Identity<br /><strong>PAN Card</strong></div>
              </li>
              <li className="flex flex-col items-center">
                <div className="sts-icons relative w-24 h-24 flex items-center justify-center">
                  <div className="hex-img absolute inset-0 flex items-center justify-center">
                    <img src={hexa} alt="Design 5" title="Design 5" className="w-3/4 h-auto" />
                    <span className="hex-icon absolute inset-0 flex items-center justify-center">
                      <img src={addressproof} alt="Documents for Instant Loan" title="Documents for Instant Loan" />
                    </span>
                  </div>
                </div>
                <div className="sts-text text-center">Residential Address Proof<br /><strong>Indian Citizenship</strong></div>
              </li>
              <li className="flex flex-col items-center">
                <div className="sts-icons relative w-24 h-24 flex items-center justify-center">
                  <div className="hex-img absolute inset-0 flex items-center justify-center">
                    <img src={hexa} alt="Design 5" title="Design 5" className="w-3/4 h-auto" />
                    <span className="hex-icon absolute inset-0 flex items-center justify-center">
                      <img src={netbanking} alt="Mandatory Requirement for Loan" title="Eligibility for Home Credit Instant Loan" />
                    </span>
                  </div>
                </div>
                <div className="sts-text text-center">NetBanking<br /><strong>Must Required</strong></div>
              </li>
              <li className="flex flex-col items-center">
                <div className="sts-icons relative w-24 h-24 flex items-center justify-center">
                  <div className="hex-img absolute inset-0 flex items-center justify-center">
                    <img src={hexa} alt="Design 5" title="Design 5" className="w-3/4 h-auto" />
                    <span className="hex-icon absolute inset-0 flex items-center justify-center">
                      <img src={age} alt="Eligibility for HCIN Loan" title="Eligibility for HCIN Loan" />
                    </span>
                  </div>
                </div>
                <div className="sts-text text-center">Age<br /><strong>Must be above 19 years of Age</strong></div>
              </li>
              <li className="flex flex-col items-center">
                <div className="sts-icons relative w-24 h-24 flex items-center justify-center">
                  <div className="hex-img absolute inset-0 flex items-center justify-center">
                    <img src={hexa} alt="Design 5" title="Design 5" className="w-3/4 h-auto" />
                    <span className="hex-icon absolute inset-0 flex items-center justify-center">
                      <img src={income} alt="HCIN Eligibility Criteria" title="HCIN Eligibility Criteria" />
                    </span>
                  </div>
                </div>
                <div className="sts-text text-center">Income<br /><strong>Minimum ₹10000</strong></div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
          <EMICalculator/>
      </section>
      <section className='ml-10 mr-10'>
        <h1 className='text-center font-bold pt-20 pb-10 text-3xl'>Why Choose Agritech?</h1>
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <div className="bg-gray-200 p-4">
          <img src={choose1} alt="logo" className='ml-10 mt-3' />
          <h1 className='ml-36 text-xl -mt-10'>Discover with ease</h1>
          <h4 className='ml-44'>Compare Pre-qualified offers from 70+ RBI Approved lenders</h4>
        </div>
        <div className="bg-gray-200 p-4">
        <img src={choose2} alt="logo" className='ml-10 mt-3' />
        <h1 className='ml-36 text-xl -mt-10'>Discover with ease</h1>
        <h4 className='ml-36'>Compare Pre-qualified offers from 70+ RBI Approved lenders</h4>
        </div>
        <div className="bg-gray-200 p-4">
        <img src={choose3} alt="logo" className='ml-10 mt-3'/>
        <h1 className='ml-36 -mt-10 text-xl'>Discover with ease</h1>
        <h4 className='ml-36'>Compare Pre-qualified offers from 70+ RBI Approved lenders</h4>
        </div>
        <div className="bg-gray-200 p-4">
        <img src={choose4} alt="logo" className='ml-10 mt-3'/>
        <h1 className='ml-36 -mt-10 text-xl'>Discover with ease</h1>
        <h4 className='ml-44'>Compare Pre-qualified offers from 70+ RBI Approved lenders</h4>
        </div>
        </div>
      </section>
      <section>
        <h1 className='text-center font-bold text-3xl mt-10'>Our partners</h1>
        <h5 className='text-center text-xl mt-5'>We collaborate with the best and biggest in the banking and
          financial world to get you relevant products at great rates</h5>
        <CarouselLogo />
      </section>
      <section className="grid grid-cols-2 gap-2">
        <div className="col-span-1">
          <h1 className='text-center mt-44 text-3xl font-semibold'>Rating & Reviews</h1>
          <h4 className='text-center text-xl ml-5 mt-5 '>The results speak for themselves, see our reviews from happy users</h4>
        </div>
        <div className="col-span-1">
          <Review />
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Home;
