"use client";
import NextImage from "next/image";
import {
	Flex,
	Group,
	Image,
	Text,
	Anchor
} from "@mantine/core";
import logo from "@/public/icon.svg";
import Search from "../Search/search";
import LanguagePicker from "../LanguagePicker/languagePicker";
import { IconShoppingCart, IconUserCircle } from "@tabler/icons-react";
import classes from "./header.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useLocalStorage } from "@mantine/hooks";

export default function Header() {
	const appName = "Material Mastery";
	const [isLogin, setIsLogin] = useLocalStorage({
		key: "user",
		defaultValue: null,
	});

	const router = useRouter()

	return (
		<Flex
			justify="space-between"
			align="center"
			bg="white"
			pos="fixed"
			top="0"
			left="0"
			right="0"
			className={`z-1000 ${classes.header}`}
			maw="100%"
		>
			<Anchor href="/" underline="never">
				<Group wrap="nowrap">
					<Image
						component={NextImage}
						src={logo}
						alt="Logo"
						w="2.5rem"
						h="2.5rem"
						fit="fill"
					></Image>
					<Text
						className="hidden-mobile"
						size="1rem"
						fw="900"
						c="turquoise.6"
						lh="1.1875rem"
					>
						{appName}
					</Text>
				</Group>
			</Anchor>
			<Search content="" />
			{isLogin ? (
				<Flex gap="1rem" align="center" className="hidden-mobile">
					<LanguagePicker />
					<IconShoppingCart onClick={() => router.push('/cart') } className={classes.hoverIcon} />
					<IconUserCircle className={classes.hoverIcon} />
				</Flex>
			) : (
				<Flex gap="1rem" align="center" className="hidden-mobile">
					<LanguagePicker />

					<Link href="/sign-up">Sign-up</Link>
					<Link href="/sign-in">Sign-in</Link>
				</Flex>
			)}
		</Flex>
	);
}
