function not_paid({ due_date, days_deadline }){
	let current_date = new Date()
	let milliseconds = current_date - due_date
	let days = Math.floor(milliseconds / (1000 * 60 * 60 * 24))
	
	if(days > 0) {
		let days_late = days_deadline-days
		let opacity = Math.max(0, Math.min((days_late * 100 / days_deadline) / 100, 1))
		document.body.style.opacity = opacity
	}
}

// not_paid({ due_date: new Date('2022-01-01'), days_deadline: 30 })
