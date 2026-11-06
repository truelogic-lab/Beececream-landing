import { Link } from 'react-router-dom';

const LOCATIONS = [
  {
    city: 'Chicago',
    pillColor: 'bg-[#fcd34d]', // Yellowish
    address: ['9812 W 19th St'],
    phone: '+1 312-786-1053',
    email: 'chicago@beececream.com',
  },
  {
    city: 'New York',
    pillColor: 'bg-[#bbf7d0]', // Green
    address: ['100 Orchard St'],
    phone: '+1 212-431-9090',
    email: 'newyork@beececream.com',
  },
  {
    city: 'Washington',
    pillColor: 'bg-[#fbcfe8]', // Pink
    address: ['1021 18th St'],
    phone: '+1 202-332-3333',
    email: 'washington@beececream.com',
  },
  {
    city: 'Washington NW',
    pillColor: 'bg-[#e5e7eb]', // Grey
    address: ['1502 5th St'],
    phone: '+1 202-644-6899',
    email: 'washingtondc@beececream.com',
  }
];

export default function Locations() {
  return (
    <section className="w-full bg-[#fdf2f8] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {LOCATIONS.map((loc, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col h-full">
              
              {/* City Pill */}
              <div className={`self-start px-3 py-1 rounded-full text-[10px] font-bold text-gray-800 uppercase tracking-wider mb-4 ${loc.pillColor}`}>
                {loc.city}
              </div>

              {/* Address */}
              <div className="text-gray-500 text-xs mb-4 space-y-1">
                {loc.address.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>

              {/* Divider */}
              <hr className="border-gray-100 mb-4" />

              {/* Hours */}
              <div className="text-gray-500 text-xs mb-4 space-y-1 flex-grow">
                <p>Monday – Friday</p>
                <p>09:00 AM – 05:00 PM</p>
                <p className="mt-2">Saturday – Sunday</p>
                <p>08:00 AM – 08:00 PM</p>
              </div>

              {/* Contact Info */}
              <div className="text-gray-500 text-xs space-y-1 font-medium">
                <p>{loc.phone}</p>
                <a href={`mailto:${loc.email}`} className="block text-[#be185d] hover:underline">
                  {loc.email}
                </a>
              </div>

            </div>
          ))}

        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/locations" className="bg-[#be185d] hover:bg-[#9d174d] text-white text-sm font-bold py-3 px-8 rounded-full transition-colors shadow-md">
            Our locations
          </Link>
          <Link to="/franchise" className="bg-white text-gray-800 border border-gray-200 text-sm font-bold py-3 px-8 rounded-full hover:bg-gray-50 transition-colors shadow-sm">
            Franchise
          </Link>
        </div>

      </div>
    </section>
  );
}
