interface PetReportSkeletonProps {
  bg: string;
}

export default function PetReportSkeleton({ bg }: PetReportSkeletonProps) {
  return (
    <div className="flex items-center gap-8 animate-pulse">
      <div className={`rounded-xl ${bg}`}>
        <div className={`size-16 rounded-xl ${bg}`}></div>
      </div>
      <div className="w-full flex items-center gap-4">
        <div className={`w-full mx-auto rounded`}>
          <div className={`h-4 mb-4 w-[120px] rounded ${bg}`}></div>
          <div className={`h-4 w-[80px] rounded ${bg}`}></div>
        </div>
        <div className={`h-8 w-24 rounded ${bg}`}></div>
      </div>
    </div>
  );
}
