import Ellipse_5 from '../assets/Ellipse_5.png'

function Home() {
  return (
    <div>
        <div className="grid grid-cols-3 bg-primary w-full h-[769px]">
          <div className="flex flex-col items-center justify-around">
            <h1 className="font-normal text-9xl text-white">Gebeya</h1>
            <div className="flex items-center justify-center w-[260px] h-[260px] rounded-full">
              <img src={Ellipse_5} alt="Ellipse_5" />
            </div>
          </div>
          <div className=""></div>
          <div className=""></div>
        </div>
    </div>
  )
}
export default Home