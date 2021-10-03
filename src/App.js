/**
 * TSH App Dev
 */

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.scss';


/**
 * Global Variables
 */

// The color scheme is chosen by the number, looping. I.e. the scheme is not random.
// But the order and which colors inside are then used randomly by elements.
// Note: If there are too few colors in the array, it is likely the same color may get chosen.
// For contrast, works best when very bright or dark colors are chosen.
const colorSchemes = [
	// First array are dark colors.
	// Second array are light colors.
	// Third array are random colors.

	// 2021- ...:
	[ [ 'var(--a--dark)' ], [ 'var(--a--light)' ], [ 'var(--a--a)', 'var(--a--b)', 'var(--a--c)', 'var(--a--d)', 'var(--a--e)' ], ],
	[ [ 'var(--b--dark)' ], [ 'var(--b--light)' ], [ 'var(--b--a)', 'var(--b--b)', 'var(--b--c)', 'var(--b--d)', 'var(--b--e)' ], ],
]

const intro = (
	<>
		<h1>Advice to My Younger Self</h1>
		<p>A collection of learnings and aspirations I wish I had known years ago. Shared <a href="https://github.com/jasmussen/turtleshell">publicly</a> in case they might be useful to you.</p>
		<p>— <a href="http://moc.co">Joen</a>, October 2019</p>
	</>
);

