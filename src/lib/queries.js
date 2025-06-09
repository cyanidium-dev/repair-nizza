export const heroBlurCardQuery = `
  *[_type == "project" && isLatestProject == true][0] {
    title,
    subtitle,
    mainImage {
      asset->
    },
    slug
  }
`;

export const portfolioProjectsQuery = `
  *[_type == "project"] {
    title,
    subtitle,
    mainImage {
      asset->
    },
    _createdAt,
    isLatestProject
  } | order(_createdAt desc)
`;
