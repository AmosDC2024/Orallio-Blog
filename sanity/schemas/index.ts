// Reusable Objects
import { seo } from './objects/seo';
import { socialLink } from './objects/socialLink';
import { blockContent } from './objects/blockContent';

// Documents
import { post } from './documents/post';
import { category } from './documents/category';
import { author } from './documents/author';
import { caseStudy } from './documents/caseStudy';
import { testimonial } from './documents/testimonial';
import { career } from './documents/career';
import { teamMember } from './documents/teamMember';

export const schemaTypes = [
  // Objects
  seo,
  socialLink,
  blockContent,

  // Documents
  post,
  category,
  author,
  caseStudy,
  testimonial,
  career,
  teamMember,
];
