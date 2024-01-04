import React from 'react'
import { useFormState } from 'react-dom';
import { z} from 'zod'
import { createPost } from '@/app/lib/actions';
import Button from './button';
import {
  CheckIcon,
  ClockIcon, 
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
const Form = async() => { 

  const initialState = { message:null, errors:{}};
  // const [ state, dispatch] = useFormState(createPost, initialState);
  return (
    <form action={createPost}>
    <div className="rounded-md bg-gray-50 p-4 md:p-6">
      {/* Author Name */}
      <div className="mb-4">
        <label htmlFor="author" className="mb-2 block text-sm font-medium">
          Author Name
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="author"
              name="author"
              type="string"
              step="0.01"
              placeholder="Enter author name"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
            <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>
      </div>
        {/*Post title*/}
        <div className="mb-4">
        <label htmlFor="title" className="mb-2 block text-sm font-medium">
          Post Title
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="title"
              name="title"
              type="string"
              step="0.01"
              placeholder="Enter title"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
            <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>
      </div>
         {/*Post description*/}
         <div className="mb-4">
        <label htmlFor="description" className="mb-2 block text-sm font-medium">
          Post description
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="description"
              name="description"
              type="description"
              step="0.01"
              placeholder="Enter description"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
            <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>
      </div>
       {/*Post image_url*/}
       <div className="mb-4">
        <label htmlFor="image_url" className="mb-2 block text-sm font-medium">
          Post description
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="image_url"
              name="image_url"
              type="image_url"
              step="0.01"
              placeholder="Select image"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
            <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>
      </div>
   


      {/* post Status */}
      <fieldset>
        <legend className="mb-2 block text-sm font-medium">
          Set the post status
        </legend>
        <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
          <div className="flex gap-4">
            <div className="flex items-center">
              <input
                id="public"
                name="status"
                type="radio"
                value="public"
                className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
              />
              <label
                htmlFor="public"
                className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
              >
                Public <ClockIcon className="h-4 w-4" />
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="private"
                name="status"
                type="radio"
                value="private"
                className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
              />
              <label
                htmlFor="private"
                className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
              >
                private <CheckIcon className="h-4 w-4" />
              </label>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
    <div className="mt-6 flex justify-end gap-4">
      <Link
        href="/dashboard/invoices"
        className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
      >
        Cancel
      </Link>
      <Button type="submit">Create Post</Button>
    </div>
  </form>
  )
}

export default Form