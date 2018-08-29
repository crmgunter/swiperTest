import React, { Component } from "react";
import axios from 'axios'

class IdeaPage extends Component {
  state = {
      ideas: [{
          title: '',
          description: ''
      }]
  };

  async componentWillMount() {
    const response = await axios.get("/api/ideas");
    this.setState({ ideas: response.data });
    console.log(this.state.ideas)
  }

  createIdea = async () => {
	const response = await axios.post(`/api/ideas`)
	const newIdea = response.data
	
	const newIdeas = [...this.state.ideas]
	newIdeas.unshift(newIdea) //This will add the new Idea to the beginning of the array
	this.setState({ideas: newIdeas})
}

  render() {
    return (
      <div>
        <div>
          <h1>Idea Board</h1>
          <button onClick={this.createIdea}>New Idea</button>
        </div>
        <div>
          {this.state.ideas.map(idea => {
              console.log(idea)
            return (
              <div key={idea.title}>
                <input type="text" name="title" placeholder={idea.title} />
                <textarea name="description" placeholder={idea.description} />
                <button>Delete Idea</button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default IdeaPage;
