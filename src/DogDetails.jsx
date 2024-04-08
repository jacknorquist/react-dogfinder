
import { Navigate, useParams } from "react-router-dom"

/**
 * Shows details for each dog based on URL param
 * (name, image, age, dog facts)
 *
 * Props: dogs (array of dog objects)
 * state: none
 *
 * App --> DogList --> DogDetails
 */

function DogDetails({dogs}) {
    const { name } = useParams();
    const dog = dogs.find(f => f.name === name)

    if (!dog) return <Navigate to="/" />;

    return(
        <div>
            <h3>Name: {dog.name} </h3>
            <img src={`/${dog.src}.jpg`} />
            <p>{dog.age} years young!</p>
            <p>Here are some fun facts about {dog.name}!</p>
            <ul>
                {dog.facts.map(f => <li key={dog.name}>{f}</li>)}
            </ul>
        </div>
    )
}

export default DogDetails;