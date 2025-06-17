import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h3>
          Halaman Latihan FrontEnd{" "}
          <code>reactjs/nextjs/-.tsx/-.css/dll</code>.
        </h3>
        <p>Oleh Restu</p>
      </main>
    </div>
  );
}
