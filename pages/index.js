import { 
	Button,
	TextInput,
	Modal,
	RegistrationForm,
	Header,
	HeaderMenu,
	HeaderLink
} from '../components/';

import {useState} from 'react';

export default function Home() {

	const [show, setShow] = useState(false);
	const slug = "/"

  	return (
	  	<div>
				<Header
				className={show ? "mn-is-blur" : "mn-is-clear"}
				onClick={show ? () => setShow(false) : null}
				>
					<HeaderMenu>
						<HeaderLink href="/" active={slug === "/"}>Home</HeaderLink>
						<HeaderLink href="#" active={slug === "/blog"}>Blog</HeaderLink>
						<HeaderLink href="#" active={slug === "/vision"}>Vision</HeaderLink>
						<HeaderLink href="#" active={slug === "/about"}>About</HeaderLink>
					</HeaderMenu>
				</Header>
			<div 
				className={show ? "mn-is-blur" : "mn-is-clear"}
				onClick={show ? () => setShow(false) : null}
				id="mn-body"
			>
				<main>
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
				</main>
			</div>
			<Modal show={show} changeState={setShow}>
				<RegistrationForm />
			</Modal>
    		</div>
  	)
}
