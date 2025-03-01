import { FC } from 'react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

interface BalanceData {
    month: string;
    balance: number;
}

interface BalanceHistoryProps {
    data?: BalanceData[];
}

const defaultData: BalanceData[] = [
    { month: 'Jul', balance: 300 },
    { month: 'Aug', balance: 250 },
    { month: 'Sep', balance: 450 },
    { month: 'Oct', balance: 750 },
    { month: 'Nov', balance: 250 },
    { month: 'Dec', balance: 580 },
    { month: 'Jan', balance: 650 }
];

const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    }).format(amount);
};

const BalanceHistory: FC<BalanceHistoryProps> = ({ data = defaultData }) => {
    return (
        <div className="balance-history">
            <ResponsiveContainer width="100%" height={240}>
                <AreaChart data={data} margin={{ top: 10, right: -10, left: -15, bottom: 0 }}>
                    <defs>
                        <linearGradient id="balanceGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3B76F6" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#3B76F6" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 14, fill: 'var(--color-gray-600)' }}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 14, fill: 'var(--color-gray-600)' }}
                        tickFormatter={(value) => `${value}`}
                    />
                    <Tooltip
                        formatter={(value: number) => formatAmount(value)}
                        cursor={{ stroke: 'var(--color-gray-300)' }}
                    />
                    <Area
                        type="monotone"
                        dataKey="balance"
                        stroke="#3B76F6"
                        strokeWidth={2}
                        fill="url(#balanceGradient)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BalanceHistory;