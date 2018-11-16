import React, { Component } from 'react'
import DropboxFilters from './DropboxFilters'
import DropboxContent from './DropboxContent'
import { Container, Grid } from 'semantic-ui-react'

class Dropbox extends Component {
    render() {
        let gridStyle = {
            "marginLeft": "-8rem",
            "paddingTop": "5px"
        }

        return (
            <Container>
                <Grid style={gridStyle}>
                    <Grid.Column width='3'>
                        <DropboxFilters />
                    </Grid.Column>
                    <Grid.Column width='13'>
                        <DropboxContent />
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

export default Dropbox