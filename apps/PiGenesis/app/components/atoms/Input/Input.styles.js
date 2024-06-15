import { css } from 'styled-components';

const InputStyles = css`
  .input {
    border: 1px solid #ced4da;
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 16px;
    font-weight: 400;
    width: 100%;

    &--disabled {
      background-color: #e9ecef;
      color: #6c757d;
      cursor: not-allowed;
    }

    &--error {
      border-color: #dc3545;
    }
  }

  .inputWrapper {
    position: relative;
  }

  .error {
    color: #dc3545;
    font-size: 12px;
    margin-top: 4px;
  }
`;

export default InputStyles;
