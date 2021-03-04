import React from "react";
import { StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { enableScreens } from "react-native-screens";

/* Animations */
import ClockValuesAndIdentities from "./src/animations/ClockValuesAndIdentities";
import Transitions from "./src/animations/Transitions";
import UseTransition from "./src/animations/useTransition";
import Timing from "./src/animations/Timing";
import PanGesture from "./src/animations/PanGesture";
import Decay from "./src/animations/Decay";
import Spring from "./src/animations/Spring";
import Swipe from "./src/animations/Swipe";

/* Components */
import { LoadAssets, StyleGuide, cards } from "./src/components";
import Examples, { examples } from "./src/Examples";
import { Lessons } from "./src/components/Routes";

enableScreens();

const fonts = {
	"SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
	"SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
	"SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};

const assets = [
	...examples.map((example) => example.source),
	...cards.map((card) => card.source),
	// ...profiles.map((profile) => profile.profile),
	// ...pictures,
];

const { Navigator, Screen } = createStackNavigator<Lessons>();

const AppNavigator = () =>
	<Navigator
		initialRouteName="Swipe"
		screenOptions={{
			headerStyle: {
				backgroundColor: StyleGuide.palette.primary,
				borderBottomWidth: 0,
			},
			headerTintColor: "white",
		}}
	>
		<Screen
			name="ClockValuesAndIdentities"
			component={ClockValuesAndIdentities}
			options={{
				title: "Clock Values & Identities",
			}}
		/>
		<Screen
			name="Transitions"
			component={Transitions}
			options={{
				title: "Transitions"
			}}
		/>
		<Screen
			name="useTransition"
			component={UseTransition}
			options={{
				title: "useTransition()"
			}}
		/>
		<Screen
			name="Timing"
			component={Timing}
			options={{
				title: "Timing"
			}}
		/>
		<Screen
			name="PanGesture"
			component={PanGesture}
			options={{
				title: "PanGesture"
			}}
		/>
		<Screen
			name="Decay"
			component={Decay}
			options={{
				title: "Decay"
			}}
		/>
		<Screen
			name="Spring"
			component={Spring}
			options={{
				title: "Spring"
			}}
		/>
		<Screen
			name="Swipe"
			component={Swipe}
			options={{
				title: "Swipe"
			}}
		/>
	</Navigator>;

const App = (): JSX.Element =>
	<LoadAssets {...{ fonts, assets }}>
		<StatusBar barStyle="light-content" />
		<AppNavigator />
	</LoadAssets>;

export default App;