import React from 'react'

import './styles.scss';

const StatusBadge = ({status}) => {
    const getStatusClassName = () => {
        switch (status) {
            case 'paid':
                return 'status__paid';
            case 'unpaid':
                return 'status__unpaid';
            case 'pending':
                return 'status__pending';    
        }
    }

    return <span className={'status ' + getStatusClassName()}>
        {status[0].toUpperCase() + status.slice(1)}
    </span>
};

export default StatusBadge;