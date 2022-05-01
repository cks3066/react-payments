import React from "react";

import { useAutoFocus } from "../../../hooks/useAutoFocus";
import { Password } from "../../../types";
import Input from "../../../common/Input";
import InputContainer from "../../../common/InputContainer";

interface CardPasswordProps {
  password: Password;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
}

export default function CardPassword({ password, onChange, isValid }: CardPasswordProps) {
  const { bindRefByIndex, handleAutoFocus } = useAutoFocus();

  return (
    <InputContainer inputTitle="카드 비밀번호" isValid={isValid}>
      <Input
        type="password"
        size="tiny"
        value={password[0] || ""}
        onChange={e => {
          onChange(e);
          handleAutoFocus(0, 1);
        }}
        maxLength={1}
        name="password"
        data-index={0}
        classes="password-input"
        ref={bindRefByIndex(0)}
      />
      <Input
        type="password"
        size="tiny"
        value={password[1] || ""}
        onChange={onChange}
        maxLength={1}
        name="password"
        data-index={1}
        classes="password-input"
        ref={bindRefByIndex(1)}
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
