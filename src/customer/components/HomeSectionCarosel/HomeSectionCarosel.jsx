import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useState } from "react";
import AliceCarousel from "react-alice-carousel";

function HomeSectionCrousal({ data, sectionName }) {

    const [activeIndex, setActiveIndex] = useState(0);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1080: { items: 5 }
    };

    const syncActiveIndex = ({ item }) => { setActiveIndex(item); };

    const items = data.slice(0, data.length).map((item) => <HomeSectionCrousalCard product={item} />);

    return (
        <div className="relative px-4 lg:px-8">
            <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
            <div className="relative p-5">
                <AliceCarousel
                    mouseTracking
                    disableDotsControls
                    // disableButtonsControls  // ---> also remove this
                    //activeIndex={activeIndex}  // ---> no need to this anymore
                    items={items}
                    responsive={responsive}
                    controlsStrategy="responsive"
                    autoPlay
                    autoPlayInterval={5000}
                    infinite
                    keyboardNavigation
                    onSlideChanged={syncActiveIndex}
                    renderPrevButton={activeIndex !== 0 && renderPrevButton}
                    renderNextButton={activeIndex !== items.length - 5 && renderNextButton} />
            </div>
        </div>
    );

}

function renderNextButton() {
    return <Button
        variant="contained" className="z-50 bg-gray-50"
        sx={{ position: "absolute", top: "8rem", left: "0rem", transform: "translateX(-50%) rotate(90deg)", bgcolor: "white" }} aria-label="Next">
        <KeyboardArrowRight sx={{ transform: "rotate(90deg)", color: "black" }} />
    </Button>;
}

function renderPrevButton() {
    return <Button
        variant="contained" className="z-50 bg-gray-50"
        sx={{ position: "absolute", top: "8rem", right: "0rem", transform: "translateX(50%) rotate(90deg)", bgcolor: "white" }} aria-label="Next">
        <KeyboardArrowLeft sx={{ transform: "rotate(90deg)", color: "black" }} />
    </Button>;
}


export default HomeSectionCrousal;

function HomeSectionCrousalCard({ product }) {
    return (
        <div className="cursor-pointer flex flex-col items-center bg-gray-50 rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
            <div className="h-[13rem] w-[10rem]">
                <img className="object-cover object-top mt-4 w-full h-full"
                    src={product.imageUrl} alt="" />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>
                <p className="mt-2 text-sm text-gray-500">Men Solid Pure Cotton Straight Kurta</p>
            </div>
        </div>
    );
}