export interface TeamMember {
  id: string;
  name: string;
  role: string;
  subsidiaryOrGroup?: string;
  photograph: string;
  photographAlt: string;
  biography: string;
  linkedinUrl?: string;
  isFounder?: boolean;
}
