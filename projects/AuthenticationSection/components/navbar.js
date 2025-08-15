import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react'
import Styles from './../styles/Navbar.module.css'

const Navbar = () => {
    const { navbar, menu, loadingStyle, loadedStyle } = Styles
    const { data: session, status } = useSession()

    return (
        <nav className={navbar} >
            <h1>
                <a href="#">NextAuthPractice</a>
            </h1>
            <ul className={`${menu} ${status === "loading" ? loadingStyle : loadedStyle}`} >
                <li>
                    <Link href="/">Home</Link>
                </li>
                {
                    (status === "authenticated") &&
                    <li>
                        <Link href="/dashboard">Dashboard</Link>
                    </li>
                }

                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                {
                    (status === "unauthenticated") ? (
                        <li>
                            <Link href="/api/auth/signin" onClick={() => signIn('github')} >Sign In</Link>
                        </li>
                    ) : (
                        <li>
                            <Link href="/api/auth/signout" onClick={() => signOut()} >Sign Out</Link>
                        </li>
                    )
                }


            </ul>
        </nav>
    )
}

export default Navbar