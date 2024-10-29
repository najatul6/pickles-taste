const CardsLoading = () => {
  return (
    <section className="w-11/12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/*  Display a loading skeleton for the list  */}
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="relative bg-white  shadow-xl ring-1 ring-gray-900/5  rounded-b-3xl"
          >
            <div className=" animate-pulse">
              <div className="flex items-center justify-center h-48 w-full bg-gray-300 dark:bg-gray-700">
                <svg
                  className="h-12 w-full text-gray-200"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  aria-hidden="true"
                  fill="currentColor"
                  aria-label="Loading Icon"
                >
                  <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                </svg>
              </div>
              <div className="flex flex-col justify-center items-center w-11/12 mx-auto py-10 px-10 space-y-5">
                <div className="h-8 w-full  mb-4 mt-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-2 w-full  mb-2.5 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-2  w-full mb-2.5 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-10 w-1/2 rounded-full mb-2.5 bg-gray-200 dark:bg-gray-700"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardsLoading;
