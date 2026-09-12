import { FOCUS_RING } from '../Theme/Theme';
import type { Technology } from '../Types/Types';

function RemoveIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

interface StackSidebarProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export default function StackSidebar({ stack, onRemove, onRemoveAll }: StackSidebarProps) {
  const count = stack.length;

  return (
    <aside className="sticky top-24 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm shadow-gray-100">
      <h3 className="text-lg font-bold text-gray-900">Your Stack</h3>
      <p className="mt-1 text-sm text-gray-400">
        {count === 0 ? 'No technologies selected yet.' : `${count} Technology Selected`}
      </p>

      <div className="mt-4 flex flex-col gap-2.5">
        {count === 0 ? (
          <div className="rounded-xl border border-dashed border-gray-200 py-10 text-center text-sm text-gray-400">
            Your stack is empty.
          </div>
        ) : (
          stack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center justify-between gap-3 rounded-xl border border-pink-200 bg-pink-50/40 px-3 py-2.5"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <img src={tech.icon} alt="" className="h-7 w-7 shrink-0 object-contain" />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-gray-900">{tech.name}</p>
                  <p className="text-xs text-gray-400">{tech.category}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => onRemove(tech.id)}
                aria-label={`Remove ${tech.name} from stack`}
                className={`${FOCUS_RING} shrink-0 text-gray-400 hover:text-pink-600`}
              >
                <RemoveIcon />
              </button>
            </div>
          ))
        )}
      </div>

      {count > 0 && (
        <button
          type="button"
          onClick={onRemoveAll}
          className={`${FOCUS_RING} mt-4 w-full rounded-lg border border-red-200 py-2.5 text-sm font-semibold text-red-500 transition-colors hover:bg-red-50`}
        >
          Remove All
        </button>
      )}
    </aside>
  );
}
