import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Camera, FlashMode } from 'expo-camera';
import Button from '../../components/Button';
import styles from './TorchView.styles';

type TorchViewProps = {
	status: boolean;
	onToggle: () => void;
};

export default function TorchView({ status, onToggle }: TorchViewProps) {
	return (
		<View style={[styles.container, status ? styles.containerLight : styles.containerDark]}>
			<Button
				title={`${status ? 'Disable' : 'Enable'} flashlight`}
				variant={status ? 'dark' : 'light'}
				onPress={onToggle}
			/>
			<Camera flashMode={status ? FlashMode.torch : FlashMode.off} />
			<StatusBar style={status ? 'dark' : 'light'} />
		</View>
	);
}
