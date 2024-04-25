import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';
import { tools } from '../data/tools';
import { Link } from 'react-router-dom';
import ToolsCard from '../components/ToolsCard';

const Home = () => {
    return (
        <div className="container mx-auto">
            <header className="bg-blue-950 text-white font-medium py-2 flex justify-between items-center pl-4 text-lg">
                <h1>Welcome to our platform!</h1>
                <nav>
                    <Link to="/about" className="text-white hover:underline mx-2">About</Link>
                    <Link to="/contact" className="text-white hover:underline mx-2">Contact</Link>
                </nav>
            </header>

            <section className="mt-8">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold mb-4">Who are we?</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        How To Abroad (HTA) is a startup, founded by two students from the University of Bayreuth. The main aim of this startup is
                        to help people who want to Study Abroad and at present, this startup is focusing on the Education sector in Germany but soon
                        it will look into other countries as well.</p>
                </div>
            </section>
            =
            <section className="mt-8">
                <h2 className="text-3xl font-semibold mb-4 text-center">Popular on HowToAbroad: Study in Germany</h2>
                <Swiper
                    breakpoints={{
                        340: { slidesPerView: 1, spaceBetween: 15 },
                        700: { slidesPerView: 2, spaceBetween: 15 },
                    }}
                    freeMode={true}
                    pagination={{ clickable: true }}
                    modules={[FreeMode, Pagination]}
                    className="max-w-[90%] lg:max-w-[80%]"
                >
                    {tools.map((tool, index) => (
                        <SwiperSlide key={index}>
                            <ToolsCard tool={tool} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <section className="mt-8">
                <h2 className="text-3xl font-semibold mb-4 text-center">Recent News</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Example news card */}
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <h3 className="text-xl font-semibold mb-2">News Title</h3>
                        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    {/* Add more news cards here */}
                </div>
            </section>

            <section className="mt-8">
                <h2 className="text-3xl font-semibold mb-4 text-center">Scholarships</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Example scholarship card */}
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <h3 className="text-xl font-semibold mb-2">Scholarship Name</h3>
                        <p className="text-gray-700">Deadline: July 15, 2024</p>
                    </div>
                    {/* Add more scholarship cards here */}
                </div>
            </section>

            <section className="mt-8">
                <h2 className="text-3xl font-semibold mb-4 text-center">Universities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Example university card */}
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <h3 className="text-xl font-semibold mb-2">University Name</h3>
                        <p className="text-gray-700">Location: Germany</p>
                    </div>
                    {/* Add more university cards here */}
                </div>
            </section>

            <section className="mt-8">
                <h2 className="text-3xl font-semibold mb-4 text-center">Business Schools</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Example business school card */}
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <h3 className="text-xl font-semibold mb-2">Business School Name</h3>
                        <p className="text-gray-700">Location: Germany</p>
                    </div>
                    {/* Add more business school cards here */}
                </div>
            </section>

            <footer className="bg-blue-950 text-white py-4 mt-8">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 Your Company. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Home;
