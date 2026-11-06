import { useEffect } from 'react';

export default function Toast({ message, type, onClose }) {
  useEffect(() => {
    // Auto-close after 3 seconds
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const isSuccess = type === 'success';

  return (
    <div className="fixed top-24 right-4 md:right-8 z-[110] animate-[slideInRight_0.3s_ease-out_forwards]">
      <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-4 flex items-start gap-3 min-w-[280px] max-w-sm">
        
        {/* Icon */}
        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${isSuccess ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
          {isSuccess ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 pt-1">
          <p className="text-sm font-bold text-gray-800">
            {isSuccess ? 'Preferences Saved' : 'Preferences Updated'}
          </p>
          <p className="text-xs text-gray-500 mt-1">{message}</p>
        </div>

        {/* Close Button */}
        <button onClick={onClose} className="shrink-0 text-gray-400 hover:text-gray-600 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

      </div>
    </div>
  );
}
