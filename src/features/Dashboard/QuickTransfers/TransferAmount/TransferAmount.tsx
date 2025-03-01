import { FC } from 'react';
import Icon from '../../../../components/Icon/Icon';
import './TransferAmount.scss';


interface TransferAmountProps {
  amount: string;
  onAmountChange: (value: string) => void;
  onTransfer: () => void;
  disabled: boolean;
}

const TransferAmount: FC<TransferAmountProps> = ({
  amount,
  onAmountChange,
  onTransfer,
  disabled
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d+(\.\d{0,2})?$/.test(value)) {
      onAmountChange(value);
    }
  };

  return (
    <div className="quick-transfers__row">
      <h6>Write Amount</h6>
      <div className="quick-transfers__form">
        <div className="quick-transfers__input-group">
          <input
            type="text"
            className="quick-transfers__input"
            placeholder="Enter amount"
            value={amount}
            onChange={handleChange}
          />
        </div>
        <button
          className="quick-transfers__button"
          onClick={onTransfer}
          disabled={disabled}
        >
          <span>Send</span>
          <Icon name='send' />
        </button>
      </div>
    </div>
  );
};

export default TransferAmount;