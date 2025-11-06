import { useState } from "react";
import AccordianItem from "./AccordianItem.jsx";
const Accordian = () => {
  const data = [
    {
      title: "Accordian 1",
      body: "akmlkamflkmflkmwlfkmlkf",
    },
    {
      title: "Accordian 2",
      body: "akmlkamflkmflkmwlfkmlkf",
    },
    {
      title: "Accordian 3",
      body: "akmlkamflkmflkmwlfkmlkf",
    },
  ];
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="accordian">
      <h1>Accordian</h1>
      {data.map((item, index) => (
        <AccordianItem
          key={index}
          title={item.title}
          body={item.body}
          clickedIndex={index === openIndex}
          setClickedIndex={() => {
            openIndex === index ? setOpenIndex(null) : setOpenIndex(index);
          }}
        />
      ))}
    </div>
  );
};

export default Accordian;
