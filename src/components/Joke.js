import Table from "../components/Table";
import React, {useRef} from "react";

export default function Joke() {
    const ref = React.useRef(null)
    let fetchJoke = () => {
        fetch('https://yomomma-api.herokuapp.com/jokes', {
            'method': "GET",
            'Content-Type': "application/json",
        }).then(res => res.json())
            .then(res => console.log(res.json()))
            .finally(() => setJoke('Sorry, unable to fetch a joke!'))
    }
    let [joke, setJoke] = React.useState(null);
    React.useEffect(() => {
        ref.current = setInterval(fetchJoke, 2000);

        return () => {
            if (ref.current) {
                clearInterval(ref.current)
            }
        }

    }, [])
    return <p>
        {joke}
    </p>
}