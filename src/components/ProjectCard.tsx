import { useState } from 'react';
import type { Project } from '../types';
import MembersModal from './MembersModal';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="group bg-background-tertiary border border-primary-900/30 rounded-2xl overflow-hidden hover:border-primary-700/50 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary-900/20">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-primary/80 to-transparent" />
          
          {/* Members Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute top-3 right-3 px-4 py-2 bg-background-secondary/90 backdrop-blur-sm border border-primary-700/50 rounded-lg text-text-secondary hover:text-primary-400 hover:border-primary-500 transition-all text-sm font-medium flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            Members
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-text-secondary text-sm mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary-900/30 text-accent-400 text-xs rounded-full border border-primary-800/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-primary-900/30">
            <span className="text-text-muted text-sm">
              {project.members.length} {project.members.length === 1 ? 'Member' : 'Members'}
            </span>
            {project.projectUrl ? (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium flex items-center gap-1"
              >
                View Details
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ) : (
              <span className="text-text-muted text-sm italic">Coming Soon</span>
            )}
          </div>
        </div>
      </div>

      <MembersModal
        members={project.members}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        projectTitle={project.title}
      />
    </>
  );
}
