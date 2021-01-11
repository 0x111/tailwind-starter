import React from "react";
import SearchButton from "./components/SearchButton";
import Navigation from "./components/Navigation";

class App extends React.Component {
    render() {
        const { name } = this.props;
        return (
            <div className='mx-auto h-screen bg-gray-100'>
               <Navigation />
            </div>
        );
    }
}

export default App;