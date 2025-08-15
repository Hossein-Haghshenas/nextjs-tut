import useSWR from 'swr'

const fetcher = async () => {
    const res = await fetch("http://localhost:4500/dashboard")
    const data = await res.json()
    return data
}

const DashboardSwr = () => {
    const { data, error } = useSWR('dashboard', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return (
        <div>
            <h1>Dashboard | fetch data and use with SWR</h1>
            <h2>Posts - {data.posts}</h2>
            <h2>Likes - {data.likes}</h2>
            <h2>Followers - {data.followers}</h2>
            <h2>Following - {data.following}</h2>
        </div>)
}

export default DashboardSwr