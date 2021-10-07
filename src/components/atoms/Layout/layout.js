import { Layout as L } from 'antd';

export const Layout = ({ children, className, hasSider }) => (
    <L className={className} hasSider={hasSider}>
        {children}
    </L>
)