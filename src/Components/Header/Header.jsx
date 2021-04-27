import React from "react"
import { Link } from "react-router-dom"
import styles from "./header.module.scss"

export const Header = () => (
	<div className={styles.header}>
		<Link to="/todos" className={styles.links}>Create</Link>
		<Link to="/list" className={styles.links}>List</Link>
	</div>
)