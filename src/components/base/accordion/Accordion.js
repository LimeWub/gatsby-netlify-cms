import React from 'react'
import PropTypes from 'prop-types'

class Accordion extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: props.expanded || false,
            disabled: props.disabled || false
        }
    }

    expanded(bool) {
        this.setState(function (prevState, props) {
            let expanded = !prevState.expanded;
            if (bool !== undefined) expanded = !!bool;
            return { expanded }
        });
    }

    disabled(bool) {
        this.setState(function (prevState, props) {
            let disabled = !prevState.disabled;
            if (bool !== undefined) disabled = !!bool;
            return { disabled }
        });
    }

    trigger = React.createRef();
    focus() {
        this.trigger.current.focus();
    }

    _id = (() => {
        const random = Math.random().toString(36).substring(7);
        return 'accordion_' + random;
    })()
    render() {
        // (prop) Heading level
        let h_ = this.props.headingLevel;
        h_ = h_ >= 1 && h_ <= 6 ? h_ : 1; // h1 - h6
        const H = 'h' + h_;

        return (
            <React.Fragment>
                <button className="accordion__trigger"
                    ref={this.trigger}
                    aria-controls={this._id}
                    aria-expanded={this.state.expanded}
                    aria-disabled={this.state.disabled}
                    onClick={(e) => this.expanded()}
                    >
                    <H>{this.props.heading}</H>
                    <i className="icon icon--accordion" />
                </button>
                <div id={this._id} className="accordion__content" 
                     dangerouslySetInnerHTML={{ __html: this.props.children || this.props.content}} />
            </React.Fragment>
        )
    }
}

Accordion.propTypes = {
    expanded: PropTypes.bool,
    disabled: PropTypes.bool,
    headingLevel: PropTypes.number,
    heading: !PropTypes.string,
    content: !PropTypes.string
}

export default Accordion;