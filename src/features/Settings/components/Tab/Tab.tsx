import { ReactNode } from 'react';
import './Tab.scss';

interface TabProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
    icon?: ReactNode;
}

const Tab = ({ label, isActive, onClick, icon }: TabProps) => {
    return (
        <button
            className={`settings-tab ${isActive ? 'settings-tab--active' : ''}`}
            onClick={onClick}
            type="button"
        >
            {icon && <span className="settings-tab__icon">{icon}</span>}
            <span className="settings-tab__label">{label}</span>
        </button>
    );
};

export default Tab;