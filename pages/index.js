import { 
	Button,
	TextInput,
	Modal,
	RegistrationForm
} from '../components/';

import {useState} from 'react';

export default function Home() {

	const [show, setShow] = useState(false);

  	return (
	  	<div>
			<div 
				className={show ? "mn-is-blur" : "mn-is-clear"}
				onClick={show ? () => setShow(false) : null}
				id="mn-body"
				disabled
			>
				<div>
					<Button  buttonType="primary" buttonSize="small">Primary</Button>
					<Button buttonType="secondary" buttonSize="small">Secondary</Button>
					<Button buttonType="danger" buttonSize="small">Danger</Button>
				</div>
				<div>
					<Button buttonType="primary" buttonSize="medium">Primary</Button>
					<Button buttonType="secondary" buttonSize="medium">Secondary</Button>
					<Button buttonType="danger" buttonSize="medium">Danger</Button>
				</div>
				<div>
					<Button buttonType="primary" buttonSize="large">Primary</Button>
					<Button buttonType="secondary" buttonSize="large">Secondary</Button>
					<Button buttonType="danger" buttonSize="large">Danger</Button>
				</div>
				<div>
					<TextInput label="Label" id="exampleContent" placeholder="Placeholder">This is helper text.</TextInput>
				</div>
				<div>
					<Button buttonType="primary" onClick={() => setShow(!show)}>Launch Modal</Button>
				</div>
			</div>
			<Modal show={show} changeState={setShow}>
				<RegistrationForm />
			</Modal>
    		</div>
  	)
}
