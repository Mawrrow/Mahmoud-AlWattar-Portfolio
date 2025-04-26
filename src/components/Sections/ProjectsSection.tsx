const ProjectsSection = () => {
    return (
      <section id="projects" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">My Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Project cards would go here */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-2 text-xl font-semibold">Project 1</h3>
              <p className="text-gray-600">Project description goes here...</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ProjectsSection;