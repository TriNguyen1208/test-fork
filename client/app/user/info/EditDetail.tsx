import React from "react"
import Avatar from "./Avatar"

export default function EditDetail() {
  return <div>
    <section className="flex flex-col gap-5 mt-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="avatar" className="font-medium text-sm">Ảnh đại diện</label>
        <Avatar 
          allowEdit={true}
          imageProps={{
            src: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTyhgwFBBuEqiLB5BAjQR4hCDCoJYefwwYtelRMap_8uXFoyisZLRptYiqLuXet0zX9X9Z4z_UAxYbYCcyD9Pm8i2iEe1ljOiYaXfrieWMo7cAQCVQZQ8iYoWz5pDdJFY67SAOckK9jv-c&s=19"
          }}
        />
      </div>
      <form className="flex flex-col gap-2">
        <label htmlFor="fullname" className="font-medium text-sm">Tên đầy đủ<span className="text-red-500 ml-0.5">*</span></label>
        <input name="fullname" id="fullname" type="text" defaultValue="Huỳnh Gia Âu" required={true} className="text-black rounded-lg max-w-100" />

        <label htmlFor="email" className="mt-3 font-medium text-sm">Email<span className="text-red-500 ml-0.5">*</span></label>
        <input name="email" id="email" type="text" defaultValue="huynhgiaau27112005@gmail.com" required={true} className="text-black rounded-lg max-w-100" />

        <label htmlFor="birthday" className="mt-3 font-medium text-sm">Ngày sinh<span className="text-red-500 ml-0.5">*</span></label>
        <input name="birthday" id="birthday" type="date" defaultValue="27/11/2005" required={true} className="text-black rounded-lg max-w-100" />

        <label htmlFor="address" className="mt-3 font-medium text-sm">Địa chỉ<span className="text-red-500 ml-0.5">*</span></label>
        <input name="address" id="address" type="text" required={true} defaultValue="47 Lý Thái Tổ, Phường 1, Quận 10, TP Hồ Chí Minh" className="text-black rounded-lg max-w-100" />
      </form>
    </section>
  </div>
}