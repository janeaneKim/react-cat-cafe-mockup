import React from "react";
import MapImage from './components/Images/tokyo-pin.png';
import CafeImage from './components/Images/entrance.JPG';

function About (props){
    return (
        <div>
            <div>
                <h1>Who we are </h1>
                <p>Quisque id ligula eu velit vestibulum rhoncus. Proin quis semper mi, vestibulum pretium eros. Suspendisse id nulla lorem. Nulla facilisi. Integer interdum egestas pharetra. Morbi sollicitudin urna tortor, non rhoncus justo scelerisque eu. Proin eget odio quis nibh dignissim ullamcorper. Duis ac varius libero. Praesent sed magna eu ipsum faucibus rutrum. Suspendisse interdum velit vel dui euismod, a aliquet est egestas. 
                </p>
            </div>
            <img src={CafeImage} alt="cafe-entrance"></img>
            <p>Sed vulputate est ut nunc rhoncus vestibulum. Aenean vitae enim eget arcu pulvinar ullamcorper vitae eget ipsum. Nunc quis vulputate ligula. Donec id sollicitudin magna, id accumsan velit. Quisque sollicitudin dolor ut metus vestibulum faucibus. Fusce ipsum ipsum, rhoncus vitae lacinia in, porta vitae erat. Fusce ac iaculis nisi, quis tristique nisi. Vestibulum pretium, turpis sed cursus sagittis, lorem ante egestas enim, sed commodo dui enim pretium tellus. Vivamus libero erat, vestibulum a malesuada a, eleifend non nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis massa gravida, vehicula erat quis, condimentum mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed finibus, libero sed ultrices placerat, nisi ipsum aliquet augue, ut tincidunt ex nibh ac massa. 
            </p>
            <img src={MapImage} alt="map"></img>
        </div>
    )
}

export default About;