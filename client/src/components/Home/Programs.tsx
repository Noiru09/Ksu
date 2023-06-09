import React from "react";

const Programs = (props: {
	img: string | undefined;
	title:
		| string
		| number
		| boolean
		| React.ReactElement<any, string | React.JSXElementConstructor<any>>
		| React.ReactFragment
		| React.ReactPortal
		| null
		| undefined;
	desc:
		| string
		| number
		| boolean
		| React.ReactElement<any, string | React.JSXElementConstructor<any>>
		| React.ReactFragment
		| React.ReactPortal
		| null
		| undefined;
	type:
		| string
		| number
		| boolean
		| React.ReactElement<any, string | React.JSXElementConstructor<any>>
		| React.ReactFragment
		| React.ReactPortal
		| null
		| undefined;
}) => {
	return (
		<div className="max-w-sm font-medium">
			<img
				src={props.img}
				alt={`${props.title} image`}
				className="h-72 object-cover w-full"
			/>
			<h1 className="font-bold text-2xl pt-4">{props.title}</h1>
			<div className="h-1 bg-amber-800 w-[30%] my-6"></div>

			<p>{props.desc}</p>
			<div className=" flex gap-6">
				<svg
					className="w-10 h-10"
					version="1.1"
					id="Layer_1"
					xmlns="http://www.w3.org/2000/svg"
					width="800px"
					height="800px"
					viewBox="0 0 37 32"
					enable-background="new 0 0 37 32">
					<path
						fill="#808184"
						d="M36.078,7.173L19.876,0.346c-0.865-0.365-1.858-0.365-2.728,0L0.922,7.183C0.362,7.42,0.009,7.944,0,8.554
		c-0.009,0.607,0.329,1.143,0.881,1.394L2.59,10.73C2.538,10.809,2.5,10.898,2.5,11v9c0,0.005,0.003,0.01,0.003,0.016
		c-1.172,0.207-2.066,1.226-2.066,2.456c0,1.111,0.733,2.043,1.736,2.368l-1.798,4.164c-0.271,0.629-0.206,1.326,0.18,1.912
		C1.002,31.595,1.787,32,2.656,32l0.289-0.014c0.813-0.066,1.539-0.481,1.941-1.111c0.344-0.537,0.418-1.182,0.203-1.767
		L3.541,24.89c1.086-0.272,1.896-1.248,1.896-2.418c0-1.188-0.833-2.18-1.945-2.433C3.493,20.025,3.5,20.014,3.5,20v-8.853l4,1.833
		V20h0.01c0.103,2.257,5.827,3.439,11.49,3.439S30.387,22.257,30.49,20h0.01v-7.551l5.607-2.507C36.664,9.694,37.006,9.16,37,8.549
		C36.993,7.938,36.641,7.41,36.078,7.173z M4.045,30.336c-0.235,0.368-0.677,0.613-1.186,0.654L2.656,31
		c-0.531,0-1.005-0.236-1.266-0.634c-0.2-0.304-0.234-0.647-0.097-0.966l1.533-3.552l1.323,3.604
		C4.259,29.746,4.221,30.061,4.045,30.336z M4.438,22.472c0,0.827-0.673,1.5-1.5,1.5s-1.5-0.673-1.5-1.5s0.673-1.5,1.5-1.5
		S4.438,21.645,4.438,22.472z M29.5,18.419c-1.898-1.305-6.219-1.98-10.5-1.98s-8.602,0.675-10.5,1.98v-7.278
		c0-1.097,3.185-2.641,10.266-2.641c7.004,0,10.734,1.57,10.734,2.703V18.419z M19,22.439c-6.409,0-10.5-1.48-10.5-2.5
		s4.091-2.5,10.5-2.5s10.5,1.48,10.5,2.5S25.409,22.439,19,22.439z M35.699,9.03L30.5,11.354v-0.151
		c0-2.181-4.825-3.703-11.734-3.703C11.922,7.5,7.5,8.929,7.5,11.141v0.741L1.297,9.038C1.017,8.911,0.999,8.646,1,8.567
		s0.027-0.343,0.311-0.463l16.227-6.837c0.619-0.263,1.331-0.261,1.95,0l16.202,6.827c0.285,0.12,0.31,0.386,0.311,0.464
		C36.001,8.638,35.981,8.903,35.699,9.03z"
					/>
				</svg>
				<h2>{props.type}</h2>
			</div>
		</div>
	);
};

export default Programs;
