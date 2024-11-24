import Logo from '../assets/Logo.png';
function Footer() {
  return (
    <div className='flex justify-stretch bg-primary min-h-[423px]'>
      <div id='Logo side' className="flex items-center justify-center">
        <div className="flex">
          <img src={Logo} alt="Logo"/>
          <img src={Logo} alt="Logo"/>
        </div>
      </div>
      <div className="Link-side">

      </div>
    </div>
  )
}
export default Footer