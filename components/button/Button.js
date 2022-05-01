export default function Button ({children, name="", buttonType="primary", buttonSize=null}) {
	return (
		<button className={`mn-c-button 
			${(buttonType === "primary") && "mn-is-primary"}
			${(buttonType === "secondary") && "mn-is-secondary"}	
			${(buttonType === "danger") && "mn-is-danger"}	
			${(buttonSize === "small") && "mn-is-small"}
			${(buttonSize === "large") && "mn-is-large"}
			`}
			type="button"
			name={name}>
			{children}
		</button>
	)
}
