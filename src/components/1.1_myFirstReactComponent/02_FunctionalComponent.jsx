// Exercise:
// 1. Create a React functional component
// 2. Pass in props (short for properties), similar to passing arguments to a JavaScript function. Both providing inputs to a piece of code.
// 3. Define prop types

const HelloJS = ({ mood }) => {
  return (
    <div className="w-full text-center">
      <div className="p-2 bg-blue-300 rounded-lg mx-48 mt-4">
        <h1 className="text-[64px]">Hello Javascript😒</h1>
      </div>
      <p className="text-[48px]">Javascript was {mood}</p>
    </div>
  );
};
export default HelloJS;
