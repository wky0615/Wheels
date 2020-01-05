import React from 'react';
import Table from "../../lib/table/table";
import { useTranslation } from 'react-i18next';
import Column from "../../lib/table/Column";
import THead from "../../lib/table/THead";
import TCell from "../../lib/table/TCell";
import TPagination from "../../lib/table/TPagination";

const TableExample = () => {
    const { t } = useTranslation();
    //
    // const columns = [
    //     {
    //         title: 'name',
    //         key: 'name',
    //     },
    //     {
    //         title: 'age',
    //         key: 'age',
    //     },
    //     {
    //         title: 'gender',
    //         key: 'gender',
    //     }
    // ];
    // const source = [
    //     {
    //         name: 'frank',
    //         age: 18,
    //         gender: 'male',
    //     },
    //     {
    //         name: 'nemo',
    //         age: 20,
    //         gender: 'male',
    //     },
    //     {
    //         name: 'leo',
    //         age: 1,
    //         gender: 'male',
    //     },
    //     {
    //         name: 'may',
    //         age: 1,
    //         gender: 'male',
    //     }
    // ];
    return (
        <div>
            {t('table_simple')}
            <Table>
                <Column>
                    <THead/>
                    <TCell/>
                </Column>
                <TPagination/>
            </Table>
        </div>
    )
}

export default TableExample
