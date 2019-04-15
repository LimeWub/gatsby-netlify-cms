import React from 'react'
import PropTypes from 'prop-types'
import Accordion from './Accordion'

class AccordionGroup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: 0
        }
    }

    accordionRefs = [];
    setAccordionRef = (ref) => {
        this.accordionRefs.push(ref);
    };

    focusAccordion(i) {
        const accordions = this.accordionRefs;
        if ( i < 0 ) {
            i = accordions.length - 1
        } else if (accordions.length - 1 < i) {
            i = 0
        }

        this.setState({
            active: i
        }, () => {
            accordions[i].focus();
        });
    }

    shouldStepOut(i) {
        const accordions = this.accordionRefs;
        if ( i < 0 || accordions.length - 1 < i) return true;
        return false;
    }

    onKeyDown(e) {
        const i = this.state.active;
        switch (e.key) {
            case "Tab":
                if (e.shiftKey) {
                    if (this.shouldStepOut(i - 1)) return; // Exit early
                    this.focusAccordion(i - 1);
                    break;
                }
                if (this.shouldStepOut(i + 1)) return; // Exit early
                this.focusAccordion(i + 1);
                break;
            case "ArrowDown":
                this.focusAccordion(i + 1);
                break;
            case "ArrowUp":
                this.focusAccordion(i - 1);
                break;
            case "Home":
                this.focusAccordion(0);
                break;
            case "End":
                this.focusAccordion(-1);
                break;
            default:
                return;
        }

        e.preventDefault();
        e.stopPropagation();
    }

    render() {
        return (
            // Todo: Focus index has issues when leaving the group then getting back in it
            <ul className="accordion-group" onKeyDown={(e) => this.onKeyDown(e)}>
            {this.props.data.map((node, i) => (
                <li key={i} className="accordion-group__item">
                    <Accordion {...node} ref={this.setAccordionRef} />
                </li>
            ))}
            </ul>
        )
    }
}

AccordionGroup.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            expanded: PropTypes.bool,
            disabled: PropTypes.bool,
            headingLevel: PropTypes.number,
            heading: !PropTypes.string,
            content: !PropTypes.string
        })
    )
}

export default AccordionGroup;