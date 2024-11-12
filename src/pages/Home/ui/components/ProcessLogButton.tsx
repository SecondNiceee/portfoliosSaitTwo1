import React from "react";
import LogButton from "../../../../shared/ui/LogButton/LogButton";
import { useNavigate } from "react-router";

const ProcessLogButton = () => {
    const navigate = useNavigate()
  return (
    <LogButton onClick={() => {navigate("/create")}}  className="process__log-button" isShine={true}>
      <p>Complete Your Profile</p>
    </LogButton>
  );
};

export default ProcessLogButton;
