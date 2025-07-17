const SkeletonCard = () => {
  return (
    <div className="rounded-sm shadow-sm bg-white animate-pulse">
      <div className="skeletons rounded-t-sm h-32 w-full bg-gray-200"></div>
      <div className="px-4 pt-4 flex flex-col gap-2">
        <div className="h-6 w-3/4 bg-gray-200 rounded mb-4"></div>
        <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
        <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
        <div className="h-4 w-1/3 bg-gray-200 rounded mb-8"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
