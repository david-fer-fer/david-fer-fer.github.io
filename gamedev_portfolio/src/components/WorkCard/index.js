import React from "react";
import {useTheme} from "next-themes";
import Popup from "reactjs-popup";
import Header from "../Header";

const WorkCard = ({type, src, name, headline, description, url}) => {
    const {theme} = useTheme();
    return (
        <Popup trigger={<div className={`overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link transition-all ease-out duration-300 hover:scale-105 cursor-pointer
      ${/*mounted && */theme === "dark" ? "hover:bg-slate-800" : "hover:bg-tiffanyBlue-100"
        }`}>
            <div className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto">
                <Media type={type} src={src}/>
            </div>
            <h1 className="mt-5 text-3xl font-medium">
                {name ? name : "Project Name"}
            </h1>
            <h2 className="text-xl opacity-80">
                {headline ? headline : "Description"}
            </h2>
            <p className="text-lg opacity-50">
                {description ? description : "Description"}
            </p>
        </div>}
               modal
               nested
        >
            {close => (
                <>
                    <i className="fas fa-times-circle absolute -right-3 -top-3 z-10 text-gray-50 rounded-full text-2xl cursor-pointer" onClick={close}></i>
                    <iframe src={url} allow="autoplay" data-ruffle-polyfilled=""
                                className={"w-full h-full mx-auto absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"}/>
                </>
            )}
        </Popup>
    );
};

const Media = ({type, src}) => {
    const ref = React.useRef();
    const [height, setHeight] = React.useState("0px");
    const onLoad = () => {
        setHeight(ref.current?.contentWindow.scrollHeight + "px");
    };
    switch (type) {
        case "iframe":
            return <iframe ref={ref}
                           width="100%" height="100%"
                           src={src} allow="autoplay" data-ruffle-polyfilled=""></iframe>;
        case "video":
            return <video autoPlay muted loop id="myVideo">
                <source src={src} type="video/mp4"/>
            </video>
        case "image":
            return <img
                alt={"work card image"}
                className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
                src={src}
            ></img>
    }
}

export default WorkCard;
