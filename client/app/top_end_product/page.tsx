"use client";
import { ArrowRight } from "@/components/icons";
import Link from "next/link";
import { ProductPreview } from "../../../shared/src/types";
import ProductCard from "@/components/ProductCard";
import ProductHook from "@/hooks/useProduct";
import LoadingSpinner from "@/components/LoadingSpinner";

function Page() {
  const per_page = 15;
  const {
    data: topEndingSoonProduct,
    isLoading: isLoadingTopEndingSoonProduct,
    error: errorTopEndingSoonProduct,
  } = ProductHook.useGetTopEndingSoonProduct(per_page, 2);

  if (isLoadingTopEndingSoonProduct)
    return (
      <>
        <LoadingSpinner />
      </>
    );
  if (errorTopEndingSoonProduct) {
    return <>{errorTopEndingSoonProduct.message};</>;
  }
  const data = topEndingSoonProduct as ProductPreview[];

  // const pageItems: PageItem[] = [
  //   {
  //     title: "Sản phẩm sắp kết thúc",
  //     href: "/top_end_product",
  //     products: productTop.topEndingSoonProducts,
  //   },
  //   {
  //     title: "Sản phẩm nhiều lượt đấu giá nhất",
  //     href: "/top_bid_product",
  //     products: productTop.topBiddingProducts,
  //   },
  //   {
  //     title: "Sản phẩm giá cao nhất",
  //     href: "/top_price_product",
  //     products: productTop.topPriceProducts,
  //   },
  // ];

  return (
    <>
      <div>
        <div className="text-center w-full">
          <h1 className="text-4xl">Chào mừng đến AuctionHub</h1>
          <div className="mt-2 text-gray-500">
            Tìm kiếm và đấu giá hàng triệu sản phẩm từ những người bán uy tín
          </div>
        </div>

        <div>
          <div className="mt-15">
            <div className="flex justify-between font-medium">
              <div className=" text-2xl">Sản phẩm sắp kết thúc</div>
              <Link
                href={"/"}
                className="text-blue-500 flex items-center  gap-2"
              >
                <div className="text-[15px]">Xem tất cả</div>
                <ArrowRight className="w-5 h-5 mt-0.5" />
              </Link>
            </div>
          </div>
          <div className="mt-2 grid grid-cols-5 gap-3">
            {data.map((item, index) => {
              return (
                <div key={index} className="mt-3">
                  <ProductCard product={item} isFavorite={false} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default Page;
// "/category/[:...category_slugs]/product/[:product_slug]"
// "/user/info"
// "/user/rating"
// "/user/favourite_products"
// "/user/bidding_products"
// "/user/winning_products"
// "/user/seller_role"
// "/user/selling_products"
// "/user/sold_products"
