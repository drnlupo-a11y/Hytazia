import React from 'react';

export default function Footer(){
  return (
    <footer className="border-t border-white/5 mt-12 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Hytazia — Tous droits réservés
      </div>
    </footer>
  );
}
