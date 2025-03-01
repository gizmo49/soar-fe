import { FC, useRef, useState, useEffect } from 'react';
import Icon from '../../../../components/Icon/Icon';
import './ProfileList.scss';

interface Profile {
    id: string;
    name: string;
    role: string;
    image?: string;
}

interface ProfileListProps {
    selectedProfile: Profile | null;
    onProfileSelect: (profile: Profile) => void;
}

const profiles: Profile[] = [
    { id: '1', name: 'John', role: 'Friend', image: '/images/avatars/avatar-1.svg' },
    { id: '2', name: 'Jane', role: 'Family', image: '/images/avatars/avatar-2.svg' },
    { id: '3', name: 'Mike', role: 'Colleague', image: '/images/avatars/avatar-3.svg' },
    { id: '4', name: 'Sarah', role: 'Friend', image: '/images/avatars/avatar-4.svg' },
    { id: '5', name: 'Tom', role: 'Business', image: '/images/avatars/avatar-1.svg' },
    { id: '6', name: 'Sarah', role: 'Friend', image: '/images/avatars/avatar-2.svg' },
    { id: '7', name: 'Tom', role: 'Business', image: '/images/avatars/avatar-4.svg' },
];

const ProfileList: FC<ProfileListProps> = ({ selectedProfile, onProfileSelect }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1); // -1 for rounding errors
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 200;
            const newScrollPosition = scrollContainerRef.current.scrollLeft +
                (direction === 'right' ? scrollAmount : -scrollAmount);

            scrollContainerRef.current.scrollTo({
                left: newScrollPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="quick-transfers__profiles-container">
            {canScrollLeft && (
                <button
                    className="quick-transfers__scroll-button quick-transfers__scroll-button--left"
                    onClick={() => scroll('left')}
                >
                    <Icon name="arrow-left" className="quick-transfers__scroll-icon quick-transfers__scroll-icon--left" />
                </button>
            )}

            <div
                className="quick-transfers__profiles"
                ref={scrollContainerRef}
                onScroll={checkScroll}
            >
                {profiles.map((profile) => (
                    <div
                        key={profile.id}
                        className={`quick-transfers__profile ${selectedProfile?.id === profile.id ? 'quick-transfers__profile--selected' : ''}`}
                        onClick={() => onProfileSelect(profile)}
                    >
                        <div className="quick-transfers__avatar">
                            {profile.image ? (
                                <img src={profile.image} alt={profile.name} />
                            ) : (
                                profile.name[0]
                            )}
                        </div>
                        <div className="quick-transfers__info">
                            <span className="quick-transfers__name text-truncate">{profile.name}</span>
                            <span className="quick-transfers__role text-truncate">{profile.role}</span>
                        </div>
                    </div>
                ))}
            </div>

            {canScrollRight && (
                <button
                    className="quick-transfers__scroll-button quick-transfers__scroll-button--right"
                    onClick={() => scroll('right')}
                >
                    <Icon name="arrow-right" className="quick-transfers__scroll-icon" />
                </button>
            )}
        </div>
    );
};

export default ProfileList;