export default function SearchBar() {
  return (
    <div className="flex flex-row md:w-3xl border rounded border-gray-300 px-3 items-center w-full">
      <span className="material-icons text-gray-500">search</span>
      <input
        className="w-full p-2 focus:outline-none"
        type="text"
        placeholder="Search for a building..."
      ></input>
    </div>
  );
}
