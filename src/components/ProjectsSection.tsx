import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import ProjectModal from "./ProjectModal"; // Path to your modal component

const ProjectsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Multiple projects with different media, descriptions, and tools
  const projects = [
    {
      title: "Automated Lead Capture to CRM",
      description:
        "Built a seamless lead capture system that automatically imports leads from multiple sources into GoHighLevel CRM, with follow-up sequence.",
      tools: ["Zapier", "GHL", "Make"],
      category: "CRM Automation",
      media: ["/media/bolt.png"], // Add your image URLs here
    },
    {
      title: "Shopify + GoHighLevel Integration",
      description:
        "Created a two-way sync between Shopify and GoHighLevel to unify customer data and automate order follow-up sequences.",
      tools: ["Shopify", "GHL", "Zapier"],
      category: "E-commerce Automation",
      media: ["/media/bolt.png"], // Add your image URLs here
    },
    {
      title: "Inventory Management System",
      description:
        "Developed an automated inventory tracking system that syncs across platforms and sends alerts for low stock levels.",
      tools: ["Make", "Shopify", "Workspace"],
      category: "Inventory Automation",
      media: ["/media/bolt.png"], // Add your image URLs here
    },
    {
      title: "AI-Powered SOP Creation",
      description:
        "Implemented a system to generate and maintain SOPs using ChatGPT, saving hours of documentation time.",
      tools: ["ChatGPT", "Make", "Zapier"],
      category: "Process Automation",
      media: ["/media/bolt.png"], // Add your image URLs here
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-jorange/10 text-jorange px-4 py-2 rounded-full text-sm font-medium mb-4">
            My Projects
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Automation <span className="text-jgreen">Projects</span> That Drive Results
          </h2>
          <p className="text-muted-foreground">
            Explore some of the custom automation solutions I've created for businesses to save time, reduce errors, and scale more efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="hover-scale overflow-hidden group relative"
              onClick={() => handleProjectClick(project)} // Open modal on card click
            >
              {/* Image Preview on Hover */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img
                  src={project.media[0]} // Assuming the first image in the array is the preview
                  alt={`Preview for ${project.title}`}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <CardHeader className="bg-gradient-to-r from-jgreen/10 to-transparent pb-2">
                <div className="text-sm text-jorange font-medium mb-2">{project.category}</div>
                <CardTitle className="flex justify-between items-start">
                  {project.title}
                  <span className="p-2 rounded-full bg-jgreen/10 text-jgreen transform group-hover:rotate-45 transition-transform">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <CardDescription className="text-base mb-4">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, idx) => (
                    <span key={idx} className="bg-secondary px-3 py-1 rounded-full text-xs font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          open={isModalOpen}
          onOpenChange={handleModalClose}
          project={selectedProject}
        />
      )}
    </section>
  );
};

export default ProjectsSection;
