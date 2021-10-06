import { Typography } from 'antd';

const { Text: Te } = Typography;

export const Text = ({ children, ellipsis }) => (
    <Te ellipsis={ellipsis}>
        {children}
    </Te>
)