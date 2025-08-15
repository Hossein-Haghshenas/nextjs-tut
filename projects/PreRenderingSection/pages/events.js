import { useState } from "react"
import { useRouter } from 'next/router';

export const getServerSideProps = async ({ query }) => {
    const { category } = query
    const queryString = category ? 'category=sports' : ''
    const res = await fetch(`http://localhost:4500/events?${queryString}`)
    const data = await res.json()

    return {
        props: {
            eventList: data
        }
    }
}


const Events = ({ eventList }) => {
    const [events, setEvents] = useState(eventList)
    const router = useRouter()

    const fetchSportsEvents = async () => {
        const res = await fetch("http://localhost:4500/events?category=sports")
        const data = await res.json()
        setEvents(data)
        router.push('/events?category=sports', undefined, { shallow: true })
    }

    return (
        <div>
            <button onClick={fetchSportsEvents}>Sports Events</button>
            <h1>Events List</h1>
            {events?.map(event => {
                const { id, title, date, category, description } = event
                return (
                    <section key={id} >
                        <h2>{id}. {title} - <i>{date}</i> | {category}</h2>
                        <p>
                            {description}
                        </p>
                        <hr />
                    </section>
                )
            })}
        </div>
    )
}

export default Events