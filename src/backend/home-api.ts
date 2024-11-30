import delay from "@/utils/delay";
import homeData from "@/data/home-data";

export default {
	fetchHomeData: async () => {
		await delay(2000)
		return homeData;
	}
}