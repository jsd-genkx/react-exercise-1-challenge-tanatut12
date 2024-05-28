// Exercise:
// 1. Create a React function component
// 2. Pass in props (short for properties), similar to passing arguments to a JavaScript function. Both providing inputs to a piece of code.
// 3. Define prop types

function HelloReact({ mood }) {
  return (
    <div className="w-full text-center">
      <div className="p-2 bg-blue-300 rounded-lg mx-64 mt-4">
        <h1 className="text-[64px]">Hello React🐱‍🐉</h1>
      </div>
      <p className="text-[48px]">react was {mood}</p>
    </div>
  );
}
export default HelloReact;
