import React from "react";
import "./rightBar.css";

export default function RightBar() {
  return (
    <div className="rightbar_container h-full">
      <div className="flex border-2 mx-2 bg-gray-300 rounded-full mt-4 sticky top-0 z-[1]">
        <div className="px-3 py-1">
          <i class="fa fa-search" aria-hidden="true"></i>
        </div>
        <input className="bg-gray-300 w-max focus:outline-none focus:text-black" placeholder="Search...." />
      </div>

      <div className="mx-4 border-2 border-gray-200 rounded-2xl mt-2 bg-gray-200">
        <p className="p-2 font-bold text-black">Trending</p>
        <div className="px-2">
          <div className="flex justify-between">
            <p className="text-[11px]">Trending in VietNam</p>
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
          </div>
          <p className="text-[15px] font-semibold mt-[-2px] text-black">
            Beauty
          </p>
          <p className="text-[11px] mt-[-2px]">12.3K posts</p>
        </div>
        <div className="p-2">
          <div className="flex justify-between">
            <p className="text-[11px]">Trending in VietNam</p>
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
          </div>
          <p className="text-[15px] font-semibold mt-[-2px] text-black">AIDS</p>
          <p className="text-[11px] mt-[-2px]">123K posts</p>
        </div>
        <div className="p-2">
          <div className="flex justify-between">
            <p className="text-[11px]">Trending in VietNam</p>
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
          </div>
          <p className="text-[15px] font-semibold mt-[-2px] text-black">
            React
          </p>
          <p className="text-[11px] mt-[-2px]">23K posts</p>
        </div>
        <div className="p-2">
          <div className="flex justify-between">
            <p className="text-[11px]">Trending in VietNam</p>
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
          </div>
          <p className="text-[15px] font-semibold mt-[-2px] text-black">Baby</p>
          <p className="text-[11px] mt-[-2px]">3.2K posts</p>
        </div>
        <div className="p-2">
          <div className="flex justify-between">
            <p className="text-[11px]">Trending in VietNam</p>
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
          </div>
          <p className="text-[15px] font-semibold mt-[-2px] text-black">
            HelloWord
          </p>
          <p className="text-[11px] mt-[-2px]">153.2K posts</p>
        </div>
        <div className="p-2">
          <div className="flex justify-between">
            <p className="text-[11px]">Trending in VietNam</p>
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
          </div>
          <p className="text-[15px] font-semibold mt-[-2px] text-black">
            Golang
          </p>
          <p className="text-[11px] mt-[-2px]">22.7K posts</p>
        </div>
        <div className="p-2">
          <div className="flex justify-between">
            <p className="text-[11px]">Trending in VietNam</p>
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
          </div>
          <p className="text-[15px] font-semibold mt-[-2px] text-black">
            JavaScript
          </p>
          <p className="text-[11px] mt-[-2px]">1.2K posts</p>
        </div>
      </div>

      <div className="mx-4 border-2 border-gray-200 rounded-2xl mt-2 bg-gray-200">
        <p className="p-2 font-bold text-black">Who to follow</p>
        <div>
          <div className="flex justify-between p-2">
            <div className="flex space-x-2">
              <img
                className="object-cover rounded-full h-10 w-10 items-center"
                src="https://img.freepik.com/free-psd/3d-illustration-bald-person-with-glasses_23-2149436184.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724630400&semt=ais_hybrid"
              />
              <div>
                <div className="flex">
                  <p className="font-semibold text-black text-sm">Tiga</p>
                </div>
                <h3 className="text-gray-400 font-light text-[12px]">@tigagaga</h3>
              </div>
            </div>
            <div className="bg-slate-300 p-2 h-8 content-center rounded-3xl">
              <p className="text-black justify-center mt-[-4px]">Follow</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between p-2">
            <div className="flex space-x-2">
              <img
                className="object-cover rounded-full h-10 w-10 items-center"
                src="https://img.freepik.com/premium-psd/avatar-3d-illustration_235528-2099.jpg"
              />
              <div>
                <div className="flex">
                  <p className="font-semibold text-black text-sm">Anhboabs</p>
                </div>
                <h3 className="text-gray-400 font-light text-[12px]">@nhinAnhboa</h3>
              </div>
            </div>
            <div className="bg-slate-300 p-2 h-8 content-center rounded-3xl">
              <p className="text-black justify-center mt-[-4px]">Follow</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between p-2">
            <div className="flex space-x-2">
              <img
                className="object-cover rounded-full h-10 w-10 items-center"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2IhSQri0im4tJhqLsuOqEFqQk_1ehUEPs74l3LQdO89tQ0pO4WKFTGTt9Oj87RxYIZUU&usqp=CAU"
              />
              <div>
                <div className="flex">
                  <p className="font-semibold text-black text-sm">Gaogao</p>
                </div>
                <h3 className="text-gray-400 font-light text-[12px]">@gaogao123</h3>
              </div>
            </div>
            <div className="bg-slate-300 p-2 h-8 content-center rounded-3xl">
              <p className="text-black justify-center mt-[-4px]">Follow</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between p-2">
            <div className="flex space-x-2">
              <img
                className="object-cover rounded-full h-10 w-10 items-center"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe4YVLcHF8QX-ghO0cx29jEjeh7N53DzfkddoeFDw87Ew8EOjalSs_EwhQQKEnly2ev8U&usqp=CAU"
              />
              <div>
                <div className="flex">
                  <p className="font-semibold text-black text-sm">ABC</p>
                </div>
                <h3 className="text-gray-400 font-light text-[12px]">@abchua</h3>
              </div>
            </div>
            <div className="bg-slate-300 p-2 h-8 content-center rounded-3xl">
              <p className="text-black justify-center mt-[-4px]">Follow</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-4 border-2 border-gray-200 rounded-2xl mt-2 bg-gray-200">
        <p className="p-2 font-bold text-black">News</p>
        <div className="p-2">
          <div className="flex justify-between">
            <p className="text-[11px]">Top of News</p>
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
          </div>
          <p className="text-[15px] font-semibold mt-[-2px] text-black">Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.</p>
        </div>
        <div className="p-2">
          <div className="flex justify-between">
            <p className="text-[11px]">Top of News</p>
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
          </div>
          <p className="text-[15px] font-semibold mt-[-2px] text-black">
          ABC News - Breaking News, Latest News and Videos
          </p>
        </div>
        <div className="p-2">
          <div className="flex justify-between">
            <p className="text-[11px]">Top of News</p>
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
          </div>
          <p className="text-[15px] font-semibold mt-[-2px] text-black">
          Former national security adviser McMaster says he won’t work for Trump again
          </p>
        </div>
        <div className="p-2">
          <div className="flex justify-between">
            <p className="text-[11px]">Top of News</p>
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
          </div>
          <p className="text-[15px] font-semibold mt-[-2px] text-black">
          Vietnam approves three new deputy prime ministers
          </p>
        </div>
      </div>
    </div>
  );
}
