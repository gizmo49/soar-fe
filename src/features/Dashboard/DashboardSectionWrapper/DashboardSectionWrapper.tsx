import "./DashboardSectionWrapper.scss"

interface DashboardSectionWrapperProp {
    title: string;
    row: string;
    className?: string;
    children: React.ReactNode;
    headerLink?: {
        title: string;
        href: string;
    };
}

const DashboardSectionWrapper = ({ title, headerLink, row, className, children }: DashboardSectionWrapperProp) => {
    return (
        <div className={`${row}`}>
            <div className="dashboard-section-wrapper">
                <div className="dashboard-section-wrapper--header">
                    <h6>{title}</h6>
                    {headerLink && (
                        <a href={headerLink.href}>{headerLink.title}</a>
                    )}
                </div>
                <div className={`${className ? className : ""}`}>
                {children}
                </div>
            </div>
        </div>
    )
}

export default DashboardSectionWrapper;
