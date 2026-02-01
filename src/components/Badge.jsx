const bgColor = {
    'online' : 'bg-green-700',
    'offline' : 'bg-slate-700',
    'busy' : 'bg-red-700'
}

const Badge = ({status}) => {
  return (
    <div className={`text-white text-3xl ${bgColor[status]} py-3 px-5 border rounded-xl`}>
        {status}
    </div>
  )
}

export default Badge