function Stats() {
  return (
    <div className="grid grid-cols-1 p-8 rounded-3xl bg-green-950 divide-y divide-amber-300 md:divide-y-0 md:divide-x md:divide-amber-300 md:grid-cols-3 gap-8 text-center">
      <div className="py-4">
        <h1 className="text-3xl font-bold text-amber-300">5000+</h1>
        <p className="text-gray-100">Healthy Chickens</p>
      </div>
      <div className="py-4">
        <h1 className="text-3xl font-bold text-amber-300">2000+</h1>
        <p className="text-gray-100">Eggs Produced Weekly</p>
      </div>
      <div className="py-4">
        <h1 className="text-3xl font-bold text-amber-300">15+</h1>
        <p className="text-gray-100">Years in Operation</p>
      </div>
    </div>
  );
}

export default Stats;
