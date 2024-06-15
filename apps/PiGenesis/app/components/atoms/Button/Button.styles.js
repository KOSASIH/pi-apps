import { css } from 'styled-components';

const ButtonStyles = css`
  .button {
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;transition: background-color 0.3s ease;

    &--small {
      padding: 4px 8px;
      font-size: 12px;
    }

    &--medium {
      padding: 8px 16px;
      font-size: 16px;
    }

    &--large {
      padding: 12px 24px;
      font-size: 20px;
    }

    &--primary {
      background-color: #007bff;
      color: #fff;

      &:hover {
        background-color: #0069d9;
      }
    }

    &--secondary {
      background-color: #6c757d;
      color: #fff;

      &:hover {
        background-color: #5a6268;
      }
    }

    &--tertiary {
      background-color: transparent;
      color: #007bff;
      border: 1px solid #007bff;

      &:hover {
        background-color: #e9ecef;
      }
    }

    &--disabled {
      background-color: #e9ecef;
      color: #6c757d;
      cursor: not-allowed;
    }
  }
`;

export default ButtonStyles;
