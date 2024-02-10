import React from "react";

interface CenteringGridProps {
	colSize: number;
	iterator: any[];
	children: (item: any, index: number, widthClass: string) => JSX.Element;
}

const CenteringGrid: React.FC<CenteringGridProps> = ({ colSize, iterator, children }) => {
	const numOfItemsInLastRow = iterator.length % colSize;

	return (
		<div className={`flex flex-wrap justify-between py-6`}>
			{iterator.map((item, index) => {
				const isLastRow = index >= iterator.length - numOfItemsInLastRow;
				let widthClass = `w-1/${colSize}`;
				if (isLastRow) {
					switch (numOfItemsInLastRow) {
						case 1:
							widthClass = "w-full";
							break;
						case 2:
							widthClass = "w-1/2";
							break;
						case 3:
							widthClass = "w-1/3";
							break;
						default:
							break;
					}
				}

				return children(item, index, widthClass);
			})}
		</div>
	);
};

export default CenteringGrid;
