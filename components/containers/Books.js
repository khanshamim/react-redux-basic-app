import React from 'react';
import { getState } from 'redux';

import BookCard from  '../presentationals/BookCard';
import AddBook from '../../actions/AddBook';
import DeleteBook from '../../actions/DeleteBook';
import EditBook from '../../actions/EditBook';


//Provider/Container React Component
class Books extends React.Component{

    dispatchAction (input) {
        switch (input) {
          case "TRASH":
            this.props.store.dispatch(DeleteBook());
            break;
          case "PLUS":
            this.props.store.dispatch(AddBook());
            break;
            case "PENCIL":
            this.props.store.dispatch(EditBook());
            break;
        }
      }

    render() {
        const stateProps = this.props.store.getState();
        console.log(stateProps);
        const bookItems = stateProps.books.map((book) =>
        <BookCard key = { book } 
                  stateProps = { stateProps }
                  dispatchAction = {this.dispatchAction.bind(this) }/>
      );
      
        return (
            <div className="books-container">
                {bookItems}
            </div>
        )
    }

    componentWillMount() {
        this.props.store.subscribe(this.forceUpdate.bind(this));
      }
}


export default Books