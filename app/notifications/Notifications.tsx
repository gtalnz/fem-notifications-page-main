'use client'

import { useEffect, useRef, useState } from 'react'
import { NotificationInterface } from '../../lib/notifications'
import MarkAllAsRead from './MarkAllAsRead'
import Notification from './Notification'

import styles from './Notifications.module.css'

export default function Notifications({
	initialNotifications,
}: {
	initialNotifications: NotificationInterface[]
}) {
	const [notifications, setNotifications] = useState(initialNotifications)

	const totalUnread = notifications.filter(
		(notification) => !notification.read
	).length

	return (
		<div>
			<div className={styles.header}>
				<h1>Notifications</h1>
				<span className={styles.unread}>{totalUnread}</span>
				<MarkAllAsRead
					notifications={notifications}
					setNotifications={setNotifications}
				/>
			</div>
			<div className={styles.notifications}>
				{notifications.map((notification) => (
					<Notification key={notification.id} notification={notification} />
				))}
			</div>
		</div>
	)
}
