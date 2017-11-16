import Iframe from 'react-iframe-component'


// <iframe style="width:100%; max-width:1200px; height:500px;" frameborder="0" scrolling="no" src="https://www.hikingproject.com/widget/map?favs=1&location=fixed&x=-11720099&y=4865450&z=9&h=500"></iframe>

const IframeWindow = () => (
    <div>
        <Iframe
            url="https://www.hikingproject.com/widget/map?favs=1&location=fixed&x=-11720099&y=4865450&z=9&h=500"
            width="500px"
            height="500px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            allowFullScreen />
    </div>
)

export default IframeWindow
