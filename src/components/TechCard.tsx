import { FOCUS_RING } from "../Theme/Theme";
import type { Technology } from "../Types/Types";


const BADGE_STYLES: Record<string, string> = {
  Popular: 'bg-sky-50 text-sky-600',
  Versatile: 'bg-emerald-50 text-emerald-600',
  Fast: 'bg-orange-50 text-orange-600',
  'SSR / Edge': 'bg-purple-50 text-purple-600',
  Standard: 'bg-green-50 text-green-600',
  'Top SQL': 'bg-blue-50 text-blue-600',
  Cache: 'bg-rose-50 text-rose-600',
  Ubiquitous: 'bg-amber-50 text-amber-600',
  Essential: 'bg-blue-50 text-blue-600',
  Robust: 'bg-teal-50 text-teal-600',
  Modern: 'bg-cyan-50 text-cyan-600',
  'Version Control': 'bg-orange-50 text-orange-600',
  Containers: 'bg-sky-50 text-sky-600',
  Flexible: 'bg-pink-50 text-pink-500',
  Prototyping: 'bg-rose-50 text-rose-600',
};

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="#f59e0b" className="shrink-0">
      <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9L10 15l-5.2 2.8 1-5.9-4.3-4.2 5.9-.8L10 1.5z" />
    </svg>
  );
}

interface TechCardProps {
  tech: Technology;
  isAdded: boolean;
  onAdd: (tech: Technology) => void;
}

export default function TechCard({ tech, isAdded, onAdd }: TechCardProps) {
  const badgeClass = BADGE_STYLES[tech.badge] ?? 'bg-gray-50 text-gray-600';

  return (
    <article
      className={`flex flex-col rounded-2xl bg-white p-5 shadow-sm transition-all ${
        isAdded
          ? 'border-2 border-pink-300 shadow-pink-100'
          : 'border border-gray-100 shadow-gray-100 hover:shadow-md'
      }`}
    >
      <div className="flex items-center justify-between">
        <img
          src={tech.icon}
          alt={`${tech.name} logo`}
          className="h-9 w-9 object-contain"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeClass}`}>{tech.badge}</span>
      </div>

      <h3 className="mt-4 text-lg font-bold text-gray-900">{tech.name}</h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-gray-500">{tech.description}</p>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5 text-xs text-gray-500">
        <span className="rounded-md bg-gray-100 px-2.5 py-1 font-medium text-gray-600">{tech.category}</span>
        <span>{tech.difficulty}</span>
        <span className="flex items-center gap-1 font-semibold text-gray-700">
          <StarIcon />
          {tech.rating}
        </span>
      </div>

      <button
        type="button"
        disabled={isAdded}
        onClick={() => onAdd(tech)}
        className={`${FOCUS_RING} mt-5 w-full rounded-lg py-2.5 text-sm font-semibold transition-colors ${
          isAdded
            ? 'cursor-not-allowed border border-pink-200 bg-pink-50 text-pink-600'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </article>
  );
}
