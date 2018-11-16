import React, { Component } from 'react'
import { Segment, Grid, Image } from 'semantic-ui-react'

class HomeContent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchData: undefined
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log("books data: ", nextProps.searchData)
        this.setState({
            searchData: nextProps.searchData
        })
    }

    render() {
        let booksList = []
        if (this.state.searchData) {
            let numberBooks = this.state.searchData.length
            let numberRows = numberBooks%4>0?(Math.floor(numberBooks/4)+1):(Math.floor(numberBooks/4))
            for (let row=0; row<numberRows; row++) {
                let index = row*4
                let rowData = []
                for (let start_index=index; ((start_index<(index+4))&&(start_index<numberBooks)); start_index++) {
                    let data = this.state.searchData[start_index]
                    let pagemap = data["pagemap"]
                    let thumbnail = pagemap["cse_thumbnail"][0]
                    let thumbnailLink = thumbnail["src"]
                    let columnData = (
                        <Grid.Column key={start_index}>
                            <Image src={thumbnailLink} />
                        </Grid.Column>
                    )
                    rowData.push(columnData)
                }
                let rowNode = (
                    <Grid.Row key={index} columns={4}>
                        {rowData}
                    </Grid.Row>
                )
                booksList.push(rowNode)
            }
        }

        return(
            // <Segment placeholder>
            // This is Home content section
            // </Segment>
            <Grid>
                {/* <Grid.Row columns={4}>
                    <Grid.Column>
                        <Image src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS9I0H7RpPAlycfVSFMzaPBTbNuMg0rz5vhkk7owttMifjn8bAgybowP8A" />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS9I0H7RpPAlycfVSFMzaPBTbNuMg0rz5vhkk7owttMifjn8bAgybowP8A" />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS9I0H7RpPAlycfVSFMzaPBTbNuMg0rz5vhkk7owttMifjn8bAgybowP8A" />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS9I0H7RpPAlycfVSFMzaPBTbNuMg0rz5vhkk7owttMifjn8bAgybowP8A" />
                    </Grid.Column>
                </Grid.Row> */}
                {booksList}
            </Grid>
        )
    }
}

export default HomeContent