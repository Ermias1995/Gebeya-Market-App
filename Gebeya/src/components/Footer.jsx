import footer_icon from '../assets/footer_icon.png';
function Footer() {
  return (
    <div className='flex justify-stretch bg-primary min-h-[423px] mt-40'>
      <div id='Logo side' className="flex items-center justify-center">
        <div className="flex">
          <img src={footer_icon} alt="Logo"/>
        </div>
      </div>
      <div className="Link-side">

      </div>
    </div>
  )
}
export default Footer