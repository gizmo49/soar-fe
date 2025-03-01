import CustomerCards from './CustomerCards/CustomerCards'
import DashboardSectionWrapper from './DashboardSectionWrapper/DashboardSectionWrapper'
import RecentTransactions from './RecentTransactions/RecentTransactions'
import WeeklyActivity from './WeeklyActivity/WeeklyActivity'
import ExpenseStatistics from './ExpenseStatistics/ExpenseStatistics'
import BalanceHistory from './BalanceHistory/BalanceHistory'
import QuickTransfers from './QuickTransfers/QuickTransfers'
import './Dashboard.scss'


function Dashboard() {
    return (
        <div className="dashboard mint-container">
            <div className="row">
                <DashboardSectionWrapper
                    row='col-xl-8 col-lg-12 col-md-12 col-12'
                    title="My Cards"
                    headerLink={{
                        title: "See All",
                        href: "/transfers"
                    }}>
                    <CustomerCards />
                </DashboardSectionWrapper>
                <DashboardSectionWrapper
                    row="col-xl-4 col-lg-12 col-md-6 col-12"
                    title="Recent Transaction"
                    className='card'>
                    <RecentTransactions />
                </DashboardSectionWrapper>
                <DashboardSectionWrapper
                    row="col-xl-8 col-lg-12 col-md-6 col-12"
                    title="Weekly Activity"
                    className='card'>
                    <WeeklyActivity />
                </DashboardSectionWrapper>

                <DashboardSectionWrapper
                    row="col-xl-4 col-lg-12 col-md-12 col-12"
                    title="Expense Statistics"
                    className='card'>
                    <ExpenseStatistics />
                </DashboardSectionWrapper>

                <DashboardSectionWrapper
                    row="col-xl-5 col-lg-12 col-md-12 col-12"
                    title="Quick Transfer"
                    className='card'>
                    <QuickTransfers />
                </DashboardSectionWrapper>
                <DashboardSectionWrapper
                    row="col-xl-7 col-lg-12 col-md-12 col-12"
                    title="Balance History"
                    className='card'>
                    <BalanceHistory />
                </DashboardSectionWrapper>

            </div>
        </div>
    )
}

export default Dashboard