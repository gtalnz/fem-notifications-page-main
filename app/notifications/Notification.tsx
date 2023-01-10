'use client'

import Image from 'next/image'

import { getDisplayText, NotificationInterface } from '../../lib/notifications'
import styles from './Notification.module.css'

const Notification = ({
	notification,
}: {
	notification: NotificationInterface
}) => {
	return (
		<div
			className={`${styles.notification} ${
				!notification.read && styles.unread
			}`}>
			<Image
				src={notification.avatar}
				alt={`${notification.user}'s avatar`}
				width={45}
				height={45}
			/>
			<div
				className={`${styles.notificationText} ${
					notification.image && styles.hasImage
				}`}>
				<span>
					<span className={styles.user}>{notification.user}</span>
					{getDisplayText(notification, styles)}
				</span>
				{!notification.read && (
					<span className={styles.unreadIndicator}>•</span>
				)}
			</div>
			{notification.type === 'comment' && (
				<Image
					src={notification.image}
					alt={'Picture that has been commented on'}
					height={45}
					width={45}
				/>
			)}
			<div className={styles.timeSinceCreated}>
				{notification.timeSinceCreated} ago
			</div>
			{notification.type === 'dm' && (
				<div className={styles.message}>{notification.message}</div>
			)}
		</div>
	)
}

export default Notification
