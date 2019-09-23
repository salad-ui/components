import {DocGenType} from './types';

export const formatType = (type: DocGenType | undefined): string => {
    if (!type) {
        return '';
    }

    if (type.name === 'enum' && Array.isArray(type.value)) {
        return type.value.map(t => formatType(t)).join(' | ');
    }

    if (typeof type.value === 'string') {
        return type.value;
    }

    if (typeof type.name === 'string') {
        return type.name;
    }

    return '';
};
