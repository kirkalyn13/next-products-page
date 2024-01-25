'use client'
import { FaSearch } from "react-icons/fa"
import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect } from "react";

const SearchBar: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();  
    const [ q, setQ ] = useState("")
    
    useEffect(() => {
        router.replace(`/?q=${q}`)
    },[q, router])

    return (
        <div
        className="bg-white w-100 mt-8 md:mt-0 border-2 border-black rounded-md
            flex align-center justify-start">
        <FaSearch className="text-xl m-2 text-black"/>
        <input 
            className="ps-4 text-xl focus:outline-none text-black"
            type="text"
            placeholder="Type to search..."
            value={searchParams.get("q") ?? ""}
            onChange={(e) => setQ(e.target.value)}
            />
        </div>
    )
}

export default SearchBar