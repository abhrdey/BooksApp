import React, { Component } from 'react'
import BooksSearch from './BooksSearch'
import './Header.css'
import { withRouter } from 'react-router-dom'
import { Menu, Icon } from 'semantic-ui-react'

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

        return (
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
        )
    }
}

export default withRouter(Header)