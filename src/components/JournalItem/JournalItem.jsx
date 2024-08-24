import React from 'react'
import './JournalItem.scss';

function JournalItem({ title, text, date }) {
	const formatedDate = date ? new Intl.DateTimeFormat('uz-UZ').format(date): '';

	return (
		<>
			<h2 className="journal-item__header">{title}</h2>
			<div className="journal-item__body">
				<div className="journal-item__date">{formatedDate}</div>
				<div className="journal-item__text">{text}</div>
			</div>
		</>
	);
}

export default JournalItem;