import React from 'react';

const Map = () => {
  return (
    <div className="h-[400px] w-full rounded-xl overflow-hidden shadow-lg">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5979952115944!2d77.6001195!3d13.072834499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae193b5c60ae77%3A0xe27c08bf22ec38b3!2sCenter%20of%20Excellence%20For%20Aviation%20Training%20(CEFAT)!5e0!3m2!1sen!2sin!4v1718633578968!5m2!1sen!2sin" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="CEFAT Location"
        className="w-full h-full"
      ></iframe>
    </div>
  );
};

export default Map;
