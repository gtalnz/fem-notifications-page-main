'use client'

import { useRef, useState } from 'react'
import { NotificationInterface } from '../../lib/notifications'
import Notification from './Notification'

import styles from './Notifications.module.css'

export default function Notifications({
	initialNotifications,
}: {
	initialNotifications: NotificationInterface[]
}) {
	const [notifications, setNotifications] = useState(initialNotifications)

	const totalUnread = useRef(
		notifications.filter((notification) => !notification.read).length
	)

	return (
		<div>
			<div className={styles.header}>
				<h1>Notifications</h1>
				<span className={styles.unread}>{totalUnread.current}</span>
				<span className={styles.markAsRead}>Mark all as read</span>
			</div>
			<div className={styles.notifications}>
				{notifications.map((notification) => (
					<Notification key={notification.id} notification={notification} />
				))}
			</div>
		</div>
	)
}
