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

type StackSidebarProps = {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

const StackSidebar = ({
  stack,
  onRemove,
  onRemoveAll,
}: StackSidebarProps) => {
  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        
        <h2 className="text-lg font-semibold text-gray-900">
          Your Stack
        </h2>

        <p className="mt-1 text-xs text-gray-400">
          {stack.length} Technology{" "}
          {stack.length === 1 ? "Selected" : "Selected"}
        </p>

        {stack.length === 0 ? (
          <div className="mt-4 rounded-lg border border-dashed border-gray-200 px-4 py-10 text-center">
            <p className="text-sm text-gray-400">
              Your stack is empty.
            </p>
          </div>
        ) : (
          <div className="mt-4 space-y-2">
            {stack.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-3 rounded-lg border border-gray-200 p-3"
              >
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-8 w-8 object-contain"
                />

                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-semibold text-gray-800">
                    {technology.name}
                  </h3>

                  <p className="text-xs text-gray-400">
                    {technology.category}
                  </p>
                </div>

                <button
                  onClick={() => onRemove(technology.id)}
                  className="text-lg text-gray-400 hover:text-pink-600"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        {stack.length > 0 && (
          <button
            onClick={onRemoveAll}
            className="mt-4 w-full rounded-md border border-pink-300 py-2 text-sm font-medium text-pink-600 hover:bg-pink-50"
          >
            Remove All
          </button>
        )}
      </div>
    </aside>
  );
};

export default StackSidebar;