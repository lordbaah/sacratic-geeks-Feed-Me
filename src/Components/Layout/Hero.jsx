import RandomFood from "../Ramdomfood/RandomFood"
import bgImage from '../../assets/bg.png'

const Hero = () => {
  return (
    <section className='bg-brownish-white py-20' 
    style={{
      // backgroundImage: `url(${bgImage})`,
      backgroundRepeat: 'no-repeat', 
      backgroundSize: 'cover'
    }}>
        <div className='custom-screen flex items-center flex-col gap-12 lg:flex-row justify-between'>
          <div>
            <h1 className='font-bold text-5xl text-center'>Welcome to <span className="text-red-500">FeedMe</span></h1>
            <p className="mt-8">Looking for a Recipe? we've got you covered</p>
          </div>

          <div>
            <RandomFood/>
          </div>
        </div>
    </section>
  )
}

export default Hero
