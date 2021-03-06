import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import { Layout } from "../components/layout";
import Seo from "../components/seo";
import ProjectsComponent from "../components/projects";

export const query = graphql`
  query MyQuery {
    allStrapiProjects {
      edges {
        node {
          id
          Title
          content
          created_at
          date
          live
          git
          mainPictrue {
            publicURL
          }
        }
      }
    }
  }
`;

interface ProjectInterface {
  data: {
    allStrapiProjects: {
      edges: {
        node: {
          Title: string;
          content: string;
          created_at: string;
          date: string;
          id: string;
          mainPictrue: {
            publicURL: string;
          };
        };
      }[];
    };
  };
}

const Projects: FC<ProjectInterface> = (p) => {
  return (
    <Layout subpage>
      <Seo title="Portfolio - kamilpieczyk.github.io" />
      <ProjectsComponent projects={p.data.allStrapiProjects.edges} />
    </Layout>
  );
};

export default Projects;
