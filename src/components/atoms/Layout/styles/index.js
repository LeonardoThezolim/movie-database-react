import { Layout } from 'antd';
import styled from "styled-components";
import { Colors } from '../../../../variables';

const { Header: H } = Layout;
const { gray900 } = Colors

export const Header = styled(H)`
background-color: ${gray900};
`