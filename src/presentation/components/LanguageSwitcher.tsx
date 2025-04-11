import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    const handleLanguageChange = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className="flex justify-end space-x-2 mb-4">
            <button
                onClick={() => handleLanguageChange('en')}
                className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 transition"
            >
                English
            </button>
            <button
                onClick={() => handleLanguageChange('pt')}
                className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 transition"
            >
                Português
            </button>
        </div>
    );
};

export default LanguageSwitcher;
