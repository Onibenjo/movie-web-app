import React from "react";
import { AiFillStar } from "react-icons/ai";

const width = 110;

interface classesType {
  [className: string]: React.CSSProperties;
}

const styles: classesType = {
  starsInner: {
    width: `${width}px`,
  },
  starsEmptyInner: {
    position: "absolute",
    width: `${width}px`,
  },
  starsOuter: {
    overflow: "hidden",
  },
  star: {
    padding: "1px",
  },
};

const cropWidth = (rating: number) => {
  return Math.floor((rating * width) / 5);
};

interface StarRatingProps {
  rating: number;
}

export const StarRating = ({ rating }: StarRatingProps) => {
  const containerStyle = { width: `${cropWidth(rating)}px` };

  return (
    <div>
      <div style={styles.starsOuter}>
        <div id="rate-container" style={containerStyle}>
          <div style={styles.starsEmptyInner} className="flex">
            {Array(Math.floor(rating))
              .fill(1)
              .map((_, i) => (
                <AiFillStar key={i} className=" fill-accent" />
              ))}
          </div>
          <div style={styles.starsInner} className="flex">
            {[6, 7, 8, 9, 0].map((i) => (
              <AiFillStar key={i} className=" fill-black" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
