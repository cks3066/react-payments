import { createRef, useEffect } from 'react';
import { Container, Input, Label, Text } from '../../../../../components';
import { handleBlockInvalidChar, handleCardNumberInputChange } from './handler';
import { CARD_NUMBER_UNIT_LENGTH } from '../../../../../constants';

export const CardNumberInput = (props) => {
  const { number, setNumber, setCompany, setIsModalOpen, expirationDateInputRef } = props;
  const firstRef = createRef();
  const secondRef = createRef();
  const thirdRef = createRef();
  const fourthRef = createRef();
  const nextRef = {
    first: secondRef,
    second: thirdRef,
    third: fourthRef,
    fourth: expirationDateInputRef,
  };

  useEffect(() => {
    firstRef.current?.focus();
  }, []);

  return (
    <>
      <Label>카드 번호</Label>
      <Container className="CardInfoForm__Input__Filler--filled CardNumberInput__Filler">
        <Input
          className="CardNumberInput__Field"
          type="number"
          ref={firstRef}
          name="first"
          value={number.first}
          onChange={(e) => handleCardNumberInputChange({ e, nextRef, number, setNumber, setCompany, setIsModalOpen })}
          onKeyDown={handleBlockInvalidChar}
        />
        <Dash length={number.first.length} />
        <Input
          className="CardNumberInput__Field"
          type="number"
          ref={secondRef}
          name="second"
          value={number.second}
          onChange={(e) => handleCardNumberInputChange({ e, nextRef, number, setNumber, setCompany, setIsModalOpen })}
          onKeyDown={handleBlockInvalidChar}
        />
        <Dash length={number.second.length} />
        <Input
          className="CardNumberInput__Field"
          type="password"
          ref={thirdRef}
          name="third"
          value={number.third}
          onChange={(e) => handleCardNumberInputChange({ e, nextRef, number, setNumber, setCompany, setIsModalOpen })}
          onKeyDown={handleBlockInvalidChar}
        />
        <Dash length={number.third.length} />
        <Input
          className="CardNumberInput__Field"
          type="password"
          ref={fourthRef}
          name="fourth"
          value={number.fourth}
          onChange={(e) => handleCardNumberInputChange({ e, nextRef, number, setNumber, setCompany, setIsModalOpen })}
          onKeyDown={handleBlockInvalidChar}
        />
      </Container>
    </>
  );
};

function Dash({ length }) {
  const className = length === CARD_NUMBER_UNIT_LENGTH ? 'Dash' : 'Dash Dash--hidden';
  return (
    <Text className={className} width="1rem">
      -
    </Text>
  );
}
