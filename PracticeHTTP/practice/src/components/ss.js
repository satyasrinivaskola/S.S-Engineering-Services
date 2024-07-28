class PostForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			userd: '',
			title: '',
			body: ''
		}
	}

	onchangeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('https://jsonplaceholder.typicode.com/posts', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		const { userd, title, body } = this.state
		return (
			<div>
				<form onSubmit={this.submitHandler}>
					<div>
						<input
							type="text"
							name="userId"
							value={userd}
							onChange={this.onchangeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="title"
							value={title}
							onChange={this.onchangeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="body"
							value={body}
							onChange={this.onchangeHandler}
						/>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default PostForm


