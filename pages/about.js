import {useRouter} from 'next/router'
export default function about() {

    let {route} = useRouter();
    let router = useRouter();

  console.log(router)
  return (
    <div>
      <h1>About page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem rerum maiores quisquam repellat temporibus, quia maxime impedit voluptatem illo dolorem.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem rerum maiores quisquam repellat temporibus, quia maxime impedit voluptatem illo dolorem.</p>
    </div>
  )
}
