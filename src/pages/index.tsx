import styles from '@/styles/Home.module.css'
import Corpo from 'components/Corpo'
import Image from 'next/image'



export default function Home() {
  return (
   <div className={styles.container}>
    <h1>Calculadora</h1>
    <Corpo></Corpo>
    <Image
    className={styles.imagemargin}
    src="/perfilpng.png"
    alt='Logo'
    width={100}
    height={100}
    ></Image>
   </div>
  )
}
