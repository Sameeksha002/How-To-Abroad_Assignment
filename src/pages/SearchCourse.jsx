import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';

const SearchCourse = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [filteredCourses, setFilteredCourses] = useState(courses);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const applyFilters = (filters) => {
        let filtered = [...courses];

        // Apply filters one by one
        if (filters.items !== '') {
            filtered = filtered.filter(course => course.items === filters.items);
        }
        if (filters.university !== '') {
            filtered = filtered.filter(course => course.university.toLowerCase().includes(filters.university.toLowerCase()));
        }
        if (filters.courseName !== '') {
            filtered = filtered.filter(course => course.courseName.toLowerCase().includes(filters.courseName.toLowerCase()));
        }
        if (filters.germanyRanking !== '') {
            filtered = filtered.filter(course => course.germanyRanking === filters.germanyRanking);
        }
        if (filters.courseType !== '') {
            filtered = filtered.filter(course => course.courseType === filters.courseType);
        }
        if (filters.teachingLanguage !== '') {
            filtered = filtered.filter(course => course.teachingLanguage === filters.teachingLanguage);
        }
        if (filters.beginnerSemester !== '') {
            filtered = filtered.filter(course => course.beginnerSemester === filters.beginnerSemester);
        }
        if (filters.duration !== '') {
            filtered = filtered.filter(course => course.duration === filters.duration);
        }
        if (filters.tuitionFee !== '') {
            filtered = filtered.filter(course => course.tuitionFee <= parseInt(filters.tuitionFee));
        }
        setFilteredCourses(filtered);
    };

    return (
        <div className="container mx-auto">
            <nav className="bg-blue-950 text-white font-medium py-2 flex justify-between items-center">
                <h1 className="pl-4 text-lg">Course Search</h1>
                <button className="md:hidden mr-4" onClick={toggleSidebar}>
                    {isSidebarOpen ? 'Close Filters' : 'Open Filters'}
                </button>
            </nav>
            <div className="flex flex-col md:flex-row border border-sky-100 border-4 ">
                <div className={`bg-blue-950 ${isSidebarOpen ? 'md:block' : 'hidden'} md:block`}>
                    <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} applyFilters={applyFilters} />
                </div>
                <div className="flex-1 p-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {filteredCourses.map((course, index) => (
                            <CourseCard key={index} course={course} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchCourse;
