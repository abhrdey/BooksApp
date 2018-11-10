import React, { Component } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import HomeFilters from './HomeFilters'
import HomeContent from './HomeContent'

class Home extends Component {
    render() {
        let gridStyle = {
            "marginLeft": "-8rem",
            "paddingTop": "5px"
        }

        return (
            <Container>
                <Grid style={gridStyle}>
                    <Grid.Column width={3}>
                        <HomeFilters />
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <HomeContent />
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

export default Home