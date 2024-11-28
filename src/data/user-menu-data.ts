import { LuLogOut, LuMoon, LuSettings, LuSun, LuSunDim, LuUser } from "react-icons/lu";
import { MdContrast } from "react-icons/md";

export default {
	name: "Jane Pearson",
	role: "Administrator",
	img: "https://this-person-does-not-exist.com/img/avatar-gen4f58e454a57241c05a7422a59acfc26c.jpg",
	menu: [
		{ title: "Profile", Icon: LuUser },
		{ title: "Settings", Icon: LuSettings },
		{
			title: "Theme",
			Icon: LuSun,
			menu: [
				{ id: "system", title: "Auto", Icon: MdContrast },
				{ id: "dark", title: "Dark", Icon: LuMoon },
				{ id: "light", title: "Light", Icon: LuSunDim },
			],
		},
		{ title: "Logout", Icon: LuLogOut },
	],
};