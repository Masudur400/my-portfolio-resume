// import { FaNode, FaReact } from "react-icons/fa";
// import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { SiExpress, SiJavascript, SiMongodb } from "react-icons/si";

 
// const Skills = () => {
//     return (
//         <div className="text-white">
//              <h3 className="md:text-3xl text-2xl font-bold text-center">Skills</h3>
//              <div data-aos="zoom-in" className="my-6 flex gap-2 justify-center items-center px-3">
//                 <p><FaReact className="text-sky-500 text-2xl md:text-6xl"></FaReact></p>
//                 <p><RiTailwindCssFill className="text-sky-500 text-2xl md:text-6xl"></RiTailwindCssFill></p>
//                 <p><IoLogoCss3 className="text-indigo-500 text-2xl md:text-6xl"></IoLogoCss3 ></p>
//                 <p><SiJavascript className="text-yellow-500 text-2xl md:text-6xl"></SiJavascript></p>
//                 <p><IoLogoHtml5 className="text-orange-500 text-2xl md:text-6xl"></IoLogoHtml5></p>
//                 <p><FaNode className="text-green-500 text-2xl md:text-6xl"></FaNode></p>
//                 <p><SiExpress className="text-white text-2xl md:text-6xl"></SiExpress></p>
//                 <p><SiMongodb className="text-green-500 text-2xl md:text-6xl"></SiMongodb ></p>
//              </div>
//         </div>
//     );
// };

// export default Skills;




import { CSS3, ExpressJsDark, Firebase, Git, GitHubDark, HTML5, JavaScript, MongoDB, NodeJs, React, TailwindCSS } from "developer-icons";
import {useState} from "react";

const DragAndDrop = () => {

    const cardData = [
        {
            id: 1,
            image: <HTML5 />,
            title: 'HTML'
        },
        {
            id: 2,
            image: <CSS3 />,
            title : "CSS"
        },
        {
            id: 3,
            image: <TailwindCSS />,
            title:'Tailwind CSS'
        },
        {
            id: 4,
            image: <JavaScript />,
            title:'Java Script'
        },
        {
            id: 5,
            image: <React />,
            title:'React'
        },
        {
            id: 6,
            image: <NodeJs />,
            title:'Node js'
        },
        {
            id: 7,
            image: <ExpressJsDark />,
            title:'Express js'
        },
        {
            id: 8,
            image: <MongoDB />,
            title: 'MongoDB'
        },
        {
            id: 9,
            image: <Firebase />,
            title:'Firebase'
        },
        {
            id: 10,
            image: <Git />,
            title:'Git'
        },
        {
            id: 11,
            image: <GitHubDark />,
            title: 'GitHub'
        },
    ];

    const [gridItems, setGridItems] = useState(cardData);
    const [draggedItem, setDraggedItem] = useState(null);
    const [hoveredItem, setHoveredItem] = useState(null);

    // Handle drag start event
    const handleDragStart = (item) => {
        setDraggedItem(item);
    };

    // Handle drag over event and show hover indicator
    const handleDragOver = (e, item) => {
        e.preventDefault();
        setHoveredItem(item);
    };

    // Handle drop event and swap items
    const handleDrop = (e, dropItem) => {
        e.preventDefault();

        // Swap dragged item with drop target
        const newGrid = gridItems.map((item) => {
            if (item.id === dropItem.id) {
                return draggedItem;
            }
            if (item.id === draggedItem.id) {
                return dropItem;
            }
            return item;
        });

        setGridItems(newGrid);
        setDraggedItem(null);
        setHoveredItem(null);
    };

    return (
        <div>
            <h3 className="md:text-4xl text-2xl font-medium text-center my-10 opacity-80">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:w-[600px] mx-auto"> 
            {gridItems.map((item) => (
                <div
                    key={item.id}
                    draggable
                    onDragStart={() => handleDragStart(item)}
                    onDragOver={(e) => handleDragOver(e, item)}
                    onDrop={(e) => handleDrop(e, item)}
                    onDragLeave={() => setHoveredItem(null)}
                    className={`w-fit md:px-8 md:py-4 px-6 py-2 border-2 border-opacity-70 rounded text-center cursor-move ${
                        item.id === draggedItem?.id && "bg-blue-100 opacity-30"
                    } ${
                        item.id === hoveredItem?.id ? "border-dashed border-2 border-blue-500" : "border-gray-100"
                    }`}
                >  
                    <p className="w-20">{item.image}</p>
                    <p className="text-sm">{item.title}</p>
                </div> 
            ))}
        </div>
        </div>
    );
};

export default DragAndDrop;
              