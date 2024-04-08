
import { useParams } from "react-router-dom"

function DogDetails({dogs}) {
    const { name } = useParams();
    const dog = dogs.find(f => f.name === name)

    return(
        <div>
            <h3>Name: {dog.name} </h3>
            <img src={`${dog.src}.jpg`} />
            <p>{dog.age} years young!</p>
            <p>Here are some fun facts about {dog.name}!</p>
            <ul>
                {dog.facts.map((f,i) => <li key={i}>{f}</li>)}
            </ul>
        </div>
    )
}

export default DogDetails;