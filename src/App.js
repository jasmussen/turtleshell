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
const colorSchemes = [
	[ '#ff9f60', '#fff923', '#ff9a03', '#4a3800', '#9afdff' ],
	[ '#1115ff', '#1294ff', '#11ffd0', '#fffab9', '#008ec4' ],
	[ '#ff6be5', '#b777ff', '#ff15f5', '#6a26ff', '#53a4ff' ],
	[ '#00e085', '#30f700', '#04ff54', '#acf900', '#009df8' ],
	[ '#470064', '#001559', '#1e003f', '#1900e1', '#ecffc7' ],
	[ '#d0cfd0', '#a6a6a7', '#4c4c4b', '#a72400', '#7661ff' ],
	[ '#060605', '#171717', '#5c5d5c', '#dfdfdf', '#1a7bff' ],
]

const intro = (
	<>
		<p><strong>heuristic</strong>, <em>adj.</em>: enabling a person to discover or learn something for themselves.</p>
		<p>This website is an <a href="https://github.com/jasmussen/turtleshell">open source</a> collection of personal heuristics I've learned over the years.</p>
		<p>Hopefully they can shield you as they have me. Be mindful, though: no advice applies universally.</p>
		<p>— <a href="http://moc.co">Joen, October 2019</a></p>
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

function getRandomColor( i, scheme ) {
	// Note to self: by picking a number between 0 and 1 as the seed, multiplying by the array length,
	// it means you'll always pick a number in the array.

	// Non-random color scheme.
	// The % modulo operator ensures that the array starts again from zero when a larger than array.length number is fed.
	// This makes it cycle through the available color arrays, one after the other, and cycle when the array ends.
	let colorScheme = scheme % colorSchemes.length;

	// Random color from that scheme.
	let colorFromScheme = Math.floor( seed( i ) * colorSchemes[ colorScheme ].length );

	return colorSchemes[ colorScheme ][ colorFromScheme ];
}


/**
 * Output the Heuristic based on the URL
 */

class Heuristic extends React.Component {
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

		// Output elements to transform.
		let items = [];
		let numItems = 10;
		let perspectiveAlgo = Math.round( seed( currentHeuristic ) * 5 + 20 );
		let scaleMultiplier = 6;
		for (var i = 1; i <= numItems; i++) {
			let s1 = seed( seed( currentHeuristic ) * i );
			let s2 = seed( seed( currentHeuristic ) * i + 1 );
			let s3 = seed( seed( currentHeuristic ) * i + 2 );
			let s4 = Math.round( seed( seed( currentHeuristic ) * i + 3 ) * 10 );
			//let s5 = Math.round( seed( seed( currentHeuristic ) * i + 3 ) * 5 );
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
					//filter: 'blur(' + s5 + 'px)', // Blur, good idea, needs the right context.
				}} />
			);
		}

		// Render.
		return (
			<>
				<h1>A Collection of Personal Heuristics. Snacksized.</h1>
				<meta name="theme-color" content={{ backgroundColor: getRandomColor( currentHeuristic, currentHeuristic ) }} />
				<ul className="heuristics__navigation">
					<li className={ !id ? 'is-active is-home' : 'is-home' } ><Link to="/">Home</Link></li>

					{heuristics.map((value, index) => {
						let i = parseInt(index) + 1;
						return <li className={ id === i ? 'is-active' : '' } key={index}><Link to={"/" + i}>{i}</Link></li>
					})}
				</ul>
				<h2>{ currentHeuristic === 0 ? '' : currentHeuristic }</h2>
				<div className="heuristic__quote"
					style={{
						backgroundColor: getRandomColor( currentHeuristic, currentHeuristic ),
					}}>
					{ heuristic }
				</div>
				<section className="heuristic" onClick={ this.handleClick }>
					<div className="heuristic__primary"
						style={{
							backgroundColor: getRandomColor( currentHeuristic, currentHeuristic),
							perspective: perspectiveAlgo + 'px'
							}}>
						{ items }
					</div>
					<div className="heuristic__clone"
						style={{
							backgroundColor: getRandomColor( currentHeuristic, currentHeuristic),
							perspective: perspectiveAlgo + 'px'
							}}>
						{ items }
					</div>
					<svg width="100" height="200" viewBox="0 0 100 200">
						<g style={{
							fill: getRandomColor( seed( currentHeuristic + 6 ), currentHeuristic),
						}}>
							<path className="m__b1" d="M85 85L75 75 65 65V50L55 40V20L45 30v20L35 60 25 70h-5l-5 5v10h25L30 95h-5l-5 5h55v-5L65 85h20zm-35 5v5h-5V85h10l-5 5z" />
							<path className="m__b2" opacity=".4" d="M50 165l5-5 10-10H55l5-5h5v-10H55l5-5h10l10-10H65l5-5h-5l10-10v-5H20l5 5h5l10 10H15v5h35l-5 5H15l5 5h5l5 5h15l5 5H35l10 10v20l10 10v-15h-5zm-5-50v-10h5v5l5 5H45z" />
						</g>
						<g style={{
							fill: getRandomColor( seed( currentHeuristic + 1 ), currentHeuristic),
						}}>
							<path className="m__f1" opacity=".8" d="M65 50L55 40H45l10 10h10zm10 25H55l10 10h20L75 75z" />
							<path className="m__f2" opacity=".6" d="M45 50L25 70h10l20-20z" />
							<path className="m__f3" opacity=".4" d="M25 85h10V70H25v15zm30-35v25h10V50H55z" />
						</g>
					</svg>
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
					<Route exact path="/:id" component={Heuristic} />
					<Route exact path="" component={Heuristic} />
				</Switch>
			</Router>
		)
	}
}

export default App;
