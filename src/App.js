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
	[ [ '#aa3f00' ], [ '#faffc4' ], [ '#aa3f00', '#eb9b00', '#83006f', '#b30074', '#ffd32a' ], ],
	[ [ '#2d7a00' ], [ '#efffc2' ], [ '#389c00', '#a8ab00', '#da4800', '#ffbc07', '#e3ff94' ], ],
	[ [ '#ff9f60' ], [ '#00113c' ], [ '#ff9f60', '#fff923', '#ff9a03', '#4a3800', '#9afdff' ], ],
	[ [ '#1115ff' ], [ '#fffab9' ], [ '#1115ff', '#1294ff', '#11ffd0', '#fffab9', '#008ec4' ], ],
	[ [ '#6a26ff' ], [ '#bcfffe' ], [ '#ff6be5', '#b777ff', '#ff15f5', '#6a26ff', '#53a4ff' ], ],
	[ [ '#470064' ], [ '#ecffc7' ], [ '#470064', '#001559', '#1e003f', '#1900e1', '#ecffc7' ], ],
]

const intro = (
	<>
		<p>This is an <a href="https://github.com/jasmussen/turtleshell">open source</a> collection of personal learnings and principles I've collected over the years.</p>
		<p>They are shared here in the hope that they might serve as basic heuristics enabling others to create their own set of principles.</p>
		<p>Be mindful: no advice applies universally.</p>
		<p>— <a href="http://moc.co">Joen</a>, October 2019</p>
	</>
);

const heuristics = [
	<blockquote>If you want to count the stars in the sky, just start counting.<br />— Selma, age 6</blockquote>,
	<p>Be careful to not get caught up chasing someone else's dream. It's probably a distraction from what really gets you up in the morning.</p>,
	<p>You can do amazing things. Just not all at once. But don't let this discourage you from accomplishing what's under your control. </p>,
	<p>Good design has gravity. The more you work on it, the more gravity it gets. At some point, the pieces start falling into place on their own.</p>,
	<p>The best design is invisible. It is functional to the point that you forget how it works, you just use it. You might even forget it took effort to invent once upon a time. Such it is: if you do things right, people won't know you've done anything at all. </p>,
	<p>When working on difficult designs, it's important to believe that answers are out there, that finding them is a matter of time and effort rather than hope and random chance. Keep exploring until the fog lifts, and eventually answers will present themselves.</p>,
	<p><a href="https://pages.wustl.edu/DC175/incomplete-manifesto-growth">Bruce Mau says</a>: begin anywhere. Depending on the complexity of the project, you might want to start with what is easiest or indeed what is hardest.</p>,
	<p>Talk alone does not move mountains. You can suggest moving the mountain is a priority. You can suggest that without a clear plan for moving the mountain, the project is never going to get off the ground. All of that may be true and agreed upon. But none of that is actually going to move the mountain. Sometimes you just have to grab a shovel and a wheelbarrow and start working.</p>,
	<p>Every thing around you is made by someone. Which means it can be made better still. It also means unless you're willing to make it better, it's likely going to stay the way it is.</p>,
	<p>Ideas are a renewable resource. Spend them as you get them, don't save them for rainy days. Besides, they have a tendency to be brittle when meeting with reality. Ideas are rarely as valuable as you might think.</p>,
	<p>Whitespace has intrinsic value, both in design and in life. As you work to free up space, be mindful that the newly reclaimed land isn't immediately consumed by something else swooping in to fill the void. Radiohead and Marie Kondo both agree: strive to put everything in it's right place.</p>,
	<p>Sometimes it's good to follow an idea to the end, even if the idea turns out to be a dud. An old friend of mine used to say there's no such thing as wasted work. This is true, because you'll have cauterized that avenue of exploration; you'll know for sure that idea wasn't the one you needed. But it might resurface in the future, in a different form.</p>,
	<p>If it doesn't work, it's not real. Whatever design you are working on has to meet with reality at some point, and this process is messy, full of compromises, and a crucial step of the process.</p>,
	<p>There is a great danger in a design process that is purely driven by data. It might feel like data always drives the right work, but data ignores the magic that has to happen in order for truly great solutions to be imagined. </p>,
	<p>Kirk and Spock were better together. Kirk represented action, Spock brought the other end of the spectrum, strategy. Their dynamic put them square in the middle, perfectly balanced. Either extreme is tempting. But without the strategy, the action is likely to fail. And without action, the the strategy is meaningless.</p>,
	<p>When you say yes, say yes deeply.</p>,
	<p>My grandfather used to say: get a good chair, because you can't always be motivated, and sometimes you have to sit on it until you're done.</p>,
	<p>In software development, committing code is a great way to progress out of a mire. Often times it's faster to build and test two proposed but conflicting directions, than it is to discuss which one to pursue.</p>,
	<p>Share knowledge, then there will be more of it, as my grandfather used to say.</p>,
	<p>No job requires you to be unkind.</p>,
	<p>Sleep makes everything better, don't underestimate its powers of healing. Get as much of it as you can.</p>,
	<p>Every day is a chance to start anew. Consider the person you want to be, and if what you see in the mirror today is not where you want to be, it is never too late to start correcting mistakes, making amends, working to live a life you can be proud of.</p>,
	<p>A career is not a zero sum game. Others can succeed without that impeding your own success. In fact often helping others be successful will help you many times over in the long run.</p>,
	<p>Consider that whatever shortcomings we perceive about our individual situations often originate from human ideals that change like the seasons. Don't allow them to put you down. </p>,
	<p>Having principles is important. Being open to changing them in light of new information is even more important. Everything changes, despite our best wishes for things to stay the same. Closing oneself off from revisiting strongly held convictions is just going to make the ongoing change that much more painful.</p>,
	<p>Automate. Almost no task is too small to automate, you'll be surprised how much time it'll save you in the long term.</p>,
	<p>If your feedback is worth sharing, it's worth more than 2 cents.</p>,
	<p>You don't have to have an opinion on everything. And you don't even have to have a strong opinion when you do have one. You can't know or do everything, which is why it's so fortunate that you can work with people who complete you. If you let them.</p>,
	<p>Leadership does not require a title.</p>,
]


/**
 * Random Seed Functions
 */

function seed( number ) {
	number += 1138;
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

	return (
		<>
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
	let numItems = 10;
	let scaleMultiplier = 6;
	for (var i = 1; i <= numItems; i++) {
		let s1 = seed( seed( currentHeuristic ) * i );
		let s2 = seed( seed( currentHeuristic ) * i + 1 );
		let s3 = seed( seed( currentHeuristic ) * i + 2 );
		let s4 = Math.round( seed( seed( currentHeuristic ) * i + 3 ) * 10 );
		items.push(
			<span key={ i } style={{
				backgroundColor: getRandomColor( i + 1 * currentHeuristic, currentHeuristic),
				left: ( 100 / numItems ) * i + "%",
				top: 100 * s1 + "%",
				transform: 
					'translate(-50%, -50%)'
					+ 'translateZ(' + s4 + 'px)'
					+ 'rotate(' + s2 * 360 + 'deg)'
					+ 'scale(' + s3 * scaleMultiplier + ')',
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
					<path opacity=".1" d="M40 155h10l10-10H50l-10 10zm10-15l-10-10H30l10 10h10zm-10-20l-10-10H20l10 10h10zm25-5l-15 15h10l15-15H65z" />
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
				<h1>Snacksized Personal Learnings, Served on a Turtleshell.</h1>
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
