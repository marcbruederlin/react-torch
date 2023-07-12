import { useState } from 'react';
import { Camera, PermissionStatus } from 'expo-camera';
import TorchView from './src/views/TorchView';
import NoPermissionView from './src/views/NoPermissionView';

export default function App() {
	const [torchStatus, setTorchStatus] = useState(false);
	const [permission, requestPermission] = Camera.useCameraPermissions();

	if (!permission || permission.status === PermissionStatus.DENIED) {
		return <NoPermissionView onAskForPermission={requestPermission} />;
	}

	return (
		<TorchView status={torchStatus} onToggle={() => setTorchStatus((state) => (state = !state))} />
	);
}
