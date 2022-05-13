import React, { useEffect, useState, useContext } from "react";

import Input from "../../common/Input";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../../contexts/CardContext";
import { fetchAddCard, fetchEditCard } from "../../apis";

export default function CardNameForm({ mode }) {
  const isAddMode = mode === "add";
  const [isNextButtonShown, setIsNextButtonShown] = useState(false);
  const [cardInfo, dispatch] = useContext(Context);
  const [cardName, setCardName] = useState(cardInfo.cardName);
  const navigate = useNavigate();
  const { id } = useParams();

  const onChangeCardName = e => {
    setCardName(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const cardData = { ...cardInfo, cardName };

    isAddMode
      ? fetchAddCard(cardData).then(() => {
          dispatch({ type: "RESET" });
          navigate("/");
        })
      : fetchEditCard(cardData, id).then(() => {
          dispatch({ type: "RESET" });
          navigate("/");
        });
  };

  useEffect(() => {
    setIsNextButtonShown(cardName.length > 0);
  }, [cardName]);

  return (
    <form className="card-name-form h-100" onSubmit={onSubmit}>
      <Input
        shape="input-underline"
        placeholder="카드 이름을 입력해주세요."
        size="large"
        type="text"
        maxLength={10}
        value={cardName}
        onChange={onChangeCardName}
      ></Input>
      {isNextButtonShown && (
        <button type="submit" className="submit-button card-name-form-button">
          확인
        </button>
      )}
    </form>
  );
}
