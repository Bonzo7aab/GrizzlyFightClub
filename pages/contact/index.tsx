import { Button, Group, Paper, SimpleGrid, Text, Textarea, TextInput, ThemeIcon, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import emailjs from "emailjs-com";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isValidEmail } from "../../utils";

const contactNumbers = [
    { title: 'Telefon 1', icon: FaPhoneAlt, contact: '606301856' },
    { title: 'Telefon 2', icon: FaPhoneAlt, contact: '533020048' },
    { title: 'Email', icon: HiMail, contact: 'GRIZZLYKLUB@GMAIL.COM' }
]

const Contact = () => {
    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
    
        validate: {
            email: (value) => (isValidEmail(value) ? null : 'Błędny email'),
        },
    });

    const handleSubmit = (values: typeof form.values) => {
        const serviceId = String(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
        const templateId = String(process.env.NEXT_PUBLIC_EMAILJS_CONTACT_ID);
        const userId = String(process.env.NEXT_PUBLIC_EMAILJS_USER_ID);

        emailjs.send(serviceId, templateId, values, userId)
            .then(() => {
                toast.success("Email wysłany!", { theme: 'colored' })
                form.reset()
            })
            .catch(() => {
                toast.error('Coś poszło nie tak, napisz do nas bezpośrednio', { theme: 'colored' })
            });
    }

    return (
        <Paper shadow="md" radius="lg" p='xl' className="bg-gradient-to-br from-stone-100 to-stone-50">
            <div className='flex'>
                <div className='p-4 rounded-lg flex-1'>
                    <Title className='leading-none'>Informacje kontaktowe</Title>
                    <Text className='leading-tight' mt="sm" mb={30}>
                        Zadzwoń, zostaw sms lub wyślij email, a na pewno się z Tobą skontaktujemy!
                    </Text>
                    {contactNumbers.map(el => 
                        <div key={el.title} className='flex flex-1 items-center mt-2'>
                                <ThemeIcon size={40} radius='md' mr='md' className="bg-gradient-to-br from-gbrown-200 to-gbrown-500 ">
                                    <el.icon size={24} />
                                </ThemeIcon>
                            <div>
                                <Text size="xs" className='text-gray-500'>
                                    {el.title}
                                </Text>
                                <Text>{el.contact}</Text>
                            </div>
                        </div>   
                    )}
                </div>

                <form className='flex-1 p-4' onSubmit={form.onSubmit(handleSubmit)}>
                    <Text size="lg" weight={700} mb='md'>
                        Skontaktuj się z nami
                    </Text>
                    <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                        <TextInput label="Imię i nazwisko" placeholder="Imię i nazwisko.." required {...form.getInputProps('name')} />
                        <TextInput label="Email" placeholder="np.kowalski@gmail.com" required {...form.getInputProps('email')} />
                    </SimpleGrid>

                    <TextInput mt="md" label="Temat" placeholder="Temat.." required {...form.getInputProps('subject')} />

                    <Textarea
                        mt="md"
                        label="Treść wiadomości"
                        placeholder="Treść wiadomości.."
                        minRows={3}
                        required
                        {...form.getInputProps('message')}
                    />

                    <Group position="right" mt="md">
                        <Button type="submit" className='bg-gteal-400 hover:bg-gteal-500'>
                            Wyślij wiadomość
                        </Button>
                    </Group>
                </form>
            </div>
        </Paper>
    )
}

export default Contact