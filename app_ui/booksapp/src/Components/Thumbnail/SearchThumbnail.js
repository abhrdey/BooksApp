import React, { Component } from 'react'
import { Card, Image, Checkbox } from 'semantic-ui-react'
import './SearchThumbnail.css'


class SearchThumbnail extends Component {
    render() {
        return (
            <Card>
                <Image src={this.props.imageLink} />
                <Checkbox checked={this.props.setSelectAll} />
                <Card.Content>
                    <Card.Header>
                        {this.props.title}
                    </Card.Header>
                </Card.Content>
            </Card>
        )
    }
}

export default SearchThumbnail