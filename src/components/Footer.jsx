import React from 'react'
import { Link } from 'react-router-dom'

import { northwesternPurple, richBlack10 } from '../misc/AppColors'
import facebook from '../images/facebook.png'
import github from '../images/github-circle.png'

import Strings from '../misc/Strings'
import Urls from '../misc/Urls'
import Utils from '../misc/Utils'

const style = {
	background: {
		backgroundColor: northwesternPurple,
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center'
	},
	panel: {
		width: '300px',
		margin: '25px',
		color: richBlack10
	},
	icon: {
		marginRight: '10px'
	},
	anchorColor: {
		color: richBlack10
	}
}

const appName = Strings.get(Strings.AppName)

const Footer = () => (
	<div style={style.background}>
		<div style={style.panel}>
			<h1 style={{ marginTop: 0 }}>{appName}</h1>
			<p>&copy; {Utils.getYear()} <a style={style.anchorColor} href={Urls.get(Urls.Github)}>{Strings.get(Strings.Author)}</a></p>
			<p>{appName} is not created by Northwestern University.</p>
			<Link to="/tos"><p style={style.anchorColor}>Terms of Service and Privacy Policy</p></Link>
			<Link to="/acknowledgements"><p style={style.anchorColor}>Acknowledgements</p></Link>
		</div>
		<div style={style.panel}>
			<a href={Urls.get(Urls.Facebook)}><img src={facebook} alt="Facebook" style={style.icon} /></a>
			<a href={Urls.get(Urls.Github)}><img src={github} alt="Github" style={style.icon} /></a>
		</div>
		<div style={style.panel}>
			<Link to="/"><p style={style.anchorColor}>{appName}</p></Link>
			<Link to="/about"><p style={style.anchorColor}>About</p></Link>
			<Link to="/faq"><p style={style.anchorColor}>FAQ</p></Link>
			<Link to="/bug"><p style={style.anchorColor}>Report a Bug</p></Link>
			<Link to="/contact"><p style={style.anchorColor}>Contact</p></Link>
		</div>
	</div>
)

export default Footer
