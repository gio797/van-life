import { useParams } from "react-router-dom"

export default function VanDetail() {
    const params = useParams()
    console.log(params)
    return (
        <h1>van detail</h1>
    )
}