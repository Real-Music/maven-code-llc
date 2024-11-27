import { FaEnvelope } from "react-icons/fa";
import { FaEnvelopeCircleCheck } from "react-icons/fa6";
import { LuSettings } from "react-icons/lu";

export default {
	menu: [
		{ title: "Mark all as read", Icon: FaEnvelope, command: "⌘X" },
		{ title: "Notification settings", Icon: LuSettings, command: "⌘C" },
	],
	tabs: {
		triggers: [
			{ title: "All", Icon: FaEnvelope },
			{ title: "Unread", Icon: FaEnvelopeCircleCheck },
		],
		contents: [
			{
				value: "All",
				body: [
					{
						name: "Anabel",
						img: "https://this-person-does-not-exist.com/img/avatar-genb5dd53055755a8ab90c8afba0a92ec92.jpg",
						text: "You have 1 new message from Anabel.",
					},
					{
						name: "John Smith",
						img: "https://this-person-does-not-exist.com/img/avatar-gen14cd7686841657c3bc4e94b943dc6f63.jpg",
						text: "You have 5 new messages from John Smith.",
					},
					{
						name: "Mary",
						img: "https://this-person-does-not-exist.com/img/avatar-genb50144acc0c31a3281991347def26b85.jpg",
						text: "You have 100 new messages from Mary.",
					},
				],
			},
			{
				value: "Unread",
				body: [
					{
						name: "Jane Kelly",
						img: "https://this-person-does-not-exist.com/img/avatar-gen2a0229411ff9632b3aecfb97dfde1b2d.jpg",
						text: "You have 8 new messages from Jane Kelly.",
					},
					{
						name: "Raymond",
						img: "https://this-person-does-not-exist.com/img/avatar-gen03c118429a4313d87c16ecf29925397e.jpg",
						text: "You have 1 new messages from Raymond.",
					},
				],
			},
		],
	},
};