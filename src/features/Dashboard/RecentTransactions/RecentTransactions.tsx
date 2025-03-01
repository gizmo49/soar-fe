import { FC } from 'react';
import Icon from '../../../components/Icon/Icon';
import './RecentTransactions.scss';

interface Transaction {
    id: string;
    date: string;
    description: string;
    amount: number;
    type: 'credit' | 'debit';
    icon: string;
}


const RecentTransactions: FC = () => {

    const transactions: Transaction[] = [
        {
            id: '1',
            date: 'Today, 2:45 PM',
            description: 'Card Deposit',
            amount: 1200,
            type: 'debit',
            icon: 'card'
        },
        {
            id: '2',
            date: 'Today, 9:30 AM',
            description: 'PayPal Deposit',
            amount: 850,
            type: 'credit',
            icon: 'paypal'
        },
        {
            id: '3',
            date: 'Yesterday, 3:20 PM',
            description: 'Transfer from Jemi Wilson',
            amount: 500,
            type: 'credit',
            icon: 'dollar'
        }
    ];

    const formatAmount = (amount: number, type: 'credit' | 'debit') => {
        const formattedAmount = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);

        return `${type === 'credit' ? '+' : '-'}${formattedAmount}`;
    };

    return (
        <div className="recent-transaction">
            {transactions.map((transaction) => (
                <div key={transaction.id} className="recent-transaction__row">
                    <div className={`recent-transaction__icon ${transaction.icon ? transaction.icon : ''}`}>
                        <Icon name={transaction.icon} />
                    </div>
                    <div className="recent-transaction__details">
                        <span className="recent-transaction__description">
                            {transaction.description}
                        </span>
                        <span className="recent-transaction__date">
                            {transaction.date}
                        </span>
                    </div>
                    <div className={`recent-transaction__amount recent-transaction__amount--${transaction.type}`}>
                        {formatAmount(transaction.amount, transaction.type)}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RecentTransactions;