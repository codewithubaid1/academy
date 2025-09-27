
'use client';

import { useState,useEffect } from 'react';
import Image from 'next/image';
import { usePathname , useSearchParams } from 'next/navigation';
import { tree } from 'next/dist/build/templates/app-page';
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showEnrollForm, setShowEnrollForm] = useState(false);
  const [formData,setFormData] = useState({
    name:"",
    number:"",
    address:"",
    email:"",
  })
  const [activeHash, setActiveHash] = useState<string>("");
  const [Loading, setLoading] = useState(false)
  
  useEffect(() => {
    // set current hash on load
    setActiveHash(window.location.hash);

    // listen for hash changes
    const handleHashChange = () => setActiveHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

 const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // stop page refresh

    try {
      setLoading(true)
      const response = await fetch("https://api123.pythonanywhere.com/api/enroll/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // send JSON
      });
      setLoading(false)
      if (response.ok) {
        const data = await response.json();
       

        setShowEnrollForm(false)
        alert("Details submitted successfully!");
      } else {
     
        alert("Something went wrong!");
      }
    } catch (error) {
      
      alert('Something went wrong')
       setLoading(false)
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-100 to-green-50">
      {/* Modern Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 ">
        <div className="glass-effect mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <h1 className="text-3xl font-bold text-primary">Al-Hamad</h1>
                <p className="text-sm text-primary-light ml-2">Evening Coaching</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="#home" className={activeHash === '' || activeHash === '#home'? "nav-link nav-link-active text-xl ":"nav-link text-xl "}>Home</a>
              <a href="#courses" className={activeHash === '#courses'? "nav-link nav-link-active text-xl ":"nav-link text-xl "}>Courses</a>
              <a href="#contact" className={activeHash === '#contact'? "nav-link nav-link-active text-xl ":"nav-link text-xl "}>Contact</a>
              <button 
                onClick={() => setShowEnrollForm(!showEnrollForm)} 
                className="btn-primary ml-4 text-xl"
              >
                Enroll Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-primary hover:text-primary-dark focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden glass-effect">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#home" className="nav-link nav-link-active block py-2 px-3 rounded-md">Home</a>
                <a href="#courses" className="nav-link block py-2 px-3 rounded-md">Courses</a>
                <a href="#contact" className="nav-link block py-2 px-3 rounded-md">Contact</a>
                <button 
                  onClick={() => setShowEnrollForm(!showEnrollForm)}
                  className="btn-primary w-full mt-4"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 px-4 md:pt-32 bg-gradient-to-r from-green-100 via-green-50 to-green-100">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Text Content */}
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-4">
                1<sup>st</sup> & 2<sup>nd</sup> YEAR
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-green-700 mb-4">
                MATHEMATICS
              </h2>
              <h3 className="text-2xl md:text-3xl text-green-600 mb-6">
                Supplementary Preparation Classes
              </h3>
              <div className="space-y-2 text-green-700 text-lg mb-8">
                <p>• MATHS | PHYSICS</p>
                <p>• CHEMISTRY | BIO | STATS</p>
                <p>• COMPUTER | ECONOMICS</p>
              </div>
              <div className="text-blue-800 text-2xl font-italic mb-6">
                Start Time 1:00 pm
              </div>
              <button 
                onClick={() => setShowEnrollForm(!showEnrollForm)} 
                className="btn-primary ml-4 text-xl"
              >
                Enroll Now
              </button>
            </div>

            {/* Instructor Image Section */}
            <div className="w-full md:w-1/2 flex flex-col items-center">
              <div className="relative w-full aspect-[3/4] max-w-md bg-gradient-to-b from-green-50 to-green-100 rounded-2xl p-6 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-green-200/30 to-green-100/30 rounded-2xl backdrop-blur-sm"></div>
                <Image
                  src="/updated.jpg"
                  alt="Muhammad Sajid"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="rounded-lg p-4"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-100 to-transparent h-20 rounded-b-2xl"></div>
              </div>
              <div className="text-center mt-6 bg-green-50/80 px-8 py-4 rounded-xl shadow-md hover:shadow-lg duration-300">
                <h2 className="text-3xl font-bold text-red-500 mb-2">MUHAMMAD SAJID</h2>
                <p className="text-xl text-green-800">(M.Phil Math)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Available Courses</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mathematics */}
            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-2xl font-bold text-primary mb-4">Mathematics</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Complete syllabus coverage</li>
                <li>• Problem-solving techniques</li>
                <li>• Regular practice tests</li>
                <li>• Doubt clearing sessions</li>
              </ul>
            </div>

            {/* Physics */}
            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-2xl font-bold text-primary mb-4">Physics</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Theoretical concepts</li>
                <li>• Practical applications</li>
                <li>• Numerical problem solving</li>
                <li>• Regular assessments</li>
              </ul>
            </div>

            {/* Other Subjects */}
            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-2xl font-bold text-primary mb-4">Other Subjects</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Chemistry</li>
                <li>• Biology</li>
                <li>• Statistics</li>
                <li>• Computer Science</li>
                <li>• Economics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-b from-transparent to-green-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Contact Us</h2>
          <div className="glass-effect rounded-xl p-8 max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">Phone Number</h3>
                  <p className="text-xl text-gray-700">0302-7591205</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Location</h3>
                  <p className="text-gray-700">54D Block Arbia Islamia Road</p>
                  <p className="text-gray-700">Burewala</p>
                </div>
              </div>
              <div className="text-center">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">Class Timings</h3>
                  <p className="text-gray-700">Starting from 1:00 PM</p>
                  <p className="text-gray-700">Monday - Saturday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Form Modal */}
      {showEnrollForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-primary">Enrollment Form</h2>
              <button 
                onClick={() => setShowEnrollForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  name='name'
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="tel"
                  value={formData.email} onChange={handleChange}
                  name='email'
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  value={formData.number} onChange={handleChange}
                  name='number'
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <textarea
                  value={formData.address} onChange={handleChange}
                  name='address'
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  rows={3}
                  placeholder="Enter your complete address"
                ></textarea>
              </div>
           
              <button
                type="submit"
              
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200"
              >
                {Loading ? "Sending Details...":"Submit Enrollment"}
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
