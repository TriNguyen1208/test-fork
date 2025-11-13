import Link from "next/link";

export default function ProductPage() {
  return <div>
    <p>This is Product Detail page.</p>
    <Link href='/' className="text-blue-500 hover:font-bold transition-all duration-200">Click here to go back</Link>
  </div>
}