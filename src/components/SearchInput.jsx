import { useState } from "react"

export default function SearchInput() {
  const [searchInputValue, setSearchInputValue] = useState('')

  function handleSearch(e) {
    setSearchInputValue(e.target.value)
  }

  console.log(searchInputValue);
  return (
    <div
      className="rounded-lg gap-2 absolute mt-10 bg-[#20293a] w-[400px] h-12 py-2 px-4 flex items-center"
    >
      {
        searchInputValue
      }
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11" cy="11" r="7" stroke="#4A5567" strokeWidth="2"></circle>
        <path
          d="M20 20L17 17"
          stroke="#4A5567"
          strokeWidth="2"
          strokeLinecap="round"></path>
      </svg>

      <input
        className="h-[90%] w-full bg-transparent border-0 outline-none placeholder:text-[#4A5567] font-bold text-[#CDD5E0]"
        type="text"
        placeholder="username"
        value={searchInputValue}
        onChange={handleSearch}
      />
    </div>
  )
}