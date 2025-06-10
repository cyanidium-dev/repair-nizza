import { client } from "@/sanityClient";
import ProjectHero from "@/components/projects/ProjectHero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BeforeAndAfter from "@/components/projects/BeforeAndAfter";

async function getProject(id) {
  const query = `*[_type == "project" && _id == $id][0]{
    _id,
    _type,
    title,
    subtitle,
    mainImage {
      asset->
    },
    mobileMainImage {
      asset->
    },
    beforeAfterImages {
      before {
        asset->
      },
      after {
        asset->
      }
    }
  }`;

  const project = await client.fetch(query, { id });
  console.log("Project data from Sanity:", project);
  return project;
}

export async function generateMetadata({ params }) {
  const { id, locale } = params;
  const project = await getProject(id);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found",
    };
  }

  return {
    title: project.title?.[locale] || project.title?.en || "Project",
    description:
      project.subtitle?.[locale] ||
      project.subtitle?.en ||
      "Project description",
  };
}

export default async function ProjectPage({ params }) {
  const { id } = params;
  console.log("Project ID from params:", id);
  const project = await getProject(id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <Header />
      <main>
        <ProjectHero data={project} />
        <BeforeAndAfter data={project.beforeAfterImages} />
      </main>
      <Footer />
    </div>
  );
}
