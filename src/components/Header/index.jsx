import { Link as Anchor } from "react-router-dom"

export default function Header() {
  return (
    <header>
       <nav className="flex justify-around">
        <h2 className="">MyTinerary</h2>
        <ul className="flex space-x-16">
          <li><Anchor to='/'>HOME</Anchor></li>
          <li><Anchor to='/cities'>CITIES</Anchor></li>
          <li><a className='log in' href=""></a>LOG IN</li>
        </ul>
       </nav>
    </header>
  )
}
