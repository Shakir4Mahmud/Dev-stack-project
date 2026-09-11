type Technology = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

type TechnologyCardProps = {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
};

const TechnologyCard = ({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) => {
  return (
    <div
      className={`rounded-xl border bg-white p-4 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300" ${
        isAdded ? "border-pink-400" : "border-gray-200"
      }`}
    >
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-10 w-10 object-contain"
        />

        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-600">
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-gray-900">
        {technology.name}
      </h3>

      <p className="mt-2 min-h-18 text-sm leading-5 text-gray-600">
        {technology.description}
      </p>

      <div className="mt-4 flex items-center justify-between gap-2">
        <span className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-600">
          {technology.category}
        </span>

        <span className="text-xs text-gray-500">{technology.difficulty}</span>

        <span className="text-xs text-gray-700">⭐ {technology.rating}</span>
      </div>

      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-4 w-full rounded-md py-2 text-sm font-medium ${
          isAdded
            ? "cursor-not-allowed bg-pink-50 text-pink-600"
            : "bg-gray-900 text-white hover:bg-gray-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;
