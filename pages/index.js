import styles from '../styles/Home.module.css'
import {useRouter} from 'next/router'

export default function Home() {
  let router = useRouter();

  console.log(router)
  return (
   
    <div className={styles.container}>

      <h1>Home page</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem rerum maiores quisquam repellat temporibus, quia maxime impedit voluptatem illo dolorem.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem rerum maiores quisquam repellat temporibus, quia maxime impedit voluptatem illo dolorem.</p>

 </div>
  )
}
