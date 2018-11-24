import React, { Component } from 'react'
import BooksSearch from '../BooksSearch'
import SearchThumbnail from '../Thumbnail/SearchThumbnail'
import { Modal, Grid, Button, Icon, Dimmer, Loader } from 'semantic-ui-react'

class SearchModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchData: undefined,
            setSelectAll: false,
            booksMap: undefined,
            isLoading: false
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.searchData !== this.props.searchData) {
            let booksMap = {}
            let searchData = nextProps.searchData
            for (let index=0; index<searchData.length; index++) {
                let cacheId = searchData[index]["cacheId"]
                booksMap[cacheId] = false
            }
            this.setState({
                searchData: searchData,
                booksMap: booksMap
            })
        }
        if ((nextProps.showModal !== this.props.showModal) && nextProps.showModal === false)
            this.setState({
                isLoading: false
            })
    }

    toggleSelectAll = () => {
        let booksMap = this.state.booksMap
        for (let index in booksMap) {
            if ((!this.state.setSelectAll && !booksMap[index]) ||
                (this.state.setSelectAll && booksMap[index]))
                booksMap[index] = !booksMap[index]
        }
        this.setState({
            booksMap: booksMap,
            setSelectAll: !this.state.setSelectAll
        })
    }

    toggleCheckbox = (cacheId) => {
        let booksMap =  Object.assign({}, this.state.booksMap)
        booksMap[cacheId] = !booksMap[cacheId]
        this.setState({
            booksMap: booksMap,
            setSelectAll: false
        })
    }

    submitSelectedBooksData = () => {
        let booksMap = this.state.booksMap
        let searchData = this.state.searchData
        let selectedData = []

        for (let index=0; index<searchData.length; index++) {
            if (booksMap[searchData[index]["cacheId"]])
                selectedData.push(searchData[index])
        }
        this.setState({
            isLoading: true
        })
        this.props.selectedBooksData(selectedData)
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
            "left": "58rem"
        }
        let selectAllButtonStyle = {
            "marginBottom": "10px",
            "position": "relative",
            "left":  this.state.setSelectAll?"62rem":"63rem"
        }
        let closeIconStyle = {
            "position": "relative",
            "top": "1rem",
            "right": "-2rem",
            "cursor": "pointer"
        }
        let loader = (
            <div>
                <Dimmer active inverted>
                    <Loader />
                </Dimmer>
            </div>
        )
        let searchData = this.state.searchData
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
                    let cacheId = data["cacheId"]
                    let title = data["title"]
                    let thumbnail = pagemap["cse_thumbnail"]?pagemap["cse_thumbnail"][0]:null
                    let thumbnailLink = thumbnail?thumbnail["src"]:null
                    let columnData = (
                        <Grid.Column key={start_index} style={columnStyle}>
                            <SearchThumbnail imageLink={thumbnailLink} title={title} toggleCheckbox={() => this.toggleCheckbox(cacheId)}
                                checked={this.state.booksMap?this.state.booksMap[cacheId]:false} display="Search" />
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
            <Modal open={this.props.showModal || this.props.isLoading} size="large">
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
                        <Button basic color="blue" onClick={this.toggleSelectAll}>
                            {this.state.setSelectAll?"Deselect All":"Select All"}
                        </Button>
                    </div>
                    {booksList}
                    <div style={paginationButtonStyle}>
                        {this.props.currPageIndex>1?<Button basic color="green" style={this.props.currPageIndex<91?null:{"position":"relative","left":"5rem"}} onClick={this.props.handlePreviousClick}>Previous</Button>:null}
                        {this.props.currPageIndex<91?<Button basic color="green" style={this.props.currPageIndex>1?{"marginLeft": "5px"}:{"position":"relative","left":"7rem"}} onClick={this.props.handleNextClick}>Next</Button>:null}
                    </div>
                    {this.props.isLoading||this.state.isLoading?loader:null}
                </Modal.Content>
                <Modal.Content style={{"borderTop": "1px solid rgba(34,36,38,.15)"}}>
                    <Button color="red" onClick={this.submitSelectedBooksData}>Save</Button>
                </Modal.Content>
            </Modal>
        )
    }
}

export default SearchModal