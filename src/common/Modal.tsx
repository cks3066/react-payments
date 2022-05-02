import React from "react";

const cardList = [
  "포코 카드",
  "준 카드",
  "공원 카드",
  "브랜 카드",
  "로이드 카드",
  "도비 카드",
  "콜린 카드",
  "썬 카드",
];

export default function Modal({ isModalShow, hideModal }) {
  const rederCardList = cardList.map((card, index) => {
    return (
      <div className="modal-item-container" key={index}>
        <div className="modal-item-dot" onClick={hideModal} aria-hidden="true"></div>
        <span className="modal-item-name">{card}</span>
      </div>
    );
  });

  return (
    <>
      {isModalShow && (
        <div className="modal-dimmed" onClick={hideModal} aria-hidden="true">
          <div className="modal">
            <div className="flex-center">
              <div className="modal-item-container">
                <div className="modal-item-dot" onClick={hideModal} aria-hidden="true"></div>
                <span className="modal-item-name">포코 카드</span>
              </div>
              <div className="modal-item-container">
                <div className="modal-item-dot" onClick={hideModal} aria-hidden="true"></div>
                <span className="modal-item-name">포코 카드</span>
              </div>
              <div className="modal-item-container">
                <div className="modal-item-dot" onClick={hideModal} aria-hidden="true"></div>
                <span className="modal-item-name">포코 카드</span>
              </div>
              <div className="modal-item-container">
                <div className="modal-item-dot" onClick={hideModal} aria-hidden="true"></div>
                <span className="modal-item-name">포코 카드</span>
              </div>
            </div>
            <div className="flex-center">
              <div className="modal-item-container">
                <div className="modal-item-dot" onClick={hideModal} aria-hidden="true"></div>
                <span className="modal-item-name">포코 카드</span>
              </div>
              <div className="modal-item-container">
                <div className="modal-item-dot" onClick={hideModal} aria-hidden="true"></div>
                <span className="modal-item-name">포코 카드</span>
              </div>
              <div className="modal-item-container">
                <div className="modal-item-dot" onClick={hideModal} aria-hidden="true"></div>
                <span className="modal-item-name">포코 카드</span>
              </div>
              <div className="modal-item-container">
                <div className="modal-item-dot" onClick={hideModal} aria-hidden="true"></div>
                <span className="modal-item-name">포코 카드</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
