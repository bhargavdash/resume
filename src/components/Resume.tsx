import { Mail, Phone, Linkedin, Globe } from "lucide-react";

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto bg-background font-serif leading-tight">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-resume-header mb-2">Bhargav Dash</h1>
        <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-resume-light">
          <div className="flex items-center gap-1">
            <Mail className="w-3 h-3" />
            <span>bhargavdash@gmail.com</span>
          </div>
          <div className="flex items-center gap-1">
            <Phone className="w-3 h-3" />
            <span>+91 7978782476</span>
          </div>
          <div className="flex items-center gap-1">
            <Linkedin className="w-3 h-3" />
            <a href="https://www.linkedin.com/in/bhargav-dash-439369259/" className="text-resume-section hover:underline">
              linkedin.com/in/bhargav-dash
            </a>
          </div>
          <div className="flex items-center gap-1">
            <Globe className="w-3 h-3" />
            <a href="https://leetcode.com/u/bhargavdash/" className="text-resume-section hover:underline">
              leetcode.com/u/bhargavdash
            </a>
          </div>
        </div>
      </div>

      {/* Education */}
      <section className="mb-5">
        <h2 className="text-lg font-bold text-resume-header border-b border-resume-section mb-2">EDUCATION</h2>
        <div className="space-y-2">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-resume-text">Odisha University of Technology and Research</h3>
              <p className="text-sm italic text-resume-light">Bachelor of Technology in Computer Science and Engineering; CGPA: 9.01</p>
            </div>
            <div className="text-right text-sm text-resume-light">
              <p>Bhubaneswar, Odisha</p>
              <p>2021-2025</p>
            </div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-resume-text">Sai International School</h3>
              <p className="text-sm italic text-resume-light">Higher Secondary Education; Percentage: 89.67</p>
            </div>
            <div className="text-right text-sm text-resume-light">
              <p>Bhubaneswar, Odisha</p>
              <p>2019-2021</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-5">
        <h2 className="text-lg font-bold text-resume-header border-b border-resume-section mb-2">EXPERIENCE</h2>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="font-bold text-resume-text">Accenture</h3>
                <p className="text-sm italic text-resume-light">Associate Software Engineer Intern</p>
                <p className="text-xs text-resume-light">Location: Hybrid</p>
              </div>
              <p className="text-sm text-resume-light">Feb 2025 - June 2025</p>
            </div>
            <ul className="text-xs text-resume-text ml-4 space-y-1">
              <li>• Worked in the MOSOT team of McDonald's project at Accenture, contributing to UI development for the MOSOT product</li>
              <li>• Collaborated with the UI team to identify and resolve critical bugs in React.js-based user interface</li>
              <li>• Developed proficiency in Python data analysis using Pandas and Matplotlib with Cursor AI for code optimization</li>
              <li>• Analyzed raw transactional sales data into actionable business insights for strategic decision-making</li>
              <li>• Participated in cross-functional collaboration between UI development and data engineering teams</li>
            </ul>
            {/* <p className="text-xs text-resume-light mt-1"><strong>Tech Stack:</strong> React.js, Python, Pandas, Matplotlib, JavaScript, Cursor AI</p> */}
          </div>

          <div>
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="font-bold text-resume-text">Krescitus Technology Solutions (P) Ltd.</h3>
                <p className="text-sm italic text-resume-light">Software Engineer Intern</p>
                <p className="text-xs text-resume-light">Location: Remote</p>
              </div>
              <p className="text-sm text-resume-light">April 2024 - June 2024</p>
            </div>
            <ul className="text-xs text-resume-text ml-4 space-y-1">
              <li>• Worked on Spenowr, a social commerce platform empowering artists and creative entities</li>
              <li>• Contributed to administrative panel development with dashboard reporting and email campaign management</li>
              {/* <li>• Developed assigned modules independently, focusing on unit and integration testing</li> */}
              <li>• Participated in code reviews, debugging, and performance optimization</li>
            </ul>
            {/* <p className="text-xs text-resume-light mt-1"><strong>Tech Stack:</strong> Angular, PHP, Phalcon, AWS (S3, Lambda, API Gateway, Polly), HTML, CSS</p> */}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-5">
        <h2 className="text-lg font-bold text-resume-header border-b border-resume-section mb-2">PROJECTS</h2>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-resume-text">DrawSync: Collaborative Online Canvas</h3>
              <div className="flex gap-2 text-xs">
                <a href="https://github.com/bhargavdash/DrawSync" className="text-resume-section hover:underline">GitHub</a>
                <a href="https://drawsync-dusky.vercel.app/" className="text-resume-section hover:underline">Live Demo</a>
              </div>
            </div>
            {/* <p className="text-xs text-resume-light mb-1"><strong>Tech Stack:</strong> Next.js, TypeScript, Node.js, Express.js, WebSocket, Tailwind CSS, Shadcn UI, Framer Motion, PostgreSQL, Prisma ORM</p> */}
            <ul className="text-xs text-resume-text ml-4 space-y-1">
              <li>• Developed collaborative online canvas application similar to Excalidraw with real-time multi-user drawing capabilities</li>
              <li>• Implemented real-time collaboration features with live synchronization and comprehensive drawing tools</li>
              <li>• Architected project as monorepo using Turborepo with separate frontend and backend services</li>
              <li>• Built entirely from scratch using HTML Canvas API without external canvas libraries</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-resume-text">StoryLens: An AI Storyteller</h3>
              <div className="flex gap-2 text-xs">
                <a href="https://github.com/bhargavdash/story-from-images" className="text-resume-section hover:underline">GitHub</a>
                <a href="https://inquisitive-bubblegum-4986f2.netlify.app/" className="text-resume-section hover:underline">Live Demo</a>
              </div>
            </div>
            {/* <p className="text-xs text-resume-light mb-1"><strong>Tech Stack:</strong> React.js, FastAPI, PyTorch, Tailwind CSS, Docker, GCP Cloud Run</p> */}
            <ul className="text-xs text-resume-text ml-4 space-y-1">
              <li>• Developed AI-powered web application generating engaging stories from images with multiple language support</li>
              <li>• Integrated deep learning models for image captioning, genre-based story generation, and text-to-speech conversion</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Proficiency */}
      <section>
        <h2 className="text-lg font-bold text-resume-header border-b border-resume-section mb-2">TECHNICAL PROFICIENCY</h2>
        <div className="grid grid-cols-1 gap-1 text-xs">
          <div><strong className="text-resume-text">Programming Languages:</strong> <span className="text-resume-light">C, C++, JavaScript, TypeScript, Python</span></div>
          <div><strong className="text-resume-text">Libraries and Frameworks:</strong> <span className="text-resume-light">React.js, Next.js, Angular, Node.js, Express.js, FastAPI, PyTorch</span></div>
          <div><strong className="text-resume-text">Frontend Technologies:</strong> <span className="text-resume-light">HTML, Tailwind CSS, Shadcn UI, Framer Motion, CSS</span></div>
          <div><strong className="text-resume-text">Database:</strong> <span className="text-resume-light">SQL (MySQL, PostgreSQL), NoSQL (MongoDB), Prisma ORM</span></div>
          <div><strong className="text-resume-text">Cloud Technologies:</strong> <span className="text-resume-light">AWS (S3, Lambda, API Gateway, Polly), GCP (Cloud Run)</span></div>
          {/* <div><strong className="text-resume-text">Data Analysis:</strong> <span className="text-resume-light">Pandas, Matplotlib</span></div> */}
          <div><strong className="text-resume-text">AI Coding Tools:</strong> <span className="text-resume-light">Cursor AI</span></div>
          <div><strong className="text-resume-text">Additional Skills:</strong> <span className="text-resume-light">WebSocket, JSON Web Token (JWT), NextAuth.js, MongoDB Atlas, Bcrypt.js, Postman, Git, Docker, Turborepo</span></div>
        </div>
      </section>
    </div>
  );
};

export default Resume;