import {Table} from '@nextui-org/react';
import React from 'react';
import {Box} from '../styles/box';
import {trains, trainData} from './data';
import {RenderCell} from './render-cell';
// TODO: Add props here => Columns, Body(users), pageCount
// 
export const TableWrapper = () => {
   return (
      <Box
         css={{
            '& .nextui-table-container': {
               boxShadow: 'none',
            },
         }}
      >
         <Table
            aria-label="Example table with custom cells"
            css={{
               height: 'auto',
               minWidth: '100%',
               boxShadow: 'none',
               width: '100%',
               px: 0,
            }}
            selectionMode="multiple"
         >
            <Table.Header columns={trains}>
               {(trains) => (
                  <Table.Column
                     key={trains.uid}
                     hideHeader={trains.uid === 'actions'}
                     align={trains.uid === 'actions' ? 'center' : 'start'}
                  >
                     {trains.name}
                  </Table.Column>
               )}
            </Table.Header>
            <Table.Body items={trainData}>
               {(item) => (
                  <Table.Row>
                     {(columnKey) => (
                        <Table.Cell>
                           {RenderCell({user: item, columnKey: columnKey})}
                        </Table.Cell>
                     )}
                  </Table.Row>
               )}
            </Table.Body>
            <Table.Pagination
               shadow
               noMargin
               align="center"
               rowsPerPage={4}
               onPageChange={(page) => console.log({page})}
            />
         </Table>
      </Box>
   );
};
