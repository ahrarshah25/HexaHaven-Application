const LeftText = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-slate-900 leading-tight">
        Friends
        <br />
        <span className="text-blue-600">& Share Your World</span>
      </h1>

      <p className="mt-6 text-lg text-slate-500 max-w-xl">
        A modern social platform designed for real connections, instant sharing,
        and beautiful conversations.
      </p>

      <div className="mt-8">
        <button onClick={()=> { window.location.href = "/signup" }} className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LeftText;
