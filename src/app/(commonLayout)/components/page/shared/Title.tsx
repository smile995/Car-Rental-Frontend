const Title = ({
  heading,
  subheading,
}: {
  heading: string;
  subheading: string;
}) => {
  return (
    <div className="border-b-4 md:w-1/2 lg:w-1/3 mx-auto border-yellow-600 my-5 py-3 rounded-2xl text-center">
      <h1 className="text-3xl sm:text-xl font-bold text-red-500">{heading}</h1>
      <h4 className="text-xl text-gray-500  my-2">
       {subheading}
      </h4>
    </div>
  );
};

export default Title;
