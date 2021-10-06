import { Image } from '../../components/atoms/Image/image';
import { Link, Text, Title } from '../../components/atoms/Typography/typography';

export const Home = () => (
    <>
        <Image width={150} src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' alt='imagem de uma mulher feia' />
        <Title>
            Leo
        </Title>
        <Title level={2}>
            Lindão
        </Title>
        <Text>
            Teste
        </Text>
        <Link href='https://google.com' target='_blank'>
            Teste
        </Link>
    </>
);