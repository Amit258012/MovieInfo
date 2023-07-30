import { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTab from "../../../components/switchTab/SwitchTab";
import useFetch from "../../../hooks/useFetch";

const Trending = () => {
	const [endPoint, setEndPoint] = useState("day");
	const { data, loading } = useFetch(`/trending/all/${endPoint}`);
	const onTabChange = (tab) => {
		setEndPoint(tab.toLowerCase());
		console.log(data);
	};

	return (
		<div className="carouselSection">
			<ContentWrapper>
				<span className="carouselTitle">Trending</span>
				<SwitchTab data={["Day", "Week"]} onTabChange={onTabChange} />
			</ContentWrapper>
			;
		</div>
	);
};

export default Trending;
