import React from 'react'
import '../home.css'
import { useGlobalContext } from './Context'

const SvgTeam = () => {
	const { stats } = useGlobalContext()
	const adj = new Array(stats[0])
	const calculateScore = (data, type) =>
		Object.values(data).reduce(
			(acc, curr) =>
				acc +
				parseInt(curr[`${type}scorepoints`]) +
				parseInt(curr[`${type}framepointsadj`]),
			0
		)
	const homeScore = calculateScore(adj, 'home')
	const awayScore = calculateScore(adj, 'away')

	const calculateFrames = (data, type) =>
		Object.values(data).reduce(
			(acc, curr) =>
				25 -
				(acc +
					parseInt(curr[`homescore`]) +
					parseInt(curr[`awayscore`])),
			0
		)
	const framesLeft = calculateFrames(adj)

	return (
		<svg
			id='Layer_1'
			data-name='Layer 1'
			xmlns='http://www.w3.org/2000/svg'
			width='1652'
			height='120'
		>
			{/* <style>
.scores {
	font-family: OpenSans-SemiBold;
	font-size: 48;
	font-weight: '450';
	}
.race {
		text-align: center;
		font-family: OpenSans-SemiBold;
		font-size: 33;
	}
.name {
		text-align: center;
		align-items: center;
		font-size: 33;
	}
.timer {
		font-family: OpenSans-SemiBold;
		font-size: 32;
	}

</style> */}
			<rect
				width='1652'
				height='60'
				fill='#1e1e1e'
			/>
			<rect
				width='1652'
				height='60'
			/>
			<rect
				id='home'
				x='2'
				y='2'
				width='716'
				height='56'
				fill='#160596'
			/>
			<rect
				id='away'
				x='934'
				y='2'
				width='716'
				height='56'
				fill='#160596'
			/>
			<rect
				x='718'
				y='2'
				width='216'
				height='56'
				fill='black'
			/>
			<rect
				x='2'
				y='2'
				width='1648'
				height='21'
				fill='rgba(217, 217, 217, .2)'
			/>
			<rect
				x='341.5'
				y='69'
				width='341'
				height='50'
			/>
			<rect
				id='progressBar'
				x='403'
				y='71'
				width='218'
				height='46'
				fill='#DEDEDE'
			/>
			<rect
				x='343'
				y='71'
				width='60'
				height='46'
				fill='#76a857'
			/>
			<rect
				x='621'
				y='71'
				width='60'
				height='46'
				fill='black'
			/>
			<rect
				x='345'
				y='69'
				width='339'
				height='21'
				fill='rgba(217, 217, 217, .1)'
			/>
			<g
				id='extension'
				isolation='isolate'
			>
				<text
					transform='translate(347.92 105.41)'
					fill='#fff'
					font-size='32'
					font-weight='600'
					isolation='isolate'
					class='timer'
				>
					Ext
				</text>
			</g>
			<g
				id='timer'
				isolation='isolate'
			>
				<text
					transform='translate(631.69 105.41)'
					fill='#fff'
					font-family='OpenSans-SemiBold'
					font-size='32'
					font-weight='600'
					isolation='isolate'
					class='timer'
				>
					13
				</text>
			</g>
			<g
				id='homePlayer'
				isolation='isolate'
			>
				<text
					transform='translate(360.4 40)'
					fill='#fff'
					textAnchor='middle'
					font-family='OpenSans-SemiBold'
					font-size='33'
					font-weight='600'
					isolation='isolate'
					class='name'
				>
					Damien Mcloughlin
				</text>
			</g>
			<g
				id='awayPlayer'
				isolation='isolate'
			>
				<text
					transform='translate(1300.23 40)'
					textAnchor='middle'
					fill='#fff'
					font-family='OpenSans-SemiBold'
					font-size='33'
					font-weight='600'
					isolation='isolate'
					class='name'
				>
					Andrew Fidge
				</text>
			</g>
			<rect
				id='homeFlag'
				x='11'
				y='12'
				width='55'
				height='35'
				fill='none'
			/>
			<img
				xlinkHref='public/Flag-Australia.png'
				href='./Flag-Australia.png'
				x='11'
				width='55'
				height='35'
				y='12'
			></img>
			<rect
				id='awayFlag'
				x='1586'
				y='12'
				width='55'
				height='37'
				fill='none'
			/>
			<g
				id='raceTo'
				isolation='isolate'
			>
				<text
					transform='translate(745.33 40.3)'
					fill='#fff'
					font-size='33'
					class='race'
				>
					Race To 11
				</text>
			</g>
			<g
				id='homeScore'
				isolation='isolate'
			>
				<text
					transform='translate(636.77 45.62)'
					fill='#fff'
					font-family='OpenSans-SemiBold'
					font-size='48'
					font-weight='600'
					isolation='isolate'
					class='scores'
				>
					7
				</text>
			</g>
			<g
				id='awayScore'
				isolation='isolate'
			>
				<text
					transform='translate(987.77 45.62)'
					fill='#fff'
					font-family='OpenSans-SemiBold'
					font-size='48'
					font-weight='600'
					isolation='isolate'
					class='scores'
				>
					9
				</text>
			</g>
		</svg>
	)
}
// {stats[0].awayframepointsadj===0 && stats[0].awayscorepoints===0 ? stats[0].awayscore : `${awayScore}`}
// {stats[0].homeframepointsadj===0 && stats[0].homescorepoints===0 ? stats[0].homescore : `${homeScore}`}
// {stats[0].homescorepoints>0 ? `${stats[0].homescore}` : ''}
// {stats[0].awayscorepoints>0 ? `${stats[0].awayscore}` : ''}
export { SvgTeam }
