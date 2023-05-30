import { useEffect } from "react";


//Components
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

import {Box , styled} from '@mui/material';

import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const Component = styled(Box)`
    padding: 20px 10px;
    background: #f2f2f2;
`
        

    

const Home = () => {

    const {products} = useSelector(state => state.getProducts);
    

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts()) //This getProducts is different from previous one.It's a function defined in productAction.js
    }, [dispatch])   //Componenst did mount

    return(
        <>
            <NavBar />
            <Component>
                <Banner />
                <MidSlide products={products} title="Deal of the Day" timer={true}/>
                <MidSection />
                <Slide products={products} title="Discounts for you" timer={false} />
                <Slide products={products} title="Suggesting Items" timer={false} />
                <Slide products={products} title="Top Selection" timer={false} />
                <Slide products={products} title="Recommended Items" timer={false} />
                <Slide products={products} title="Trending Items" timer={false} />
                <Slide products={products} title="Season Topics" timer={false} />
                <Slide products={products} title="Top Deals on Accessories" timer={false} />
            </Component>
            
        </>
    )
}

export default Home;