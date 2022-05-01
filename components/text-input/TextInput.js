export default function TextInput({children, name, id, placeholder}){
	return (
		<div class="mn-c-textinput">
			<label for={name}>{children}</label>
			<input type ="text" id={id} name={name} placeholder={placeholder}/>
		</div>
	);
}
