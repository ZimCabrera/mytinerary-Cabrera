

export default function Home() {
  return (
    <div className="home">
      <CallToAction/>
      <h2>Cities Image</h2>
      <Carousel images={images}/>

    </div>
  )
}


