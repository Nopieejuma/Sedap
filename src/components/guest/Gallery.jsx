import React from 'react';

export default function Gallery(){


  return (
    <section id="gallery" className="py-16 px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-green-700">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <img
              key={1}
              src={`https://i.pinimg.com/736x/bc/1b/09/bc1b09fb13bdb2e94ab5e7c9f18b1162.jpg`}
              alt={`Gallery ${1}`}
              className="rounded shadow"
            />
          ))}
        </div>
      </div>
    </section>
  );
};


