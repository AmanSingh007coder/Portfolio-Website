import {useState} from 'react';

const Header = () => {

    const [draweropen, setdraweropen] = useState(false);
    const [active, setactive] = useState("Home");

    const toggle = () => {
        setdraweropen(!draweropen);
    }

     const tabs = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <>
    <header className='sticky top-0 z-600'>
   <nav className = " relative top-0 left-0 right-0 font-inter w-full z-50 backdrop-blur-md border-b border-white/10" >
     <div className="container mx-auto px-5 flex justify-between items-center h-20 border-b-neutral-300">
      <div className="md:text-[25px] text-xl font-bold flex items-center space-x-1">
  <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">&lt;</span>
  <span className="text-white">Aman</span>
  <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">/</span>
  <span className="text-white">Singh</span>
  <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">&gt;</span>
</div>


       <div className="hidden md:flex relative bg-[#0c0c27] rounded-xl p-1 border border-zinc-700">
          <div
            className="absolute top-1 bottom-1 left-0 bg-white rounded-lg transform transition-all duration-300"
            style={{
              transform: `translateX(${tabs.findIndex(
                (tab) => tab.name === active
              ) * 100}%)`,
              width: `${100 / tabs.length}%`,
            }}
          ></div>

          {tabs.map((tab) => (
            <a
              key={tab.name}
              href={tab.href}
              onClick={() => setactive(tab.name)}
              className={`relative z-10 px-6 py-2 text-sm font-medium transition-colors duration-300 ${
                active === tab.name ? "text-black" : "text-zinc-400"
              }`}
            >
              {tab.name}
            </a>
          ))}
          </div>
        

       <div className="buttons  space-x-10">
          <a href="#contact" className="hidden md:flex justify-center items-center text-white bg-gradient-to-r from-blue-500 to-blue-700 
hover:from-blue-600 hover:to-blue-800 px-4 py-2 rounded-md">
           Contact
            </a>
       </div>

       {/* mobile menu button */}
        <div className = "flex justify-center items-center md:hidden px-2.5 py-1 bg-[#0a0a59] rounded-lg text-center border border-zinc-600">
          <button className='cursor-pointer' onClick={toggle}>
             {draweropen ? '✖' : '☰'}
          </button>
          </div>
     </div>

      {draweropen && (
      <>
            <ul className='md:hidden flex flex-col items-center px-6 space-y-3 w-full mb-3'>
              <li><a href="#home" onClick = {toggle} className="text-md hover:text-zinc-500">Home</a></li>
              <li><a href="#about" onClick = {toggle} className="text-md hover:text-zinc-500">About</a></li>
               <li><a href="#education" onClick = {toggle} className="text-md hover:text-zinc-500">Education</a></li>
              <li><a href="#skills" onClick = {toggle} className="text-md hover:text-zinc-500">Skills</a></li>
              <li><a href="#projects" onClick = {toggle} className="text-md hover:text-zinc-500">Projects</a></li>
               <li><a href="#certificates" onClick = {toggle} className="text-md hover:text-zinc-500">Certificates</a></li>
            </ul>
            <div className='flex justify-center items-center md:hidden mb-4 space-x-4'>
            <a href="#contact" onClick = {toggle} className=" bg-gradient-to-r from-blue-500 to-blue-700 
hover:from-blue-600 hover:to-blue-800 text-white px-4 py-2 rounded-md mb-3 mr-7">Contact</a>
            <a href='#close' onClick={toggle} className="border border-gray-500 text-white px-4 py-2 rounded-md mb-3">Close</a>
          </div>
          </>
          )}   
       
   </nav>
   </header>
  </>
  )
}

export default Header;
