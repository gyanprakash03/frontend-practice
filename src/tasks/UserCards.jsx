import UserCard from '../components/UserCard'

const userData = [
    {name: 'Gyan', email: 'gyan091203@xyz.com'},
    {name: 'Rohan', email: 'rohan8745@xyz.com'},
    {name: 'Aman', email: 'aman24704@xyz.com'},
]

const UserCards = () => {
  return (
    <div className='flex flex-col gap-3' >{
        userData.map(user => (
            <UserCard key={user.email} name={user.name} email={user.email} />
        ))
    }</div>
  )
}

export default UserCards