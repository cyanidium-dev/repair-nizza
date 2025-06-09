export const heroBlurCardQuery = `
  *[_type == "project" && isLatestProject == true][0] {
    title,
    subtitle,
    mainImage {
      asset->
    }
  }
`;
