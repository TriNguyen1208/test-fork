"use client";

import Link from "next/link";
import { FC, SVGProps } from "react";
export interface UserCategory {
  name: string;
  slug: string;
  icon?: FC<SVGProps<SVGSVGElement>>;
}

export default function UserCategoryTable({
  userCategories,
}: {
  userCategories: UserCategory[];
}) {
  return (
    <div className="relative w-60 h-120 flex flex-col bg-white border-2 border-gray-200 rounded-xl py-4 pl-4 pr-2 shadow-sm">
      <p className="text-xl font-medium">Hồ sơ</p>
      <div className="grow overflow-y-auto minimal-scrollbar">
        {userCategories.map((item, index) => {
          return (
            <ul key={index}>
              <div className="flex flex-row items-center gap-2 mt-3 font-medium">
                <svg
                  className="w-2.5 h-2.5 cursor-pointer hover:text-blue-500 transition-all duration-200 select-none"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
                <Link
                  href={`/user/${item.slug}`}
                  className="hover:text-blue-500 transition:all duration-200 select-none"
                >
                  {item.name}
                </Link>
              </div>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
