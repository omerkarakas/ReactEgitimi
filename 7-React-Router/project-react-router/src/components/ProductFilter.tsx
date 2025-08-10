import { useSearchParams } from "react-router-dom";

const ProductFilter: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateTip = (newCategory: string) => {
    searchParams.set("tip", newCategory);
    setSearchParams(searchParams);
  };

  return (
    <div>
      <button onClick={() => updateTip("a")}>Tip A</button>
      <button onClick={() => updateTip("b")}>Tip B</button>
    </div>
  );
};

export default ProductFilter;
