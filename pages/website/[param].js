import { useRouter } from "next/router";
import styles from '../../styles/Home.module.css'

export default function Param() {
  const router = useRouter();
  console.log(router.query)

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        Param page!
      </main>

    </div>
  )
}
