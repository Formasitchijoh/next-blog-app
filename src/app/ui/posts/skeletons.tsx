const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function CardSkeleton() {
  return (
    <div className={` ${shimmer} rounded-xl bg-gray-50  shadow-sm`}>
      <div className="flex relative">
        <div className="absolute bg-black w-full h-full bg-opacity-10  text-white font-bold flex justify-end pr-2 items-start">
          <h5 className="ml-2 text-sm font-medium mt-2"></h5>
        </div>
      </div>
      <div className=" px-2">
        <div className="flex justify-between items-center ">
          <h5 className=" text-sm font-medium"></h5>
          <h5 className="ml-2 text-sm font-medium"></h5>
        </div>
        <h2 className=" text-lg py-1 font-bold"></h2>
        <span className=" text-sm text-justify  text-gray-700 font-medium"></span>

        <div className="flex  mt-5 justify-between px-2 items-stretch">
          <div className="w-6 rounded-full"></div>
          <div className="w-6 rounded-full"></div>
          <div className="w-6 rounded-full"></div>
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
