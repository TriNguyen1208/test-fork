"use client"

import ProductCard from '@/components/ProductCard';
import React from 'react'
import { useEffect, useState } from 'react'
import { Product } from '../../shared/src/types';

const mockProduct : Product = {
  id: 1,
  slug: "iphone-17-pro-max-limited",
  seller: {
    id: 1,
    name: "Đoàn Phạm Minh Triết",
    profile_img: ""
  },
  category_id: 1,
  main_image: "https://cdn2.fptshop.com.vn/unsafe/828x0/filters:format(webp):quality(75)/iphone_17_pro_slide_1_c27e78032a.jpg",
  extra_images: [],
  name: "iPhone 17 Pro Max Limited",
  initial_price: 20000,
  buy_now_price: 250000,
  current_price: 52000,
  top_bidder: {
    id: 2,
    name: "Hùy*******u",
    profile_img: ""
  },
  bid_count: 5,
  end_time: new Date("2025-11-12T06:20:00Z"),
  description: "This is a fucking good product",
  auto_extend: true,
  price_increment: 1000,
  created_at: new Date("2025-11-11T10:00:00Z"),
  updated_at: null
};

function page() {
  return <div className="flex flex-row flex-wrap p-4 gap-2">
    <ProductCard product={mockProduct}/>
    <ProductCard product={mockProduct}/>
    <ProductCard product={mockProduct}/>
    <ProductCard product={mockProduct}/>
    <ProductCard product={mockProduct}/>
  </div>
}

export default page;
// "/category/[:...category_slugs]/product/[:product_slug]"
// "/user/info"
// "/user/rating"
// "/user/favourite_products"
// "/user/bidding_products"
// "/user/winning_products"
// "/user/seller_role"
// "/user/selling_products"
// "/user/sold_products"

