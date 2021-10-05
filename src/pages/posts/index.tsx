import Head from "next/head";

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
