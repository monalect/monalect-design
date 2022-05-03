import {
	FiEye,
	FiEyeOff
} from 'react-icons/fi'

import { useState } from 'react';

export default function TextInput({
		children, 
		label, 
		name, 
		id, 
		placeholder, 
		required=false
})
{
	const [show, setShow] = useState(true);
	return (
		<label class="mn-c-text-input mn-is-password">
			{ label }
			<div class="mn-c-input-box">
				<input 
					type = {show ? "password" : "text"}
					id = { id }  
					name = { name } 
					placeholder = { placeholder }
					required={ required }
					minlength={12}
					pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{12,}"
				/>
				<span 
					class="mn-c-show-password" 
					aria-label="Toggle Password Visibility"
					onClick={() => setShow(!show)}
				> 
					<FiEye className={`mn-c-icon-eye ${show && "mn-is-hidden"}`}/>
					<FiEyeOff className={`mn-c-icon-eye ${!show && "mn-is-hidden"}`}/>
				</span>
			</div>
			<span>{children}</span>
		</label>
	);
}
