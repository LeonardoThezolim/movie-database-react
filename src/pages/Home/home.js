import Logo from '../../assets/images/logo_critiqui.png';
import { Col, Row } from '../../components/atoms/Grid/grid';
import { Image } from "../../components/atoms/Image/image";
import { Header, Layout } from "../../components/atoms/Layout";
import { Link } from '../../components/atoms/Typography/typography';

export const Home = () => (
    <>
        <Layout>
            <Header>
                <Row gutter='24'>
                    <Col>
                        <Image src={Logo} width={200} />
                    </Col>
                    <Col>
                        <Link href='/'>Filmes</Link>
                    </Col>
                    <Col>
                        <Link href='/'>Séries</Link>
                    </Col>
                    <Col>
                        <Link href='/'>Pessoas</Link>
                    </Col>
                    <Col>
                        <Link href='/'>Mais</Link>
                    </Col>
                </Row>
            </Header>
        </Layout>
    </>
);