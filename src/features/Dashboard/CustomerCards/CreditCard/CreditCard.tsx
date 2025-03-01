import { FC } from 'react';
import Icon from '../../../../components/Icon/Icon';
import './CreditCard.scss';

interface CreditCardProps {
    balance: number;
    cardHolder: string;
    cardNumber: string;
    expiryDate: string;
    variant?: string;
}

const CreditCard: FC<CreditCardProps> = ({
    balance,
    cardHolder,
    cardNumber,
    expiryDate,
    variant
}) => {
    const formattedBalance = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(balance);

    const formattedCardNumber = `${cardNumber.slice(0, 4)} **** **** ${cardNumber.slice(-4)}`;
    return (
        <div className={`credit-card credit-card--${variant}`} aria-label="Credit Card">
            <div className="credit-card__header">
                <div className="credit-card__balance">
                    <span className="credit-card__balance-label">Balance</span>
                    <span className="credit-card__balance-amount">{formattedBalance}</span>
                </div>
                <div className="credit-card__chip">

                    <Icon name={`${variant === "dark" ? "chip" : "chip-dark"}`} />
                </div>
            </div>
            <div className="credit-card__main">
                <div className="credit-card__holder">
                    <span className="credit-card__label">CARD HOLDER</span>
                    <span className="credit-card__holder-name">{cardHolder}</span>
                </div>
                <div className="credit-card__expiry">
                    <span className="credit-card__label">VALID THRU</span>
                    <span className="credit-card__expiry-date">{expiryDate}</span>
                </div>
            </div>

            <div className="credit-card__footer">
                <div className="credit-card__number" aria-label="Card number">
                    {formattedCardNumber}
                </div>
                <div className="credit-card__network">
                    <Icon name="master-card" />
                </div>
            </div>
        </div>
    );
};

export default CreditCard;