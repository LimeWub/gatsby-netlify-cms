import React from 'react'
import {
    TypographyDemo,
    AccordionDemo
} from '../components/base/_demo'

const components = [
    {
        name: "Intro",
        component: () => (
            <div>Styleguide intro. This could be it's own file but tmp leaving in here!</div>
        )
    },
    {
        name: "Typography",
        component: TypographyDemo
    },
    {
        name: "Accodion",
        component: AccordionDemo
    },

]


class StyleguidePage extends React.PureComponent {
    constructor(props) {
        super();

        if (!components.length) return; // Nothing to do here

        this.state = {
            visible: components[0]
        }
    }

    render() {
        const visible = this.state.visible
        const Component = visible.component;
        return (
            <main className="styleguide">
                <aside className="styleguide__sidebar sidebar">
                    <nav className="styleguide__nav">
                        <ul className="styleguide__nav-list">
                            {components.map((node, i) => (
                                <li key={i}
                                    className={`styleguide__nav-item 
                                ${ node.name === this.state.visible.name ? "styleguide__nav-item--active" : ""}`}>
                                    <button className="styleguide__nav-link"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            this.setState({ visible: node })
                                        }}>
                                        {node.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>
                <section className="styleguide__component">
                    <h2>{visible.name}</h2>
                    <Component />
                </section>
            </main>
        )
    }
}

export default StyleguidePage