import { Button, Group, Paper, Select, SimpleGrid, Text, TextInput } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useForm } from '@mantine/form';
import dayjs from 'dayjs';
import 'dayjs/locale/pl';
import emailjs from 'emailjs-com';
import Link from 'next/link';
import { toast } from 'react-toastify';
import schools2 from '../../data/szkolyPodstawowe.json';
import { isValidEmail } from '../../utils';

const Registration = () => {
    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            birthDate: '',
            place: '',
            phone: ''
        },
    
        validate: {
            email: (value) => (isValidEmail(value) ? null : 'Błędny email'),
        },
    });

    const handleSubmit = (values: typeof form.values) => {
        values.birthDate = dayjs(values.birthDate).format("DD.MM.YYYY")
        const serviceId = String(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
        const templateId = String(process.env.NEXT_PUBLIC_EMAILJS_KID_REGISTER_ID);
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
        <Paper shadow="md" radius="md" p='xl' className='bg-gradient-to-br from-stone-100 to-stone-50'>
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Text size="lg" weight={700}>
                    Zapisy dziecka na zajęcia, wypełnij formularz - my oddzwonimy!
                </Text>
                <Text size="md" weight={400}>
                    (Dotyczy tylko Szkół Podstawowych, do placówek przedszkolnych zgłaszamy się przed dyrekcję)
                </Text>
                <TextInput mt='md' label="Imię i nazwisko dziecka" placeholder="Imię i nazwisko dziecka.." required {...form.getInputProps('name')} />
                <SimpleGrid mt='md' cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                    <DatePicker placeholder="Data urodzenia.." label="Data urodzenia" required {...form.getInputProps('birthDate')} />
                    <TextInput label="Telefon kontaktowy" type='number' placeholder="Numer telefonu.." required {...form.getInputProps('phone')} />
                </SimpleGrid>
                <Select
                    mt='md'
                    label="Placówka edukacyjna"
                    placeholder="Placówka.."
                    data={schools2.map(({name}) => ({value: name, label: name}))}
                    {...form.getInputProps('place')}
                    required
                />
                <TextInput mt='md' label="Email" placeholder="np. kowalski@gmail.com" required {...form.getInputProps('email')}/>
                <Text size='xs' mt='xs' weight={400}>
                    *Oświadczam, że zapoznałem się z <span className='text-red-600'><Link href='/przetwarzaniedanych'>Zasadami Przetwarzania Danych Osobowych</Link></span>
                </Text>
                <Group position="right" mt="md">
                    <Button type="submit" className='bg-gteal-400 hover:bg-gteal-500'>
                        Wyślij zgłoszenie
                    </Button>
                </Group>
            </form>
        </Paper>
    )
}

export default Registration