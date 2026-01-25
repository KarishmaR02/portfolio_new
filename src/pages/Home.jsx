import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaDribbble,
  FaBehance,
  FaLaptopCode,
} from "react-icons/fa";
import { MdEmail, MdArrowOutward, MdOutlineFileDownload } from "react-icons/md";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import emailjs from "@emailjs/browser";
import profile from "./Karishma.jpeg";

const BentoCard = ({
  children,
  className = "",
  noPadding = false,
  ...props
}) => (
  <motion.div
    {...props}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`
      rounded-3xl overflow-hidden transition-all duration-300
      bg-[#e0e5ec] dark:bg-[#242424]
      shadow-[-9px_-9px_16px_rgba(255,255,255,0.8),9px_9px_16px_rgba(163,177,198,0.6)]
      dark:shadow-[-5px_-5px_10px_rgba(255,255,255,0.05),5px_5px_15px_rgba(0,0,0,0.5)]
      ${noPadding ? "" : "p-6 sm:p-8"} ${className}
    `}
  >
    {children}
  </motion.div>
);

const ProjectCard = ({
  title,
  description,
  tags,
  link,
  color, // kept for backward compatibility but unused in neomorphism to maintain clean look
}) => (
  <div
    className={`
      relative p-8 rounded-3xl h-full flex flex-col justify-between transition-all duration-300
      bg-[#e0e5ec] dark:bg-[#242424] 
      text-black dark:text-white
      shadow-[-9px_-9px_16px_rgba(255,255,255,0.8),9px_9px_16px_rgba(163,177,198,0.6)] 
      dark:shadow-[-5px_-5px_10px_rgba(255,255,255,0.05),5px_5px_15px_rgba(0,0,0,0.5)]
      hover:scale-[1.02]
      overflow-hidden
    `}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-purple-500/10 to-transparent dark:from-purple-500/40 dark:via-purple-500/10 dark:to-transparent pointer-events-none" />
    <div className="relative z-10 h-full flex flex-col justify-between">
      <div className="flex justify-between items-start mb-6">
        {/* Title & Role/Tags */}
        <div>
          {/* Tags as small pills */}
          <div className="flex gap-2 flex-wrap mb-3">
            {tags?.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs uppercase tracking-wider font-bold rounded-full bg-slate-200/50 dark:bg-black/20 text-black dark:text-white"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-3xl font-bold leading-tight mb-2 text-black dark:text-white">
            {title}
          </h3>
        </div>

        {/* Neumorphic Button */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            w-12 h-12 flex items-center justify-center rounded-xl text-black dark:text-white transition-colors
            bg-[#e0e5ec] dark:bg-[#242424]
            shadow-[-5px_-5px_10px_rgba(255,255,255,0.8),5px_5px_10px_rgba(163,177,198,0.6)]
            dark:shadow-[-3px_-3px_5px_rgba(255,255,255,0.05),3px_3px_5px_rgba(0,0,0,0.5)]
            hover:text-novatr-purple dark:hover:text-novatr-purple
            active:shadow-[inset_-3px_-3px_5px_rgba(255,255,255,0.8),inset_3px_3px_5px_rgba(163,177,198,0.6)]
            dark:active:shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.05),inset_2px_2px_4px_rgba(0,0,0,0.5)]
          `}
        >
          <MdArrowOutward className="text-2xl" />
        </a>
      </div>

      <p className="text-black dark:text-white text-base leading-relaxed mb-6">
        {description}
      </p>
    </div>

    {/* Decorative bottom bar or status */}
    {/* <div className="h-1.5 w-12 bg-novatr-purple rounded-full opacity-50" /> */}
  </div>
);

const Home = () => {
  const [theme, setTheme] = useState("dark");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const form = useRef();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const sendEmail = (e) => {
    e.preventDefault();
    // EmailJS logic preserved but simplified for new UI
    emailjs
      .sendForm(
        "service_cel21n5",
        "template_5jfm30l",
        form.current,
        "hIkgh6Vo-TzMAouSi",
      )
      .then(() => alert("Message sent successfully!"))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="min-h-screen bg-[#F5F3FF] dark:bg-[#09090B] text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 p-4 sm:p-8">
      {/* Navigation */}
      <nav className="flex justify-between items-center mb-12 sm:mb-16 pt-4 max-w-[1600px] mx-auto w-full">
        <div className="flex items-center gap-4">
          <div className="text-5xl font-bold tracking-tight text-novatr-purple">
            <FaLaptopCode />
          </div>
          <div>
            <h1 className="text-xl font-bold leading-tight">
              Karishma Rajendran
            </h1>
            <p className="text-base text-black dark:text-white font-medium">
              Software Engineer
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-12 bg-white dark:bg-[#18181B] px-16 py-6 rounded-full shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-purple-500/10 to-transparent dark:from-purple-500/40 dark:via-purple-500/10 dark:to-transparent pointer-events-none" />
            <div className="relative z-10 flex items-center gap-12">
              <a
                href="#home"
                className="text-lg font-medium hover:text-novatr-purple transition-colors"
              >
                Home
              </a>
              <a
                href="#projects"
                className="text-lg font-medium hover:text-novatr-purple transition-colors"
              >
                Projects
              </a>
              <a
                href="#about"
                className="text-lg font-medium hover:text-novatr-purple transition-colors"
              >
                About
              </a>
              <a
                href="#experience"
                className="text-lg font-medium hover:text-novatr-purple transition-colors"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="text-lg font-medium hover:text-novatr-purple transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          <button
            onClick={toggleTheme}
            className="p-3 rounded-full bg-white dark:bg-[#18181B] shadow-sm hover:scale-105 transition-transform relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-purple-500/10 to-transparent dark:from-purple-500/40 dark:via-purple-500/10 dark:to-transparent pointer-events-none" />
            <div className="relative z-10">
              {theme === "dark" ? (
                <SunIcon className="w-5 h-5" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )}
            </div>
          </button>
        </div>
      </nav>

      {/* Main Grid Layout */}
      <main className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {/* Hero Section - Spans full width initially or large block */}
        <BentoCard className="col-span-1 md:col-span-4 lg:col-span-4 min-h-[300px] flex flex-col justify-center relative overflow-hidden group">
          <div className="z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-purple-500/10 to-transparent dark:from-purple-500/40 dark:via-purple-500/10 dark:to-transparent pointer-events-none" />

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Software <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-novatr-purple to-purple-400">
                Engineer
              </span>
            </h1>
            <p className="w-full text-xl text-black dark:text-white leading-relaxed mb-6 pr-4">
              Full Stack Software Engineer with experience designing,
              developing, and maintaining web applications using Angular, React,
              Next.js, Node.js, and RESTful APIs. Strong background in building
              scalable frontend components, backend services, and
              database-driven applications. Hands-on experience with Agile
              development, API integration, authentication, and enterprise
              application support. Proficient in writing clean, maintainable
              code with a strong understanding of SDLC, MVC architecture, and
              modern web development practices.{" "}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-2.5 bg-novatr-purple text-white rounded-full font-semibold hover:bg-purple-700 transition-colors text-base"
              >
                Let's Talk
              </a>
              <a
                href="/Karishma_Resume.pdf"
                download
                className="px-6 py-2.5 bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-full font-semibold hover:bg-slate-50 dark:hover:bg-zinc-700 transition-colors flex items-center gap-2 text-base"
              >
                <MdOutlineFileDownload className="text-lg" /> Resume
              </a>
            </div>
          </div>
          {/* Abstract Circle Background */}
          <div className="absolute -right-20 -top-20 w-[300px] h-[300px] bg-purple-200/20 dark:bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />
        </BentoCard>

        {/* Profile / Stats Card */}
        <BentoCard
          className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col justify-between relative overflow-hidden"
          noPadding
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-purple-500/10 to-transparent dark:from-purple-500/40 dark:via-purple-500/10 dark:to-transparent pointer-events-none" />
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="p-10 flex flex-col items-center text-center">
              <img
                src={profile}
                alt="Profile"
                className="w-40 h-40 rounded-full border-4 border-slate-200 dark:border-zinc-800 object-cover mb-4 shadow-xl"
              />
              <h2 className="text-2xl font-bold">Karishma Rajendran</h2>
              <p className="text-black dark:text-white text-base mt-1 mb-4">
                Software Engineer
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {["Frontend", "Backend Logic", "WebDevelopment"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm font-semibold rounded-full bg-slate-100 dark:bg-zinc-800 text-black dark:text-white border border-slate-200 dark:border-zinc-700"
                    >
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 border-t border-slate-200 dark:border-zinc-800">
              <div className="p-6 border-r border-slate-200 dark:border-zinc-800">
                <div className="text-3xl font-bold text-novatr-purple">1+</div>
                <div className="text-sm text-black dark:text-white mt-1">
                  Years Exp.
                </div>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-slate-900 dark:text-white">
                  5+
                </div>
                <div className="text-sm text-black dark:text-white mt-1">
                  Projects
                </div>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* Tech Stack Marquee / List */}
        <BentoCard className="col-span-1 md:col-span-2 lg:col-span-2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-purple-500/10 to-transparent dark:from-purple-500/40 dark:via-purple-500/10 dark:to-transparent pointer-events-none" />
          <div className="relative z-10 h-full">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-novatr-purple rounded-full"></span>
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "ASP.NET",
                "SQL Server",
                "Tailwind",
                "Azure",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-2 bg-slate-100 dark:bg-zinc-800 rounded-lg text-sm font-medium hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </BentoCard>

        {/* Socials */}
        <BentoCard className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col justify-between overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-purple-500/10 to-transparent dark:from-purple-500/40 dark:via-purple-500/10 dark:to-transparent pointer-events-none" />

          <div className="p-8 relative z-10 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                Connect
              </h3>
              <p className="text-base text-black dark:text-white opacity-80">
                Let's build something amazing together.
              </p>
            </div>

            <div className="flex gap-4 justify-center mt-6">
              {[
                { icon: <FaGithub />, link: "https://github.com/KarishmaR02" },
                {
                  icon: <FaLinkedin />,
                  link: "https://www.linkedin.com/in/karishma-r-b9a863227/",
                },
                {
                  icon: <MdEmail />,
                  link: "mailto:krskarishma.0206@gmail.com",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    w-16 h-16 flex items-center justify-center rounded-2xl text-3xl text-black dark:text-white transition-all duration-300
                    bg-[#e0e5ec] dark:bg-[#242424]
                    shadow-[-9px_-9px_16px_rgba(255,255,255,0.8),9px_9px_16px_rgba(163,177,198,0.6)]
                    dark:shadow-[-5px_-5px_10px_rgba(255,255,255,0.05),5px_5px_15px_rgba(0,0,0,0.5)]
                    hover:text-novatr-purple dark:hover:text-novatr-purple hover:scale-110
                    active:shadow-[inset_-3px_-3px_5px_rgba(255,255,255,0.8),inset_3px_3px_5px_rgba(163,177,198,0.6)]
                    dark:active:shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.05),inset_2px_2px_4px_rgba(0,0,0,0.5)]
                  `}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </BentoCard>

        {/* Experience - Vertical Card */}
        <BentoCard
          className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 flex flex-col relative overflow-hidden"
          id="experience"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-purple-500/10 to-transparent dark:from-purple-500/40 dark:via-purple-500/10 dark:to-transparent pointer-events-none" />
          <div className="relative z-10 h-full">
            <h3 className="text-xl font-bold mb-6">Experience</h3>

            <div className="space-y-8">
              <div className="relative pl-6 border-l-2 border-slate-200 dark:border-zinc-800">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-novatr-purple ring-4 ring-white dark:ring-[#18181B]" />
                <div className="text-sm text-novatr-purple font-bold mb-1">
                  Jan 2025 - Present
                </div>
                <h4 className="text-lg font-bold">
                  Associate Software Engineer
                </h4>
                <p className="text-black dark:text-white text-base">
                  Neartekpod APAC Technologies
                </p>
              </div>

              <div className="relative pl-6 border-l-2 border-slate-200 dark:border-zinc-800">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-300 dark:bg-zinc-600 ring-4 ring-white dark:ring-[#18181B]" />
                <div className="text-sm text-slate-500 font-bold mb-1">
                  Feb 2024 - Dec 2024
                </div>
                <h4 className="text-lg font-bold">Associate A2</h4>
                <p className="text-black dark:text-white text-base">
                  Capgemini Technology India
                </p>
              </div>

              <div className="relative pl-6 border-l-2 border-slate-200 dark:border-zinc-800">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-300 dark:bg-zinc-600 ring-4 ring-white dark:ring-[#18181B]" />
                <div className="text-sm text-slate-500 font-bold mb-1">
                  2021-2023
                </div>
                <h4 className="text-lg font-bold">MCA</h4>
                <p className="text-black dark:text-white text-base">
                  Holy Cross College
                </p>
              </div>

              <div className="relative pl-6 border-l-2 border-slate-200 dark:border-zinc-800">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-300 dark:bg-zinc-600 ring-4 ring-white dark:ring-[#18181B]" />
                <div className="text-sm text-slate-500 font-bold mb-1">
                  2018-2021
                </div>
                <h4 className="text-lg font-bold">B Voc IT</h4>
                <p className="text-black dark:text-white text-base">
                  Bishop Heber College
                </p>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* Featured Project 1 - Simplifai */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2" id="projects">
          <ProjectCard
            title="RekruitPro"
            description="Agentic Recruitment Platform streamlining hiring from sourcing to AI interviews. Features real-time dashboards, Kanban task management, and automated candidate analysis."
            tags={["Next.js 16", "AWS", "TypeScript", "AI/LLM"]}
            link="#"
          />
        </div>

        {/* Featured Project 2 - Simplifai */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <ProjectCard
            title="Simplifai"
            description="Comprehensive internal tool for attendance, leave management, and task tracking. Built with React and Node-RED flows."
            tags={["React", "Node-RED", "Tailwind"]}
            link="#"
          />
        </div>

        {/* More Projects */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <ProjectCard
            title="Membership System"
            description="Robust enrollment system for managing extensive user profiles, memberships, and CRM integrations with secure authentication."
            tags={["Next.js", "PostgreSQL", "Docker"]}
            link="#"
            color="bg-purple-900"
          />
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <ProjectCard
            title="Fake Logo Detection"
            description="AI-powered system using YOLOv8 algorithm specifically designed for detecting counterfeit brand logos."
            tags={["Python", "YOLOv8", "AI/ML"]}
            link="#"
            color="bg-purple-900"
          />
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <ProjectCard
            title="Product Management"
            description="Windows Forms application for inventory and product tracking using .NET ADO."
            tags={["C#", ".NET", "SQL"]}
            link="#"
            color="bg-blue-900"
          />
        </div>

        {/* Contact Form Section */}
        <BentoCard
          className="col-span-1 md:col-span-4 lg:col-span-6 relative overflow-hidden"
          id="contact"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-purple-500/10 to-transparent dark:from-purple-500/40 dark:via-purple-500/10 dark:to-transparent pointer-events-none" />
          <div className="relative z-10 h-full">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold mb-4">Let's work together</h3>
                <p className="text-black dark:text-white mb-8 text-base">
                  Have a project in mind or want to discuss modern tech stacks?
                  I'm always open to new opportunities and collaborations.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-zinc-800 flex items-center justify-center text-novatr-purple">
                      <MdEmail className="text-xl" />
                    </div>
                    <div>
                      <div className="text-sm text-black dark:text-white">
                        Email
                      </div>
                      <div className="font-semibold">
                        krskarishma.0206@gmail.com
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-zinc-800 flex items-center justify-center text-novatr-purple">
                      <FaLinkedin className="text-xl" />
                    </div>
                    <div>
                      <div className="text-sm text-black dark:text-white">
                        Phone
                      </div>
                      <div className="font-semibold">+91 6374458915</div>
                    </div>
                  </div>
                </div>
              </div>

              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 outline-none focus:border-novatr-purple transition-colors"
                  />
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 outline-none focus:border-novatr-purple transition-colors"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 outline-none focus:border-novatr-purple transition-colors resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-4 bg-novatr-purple hover:bg-purple-700 text-white font-bold rounded-xl transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </BentoCard>

        {/* Footer */}
        <div className="col-span-1 md:col-span-full py-8 text-center text-slate-500 text-sm">
          © 2025 Karishma Rajendran. All rights reserved.
        </div>
      </main>
    </div>
  );
};

export default Home;
