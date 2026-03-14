import { useRouter } from "next/navigation";

export default function SearchModal({
  searchInput,
  searchResult,
  handelClearSearch,
}) {
  const router = useRouter();

  // navigate service details
  function handelNavigate(id) {
    router.push(`/services/${id}`);
    handelClearSearch();
  }
  return (
    <div className="fixed flex justify-center md:justify-start xl:left-2/12 2xl:left-4/12 px-4 top-32 md:top-auto mb-2 z-50 backdrop-blur-md shadow-sm shadow-amber-50 w-full">
      <div className="w-full max-w-lg bg-white rounded-xl border border-gray-200 max-h-screen overflow-y-scroll shadow-lg">
        {/* Search bar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
          <svg
            className="w-4 h-4 text-gray-400 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <span className="flex-1 text-sm text-gray-500">{searchInput}</span>
          <button
            onClick={handelClearSearch}
            className="text-md text-red-600 cursor-pointer"
          >
            Clear
          </button>
        </div>

        {/* Results */}
        {searchResult?.map((item) => (
          <div
            onClick={() => handelNavigate(item?._id)}
            key={item._id}
            className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors"
          >
            <div className="flex-1 min-w-0 p-2">
              <p className="text-sm font-medium text-red-600 truncate">
                {item?.title}
              </p>
            </div>
            <span
              className={`text-xs px-2 py-0.5 rounded-full shrink-0 bg-blue-50 text-blue-600`}
            >
              {item?.category}
            </span>
          </div>
        ))}

        {searchResult?.length === 0 && (
          <div className="text-center text-gray-600 p-4">
            No services found for{" "}
            <span className="bold text-red-800">{`"${searchInput}"`}</span>
          </div>
        )}
      </div>
    </div>
  );
}
