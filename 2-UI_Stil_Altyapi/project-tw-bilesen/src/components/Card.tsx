type CardProps = {
  title: string;
  description: string;
  additionalClass?: string;
};

const Card = ({ title, description, additionalClass }: CardProps) => {
  return (
    <div className={"shadow-md rounded-xl p-6 border " + (additionalClass ?? "bg-white")}>
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default Card;
