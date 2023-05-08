import { Link, useSearchParams, useLoaderData } from "react-router-dom"
import { getVans } from "../../api"
import { useState, useEffect } from "react"

export function loader() {
    return (
        getVans()
    )
}

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [error, setError] = useState(null)
    const vans = useLoaderData()

    const typeFilter = searchParams.get("type")

    const displayedVans = typeFilter
        ? vans.filter(van => van.type === typeFilter)
        : vans

    const vanElements = displayedVans.map(van => (
        <div key={van.id} className="van-tile">
            <Link
                to={van.id}
                state={{
                    search: `?${searchParams.toString()}`,
                    type: typeFilter
                }}
            >
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    
    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button
                    onClick={() => handleFilterChange("type", "simple")}
                    className={
                        `van-type simple 
                        ${typeFilter === "simple" ? "selected" : ""}`
                    }
                >Simple</button>
                <button
                    onClick={() => handleFilterChange("type", "luxury")}
                    className={
                        `van-type luxury 
                        ${typeFilter === "luxury" ? "selected" : ""}`
                    }
                >Luxury</button>
                <button
                    onClick={() => handleFilterChange("type", "rugged")}
                    className={
                        `van-type rugged 
                        ${typeFilter === "rugged" ? "selected" : ""}`
                    }
                >Rugged</button>

                {typeFilter ? (
                    <button
                        onClick={() => handleFilterChange("type", null)}
                        className="van-type clear-filters"
                    >Clear filter</button>
                ) : null}

            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}



 {/* <Link to={"?type=simple"} className="van-type simple">Simple</Link>
                <Link to={"?type=luxury"} className="van-type luzury">Luxury</Link>
                <Link to={"?type=rugged"} className="van-type rugged">Rugged</Link>
                <Link to={"."} className="van-type clear-filters">Clear Filters</Link> */}



{/* <button className="van-type simple" onClick={() => setSearchParams({type: "luxury"})}>Luxury</button>
<button className="van-type luzury" onClick={() => setSearchParams({type: "simple"})}>Simple</button>
<button className="van-type rugged" onClick={() => setSearchParams({type: "rugged"})}>Rugged</button>
{typeFilter? 
<button className="van-type clear-filters" onClick={() => setSearchParams({})}>Clear Filter</button>
: null} */}