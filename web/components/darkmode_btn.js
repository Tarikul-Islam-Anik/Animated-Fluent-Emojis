import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";
export default function DarkMode() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };
  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="mt-3 flex items-center justify-center rounded-lg bg-slate-100 p-4 ring-slate-300 transition-all hover:ring-2 
      dark:bg-slate-700 dark:ring-slate-600 sm:mt-0 sm:ml-2"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <SunIcon className="h-5 w-5 text-slate-600/75 dark:text-slate-400" />
      ) : (
        <MoonIcon className="h-5 w-5 text-slate-600/75 dark:text-slate-400" />
      )}
    </button>
  );
}