const heuristics = [
	<blockquote>
		<p>If you want to count the stars in the sky, just start counting.</p>
		<cite>— Selma, age 6</cite>
	</blockquote>,
	<p>Be careful to not get caught up chasing someone else's dream. It's probably a distraction from what really gets you up in the morning.</p>,
	<p>You can do amazing things. Just not all at once. But don't let this discourage you from accomplishing what's under your control. </p>,
	<p>Good design has gravity. The more you work on it, the more gravity it gets. At some point, the pieces start falling into place on their own.</p>,
	<p>The best design is invisible. It is functional to the point that you forget how it works, you just use it. You might even forget it took effort to invent once upon a time. Such it is: if you do things right, people won't know you've done anything at all. </p>,
	<p>When working on difficult designs, it's important to believe that answers are out there, that finding them is a matter of time and effort rather than hope and random chance. Keep exploring until the fog lifts, and eventually answers will present themselves.</p>,
	<p>Bruce Mau says: begin anywhere. Depending on the complexity of the project, you might want to start with what is easiest or indeed what is hardest.</p>,
	<p>Talk alone does not move mountains. You can suggest moving the mountain is a priority. You can suggest that without a clear plan for moving the mountain, the project is never going to get off the ground. All of that may be true and agreed upon. But none of that is actually going to move the mountain. Sometimes you just have to grab a shovel and a wheelbarrow and start working.</p>,
	<>
		<p>Every thing around you is made by someone. Which means it can be made better still.</p>
		<p>It also means unless you're willing to make it better, it's likely going to stay the way it is.</p>
	</>,
	<>
		<p>Ideas are a renewable resource. Spend them as you get them, don't save them for rainy days.</p>
		<p>Besides, they have a tendency to be brittle when meeting with reality. Ideas are rarely as valuable as you might think.</p>
	</>,
	<p>Whitespace has intrinsic value, both in design and in life. As you work to free up space, be mindful that the newly reclaimed land isn't immediately consumed by something else swooping in to fill the void. Radiohead and Marie Kondo both agree: strive to put everything in it's right place.</p>,
	<>
		<p>Sometimes it's good to follow an idea to the end, even if the idea turns out to be a dud.</p>
		<p>An old friend of mine used to say there's no such thing as wasted work. You'll have cauterized that avenue of exploration and know for sure that idea wasn't the one you needed.</p>
	</>,
	<>
		<p>If it doesn't work, it's not real.</p>
		<p>Whatever design you are working on has to meet with reality at some point, and this process is messy, full of compromises, and a crucial step of the process.</p>
	</>,
	<>
		<p>There is danger in a process that is driven by data alone.</p>
		<p>It ignores the magic that has to happen in order for truly great solutions to be imagined.</p>
	</>,
	<>
		<p>Kirk and Spock were better together. Kirk brought the action, Spock tempered it with strategy.</p>
		<p>Their dynamic helped them bridge the spectrum and balance both extremes. Without the strategy, the action will fail, but without action, the strategy is meaningless.</p>
	</>,
	<p>When you say yes, say yes deeply.</p>,
	<p>My grandfather used to say:<br /> "Get a good chair, because you can't always be motivated, and sometimes you're going to have to sit on it until you're done."</p>,
	<>
		<p>In software development, committing code is a great way to progress out of a mire.</p>
		<p>Often times it's faster to build and test two proposed but conflicting directions, than it is to discuss which one to pursue.</p>
	</>,
	<p>Share knowledge, then there will be more of it, as my grandfather used to say.</p>,
	<p>No job requires you to be unkind.</p>,
	<p>Sleep makes everything better, don't underestimate its powers of healing. Get as much of it as you can.</p>,
	<p>Every day is a chance to start anew. Consider the person you want to be, and if what you see in the mirror isn't right, it is <strong>never</strong> too late to make a change.</p>,
	<>
		<p>A career shouldn't be a zero sum game.</p>
		<p>Others can succeed without that impeding your own success. In fact often helping others be successful will help you many times over in the long run.</p>
	</>,
	<p>Consider that whatever shortcomings we perceive about our individual situations often originate from human ideals that change like the seasons. So don't allow that to put you down. </p>,
	<>
		<p>Having principles is important. Being open to changing them in light of new information is even more important.</p>
		<p>Everything changes, despite our best wishes for things to stay the same. Closing oneself off from revisiting strongly held convictions is just going to make the ongoing change that much more painful.</p>
	</>,
	<p>Almost no task is too small to automate. You'll be surprised how much time it'll save you in the long run.</p>,
	<p>If your feedback is worth sharing, it's worth more than 2 cents.</p>,
	<>
		<p>You don't have to have an opinion on everything.</p>
		<p>You can't know or do everything, which is why it's so fortunate that you can work with people who complete you. If you let them.</p>
	</>,
	<p>Small acts of leadership do not require a title. When the outcome drives the process, it doesn't matter who makes the right decision.</p>,
	<p>Don't build the tool until you know what it should accomplish. Like any good mystery novel, start with the ending.</p>,
	<>
		<p>For every problem you fix, there's one less problem to fix.</p>
		<p>Keep going.</p>
	</>,
	<>
		<p>Comparing yourself to others is self-destructive. The best antidote to this is to set personal goals.</p>
		<p>Incidentally, don't knock others for having New Year's resolutions. Best case scenario, change happens. Worst case: nothing happens.</p>
	</>,
	<>
		<p>Harry S. Truman said: It is amazing what you can accomplish if you do not care who gets the credit.</p>
		<p>Ronald Reagan said, most similarly: There is no limit to the amount of good you can do if you don’t care who gets the credit.</p>
		<p>Despite being on opposing sides of the political spectrum, they agreed on this principle: that actual progress, by nature, is bi-partisan, and is best made when the progress itself drives the effort.</p>
	</>,
	<p>Invest in trees. The long term ROI could be your way of life.</p>,
]


/**
 * Random Seed Functions
 */

function seed( number ) {
	number += 1329;
	let seed = Math.sin( number ++ ) * 10000;
	seed = seed - Math.floor( seed );
	return seed;
}

function getRandomColor( seedNumber, scheme ) {
	// seedNumber is the number to be randomized.
	// scheme is the scheme from the array of color arrays to use.

	// Note to self: by picking a number between 0 and 1 as the seed, multiplying by the array length,
	// it means you'll always pick a number in the array.

	// Non-random color scheme.
	// The % modulo operator ensures that the array starts again from zero when a larger than array.length number is fed.
	// This makes it cycle through the available color arrays, one after the other, and cycle when the array ends.
	let colorScheme = scheme % colorSchemes.length;

	// Store random color from that scheme.
	let colorFromScheme = Math.floor( seed( seedNumber ) * colorSchemes[ colorScheme ][2].length );

	return colorSchemes[ colorScheme ][2][ colorFromScheme ];
}

