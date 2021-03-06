import React, { ReactNode } from 'react';
import classnames from 'classnames';
import styled from 'styled-components';

interface FieldProps {
    label: string;
    value?: string;
    name?: string;
    className?: string;
    children?: ReactNode;
}

const Field = styled.label`
    border: none;
    box-sizing: border-box;
    display: inline-block;
`;

const Label = styled.span`
    display: block;
    font-size: 2rem;
    margin-bottom: 1rem;
`;

export default styled(({ children, label, className, ...p }: FieldProps) => (
    <Field className={classnames('field', className)} {...p}>
        <Label>{label}</Label>
        {children}
    </Field>
))``;
