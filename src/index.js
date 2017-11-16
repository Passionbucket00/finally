import _ from 'lodash'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


import VideoDetail from './components/video_detail'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import MenuBar from './components/menu_bar'
import FooterMenu from "./components/footer_menu"
import DrawerRight from "./components/drawer_right"


const API_KEY = 'AIzaSyAmMqGG8Pah26gX4ii70-41O8gOUDayFUU'

const Menu = () => (
    <MuiThemeProvider>
        <MenuBar/>
    </MuiThemeProvider>
)

const Footer = () => (
    <MuiThemeProvider>
        <FooterMenu/>
    </MuiThemeProvider>
)

const Button = () => (
    <MuiThemeProvider>
        <DrawerRight/>
    </MuiThemeProvider>
)

// Create a new component. This component should produce some HTML

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            videos: [],
            selectedVideo: null
        }

        this.videoSearch('Queens Of the Stone Age')
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
        })

    }


  render() {
      const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

      return (
          <div>
              <Menu/>
              <SearchBar onSearchTermChange={videoSearch} />
              <Button/>
              <VideoDetail video={this.state.selectedVideo} />
              <VideoList
                  onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                  videos={this.state.videos} />
              <Footer/>
          </div>
      )
  }
}



// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))