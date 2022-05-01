import { 
	Button,
	TextInput
} from '../components/';

export default function Home() {
  return (
	  	<div>
			<div>
				<Button buttonType="primary" buttonSize="small">Primary</Button>
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
				<TextInput>Email:</TextInput>
			</div>
    		</div>
  )
}
