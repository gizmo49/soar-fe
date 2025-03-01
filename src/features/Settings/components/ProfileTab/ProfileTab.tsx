import { useState, FormEvent } from 'react';
import Input from '../Input/Input';
import "./ProfileTab.scss";

interface FormData {
    yourName: string;
    userName: string;
    email: string;
    password: string;
    dateOfBirth: string;
    presentAddress: string;
    permanentAddress: string;
    city: string;
    postalCode: string;
    country: string;
    profileImage?: File;
}

interface FormErrors {
    [key: string]: string;
}

const ProfileTab = () => {
    const [formData, setFormData] = useState<FormData>({
        yourName: '',
        userName: '',
        email: '',
        password: '',
        dateOfBirth: '',
        presentAddress: '',
        permanentAddress: '',
        city: '',
        postalCode: '',
        country: ''
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [previewImage, setPreviewImage] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;

        if (name === 'profileImage' && files && files[0]) {
            const file = files[0];
            if (file.type.startsWith('image/')) {
                setFormData(prev => ({ ...prev, [name]: file }));
                setPreviewImage(URL.createObjectURL(file));
            } else {
                setErrors(prev => ({ ...prev, profileImage: 'Please upload an image file' }));
            }
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
            if (errors[name]) {
                setErrors(prev => ({ ...prev, [name]: '' }));
            }
        }
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        const requiredFields: (keyof FormData)[] = [
            'yourName',
            'userName',
            'email',
            'dateOfBirth',
            'presentAddress',
            'city',
            'postalCode',
            'country'
        ];

        requiredFields.forEach(field => {
            if (!formData[field] || (typeof formData[field] === 'string' && !formData[field].trim())) {
                newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')} is required`;
            }
        });

        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        if (formData.password && formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters long';
        }

        if (formData.postalCode && !/^\d{5}(-\d{4})?$/.test(formData.postalCode)) {
            newErrors.postalCode = 'Invalid postal code format';
        }

        if (formData.dateOfBirth) {
            const birthDate = new Date(formData.dateOfBirth);
            const today = new Date();
            if (birthDate > today) {
                newErrors.dateOfBirth = 'Date of birth cannot be in the future';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formData);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="profile-tab">
            <div className="row">
                <div className="col-lg-3 col-md-3 col-12">
                    <div className="profile-tab__image-upload">

                        <div className="profile-tab__image-preview">
                            {previewImage ? (
                                <img src={previewImage} alt="Profile preview" />
                            ) : (
                                <div className="profile-tab__image-placeholder">
                                    <span>Upload Image</span>
                                </div>
                            )}
                        </div>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleInputChange}
                            name="profileImage"
                            id="profileImage"
                            className="profile-tab__image-input"
                        />
                        {errors.profileImage && (
                            <span className="profile-tab__error">{errors.profileImage}</span>
                        )}
                    </div>

                </div>
                <div className="col-lg-9 col-md-9 col-12">
                    <div className="profile-tab__form-grid">
                        <Input
                            label="Your Name"
                            name="yourName"
                            value={formData.yourName}
                            onChange={handleInputChange}
                            error={errors.yourName}
                            placeholder="Charlene Reed"
                            required
                        />
                        <Input
                            label="User Name"
                            name="userName"
                            value={formData.userName}
                            onChange={handleInputChange}
                            error={errors.userName}
                            placeholder="@charlene_reed"
                            required
                        />
                        <Input
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            error={errors.email}
                            placeholder="charlene.reed@example.com"
                            required
                        />
                        <Input
                            label="Password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            error={errors.password}
                            placeholder="••••••••"
                        />
                        <Input
                            label="Date of Birth"
                            name="dateOfBirth"
                            type="date"
                            value={formData.dateOfBirth}
                            onChange={handleInputChange}
                            error={errors.dateOfBirth}
                            placeholder="MM/DD/YYYY"
                            required
                        />
                        <Input
                            label="Present Address"
                            name="presentAddress"
                            value={formData.presentAddress}
                            onChange={handleInputChange}
                            error={errors.presentAddress}
                            placeholder="123 Main Street, Apt 4B"
                            required
                        />
                        <Input
                            label="Permanent Address"
                            name="permanentAddress"
                            value={formData.permanentAddress}
                            onChange={handleInputChange}
                            error={errors.permanentAddress}
                            placeholder="456 Oak Avenue"
                        />
                        <Input
                            label="City"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            error={errors.city}
                            placeholder="San Francisco"
                            required
                        />
                        <Input
                            label="Postal Code"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleInputChange}
                            error={errors.postalCode}
                            placeholder="94105"
                            required
                        />
                        <Input
                            label="Country"
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            error={errors.country}
                            placeholder="United States"
                            required
                        />
                    </div>
                    <button type="submit" className="profile-tab__submit-btn">
                        Save
                    </button>
                </div>
            </div>


        </form>
    );
};

export default ProfileTab;