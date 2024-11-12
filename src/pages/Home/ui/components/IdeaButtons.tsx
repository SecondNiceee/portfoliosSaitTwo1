import React from "react";
import LogButton from "../../../../shared/ui/LogButton/LogButton";
import Image from "../../../../shared/ui/Image";
import { useNavigate } from "react-router";

const IdeaButtons = () => {
  const navigate = useNavigate()
  return (
    <div className="idea__buttons">
      <LogButton onClick={() => {navigate("/login")}} className="idea__button" isShine={true}>
        Login
      </LogButton>
      <LogButton onClick={() => {navigate("/create")}} className="idea__button">
        <Image imageName="watch.svg" />
        <p>Create portfolio</p>
      </LogButton>
    </div>
  );
};

export default IdeaButtons;
