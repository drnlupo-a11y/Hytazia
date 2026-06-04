import React from 'react';

export default function MSLogin(){
  const handleClick = ()=>{
    window.location.href = (process.env.NEXT_PUBLIC_API_URL || '') + '/auth/microsoft/redirect';
  };
  return <button onClick={handleClick}>Se connecter avec Microsoft</button>;
}
