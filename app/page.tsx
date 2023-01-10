import styles from './page.module.css'
import notifications from '../lib/notifications'
import Notifications from './notifications/Notifications'

export default function Page() {
	return (
		<div className={styles.main}>
			<Notifications initialNotifications={notifications} />
		</div>
	)
}
