import { Col as Cl } from 'antd';

export const Col = ({ children, flex, span, xs, sm, md, lg, x1, xx1 }) => (
    <Cl flex={flex} span={span} xs={xs} sm={sm} md={md} lg={lg} x1={x1} xx1={xx1}>
        {children}
    </Cl>
)