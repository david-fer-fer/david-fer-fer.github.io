import React from "react";
import {useTheme} from "next-themes";

const WorkCard = ({type, src, name, description, onClick}) => {
    const {theme} = useTheme();
    return (
        <div
            className={`overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link transition-all ease-out duration-300 hover:scale-105 cursor-pointer
      ${
                /*mounted && */theme === "dark" ? "hover:bg-slate-800" : "hover:bg-tiffanyBlue-100"
            }`}
            onClick={onClick}
        >
            <div
                className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
            >
                <Media type={type} src={src}/>

                {/*<img
          alt={name}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
        ></img>*/}
            </div>
            <h1 className="mt-5 text-3xl font-medium">
                {name ? name : "Project Name"}
            </h1>
            <h2 className="text-xl opacity-50">
                {description ? description : "Description"}
            </h2>
        </div>
    );
};

const Media = ({type, src}) => {
    const ref = React.useRef();
    const [height, setHeight] = React.useState("0px");
    const onLoad = () => {
        setHeight(ref.current?.contentWindow.document.body.scrollHeight + "px");
    };
    switch (type) {
        case "iframe":
            return <iframe ref={ref}
                           onload='javascript:(function(o){o.style.height=o.contentWindow.document.body.scrollHeight+"px";}(this));' src={src} allow="autoplay" data-ruffle-polyfilled="" className={"w-full"}></iframe>;
        case "video":
            return <video autoPlay muted loop id="myVideo">
                <source src={src} type="video/mp4"/>
            </video>
    }
}

export default WorkCard;
