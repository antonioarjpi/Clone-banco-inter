import React from "react";
import { CardContainer } from "./style";

interface CardProps{
    width?: string;
    children?: React.ReactNode;
    height?: string;
    noShadow?: boolean;
}

const Card = ({
    children,
    width = '100%',
    height = 'auto',
    noShadow = false,
}: CardProps) => {
    return (
        <CardContainer width={ width } height={height} noShadow ={false}>
            {children}
        </CardContainer>
    )
}

export default Card;