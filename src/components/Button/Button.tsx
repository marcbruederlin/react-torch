import { Pressable, Text } from 'react-native';
import styles from './Button.styles';

type ButtonProps = {
	title: string;
	variant?: 'light' | 'dark';
	onPress: () => void;
};

export default function Button({ title, variant = 'light', onPress }: ButtonProps) {
	return (
		<Pressable
			style={[styles.button, variant === 'dark' ? styles.buttonDark : styles.buttonLight]}
			onPress={onPress}>
			<Text style={variant === 'dark' ? styles.buttonTitleLight : styles.buttonTitleDark}>
				{title}
			</Text>
		</Pressable>
	);
}
