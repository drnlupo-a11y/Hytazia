import React from 'react';

export default function Hero(){
  return (
    <section className="pt-28 pb-24">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h1 className="text-6xl font-extrabold tracking-tight text-white drop-shadow-lg">HYTAZIA</h1>
        <p className="mt-4 text-lg text-gray-200">Le server PVP Faction nouvelle génération.</p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#shop" className="bg-primary px-6 py-3 rounded-full font-semibold shadow-md">Jouer Maintenant</a>
          <a href="#" className="text-sm text-gray-300">play.hytazia.fr</a>
        </div>
      </div>
    </section>
  );
}
