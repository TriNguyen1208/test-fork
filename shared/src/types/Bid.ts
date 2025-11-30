import { User } from "./User";
import { Product } from "./Product";
export type BidLog = {
  id: number;
  user: Pick<User, "id" | "name">;
  price: number;
  product_id: number;
  created_at?: Date;
  updated_at?: Date;
};
export type CreateBidLog = {
  user_id: number;
  price: number;
  product_id: number;
};

export type BidHistory = {
  product_id: number;
  logs: BidLog[];
};

export type UserBid = Pick<
  Product,
  "id" | "name" | "current_price" | "main_image"
> &
  Pick<BidLog, "price"> & {
    max_price: number | null;
    created_at: Date
  };
