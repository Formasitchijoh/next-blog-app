'use client';
 
import { useEffect } from 'react';
 import Link from 'next/link';
export default function Welcome() {

 
  return (
    <main className="flex w-full justify-center items-center h-full flex-col bg-teal-50 ">
      <h2 className="text-center">Welcome to TC-Blog</h2>
      <button
        className="mt-4 rounded-md bg-teal-700 px-4 py-2 text-sm text-white transition-colors hover:bg-teal-400"
        
      >
      <Link href='/dashboard'>
        Get Started
      </Link>
      </button>
    </main>
  );
}