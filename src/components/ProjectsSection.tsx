import React, { forwardRef, useState, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import ProjectModal from "./ProjectModal";

interface Project {
  title: string;
  description: string;
  tools: string[];
  category: string;
  media: string[];
  thumbnail: string;
}

interface ProjectsSectionProps {}

const ProjectsSection = forwardRef<HTMLDivElement, ProjectsSectionProps>(
  (props, ref) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [hoveredProjectIndex, setHoveredProjectIndex] = useState<number | null>(
      null
    );
    const [page, setPage] = useState(0);

    const containerRef = useRef<HTMLDivElement | null>(null);

    const categories = ["All", "Workflow Automation", "Funnel Design"];
    const projectsPerPage = 4;

    const projects: Project[] = [
      {
        title: "Automated Lead Capture, Nurturing & Appointment Scheduling",
        description:
          "Created an automated system within GoHighLevel that captures leads, nurtures them through valuable content via Workflows, and invites scheduling through Calendar.",
        tools: ["Form Builder", "Workflows", "Pipelines", "Calendar"],
        category: "Workflow Automation",
        media: ["/media/LeadCapture.mp4"],
        thumbnail: "/media/LC.jpg",
      },
      {
        title: "Discovery Call Booking Automation",
        description:
          "Built a dedicated automation in GoHighLevel that invites nurtured leads to book a discovery call, tracks responses through the pipeline, and sends confirmation emails upon booking.",
        tools: ["Workflows", "Calendars", "Pipelines", "Email Builder"],
        category: "Workflow Automation",
        media: ["/media/BookingAutomation.mp4"],
        thumbnail: "/media/DC.jpg",
      },
      {
        title: "Lead-Optimized Funnel for Life Coach",
        description:
          "Crafted a conversion-focused funnel for a life coach, featuring a compelling free ebook opt-in as the lead magnet - built with responsiveness and brand consistency in mind.",
        tools: ["Systeme.io", "Canva"],
        category: "Funnel Design",
        media: ["/media/LC.mp4"],
        thumbnail: "/media/TNLC.jpg",
      },
      {
        title: "Roofing Funnel for Local Service Business",
        description:
          "Built a roofing services funnel in GoHighLevel featuring a modern layout, client testimonials, and an easy booking system. Emphasized mobile-friendly design and clear calls-to-action to drive leads.",
        tools: ["Funnel Builder", "GoHighLevel", "Canva"],
        category: "Funnel Design",
        media: ["/media/RS.mp4"],
        thumbnail: "/media/RSTN.jpg",
      },
      {
        title:
          "Client Booking → Task Tracking & Instant Team Notification Flow",
        description:
          "Built a complete automation using Make (Integromat) triggered by a Google Form response. Integrated Google Sheets, Notion, Slack, and Airtable to automatically track new leads, notify the team, and update the CRM. Focused on simplifying the onboarding flow and reducing manual tasks.",
        tools: ["Make (Integromat)", "Google Sheets", "Notion", "Slack", "Airtable"],
        category: "Workflow Automation",
        media: ["/media/make.mp4"],
        thumbnail: "/media/makes.jpg",
      },
    ];

    const filteredProjects =
      selectedCategory === "All"
        ? projects
        : projects.filter((project) => project.category === selectedCategory);

    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
    const paginatedProjects = filteredProjects.slice(
      page * projectsPerPage,
      (page + 1) * projectsPerPage
    );

    const handleProjectClick = (project: Project) => {
      setSelectedProject(project);
      setIsModalOpen(true);
    };

    const handleModalClose = () => {
      setIsModalOpen(false);
      setSelectedProject(null);
    };

    const scrollToTop = () => {
      if (!containerRef.current) return;
      const containerTop =
        containerRef.current.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: containerTop, behavior: "smooth" });
    };

    const handlePageChange = (newPage: number) => {
      setPage(newPage);
      setTimeout(() => {
        scrollToTop();
      }, 50);
    };

    return (
      <section
        ref={ref}
        id="projects"
        className="bg-muted/30 border-t border-border py-16 relative"
      >
        <div className="container mx-auto px-4 md:px-8" ref={containerRef}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block bg-jorange/10 text-jorange px-4 py-2 rounded-full text-sm font-medium mb-4">
              My Projects
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Automation <span className="text-jorange">Projects</span> That
              Generates Result
            </h2>
            <p className="text-muted-foreground">
              Explore some of the custom automation solutions I've created for
              businesses to save time, reduce errors, and scale more
              efficiently.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex justify-center mb-10">
            <div className="flex overflow-hidden rounded-full border border-border divide-x divide-border">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setPage(0);
                    setTimeout(() => {
                      scrollToTop();
                    }, 50);
                  }}
                  className={`px-5 py-2 text-sm font-medium transition-colors ${
                    selectedCategory === cat
                      ? "bg-jorange text-white"
                      : "bg-transparent text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {paginatedProjects.map((project, index) => (
              <Card
                key={index}
                className="hover-scale overflow-hidden group relative cursor-pointer"
                onClick={() => handleProjectClick(project)}
                onMouseEnter={() => setHoveredProjectIndex(index)}
                onMouseLeave={() => setHoveredProjectIndex(null)}
              >
                <div className="absolute inset-x-0 top-11 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {hoveredProjectIndex === index ? (
                    <img
                      src={project.thumbnail}
                      alt={`Thumbnail for ${project.title}`}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  ) : project.media[0].endsWith(".mp4") ? (
                    <video
                      className="w-full h-full object-cover rounded-xl"
                      src={project.media[0]}
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <img
                      src={project.media[0]}
                      alt={`Preview for ${project.title}`}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  )}
                </div>

                <CardHeader className="bg-gradient-to-r from-jgreen/10 to-transparent pb-2 relative z-10">
                  <div className="text-sm text-jorange font-medium mb-2">
                    {project.category}
                  </div>
                  <CardTitle className="flex justify-between items-start">
                    {project.title}
                    <span className="p-2 rounded-full bg-jgreen/10 text-jgreen transform group-hover:rotate-45 transition-transform">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <CardDescription className="text-base mb-4">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="bg-secondary px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination Buttons */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4">
              <button
                disabled={page === 0}
                onClick={() => handlePageChange(Math.max(page - 1, 0))}
                className="bg-jorange text-white p-3 rounded-full shadow disabled:opacity-30"
              >
                <ChevronLeft />
              </button>
              <span className="text-sm text-muted-foreground">
                Page {page + 1} of {totalPages}
              </span>
              <button
                disabled={page >= totalPages - 1}
                onClick={() => handlePageChange(Math.min(page + 1, totalPages - 1))}
                className="bg-jorange text-white p-3 rounded-full shadow disabled:opacity-30"
              >
                <ChevronRight />
              </button>
            </div>
          )}
        </div>

        {/* Modal */}
        {selectedProject && (
          <ProjectModal
            open={isModalOpen}
            project={selectedProject}
            onOpenChange={setIsModalOpen}     
          />
        )}
      </section>
    );
  }
);

ProjectsSection.displayName = "ProjectsSection";

export default ProjectsSection;
