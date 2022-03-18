import Head from "next/head";
import { ArticleFull } from "../components/Article";
import { getPathsFromContext, getResourceFromContext } from "next-drupal";

export default function ArticlePage({ node }) {
  if (!node) return null;

  return (
    <div>
      <Head>
        <title>{node.title} - Drupal and Next.js </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ArticleFull article={node} />
    </div>
  );
}

export async function getStaticPaths(context) {
  return {
    paths: await getPathsFromContext(["node--article"], context),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const node = await getResourceFromContext("node--article", context, {
    params: {
      include: "field_image,uid",
    },
  });

  if (!node?.status) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      node,
    },
    revalidate: 60,
  };
}
