// Exercise:
// 1. Create a page 1
import HelloReact from "../1.1_myFirstReactComponent/01_FunctionComponent";

const PageOne = () => {
  const mood = "fun";
  return (
    <>
      <HelloReact mood={mood} />
    </>
  );
};
export default PageOne;
