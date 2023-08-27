import Hero from "../../components/Hero"
import PopularMyTinerary from "../../components/PopularMyTinerary"
import Button from "../../components/Button"

export default function Home() {
  return (
    <main>
      <Hero 
        title="Find the perfect destination" 
        text="Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier." 
        styleTitle="text-white lg:text-5xl"
        styleText="text-gray-400"
        imgBackground="/assets/hero-image.jpg"
        height="h-full"
        isCenter={false}>
        <div>
          <Button 
            text="View More" 
            customStyle="w-40 lg:w-48 lg:font-bold lg:text-2xl flex justify-center"
            padding="py-[0.6em] px-[1.2em]"
            link={"cities"}/>
        </div>
      </Hero>
      <PopularMyTinerary/>
    </main>
  )
}

