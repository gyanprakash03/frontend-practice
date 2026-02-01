import Badge from "../components/Badge";

const statuses = ["online" , "offline" , "busy"];

const StatusBadge = () => {
    const index = Math.floor(Math.random() * 3);
    const status = statuses[index];

  return (
    <div>
        <Badge status={status} />
    </div>
  )
}

export default StatusBadge