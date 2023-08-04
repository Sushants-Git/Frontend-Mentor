import './styles/Home.css'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="home">
            <Link to="/result-summary-component">Result Summary Component</Link>
        </div>
    )
}