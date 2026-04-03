const BookingDetailsModal = ({ data, setData }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={() => setData(null)}
    >
      {/* Modal */}
      <div
        className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-5 sm:p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setData(null)}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl cursor-pointer"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          Booking Details
        </h2>

        {/* Content */}
        <div className="space-y-3 text-sm sm:text-base">
          <p>
            <span className="font-medium mr-2">Service:</span>
            {data.serviceName}
          </p>

          <p>
            <span className="font-medium mr-2">Category:</span>
            {data.serviceCategory}
          </p>

          <p>
            <span className="font-medium mr-2">Plan:</span> {data.plan}
          </p>

          <p>
            <span className="font-medium mr-2">Price:</span> ৳{data.price}
          </p>

          <p>
            <span className="font-medium mr-2">Date:</span> {data.bookingDate}
          </p>

          <p>
            <span className="font-medium mr-2">Time:</span> {data.bookingTime}
          </p>

          <p>
            <span className="font-medium mr-2">Phone:</span> {data.phone}
          </p>

          <p>
            <span className="font-medium mr-2">Address:</span> {data.address}
          </p>

          <p>
            <span className="font-medium mr-2">Notes:</span> {data.notes}
          </p>

          {/* Status Badge */}
          <div className="flex items-center gap-2">
            <span className="font-medium mr-2">Status:</span>
            <span className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700 capitalize">
              {data.status}
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => setData(null)}
            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsModal;
