import React from "react";
import LogButton from "../../../shared/ui/LogButton/LogButton";
import { useNavigate } from "react-router";
import useHistory from "../../../shared/models/useHistory";

const CancelButton = () => {
    const navigate = useNavigate()
    const history = useHistory()
  return (
    <LogButton className="cancel-button" onClick={() => {navigate(history[history.length-2], {replace : true})}}>
      <p className="cancel-text">Cancel</p>
    </LogButton>
  );
};

export default React.memo(CancelButton);
