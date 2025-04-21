interface PetResumeSkeletonProps {
  bg: string;
}

export default function PetResumeSkeleton({ bg }: PetResumeSkeletonProps) {
  return (
    <div className="animate-pulse">
      <div className="w-full mb-8 flex justify-between items-center gap-4">
        <div className={`h-4 w-[120px] rounded ${bg}`}></div>
        <div className={`h-4 w-[80px] rounded ${bg}`}></div>
      </div>
      <div className={`h-4 mb-4 w-full rounded ${bg}`}></div>
      <div className={`h-4 mb-4 w-[80%] rounded ${bg}`}></div>
      <div className={`h-4 mb-8 w-[90%] rounded ${bg}`}></div>
      <div className={`h-4 w-[100px] rounded ${bg}`}></div>
    </div>
  );
}
