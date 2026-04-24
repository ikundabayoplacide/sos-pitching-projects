export interface Member {
  id: string;
  name: string;
  role: string;
  avatar?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  members: Member[];
  tags?: string[];
  projectUrl?: string;
}
