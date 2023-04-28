import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export default function Vans() {

    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch("/api/vans")
        .then(Response => Response.json())
        .then(data => setVans(data.vans))
    }, [])

    const vanelements = vans.map(van => {
        return (
            <div className="van">
                    <img src={van.imageUrl} alt="" />
                    <h3>{van.name} ${van.price}</h3>
                    <Link className="link-button">{van.type}</Link>
            </div>
        )
    })

    return (
        <div className="vans-container">
            <h1>Explore our van options</h1>
            <Link className="link-button">Simple</Link>
            <Link className="link-button">Luxury</Link>
            <Link className="link-button">Rugged</Link>
            <Link className="link-button">Clear Filters</Link>
            <div className="vans">
                {vanelements}
            </div>
        </div>
        
    )
}