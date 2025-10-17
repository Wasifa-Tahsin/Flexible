import React from "react";
import { FaHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const PortfolioCard = ({
  imageUrl,
  teamImageUrl,
  teamName,
  loveCount,
  viewCount,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl  p-3">
      {/* Portfolio Image */}
      <img
        className="w-full h-64 object-cover rounded-lg"
        src={imageUrl}
        alt="Portfolio Image"
      />

      {/* Bottom Info Section */}
      <div className="flex justify-between items-center mt-3">
        {/* Left: Team Info */}
        <div className="flex items-center gap-3">
          <img
            className="w-10 h-10 rounded-full border"
            src={teamImageUrl}
            alt="Team Image"
          />
          <h3 className="font-semibold text-gray-800">{teamName}</h3>
        </div>

        {/* Right: Love + View */}
        <div className="flex items-center gap-4 text-gray-600 text-sm">
          <div className="flex items-center gap-1">
            <FaHeart className="text-gray-400" />
            <p>{loveCount}</p>
          </div>
          <div className="flex items-center gap-1">
            <MdOutlineRemoveRedEye className="text-gray-400" />
            <p>{viewCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
