import { useState } from 'react';
import Tab from './components/Tab/Tab';
import ProfileTab from './components/ProfileTab/ProfileTab';
import PreferencesTab from './components/PreferencesTab/PreferencesTab';
import SecurityTab from './components/SecurityTab/SecurityTab';
import './Settings.scss';

interface TabConfig {
    id: string;
    label: string;
    component: React.ComponentType;
}

const tabs: TabConfig[] = [
    { id: 'profile', label: 'Edit Profile', component: ProfileTab },
    { id: 'preferences', label: 'Preferences', component: PreferencesTab },
    { id: 'security', label: 'Security', component: SecurityTab }
];

const Settings = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <div className="settings mint-container">
            <div className="settings__header">
                <div className="settings__tabs">
                    {tabs.map(tab => (
                        <Tab
                            key={tab.id}
                            label={tab.label}
                            isActive={activeTab === tab.id}
                            onClick={() => setActiveTab(tab.id)}
                        />
                    ))}
                </div>
            </div>

            {tabs.map(tab => (
                activeTab === tab.id && <tab.component key={tab.id} />
            ))}
        </div>
    );
};

export default Settings;