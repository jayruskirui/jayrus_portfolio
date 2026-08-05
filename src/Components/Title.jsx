

const Title = ({ title, subtitle, center = true }) => {
  return (
    <div className={`${center ? "text-center" : "text-left"} mb-12`}>
      <p className="text-sm uppercase tracking-[4px] text-gray-400 font-medium">
        {subtitle}
      </p>

      <h2 className="mt-3 text-4xl md:text-5xl font-medium leading-tight text-sky-500">
        {title}
      </h2>
    </div>
  );
};

export default Title;