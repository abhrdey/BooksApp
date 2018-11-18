import React, { Component } from 'react'
import BooksSearch from '../BooksSearch'
import SearchThumbnail from '../Thumbnail/SearchThumbnail'
import { Modal, Grid, Image, Button, Icon } from 'semantic-ui-react'

class SearchModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            setSelectAll: false
        }
    }

    toggleSelectAll = () => {
        this.setState({
            setSelectAll: !this.state.setSelectAll
        })
    }
    render() {
        let rowStyle = {
            "display": "inline-flex",
            "marginLeft": "5px",
            "marginBottom": "5px"
        }
        let columnStyle = {
            "marginLeft": "10px"
        }
        let paginationButtonStyle = {
            "position": "relative",
            "left": "60rem"
        }
        let selectAllButtonStyle = {
            "marginBottom": "10px",
            "position": "relative",
            "left": "63rem"
        }
        let closeIconStyle = {
            "position": "relative",
            "top": "1rem",
            "right": "-2rem",
            "cursor": "pointer"
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
                    let title = data["title"]
                    let thumbnail = pagemap["cse_thumbnail"][0]
                    let thumbnailLink = thumbnail["src"]
                    let columnData = (
                        <Grid.Column key={start_index} style={columnStyle}>
                            {/* <Image src={thumbnailLink} /> */}
                            <SearchThumbnail imageLink={thumbnailLink} title={title} setSelectAll={this.state.setSelectAll} />
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
                <Modal.Header>
                    Search Books
                    <div style={{"display": "inline-flex", "marginLeft": "40rem"}}>
                        <BooksSearch />
                        <div style={closeIconStyle} onClick={this.props.closeModal}>
                            <Icon name="close" />
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Content>
                    <div style={selectAllButtonStyle}>
                        <Button basic color="blue" onClick={this.toggleSelectAll}>Select All</Button>
                    </div>
                    {booksList}
                    <div style={paginationButtonStyle}>
                        <Button basic color="green">Previous</Button>
                        <Button basic color="green" style={{"marginLeft": "5px"}}>Next</Button>
                    </div>
                </Modal.Content>
                <Modal.Content style={{"borderTop": "1px solid rgba(34,36,38,.15)"}}>
                    <Button color="red">Save</Button>
                </Modal.Content>
            </Modal>
        )
    }
}

export default SearchModal