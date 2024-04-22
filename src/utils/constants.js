import { FaPen, FaRegFolder, FaTrash, FaGear, FaUser  } from "react-icons/fa6";
import stars from "../assets/images/stars.png"
export const chatCollection = [
	{
		title: "Today", 
		chatCollectionItems: [
			{key: 1, isNew: false, chatTitle: "Message 1"}, 
			{key: 2, isNew: false, chatTitle: "Message 2"}, 
			{key: 3, isNew: true, chatTitle: "Message 3"}, 
			{key: 4, isNew: true, chatTitle: "Message 4"}, 
			{key: 5, isNew: false, chatTitle: "Message 5"}, 
		]
	},
	{
		title: "Previous Chat", 
		chatCollectionItems: [
			{key: 6, isNew: false, chatTitle: "Message 1"}, 
			{key: 7, isNew: false, chatTitle: "Message 2"}, 
			{key: 8, isNew: true, chatTitle: "Message 3"}, 
			{key: 9, isNew: true, chatTitle: "Message 4"}, 
			{key: 10, isNew: false, chatTitle: "Message 5"}, 
			{key: 11, isNew: false, chatTitle: "Message 6"},
			{key: 12, isNew: false, chatTitle: "Message 7"},
			{key: 13, isNew: false, chatTitle: "Message 8"},
			{key: 14, isNew: false, chatTitle: "Message 9"},
		]
	}
]

export const chatOptions = [
	{key: 1, optionName: "Modify", optionIcon: <FaPen /> },
	{key: 2, optionName: "Favourite", optionIcon: <FaRegFolder /> },
	{key: 3, optionName: "Delete", optionIcon: <FaTrash /> }
];

export const navItems = [
	{key: 1, optionName: "Be creative", optionIcon: <img src={stars} alt="stars" /> },
	{key: 2, optionName: "System Prompt", optionIcon: <FaGear /> },
	{key: 3, optionName: "Account", optionIcon: <FaUser /> }
];

export const chatConversation = [
	{
		id: 1,
		user: {id: "uid1", name: "Pooja Shingala"},
		question: "Give me the biggest city in the world.",
		answer: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32. \n\n The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham." 
	},
	{
		key: 2,
		user: {id: "uid1", name: "Pooja Shingala"},
		question: "Give me the biggest city in the world.",
		answer: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32. \n\n The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham." 
	}
]