import { CSS3, ExpressJsDark, Firebase, Git, GitHubDark, HTML5, JavaScript, MongoDB, NodeJs, React, Redux, TailwindCSS, TypeScript } from "developer-icons";
import { useState } from "react";

const DragAndDrop = () => {
    const cardData = [
        // Frontend 
        { id: 1, image: <HTML5 />, title: "HTML" },
        { id: 2, image: <CSS3 />, title: "CSS" },
        { id: 3, image: <TailwindCSS />, title: "Tailwind CSS" },
        { id: 4, image: <JavaScript />, title: "JavaScript" },
        { id: 5, image: <TypeScript />, title: "TypeScript" },
        { id: 6, image: <React />, title: "React" },
        { id: 7, image: <Redux />, title: "Redux" },
        // Backend 
        { id: 8, image: <NodeJs />, title: "Node.js" },
        { id: 9, image: <ExpressJsDark />, title: "Express.js" },
        { id: 10, image: <MongoDB />, title: "MongoDB" },
        { id: 11, image: <Firebase />, title: "Firebase" },
        // Tools 
        { id: 12, image: <Git />, title: "Git" },
        { id: 13, image: <GitHubDark />, title: "GitHub" },
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
            <h3 className="md:text-4xl text-2xl font-medium text-center my-10 opacity-80">Skills & Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:w-[600px] mx-auto">
                {gridItems.map((item) => (
                    <div
                        key={item.id}
                        draggable
                        onDragStart={() => handleDragStart(item)}
                        onDragOver={(e) => handleDragOver(e, item)}
                        onDrop={(e) => handleDrop(e, item)}
                        onDragLeave={() => setHoveredItem(null)}
                        className={`w-fit mx-auto md:px-4 md:py-2 px-6 py-2 border-2 border-purple-700 border-opacity-70 hover:shadow-purple-400 hover:shadow-md rounded text-center cursor-move ${item.id === draggedItem?.id && "bg-blue-100 opacity-30"
                            } ${item.id === hoveredItem?.id ? "border-dashed border-2 border-blue-500" : "border-gray-100"
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