function getDarkColor( scheme ) {
	let colorScheme = scheme % colorSchemes.length;
	return colorSchemes[ colorScheme ][0][0];
}

function getLightColor( scheme ) {
	let colorScheme = scheme % colorSchemes.length;
	return colorSchemes[ colorScheme ][1][0];
}


/**
 * Navigation
 */

function Navigation( { currentHeuristic, id } ) {

	let current = parseInt( id );
	let next = current + 1;
	let prev = current - 1;

	if ( !current ) {
		prev = heuristics.length;
		next = 1;
	}
	if ( current === 1 ) {
		prev = "";
	}
	if ( current === heuristics.length ) {
		next = "";
	}

	// Parse the CSS variable.
	let themeColorProp = getRandomColor( 1 * currentHeuristic, currentHeuristic).replace('var(', '').replace(')', '');
	let themeColor = getComputedStyle(document.documentElement).getPropertyValue( themeColorProp );

	return (
		<>
			<meta name="theme-color" content={ themeColor } />
			<ul className="heuristics__navigation">
				<li className={ !id ? 'is-active is-home' : 'is-home' } ><Link to="/">Home</Link></li>
				{heuristics.map((value, index) => {
					let i = parseInt(index) + 1;
					return <li className={ id === i ? 'is-active' : '' } key={index}><Link to={"/" + i}>{i}</Link></li>
				})}
			</ul>
			<div className="heuristics__navigation-next-prev"
				style={{
					backgroundColor: getDarkColor( currentHeuristic ),
					color: getLightColor( currentHeuristic ),
				}}>
				<Link to={"/" + prev}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 20l-8-8 8-8 1.414 1.414L8.828 12l6.586 6.586"/></svg> Previous</Link>
				<Link to={"/" + next}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 20l8-8-8-8-1.414 1.414L15.172 12l-6.586 6.586"/></svg> Next</Link>
			</div>
		</>
	);
}


/**
 * Heuristic Quote
 */

function Quote( { currentHeuristic, heuristic } ) {
	return (
		<div className="heuristic__quote"
			style={{
				backgroundColor: getDarkColor( currentHeuristic ),
				color: getLightColor( currentHeuristic ),
			}}>
			{ heuristic }
		</div>
	);
}


/**
 * Sky
 */

function Sky( { className, currentHeuristic } ) {
	// Output elements to transform.
	let items = [];
	let numItems = 12; // Prev. 10 
	let scaleMultiplier = 6;
	const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
	let viewportMultiplier = vw / 1000;

	for (var i = 1; i <= numItems; i++) {
		let s1 = seed( seed( currentHeuristic ) * i );
		let s2 = seed( seed( currentHeuristic ) * i + 1 );
		let s3 = seed( seed( currentHeuristic ) * i + 2 );
		let s4 = Math.round( seed( seed( currentHeuristic ) * i + 3 ) * 3 );
		items.push(
			<span key={ i } style={{
				backgroundColor: getRandomColor( i + 1 * currentHeuristic, currentHeuristic),
				left: ( 100 / numItems ) * i + "%",
				top: 100 * s1 + "%",
				transform: 
					'translate(-50%, -50%)'
					+ 'translateZ(' + s4 + 'px)'
					+ 'rotate(' + s2 * 360 + 'deg)'
					+ 'scale(' + s3 * scaleMultiplier * viewportMultiplier + ')',
				opacity: s1,
			}} />
		);
	}

	let perspectiveAlgo = Math.round( seed( currentHeuristic ) * 5 + 20 );

	return (
		<div className={ className }
			style={{
				backgroundColor: getRandomColor( currentHeuristic, currentHeuristic ),
				perspective: perspectiveAlgo + 'px'
				}}>
			{ items }
		</div>
	);
}


