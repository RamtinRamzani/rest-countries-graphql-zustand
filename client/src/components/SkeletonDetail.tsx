const SkeletonDetail = () => {
  return (
    <div className="flex max-md:flex-col items-center gap-[clamp(1rem,8vw,8rem)] mt-[clamp(2rem,4vw,6rem)] lg:mx-[clamp(1rem,4vw,8rem)] animate-pulse">
      <div className="skeletons w-1/2 max-md:w-full h-[200px] sm:h-[350px] bg-gray-200 rounded-sm shadow-sm"></div>
      <div className="w-1/2 max-md:w-full flex flex-col gap-8">
        <div className="skeletons h-8 w-1/2 bg-gray-200 rounded"></div>

        <div className="flex max-md:flex-col max-md:gap-2 justify-between">
          <div className="flex flex-col gap-2">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="skeletons h-4 w-[clamp(6rem,15vw,10rem)] bg-gray-200 rounded"
              ></div>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            {[...Array(2)].map((_, index) => (
              <div
                key={index}
                className="skeletons h-4 w-[clamp(6rem,15vw,10rem)] bg-gray-200 rounded"
              ></div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="skeletons h-4 w-[clamp(6rem,15vw,8rem)] bg-gray-200 rounded"></div>
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="skeletons h-8 w-16 bg-gray-200 rounded-md"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkeletonDetail;
