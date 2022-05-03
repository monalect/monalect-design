export default function TextInput({
		children, 
		label, 
		name, 
		id, 
		type="text",
		placeholder, 
		minlength,
		maxlength,
		required=false,
		pattern	
})
{
	return (
		<label class="mn-c-text-input">
			<div> 
				{ label } 
				{ !required ? (<span class="mn-is-optional">(optional)</span>) : ""}
			</div>
			<input 
				type= { type }
				id = { id }  
				name = { name } 
				placeholder = { placeholder }
				required={ required }
				minlength={minlength}
				maxlength={maxlength}
				pattern={pattern}
			/>
			<span>{children}</span>
		</label>
	);
}