/**
 * Mountain
 */

function Mountain( { className, currentHeuristic } ) {
	return (
		<div className={ className }>
			<div className="m__group" style={{ bottom: 60 * seed( currentHeuristic ) + "%" }}>
				<svg className="m__group-bg" style={{ fill: getDarkColor( currentHeuristic ) }} width="100" height="200" viewBox="0 0 100 200">
					<path d="M85 85L75 75 65 65V50L55 40V20L45 30v20L35 60 25 70h-5l-5 5v10h25L30 95h-5l-5 5h55v-5L65 85h20zm-35 5v5h-5V85h10l-5 5z" />
					<path d="M60 145v-15l15-15v-15H20v10l10 10v10l10 10v35l10-10v-10z" />
				</svg>
				<svg className="m__group-fg" style={{ fill: getLightColor( currentHeuristic ) }} width="100" height="200" viewBox="0 0 100 200">
					<path opacity=".3" d="M50 145h10v-15H50v15zm15-45v15h10v-15H65zm-35 30h10v-10H30v10z" />
					<path fill="black" opacity=".1" d="M40 155h10l10-10H50l-10 10zm10-15l-10-10H30l10 10h10zm-10-20l-10-10H20l10 10h10zm25-5l-15 15h10l15-15H65z" />
					<path opacity=".6" d="M65 50L55 40H45l10 10h10zm10 25H55l10 10h20L75 75z" />
					<path opacity=".4" d="M45 50L25 70h10l20-20z" />
					<path opacity=".2" d="M25 85h10V70H25v15zm30-35v25h10V50H55z" />
				</svg>
			</div>
		</div>
	);
}


/**
 * Output the Heuristic based on the URL
 */

class HeuristicScene extends React.Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(e) {
		e.preventDefault()

		let current = parseInt( this.props.match.params.id );
		let next = 1;

		if ( !isNaN(current) ) {
			next = current + 1;
		}
		if (current === heuristics.length ) {
			next = "";
		}

		// This should navigate to the next item.
		this.props.history.push( '/' + next );
	}

	render() {
		let id = parseInt( this.props.match.params.id );
		let currentHeuristic = id;
		let heuristic;

		// Show homepage or heuristic.
		if ( !currentHeuristic ) {
			heuristic = intro;
			currentHeuristic = 0; // Must be zero.
		} else {
			heuristic = heuristics[currentHeuristic - 1];
		}

		// Render.
		return (
			<>
				<Navigation id={ id } currentHeuristic={ currentHeuristic } />
				<h2>{ currentHeuristic === 0 ? '' : currentHeuristic }</h2>
				<Quote currentHeuristic={ currentHeuristic } heuristic={ heuristic } />

				<section className="heuristic" onClick={ this.handleClick }>
					<Sky className="heuristic__primary" currentHeuristic={ currentHeuristic } />
					<Sky className="heuristic__clone" currentHeuristic={ currentHeuristic } />
					<Mountain className="m" currentHeuristic={ currentHeuristic } />
					<Mountain className="m__clone" currentHeuristic={ currentHeuristic } />
				</section>
			</>
		);
	}
}


/**
 * Render the Heuristics App
 */

class App extends React.Component {
	ComponentWithRegex({ match }) {
		return (
		<div>
			<h3>Only asc/desc are allowed: {match.params.direction}</h3>
		</div>
		);
	}

	render() {
		// The basename attribute makes it run in a subfolder.
		return (
			<Router basename={'/'}>
				<Route
					path="/order/:direction(asc|desc)"
					component={this.ComponentWithRegex}
				/>
				<Switch>
					<Route exact path="/:id" component={HeuristicScene} />
					<Route exact path="" component={HeuristicScene} />
				</Switch>
			</Router>
		)
	}
}

export default App;
