import React from "react";

const ProfileSummary: React.FC = () => {
  return (
    <div className="flex justify-between items-center px-6 py-6 xl:p-0 xl:mb-6 bg-gray-100 xl:bg-white text-gray-700">
      <div className="text-sm xl:text-xs text-gray-700 flex">
        보유 Do money
        <span className=" ml-3 xl:ml-2 mr-1 text-md">523</span>
        <img
          src="/images/do-money.svg"
          alt="do-money"
          className="w-3 xl:w-2.5 aspect-square text-yellow-400"
        />
        <span className="mx-2">|</span>
        <span className="mr-1">Steve</span> 님
        <img
          src={`/images/badges/top-green.svg`}
          alt="badge"
          className="w-5 xl:w-4 aspect-square ml-1"
        />
      </div>
      {/* TODO: Link로 교체 */}
      <div className="text-sm text-gray-400 xl:hidden">내역보기{" >"}</div>
    </div>
  );
};

export default ProfileSummary;
