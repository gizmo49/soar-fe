import { FC } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import './WeeklyActivity.scss';

interface WeeklyData {
    day: string;
    deposits: number;
    withdrawals: number;
}

const WeeklyActivity: FC = () => {
    const weeklyData: WeeklyData[] = [
        { day: 'Mon', deposits: 2100, withdrawals: 1400 },
        { day: 'Tue', deposits: 1500, withdrawals: 1200 },
        { day: 'Wed', deposits: 2400, withdrawals: 1800 },
        { day: 'Thu', deposits: 1800, withdrawals: 1600 },
        { day: 'Fri', deposits: 2800, withdrawals: 2100 },
        { day: 'Sat', deposits: 1900, withdrawals: 1300 },
        { day: 'Sun', deposits: 1200, withdrawals: 900 }
    ];

    const formatAmount = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
        }).format(amount);
    };

    return (
        <div className="weekly-activity">
            <div className="weekly-activity__legend">
                <div className="weekly-activity__legend-item">
                    <div className="weekly-activity__legend-color weekly-activity__legend-color--deposits" />
                    <span>Deposits</span>
                </div>
                <div className="weekly-activity__legend-item">
                    <div className="weekly-activity__legend-color weekly-activity__legend-color--withdrawals" />
                    <span>Withdrawals</span>
                </div>
            </div>
            <ResponsiveContainer width="100%" height={240}>
                <BarChart data={weeklyData} margin={{ top: 10, right: 10, left: 10, bottom: 20 }}>
                    <CartesianGrid 
                        strokeDasharray="3 3" 
                        vertical={false} 
                        stroke="#F0F0F0"
                    />
                    <XAxis 
                        dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 14, fill: '#718EBF' }}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 14, fill: '#718EBF' }}
                        tickFormatter={(value) => `${value}`}
                        width={60}
                    />
                    <Tooltip
                        formatter={(value: number) => formatAmount(value)}
                        cursor={{ fill: 'transparent' }}
                    />
                    <Bar 
                        dataKey="deposits"
                        fill="#396AFF"
                        radius={[4, 4, 0, 0]}
                        barSize={8}
                    />
                    <Bar 
                        dataKey="withdrawals"
                        fill="#232323"
                        radius={[4, 4, 0, 0]}
                        barSize={8}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default WeeklyActivity;