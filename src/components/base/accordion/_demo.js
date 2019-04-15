import React from 'react'
import Accordion from './Accordion';
import AccordionGroup from './AccordionGroup';

const AccordionDemo = () => {
    const accordionData = {
        heading: "Veggies es bonus vobis",
        content: `
            <div class="rich-text">
            <h3>Heading</h3>
            <p>Veggies es bonus vobis, proinde vos postulo essum magis
            kohlrabi welsh onion daikon amaranth tatsoi tomatillo
            melon azuki bean garlic.</p>
            </div>
        `
    }
    const accordionGroupData = Array(3).fill(accordionData);

    return (
        <section className="accordion-demo">
            <div className="container">
                <div>
                    <h3>Single</h3>
                    <p>Single accordion</p>
                    <Accordion heading={accordionData.heading}>
                        {accordionData.content}
                    </Accordion>
                </div>

                <div>
                    <h3>Group</h3>
                    <p>Accordion Group</p>
                    <AccordionGroup data={accordionGroupData} />
                </div>
            </div>
        </section>
    )
}

export default AccordionDemo;