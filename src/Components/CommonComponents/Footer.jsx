import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png';

const Footer = () => {
  return (

   
        <footer className=" py-16 relative overflow-hidden">
          {/* <div className="absolute inset-0 overflow-hidden">
            <svg className="absolute right-0 top-0 text-gray-100 w-1/3 -mt-12 opacity-50" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M47.5,-73.8C59.9,-66.1,67.6,-49.9,75.2,-33.8C82.9,-17.7,90.6,-1.7,88.1,12.9C85.7,27.5,73.1,40.7,60.1,52C47.1,63.4,33.6,72.9,18.1,78.3C2.6,83.7,-14.9,85.1,-30.1,79.2C-45.2,73.3,-58,60.2,-67.6,45.3C-77.1,30.5,-83.3,13.9,-83.1,-2.5C-83,-18.9,-76.5,-35.1,-65.5,-45.4C-54.5,-55.7,-39.1,-60,-25.7,-67C-12.4,-74,1.9,-83.8,17.1,-84.1C32.3,-84.5,48.3,-75.7,47.5,-73.8Z" transform="translate(100 100)" />
            </svg>
            <svg className="absolute left-0 bottom-0 text-gray-100 w-1/4 -mb-8 opacity-50" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M44.9,-76.2C59.7,-69.2,74.1,-59.3,83.1,-45.4C92.1,-31.6,95.8,-13.9,94.3,3.2C92.7,20.3,86,36.9,75.6,50.1C65.1,63.4,50.9,73.3,35.9,78.9C20.8,84.5,4.9,85.7,-10.6,83.1C-26.1,80.5,-41.3,74.1,-53.3,64.1C-65.3,54.2,-74.1,40.7,-79.7,25.8C-85.3,10.9,-87.6,-5.4,-84.1,-20.5C-80.7,-35.5,-71.5,-49.3,-59.1,-57.3C-46.8,-65.3,-31.4,-67.5,-17.1,-74.2C-2.8,-80.9,10.3,-92.2,24.3,-90.6C38.4,-89.1,53.3,-74.8,61.1,-61C68.9,-47.3,71.5,-34.2,74,-21.2C76.6,-8.1,79.2,4.9,77.2,17.5C75.1,30.1,68.3,42.2,58.7,50.3C49.2,58.3,36.8,62.2,24.1,65.5C11.4,68.7,-1.6,71.3,-15.2,71.4C-28.8,71.5,-43,69.1,-55.3,62.3C-67.7,55.5,-78.2,44.3,-83.1,30.9C-88,17.4,-87.2,1.8,-83.2,-12.4C-79.3,-26.6,-72.2,-39.5,-62.1,-49.2C-51.9,-59,-38.7,-65.7,-25.4,-71.1C-12.1,-76.6,1.3,-80.8,14.4,-80.1C27.5,-79.4,40.3,-73.7,44.9,-76.2Z" transform="translate(100 100)" />
            </svg>
          </div> */}
          <div className="px-4 mx-auto sm:px-6 lg:px-28 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
              <div className="flex flex-col items-center md:items-start space-y-3">
                <div className="flex items-center">
                <Link to="/" title="" className="flex">
                <img className="w-auto h-8 lg:h-12" src={logo} alt="" />
              </Link>
                </div>
                <p className="text-sm text-[#A9AABA] max-w-xs">Simplicity is the ultimate sophistication. We craft elegant digital experiences with minimalist design principles.</p>
              </div>
              <nav className="flex flex-wrap justify-center md:justify-end gap-8">
  {['Products', 'About', 'Blog', 'Contact'].map((item) => (
    <a
      key={item}
      href="#"
      className="text-slate-400 hover:text-sky-400 transition-colors duration-200 relative group font-medium"
    >
      {item}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 group-hover:w-full transition-all duration-300" />
    </a>
  ))}
</nav>

              <div className="flex space-x-5">
                <a href="#" className="text-gray-400 hover:text-[#3FA2F6] hover:-translate-y-1 transition-all duration-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#3FA2F6] hover:-translate-y-1 transition-all duration-300">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#3FA2F6] hover:-translate-y-1 transition-all duration-300">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-[#A9AABA] text-center md:text-left">© 2025 Minimal Co. All rights reserved.</p>
                <div className="mt-4 md:mt-0 flex space-x-6">
                  <a href="#" className="text-xs text-[#A9AABA] hover:text-[#3FA2F6] transition-colors duration-200">Privacy Policy</a>
                  <a href="#" className="text-xs text-[#A9AABA] hover:text-[#3FA2F6] transition-colors duration-200">Terms of Service</a>
                  <a href="#" className="text-xs text-[#A9AABA] hover:text-[#3FA2F6] transition-colors duration-200">Cookies</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
  

  )
}

export default Footer