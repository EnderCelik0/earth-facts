export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-28 font-antonio text-white">
      <h1 className="text-antonio-md font-bold">Welcome to the Planet Facts</h1>
      <p className="text- font-semibold">
        Explore the planets and their unique features. Please select a planet
        from the list above.
      </p>

      <img src="/src/assets/planet-earth.svg" alt="planet-earth-img" />
    </div>
  );
}
