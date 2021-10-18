import { Layout } from 'antd';
import styled from "styled-components";
import { Colors } from '../../../../variables';

const { Header: H } = Layout;
const { black } = Colors

export const Header = styled(H)`
background-color: ${black};
`