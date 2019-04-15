import React from 'react'


const TypographyDemo = () => {
    return (
        <section className="typography-demo">
            <div className="container">
                <div className="text-container">

                
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>

                <h1 className="text-playful">Heading 1</h1>
                <h2 className="text-playful">Heading 2</h2>
                <h3 className="text-playful">Heading 3</h3>
                <h4 className="text-playful">Heading 4</h4>
                <h5 className="text-playful">Heading 5</h5>
                <h6 className="text-playful">Heading 6</h6>

                <p>Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard.</p>
                <p className="text-playful">Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard.</p>
            
                <h1>Heading 1</h1>
                <p>Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard.</p>
                
                <h2>Heading 2</h2>
                <p>Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard.</p>
                
                <h3>Heading 3</h3>
                <p>Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard.</p>
                
                <h4>Heading 4</h4>
                <p>Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard.</p>
                
                <h5>Heading 5</h5>
                <p>Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard.</p>
                
                <h6>Heading 6</h6>
                <p>Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard.</p>

                <h1 className="p">Reset Heading</h1>

                <h1 className="p text-bold">Emphasis 1</h1>
                <h2 className="p">Emphasis 2</h2>

                    <button className="btn">Button</button>
                    
                    <a href="/" className="btn">Anchor</a>

                <div className="spacing">
                    <ul className="ul-styled">
                        <li><a href="/" 
                        className="a a--underline">List1</a></li>
                        <li><a href="/" 
                        className="a a--underline">List2</a></li>
                    </ul>
                    <ul className="ul-horizontal ul-styled">
                        <li><a href="/" 
                        className="a a--underline a--playful">List1</a></li>
                        <li><a href="/" 
                        className="a a--underline a--playful">List2</a></li>
                    </ul>
                    <p>Beetroot water spinach okra water chestnut ricebean
                    pea <a href="/" className="a">catsear 
                    courgette</a> summer purslane. Water spinach arugula pea tatsoi
                    aubergine spring onion busht omato kale radicchio 
                    turnip chicory salsify pea sprouts fava bean. 
                    Dandelion zucchini burdock yarrow chickpea
                    dandelion sorrel courgette turnip greens
                    tigernut soybean radish artichoke wattle 
                    seed endive <a href="/" className="a">groundnut
                    broccoli</a> arugula.</p>
                    <button className="btn">Button</button> 
                </div>

                <div className="spacing 
                highlight-red">
                    <ul className="ul-styled">
                        <li><a href="/" 
                        className="a a--underline">List1</a></li>
                        <li><a href="/" 
                        className="a a--underline">List2</a></li>
                    </ul>
                    <ul className="ul-horizontal ul-styled">
                        <li><a href="/" 
                        className="a a--underline a--playful">List1</a></li>
                        <li><a href="/" 
                        className="a a--underline a--playful">List2</a></li>
                    </ul>
                    <p>Beetroot water spinach okra water chestnut ricebean
                    pea <a href="/" className="a">catsear 
                    courgette</a> summer purslane. Water spinach arugula pea tatsoi
                    aubergine spring onion busht omato kale radicchio 
                    turnip chicory salsify pea sprouts fava bean. 
                    Dandelion zucchini burdock yarrow chickpea
                    dandelion sorrel courgette turnip greens
                    tigernut soybean radish artichoke wattle 
                    seed endive <a href="/" className="a">groundnut
                    broccoli</a> arugula.</p>
                    <button className="btn">Button</button> 
                </div>

                <div className="spacing highlight-green">
                </div>

                <div className="spacing highlight-yellow">
                </div>

                <div className="spacing highlight-blue">
                </div>

                <div className="spacing highlight-grey">
                </div>

                <a href="/">Anchor</a>
                <a href="/" className="a">Anchor</a>
                <a href="/" className="a a--playful">Anchor</a>

                <br />
                <ul>
                    <li>List item</li>
                    <li>List item</li>
                    <li>List item</li>
                    <li>List item</li>
                    <li>List item</li>
                </ul>

                <ul className="list-decorated">
                    <li>List item</li>
                    <li>List item</li>
                    <li>List item</li>
                    <li>List item</li>
                    <li>
                        List item
                        <ul className="list-decorated">
                            <li>List item</li>
                            <li>List item</li>
                            <li>List item</li>
                            <li>List item</li>
                            <li>List item</li>
                        </ul>
                    </li>
                </ul>

                <ul className="list-vertical">
                    <li>List item</li>
                    <li>List item</li>
                    <li>List item</li>
                    <li>List item</li>
                    <li>List item</li>
                </ul>
                </div>
            </div>
        </section>
    )
}

export default TypographyDemo;