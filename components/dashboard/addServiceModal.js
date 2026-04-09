export default function AddServiceModal({
  addServiceData,
  setShowAddModal,
  setAddServiceData,
  handelAddService,
}) {
  return (
    <div className="fixed inset-0 z-50 flex justify-center bg-black/40 backdrop-blur-sm px-4">
      <form
        onSubmit={handelAddService}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md mt-4 h-10/12 overflow-y-scroll"
      >
        {/* Modal header */}
        <div className="bg-red-600 px-6 py-4 flex items-center justify-between">
          <h2 className="text-white font-bold text-lg">Add New Service</h2>
          <button
            onClick={() => setShowAddModal(false)}
            className="text-red-200 hover:text-white transition-colors cursor-pointer"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Modal body */}
        <div className="px-6 py-5 space-y-4">
          {/* title */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">
              Service Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="e.eg. Ac Repair"
              required
              onChange={(e) =>
                setAddServiceData({
                  ...addServiceData,
                  title: e.target.value,
                })
              }
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent bg-gray-50"
            />
          </div>

          {/* category */}
          <div className="relative">
            <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">
              Service Category <span className="text-red-500">*</span>
            </label>
            <select
              required
              className="w-full appearance-none pl-3 pr-8 py-2.5 text-[13.5px] rounded-lg border border-gray-200 bg-gray-50 text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-400/30 focus:border-red-400 focus:bg-white transition"
              onChange={(e) =>
                setAddServiceData({
                  ...addServiceData,
                  categoryLabel: e.target.options[e.target.selectedIndex].text,
                  category: e.target.value,
                })
              }
            >
              <option name="" value="">
                Category
              </option>
              <option name="Appliance Repair" value="appliance">
                Appliance Repair
              </option>
              <option name="Electrical Services" value="electrical">
                Electrical Services
              </option>
              <option name="Plumbing Services" value="plumbing">
                Plumbing Services
              </option>
              <option name="Cleaning Services" value="cleaning">
                Cleaning Services
              </option>
              <option name="Installation & Security" value="installation">
                Installation & Security
              </option>
              <option name="Moving & Relocation" value="moving">
                Moving & Relocation
              </option>
            </select>
            <svg
              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {/* price */}
          <div className="flex justify-between">
            <div className="mx-1">
              <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">
                basic<span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                placeholder="price"
                required
                onChange={(e) =>
                  setAddServiceData({
                    ...addServiceData,
                    price: {
                      ...addServiceData.price,
                      basic: e.target.value,
                    },
                  })
                }
                className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent bg-gray-50"
              />
            </div>

            <div className="mx-1">
              <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">
                standard <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                placeholder="price"
                required
                onChange={(e) =>
                  setAddServiceData({
                    ...addServiceData,
                    price: {
                      ...addServiceData.price,
                      standard: e.target.value,
                    },
                  })
                }
                className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent bg-gray-50"
              />
            </div>

            <div className="mx-1">
              <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">
                premium <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                placeholder="price"
                required
                onChange={(e) =>
                  setAddServiceData({
                    ...addServiceData,
                    price: {
                      ...addServiceData.price,
                      premium: e.target.value,
                    },
                  })
                }
                className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent bg-gray-50"
              />
            </div>
          </div>

          {/* Image */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">
              Cover Image <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              onChange={(e) =>
                setAddServiceData({
                  ...addServiceData,
                  image: e.target.files[0],
                })
              }
              required
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent bg-gray-50"
            />
          </div>

          {/* status */}
          <div className="relative">
            <select
              required
              onChange={(e) =>
                setAddServiceData({
                  ...addServiceData,
                  status: e.target.value,
                })
              }
              className="w-full appearance-none pl-3 pr-8 py-2.5 text-[13.5px] rounded-lg border border-gray-200 bg-gray-50 text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-400/30 focus:border-red-400 focus:bg-white transition"
            >
              <option value="">status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <svg
              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {/* description */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">
              description <span className="text-red-500">*</span>
            </label>

            <textarea
              value={addServiceData.description}
              required
              onChange={(e) =>
                setAddServiceData({
                  ...addServiceData,
                  description: e.target.value,
                })
              }
              rows="3"
              cols="1"
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent bg-gray-50"
            >
              service description...
            </textarea>
          </div>

          {/* service inclusions */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">
              {"Service Inclusions (max. 6 line)"}
              <span className="text-red-500">*</span>
            </label>

            <textarea
              required
              value={addServiceData.serviceInclusions}
              onChange={(e) =>
                setAddServiceData({
                  ...addServiceData,
                  serviceInclusions: e.target.value,
                })
              }
              rows="3"
              cols="1"
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent bg-gray-50"
            ></textarea>
          </div>
        </div>

        {/* Modal footer */}
        <div className="px-6 pb-5 flex gap-3">
          <button
            onClick={() => setShowAddModal(false)}
            className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-all active:scale-95 cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 disabled:bg-red-300 text-white text-sm font-semibold transition-all active:scale-95 shadow-md shadow-red-100 cursor-pointer"
          >
            Add Service
          </button>
        </div>
      </form>
    </div>
  );
}
