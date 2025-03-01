import { FC } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './ExpenseStatistics.scss';

interface ExpenseData {
    name: string;
    value: number;
    color: string;
}

interface ExpenseStatisticsProps {
    data?: ExpenseData[];
}

const defaultData: ExpenseData[] = [
    { name: 'Entertainment', value: 30, color: '#2C3968' },
    { name: 'Bill Expense', value: 15, color: '#FF8B3B' },
    { name: 'Investment', value: 20, color: '#3B76F6' },
    { name: 'Others', value: 35, color: '#2B2B2B' }
];


const ExpenseStatistics: FC<ExpenseStatisticsProps> = ({ data = defaultData }) => {
    return (
        <div className="expense-statistics">
            <div className="expense-statistics__chart">
                <ResponsiveContainer width="100%" height={220}>
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={0}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                            labelLine={false}
                            label={false}
                        >
                            {data.map((entry, index) => (
                                <Cell 
                                    key={`cell-${index}`} 
                                    fill={entry.color}
                                    stroke="none"
                                    className={`pie-segment ${entry.value > 25 ? 'pie-segment--large' : ''}`}
                                />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default ExpenseStatistics;