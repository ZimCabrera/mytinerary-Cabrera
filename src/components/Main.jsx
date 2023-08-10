import Article from "./Article"

function Main() {
    let data = [
        {titulo:'Articulo 1', texto:'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed diam nonumy eirmod tempor inviduer'},
        {titulo:'Articulo 2', texto:'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed diam nonumy eirmod tempor inviduer'},
        {titulo:'Articulo 3', texto:'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed diam nonumy eirmod tempor inviduer'},
        {titulo:'Articulo 4', texto:'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed diam nonumy eirmod tempor inviduer'}
    ]
  return (
    <main>

      {data.map((each,indice)=><Article key={indice} titulo={each.titulo} texto={each.texto}></Article>)}
      
    </main>
  )
}

export default Main