import { render, screen, fireEvent } from '@testing-library/react';
import { vi, describe, it, expect, Mock } from 'vitest';
import LanguageSwitcher from './LanguageSwitcher';
import * as ReactI18Next from 'react-i18next';


// Mocking react-i18next
vi.mock('react-i18next', async () => {
    const actual = await vi.importActual<typeof ReactI18Next>('react-i18next');
    return {
        ...actual,
        useTranslation: vi.fn().mockReturnValue({
            t: (key: string) => key,
            i18n: {
              changeLanguage: vi.fn(),
            },
        }),
    };
});

describe('LanguageSwitcher', () => {
    it('renders English and Portuguese buttons', () => {
        render(<LanguageSwitcher />);
        expect(screen.getByText('English')).toBeInTheDocument();
        expect(screen.getByText('Português')).toBeInTheDocument();
    });

    it('calls changeLanguage with "en" when English is clicked', () => {
        const mockChangeLanguage = vi.fn();
        (ReactI18Next.useTranslation as unknown as Mock).mockReturnValue({
            i18n: {
                changeLanguage: mockChangeLanguage,
            },
        });
        render(<LanguageSwitcher />);
        fireEvent.click(screen.getByText('English'));

        expect(mockChangeLanguage).toHaveBeenCalledWith('en');
    });

    it('calls changeLanguage with "pt" when Portuguese is clicked', () => {
        const mockChangeLanguage = vi.fn();
        (ReactI18Next.useTranslation as unknown as Mock).mockReturnValue({
            i18n: {
                changeLanguage: mockChangeLanguage,
            },
        });

        render(<LanguageSwitcher />);
        fireEvent.click(screen.getByText('Português'));

        expect(mockChangeLanguage).toHaveBeenCalledWith('pt');
    });
});
