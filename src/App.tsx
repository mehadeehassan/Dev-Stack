import { useEffect, useState } from "react";
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import TechnologiesSection from "./components/TechnologiesSection"
import type { Technology } from "./Types/Types";
import { toast } from "react-toastify";



const App = () => {


  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isCancelled = false;

    async function loadTechnologies() {
      try {
        setIsLoading(true);
        const response = await fetch('/data/technologies.json');
        if (!response.ok) {
          throw new Error('Failed to load technology data.');
        }
        const data: Technology[] = await response.json();
        if (!isCancelled) {
          setTechnologies(data);
          setError(null);
        }
      } catch (err) {
        if (!isCancelled) {
          setError(err instanceof Error ? err.message : 'Something went wrong.');
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    }

    loadTechnologies();

    return () => {
      isCancelled = true;
    };
  }, []);

  const [stack, setStack] = useState<Technology[]>([]);

  function handleAdd(tech: Technology) {
    const alreadyAdded = stack.some((item) => item.id === tech.id);
    if (alreadyAdded) {
      toast.warn(`${tech.name} is already in your stack.`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack.`);
  }

  function handleRemove(id: string) {
    const removed = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    if (removed) {
      toast.info(`${removed.name} removed from your stack.`);
    }
  }

  function handleRemoveAll() {
    if (stack.length === 0) return;
    setStack([]);
    toast.info('Your stack has been cleared.');
  }
  return (
    <div className="min-h-screen bg-white">
      <NavBar/>
      <main>
        <Hero/>
        <TechnologiesSection
          technologies={technologies}
          isLoading={isLoading}
          error={error}
          stack={stack}
          onAdd={handleAdd}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      </main>
    </div>
  )
}

export default App
