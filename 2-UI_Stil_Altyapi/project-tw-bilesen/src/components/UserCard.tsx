import Card from "./Card";

type UserCardProps = {
  name: string;
  email: string;
};

function UserCard({ name, email }: UserCardProps) {
  return <Card title={name} description={email} additionalClass="bg-blue-500" />;
}

export default UserCard;
