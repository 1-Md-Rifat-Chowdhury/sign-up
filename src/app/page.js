
import Link from 'next/link'

export default function Home() {
  return (
    <div className=''>
      <Link className='pe-5' href='/registration'>sign up </Link>
      <Link  href='/layut'> Layout </Link>
      <Link  className='ps-5' href='/layout2'> Layout 2 </Link>
      
    </div>
  )
}
