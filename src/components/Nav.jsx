import Anchor from './Anchor'

export default function Nav() {
  let data = [
    {href:'#', texto:'HOME'},
    {href:'./pages/Cities', texto:'CITIES'},
  ]

  return (
    <nav>
      {data.map((each,key)=><Anchor key={key} href={each.href} texto={each.texto}></Anchor>)}
    </nav>
  )
}
