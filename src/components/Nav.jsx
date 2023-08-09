import Anchor from './Anchor'

export default function Nav() {
  let data = [
    {href:'home.html', texto:'HOME'},
    {href:'about.html', texto:'ABOUT'},
    {href:'register.html', texto:'REGISTER'},
    {href:'info.html', texto:'INFO'},
    {href:'contact.html', texto:'CONTACT'}
  ]

  return (
    <nav>
      {data.map((each,key)=><Anchor key={key} href={each.href} texto={each.texto}></Anchor>)}
    </nav>
  )
}
