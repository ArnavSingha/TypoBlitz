import React from "react";
// import KeyboardAltIcon from "@mui/icons-material/KeyboardAlt";
import KeyboardAltTwoToneIcon from '@mui/icons-material/KeyboardAltTwoTone';

const Logo = ({ isFocusedMode, isMusicMode }) => {
  return (
    <div className="header" style={{visibility: isFocusedMode ? 'hidden' : 'visible' }}>
      <h1>
      TypoBlitz <KeyboardAltTwoToneIcon fontSize="large" />
      </h1>
      <span className="sub-header">
        an explore your typing speed, just start typing
      </span>
    </div>
  );
};

export default Logo;
