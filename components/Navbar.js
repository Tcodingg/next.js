import Link from 'next/link'
export default function Navbar() {
  return (
    <nav className='nav'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/services'>Services</Link>
    </nav>
  )
}
