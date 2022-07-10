import { Fragment } from "react";
import PropTypes from 'prop-types';
import {Table,TableTr,TableTh,TableTd} from "./TransactionHistory.styled";

export const TransactionHistory = ({ trans }) => {
    return (
        <Table>
            <thead>
                <TableTr>
                    <TableTh>Type</TableTh>
                    <TableTh>Amount</TableTh>
                    <TableTh>Currency</TableTh>
                </TableTr>
            </thead>
            {trans.map(({ id, type, amount,currency }) => (
                <Fragment  key={id}>
                        <tbody>
                        <TableTr>
                            <TableTd>{type}</TableTd>
                            <TableTd>{amount}</TableTd>
                            <TableTd>{currency}</TableTd>
                        </TableTr>
                        </tbody>
                </Fragment> 
            ))}
        </Table>
    )
}
TransactionHistory.propTypes = {
    trans: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ),
};


