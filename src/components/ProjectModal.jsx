import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"; // Ensure these are correctly imported

const ProjectModal = ({ open, onOpenChange, project }) => {
  if (!project) return null; // Return null if there's no project to display

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-gray-800">{project.title}</DialogTitle>
        </DialogHeader>
        <p className="mb-4 text-muted-foreground">{project.description}</p>

        <div className="grid gap-4">
          {project.media.map((item, idx) =>
            item.endsWith(".mp4") ? (
              <video key={idx} controls className="w-full rounded-xl border border-border">
                <source src={item} type="video/mp4" />
              </video>
            ) : (
              <img key={idx} src={item} alt={`Preview ${idx}`} className="w-full rounded-xl border border-border" />
            )
          )}
        </div>

        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none">
          Close
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
