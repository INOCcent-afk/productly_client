import React, {
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import ShoppingBagIcon from "../../icons/ShoppingBagIcon";
import { StyledButtonOutlined } from "../../styles/styled-elements/button-elements";
import {
  StyledBody,
  StyledMainTitle,
  StyledTitle,
} from "../../styles/styled-elements/common-elements";
import {
  StyledBox,
  StyledMainContainer,
  StyledPanelDominantLeft,
} from "../../styles/styled-elements/container-elements";
import SearchInput from "../../ui/SearchInput";
import { darkYellow } from "../../utils/theme/colors";
import debounce from "lodash.debounce";
import {
  useProductsData,
  useProductsSearchedData,
} from "../../utils/reactQueryHooks/productsQueryHooks";
import CubeProduct from "../../ui/products/CubeProduct";
import Masonry from "react-masonry-css";

const ProductsPage = () => {
  const [searchProduct, setSearchProduct] = useState("");
  const [output, setOutput] = useState("");
  const debounced = useRef(debounce((value) => setOutput(value), 600));
  const [isInputFocus, setIsInputFocus] = useState(false);

  const updateProductValue = useCallback(
    (event: SyntheticEvent<HTMLInputElement>) => {
      setSearchProduct(event.currentTarget.value);
      debounced.current(event.currentTarget.value);
    },
    []
  );

  const clearProductValue = useCallback(() => {
    setSearchProduct("");
    debounced.current("");
  }, []);

  const { data, isFetching } = useProductsSearchedData(
    searchProduct,
    output ? true : false,
    output,
    true
  );

  const { data: ProductsData, isFetching: isProductsFetching } =
    useProductsData();

  return (
    <StyledMainContainer>
      <StyledPanelDominantLeft gridGap={30}>
        <div className="">
          <div className="flex items-center gap-3">
            <ShoppingBagIcon width={60} height={60} fill={darkYellow} />
            <StyledMainTitle color="#000">Products</StyledMainTitle>
          </div>
          <div className="mb-8 mt-10 relative w-full">
            <SearchInput
              value={searchProduct}
              onChangeEvent={updateProductValue}
              onFocusEvent={() => setIsInputFocus(true)}
              onBlurEvent={() => setIsInputFocus(false)}
              closeButtonEvent={clearProductValue}
              placeholder="search products..."
              additonalInputClassname="w-full !rounded-md"
            />
          </div>
          <StyledBox className="p-5">
            {searchProduct && isFetching && (
              <h1 className="text-center">Loading Data</h1>
            )}

            {!searchProduct && isProductsFetching && (
              <h1 className="text-center">Loading Data of Products</h1>
            )}

            {output && !isFetching && (
              <Masonry
                breakpointCols={{ default: 3, 768: 1, 1024: 2 }}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {data && data.products && data.products.length ? (
                  data.products.map((product) => (
                    <CubeProduct
                      key={product.product_id}
                      productName={product.product_name}
                      rating={product.average_rating}
                      reviewsCount={product.count}
                      id={product.product_id}
                    />
                  ))
                ) : (
                  <h1>NO data</h1>
                )}
              </Masonry>
            )}

            {!output && !isProductsFetching && (
              <Masonry
                breakpointCols={{ default: 3, 768: 1, 1024: 2 }}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {ProductsData &&
                  ProductsData.map((product) => (
                    <CubeProduct
                      key={product.product_id}
                      productName={product.product_name}
                      rating={product.average_rating}
                      reviewsCount={product.count}
                      id={product.product_id}
                    />
                  ))}
              </Masonry>
            )}
          </StyledBox>
        </div>
        <div className="pt-24 hidden lg:block">
          <StyledBox className="flex flex-col gap-2 p-5">
            <StyledTitle className="!text-3xl">
              Can't Find A specific Product?
            </StyledTitle>
            <StyledBody>Contribute to our database</StyledBody>
            <StyledButtonOutlined>Add a Product</StyledButtonOutlined>
          </StyledBox>
        </div>
      </StyledPanelDominantLeft>
    </StyledMainContainer>
  );
};

export default ProductsPage;
