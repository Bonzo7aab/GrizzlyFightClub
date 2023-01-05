import { List, Paper, Text } from '@mantine/core'

const ProcessingPersonalData = () => {
    return (
        <Paper withBorder shadow="md" radius="md" p='xl' m='xl' className='max-w-5xl'>
            <Text align='center' weight='bold' size="lg">ZASADY PRZETWARZANIA DANYCH OSOBOWYCH</Text>
            <Text mt='md'>Uprzejmie informujemy, iż Grizzly Fight Club z siedzibą przy ul. Studenckiej 31/2 w Warszawie przetwarza następujący zakres Państwa (dotyczy także dzieci pozostających pod Państwa opieką) danych osobowych:</Text>
            <List listStyleType="square" withPadding mt='md'>
                <List.Item>imię i nazwisko</List.Item>
                <List.Item>adres zamieszkania</List.Item>
                <List.Item>data i miejsce urodzenia</List.Item>
                <List.Item>PESEL</List.Item>
                <List.Item>adres e-mail</List.Item>
                <List.Item>numer telefonu</List.Item>
                <List.Item>obywatelstwo</List.Item>
            </List>
            <Text mt='md'>Dane te były i są pozyskiwane na podstawie kart zgłoszenia (deklaracji członkowskiej) lub rejestracji ONLINE w celu prowadzenia statutowej i działalności Stowarzyszenia.</Text>
            <Text mt='md'>Administratorem Pani/Pana danych osobowych (dalej: Administrator) jest: Grizzly Fight Club, ul.
                Studencka 31/2, 02-735 Warszawa, NIP: 367583891. Z Administratorem można się
                kontaktować za pomocą poczty e-mail na adres: grizzlyklub@gmail.com
                Administrator wyznaczył Inspektora Ochrony Danych, z którym można się kontaktować
                za pomocą poczty e-mail na adres: grizzlyklub@gmail.com
                Pani/Pana dane osobowe są przetwarzane na podstawie art. 6 ust. 1 lit. f RODO, tj. w oparciu o
                niezbędność przetwarzania do celów wynikających z prawnie uzasadnionych interesów
                realizowanych przez Administratora lub przez stronę trzecią (urzędy publiczne zlecające zadania).
                Pani/Pana dane osobowe są przetwarzane ręcznie oraz automatycznie.
                Prawnie uzasadnione interesy realizowane przez Grizzly Fight Club polegają na przetwarzaniu danych
                celem profesjonalnej organizacji zajęć sportowych/rekreacyjnych, zawodów, obozów, wyjazdów
                sportowych/rekreacyjnych. Przetwarzanie danych jest niezbędne do prawidłowej realizacji projektów sportowych/rekreacyjnych.
                Grizzly Fight Club udostępnia dane urzędom publicznym w celu rozliczania otrzymanych dotacji na
                działania statutowe, związkom sportowym i innym organizacjom, w których Grizzly Fight Club jest
                zrzeszony. Dane osobowe są przechowywane na czas członkostwa w Grizzly Fight Club, a także
                zgodnie z nadrzędnymi przepisami prawa przez okres 5 lat.
                Administrator przetwarza Pani/Pana dane osobowe w zakresie, w jakim są one udostępniane
                publicznie na naszych stronach internetowych w postaci imienia i nazwiska oraz wizerunku (wyniki
                zawodów, ranking klubowy, relacje z akcji szkoleniowych i innych przedsięwzięć Grizzly Fight Club).
                W związku z przetwarzaniem Pani/Pana danych osobowych przysługuje Pani/Panu prawo do:
            </Text>
            <List listStyleType="square" withPadding mt='md'>
                <List.Item>żądania od Administratora dostępu do Pani/Pana danych osobowych</List.Item>
                <List.Item>żądania od Administratora sprostowania Pani/Pana danych osobowych</List.Item>
                <List.Item>żądania od Administratora usunięcia Pani/Pana danych osobowych</List.Item>
                <List.Item>żądania od Administratora ograniczenia przetwarzania Pani/Pana danych osobowych</List.Item>
                <List.Item>wniesienia sprzeciwu wobec przetwarzania Pani/pana danych osobowych</List.Item>
                <List.Item>przenoszenia Pani/Pana danych osobowych</List.Item>
                <List.Item>wniesienia skargi do organu nadzorczego</List.Item>
            </List>
        </Paper>
    )
}

export default ProcessingPersonalData