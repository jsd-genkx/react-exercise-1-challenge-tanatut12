// Exercise:
// 1. Create a React class component
// 2. Pass in props (short for properties), similar to passing arguments to a JavaScript function. Both providing inputs to a piece of code.
// 3. Define prop types
import React from "react";

class HelloClass extends React.Component {
  render() {
    return (
      <div className="w-full text-center">
        <div className="p-2 bg-blue-300 rounded-lg mx-64">
          <h1 className="text-[64px]">Hello, JSD7!😘</h1>
        </div>
        <p className="text-[48px]">
          The React component is created by class expression, called class
          component.
        </p>
      </div>
    );
  }
}

export default HelloClass;
