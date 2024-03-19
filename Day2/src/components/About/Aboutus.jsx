import React from 'react'
import aboutimg1 from '../../assets/images/aboutus-1.svg'
import aboutimg2 from '../../assets/images/aboutus-2.svg'
import aboutimg3 from '../../assets/images/choose-why.svg'
import AboutSlider from './AboutSlider'
import "../../assets/css/About.css"
import Navbar from '../../pages/Navbar/Navbar'
import Footer from '../../pages/Footer'


const Aboutus = () => {
  return (
    <>
    <Navbar/>
        <div class="grid grid-flow-col grid-rows-2 grid-cols-2 gap-8 ">
            <div>
                <img src={aboutimg1} alt=""  loading='lazy' class='w-96 h-49 ml-44 mt-20'/>
            </div>
            <div class="col-start-2 mr-32 mt-24">
                <h1 class='text-center font-extrabold text-2xl'>Who Are We?</h1>
                <p class='mt-5'>IndiaLends is a financial technology start-up based in Delhi-NCR. The company was founded by former UK’s Capital One banker Gaurav Chopra who has more than 15 years of domain expertise in driving innovation in digital finance, credit analytics and mobile payments in the Indian and global markets. We aim to make financial products affordable and easily accessible to the person when needs financial assistance at the most. Our team is equipped with experienced and qualified finance professionals associated from the top-notch institutions such as IIT, LBS, IIM, Stephen's, LSE, and various global banks.</p>
            </div>
            <div class="ml-36 mt-20">
                <h1 class='text-center font-extrabold text-2xl'>What do we do?</h1>
                <p class='mt-5'>We are an online platform that provides our customers with financial products and services such as personal loans, line of credit, credit cards, and gold loans. We connect borrowers with lenders to help them get the best deal possible. We are currently working with 50+ partners which includes of major PSU, private sector banks, and NBFCs. We also provide value-added services to our customers such as free credit score check for maintaining their financial well-being, big-data analytics, credit risk assessment, and automated work-flows for loan origination and management services. The company also offers an open-API model for banks and NBFCs to partner with them through a plug-n-play approach.</p>
            </div>
            <div class="col-start-2 mr-32 mt-20">
                <img src={aboutimg2} alt=""  loading='lazy' class='w-96 h-49 ml-44 mt-20'/>   
            </div>
        </div>
        <div>
            <img src={aboutimg3} alt="" class="w-20 mt-10" className='about-img' />
            <h1 class='text-center capitalize text-zinc-950 text-3xl'>Why Choose Us ?</h1>
            <h4 class='text-center'> 
            What makes our products attractive are the affordable interest rates and simplified procedures that has set us free from <br/> the traditional time consuming and complex financial processes.
            </h4>
            <h1 class='text-center capitalize font-bold text-3xl mt-8'>
                At AgriTech Platform, we provide our customers with:
            </h1>
        </div>
        <div>
            <AboutSlider/>
        </div>
        <Footer/>
    </>
  )
}

export default Aboutus