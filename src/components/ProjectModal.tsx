import React, { forwardRef, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"; // Ensure these are correctly imported

interface Project {
  title: string;
  description: string;
  media: string[]; // List of media URLs
  thumbnail: string; // Add a thumbnail URL for the preview
}

interface ProjectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: Project | null;
}

const ProjectModal = forwardRef<HTMLDivElement, ProjectModalProps>(({ open, onOpenChange, project }, ref) => {
  if (!project) return null; // Return null if there's no project to display

  const [isHovered, setIsHovered] = useState(false); // State for hover effect

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <div ref={ref}>
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold text-gray-800">{project.title}</DialogTitle>
          </DialogHeader>
          <p className="mb-4 text-muted-foreground">{project.description}</p>

          {/* Thumbnail preview */}
          <div className="grid gap-4">
            <div 
              className="relative"
              onMouseEnter={() => setIsHovered(true)} // Show thumbnail on hover
              onMouseLeave={() => setIsHovered(false)} // Hide thumbnail when mouse leaves
            >
              {isHovered ? (
                <img 
                  src={project.thumbnail} 
                  alt="Thumbnail Preview" 
                  className="w-full rounded-xl border border-border" 
                />
              ) : (
                project.media.map((item, idx) => 
                  item.endsWith(".mp4") ? (
                    <video key={idx} controls className="w-full rounded-xl border border-border">
                      <source src={item} type="video/mp4" />
                    </video>
                  ) : (
                    <img key={idx} src={item} alt={`Preview ${idx}`} className="w-full rounded-xl border border-border" />
                  )
                )
              )}
            </div>
          </div>

          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none">
            Close
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
});

ProjectModal.displayName = "ProjectModal"; // Ensure the display name is set for debugging

export default ProjectModal;
