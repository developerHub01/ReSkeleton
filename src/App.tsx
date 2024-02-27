import Skeleton from "./Components/Skeleton";

const App = () => {
  return (
    <div>
      <Skeleton width={300} />
      <Skeleton type="round" />
      <Skeleton type="react" height={500} roundness={50} />
      <Skeleton type="circle" width={50} size={"100"} color="#001219" />
    </div>
  );
};

export default App;
