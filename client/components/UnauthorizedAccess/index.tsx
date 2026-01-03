"use client";

import Link from "next/link";
import { ShieldAlert, Home } from "lucide-react";

const UnauthorizedAccess = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[70vh] text-center p-6 animate-in fade-in duration-700">
      {/* Icon minh họa */}
      <div className="mb-3 p-5 bg-red-50 rounded-full">
        <ShieldAlert className="w-16 h-16 text-red-500" />
      </div>

      {/* Mã lỗi và Tiêu đề */}
      <h1 className="text-7xl font-bold text-red-500 ">401</h1>

      <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mt-4">
        Truy cập bị từ chối
      </h2>

      {/* Nội dung thông báo */}
      <p className="text-slate-500 mt-3 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
        Rất tiếc, bạn không có quyền truy cập vào nội dung này. Vui lòng kiểm
        tra lại tài khoản của bạn.
      </p>

      {/* Nút hành động */}
      <div className="mt-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95"
        >
          <Home className="w-4 h-4" />
          Trở về trang chủ
        </Link>
      </div>
    </div>
  );
};

export default UnauthorizedAccess;
