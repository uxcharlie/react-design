import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import './Header.css'



class Header extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll',
    this.handleScroll)
  }

  handleScroll = (event) => {
    const ScrollTop = window.pageYOffset
    if (ScrollTop > 50) {
      this.setState ({ hasScrolled: true})
    } else {
      this.setState ({ hasScrolled: false})
    }
    
  }



  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScroll' : 'Header'}>
  
      <div className="HeaderGroup">
    
        <Link to="/"> <img src="https://designcode.io/images/logos/logo.svg"  alt=""  fill="white" width="50" /> </Link>
        <Link to="/courses">Courses</Link>
        <Link to="/downloads">Downloads</Link>
        <Link to="/workshops">Workshops</Link>
        <Link to="/buy"><button>Buy</button></Link>
      
      </div>
      
    
    </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
