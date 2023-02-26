import React from 'react';

import './App.css';

class Agenda extends React.Component{
	constructor()
	{
		super();
		this.state={
			title : "",
			titleValid : "",
			description : "",
			descriptionValid : "",
			topic : "",
			topicValid : "",
			enableTopicsDiv : false,
			viewAgendaEnableDiv : false,
			enableAddAgedaDiv : true,
			topics : [],
			topicButtonDisable:true,
			topicSubmitButtonDisable:true,
			agendaDetails:[{
				title:"",
				description:"",
				topics:[]
			}]
		}
	}

	isStringSpace = (stringCheck) => {
		console.log("gfghf gfhgfh gdgf".indexOf(" "));
	}

	titleChange = (e) => {
		this.isStringSpace("gfghf")
		this.setState({title:e.target.value});
		if(!(this.state.title === "" || this.state.title.indexOf(' ') >= 0) && !(this.state.description === "" || this.state.description.indexOf(' ') >= 0) && !(this.state.topic === "" || this.state.topic.indexOf(' ') >= 0))
		this.setState({topicSubmitButtonDisable : false})
		else
		this.setState({topicSubmitButtonDisable : true})
	}

	descriptionChange = (e) => {
		this.setState({description:e.target.value});
		if(!(this.state.title === "" || this.state.title.indexOf(' ') >= 0) && !(this.state.description === "" || this.state.description.indexOf(' ') >= 0) && !(this.state.topic === "" || this.state.topic.indexOf(' ') >= 0))
		this.setState({topicSubmitButtonDisable : false})
		else
		this.setState({topicSubmitButtonDisable : true})
	}

	topicChange = (e) => {
		this.setState({topic:e.target.value});
		if(!(this.state.topic === "" || this.state.topic.indexOf(' ') >= 0))
		this.setState({topicButtonDisable : false})
		else
		this.setState({topicButtonDisable : true})

		if(!(this.state.title === "" || this.state.title.indexOf(' ') >= 0) && !(this.state.description === "" || this.state.description.indexOf(' ') >= 0) && !(this.state.topic === "" || this.state.topic.indexOf(' ') >= 0))
		this.setState({topicSubmitButtonDisable : false})
		else
		this.setState({topicSubmitButtonDisable : true})
	}

	submitAgendaButton = () => {
		if(this.state.title === "" || this.state.title.indexOf(' ') === this.state.title.length)
		this.setState({titleValid : "Title is required"})
		if(this.state.description === "" || this.state.description.indexOf(' ') === this.state.description.length)
		this.setState({descriptionValid : "Description is required"})
		if(this.state.topic === "" || this.state.topic.indexOf(' ') === this.state.topic.length)
		this.setState({topicValid : "Topic is required"})
		if(!(this.state.title === "" || this.state.title.indexOf(' ') >= 0) && !(this.state.description === "" || this.state.description.indexOf(' ') >= 0) && !(this.state.topic === "" || this.state.topic.indexOf(' ') >= 0))
		{
			const titleValue = this.state.title;
			const descriptionValue = this.state.description;
			const topicsValue = this.state.topics;
			var agendadetails = {
				title : titleValue,
				description : descriptionValue,
				topics : topicsValue
			}
			var agendadetails1 = this.state.agendaDetails;
			agendadetails1.push(agendadetails);
			this.setState({agendaDetails:agendadetails1})
		}
		this.setState({title:""})
		this.setState({description:""})
		this.setState({topics:[]})
	}

	addTopicsClick = () => {
		let list = this.state.topics;
		list.push(this.state.topic)
		this.setState({topics:list})
		this.setState({enableTopicsDiv:true})
	}

	viewAgendaClick = () => {
		this.setState({viewAgendaEnableDiv:true})
		this.setState({enableAddAgedaDiv:false})
		this.setState({enableTopicsDiv:false})
	}

	addAgendaClick = () => {
		this.setState({viewAgendaEnableDiv:false})
		this.setState({enableAddAgedaDiv:true})
		this.setState({enableTopicsDiv:false})
		this.setState({title:""})
		this.setState({description:""})
		this.setState({topics:[]})
	}

	

	render() {
		return (
			<div>
			<h1 className="mx-5 mb-5">Agenda Manager</h1>
			{/* show/hide this following add agenda template */}
			<div className="container">
			{this.state.enableAddAgedaDiv && <div>
			<button className="btn btn-info" onClick = {this.viewAgendaClick}>Click To View Agenda</button>

			<div className="my-3">
			<label className="form-label">Title</label>
			{/* title */}
			<input type="text" name="newTitle" placeholder="Enter the title" onChange={this.titleChange} />
			<small className="text-danger" data-testid="invalidTitle">
			{
				/**
				* show empty string if title input is valid
				* else show 'Title is required'
				*/
				this.state.titleValid
			}
			</small>
			</div>
			<div className="my-3">
			<label className="form-label">Description</label>
			{/* Description */}
			<input type="text" name="newDescription" placeholder="Enter the description" onChange={this.descriptionChange} />
			<small className="text-danger" data-testid="invalidDescription">
			{
				/**
				* show empty string if description input is valid
				* else show 'Description is required'
				*/
				this.state.descriptionValid
			}
			</small>
			</div>
			<div className="my-3 w-50">
			<label className="form-label">Enter topic</label>
			{/* topic */}
			<input type="text" name="newTopic" placeholder="Enter the topic" onChange={this.topicChange} />
			<small className="text-danger" data-testid="invalidTopic">
			{
				/**
				* show empty string if topic input is valid
				* else show 'Topic is required'
				*/
				this.state.topicValid
			}
			</small>
			</div>
			{/* on click should add topics and disable the button if invalid topic */}
			<button className="btn btn-success addAlign"  onClick={this.addTopicsClick} disabled={this.state.topicButtonDisable}>+Add Topic</button>
			{/* on click should add agenda details and disable the buton if invalid inputs */}
			<button className="btn btn-success addAlign"  onClick={this.submitAgendaButton} disabled={this.state.topicSubmitButtonDisable}>Submit Agenda</button>

			{/* show if no topics added yet */}
			{this.state.topicButtonDisable && 
			<div className="text-danger ml-2 mt-5" data-testid="noTopicsMsg">
			No Topics added
			</div>}
			</div>
			}

			{/* display the list of topics added using li */}
			{this.state.enableTopicsDiv && 
			<div className="container" >
			<div className="card my-3">
			<div className="card-header">Added Topics</div>
			<div className="card-body">
			<ul className="list-group">{this.state.topics.map(item => {
			return <li className="list-group-item" >{item}</li>;})}
			</ul>
			</div>
			<div className="card-footer">Refer the topics you added</div>
			</div>
			</div>

			}
			</div>
			{/* show/hide this following view agenda template */}
			{this.state.viewAgendaEnableDiv && <div className="container" >
			<button className="btn btn-info"  onClick={this.addAgendaClick}>Click on add Agenda</button>
			{/* iterate the agenda details to display */}
			{this.state.agendaDetails.map(det => {
				return (
			

			<div className="card my-3" >
			<div className="card-header">
			{/* {title} */det.title}
			</div>
			<div className="card-body">
			<ul className="list-group">
			{/* iterate the topics to display */}
			{det.topics.map(item => {
			return <li className="list-group-item">
			{/* {topic} */item}
			</li>})}
			</ul>
			</div>
			<div className="card-footer">
			{/* {description} */det.description}
			</div>
			</div>);})}
			</div>}
			</div>
		)
	}
}

export default Agenda;