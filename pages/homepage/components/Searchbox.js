import React from "react";
import { FormControl } from "react-bootstrap";
import classnames from 'classnames';

const Searchbox = ({placeHolder, handleStartSection, isDisabled, handleHover, currentStep, handleChange, userClass}) => {
  return (
    <>
      <FormControl
        type="text"
        placeholder={placeHolder}
        aria-label="Search"
        onClick={handleStartSection}
        disabled={isDisabled}
        onKeyDown={(event) => {
          if(currentStep != 3)
          event.preventDefault();
        }}
        // onMouseEnter={() => currentStep== 0 && handleHover(true)}
        // onMouseLeave={() => currentStep== 0 && handleHover(false)}
        onChange={(e)=>{handleChange(e);}}
        // className="remove-disabled-color removePlaceholder-property"
        className={classnames("remove-disabled-color", userClass, currentStep == 3 && "removePlaceholder-property")}
      />
    </>
  );
};

export default Searchbox;
