import React from "react";

const Teen = () => {
	return (
		<div
			className="flex flex-col min-h-screen bg-cover bg-center -z-10"
			style={{ backgroundImage: "url('/paper.png')" }}
		>
			<div className="flex h-screen items-center justify-center">
				<h1 className="text-6xl font-normal text-black font-loved">
					living a teenage dream
				</h1>
			</div>
			<div className="flex flex-col h-screen text-black items-center">
				<h1 className="flex justify-center text-6xl font-normal font-loved mt-24">
					adolescense
				</h1>
				<p className="flex justify-center mt-24 font-extralight w-2/3 text-3xl">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<div className="rounded-2xl bg-highlighter mt-24">
					<button className="flex justify-center text-black text-4xl font-loved py-2 px-7">
						next
					</button>
				</div>
			</div>
		</div>
	);
};

export default Teen;
