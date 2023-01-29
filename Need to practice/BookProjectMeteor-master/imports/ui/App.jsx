import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 'read' };
        this.setActiveClassOnTab = this.setActiveClassOnTab.bind(this);
        this.handleChangeTabs = this.handleChangeTabs.bind(this);
    }
    getInitialState() {
        return {
            activeTab: 'read',
        };
    }
    setActiveClassOnTab(tab) {
        return this.state.activeTab === tab ? 'active' : '';
    }
    handleChangeTabs(event) {
        this.setState({ activeTab: event.target.getAttribute('data-tab') });
    }
    render(){
        return(

            <div className="Books">
                <h4>{`${this.props.firstName}'s`}</h4>
                <ul className="tabs">
                    <li onClick={ this.handleChangeTabs } className="tab active" data-tab="read">Read</li>
                    <li onClick={ this.handleChangeTabs } className="tab" data-tab="unread">Unread</li>
                </ul>
                <div className="tabs-data">
                    <div id="read-books" className="tabs-data-container active">
                        {/*<ul class="books">*/}
                            {/*{this.props.readBooks.map((book) => {*/}
                                {/*return (<li key={ book.title } class="book">{ book.title } by { book.author }</li>);*/}
                            {/*})}*/}
                        {/*</ul>*/}
                    </div>
                    <div id="unread-books" className="tabs-data-container">
                        <ul className="books">
                            <li className="book">The Course of Love by Alain De Botton</li>
                            <li className="book">Too Soon Old, Too Late Smart by Gordon Livingston</li>
                            <li className="book">Servant Leadership by Robert K. Greenleaf</li>
                        </ul>
                    </div>
                </div>
            </div>

        );
    }
}