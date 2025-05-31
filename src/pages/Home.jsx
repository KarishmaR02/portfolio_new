import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaSun, FaMoon } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useState, useEffect, useCallback } from 'react'
import profile from './karis.jpeg'
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';



const Home = () => {
  const [theme, setTheme] = useState('dark');
  // Add state for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.send(
      'service_cel21n5',
      'template_5jfm30l',
      {
        to_name: 'Karishma',
        from_name: formData.user_name,
        from_email: formData.user_email,
        message: formData.message,
        reply_to: formData.user_email
      },
      'hIkgh6Vo-TzMAouSi'
    )
    .then(() => {
      setFormData({ user_name: '', user_email: '', message: '' });
      alert('Message sent successfully!');
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Failed to send message. Please try again.');
    });
  };
  


  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#0D0D0D]' : 'bg-white'} ${theme === 'dark' ? 'text-white' : 'text-gray-900'} relative transition-colors duration-300`}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute top-0 left-0 w-full h-full"
        options={{
          fullScreen: false,
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: theme === 'dark' ? "#8B5CF6" : "#4B5563",
            },
            links: {
              color: theme === 'dark' ? "#8B5CF6" : "#4B5563",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              outModes: {
                default: "bounce",
              },
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="relative z-10">
        {/* Navigation */}
        // In the navigation section, add mobile menu button and list
        <nav className={`fixed top-0 w-full ${theme === 'dark' ? 'bg-[#0D0D0D]/90' : 'bg-purple-300/90'} backdrop-blur-sm z-50 transition-colors duration-300`}>
          <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
            {/* Existing logo */}
            <div className="text-2xl font-bold flex items-center gap-2">
              <a href="#home" className={`${theme === 'dark' ? 'hover:text-purple-500' : 'text-white hover:text-gray-200'} flex items-center gap-2`}>
                Karishma Rajendran
              </a>
            </div>
            
            {/* Add mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
            
            {/* Mobile menu */}
            <div className={`${isMobileMenuOpen ? 'flex' : 'hidden'} md:hidden absolute top-full left-0 right-0 flex-col ${theme === 'dark' ? 'bg-[#0D0D0D]' : 'bg-purple-300'} py-4`}>
              <a href="#home" className="px-4 py-2 text-white hover:bg-purple-500/10">Home</a>
              <a href="#projects" className="px-4 py-2 text-white hover:bg-purple-500/10">Projects</a>
              <a href="#work" className="px-4 py-2 text-white hover:bg-purple-500/10">Work Experience</a>
              <a href="#about" className="px-4 py-2 text-white hover:bg-purple-500/10">About Me</a>
              <a href="#contact" className="px-4 py-2 text-white hover:bg-purple-500/10">Contact</a>
              <button
                onClick={toggleTheme}
                className="px-4 py-2 text-white hover:bg-purple-500/10 flex items-center"
              >
                {theme === 'dark' ? <SunIcon className="w-5 h-5 mr-2" /> : <MoonIcon className="w-5 h-5 mr-2" />}
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
            
            {/* Keep existing desktop menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className={`${theme === 'dark' ? 'text-base font-bold  hover:text-purple-500' : 'text-lg text-white hover:text-gray-500'}`}>Home</a>
<a href="#projects" className={`${theme === 'dark' ? 'text-base font-bold  hover:text-purple-500' : 'text-lg text-white hover:text-gray-500'}`}>Projects</a>
<a href="#work" className={`${theme === 'dark' ? 'text-base font-bold  hover:text-purple-500' : 'text-lg text-white hover:text-gray-500'}`}>Work Experience</a>
<a href="#about" className={`${theme === 'dark' ? 'text-base font-bold hover:text-purple-500' : 'text-lg text-white hover:text-gray-500'}`}>About Me</a>
   <button
                onClick={toggleTheme}
                className="p-4 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  // <FaSun className="w-5 h-5 text-white-500" />
                  <SunIcon className="w-8 h-8 text-white" />
              
                ) : (
                  // <FaMoon className="w-5 h-5 text-white" />
                  <MoonIcon className="w-5 h-5 text-white" />
                )}
              </button>
              <a href="#contact" className={`${theme === 'dark' ? 'bg-purple-500 hover:bg-purple-600' : 'bg-white text-purple-500 hover:bg-gray-100'} px-6 py-2 rounded-full transition-colors`}>Contact</a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}

        <section id="home" className="min-h-screen flex items-center pt-8 sm:pt-20">
          <div className="max-w-[1920px] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-4 items-center"
            >
              {/* Profile Picture */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center mb-2  pr-2" // added pr-2 and reduced other spacing
              >
                <img
               src={profile}
               alt="Karishma Rajendran"
               className={`w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full object-cover border-4 ${theme === 'dark' ? 'border-white-500 mb-2' : 'border-[#CBC3E3]-500 mb-2'}`}
           />
                <div className="flex flex-col gap-2">
                <a
                  href="https://github.com/KarishmaR02"
                  // className="text-gray-400 hover:text-purple-500 flex items-center gap-2"
                  // className={`${theme === 'dark'? 'text-gray-400' : 'text-purple-400'} hover:text-purple-500 flex items-center gap-2'}`
                  className={`${theme === 'dark' ? 'text-white-400' : 'text-lg text-black-400'} hover:text-purple-500 flex items-center gap-2`}
                >
                  <FaGithub className="text-xl" />
                  GitHub
                </a>
                <a
                  href="https://mail.google.com/"
                  className={`${theme === 'dark' ? 'text-white-400' : 'text-lg text-black-400'} hover:text-purple-500 flex items-center gap-2`}
                  >
                  <MdEmail className="text-xl" />
                  krskarishma.0206@gmail.com
                    </a>
                    <a
                  href="https://www.linkedin.com/in/karishma-r-b9a863227/"
                  className={`${theme === 'dark' ? 'text-white-400' : 'text-lg text-black-400'} hover:text-purple-500 flex items-center gap-2`}
                   >
                  <FaLinkedin className="text-xl" />
                  Linkedin
                    </a>
              </div>
</motion.div>

            {/* Content */}
 
            <div className="sm:-ml-16 ml-0 sm:w-auto text-center sm:text-left">
              <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Software <br />
                <span className={`${theme === 'dark' ? 'text-purple-500' : 'text-[#CBC3E3]'}`}> Engineer</span>
              </h1>
            
              <p className={`${theme === 'dark' ? 'text-sm sm:text-xl text-gray-400 mb-8' : 'text-sm sm:text-xl text-black-400 mb-8'} max-w-xl mx-auto sm:mx-0 text-justify`}>
   Passionate and skilled Full Stack Developer with experience delivering impactful solutions. 
                Adapt at frontend and backend development, learning new technologies, and driving innovation. 
                Strong communicator and collaborator with excellent multitasking abilities.
              </p>

  {/* Buttons */}
  <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
  <a 
    href="/KARISHMA R resume.pdf" 
    download="Karishma_R_Resume.pdf"
    className={`${theme === 'dark' ? 'font-bold bg-purple-500 hover:bg-purple-600' : 'bg-[#CBC3E3] hover:bg-[#CBC3E3]/80'} px-4 py-2 sm:px-6 sm:py-3 rounded-full transition-colors flex items-center justify-center gap-2 w-1/2 sm:w-auto mx-auto sm:mx-0`}
  >
    Resume
  </a>
  <a 
    href="#education" 
    className="font-bold border-2 border-purple-500 
      px-6 py-2 sm:px-6 sm:py-3 
      rounded-full hover:bg-purple-500/10 transition-colors text-center 
      w-4/5 sm:w-auto mx-auto sm:mx-0"
  >
    Education Details
  </a>
</div>



</div>



          </motion.div>

          {/* Stats section remains the same */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
             className="mt-8 sm:mt-20 grid grid-cols-3 gap-4 sm:gap-8 text-center"
          >
            {/* <p className={`${theme === 'dark'? 'text-xl text-gray-400 mb-8' : 'text-xl text-black-400 mb-8'} `}>             */}
             
            <div>
    <h3 className="text-xl sm:text-4xl font-bold text-purple-500">1+</h3>
    <p className={`${theme === 'dark' ? 'text-xs sm:text-base text-gray-400' : 'text-xs sm:text-base text-black-400'}`}>
      Years Experience
    </p>
  </div>
  <div>
    <h3 className="text-xl sm:text-4xl font-bold text-purple-500">3+</h3>
    <p className={`${theme === 'dark' ? 'text-xs sm:text-base text-gray-400' : 'text-xs sm:text-base text-black-400'}`}>
      Projects Completed
    </p>
  </div>
  <div>
    <h3 className="text-xl sm:text-4xl font-bold text-purple-500">MCA</h3>
    <p className={`${theme === 'dark' ? 'text-xs sm:text-base text-gray-400' : 'text-xs sm:text-base text-black-400'}`}>
      Holy Cross College
    </p>
  </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${theme === 'dark' ? 'bg-[#111111]' : 'bg-gray-100'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto p-4 sm:p-6">

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
             className="text-3xl sm:text-5xl font-bold mb-12 sm:mb-16 text-center"
          >
            About <span className={`${theme==='dark'? 'text-purple-500':'text-purple-300/90'}`}>me</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-16 items-start"
          >
            {/* About Content */}
            <div className="space-y-6">
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-black-300'} text-sm sm:text-lg text-justify`}>
   I’m Karishma R, a dedicated Full Stack Developer with hands-on experience in both frontend and backend technologies. I am skilled in ASP.NET, ADO.NET, Core Java, HTML, CSS, JavaScript, TypeScript, Angular, Next.js, and backend tools like Node-RED with SQL Server integration. I’ve worked at Capgemini as an Associate A2 and currently serve as a Software Engineer Trainee at NearTekPod. Academically, I hold an MCA and a B.Voc in IT, with a track record of consistent top performance.
My project portfolio includes systems like Product Management, AI-based Fake Logo Detection (YOLOv8), and personal web applications. I am certified in .NET Full Stack, Core Java, and Big Data (NPTEL), and have published a research paper on object recognition algorithms.
As a fast learner and team player, I thrive on solving real-world problems and building clean, scalable digital solutions.
</p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
            <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className={`${theme === 'dark' ? 'bg-[#1A1A1A]' : 'bg-purple-300/90'} p-4 sm:p-6 rounded-xl text-center`}
>
  <div className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 ${theme === 'dark' ? 'text-purple-500' : 'text-white'}`}>
    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 3h18v18H3V3zm16.5 1.5H4.5v15h15v-15zM7 8h10v2H7V8zm0 4h10v2H7v-2z"/>
    </svg>
  </div>
  <h3 className={`text-sm sm:text-base font-semibold ${theme === 'dark' ? 'text-white' : 'text-white'}`}>Frontend</h3>
  <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-white/80'}`}>HTML, CSS, React</p>
</motion.div>


              {/* Repeat the same pattern for other skill cards */}
              <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className={`${theme === 'dark' ? 'bg-[#1A1A1A]' : 'bg-purple-300/90'} p-4 sm:p-6 rounded-xl text-center`}
>
  <div className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 ${theme === 'dark' ? 'text-purple-500' : 'text-white'}`}>
    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
       <path d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6-6z"/>
       </svg>
  </div>
  <h3 className={`text-sm sm:text-base font-semibold ${theme === 'dark' ? 'text-white' : 'text-white'}`}>Backend</h3>
  <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-white/80'}`}>Node.js, ASP.NET</p>
              </motion.div>

              {/* Update the remaining skill cards with the same pattern */}
              <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className={`${theme === 'dark' ? 'bg-[#1A1A1A]' : 'bg-purple-300/90'} p-4 sm:p-6 rounded-xl text-center`}
>
  <div className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 ${theme === 'dark' ? 'text-purple-500' : 'text-white'}`}>
    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
           <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                <h3 className={`text-sm sm:text-base font-semibold ${theme === 'dark' ? 'text-white' : 'text-white'}`}>Database</h3>
                <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-white/80'}`}>SQL Server</p>
              </motion.div>

              <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className={`${theme === 'dark' ? 'bg-[#1A1A1A]' : 'bg-purple-300/90'} p-4 sm:p-6 rounded-xl text-center`}
>
  <div className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 ${theme === 'dark' ? 'text-purple-500' : 'text-white'}`}>
    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
       <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                  </svg>
                </div>
                <h3 className={`text-sm sm:text-base font-semibold ${theme === 'dark' ? 'text-white' : 'text-white'}`}>Languages</h3>
                <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-white/80'}`}>JavaScript, C#, Java</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="work" className={`py-20 ${theme === 'dark' ? 'bg-[#0D0D0D]' : 'bg-white'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
           className="text-3xl sm:text-5xl font-bold mb-8 sm:mb-16 text-center"
          >
        Work <span className= {`${theme === 'dark' ? 'text-purple-500' : 'text-[#CBC3E3]'}`}>Experience</span>
          
            
          </motion.h2>

          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`${theme === 'dark' ? 'bg-[#1A1A1A]' : 'bg-purple-300/90'} px-6 py-8 sm:p-8 rounded-2xl`}

              w-64 h-64 sm:w-48 sm:h-48 rounded-full
            >
              <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Software Engineer Trainee</h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                <p className={`text-sm sm:text-base ${theme === 'dark' ? 'text-purple-500' : 'text-white'}`}>Neartekpod APAC Technologies PVT Limited</p>
                <span className={`hidden sm:inline ${theme === 'dark' ? 'text-gray-400' : 'text-white/60'}`}>•</span>
                <p className={`text-sm sm:text-base ${theme === 'dark' ? 'text-gray-400' : 'text-white/80'}`}>Jan 2025</p>
              </div>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-black'} mb-4`}>
                Working as Software Engineer Trainee in NearTekPod, Trichy. Developing and maintaining web applications using modern technologies.
              </p>
              <a 
                href="https://maps.google.com/?q=Neartekpod+APAC+Technologies+Trichy"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center ${theme === 'dark' ? 'text-purple-500 hover:text-purple-400' : 'text-white hover:text-white/80'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                View Location
              </a>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`${theme === 'dark' ? 'bg-[#1A1A1A]' : 'bg-purple-300/90'} px-6 py-8 sm:p-8 rounded-2xl`}

              >
              <h3  className={`text-xl sm:text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Associate A2</h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                <p className={`${theme === 'dark' ? 'text-purple-500' : 'text-white'}`}>Capgemini Technology India Limited, Trichy</p>
                <span className={`hidden sm:inline ${theme === 'dark' ? 'text-gray-400' : 'text-white/60'}`}>•</span>
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-white/80'}`}>Feb 2024 - Dec 2024</p>
              </div>  
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-black'} mb-4`}>
                Working as Associate A2 at Capgemini Technology India Limited, focusing on billing insurance, enrolled members, demographic changes.
              </p>
              <a 
                href="https://maps.google.com/?q=Capgemini+Technology+Trichy"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center ${theme === 'dark' ? 'text-purple-500 hover:text-purple-400' : 'text-white hover:text-white/80'}`}
               >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                View Location
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`py-20 ${theme === 'dark' ? 'bg-[#111111]' : 'bg-white'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold mb-16 text-center"
          >
            My <span className={`${theme === 'dark' ? 'text-purple-500' : 'text-[#CBC3E3]'}`}>Education</span>
          </motion.h2>

          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`${theme === 'dark' ? 'bg-[#1A1A1A]' : 'bg-purple-300/90'} p-8 rounded-2xl`}
              >
              <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Master of Computer Applications (MCA)</h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                <p className={`${theme === 'dark' ? 'text-purple-500' : 'text-white'}`}>Holy Cross College</p>
                <div className="hidden sm:block">
                  <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-white/60'}`}>•</span>
                </div>
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-white/80'}`}>2021-2023</p>
                <div className="hidden sm:block">
                  <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-white/60'}`}>•</span>
                </div>
                <p className={`${theme === 'dark' ? 'text-purple-500' : 'text-black'}`}>80%</p>
              </div>
              <a 
                href="https://maps.google.com/?q=Holy+Cross+College+Trichy"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center ${theme === 'dark' ? 'text-purple-500 hover:text-purple-400' : 'text-white hover:text-white/80'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                View College Location
              </a>
            </motion.div>

            {/* Second education card with same styling */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`${theme === 'dark' ? 'bg-[#1A1A1A]' : 'bg-purple-300/90'} p-8 rounded-2xl`}
              >
              <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Bachelor of Vocational Information Technology (B.Voc IT)</h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                <p className={`${theme === 'dark' ? 'text-purple-500' : 'text-white'}`}>Bishop Heber College</p>
                <div className="hidden sm:block">
                <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-white/60'}`}>•</span>
                </div>
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-white/80'}`}>2018-2021</p>
                <div className="hidden sm:block">
                <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-white/60'}`}>•</span>
                </div>
                <p className={`${theme === 'dark' ? 'text-purple-500' : 'text-black'}`}>81%</p>
              </div>
              <a 
                href="https://maps.google.com/?q=Bishop+Heber+College+Trichy"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center ${theme === 'dark' ? 'text-purple-500 hover:text-purple-400' : 'text-white hover:text-white/80'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                View College Location
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${theme === 'dark' ? 'bg-[#0D0D0D]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-bold mb-16 text-center"
          >
            Featured <span className={`${theme === 'dark' ? 'text-purple-500' : 'text-purple-300/90'}`}>Projects</span>
          </motion.h2>
          
          {/* Simplifai Project - Full Width */}
          <motion.div 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className={`${theme === 'dark' ? 'bg-[#1A1A1A]' : 'bg-purple-300/90'} p-8 rounded-2xl mb-8 text-sm sm:text-base text-justify sm:text-left`}
>
  <h3 className={`text-xl sm:text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
    Simplifai
  </h3>
  <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-black/80'} mb-4`}>
    Developed a comprehensive internal tool with functionalities across both frontend and backend.
  </p>
  <ul className={`list-disc list-inside space-y-2 ml-4 ${theme === 'dark' ? 'text-gray-400' : 'text-white font-bold'}`}>
    <li>Attendance Module: Implemented leave application workflows including apply, approve, and reject actions for employees, managers, and admin. Added role-based logic to ensure leave requests are visible only to respective reporting managers.</li>
    <li>Profile Picture Integration: Fetched and visualized pre-uploaded employee profile pictures using route.ts, displaying them alongside tasks instead of names to enhance task visibility and user interface clarity.</li>
    <li>Collaborated with cross-functional teams to connect frontend UI elements with backend logic using Node-RED flows and REST APIs, ensuring a seamless experience and consistent data handling.</li>
    <li>Implemented role-based access control (RBAC) and secure file handling for resume uploads and downloads.</li>
    <li>Built responsive UI components using modern React patterns and Tailwind CSS for optimal user experience.</li>
    <li>Interactive dashboards and reporting.</li>
  </ul>
</motion.div>


          {/* Other Projects - Two Columns */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`${theme === 'dark' ? 'bg-[#1A1A1A]' : 'bg-purple-300/90'} p-8 rounded-2xl mb-8`}   >
              <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Product Management System</h3>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-white font-bold'} mb-4`}>Using ADO .Net - This C# Windows Forms application allows users to view and search for products from a SQL Server database.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`${theme === 'dark' ? 'bg-[#1A1A1A]' : 'bg-purple-300/90'} p-8 rounded-2xl mb-8`}  >
              <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Fake Logo Detection Using AI</h3>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-white font-bold'} mb-4`}>Developed using YOLO V8 Algorithm for scanning logos. The objective is to develop a Logo Generation Detection and Elimination System using YOLO V8.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
    
        <section id="contact" className={`py-12 sm:py-20 ${theme === 'dark' ? 'bg-[#111111]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-16"
          >
            <h3 className="text-2xl sm:text-5xl font-bold mb-2 sm:mb-4">GET IN TOUCH</h3>
            <p className="text-sm sm:text-xl text-purple-400">Let's Work Together</p>
          </motion.div>

           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
           
            {/* Add Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              // className="max-w-2xl mx-auto mt-16 px-4"
              className="max-w-2xl mx-auto mt-4 sm:mt-16 px-4"

            >
              <h4 className="text-xl sm:text-3xl font-bold mb-8 text-center">
                Any questions or remarks? Just write us a message!
              </h4>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className={`block mb-2 text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Name
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg ${
                        theme === 'dark' 
                          ? 'bg-[#1A1A1A] text-white border-gray-600' 
                          : 'bg-gray-100 text-gray-900 border-gray-300'
                      } border focus:ring-2 focus:ring-purple-500 outline-none`}
                      placeholder="Enter your Name"
                      required
                    />
                  </div>
                  <div>
                    <label className={`block mb-2 text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg ${
                        theme === 'dark' 
                          ? 'bg-[#1A1A1A] text-white border-gray-600' 
                          : 'bg-gray-100 text-gray-900 border-gray-300'
                      } border focus:ring-2 focus:ring-purple-500 outline-none`}
                      placeholder="Enter a valid email address"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className={`block mb-2 text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className={`w-full px-4 py-3 rounded-lg ${
                      theme === 'dark' 
                        ? 'bg-[#1A1A1A] text-white border-gray-600' 
                        : 'bg-gray-100 text-gray-900 border-gray-300'
                    } border focus:ring-2 focus:ring-purple-500 outline-none`}
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={`w-full py-3 px-6 text-white font-medium rounded-lg ${
                    theme === 'dark' 
                      ? 'bg-purple-500 hover:bg-purple-600' 
                      : 'bg-purple-400 hover:bg-purple-500'
                  } transition-colors duration-300`}
                >
                  SUBMIT
                </button>
              </form>
            </motion.div>

            {/* <div className='grid grid-cols-2 grid-rows-2 gap-16 place-items-center justify-items-stretch w-full pl-8'> */}
            <div className='grid grid-cols-2 sm:grid-cols-2 gap-8 place-items-center w-full pl-4 pr-4 mt-8 sm:mt-16'>



            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16 sm:mb-0"
              
            >
              <div className={`w-12 h-12 sm:w-20 sm:h-20 mx-auto mb-2 sm:mb-6 rounded-full ${theme === 'dark' ? 'bg-[#1A1A1A]' : 'bg-black'} flex items-center justify-center`}>  
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 sm:h-10 sm:w-10 ${theme === 'dark' ? 'text-purple-400' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className={`text-base sm:text-2xl font-bold mb-1 sm:mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Phone & Mobile</h3>
              <p className={`text-xs sm:text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>+91 6374458915</p>
              </motion.div>

            {/* Apply the same pattern to other contact icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            className="text-center mb-16 sm:mb-0"
            >
            <div className={`w-12 h-12 sm:w-20 sm:h-20 mx-auto mb-2 sm:mb-6 rounded-full ${theme === 'dark' ? 'bg-[#1A1A1A]' : 'bg-black'} flex items-center justify-center`}>
               <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${theme === 'dark' ? 'text-purple-400' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
               <h3 className={`text-base sm:text-2xl font-bold mb-1 sm:mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Email & Website</h3>
               <p className={`text-xs sm:text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>krskarishma.0206@gmail.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${theme === 'dark' ? 'bg-[#1A1A1A]' : 'bg-black'} flex items-center justify-center`}>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${theme === 'dark' ? 'text-purple-400' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Address</h3>
              <p  className={`${theme === 'dark' ? 'text-gray-400-bold' : 'text-black-600-bold'}`}>Karur, Tamil Nadu</p>
              <a 
                href="https://www.google.com/maps/search/85%2F2,+Kavandampatti,+kuruchi+PO,+Kulithalai+TK,+Karur+DT.+639110/@10.8460313,78.5560562,57m/data=!3m1!1e3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 mt-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                View Location
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-[#1A1A1A] flex items-center justify-center`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${theme === 'dark' ? 'text-purple-400' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Social Media</h3>
              <p  className={`${theme === 'dark' ? 'text-gray-400-bold' : 'text-black-600'}`}>Linkedin</p>
              <p  className={`${theme === 'dark' ? 'text-gray-400-bold' : 'text-black-800-bold'}`}>karishma-r-b9a863227</p>
            </motion.div>
          </div>
</div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-16 text-gray-400"
          >
            <p className="text-purple-400">© 2025 Portfolio. All rights reserved.</p>
          </motion.div>
        </div>
      </section>
    </div>
</div>
  );
};

export default Home;


