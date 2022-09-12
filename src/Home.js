import React from "react";
import CatCafe from "./components/Images/cat-cafe.jpg";
import { useLocation } from 'react-router-dom';

function Home(props){
    let location = useLocation();
    let state =  location.state;

    let value = "not logged in";
    if(state){
      value="Welcome back " + state.loginName;
    }

    return(
        <div>
            <div>
                <h3>{value}</h3>
                <h1>Whiskers' Cat Cafe</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna cursus eget nunc scelerisque viverra mauris. Vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. In vitae turpis massa sed elementum tempus egestas sed. Accumsan lacus vel facilisis volutpat est velit egestas. Felis eget velit aliquet sagittis id. </p>
            </div>
            <img src={CatCafe} alt="cat-cafe"></img>
            <div>
                <p>Pellentesque ac purus ac nibh placerat ultricies quis sit amet ipsum. Nunc gravida ac nunc non dapibus. Nunc suscipit nunc non ipsum tincidunt hendrerit sit amet sit amet dui. Aliquam quis maximus massa, ac condimentum ligula. Suspendisse eget ligula id enim aliquet malesuada vel sit amet sapien. Aliquam risus est, consectetur pretium ornare at, elementum ac lectus. Duis sollicitudin tortor eu nibh dictum, id commodo arcu dictum. Mauris in libero interdum lectus vehicula aliquam vel ac augue. Praesent vel quam eu urna lacinia laoreet. Duis eu nunc neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur fringilla ex at felis rutrum pharetra eget a dui. </p>
            </div>

        </div>
    )
}

export default Home;