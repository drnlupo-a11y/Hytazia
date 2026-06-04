import React from 'react';

export default function Header(){
  return (
    <header className="fixed w-full top-0 z-50 nav-blur">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <img src="/assets/logo.png" alt="Hytazia" className="h-10 w-10 rounded-md"/>
          <span className="font-bold text-white">HYTAZIA</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#" className="hover:text-primary">Accueil</a>
          <a href="#features" className="hover:text-primary">Caractéristiques</a>
          <a href="#shop" className="hover:text-primary">Boutique</a>
          <a href="/discord" className="hover:text-primary">Discord</a>
          <button className="ml-4 px-4 py-2 border border-primary rounded text-primary">Connexion</button>
        </nav>
      </div>
    </header>
  );
}
