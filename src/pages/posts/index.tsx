import Head from "next/head";
import { GetStaticProps } from "next";
import Prismic from "@prismicio/client";

import { getPrismicClient } from "../../services/prismic";

import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>12 de março de 2021</time>

            <strong>Lorem ipsum dolor sit amet.</strong>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis porro voluptatem nemo dolor pariatur unde ducimus
              eaque alias quia, maiores explicabo voluptas commodi, voluptatum
              numquam sapiente reiciendis, cum iure sint!
            </p>
          </a>

          <a href="">
            <time>12 de março de 2021</time>

            <strong>Lorem ipsum dolor sit amet.</strong>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis porro voluptatem nemo dolor pariatur unde ducimus
              eaque alias quia, maiores explicabo voluptas commodi, voluptatum
              numquam sapiente reiciendis, cum iure sint!
            </p>
          </a>

          <a href="">
            <time>12 de março de 2021</time>

            <strong>Lorem ipsum dolor sit amet.</strong>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis porro voluptatem nemo dolor pariatur unde ducimus
              eaque alias quia, maiores explicabo voluptas commodi, voluptatum
              numquam sapiente reiciendis, cum iure sint!
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "publication")],
    {
      fetch: ["publication.title", "publication.content"],
      pageSize: 100,
    }
  );

  console.log(JSON.stringify(response, null, 2));

  return {
    props: {},
  };
};
