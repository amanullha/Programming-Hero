import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1>next js started
      </h1>
      <div>
        <Link href="/about">
          <h1> got to about </h1>
        </Link>
        <Link href="/blogs/2/comment/2">
          <h1> got to single blog </h1>
        </Link>
      </div>
    </div>
  )
}
