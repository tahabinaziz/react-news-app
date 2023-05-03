import { useEffect, useState } from "react";

const Search = (props) => {
    const [showFilter, setShowFilter] = useState(false)
    const inputField={
        keyword:"",
        from:"",
        to:"",
        sortBy:""
    }
    const [inputValue, setInputValue] = useState(inputField);



    function handleInputChange(event) {
        setInputValue(event.target.value);
      }
    console.log("check",inputValue)

    const checkFilter = () => {
        setShowFilter(true)
        if (showFilter === true) {
            setShowFilter(false)
        }
    }
 
    const handleClick = () => {
        props.searchData(inputValue);
    }

    return (
        <>
              <div className="flex items-center">
            <div className="flex space-x-1">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-black-700 bg-white border rounded-full focus:border-primary focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                    name="keyword"
                    onChange={handleInputChange}
                />
                <button className="px-4 text-white bg-primary hover:bg-black rounded-full " onClick={() => { handleClick() }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
        </div>
            
        </>
    )
}

export default Search;