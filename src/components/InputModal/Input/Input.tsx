import React, { useCallback, useEffect, useState } from "react";

//h-[3.5rem]
//h-[13rem]
//leading-[3.5rem]
interface InputProps {
  value?: string;
  regex?: RegExp;
  label?: string;
  isDisabled?: boolean;
  inputRef?: any;
  className?: string;
  onChange?: (val: string) => void;
}

export default function Input(props: InputProps) {
  const {
    value,
    label,
    isDisabled,
    inputRef,
    className = "",
    onChange,
    ...other
  } = props;
  const [focus, setFocus] = useState(false);
  const [userInput, setUserInput] = useState(""); //preset onChange

  const labelExist = useCallback(() => {
    if (label) {
      return (
        <label
          className={`absolute top-4 flex items-center gap-1 pl-4 align-middle transition duration-200 ease-out
          ${isDisabled ? "text-white/[0.1]" : ""} ${
            focus || userInput
              ? "translate-x-[-0.25rem] translate-y-[-12px] scale-[.8] text-white/[0.6]"
              : ""
          }	`}
        >
          {label}
        </label>
      );
    } else return <></>;
  }, [focus, isDisabled, label, userInput]);

  useEffect(() => {
    if (value) setUserInput(value);
    else if (value === "") setUserInput("");
  }, [value]);
  const handleOnChange = (value: string) => {
    setUserInput(value);
    onChange && onChange(value);
  };

  return (
    <div className={`flex w-full flex-col items-center ${className}`}>
      <div className={`relative inline-flex w-full flex-col`}>
        {labelExist()}
        <div className={`inline-flex h-[3.5rem] leading-[3.5rem]`}>
          <input
            ref={inputRef}
            value={userInput}
            onFocus={() => setFocus(true)}
            onBlur={() => {
              setFocus(false);
            }}
            onChange={(e) => handleOnChange(e.target.value)}
            className={`
            flex h-[3.5rem] w-full items-center justify-center rounded-full pl-4 outline-yellow
             ${label ? "pt-3" : ""}
            ${
              isDisabled
                ? "cursor-not-allowed bg-white/[0.02]"
                : "bg-white/[0.1]"
            }`}
            {...other}
            disabled={isDisabled}
          />
        </div>
      </div>
    </div>
  );
}
