import React, { Component } from 'react'
import { connect } from 'react-redux'
import DropboxFilters from './DropboxFilters'
import DropboxContent from './DropboxContent'
import DropboxAuthModal from './DropboxAuthModal'
import { Container, Grid } from 'semantic-ui-react'


const mapStateToProps = state => {
    return {
        ...state.dropbox
    }
}

class Dropbox extends Component {
    render() {
        let gridStyle = {
            "marginLeft": "-8rem",
            "paddingTop": "5px"
        }

        return (
            <Container>
                {this.props.isAuthenticated?
                    (
                        <Grid style={gridStyle}>
                            <Grid.Column width='3'>
                                <DropboxFilters />
                            </Grid.Column>
                            <Grid.Column width='13'>
                                <DropboxContent />
                            </Grid.Column>
                        </Grid>
                    ):
                    <DropboxAuthModal />
                }
            </Container>
        )
    }
}

export default connect(mapStateToProps)(Dropbox)