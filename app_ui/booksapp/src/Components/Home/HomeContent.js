import React, { Component } from 'react'
import { Segment, Grid } from 'semantic-ui-react'
import SearchThumbnail from '../Thumbnail/SearchThumbnail'

class HomeContent extends Component {
    render() {
        let headingStyle = {
            "marginLeft": "10px",
            "borderBottom": "1px solid #d4d4d5",
            "font-size": "25px",
            "font-family": "auto"
        }
        if (this.props.selectedBooks) {
            let selectedBooks = this.props.selectedBooks
            let numberBooks = selectedBooks.length<3?selectedBooks.length:3
            let rowData = []
            for (let index=0; index<numberBooks; index++) {
                let data = selectedBooks[index]
                let pagemap = data["pagemap"]
                let title = data["title"]
                let thumbnail = pagemap["cse_thumbnail"][0]
                let thumbnailLink = thumbnail["src"]
                let columnData = (
                    <Grid.Column key={index}>
                        <SearchThumbnail imageLink={thumbnailLink} title={title} display="Home" />
                    </Grid.Column>
                )
                rowData.push(columnData)
            }
            return(
                // <Segment placeholder>
                //     This is Home content section
                // </Segment>
                <Grid>
                    <Grid.Row style={headingStyle}>
                        Recently Added
                    </Grid.Row>
                    <Grid.Row columns={3}>
                        {rowData}
                    </Grid.Row>
                </Grid>
            )
        }
        return null
    }
}

export default HomeContent