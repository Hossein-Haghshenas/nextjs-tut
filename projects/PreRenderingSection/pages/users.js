import User from './../components/user';

export const getStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
  
    return {
      props: {
        users: data
      }
    }
  }

const UserList = ({users}) => {
    return (
        <div>
            <h2>fetch data with getStaticProps (Static Site Generation or SSG)</h2>
            <ul>
                {
                    users?.map(user => {
                        const { username, email, phone, id } = user

                        return <li key={id} >
                            <User username={username} email={email} />
                            phone : {phone} <br />
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default UserList