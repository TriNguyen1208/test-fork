"use client";

import { ProductCategoryTree } from "../../../shared/src/types/index";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";

// ... (Giữ nguyên phần Icons: ChevronDownIcon, ChevronRightIcon) ...
const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19.5 8.25-7.5 7.5-7.5-7.5"
    />
  </svg>
);
const ChevronRightIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.25 4.5 7.5 7.5-7.5 7.5"
    />
  </svg>
);

// ... (Giữ nguyên SortDropdown) ...
function SortDropdown() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentSort = searchParams.get("sort");

  const handleSort = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", value);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="relative w-full">
      <select
        className="appearance-none w-full bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 pr-8 cursor-pointer transition-colors hover:bg-white"
        value={currentSort || "ascending-price"}
        onChange={(e) => handleSort(e.target.value)}
      >
        <option value="ascending-price">Giá tăng dần</option>
        <option value="descending-price">Giá giảm dần</option>
        <option value="expiring-soon">Sắp kết thúc</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
        <ChevronDownIcon className="h-4 w-4" />
      </div>
    </div>
  );
}

// --- Main Component ---
export default function ProductCategoryTable({
  productCategories,
  isMobile = false, // Thêm prop này để style linh hoạt
}: {
  productCategories: ProductCategoryTree[];
  isMobile?: boolean;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(
    new Set()
  );

  const shouldShowSort =
    pathname.startsWith("/product/category") &&
    pathname !== "/product/category";

  const toggleCategory = (category_id: number) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(category_id)) {
        newSet.delete(category_id);
      } else {
        newSet.add(category_id);
      }
      return newSet;
    });
  };

  return (
    // CHỈNH SỬA: Thay w-64 cố định bằng w-full, chiều cao chỉ tính toán trên Desktop
    <aside className={`flex flex-col gap-4 ${isMobile ? "w-full" : "w-64"}`}>
      {/* Block 1: Sắp xếp */}
      {shouldShowSort && (
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
            Sắp xếp
          </h3>
          <SortDropdown />
        </div>
      )}

      {/* Block 2: Danh mục */}
      <div
        className={`bg-white border border-gray-200 rounded-xl py-4 shadow-sm flex flex-col 
          ${
            isMobile
              ? "h-auto border-none shadow-none"
              : "h-[calc(100vh-150px)] sticky top-20"
          } 
        `}
      >
        {/* Header Danh mục - Chỉ hiển thị trên Desktop vì Mobile đã có Header của Drawer */}
        <div
          className="px-5 pb-4 border-b border-gray-100 cursor-pointer group"
          onClick={() => router.push("/category")}
        >
          <h2
            className={`text-lg font-bold transition-colors ${
              pathname === "/category"
                ? "text-blue-600"
                : "text-gray-800 group-hover:text-blue-600"
            }`}
          >
            Danh mục
          </h2>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-3 space-y-1 custom-scrollbar">
          {productCategories.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const isExpanded = expandedCategories.has(item.id) && hasChildren;

            return (
              <div key={item.id} className="select-none">
                {/* Parent Item */}
                <div
                  className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 hover:bg-gray-100 text-gray-700`}
                  onClick={() => hasChildren && toggleCategory(item.id)}
                >
                  <span className="text-sm font-medium">{item.name}</span>
                  {hasChildren && (
                    <ChevronRightIcon
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                        isExpanded ? "rotate-90" : ""
                      }`}
                    />
                  )}
                </div>

                {/* Children Items (Sub-menu) */}
                {isExpanded && (
                  <div className="relative ml-3 mt-1 pl-3 border-l-2 border-gray-100 space-y-1">
                    {item.children?.map((child) => {
                      const isChildActive =
                        pathname === `/category/${child.slug}`;

                      return (
                        <Link
                          key={child.id}
                          href={`/product/category/${child.slug}?sort=ascending-price`}
                          className={`block px-3 py-1.5 text-sm rounded-md transition-colors duration-200
                            ${
                              isChildActive
                                ? "text-blue-600 bg-blue-50 font-medium"
                                : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                            }
                          `}
                        >
                          {child.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
