
const Footer = () => {
  return (

    <section className='px-14 md:py-10 md:px-20 font-Inter py-8'>
   <div className='container grid grid-cols-1 md:grid-cols-2 gap-4'>
    {/* left-side */}
      <div className='left'>
        <h1 className='text-3xl md:text-4xl font-bold text-white mb-5 md:mb-7'>
            Let's Work <br/>
            together Today
        </h1>
        <a href="#home" className='bg-gradient-to-r from-blue-500 to-cyan-500 
       hover:from-blue-600 hover:to-blue-800 text-white px-4 py-2 rounded-lg cursor-pointer'>Get Started</a>
      </div>

      {/* right side */}
       <div className='flex w-full md:gap-60 gap-40 items-center justify-center'>
        <div className='flex flex-col gap-1 p-3'>
           <h1 className='font-bold mb-2'>Sitemap</h1>
           <a href="#home" className='text-zinc-400 hover:text-gray-300'>Home</a>
           <a href="#about" className='text-zinc-400 hover:text-gray-300'>About</a>
           <a href="#skills" className='text-zinc-400 hover:text-gray-300'>Skills</a>
           <a href="#projects" className='text-zinc-400 hover:text-gray-300'>Projects</a>
           <a href="#education" className='text-zinc-400 hover:text-gray-300'>Education</a>
            <a href="#certificates" className='text-zinc-400 hover:text-gray-300'>Certificates</a>
        </div>

           <div className='flex flex-col gap-2 p-3'>
           <h1 className='font-bold mb-2'>Socials</h1>
           <a href="https://github.com/AmanSingh007coder" target="_blank" rel="noopener noreferrer" className='text-zinc-400 hover:text-gray-300'>Github</a>
           <a href="https://www.linkedin.com/in/aman-kumar-singh-be/" target="_blank" rel="noopener noreferrer" className='text-zinc-400 hover:text-gray-300'>LinkedIn</a>
           <a href="mailto:amansinghrajput9005@gmail.com" className='text-zinc-400 hover:text-gray-300'>E-mail</a>
           <a href="https://www.instagram.com/itz_aman_rajput_007/" target="_blank" rel="noopener noreferrer" className='text-zinc-400 hover:text-gray-300'>Instagram</a>
           <a href="#" className='text-zinc-400 hover:text-gray-300'>Facebook</a>
        </div>



       </div>


   </div>
    </section>
  )
}

export default Footer;