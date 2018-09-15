import React, {Component} from 'react';


class SearchBar extends Component{

    render(){
        return (
            <div className="mb-4">
                <input placeholder="Search..." className="form-control" type="text" onChange={ (e) => this.props.handleSearch(e) }/>
            </div>
        );
    }

}

export default SearchBar;