import { FC, useState } from 'react';
import ProfileList from './ProfileList/ProfileList';
import TransferAmount from './TransferAmount/TransferAmount';
import './QuickTransfers.scss';

interface Profile {
  id: string;
  name: string;
  role: string;
  image?: string;
}

const QuickTransfers: FC = () => {
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [amount, setAmount] = useState<string>('');

  const handleProfileSelect = (profile: Profile) => {
    setSelectedProfile(profile);
  };

  const handleAmountChange = (value: string) => {
    setAmount(value);
  };

  const handleTransfer = () => {
    if (selectedProfile && amount) {
      console.log(`Transferring $${amount} to ${selectedProfile.name}`);
      // Reset form after transfer
      setAmount('');
      setSelectedProfile(null);
    }
  };

  return (
    <div className="quick-transfers">
      <ProfileList onProfileSelect={handleProfileSelect} selectedProfile={selectedProfile} />
      <TransferAmount 
        amount={amount} 
        onAmountChange={handleAmountChange} 
        onTransfer={handleTransfer}
        disabled={!selectedProfile || !amount}
      />
    </div>
  );
};

export default QuickTransfers;