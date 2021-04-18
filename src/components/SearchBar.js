import React from 'react';

class SearchBar extends React.Component{
    onFormSubmit = event => {
        event.preventDefault() 
        console.log(this.state.term)   

        this.props.onSubmit(this.state.term) 
    }

    state = {term: ''};

    render(){
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input  type="text" 
                                value={this.state.term} 
                                onChange={(event) => this.setState({term: event.target.value})}/> 
                        <button style={{marginTop: "10px"}} className="ui primary button">Submit</button>
                    </div>
                </form>
            </div>
        )
    };
};

export default SearchBar;