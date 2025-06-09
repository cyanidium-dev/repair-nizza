import { client } from "@/sanityClient";
import ProjectHero from "@/components/projects/ProjectHero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

async function getProject(slug) {
  const query = `*[_type == "project" && slug.current == $slug][0]{
    _id,
    _type,
    title,
    subtitle,
    mainImage {
      asset->
    },
    mobileMainImage {
      asset->
    }
  }`;

  const project = await client.fetch(query, { slug });
  return project;
}

export default async function ProjectPage({ params }) {
  const { id } = params;
  const project = await getProject(id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <Header />
      <main>
        <ProjectHero data={project} />
      </main>
      <Footer />
    </div>
  );
}
