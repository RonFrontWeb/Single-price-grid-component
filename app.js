function App() {
    return(
        <Grid/>
    )
}

function Grid() {
    return(
        <div className="gridlayout">
                <Card className="card card--white">
                    <Title className="title" title="Join our community"/>
                    <Text className="highlight" text="30-day, hassle-free money back guarantee"/>
                    <Text 
                    className="text text--gray" 
                    text="  Gain access to our full library of tutorials along with expert code reviews. 
                            Perfect for any developers who are serious about honing their skills."/>
                </Card>

                <Card className="card card--darkcyan">
                    <Title className="title title--white" title="Monthly Subscription"/>
                    <Text className="text" text="$29"/>
                    per month
                    <Text className="text" text="Full access for less than $1 a day"/>
                    <Button>Sign Up</Button>
                </Card>

                <Card 
                className="card card--cyan"
                text="more shit"
                
                >
                <Title className="title title--white" title="Why Us"/>
                    <Text className="text text--white" text="Tutorials by industry experts
                Peer &amp; expert code review
                Coding exercises
                Access to our GitHub repos
                Community forum
                Flashcard decks
                New videos every week"/>
                </Card>
        </div>
    )
}

function Card({className,children}) {
    return (
        <div className={className}>
            {children}
        </div>
    )
}
function Title({title,className}) {
    return (
        <h2 className={className}>{`${title}`}</h2>
    )
}

function Text({text,className}) {
    return (
        <p className={`${className}`}>{text}</p>
    )
}
function span({span,className}) {
    return (
        <span className={`${className}`}>{span}</span>
    )
}

function Button(props) {
    return (
        <button className="button">{props.children}</button>
    )
}


ReactDOM.createRoot(document.getElementById("root")).render(<App />);
