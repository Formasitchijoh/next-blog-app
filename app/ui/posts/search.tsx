'use client'

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { useDebouncedCallback } from 'use-debounce';

export default function Search({placeholder}:{placeholder:string}){
    const searchParams = useSearchParams()
    const pathname = usePathname() //gets the current path
    const { replace} = useRouter(); //helps in routing between pages and can also update the current path

    function handleSearch(term:string){ 

      //updating the url with the search params
      const params = new URLSearchParams(searchParams) //URLSearchParams is a Web API that provides utility methos for manipulating the URL query paramter. Instes of creating a complex string literal
      // you can use it to get the params string like ?page=1&query=a.
      // params.set('page', '1');
      if(term){
        params.set('query', term)
      }else{
        params.delete('query')
      }
      replace(`${pathname}?${params.toString()}`)
      
    }
    return(
        <div className="relative flex flex-1 flex-shrink-0">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          placeholder={placeholder}
          onChange={(e) =>{
            handleSearch(e.target.value) 
          }} 
defaultValue={searchParams.get('query')?.toString()}        />
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      </div>
    )
}

