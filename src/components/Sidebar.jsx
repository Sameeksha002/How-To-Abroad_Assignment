import React, { useState } from 'react';

const Sidebar = ({ isOpen, toggleSidebar, applyFilters }) => {
    const [filters, setFilters] = useState({
        items: '',
        university: '',
        courseName: '',
        germanyRanking: '',
        courseType: '',
        teachingLanguage: '',
        beginnerSemester: '',
        duration: '',
        tuitionFee: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value
        }));
        // Call applyFilters with the updated filters
        applyFilters({ ...filters, [name]: value });
    };

    const handleReset = () => {
        setFilters({
            items: '',
            university: '',
            courseName: '',
            germanyRanking: '',
            courseType: '',
            teachingLanguage: '',
            beginnerSemester: '',
            duration: '',
            tuitionFee: ''
        });
        // Optionally, call applyFilters with an empty filters object to clear filters
        applyFilters({});
    };

    return (
        <div className={`w-full md:w-64 lg:w-72 ${isOpen ? 'block' : 'hidden'} md:block`}>
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-2 text-white">Filter Options</h2>
                <div>
                    <input type="text" id="items" name="items" value={filters.items} onChange={handleChange} className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 h-8 text-center my-3 bg-gray-300" placeholder='Number of Items' />
                </div>
                <div>
                    <input type="text" id="university" name="university" value={filters.university} onChange={handleChange} placeholder="University Name" className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 h-8 text-center my-3 bg-gray-300" />
                </div>
                <div>
                    <input type="text" id="courseName" name="courseName" value={filters.courseName} onChange={handleChange} className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 h-8 text-center my-3 bg-gray-300" placeholder='Course Name' />
                </div>
                <div>
                    <input type="text" id="germanyRanking" name="germanyRanking" value={filters.germanyRanking} onChange={handleChange} className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 h-8 text-center my-3 bg-gray-300" placeholder='Germany Ranking' />
                </div>
                <div>
                    <select id="courseType" name="courseType" value={filters.courseType} onChange={handleChange} className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 h-8 text-center my-3 bg-gray-300" placeholder="Course Type">
                        <option value="">Select Course Type</option>
                        <option value="bachelor">Bachelor</option>
                        <option value="diploma">Diploma</option>
                        <option value="double_degree">Double Degree</option>
                        <option value="master">Master</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <select id="teachingLanguage" name="teachingLanguage" value={filters.teachingLanguage} onChange={handleChange} className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 h-8 text-center my-3 bg-gray-300" placeholder="Teaching Language">
                        <option value="">Select Teaching Language</option>
                        <option value="ARABIC">Arabic</option>
                        <option value="CHINESE">Chinese</option>
                        <option value="DANISH">Danish</option>
                        <option value="DUTCH">Dutch</option>
                        <option value="ENGLISH">English</option>
                        <option value="FINNISH">Finnish</option>
                        <option value="FRENCH">French</option>
                        <option value="GERMAN">German</option>
                        <option value="PORTUGUESE">Portuguese</option>
                        <option value="ROMANCE">Romance</option>
                        <option value="RUSSIAN">Russian</option>
                        <option value="SCANDINAVIAN">Scandinavian</option>
                        <option value="OTHER">Other</option>
                    </select>
                </div>
                <div>
                    <select id="beginnerSemester" name="beginnerSemester" value={filters.beginnerSemester} onChange={handleChange} className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 h-8 text-center my-3 bg-gray-300" placeholder="Beginner Semester">
                        <option value="">Select Beginner Semester</option>
                        <option value="ALL_QUARTERS">All Quarters</option>
                        <option value="ALL_TRIMESTERS">All Trimesters</option>
                        <option value="ANY_TIME">Any Time</option>
                        <option value="AUTUMN">Autumn</option>
                        <option value="AUTUMN_QUARTER">Autumn Quarter</option>
                        <option value="WINTER">Winter</option>
                        <option value="WINTER_QUARTER">Winter Quarter</option>
                        <option value="WINTER_TRIMESTERS">Winter Trimesters</option>
                        <option value="SPRING">Spring</option>
                        <option value="SPRING_QUARTER">Spring Quarter</option>
                        <option value="SPRING_TRIMESTER">Spring Trimester</option>
                        <option value="SUMMER">Summer</option>
                        <option value="SUMMER_QUARTER">Summer Quarter</option>
                    </select>
                </div>
                <div>
                    <select id="duration" name="duration" value={filters.duration} onChange={handleChange} className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 h-8 text-center my-3 bg-gray-300" placeholder="Duration">
                        <option value="">Select Duration</option>
                        <option value="1">1 Semester</option>
                        <option value="10">10 Months</option>
                        <option value="11">11 Months</option>
                        <option value="12">12 Months</option>
                        <option value="13">13 Months</option>
                        <option value="14">14 Months</option>
                        <option value="semesters">Semesters</option>
                        <option value="months">Months</option>
                        <option value="trimesters">Trimesters</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="tuitionFee" className="block font-semibold text-white/90 mt-2">Tuition Fee (in Euros)</label>
                    <input type="range" id="tuitionFee" name="tuitionFee" value={filters.tuitionFee} onChange={handleChange} min="0" max="10000" step="100" className="w-full" />
                    <span className='text-white/90 border border-white p-1 text-center flex justify-center'>{filters.tuitionFee}</span>
                </div>
                <div>
                    <button type="button" onClick={handleReset} className="bg-red-500 text-white px-4 py-2 rounded-md my-4">Reset Filters</button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;