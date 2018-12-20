import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import SearchThumbnail from '../Thumbnail/SearchThumbnail'

class HomeContent extends Component {
    render() {
        let headingStyle = {
            "marginLeft": "10px",
            "borderBottom": "1px solid #d4d4d5",
            "fontSize": "25px",
            "fontFamily": "auto"
        }
        if (this.props.selectedBooks) {
            let selectedBooks = this.props.selectedBooks
            let numberBooks = selectedBooks.length<3?selectedBooks.length:3
            let rowData = []
            for (let index=0; index<numberBooks; index++) {
                let data = selectedBooks[index]
                if (data["volumeInfo"]) {
                    let volumeInfo = data["volumeInfo"]
                    //let pagemap = data["pagemap"]
                    let title = volumeInfo["title"]
                    //let thumbnail = pagemap["cse_thumbnail"][0]
                    //let thumbnailLink = thumbnail["src"]
                    let imageLinks = volumeInfo["imageLinks"]
                    let thumbnailLink = imageLinks["smallThumbnail"]
                    let columnData = (
                        <Grid.Column key={index}>
                            <SearchThumbnail imageLink={thumbnailLink} title={title} display="Home" />
                        </Grid.Column>
                    )
                    rowData.push(columnData)
                }
                else {
                    let title = data["title"]
                    let thumbnailLink = data["thumbnail_link"]
                    let columnData = (
                        <Grid.Column key={index}>
                            <SearchThumbnail imageLink={thumbnailLink} title={title} display="Home" />
                        </Grid.Column>
                    )
                    rowData.push(columnData)
                }
            }
            return(
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