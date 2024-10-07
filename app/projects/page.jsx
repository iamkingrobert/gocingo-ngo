'use client'
import PageBanner from '@/components/PageBanner';
import React, { useEffect, useState } from 'react';
import aboutImg from '@/app/images/aboutus.jpg';
import ProjectCard from '@/components/ProjectCard';

function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

        const projectData = data.slice(0, 9).map((item, index) => ({
          title: item.title,
          description: item.body,
          image: `https://via.placeholder.com/600x400.png?text=Project+${index + 1}` 
        }));

        setProjects(projectData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section>
      {/* Page Banner */}
      <PageBanner title={"Our Projects"} bannerImage={aboutImg} />

      {/* Project Gallery */}
      <div className="max-w-8xl container mx-auto py-10 px-5 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <ProjectCard project={project} key={index} />
            ))
          ) : (
            <p>Loading projects...</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
