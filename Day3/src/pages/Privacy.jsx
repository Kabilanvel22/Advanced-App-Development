import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar/Navbar'

const Privacy = () => {
  return (
    <>
    <Navbar/>
        <div className="container mx-auto p-8 py-20">
            <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
            <p>
                This privacy policy (“Policy”) is in accordance with the Information Technology Act, 2000, the Information Technology (Reasonable security practices and procedures and sensitive personal data or information) Rules, 2011, and applicable RBI guidelines and regulations and describes the information collected from you (hereinafter referred to as “You”, “Your” or “User”) on Your visit to the Platform (defined further) and use of Platform; manner and procedure of collection of such information; use, storage, and disclosure of information collected; rights and choices available to You with respect to the information collected; and how GC Web Ventures Private Limited and its affiliates, successors and assigns (hereinafter referred to as “Agritech”, “We”, “Us or “Our”) protects the information collected.
            </p>
            <p>
                Agritech owns and operates a website, accessible on www.Agritech.com, and a mobile application under the brand name ‘Agritech’ (hereinafter collectively referred to as “Platform”).
            </p>
            <p>
                This Policy constitutes a legal agreement between You as the User of the Platform, and Agritech, as the owner of the Platform. For clarity, User shall mean any person, who visits, uses and/ or transacts through the Platform. You are permitted to use the Services available on the Platform only if you are a natural person, citizen of India, and at least eighteen (18) years of age.
            </p>
            <p>
                This Policy supersedes any prior communication on this subject matter and excludes third-party websites/ applications that are connected via links to the Platform and stores from where You download Agritech mobile application. We urge You to read the terms and conditions of the third-party websites, stores and applications and use/access them at Your own risk. Agritech shall not be liable or responsible to You for any acts or omission of third-party websites, applications or stores as Agritech does not have any control over such websites, stores and applications.
            </p>
            <p>
                By visiting or accessing the Platform and voluntarily providing Us with information, including, but not limited to, personal information and sensitive personal information, You are consenting to Our use of the information in accordance with this Policy.
            </p>
            <p>
                IF YOU DO NOT AGREE WITH THE TERMS AND CONDITIONS OF THIS POLICY, PLEASE DO NOT USE OR ACCESS THIS PLATFORM.
            </p>
            <p>
                This Policy is a part of the ‘Terms & Conditions’ located here . Your use of the Platform will be governed by this Policy together with all policies, notices, guidelines, disclaimers that are published on the Platform and/or shared with You from time to time and such other terms as may be applicable to You as a User of the Platform.
            </p>
            <p>
                This Policy shall be enforceable against You in the same manner as any other written agreement.
            </p>
            <p>
                We reserve the right to modify this Policy at any time and update this Policy from time to time, so please review this Policy frequently to understand the latest privacy practices adopted by Us. Changes and modifications to this Policy will take effect immediately upon posting on the Platform. Any continued use of the Services shall signify Your acceptance of such updated Policy.
            </p>
            <h2 className="text-xl font-bold mt-8 mb-4">Services</h2>
            <p>
                Agritech is in the business of inter alia, providing services (“Services”) in the nature of:
            </p>
            <p>
                <strong>Provision of Credit Report</strong>
                <br />
                We fetch Your credit report (“Report”) from credit bureaus as Your agent after obtaining Your explicit consent and authorisation. We share the report along with an analysis to educate You regarding Your financial health. The Report helps us understand Your credit health in relation to which We also provide advice on ways to improve credit health.
            </p>
            <p>
                <strong>Information that We Collect:</strong> We collect Your name, address, email ID, mobile number, age, date of birth, gender and PAN to establish Your identity for this purpose.
            </p>
            <p>
                <strong>Sharing of Report:</strong> This Report is provided to You and is not shared with any third party.
            </p>
            <p>
                On provision of information as mentioned in this Clause, You provide your express consent to Us to use the information for the purposes stated in this Clause in accordance with this Policy.
            </p>
            <p>
                <strong>Facilitating the Provision of Loan and credit cards:</strong>
                <br />
                Agritech has partnered with various banks and NBFCs (collectively, “Lending Partners”) that offer loans and credit card products. Agritech acts as an intermediary for the purposes of connecting You with the Lending Partners and enabling You to avail products offered by Lending Partners such as loans and credit cards and their other financial products, as the case maybe.
            </p>
            <p>
                <strong>Information that We Collect:</strong> We collect the following information from You with Your explicit consent per instructions from Lending Partners for processing Your loan application:
            </p>
            <ul className="list-disc list-inside">
                <li>Marital status,</li>
                <li>Aadhar number,</li>
                <li>Education details,</li>
                <li>Details of parents,</li>
                <li>House ownership details,</li>
                <li>Salary account details,</li>
                <li>Name of the bank where You have a primary account,</li>
                <li>Bank statements,</li>
                <li>Pay slips,</li>
                <li>Details regarding Your employment, comprising of years of experience,</li>
                <li>Details of income,</li>
                <li>Name of the current and previous employers,</li>
                <li>Details regarding the years/months completed with the current employer;</li>
            </ul>
            <p>
                <strong>KYC:</strong> We shall seek a ‘one time access’ of camera for selfies/photos for the purpose of KYC and collect KYC documents; and
            </p>
            <p>
                <strong>Any other information as required by Lending Partners.</strong>
            </p>
            <p>
                Other than as mentioned herein, We desist from accessing mobile phone resources like file and media, contact list, call logs, telephony functions and others or collecting any biometric data.
            </p>
            <p>
                We may receive information related to your loan related transactions in cases where we are providing ancillary services to the Lending Partner as outsourced by the Lending Partners which we may further outsource to third parties, such as collection of loan dues.
            </p>
            {/* Include the rest of the services content here */}
        </div>
        <Footer/>
    </>
  )
}

export default Privacy