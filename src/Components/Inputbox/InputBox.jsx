import React from 'react'

const InputBox = ({setSearchTerm, searchTerm}) => {
  return (
          <div className="relative w-full md:w-[70%] mb-6">
            <label htmlFor="Search" className="sr-only"> Search </label>
            <input
              type="text"
              placeholder="Search for a recipe"
              className="w-full rounded border-black border py-2.5 px-1"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
  )
}

export default InputBox
