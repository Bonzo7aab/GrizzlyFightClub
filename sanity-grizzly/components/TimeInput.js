import React, { forwardRef } from "react";
import { TextInput } from "@sanity/ui";
import PatchEvent, { set, unset } from "@sanity/form-builder/PatchEvent";

const TimeInput = (props, forwardedRef) => {
  const handleChange = ({ target }) =>
    props.onChange(PatchEvent.from(set(target.value ?? "")));

  return (
    <TextInput
      type="time"
      value={props.value}
      onChange={handleChange}
      ref={forwardedRef}
      readOnly={props.readOnly}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    />
  );
};

export default forwardRef(TimeInput);