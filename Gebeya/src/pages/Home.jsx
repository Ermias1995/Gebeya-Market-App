import Ellipse_5 from '../assets/Ellipse_5.png';
import Ellipse_3 from '../assets/Ellipse_3.png';
import Ellipse_4 from '../assets/Ellipse_4.png'

function Home() {
  return (
    <div>
        <div className="grid grid-cols-3 bg-primary w-full h-[48.063rem]">
          <div className="flex flex-col items-center justify-around">
            <h1 className="font-normal text-[7.2rem] text-white font-alfa-slab">Gebeya</h1>
            <div className="flex items-center justify-center w-[16.25rem] h-[16.25rem] rounded-full">
              <img src={Ellipse_5} alt="Ellipse_5" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-around">
            <div className="flex items-center justify-center w-[16.25rem] h-[16.25rem] rounded-full">
              <img src={Ellipse_3} alt="Ellipse_3"/>
            </div>
            <button className='w-[21rem] h-[4.125rem] bg-secondary text-[#222222] rounded-lg'>Explore Now</button>
          </div>
          <div className="flex flex-col items-center justify-around">
            <p className='text-white text-xl '>Discover a world of convenience with our user-friendly platform, 
              curaated collections, and exceptional customer service</p>
            <h1 className='font-normal font-alfa-slab text-[7.2rem] text-white'>Shop</h1>
            <div className="flex items-center justify-center w-[13.938rem] h-[13.938rem] rounded-full">
              <img src={Ellipse_4} alt="Ellipse_4"/>
            </div>  
          </div>
        </div>
    </div>
  )
}
export default Home