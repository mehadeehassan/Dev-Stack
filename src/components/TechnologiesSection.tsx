import { GRADIENT_TEXT } from "../Theme/Theme";
import type { Technology } from "../Types/Types";
import StackSidebar from "./StackSidebar";
import TechCard from "./TechCard";


function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-24 text-gray-400">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-pink-500" />
      <p className="text-sm font-medium">Loading technologies…</p>
    </div>
  );
}

interface TechnologiesSectionProps {
  technologies: Technology[];
  isLoading: boolean;
  error: string | null;
  stack: Technology[];
  onAdd: (tech: Technology) => void;
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export default function TechnologiesSection({
  technologies,
  isLoading,
  error,
  stack,
  onAdd,
  onRemove,
  onRemoveAll,
}: TechnologiesSectionProps) {
  const stackIds = new Set(stack.map((item) => item.id));

  return (
    <section id="technologies" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Explore the <span className={GRADIENT_TEXT}>Technologies</span>
      </h2>
      <p className="mt-2 text-gray-500">Pick one technology per category to build your ideal stack.</p>

      {isLoading ? (
        <LoadingState />
      ) : error ? (
        <p className="mt-10 rounded-xl bg-red-50 p-6 text-center text-sm font-medium text-red-500">{error}</p>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
            {technologies.map((tech) => (
              <TechCard key={tech.id} tech={tech} isAdded={stackIds.has(tech.id)} onAdd={onAdd} />
            ))}
          </div>

          <div className="lg:col-span-1">
            <StackSidebar stack={stack} onRemove={onRemove} onRemoveAll={onRemoveAll} />
          </div>
        </div>
      )}
    </section>
  );
}