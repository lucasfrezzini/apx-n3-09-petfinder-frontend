interface PetCardSkeletonProps {
  bg: string;
}

export default function PetCardSkeleton({ bg }: PetCardSkeletonProps) {
  return (
    <div className="flex flex-col p-6 animate-pulse">
      <div className={`rounded-xl ${bg}`}>
        <div className={`size-32 rounded-xl ${bg}`}></div>
      </div>
      <div className="grid gap-4 m-6">
        <div className={`h-2 w-[70%] flex gap-2 mx-auto rounded`}>
          <div className={`h-2 w-full rounded ${bg}`}></div>
          <div className={`h-2 w-full rounded ${bg}`}></div>
        </div>
        <div className={`h-2 rounded ${bg}`}></div>
        <div className={`h-4 w-full rounded ${bg}`}></div>
      </div>
    </div>
  );
}
