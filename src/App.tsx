import Skeleton from "./Components/Skeleton";

const App = () => {
  return (
    <div>
      <Skeleton width={300} anim={false} />
      <Skeleton type="round" anim="pulse" />
      <Skeleton type="react" height={500} roundness={50} anim="both" />
      <Skeleton
        type="circle"
        width={50}
        size={"100"}
        color="#001219"
        anim="slide"
      />
    </div>
  );
};

export default App;
