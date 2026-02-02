"use client";

import { ProjectCard } from "@/components/ProjectCard";

type Project = {
  title: string;
  description: string;
  status: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  imageUrl?: string;
};

type ProjectsSectionProps = {
  projects: Project[];
  viewAppText: string;
};

export const ProjectsSection = ({ projects, viewAppText }: ProjectsSectionProps) => {
  return (
    <>
      {projects.map((project, index) => (
        <div key={index} className="md:col-span-6">
          <ProjectCard
            title={project.title}
            description={project.description}
            status={project.status}
            tags={project.tags}
            demoUrl={project.demoUrl}
            repoUrl={project.repoUrl}
            viewAppText={viewAppText}
            imageUrl={project.imageUrl}
          />
        </div>
      ))}
    </>
  );
};
