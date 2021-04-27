import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { CARD, COLOR, FONT_SIZE, FONT_WEIGHT } from '../constants/constants';

const AddCard = css`
  .add {
    font-size: ${FONT_SIZE.XXLARGE};
    color : ${COLOR.PLUS}
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: ${FONT_WEIGHT.BOLD};
  }
`;

const CardInfo = css`
  .card__column {
    display: flex;
    padding: 0.1rem 0;

    &.card-name {
      margin-bottom: 1.5rem;
    }

    &.card-numbers {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: ${FONT_SIZE.XLARGE};
      letter-spacing: 3px;
    }

    &.card-details {
      display: flex;
      justify-content: space-between;
      align-items: center;
      letter-spacing: 1.5px;
    }

    .usim {
      width: 4rem;
      height: 2.5rem;
      border-radius: 4px;
      background-color: #cbba64;
    }
  }
`;

const CardWrapper = styled.div`
  width: 100%;
  height : 100%;
  padding: 1.2rem 1.5rem;
  border-radius: 5px;
  box-shadow: 3px 3px 5px 0px #00000040;
  font-size: ${FONT_SIZE.LARGE};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  background-color: ${({ add, bgColor }) =>
    add ? COLOR.CARD.DEFAULT : bgColor};
  ${({ add }) => (add ? AddCard : CardInfo)}
  }`;

const Card = ({ add, cardInfo, handleModalOpen }) => {
  const { cardName, numbers, user, expireDate } = cardInfo;

  return (
    <CardWrapper
      add={add}
      bgColor={CARD[cardName]}
      onClick={() => handleModalOpen('cardColor')}
    >
      {add ? (
        <div className='add'>+</div>
      ) : (
        <>
          <div className='card__column card-name'>
            {cardName !== 'DEFAULT' && `${cardName} 카드`}
          </div>
          <div className='card__column'>
            <div className='usim'></div>
          </div>
          <div className='card__column card-numbers'>
            {Object.values(numbers)
              .map((number) => number)
              .join('-')}
          </div>
          <div className='card__column card-details'>
            <div>{user !== '' ? user : 'NAME'}</div>
            <div>
              {Object.values(expireDate)
                .map((item) => item)
                .join('/')}
            </div>
          </div>
        </>
      )}
    </CardWrapper>
  );
};

Card.propTypes = {
  handleModalOpen: PropTypes.func,
  add: PropTypes.bool,
  cardInfo: PropTypes.shape({
    cardColor: PropTypes.string,
    cardName: PropTypes.string,
    numbers: PropTypes.shape({
      first: PropTypes.string,
      second: PropTypes.string,
      third: PropTypes.string,
      fourth: PropTypes.string,
    }),
    user: PropTypes.string,
    expireDate: PropTypes.shape({
      month: PropTypes.string,
      year: PropTypes.string,
    }),
  }),
};

Card.defaultProps = {
  add: false,
  cardInfo: {
    cardName: '',
    numbers: {
      first: '',
      second: '',
      third: '',
      fourth: '',
    },
    user: 'NAME',
    expireDate: {
      month: '',
      year: '',
    },
  },
};

export default Card;
