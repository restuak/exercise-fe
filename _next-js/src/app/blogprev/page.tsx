import styles from "./page.module.css";

export default function BlogPrev() {
  return (
    <div className={styles.page}>
      <main className={styles.container}>
        <div className={styles.blogImage}>
          <img src="img-bp/bp-content.png" alt="Blog Image" />
        </div>
        <div className={styles.blogImage2}>
          <img src="img-bp/bp-content2.png" alt="Blog Image" />
        </div>
        <div className={styles.content}>
          <div className={styles.contentTag}>
            <div className={styles.contentTagText}>
              <p>Learning</p>
            </div>
          </div>

          <div className={styles.contentDate}>
            <p>Published 21 Dec 2023</p>
          </div>

          <div className={styles.contentTitle}>
            <p>HTML & CSS foundations</p>
          </div>

          <div className={styles.contentDesc}>
            <p>
              These languages are the backbone of every website, defining
              structure, content, and presentation.
            </p>
          </div>

          <div className={styles.author}>
            <div className={styles.authorImage}>
              <img src="img-bp/bp-profile.png" alt="Author Image" />
            </div>
            <div className={styles.authorName}>
              <p>Greg Hooper</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
