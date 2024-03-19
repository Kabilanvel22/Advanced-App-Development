import React, { useEffect, useState } from 'react';
import "../assets/css/faq.css";
import Navbar from './Navbar/Navbar';
import Footer from './Footer';


function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

   
     
  useEffect(() => {
    const btns = document.querySelectorAll(".acc-btn");

    function accordion(index) {
      setOpenIndex(openIndex === index ? null : index);
    }

    btns.forEach((el, index) => el.addEventListener("click", () => accordion(index)));

    return () => {
      btns.forEach((el, index) => el.removeEventListener("click", () => accordion(index)));
    };
  }, []);
  return (
    <>
    <Navbar/>
      <div className="faq-container py-20">
        <div className="faq-head">
          <main class="card">
            <div class="hero">
              <img src="https://s3.amazonaws.com/prod_pm_avatars/publictemplates/64/meeting-questions.png" alt="section image" class="img" />
            </div>

            <h2 class="title">FAQ</h2>


            <div className="acc-container">
              <button className={`acc-btn ${openIndex === 0 ? 'is-open' : ''}`}>What is a small amount farm loan?</button>
              <div className="acc-content" style={{ maxHeight: openIndex === 0 ? '1000px' : '0' }}>
                <p>Also known as a short-term loan, a small amount farm loan is a type of loan of up to ₹2 lacs that is scheduled to be repaid in a short period. This could be a year or more, but not more than 2 years. A small amount farm loan is generally taken to finance the short-term money requirements.</p>
              </div>

              <button className={`acc-btn ${openIndex === 1 ? 'is-open' : ''}`}>Who should take a short-term loan?</button>
              <div className="acc-content" style={{ maxHeight: openIndex === 1 ? '1000px' : '0' }}>
                <p>short-term loan can be taken by anyone who wants to meet his/her personal/professional needs. It could be taken by businessmen to meet working capital requirements. Working capital requirements include maintaining a cash flow and financing funds in a case of temporary shortage. In fact, salaried professionals and self-employed individuals too can apply for small amount personal loans to finance for personal needs such as purchasing consumer appliances and electronics such as laptops and smartphones. Even though these are short-term loan examples, anyone who meets the short-term personal loan eligibility can apply for a short-term loan.</p>
              </div>

              <button className={`acc-btn ${openIndex === 2 ? 'is-open' : ''}`}>What are the features of a short-term loan or small amount farm loan?</button>
              <div className="acc-content" style={{ maxHeight: openIndex === 2 ? '1000px' : '0' }}>
                <p>
                Also known as a short-term loan, a small amount personal loan is a type of loan of up to ₹2 lacs that is scheduled to be repaid in a short period. This could be a year or more, but not more than 2 years. A small amount personal loan is generally taken to finance the short-term money requirements.
                </p>
              </div>

              <button className={`acc-btn ${openIndex === 3 ? 'is-open' : ''}`}>What are the benefits of Small amount farm loan?</button>
              <div className="acc-content" style={{ maxHeight: openIndex === 3 ? '1000px' : '0' }}>
                <p>short-term loan is an easy way to meet any shortcomings in funds when in dire need. Apart from being an instant personal loan, there are a lot of other benefits of small amount personal loan.</p>
              </div>

              <button className={`acc-btn ${openIndex === 4 ? 'is-open' : ''}`}>What are the documents required for small amount farm loan?</button>
              <div className="acc-content" style={{ maxHeight: openIndex === 4 ? '1000px' : '0' }}>
                <p>The documents required for online short-term loans at lowest rates are:
                    <ul>
                        <li>Proof of Identity(Aadhaar/PAN card/Voter ID/Passport)</li>
                        <li>Proof of Age(Aadhaar/Driving License/Voter ID/Passport)</li>
                        <li>Bank statement for last 6 months</li>
                        <li>Proof of Income(salary slips of last 3 months or last year ITR or income declaration)</li>
                        <li>Passport-sized photograph(s)</li>
                    </ul>
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer/>
    </>
  );
}


export default Faq;
