import Link from 'next/link'
import { Route } from 'react-router'

let navigation = [
  { name: 'Users', href: '/users' },
  { name: 'bankstatements', href: '#' },
  { name: 'Contact us', href: '#' },
]


const Header = () => {
  return (
    <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
      <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 p-2 text-white bg-blue-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl">TailGo</span>
      </a>
      <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
        
        <Link href="https://www.google.co.kr/preferences"><a className="mr-5 hover:text-gray-900">Login</a></Link>
        <Link href="https://www.op.gg/"><a className="mr-5 hover:text-gray-900">Ranking</a></Link>
        <Link href="https://www.daum.net/"><a className="mr-5 hover:text-gray-900">Milleage</a></Link>
        <Link href= "https://www.daum.net/"><a className="mr-5 hover:text-gray-900">Mypage</a></Link>
        <Link href="/group/mypage"><a className="mr-5 hover:text-gray-900">Store</a></Link>
        <Link href="https://www.google.co.kr/preferences"><a className="mr-5 hover:text-gray-900">Setting</a></Link>
        
      </nav>
      <div>
        <button className="inline-flex items-center px-3 py-1 mt-4 text-base bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200 md:mt-0"
        onClick={ () => { window.open('http://localhost:7080', 'PopupWin',"width=400,height=500" ) }}> Chatting
        {/* <a href=" http://localhost:7080/chat">Chatting</a> */}
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"> </path> 
        </svg>
      </button>
      </div>
    </div>
  )
}
export default Header