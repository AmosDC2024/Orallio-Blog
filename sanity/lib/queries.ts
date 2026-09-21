import { groq } from 'next-sanity';

// Posts Queries
export const postsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    isFeatured,
    subsidiary,
    "category": category->{title, slug},
    "author": author->{name, slug, image, role}
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    updatedAt,
    isFeatured,
    subsidiary,
    body,
    seo,
    "category": category->{title, slug},
    "author": author->{name, slug, image, bio, role, socialLinks}
  }
`;

// Categories Query
export const categoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description
  }
`;

// Authors Query
export const authorsQuery = groq`
  *[_type == "author"] | order(name asc) {
    _id,
    name,
    slug,
    image,
    bio,
    role,
    socialLinks
  }
`;

// Case Studies Queries
export const caseStudiesQuery = groq`
  *[_type == "caseStudy" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    clientName,
    industry,
    subsidiary,
    featuredImage,
    summary,
    services,
    publishedAt
  }
`;

export const caseStudyBySlugQuery = groq`
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    clientName,
    industry,
    subsidiary,
    featuredImage,
    summary,
    challenge,
    strategy,
    execution,
    result,
    services,
    publishedAt,
    seo
  }
`;

// Testimonials Query
export const testimonialsQuery = groq`
  *[_type == "testimonial" && isPublished == true] {
    _id,
    clientName,
    role,
    company,
    quote,
    avatar,
    subsidiary
  }
`;

// Careers Query
export const careersQuery = groq`
  *[_type == "career" && status == "open"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    department,
    location,
    employmentType,
    summary,
    closingDate
  }
`;

// Team Members Query
export const teamMembersQuery = groq`
  *[_type == "teamMember" && isActive == true] | order(order asc) {
    _id,
    name,
    role,
    subsidiaryOrGroup,
    photograph,
    biography,
    linkedinUrl,
    isFounder
  }
`;
