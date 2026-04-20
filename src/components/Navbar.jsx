import Search_bar from './Search_bar'
import logo from '../assets/github_logo.svg'
import github_logo from '../assets/github-text.svg'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <>
            <nav className="sticky top-0 z-10 flex items-center justify-between h-14 px-6 bg-gray-900/80 backdrop-blur border-b border-gray-700">
                <div className="flex items-center gap-4 h-8 invert-100 hover:cursor-pointer" onClick={() => { navigate('/') }}>
                    <img src={logo} alt="logo" width={30} />
                    <img src={github_logo} alt="logo_text" />
                </div>
                <article>
                    <Search_bar showsuggestion={false} />
                </article>
            </nav>
        </>
    )
}