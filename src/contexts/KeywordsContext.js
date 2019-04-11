import React from "react";
const KeywordsContext = React.createContext('test');
const KeywordsContextConsumer = KeywordsContext.Consumer;

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keywords: []
        }
    }

    addKeyword(kword) {
        this.setState(function (prevState, props) {
            const keywords = prevState.keywords;
            keywords.push(kword);
            return { keywords }
        });
    }

    removeKeyword(kword) {
        this.setState(function (prevState, props) {
            const keywords = prevState.keywords;
            keywords.splice(keywords.indexOf(kword), 1);
            return { keywords }
        });
    }

    render() {
        return (
            <KeywordsContext.Provider value={{
                state: this.state,
                addKeyword: this.addKeyword.bind(this),
                removeKeyword: this.removeKeyword.bind(this)
            }}>
                {this.props.children}
            </KeywordsContext.Provider>
        )
    }
}

export { KeywordsContextConsumer };
export default App;