import { Link as Anchor } from "react-router-dom"

export default function Header() {
  return (
    <header className="2xl (1536px) min-w-full h-18  bg-black">
       <nav className="flex justify-around content-center py-5 ">
        <h2 className="text-base font-extrabold tracking-widest font-sans">MyTinerary</h2>
        <ul className="flex space-x-16">
          <li><Anchor to='/'>HOME</Anchor></li>
          <li><Anchor to='/cities'>CITIES</Anchor></li>
          <li><a className='log in' href=""></a>LOG IN</li>
        </ul>
       </nav>
    </header>
  )
}
