import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import CloseButton from './'


const ModalSetting = ({ className, visible, children, onClose, maskClosable,closable }) => {

  // dimmed처리된 모달 밖 클릭시 이벤트
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  }

  // 모달 닫기버튼용인데 아직 버튼없어서 주석처
  // const close = (e) => {
  //   if (onClose) {
  //     onClose(e);
  //   }
  // }

  return (
    <div>
      <ModalOverlay visible="{visible}" />

      <ModalWrapper
        className={className}
        onClick={maskClosable ? onMaskClick : null}
        tabIndex="-1" visible={visible}>
        <ModalInner tabIndex="0" className="modal-inner">
          {/* {closable && <CloseButton className="modal-close" onClick={close} />} */}
          {/* {closable} */}
          {children}
          
          
        </ModalInner>

      </ModalWrapper>

    </div>
  );
};


ModalSetting.propTypes = {
  visible: PropTypes.bool,
}

// 모달 설정
const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`
// 모달 내용 집중도를 높이기위한 dimmed 효과
const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
`

export default ModalSetting;