import React from 'react'

export default async function getAllUsers() {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')

  if(!res.ok) throw new Error('Failed to load Data')

  return res.json();
  
}
