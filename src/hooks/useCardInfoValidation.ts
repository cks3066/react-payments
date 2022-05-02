import { useEffect, useState } from "react";

import { Validators } from "../lib/validation";
import { CardInfo } from "../types";

export type CardInfoValidation = {
  isCardTypeValid: boolean;
  isCardNumbersValid: boolean;
  isExpiredDateValid: boolean;
  isUserNameValid: boolean;
  isSecurityCodeValid: boolean;
  isPasswordValid: boolean;
};

export const useCardInfoValidation = (cardInfo: CardInfo, validators: Validators) => {
  const [cardInfoValidation, setCardInfoValidation] = useState<CardInfoValidation>({
    isCardTypeValid: false,
    isCardNumbersValid: false,
    isExpiredDateValid: false,
    isUserNameValid: false,
    isSecurityCodeValid: false,
    isPasswordValid: false,
  });

  const { cardType, cardNumbers, expiredDate, userName, securityCode, password } = cardInfo;

  const handleChangeValidation = (key, value, validator) => {
    setCardInfoValidation(prev => ({
      ...prev,
      [key]: validator(value),
    }));
  };

  useEffect(() => {
    handleChangeValidation("isCardTypeValid", cardNumbers, validators["cardNumbers"]);
  }, [cardType]);

  useEffect(() => {
    handleChangeValidation("isCardNumbersValid", cardNumbers, validators["cardNumbers"]);
  }, [cardNumbers]);

  useEffect(() => {
    handleChangeValidation("isExpiredDateValid", expiredDate, validators["expiredDate"]);
  }, [expiredDate]);

  useEffect(() => {
    handleChangeValidation("isUserNameValid", userName, validators["userName"]);
  }, [userName]);

  useEffect(() => {
    handleChangeValidation("isSecurityCodeValid", securityCode, validators["securityCode"]);
  }, [securityCode]);

  useEffect(() => {
    handleChangeValidation("isPasswordValid", password, validators["password"]);
  }, [password]);

  return cardInfoValidation;
};
