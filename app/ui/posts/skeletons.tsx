const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
  return (
    <div className={` ${shimmer} h-[35vh] relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}>
      <div className="flex h-1/2 relative rounded-md justify-end pr-2 items-start bg-white">
          <div className="ml-2 px-4 py-2 rounded-md text-sm bg-gray-200 font-medium mt-2"></div>
      </div>
      <div className=" px-2 bg-gray-50 pb-2 ">
        <div className="flex justify-between items-center ">
        <div className="ml-2 px-4 py-2 rounded-md text-sm bg-gray-200 font-medium mt-2"></div>
        <div className="ml-2 px-4 py-2 rounded-md text-sm bg-gray-200 font-medium mt-2"></div>
        </div>
        <div className="ml-2 w-1/2 h-1/4 px-4 py-2 rounded-md text-sm bg-gray-200 font-medium mt-2"></div>
        <div className="ml-2 w-full h-1/4 px-4 py-2 rounded-md text-sm bg-gray-200 font-medium mt-2"></div>

        <div className="flex  mt-5 justify-between px-2 items-stretch">
        <div className="ml-2 px-3 py-3 rounded-xl text-sm bg-gray-200 font-medium mt-2"></div>
        <div className="ml-2 px-3 py-3 rounded-xl text-sm bg-gray-200 font-medium mt-2"></div>
        <div className="ml-2 px-3 py-3 rounded-xl text-sm bg-gray-200 font-medium mt-2"></div>
        </div>
      </div>
    </div>
  );
}

export function PostCardSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
}

export default function DashboardSkeleton() {
  return (
    <>
      <div
        className={`${shimmer} relative mb-4 h-8 w-36 overflow-hidden rounded-md bg-gray-100`}
      >
        <div className="grid-gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      </div>
    </>
  );
}
