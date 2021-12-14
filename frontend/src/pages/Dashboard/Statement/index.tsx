import {StatementItemContainer, StatementItemImage, StatementItemInfo, StatementContainer} from './styles';
import {FiDollarSign} from 'react-icons/fi'
import {format} from 'date-fns';

interface StatementItem {
    user: {
        firstName: string,
        lastName: string
    },
    value: number,
    type: 'pay' | 'received',
    updatedAt: Date
}

const StatementItem = ({user, value, type, updatedAt}: StatementItem) => {
    return (
        <StatementItemContainer>
            <StatementItemImage type={type}>
                <FiDollarSign size={24}/>
            </StatementItemImage>
            <StatementItemInfo>
                <p className="primary-color">
                    {value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                </p>
                <p className="">{type === 'pay' ? `Pago a `: `Recebido de`} <strong>{user.firstName} {user.lastName}</strong></p>
                <p className="">{format(updatedAt, "dd/MM/yyyy 'às' HH:mm'h'")}</p>
            </StatementItemInfo>
        </StatementItemContainer>
    )
}

const Statement = () => {

    const statements: StatementItem[] = [
        {
            user:{
                firstName: 'Antônio',
                lastName: 'Araújo'
            },
            value: 351.14,
            type: 'pay',
            updatedAt: new Date()
        },
        {
            user:{
                firstName: 'Antônio',
                lastName: 'Araújo'
            },
            value: 25.15,
            type: 'received',
            updatedAt: new Date()
        },
        {
            user:{
                firstName: 'Antônio',
                lastName: 'Araújo'
            },
            value: 35.00,
            type: 'pay',
            updatedAt: new Date()
        },
        {
            user:{
                firstName: 'José',
                lastName: 'Araújo'
            },
            value: 550.00,
            type: 'received',
            updatedAt: new Date()
        },
        {
            user:{
                firstName: 'Rigoni',
                lastName: 'Vieira'
            },
            value: 550.00,
            type: 'received',
            updatedAt: new Date()
        },
        {
            user:{
                firstName: 'Francisco',
                lastName: 'Soares'
            },
            value: 500.00,
            type: 'received',
            updatedAt: new Date()
        }
        
        
    ]
    return (
        <StatementContainer>
            {statements.map(statement => <StatementItem {...statement}/>)}
        </StatementContainer>
    )
}

export default Statement;