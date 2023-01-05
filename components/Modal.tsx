import { Button, Group, InputBase, Modal, Select } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Dispatch, SetStateAction } from 'react';
import InputMask from 'react-input-mask';
import { weekDays } from '../constants';

const ModalWrapper = ({ 
    modalOpened, 
    setModalOpened,
    typeList,
    schoolsList,
}: { 
    modalOpened: boolean, 
    setModalOpened: Dispatch<SetStateAction<boolean>>,
    typeList: Array<string>,
    schoolsList: Array<string>
}) => {
    const form = useForm({
        initialValues: {
          type: '',
          school: '', 
          day: '',
          start: '',
          end: ''
        }
      });

    const handleSubmit = (values: typeof form.values) => {
        console.log(values)
    }

    return (
        <Modal
            transition="fade"
            transitionDuration={600}
            transitionTimingFunction="ease" 
            centered
            opened={modalOpened} 
            onClose={() => setModalOpened(false)}
            title="Dodaj zajęcia"
        >
            <form className='grid gap-6' onSubmit={form.onSubmit(handleSubmit)}>
                <Select
                    label="Typ"
                    data={typeList.filter(type => type != 'all')}
                    placeholder="Typ zajęć"
                />

                <Select
                    label="Dzień"
                    data={schoolsList}
                    placeholder="Miejsce zajęć"
                    {...form.getInputProps('school')} 
                />

                <Select
                    label="Miejsce"
                    data={weekDays}
                    placeholder="Dzień tygodnia"
                    {...form.getInputProps('day')} 
                />

                <InputBase
                    label="Godzina startu zajęć"
                    placeholder="np. 08:15"
                    component={InputMask}
                    mask="99:99"
                    {...form.getInputProps('start')} 
                />

                <InputBase
                    label="Godzina końca zajęć"
                    placeholder="np. 09:15"
                    component={InputMask}
                    mask="99:99"
                    {...form.getInputProps('end')} 
                />
                
                <Group position="right" mt="md">
                    <Button color='gray' onClick={() => setModalOpened(false)} className='bg-gray-500'>
                        Cancel
                    </Button>
                    <Button type="submit" className='bg-gteal-600 hover:bg-gteal-500'>
                        Dodaj
                    </Button>
                </Group>
            </form>
        </Modal>

    )
}

export default ModalWrapper