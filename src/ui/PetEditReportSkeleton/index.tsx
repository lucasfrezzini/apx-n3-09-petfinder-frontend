interface PetEditReportSkeletonPropsProps {
  bg: string;
}

export default function PetEditReportSkeletonProps({
  bg,
}: PetEditReportSkeletonPropsProps) {
  return (
    <div className="animate-pulse">
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="w-full flex flex-col gap-4">
          <div className={`h-10 w-full rounded ${bg}`}></div>
          <div className={`h-10 w-full rounded ${bg}`}></div>
          <div className={`h-10 w-full rounded ${bg}`}></div>
          <div className={`h-10 w-full rounded ${bg}`}></div>
          <div className={`h-10 w-full rounded ${bg}`}></div>
        </div>
        <div className="w-full mb-4 flex flex-col gap-4">
          <div className={`h-10 w-full rounded ${bg}`}></div>
          <div className={`h-10 w-full rounded ${bg}`}></div>
          <div className={`h-38 w-full rounded ${bg}`}></div>
        </div>
      </div>
      <div className={`h-10 w-full rounded ${bg}`}></div>
    </div>
  );
}
