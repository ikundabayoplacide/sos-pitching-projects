import type { Member } from '../types';

interface MembersModalProps {
  members: Member[];
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
}

export default function MembersModal({ members, isOpen, onClose, projectTitle }: MembersModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-background-tertiary border border-primary-800/30 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl animate-fade-in">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-900/50 to-accent-900/50 px-6 py-4 border-b border-primary-800/30">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold text-text-primary">Team Members</h3>
              <p className="text-sm text-text-muted mt-1">{projectTitle}</p>
            </div>
            <button
              onClick={onClose}
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Members List */}
        <div className="p-6 overflow-y-auto max-h-[calc(80vh-100px)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {members.map((member) => (
              <div
                key={member.id}
                className="bg-background-secondary border border-primary-900/30 rounded-xl p-4 hover:border-primary-700/50 transition-all hover:scale-105"
              >
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center text-2xl font-bold text-text-primary flex-shrink-0">
                    {member.avatar ? (
                      <img src={member.avatar} alt={member.name} className="w-full h-full rounded-full object-cover" />
                    ) : (
                      member.name.charAt(0).toUpperCase()
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-text-primary font-semibold truncate">{member.name}</h4>
                    <p className="text-accent-400 text-sm mt-1">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
