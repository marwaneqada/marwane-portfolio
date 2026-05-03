import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ProjectDetailClient from "./ProjectDetailClient";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title.en} | Portfolio`,
    description: project.description.en,
  };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
