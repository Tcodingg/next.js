import Link from 'next/link'
import {useEffect} from 'react'
import {useRouter} from 'next/router'

export default function error() {

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000);
  })
  return (
    <div className='error'>
      <h1>404</h1>
      <p>Page not found</p>
      <p>go back to <Link className='redirect' href='/'>Home Page </Link> </p>
      
    </div>
  )
}
