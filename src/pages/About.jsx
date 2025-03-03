export default function About() {
  return (
    <div className="relative grid min-h-screen grid-cols-[1fr_2.5rem_auto_2.5rem_1fr] grid-rows-[1fr_1px_auto_1px_1fr] bg-white [--pattern-fg:var(--color-gray-950)]/5 dark:bg-gray-950 dark:[--pattern-fg:var(--color-white)]/10">
      <div className="col-start-3 row-start-3 flex max-w-lg flex-col bg-gray-100 p-2 dark:bg-white/10">
        <div className="rounded-xl bg-white p-10 text-sm/7 text-gray-700 dark:bg-gray-950 dark:text-gray-300">
          <div className="space-y-6">
            <h2>About Me Comp</h2>
            <div className="container mx-auto px-4 py-4 max-w-xs">
              <img
                src="./public/drawingSelf1.jpg"
                alt="self"
                className="flex-shrink-0 object-cover rounded-sm sm:h-1/2 bg-gray-500 aspect-auto"
              />
              <div>
                {/* Add additional content about yourself here */}
                <h3>Hello! I am [Your Name], a passionate developer...</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
