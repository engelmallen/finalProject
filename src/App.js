import './App.css';
import Story from "./Story.js";
import Header from "./Header";


const stories =[ 
	{	title: "The Drunkard",
		storyteller: "Antoine de Saint-Exupery",
		myStory: "“Why are you drinking? - the little prince asked.",
	},
	{	title: "The Drunkard",
		storyteller: "Antoine de Saint-Exupéry",
		myStory: " The fourth planet belonged to a businessman.",
	},
];

function App(){
  return (
    <div className="App">
      <Header/>
      {stories.map((story)=>{
      	return(
      	      	<Story title={story.title} storyteller={story.storyteller} myStory={story.myStory}/>
      	      );
      })}
    </div>
    );
}

export default App;