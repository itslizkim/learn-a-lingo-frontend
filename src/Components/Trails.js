import React from 'react'
import { useSelector} from 'react-redux';

export default function Trails() {

    // const user = useSelector(state => state.user)
    const trail = useSelector(state => state.trail)
    console.log(trail)

    const trailsArr = trail.map(trail => {
        return (
            <Trail key={trail.id} trail={trail} />
        )
    })

    return (
        <div>
            <h4>Progress Trail</h4>
            {trailsArr}
        </div>
        
    )
}

const Trail = ({trail}) => {
    return(
        <div className="cards">
            <h2>{trail.language}</h2>
            <h3>{trail.language_id.lessons}</h3>
        </div>
    )
}
