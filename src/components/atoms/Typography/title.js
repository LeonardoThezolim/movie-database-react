import { Typography } from 'antd';

const { Title: Ti } = Typography;


export const Title = ({ children, level, ellipsis }) => (
    <Ti level={level} ellipsis={ellipsis}>
        {children}
    </Ti>
)