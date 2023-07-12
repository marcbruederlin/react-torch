import { Text, View } from 'react-native';
import Button from '../../components/Button';
import styles from './NoPermissionView.styles';

type NoPermissionViewProps = {
	onAskForPermission: () => void;
};

export default function NoPermissionView({ onAskForPermission }: NoPermissionViewProps) {
	return (
		<View style={styles.container}>
			<Text style={styles.message}>Please allow access to your camera to use this app.</Text>

			<Button title="Ask for camera permission" onPress={onAskForPermission} />
		</View>
	);
}
