export default function ContactUsPage() {
  return (
    <div className="min-h-[80vh] bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-black text-[#be185d] uppercase mb-4">Contact Us</h1>
          <p className="text-gray-500 mb-10">Have a question? We are here to help.</p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 bg-[#fdf2f8] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#be185d] transition-colors duration-300">
                <svg className="w-6 h-6 text-[#be185d] group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Email Us</h3>
                <p className="text-gray-500 text-sm">support@beececream.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 bg-[#fdf2f8] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#be185d] transition-colors duration-300">
                <svg className="w-6 h-6 text-[#be185d] group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Call Us</h3>
                <p className="text-gray-500 text-sm">+1 312-786-1053</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 bg-[#fdf2f8] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#be185d] transition-colors duration-300">
                <svg className="w-6 h-6 text-[#be185d] group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Visit Us</h3>
                <p className="text-gray-500 text-sm">9812 W 19th St, Chicago, IL</p>
              </div>
            </div>
          </div>
        </div>

        <form className="flex flex-col gap-6 p-8 bg-[#fdf2f8] rounded-3xl shadow-sm" onSubmit={(e) => e.preventDefault()}>
          <h2 className="text-xl font-bold text-[#be185d] mb-2">Send a Message</h2>
          <div className="relative">
            <input type="text" id="name" className="block w-full px-4 py-3 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-[#be185d] peer" placeholder=" " required />
            <label htmlFor="name" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#be185d] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
          </div>
          <div className="relative">
            <input type="email" id="email" className="block w-full px-4 py-3 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-[#be185d] peer" placeholder=" " required />
            <label htmlFor="email" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#be185d] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Email</label>
          </div>
          <div className="relative">
            <textarea id="message" rows="3" className="block w-full px-4 py-3 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-[#be185d] peer resize-none" placeholder=" " required></textarea>
            <label htmlFor="message" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#be185d] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Message</label>
          </div>
          <button type="submit" className="bg-[#be185d] text-white font-bold py-3 rounded-lg hover:bg-[#9d174d] transition-colors mt-2 transform hover:scale-[1.02] active:scale-95 duration-200">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
