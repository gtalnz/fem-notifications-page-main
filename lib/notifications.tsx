export interface NotificationInterface {
	id: number
	user: string
	avatar: string
	type: 'reaction' | 'follow' | 'group_join' | 'dm' | 'comment' | 'group_left'
	timeSinceCreated: string
	group?: string
	post?: string
	message?: string
	image?: string
	read?: boolean
}

export function getDisplayText(
	notification: NotificationInterface,
	styles: {
		[key: string]: string
	}
) {
	switch (notification.type) {
		case 'reaction':
			return (
				<span>
					reacted to your recent post{' '}
					{<span className={styles.post}>{notification.post}</span>}
				</span>
			)

		case 'follow':
			return <span>followed you</span>

		case 'group_join':
			return (
				<span>
					has joined your group{' '}
					{<span className={styles.group}>{notification.group}</span>}
				</span>
			)

		case 'dm':
			return <span>sent you a private message</span>

		case 'comment':
			return <span>commented on your picture</span>

		case 'group_left':
			return (
				<span>
					left the group{' '}
					{<span className={styles.group}>{notification.group}</span>}
				</span>
			)

		default:
			break
	}
}

const notifications: NotificationInterface[] = [
	{
		id: 0,
		user: 'Mark Webber',
		avatar: '/images/avatar-mark-webber.webp',
		type: 'reaction',
		timeSinceCreated: '1m',
		post: 'My first tournament today!',
	},
	{
		id: 1,
		user: 'Angela Gray',
		timeSinceCreated: '5m',
		avatar: '/images/avatar-angela-gray.webp',
		type: 'follow',
	},
	{
		id: 2,
		user: 'Jacob Thompson',
		timeSinceCreated: '1 day',
		avatar: '/images/avatar-jacob-thompson.webp',
		type: 'group_join',
		group: 'Chess Club',
	},
	{
		id: 3,
		user: 'Rizky Hasanuddin',
		timeSinceCreated: '5 days',
		avatar: '/images/avatar-rizky-hasanuddin.webp',
		type: 'dm',
		message: `Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.`,
		read: true,
	},
	{
		id: 4,
		user: 'Kimberly Smith',
		timeSinceCreated: '1 week',
		avatar: '/images/avatar-kimberly-smith.webp',
		type: 'comment',
		image: `/images/image-chess.webp`,
		read: true,
	},
	{
		id: 5,
		user: 'Nathan Peterson',
		timeSinceCreated: '2 weeks',
		avatar: '/images/avatar-nathan-peterson.webp',
		type: 'reaction',
		post: '5 end-game strategies to increase your win rate',
		read: true,
	},
	{
		id: 6,
		user: 'Anna Kim',
		timeSinceCreated: '2 weeks',
		avatar: '/images/avatar-anna-kim.webp',
		type: 'group_left',
		group: 'Chess Club',
		read: true,
	},
]

export default notifications
