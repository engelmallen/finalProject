const Story = (props) =>{
	// const story = props.story;
	return (
		<div>
			<h2>{props.title}</h2>
			<h3>{props.storyteller}</h3>
			<div class="card">{props.myStory}</div>
		</div>
		)
}
 
export default Story;