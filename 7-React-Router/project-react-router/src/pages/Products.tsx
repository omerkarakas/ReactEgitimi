import { useSearchParams } from "react-router-dom";
import ProductFilter from "../components/ProductFilter";
import { products } from "../constants";

const Products = () => {
  const [searchParams] = useSearchParams();

  const tip = searchParams.get("tip");
  const sarf = searchParams.get("sarf");

  return (
    <div className="flex flex-col gap-6">
      {products
        .filter((item) => {
          return item.tip === tip && (sarf ? item?.sarf === sarf : true);
        })
        .map((item, index) => (
          <div key={index}>{item.isim}</div>
        ))}

      <ProductFilter />
    </div>
  );
};

export default Products;
