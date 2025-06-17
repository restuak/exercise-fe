import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h3>
          Halaman Latihan FrontEnd <code>reactjs/nextjs/-.tsx/-.css/dll</code>.
        </h3>
        <p>Oleh Restu</p>
      </main>

      <div className={styles.ctas}>
        <a
          className={styles.primary}
          href="./blogprev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog-Preview
        </a>
        <a
          href="./prodprev"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.primary}
        >
          Product-Preview
        </a>
      </div>
    </div>
  );
}
