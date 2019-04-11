import React from 'react'
import PropTypes from 'prop-types'
import { KeywordsContextConsumer } from "../contexts/KeywordsContext.js"

class KeywordInput extends React.Component {
    handleChange(event, context) {
        if (event.target.checked) {
            context.addKeyword(this.props.keyword.id)
        } else {
            context.removeKeyword(this.props.keyword.id)
        }
    }

    render() {
        const random = Math.random().toString(36).substring(7);
        const id = this.props.keyword.id;
        const name = this.props.keyword.name;
        const _id = id + '_' + random;
        return (
            <KeywordsContextConsumer>
                {context => (
                    <div className={((context.state.keywords.indexOf(id) >= 0) ? 'active' : '')}>
                        <input id={_id} type="checkbox" onChange={(e) => this.handleChange(e, context)} />
                        <label htmlFor={_id}>{name}</label>
                    </div>
                )}
            </KeywordsContextConsumer>
        )
    }
}

KeywordInput.propTypes = {
    keyword: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string
    })
}

export default KeywordInput;
