// Exercise:
// 1. Create a page 2
import HelloJS from "../1.1_myFirstReactComponent/02_FunctionalComponent";

const PageTwo = () => {
  const mood = "fun";
  return (
    <>
      <HelloJS mood={mood} />
    </>
  );
};
export default PageTwo;
