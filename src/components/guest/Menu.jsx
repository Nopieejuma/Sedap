import React from 'react';
export default function Menu(){
  return (
    <section id="services" className="py-16 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-green-700">Our Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-3xl shadow bg-green-200">Lumpia</div>
          <div className="p-6 border rounded-3xl shadow bg-green-200">Cendol Premium</div>
          <div className="p-6 border rounded-3xl shadow bg-green-200">Kue cucur modern</div>
          <div className="p-6 border rounded-3xl shadow bg-green-200">Onde onde</div>
          <div className="p-6 border rounded-3xl shadow bg-green-200">Bika Ambon klasik</div>
          <div className="p-6 border rounded-3xl shadow bg-green-200">Bolu Jadoel</div>
        </div>
      </div>
    </section>
  );
};


