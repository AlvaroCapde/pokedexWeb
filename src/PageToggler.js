import React from 'react'

export default function PageToggler({next,prev}) {
    return (
        <div className="flex justify-center space-x-10 my-5">
            <button onClick={prev} className="bg-red-600 rounded-full shadow-lg p-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
            </button>
            <button onClick={next} className="bg-red-600 rounded-full shadow-lg p-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
</svg>
            </button>
            
        </div>
    )
}
