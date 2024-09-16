import { useGetAllCarsQuery } from "@/redux/features/cars/car.api";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import Wrapper from "@/components/shared/Wrapper";
import { Input } from "@/components/ui/input";
import { NoProduct, ProductsFilter } from "@/components/ui";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TCar } from "@/types/globalTypes";
import FeaturedCarCard from "@/components/ui/FeatureCarCard";
import { useParams } from "react-router-dom";

const CarList = () => {
  const { location } = useParams();

  const [searchTerm, setSearchTerm] = useState("");
  const [pricePerHour, setpricePerHour] = useState<number | null>(null);
  const [type, setType] = useState("");
  const [sort, setSortBy] = useState("");

  const [params, setParams] = useState<Record<string, unknown> | undefined>(
    undefined
  );
  const [isXl, setIsXl] = useState(false);

  const { data: allCars, isLoading } = useGetAllCarsQuery(params);

  // ! for reseting filter
  const handleAddReset = () => {
    setParams(undefined);
    setSearchTerm("");
    setpricePerHour(null);
    setSortBy("");
    setType("");

    const newParam: Record<string, unknown> = {};

    setParams(newParam);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsXl(window.innerWidth >= 1080);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //   ! use effect to check if there is any location query location
  useEffect(() => {
    const updateParam = () => {
      const newParam: Record<string, unknown> = {};
      if (location) {
        newParam.location = location;
      }
      setParams(newParam);
    };
    updateParam();
  }, [location]);

  //! Use effect to track param value
  useEffect(() => {
    const updateParam = () => {
      const newParam: Record<string, unknown> = {};

      if (searchTerm) {
        newParam.searchTerm = searchTerm;
      }
      if (location) {
        newParam.location = location;
      }
      if (pricePerHour) {
        newParam.pricePerHour = pricePerHour;
      }

      if (type) {
        newParam.type = type;
      }

      if (sort) {
        newParam.sort = sort;
      }

      setParams(newParam);
    };

    updateParam();
  }, [searchTerm, pricePerHour, type, sort, location]);

  if (isLoading) {
    return <Loading />;
  }

  console.log(params);

  return (
    <div className="CarListContainer py-6 ">
      <Wrapper className="CarListWrapper">
        {/* search section   */}
        <div className="searchSection bg-gray-50 border border-gray-300  w-[60%] m-auto py-1 px-5 rounded-full flex justify-center items-center  mb-6  ">
          <Input
            type="text"
            placeholder="Looking for...."
            className=" border-none outline-none "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {/* search section ends  */}

        {/* content body starts  */}
        <div className="contentBody  flex justify-between gap-x-3 ">
          {/* left section starts  */}

          {/* filter section   */}
          <div className="contentLeft w-0 xl:w-[30%] hidden xl:block  ">
            <ProductsFilter
              priceRange={pricePerHour}
              type={type}
              setType={setType}
              setPriceRange={setpricePerHour}
              handleAddReset={handleAddReset}
            />
            {/*  */}
          </div>
          {/* left section ends  */}

          {/* right section starts  */}
          {/* products section  */}
          <div className="contentRight w-[100%] xl:w-[70%] flex flex-col gap-y-4 ">
            {/* content top section  */}
            <div className="contentTop bg-gray-50 shadow-md rounded border border-gray-300 py-2 px-4 flex justify-between items-center ">
              {/* Conditional rendering of ProductsFilter */}
              {!isXl ? (
                <Sheet>
                  <SheetTrigger>
                    <div className="filterMenuIcon flex justify-between items-center gap-x-1 cursor-pointer ">
                      {/* icon starts  */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
                        />
                      </svg>

                      {/* icon ends */}
                      <p className=" font-medium  ">Filter</p>
                    </div>
                  </SheetTrigger>
                  <SheetContent>
                    <ProductsFilter
                      priceRange={pricePerHour}
                      type={type}
                      setType={setType}
                      setPriceRange={setpricePerHour}
                      handleAddReset={handleAddReset}
                    />
                  </SheetContent>
                </Sheet>
              ) : (
                <h1 className=" text-lg font-medium ">Product name </h1>
              )}

              {/* sort input section starts  */}
              <div className="sortSection  flex  justify-between items-center gap-x-1 ">
                <p className="text-gray-600 "> sort by : </p>

                {/* input section  */}
                <Select
                  value={sort}
                  onValueChange={(value) => setSortBy(value)}
                >
                  <SelectTrigger className="w-[14rem]  outline-none border-gray-400 ring-0 focus:ring-0  ">
                    <SelectValue placeholder="sort by price" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pricePerHour">Low to High</SelectItem>
                    <SelectItem value="-pricePerHour">High to Low </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {/* sort input section ends  */}

              {/*  */}
            </div>
            {/* content top section ends */}

            {/* products content starts  */}
            <div className="productsContent  py-3 px-4 ">
              {/* all products  */}
              <div className="allProducts grid grid-cols-1 sm:grid-cols-2 xmd:grid-cols-3 gap-x-5 gap-y-8 ">
                {allCars?.data?.length === 0 ? (
                  <NoProduct />
                ) : (
                  allCars?.data &&
                  allCars?.data?.map((item: TCar, ind: number) => (
                    <FeaturedCarCard carData={item} key={ind} />
                  ))
                )}
              </div>
            </div>
            {/* products content ends */}

            {/*  */}
          </div>
          {/* right section ends  */}

          {/*  */}
        </div>
        {/* content body ends   */}
      </Wrapper>
    </div>
  );
};

export default CarList;
