import React from "react";
import Typewriter from "typewriter-effect";

function Greeting() {
  function greetByTime() {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning,";
    if (hour < 18) return "Good Afternoon,";
    return "Good Evening,";
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <p className="text-sky-300 text-3xl font-medium">
        {greetByTime()} Welcome to my portfolio
      </p>
      <h2 className="text-3xl md:text-5xl lg:text-4xl font-bold text-white">
        I'm  Jayrus Kiprotich
      </h2>

      <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass text-2xl font-medium text-sky-300 mt-4">
        <span className="w-2 h-2 bg-sky-300 rounded-full animate-pulse" />
        <Typewriter
          options={{
            strings: ["Software Developer", "Front-end", "Back-end"],
            autoStart: true,
            loop: true,
          }}
        />
      </span>
    </div>
  );
}

export default Greeting;