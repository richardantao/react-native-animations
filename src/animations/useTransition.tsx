import React, { useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Animated, { interpolate, multiply, not } from "react-native-reanimated";
import { useTransition } from "react-native-redash/lib/module/v1";

import { Button, Card, cards, StyleGuide } from "../components";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-end",
	},
	overlay: {
		...StyleSheet.absoluteFillObject,
		justifyContent: "center",
		alignItems: "center"
	}
});

const transformOrigin = -1 * (width / 2 - StyleGuide.spacing * 2);

const UseTransition = (): JSX.Element => {
	const [toggled, setToggled] = useState<0 | 1>(0);
	const transition = useTransition(toggled, not(toggled), toggled);

	return (
		<View style={styles.container}>
			{cards.map((card, index) => {
				const direction = interpolate(index, {
					inputRange: [0, 1, 2],
					outputRange: [-1, 0, 1]
				})

				const rotate = multiply(direction, interpolate(transition, {
					inputRange: [0, 1],
					outputRange: [0, Math.PI / 6]
				}));

				return (
					<Animated.View key={card.id} style={[styles.overlay,
					{
						transform: [
							{ translateX: transformOrigin },
							{ rotate },
							{ translateX: -transformOrigin },
						]

					}]}>
						<Card {...{ card }} />
					</Animated.View>
				);
			})}
			<Button
				label={toggled ? "Reset" : "Start"}
				primary
				onPress={() => setToggled(toggled ^ 1)}
			/>
		</View>
	);
};

export default UseTransition;