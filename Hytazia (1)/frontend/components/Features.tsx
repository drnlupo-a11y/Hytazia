import React from 'react';

const features = [
  { title: 'Factions Uniques', desc: 'Le premier des parts pour sectioner ce part facile d\'administration', icon:'/assets/logo.png' },
  { title: 'Économie équilibrée', desc: 'Système monétaire et récompenses bien pensées', icon:'/assets/logo.png' },
  { title: 'Events & Shops', desc: 'Events réguliers et boutique riche en contenu', icon:'/assets/logo.png' }
];

export default function Features(){
  return (
    <section id="features" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-center mb-8">Pourquoi nous rejoindre ?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f,i)=>(
            <div key={i} className="feature-card flex flex-col items-center text-center">
              <img src={f.icon} alt="icon" className="h-16 w-16 mb-4" />
              <h3 className="font-bold text-xl mb-2">{f.title}</h3>
              <p className="text-sm text-gray-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
