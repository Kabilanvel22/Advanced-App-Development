import React from 'react'
import img1 from '../../assets/images/loan1.jpeg';
import img2 from '../../assets/images/loan3.jpeg';
import img3 from '../../assets/images/loan2.jpeg';
import img4 from '../../assets/images/loan4.jpeg';
import img5 from '../../assets/images/loan5.jpeg';
import img6 from '../../assets/images/loan6.jpeg';
import img7 from '../../assets/images/loan7.jpeg';
import img8 from '../../assets/images/loan8.jpeg';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer';

const Loan = () => {
    const cardsData = [
        {
            id: 1,
            name: "Farm Loan",
            description: "Farm loan is a financial product designed to help farmers and agricultural businesses access funds for various farming....",
            image: img1
        },
        {
            id: 2,
            name: "Crop Loan",
            description: "Crop loan is a type of loan specifically tailored for farmers to cover expenses related to crop cultivation....",
            image: img2
        },
        {
            id: 3,
            name: "Gold Loan",
            description: "Gold loan is a type of secured loan where gold jewelry or ornaments are pledged as collateral to borrow....",
            image: img3
        },
        {
            id: 4,
            name: "Agricultural Term Loan",
            description: "Agricultural term loan is a type of loan provided to farmers for long-term agricultural development purposes....",
            image: img4
        },
        {
            id: 5,
            name: "Solar Pump Set Loan",
            description: "Solar pump set loan is a type of financial product aimed at assisting farmers in purchasing solar-powered ....",
            image: img5
        },
        {
            id: 6,
            name: "Farm Mechanisation Loan",
            description: "Farm mechanisation loan is a type of financial assistance offered to farmers to help them purchase ....",
            image: img6
        },
        {
            id: 7,
            name: "Allied Agricultural Activities",
            description: "Allied agricultural activities loan refers to financial support provided to farmers for activities related to agriculture...",
            image: img7
        },
        {
            id: 8,
            name: "Horticultural Loan",
            description: "Horticultural loan is a specialized financial product aimed at supporting farmers engaged in horticulture....",
            image: img8
        },
    ];

    return (
        <>
        <Navbar/>
        <div className="container mx-auto px-4 py-20">
            <h1 className="text-3xl font-bold mb-4 text-center capitalize text-gray-500">Loans Available for farmers</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {cardsData.map((card) => (
                    <div key={card.id} className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
                        <figure>
                            <img
                                src={card.image}
                                alt="card image"
                                className="aspect-video w-full"
                            />
                        </figure>
                        <div className="p-6">
                            <header className="mb-4">
                                <h3 className="text-xl font-medium text-slate-700">
                                    {card.name}
                                </h3>
                                <p className=" text-slate-400">{card.price}</p>
                            </header>
                            <p>
                                {card.description}
                            </p>
                        </div>
                        <div className="flex justify-between p-6 pt-0">
                            <div className="flex items-center gap-2">
                                <span className="text-sm">Read more</span>
                            </div>
                            <div className="flex items-center">
                                <button className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                                    <span><Link to="/applyloan"> Apply</Link></span>
                                </button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Loan;
