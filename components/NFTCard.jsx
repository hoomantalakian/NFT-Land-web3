import Image from "next/image";
import React from "react";
// --------------------------
function NFTCard({ data }) {
	return (
		<div className="m-auto flex  max-w-[70%] flex-col rounded-lg border border-gray-300 p-3  sm:m-0 sm:max-w-lg ">
			<Image
				src={
					data?.media[0]?.gateway ||
					"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
				}
				alt={data?.description}
				width={500}
				height={500}
			/>
			{/* title */}
			<div className="mt-2 rounded-md bg-teal-50 px-2">
				{data.title ? (
					<p className="font-semibold">{data.title}</p>
				) : (
					<i>&lt; no title &gt;</i>
				)}
			</div>
			{/* contract info */}
			<div className="mt-2 flex table-fixed flex-row justify-center">
				<div className=" truncate rounded-l-md bg-teal-200 px-2 py-1">
					{data.contract.address}
				</div>
				<button
					className="w-auto rounded-r-md bg-teal-500 px-2 py-1 hover:mix-blend-hard-light"
					onClick={() =>
						navigator.clipboard.writeText(data.contract.address)
					}
				>
					<p className="font-medium">Copy</p>
				</button>
			</div>
		</div>
	);
}

export default NFTCard;
