import '../styles/reset.css'
import '../styles/global.css'
import styles from './layout.module.css'
import localFont from '@next/font/local'

const plusJakartaSans = localFont({
	src: '../public/fonts/PlusJakartaSans-VariableFont_wght.ttf',
})

export default function RootLayout({ children }) {
	return (
		<html lang='en' className={plusJakartaSans.className}>
			<head />
			<body className={styles.body}>{children}</body>
		</html>
	)
}
