"use client";

import Image from "next/image";
import React from "react";
import { Order, Product } from "../../../../../../../shared/src/types";
import { formatCurrency } from "../../[product_slug]/components/Question";
import { CreditCard, Clock, AlertTriangle, Info, Banknote } from "lucide-react";
import RejectOrderButton from "./RejectOrderButton";

type ComponentProps = {
  order: Order;
  product: Product;
};

const PaymentStep = ({ order, product }: ComponentProps) => {
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-4 md:gap-6 py-2 md:py-4 md:px-3 sm:px-6">
      {/* Phần 1: Thông tin thanh toán đang hiển thị cho khách */}
      <div className="bg-white border border-slate-200 rounded-xl md:rounded-2xl overflow-hidden shadow-sm">
        <div className="bg-slate-50 px-4 md:px-6 py-3 md:py-4 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-teal-600 text-white flex items-center justify-center">
              <Banknote size={16} className="md:w-[18px] md:h-[18px]" />
            </div>
            <h3 className="font-bold text-slate-800 text-base md:text-lg tracking-tight">
              Thông tin thanh toán của bạn
            </h3>
          </div>
          <span className="hidden sm:block px-3 py-1 bg-teal-100 text-teal-700 text-[10px] font-bold rounded-full uppercase">
            Đang hiển thị cho người mua
          </span>
        </div>

        <div className="p-4 md:p-6 flex flex-col md:flex-row gap-5 md:gap-8">
          {/* QR Code Section */}
          <div className="flex flex-col items-center gap-2 md:gap-3 shrink-0">
            <div className="relative p-1.5 bg-white border-2 border-dashed border-slate-200 rounded-xl">
              <Image
                src="/seller-QR.jpg"
                alt="QR thanh toán"
                width={160}
                height={160}
                className="rounded-lg w-[140px] h-[140px] md:w-[180px] md:h-[180px]"
              />
            </div>
            <p className="text-[10px] md:text-[11px] font-bold text-slate-400 uppercase tracking-wide">
              Mã QR nhận tiền của bạn
            </p>
          </div>

          {/* Bank Details Section */}
          <div className="flex-1 w-full space-y-3 md:space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 md:p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-[10px] md:text-[11px] text-slate-500 uppercase font-bold tracking-wider mb-0.5">
                  Số tài khoản nhận
                </p>
                <p className="font-mono text-base md:text-xl text-slate-800 font-bold select-all">
                  1027329108
                </p>
              </div>
              <div className="p-3 md:p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-[10px] md:text-[11px] text-slate-500 uppercase font-bold tracking-wider mb-0.5">
                  Chủ tài khoản
                </p>
                <p className="text-sm md:text-lg text-slate-800 font-bold leading-tight truncate">
                  {product.seller.name}
                </p>
              </div>
            </div>

            <div className="p-3 md:p-4 bg-teal-50 border border-teal-100 rounded-xl flex justify-between items-center gap-2">
              <div className="flex items-center gap-2 text-teal-700 font-medium text-xs md:text-sm">
                <CreditCard size={16} className="md:w-[18px] md:h-[18px]" />
                <span>Giá trị đơn hàng:</span>
              </div>
              <span className="text-lg md:text-2xl font-black text-teal-600">
                {formatCurrency(order.price)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Phần 2: Trạng thái chờ & Hướng dẫn xử lý */}
      <div className="bg-white border border-slate-200 rounded-xl md:rounded-2xl overflow-hidden shadow-sm">
        <div className="p-4 md:p-6 flex flex-col gap-4 md:gap-6">
          <div className="flex items-start gap-3 md:gap-4">
            <div className="p-2.5 md:p-3 bg-amber-50 rounded-xl md:rounded-2xl text-amber-600 shrink-0">
              <Clock size={20} className="md:w-6 md:h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="text-base md:text-xl font-bold text-slate-800 mb-0.5 md:mb-1">
                Đang chờ người mua xác nhận
              </h4>
              <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed">
                Hệ thống sẽ tự động chuyển sang bước <b>"Chuẩn bị hàng"</b> sau
                khi người mua hoàn tất thanh toán và cung cấp địa chỉ nhận hàng.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="p-3 md:p-4 bg-slate-50 rounded-xl border border-slate-100 flex gap-3">
              <Info className="w-4 h-4 md:w-5 md:h-5 text-blue-500 shrink-0 mt-0.5" />
              <div className="text-[11px] md:text-sm text-slate-600 leading-relaxed">
                Vui lòng kiểm tra mục <b>"Trao đổi đơn hàng"</b> thường xuyên để
                giải đáp thắc mắc của khách hàng.
              </div>
            </div>

            <div className="p-3 md:p-4 bg-red-50 rounded-xl border border-red-100 flex gap-3">
              <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 text-red-500 shrink-0 mt-0.5" />
              <div className="text-[11px] md:text-sm text-red-800 space-y-1">
                <p className="font-bold uppercase text-[10px] md:text-xs">
                  Chính sách hủy đơn:
                </p>
                <p>
                  Nếu người mua không thanh toán hoặc có dấu hiệu không minh
                  bạch, bạn có quyền <b>Từ chối đơn hàng</b>.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center pt-4 md:pt-6 border-t border-slate-100">
            <div className="w-full sm:w-auto">
              <RejectOrderButton order={order} product={product} />
            </div>
            <p className="mt-3 text-[10px] md:text-[13px] text-slate-400 text-center px-4">
              Chỉ từ chối đơn hàng khi thực sự cần thiết để giữ uy tín của shop
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentStep;
