


import React from "react";
import { BentoGrid, BentoGridItem } from "./UI/BentoGrid";

import { gridItems } from '../Data/index';
const Grid = () => {
  // Define the items array

  return (
    <section id="about">
      {/* Pass the items array to BentoGrid */}
      <BentoGrid items={gridItems}>
        {/* Use map to render BentoGridItem for each item */}
        {gridItems.map((item) => (
          <BentoGridItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description} 
            imgClassName={item.imgClassName} 
            titleClassName={item.titleClassName} 
            spareImg={item.spareImg}
            
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
