export const getURLs = (urlType, apiParams) => {
	const payload = apiParams.payload;

	switch (urlType) {
		case "SEARCH_ACTOR": {
			return ``;
		}
		case "SEARCH_MOVIE_BY_TITLE": {
			return `/v2/user/${premiumId}/order/${salesOrderId}/getInvoiceDetails`;
		}
		case "SEARCH_MOVIE_BY_ACTOR_OR_GENRE": {
			return `/v2/user/${premiumId}/timeTable`;
		}
		case "LOGISTICS_DETAILS": {
			return `/v2/user/${premiumId}/getLogisticsDetails`;
		}
		case "ORDER_DETAILS": {
			return `/v2/user/${premiumId}/orders/${salesOrderId}`;
		}
		case "FIRST_CLASS": {
			return `/v2/user/${premiumId}/firstClass`;
		}
		case "UPCOMING_CLASS": {
			return `/v2/user/${premiumId}/upcomingClass`;
		}
		case "ORIENTATION_DETAILS": {
			return `/v2/user/${premiumId}/orientationDetails`;
		}
		case "CLEAR_ORIENTATION_DETAILS": {
			return `/v2/user/${premiumId}/orientationCTA`;
		}
		case "STUDENT_DETAILS": {
			return `/v2/user/${premiumId}/studentDetails`;
		}
		case "VIDEO_AND_BROCHURE": {
			return `/v2/user/${premiumId}/getAssets`;
		}
		default:
			return "";
	}
};

export default URLs;
