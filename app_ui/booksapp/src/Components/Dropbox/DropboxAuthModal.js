import React, { Component } from 'react'
import { Card, Button } from 'semantic-ui-react'
import request from 'superagent'
import ActionConstants from '../../Constants/ActionNames'

class DropboxAuthModal extends Component {

    open_redirect_window = (url) => {
        window.open(url)
    }

    handleDbxConnect = () => {
        request.get(ActionConstants.API_HOST + "/dropbox/oauth/login").then(response => {
            console.log(response)
            if (response["status"] === 200) {
                let redirect_uri = response["body"]
                this.open_redirect_window(redirect_uri)
            }
        })
    }

    render() {
        let cardStyle = {
            "position": "relative",
            "left": "25%",
            "marginTop": "15px",
            "width": "50%"
        }
        return (
            <Card style={cardStyle}>
                <Card.Content style={{"height": "70%"}}>
                    <Card.Header>
                        Dropbox
                    </Card.Header>
                    <Card.Meta style={{"marginTop": "10px"}}>
                        Your Dropbox interface
                    </Card.Meta>
                    <Card.Description style={{"marginTop": "20px"}}>
                        Connect your Dropbox & integrate with BooksApp
                    </Card.Description>
                </Card.Content>
                <Card.Content>
                    <Button basic color="green" onClick={this.handleDbxConnect}>
                        Connect
                    </Button>
                </Card.Content>
            </Card>
        )
    }
}

export default DropboxAuthModal