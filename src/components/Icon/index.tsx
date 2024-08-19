import * as Icons from '@ricons/material';
import { Icon } from '@ricons/utils';
import React from 'react';

type Props = {
    type: keyof typeof Icons,
}

const Index = (props: Props) => {
    const { type } = props;

    const IconComponent = Icons[type] as unknown as React.ComponentType;

    return (
        <Icon>
            <IconComponent />
        </Icon>
    );
}
export default Index;