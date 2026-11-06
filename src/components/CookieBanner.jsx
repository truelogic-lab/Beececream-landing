import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export default function CookieBanner({ onChoiceMade }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the cookie already exists
    const consent = Cookies.get('beececream-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleChoice = (choice) => {
    // Set cookie: name, value, options
    // Expires in 365 days, applies to the whole site, SameSite=Lax for security
    Cookies.set('beececream-consent', choice, { expires: 365, path: '/', sameSite: 'Lax' });
    
    setIsVisible(false);
    
    // Trigger the toast notification in the parent App component
    if (onChoiceMade) {
      onChoiceMade(choice);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[100] p-4 md:p-6 animate-[fadeUp_0.5s_ease-out_forwards]">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-800 mb-2">We value your privacy</h3>
          <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
            We use cookies to enhance your browsing experience, serve personalised content, and analyse our traffic. 
            By clicking "Accept All", you consent to our use of cookies.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
          <button 
            onClick={() => handleChoice('rejected')} 
            className="w-full sm:w-auto px-6 py-2.5 rounded-full text-sm font-bold text-gray-600 border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            Reject
          </button>
          <button 
            onClick={() => handleChoice('accepted')} 
            className="w-full sm:w-auto px-6 py-2.5 rounded-full text-sm font-bold text-white bg-[#be185d] hover:bg-[#9d174d] transition-colors shadow-sm"
          >
            Accept All
          </button>
        </div>

      </div>
    </div>
  );
}
