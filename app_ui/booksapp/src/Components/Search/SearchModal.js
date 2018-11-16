import React, { Component } from 'react'
import { Modal, Grid, Image, Button } from 'semantic-ui-react'

class SearchModal extends Component {
    render() {
        let rowStyle = {
            "display": "inline-flex",
            "marginLeft": "5px",
            "marginBottom": "5px"
        }
        let columnStyle = {
            "marginLeft": "10px"
        }
        let searchData = this.props.searchData
        let booksList = []
        if (searchData) {
            let numberBooks = searchData.length
            let numberRows = numberBooks%3>0?(Math.floor(numberBooks/3)+1):(Math.floor(numberBooks/3))
            for (let row=0; row<numberRows; row++) {
                let index = row*3
                let rowData = []
                for (let start_index=index; ((start_index<(index+3))&&(start_index<numberBooks)); start_index++) {
                    let data = searchData[start_index]
                    let pagemap = data["pagemap"]
                    let thumbnail = pagemap["cse_thumbnail"][0]
                    let thumbnailLink = thumbnail["src"]
                    let columnData = (
                        <Grid.Column key={start_index} style={columnStyle}>
                            <Image src={thumbnailLink} />
                        </Grid.Column>
                    )
                    rowData.push(columnData)
                }
                let rowNode = (
                    <Grid.Row key={index} columns={3} style={rowStyle}>
                        {rowData}
                    </Grid.Row>
                )
                booksList.push(rowNode)
            }
        }
        return (
            <Modal open={this.props.showModal} size="large">
                <Modal.Header>Search Books</Modal.Header>
                <Modal.Content>
                    {booksList}
                </Modal.Content>
                <Modal.Content>
                    <Button color="green" onClick={this.props.closeModal}>Close</Button>
                </Modal.Content>
            </Modal>
        )
    }
}

export default SearchModal