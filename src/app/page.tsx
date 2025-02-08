import { FaGithub, FaLinkedin } from "react-icons/fa";

const projects = [
  {
    title: "Screen Slayer",
    description: "A mobile app that lets users compete with friends for the lowest screen time.",
    link: "https://www.notion.so/example-project"
  },
  {
    title: "Kubernetes Personal Cloud",
    description: "A self-hosted cloud setup using Kubernetes for managing personal infrastructure.",
    link: "https://www.notion.so/example-project"
  }
];

export default function Portfolio() {
  return (
      <div className="container mx-auto p-6 font-sans text-gray-900">
        {/* Hero Section */}
        <section className="text-center py-20">
          <h1 className="text-5xl font-bold mb-4">Hi, I'm Azriel</h1>
          <p className="text-xl text-gray-700">Senior Software Engineer | Full-Stack & Native Mobile Developer</p>
        </section>

        {/* About Section */}
        <section className="text-center py-12">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="max-w-3xl mx-auto text-gray-700">
            I specialize in native mobile development but consider myself a generalist full-stack engineer,
            having worked with AWS, Terraform, TypeScript, Next.js, Arduino, Hugging Face, and more.
            I love solving complex problems and building scalable solutions.
          </p>
        </section>

        {/* Projects Section */}
        <section className="py-12">
          <h2 className="text-3xl font-semibold text-center mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
                <div key={index} className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-medium mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-2">{project.description}</p>
                  <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                  >
                    View Project
                  </a>
                </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mt-12 text-center py-12">
          <h2 className="text-3xl font-semibold mb-4">Let's Connect</h2>
          <p className="text-gray-700 mb-4">Whether you have a question or just want to say hi, feel free to reach out!</p>
          <div className="flex justify-center gap-4">
            <a href="https://github.com/azriel" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100">
                <FaGithub size={18} /> GitHub
              </button>
            </a>
            <a href="https://linkedin.com/in/azriel" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100">
                <FaLinkedin size={18} /> LinkedIn
              </button>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-6 text-gray-500">
          © 2025 Azriel. All rights reserved.
        </footer>
      </div>
  );
}
