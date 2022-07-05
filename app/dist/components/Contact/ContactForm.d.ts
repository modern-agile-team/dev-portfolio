/// <reference types="react" />
import { ContactOptionTypes } from '../../../../src/lib/common/types/contact';
interface ContactOptionProps {
    contactOption: ContactOptionTypes;
}
declare const ContactForm: ({ contactOption }: ContactOptionProps) => JSX.Element;
export default ContactForm;
