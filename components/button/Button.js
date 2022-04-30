export default function Button ({children, name}) {
	return (
		<button className="mn-c-button mn-medium" 
			type="button"
			name={name}>
			{children}
		</button>
	)
}
