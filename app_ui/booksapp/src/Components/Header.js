import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import BooksSearch from './BooksSearch'
import GlobalError from './GlobalError'
import './Header.css'
import { Menu, Icon } from 'semantic-ui-react'

const mapStateToProps = state => {
    return {
        ...state.message
    }
}

class Header extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            activeTab: "Home"
        }
    }

    toggleTab = () => {
        let activeTab = this.state.activeTab

        if (activeTab === "Home") {
            activeTab = "Dropbox"
            this.props.history.push("/dropbox")
        }
        else {
            activeTab = "Home"
            this.props.history.push("/")
        }

        this.setState({
            activeTab: activeTab
        })
    }

    render() {
        let headerStyle = {
            "paddingTop": "5px",
            "paddingLeft": "5px"
        }

        if (this.props.errorMessage || this.props.infoMessage)
            headerStyle = {
                ...headerStyle,
                "paddingTop": "10px",
                "position": "relative",
                "top": "-4rem"
            }

        return (
            <div>
                <GlobalError />
                <Menu tabular style={headerStyle}>
                    <Menu.Item name="Home" active={this.state.activeTab === "Home"} onClick={this.toggleTab} />
                    <Menu.Item name="Dropbox" active={this.state.activeTab === "Dropbox"} 
                        onClick={this.toggleTab} />
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <BooksSearch />
                        </Menu.Item>
                        <Menu.Item>
                            <Icon name="log out" />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps)(Header))