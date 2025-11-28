"use client";

import React from "react";
import { Product, ProductPreview } from "../../../../shared/src/types";
import ProductCard from "@/components/ProductCard";
import FavoriteHook from "@/hooks/useFavorite";
import OrderHook from "@/hooks/useOrder";

const FavoriteProductPage = () => {
  const { data, isLoading, error } = OrderHook.useOrderChat(1) as {
    data: any;
    isLoading: boolean;
    error: any;
  };

  console.log(data);

  return (
    <div className="background-user">
      <div className="text-2xl font-medium">Sản phẩm yêu thích</div>
      {isLoading && <div>Loading</div>}
      {error && <div>{error.message}</div>}
      {!isLoading && !error && (
        <div className="mt-2 grid grid-cols-5 gap-3">
          {<pre>{JSON.stringify(data, null, 2)}</pre>}
          {/* {favoriteProducts.data.favorite_products.map((item) => {
            return (
              <div key={item.id} className="mt-3">
                <ProductCard key={item.id} product={item} />
              </div>
            );
          })} */}
        </div>
      )}
    </div>
  );
};

export default FavoriteProductPage;
