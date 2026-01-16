"use client";

import React, { useState, useTransition } from "react";
import {
  CreateRating,
  Order,
  Product,
  UserRating,
} from "../../../../../../../shared/src/types";
import { RatingHook } from "@/hooks/useRating";
import OrderHook from "@/hooks/useOrder";
import { useRouter } from "next/navigation";
import { CircleMinus, AlertTriangle } from "lucide-react"; // Thêm AlertTriangle cho popup
import { ConfirmPopup } from "@/components/ConfirmPopup";
import LoadingSpinner from "@/components/LoadingSpinner";

const RejectOrderButton = ({
  order,
  product,
}: {
  order: Order;
  product: Product;
}) => {
  const router = useRouter();
  const [rejectConfirmModal, setRejectConfirmModal] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();

  const { data: rating } = RatingHook.useGetOneRating(
    order?.seller?.id,
    order?.buyer?.id
  ) as {
    data: UserRating;
    isLoading: boolean;
  };

  const { mutate: sellerRejectOrder } = OrderHook.useSellerRejectOrder();
  const { mutate: createRating } = RatingHook.useCreateRating();
  const { mutate: updateRating } = RatingHook.useUpdateRating();

  const handleRejectOrder = () => {
    if (!order || !order.product_id || !order.buyer?.id) return;
    setRejectConfirmModal(false);

    sellerRejectOrder(
      {
        productId: Number(order.product_id),
        buyerId: order.buyer.id,
      },
      {
        onSuccess: () =>
          startTransition(() => router.push(`/product/sell/${product.slug}`)),
      }
    );

    if (!order.buyer.id || !order.seller.id) return;
    const newRating: CreateRating & { silent: boolean } = {
      ratee: order.buyer,
      rating: -1,
      comment: "Người thắng không thanh toán",
      silent: true,
    };

    if (!rating) createRating(newRating);
    else updateRating(newRating);
  };

  if (isPending)
    return (
      <div className="fixed inset-0 z-[999] bg-white/80 backdrop-blur-sm flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );

  return (
    <div className="w-full">
      <div className="flex justify-center md:justify-end w-full">
        <button
          onClick={() => setRejectConfirmModal(true)}
          className="w-full md:w-auto flex items-center justify-center gap-2 border border-red-200 py-2.5 md:py-2 px-6 rounded-xl md:rounded-lg bg-white text-red-600 hover:bg-red-50 hover:border-red-500 transition-all cursor-pointer shadow-sm active:scale-95"
        >
          <CircleMinus className="w-4 h-4 md:w-5 md:h-5" />
          <span className="text-sm md:text-md font-bold uppercase tracking-tight md:tracking-normal">
            Hủy đơn hàng
          </span>
        </button>
      </div>

      <ConfirmPopup
        isOpen={rejectConfirmModal}
        onClose={() => setRejectConfirmModal(false)}
        selected={{
          id: 0,
          contentHtml: (
            <div className="flex flex-col gap-3 md:gap-4 py-2">
              <div className="flex items-center gap-2 text-red-600 mb-1">
                <AlertTriangle className="w-5 h-5 shrink-0" />
                <h4 className="font-bold text-base md:text-lg">
                  Xác nhận hủy đơn
                </h4>
              </div>

              <div className="space-y-3 text-slate-600 text-sm md:text-base leading-relaxed">
                <p>
                  Bạn có chắc chắn muốn hủy đơn hàng với{" "}
                  <b>{order.buyer.name}</b>?
                </p>
                <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                  <p className="text-red-800 text-xs md:text-sm font-medium">
                    Hệ thống sẽ tự động gửi đánh giá tiêu cực:
                    <i className="block mt-1">"Người mua không thanh toán"</i>
                  </p>
                </div>
                <p className="text-[11px] md:text-xs text-slate-400 italic">
                  * Lưu ý: Hành động này sẽ giải phóng sản phẩm và không thể
                  hoàn tác.
                </p>
              </div>
            </div>
          ),
        }}
        onConfirm={handleRejectOrder}
      />
    </div>
  );
};

export default RejectOrderButton;
