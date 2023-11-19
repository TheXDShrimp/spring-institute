// components/ContactButton.tsx

interface ContactButtonProps {
    displayString: string;
    emailAddress: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ displayString, emailAddress }) => {
    return (
        <a href={`mailto:${emailAddress}`} className="underline text-blue-500">
            {displayString}
        </a>
    );
};

export default ContactButton;
