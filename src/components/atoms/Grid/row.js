import { Row as Rw } from 'antd';

export const Row = ({ children, align, gutter, justify, wrap }) => (
    <Rw align={align} gutter={gutter} justify={justify} wrap={wrap}>
        {children}
    </Rw>
)