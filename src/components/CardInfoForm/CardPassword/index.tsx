import React, { useContext } from "react";

import useInputValidation from "../../../hooks/useInputValidation";
import { Password } from "../../../types";
import Input from "../../../common/Input";
import InputContainer from "../../../common/InputContainer";
import { Context } from "../../../contexts/CardContext";

interface CardPasswordProps {
  validateForm: (key: string, isValid: boolean) => void;
}

const checkCardPassword = (cardPassWord: Password) => {
  if (!cardPassWord.every(password => password.length === 1)) {
    throw new Error("비밀번호를 입력해주세요.");
  }
};

export default function CardPassword({ validateForm }: CardPasswordProps) {
  const { inputValidation, validateInput, isValidInput } = useInputValidation(false);
  const [{ password }, dispatch] = useContext(Context);

  const handleChangeCardPassword = e => {
    const { value } = e.target;
    const { index } = e.target.dataset;
    const targetCardPassword: Password = [...password];

    targetCardPassword[index] = value;

    validateInput(targetCardPassword, checkCardPassword);
    validateForm("password", isValidInput(targetCardPassword, checkCardPassword));

    dispatch({ type: "UPDATE_PASSWORD", payload: { password: value, index } });
  };

  return (
    <InputContainer inputTitle="카드 비밀번호" validation={inputValidation}>
      <Input
        type="password"
        size="tiny"
        value={password[0] || ""}
        onChange={handleChangeCardPassword}
        maxLength={1}
        name="password"
        data-index={0}
        classes="password-input"
        pattern="^[0-9]$"
      />
      <Input
        type="password"
        size="tiny"
        value={password[1] || ""}
        onChange={handleChangeCardPassword}
        maxLength={1}
        name="password"
        data-index={1}
        classes="password-input"
        pattern="^[0-9]$"
      />
      <input
        className="input-basic rest-password-box w-15 password-input"
        type="password"
        value={1}
        maxLength={1}
        disabled
      />
      <input
        className="input-basic rest-password-box w-15 password-input"
        type="password"
        value={1}
        maxLength={1}
        disabled
      />
    </InputContainer>
  );
}
