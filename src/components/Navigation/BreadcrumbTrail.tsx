import { Link, useLocation } from "react-router-dom"

export default function BreadcrumbTrail(){
    const locations = useLocation().pathname.split('/').slice(1)
    return (
        <ul className="flex flex-row">
            {locations.map((loc,idx) => <li key={loc}><Link to={locations.slice(0,idx + 1).join('/')}>{'/' + loc}</Link></li>)}
        </ul>
    )
}