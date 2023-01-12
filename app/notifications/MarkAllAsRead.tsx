import { useCallback } from 'react'
import { NotificationInterface } from '../../lib/notifications'
import styles from './MarkAllAsRead.module.css'

const MarkAllAsRead = ({
	notifications,
	setNotifications,
}: {
	notifications: NotificationInterface[]
	setNotifications: (notifications: NotificationInterface[]) => void
}) => {
	const markAllAsRead = useCallback(() => {
		setNotifications(
			notifications.map((notification) => {
				return { ...notification, read: true }
			})
		)
	}, [notifications, setNotifications])

	return (
		<button className={styles.markAsRead} onClick={markAllAsRead}>
			Mark all as read
		</button>
	)
}

export default MarkAllAsRead
