import { useEffect, useRef } from "react";
import AITalkVector from "../SpeechVector";
import styles from "./TutorialCard.module.css";
import Label from "../Label";
import { LabelVariant } from "../Label/LabelVariant";

interface TutorialCardProps {
  message: string;
}

const StyledHeading = ({
  text,
  nthWord,
}: {
  text: string;
  nthWord: number;
}) => {
  const words = text.split(" ");
  const styledText = words.map((word, index) => {
    if (index >= nthWord - 1) {
      return (
        <span key={index} className={styles.muteText}>
          {word + " "}
        </span>
      );
    }
    return word + " ";
  });

  return (
    <Label variant={LabelVariant.heading2}>
      <h2 className="text-center">{styledText}</h2>
    </Label>
  );
};

const TutorialCard: React.FC<TutorialCardProps> = ({ message }) => {
  return (
    <div className="pl-4 pr-4">
      <StyledHeading text={message} nthWord={9} />
    </div>
  );
};

export default TutorialCard;
