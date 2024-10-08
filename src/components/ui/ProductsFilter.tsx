import { Button } from "./button";
import { Slider } from "./slider";

interface TProductsFilterProps {
  priceRange: number | null;
  type: string;

  setPriceRange: (range: number) => void;
  setType: (category: string) => void;
  handleAddReset: () => void;
}

const options = [
  {
    name: "All",
    value: "",
  },
  { name: "Sedan", value: "Sedan" },
  { name: "SUV", value: "SUV" },
  { name: "Coupe", value: "Coupe" },
  { name: "Compact", value: "Compact" },
  { name: "Minivan", value: "Minivan" },
];

const ProductsFilter = ({
  priceRange,
  type,
  setPriceRange,
  setType,
  handleAddReset,
}: TProductsFilterProps) => {
  return (
    <div className="ProductsFilterContainer flex flex-col gap-y-6">
      <h1 className=" mb-3   font-semibold text-prime100 text-shadow-prime text-lg xsm:text-xl sm:text-3xl md:text-2xl xl:text-3xl text-shadow-blue">
        Filtered By :
      </h1>
      {/*  price range type starts   */}
      <div className="priceRange bg-gray-50 dark:bg-black100 shadow-md rounded border border-gray-300 py-2 px-4">
        <h1 className="font-medium mb-6 text-gray-800 dark:text-gray-200 ">
          Price Range :
        </h1>

        <div className="priceRangeInput">
          <Slider
            value={[priceRange ?? 0]}
            onValueChange={(value) => setPriceRange(value[0])}
            max={100}
            step={1}
            className="w-full h-2 accent-red-500 rounded-lg   "
          />

          {/* price labal   */}
          <div className="priceLabel mt-2 text-lg font-medium text-gray-800 dark:text-gray-200 flex justify-between">
            <span>0</span>
            <span>{priceRange ? priceRange : 1000}</span>
          </div>
        </div>

        {/*  */}
      </div>
      {/* price range type ends   */}

      {/* category input starts  */}

      <div className="categoryInput bg-gray-50 dark:bg-black100 shadow-md rounded border border-gray-300 py-2 px-4">
        <h1 className="font-medium mb-2 text-gray-800 dark:text-gray-200">
          Category :
        </h1>
        <ul className="text-sm font-medium text-gray-800 dark:text-gray-200">
          {options &&
            options?.map((item) => (
              <li className="w-full border-b border-gray-300">
                <div className="flex items-center ps-3">
                  <input
                    id={item?.name}
                    type="radio"
                    value={item?.value}
                    onChange={() => setType(item.value)}
                    checked={type === item.value}
                    name="list-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                  />
                  <label
                    htmlFor={item?.name}
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-200"
                  >
                    {item?.name}
                  </label>
                </div>
              </li>
            ))}
        </ul>
      </div>
      {/* * car type input ends   */}

      {/* reset btn  */}
      <div className="resetBtn w-[98%] m-auto   ">
        <Button
          className="bg-red-600 hover:bg-red-700 dark:text-gray-100 hover:shadow-md hover:scale-[1.02] active:scale-100 duration-200 w-full  "
          onClick={() => handleAddReset()}
        >
          Reset
        </Button>
      </div>
      {/* reset btn  */}

      {/*  */}
    </div>
  );
};

export default ProductsFilter;
