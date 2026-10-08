import "./App.css";

function App() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen p-6">
        {/* Product Card */}
        <div className=" flex flex-col justify-between bg-white p-6 min-h-60 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Product</h2>
            <span className="text-green-500">Active</span>
          </div>

          <p className="text-yellow-800">Product description goes here.</p>

          <div className="flex justify-end gap-2">
            <button className="rounded bg-gray-200 px-4 py-2">Cancel</button>
            <button className="rounded bg-blue-500 px-4 py-2 text-white">
              Buy
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
