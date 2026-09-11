import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import StackSidebar from "./StackSidebar";
import technologiesData from "../data/technologies.json";
import { toast } from "react-toastify";


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

const Technologies = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTechnologies(technologiesData);
    setLoading(false);
  }, []);


const handleAddToStack = (technology: Technology) => {
  const alreadyAdded = stack.some((item) => item.id === technology.id);

  if (alreadyAdded) {
    toast.warning(`${technology.name} is already in your stack.`);
    return;
  }
  setStack([...stack, technology]);
  toast.success(`${technology.name} added to your stack!`);
};


const handleRemove = (id: string) => {
  const technology = stack.find((item) => item.id === id);
  setStack(stack.filter((item) => item.id !== id));

  if (technology) {
    toast.info(`${technology.name} removed from your stack.`);
  }
};


  const handleRemoveAll = () => {
    setStack([]);
    toast.info("All technologies removed from your stack.");
  };

  if (loading) {
    return (
      <section className="px-5 py-16">
        <div className="mx-auto max-w-300 text-center">
          <p className="text-gray-500">
            Loading technologies...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="px-5 py-16">
      <div className="mx-auto max-w-300">

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Explore the{" "}
            <span className="bg-linear-to-r from-orange-500 via-pink-600 to-violet-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-2 text-sm text-gray-600">
            Add any technologies you like — each one can be added only once.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                isAdded={stack.some(
                  (item) => item.id === technology.id
                )}
                onAdd={handleAddToStack}
              />
            ))}
          </div>

          <StackSidebar
            stack={stack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />

        </div>
      </div>
    </section>
  );
};

export default Technologies;