import { useState, useEffect } from 'react'

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [dashboardData, setDashboardData] = useState(null)

    // Client side data fetching
    useEffect(() => {
        const fetchDashboardData = async () => {
            const res = await fetch("http://localhost:4500/dashboard")
            const data = await res.json()
            setDashboardData(data)
            setIsLoading(false)
        }
        fetchDashboardData()
    }, [])

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Posts - {dashboardData.posts}</h2>
            <h2>Likes - {dashboardData.likes}</h2>
            <h2>Followers - {dashboardData.followers}</h2>
            <h2>Following - {dashboardData.following}</h2>
        </div>
    )
}

export default Dashboard