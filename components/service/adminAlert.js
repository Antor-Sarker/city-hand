export const AdminAlert = ({ onClose }) => {
  return (
    <div className="fixed top-5/12 left-0 md:left-6/12 flex z-50 w-full max-w-sm px-4">
      <div className="bg-white border-l-4 border-yellow-500 p-4 shadow-2xl rounded-md flex items-start gap-3">
        <div className="text-red-500 mt-1 text-xl">⚠️</div>
        <div className="flex-1">
          <p className="text-sm md:text-xl font-bold text-gray-900">
            Access Denied!
          </p>
          <p className="text-sm md:text-md text-gray-600 mt-1">
            Only clients can book services. Your current role is Admin.
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
        >
          ✕
        </button>
      </div>
    </div>
  );
};
