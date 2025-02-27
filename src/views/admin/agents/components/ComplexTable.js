/* eslint-disable */

import {
  Box,
  Flex,
  Icon,
  Progress,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  Button,
  Input,
} from '@chakra-ui/react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import Card from 'components/card/Card';
import * as React from 'react';
import moment from 'moment';

const columnHelper = createColumnHelper();

export default function ComplexTable(props) {
  const { tableData } = props;
  const [sorting, setSorting] = React.useState([]);
  const [pageIndex, setPageIndex] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(10); // Set default page size
  const [filter, setFilter] = React.useState(''); // State for filter input
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');
  
  // Filtered data based on the filter input
  const filteredData = tableData.filter((item) => {
    return (
      item.fullName.toLowerCase().includes(filter.toLowerCase()) ||
      item.status.toLowerCase().includes(filter.toLowerCase()) ||
      item.product.toLowerCase().includes(filter.toLowerCase())
    );
  });

  const columns = [
    columnHelper.accessor('fullName', {
      id: 'fullName',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400"
        >
          NAME
        </Text>
      ),
      cell: (info) => (
        <Flex align="center">
          <Text color={textColor} fontSize="sm" fontWeight="700">
            {info.getValue()}
          </Text>
        </Flex>
      ),
    }),
    columnHelper.accessor('status', {
      id: 'status',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400"
        >
          STATUS
        </Text>
      ),
      cell: (info) => (
        <Flex align="center">
          <Text color={textColor} fontSize="sm" fontWeight="700">
            {info.getValue()}
          </Text>
        </Flex>
      ),
    }),
  ];

  const [data, setData] = React.useState(() => [...filteredData]);
  React.useEffect(() => {
      const newData = tableData.filter((item) => {
          return (
              item.fullName.toLowerCase().includes(filter.toLowerCase()) ||
              item.status.toLowerCase().includes(filter.toLowerCase()) ||
              item.product.toLowerCase().includes(filter.toLowerCase())
          );
      });
      setData(newData);
  }, [filter, tableData]);
  
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      pagination: {
        pageIndex,
        pageSize,
      },
    },
    onSortingChange: setSorting,
    onPaginationChange: (updater) => {
      if (typeof updater === 'function') {
        const newState = updater({ pageIndex, pageSize });
        setPageIndex(newState.pageIndex);
        setPageSize(newState.pageSize);
      } else {
        setPageIndex(updater.pageIndex);
        setPageSize(updater.pageSize);
      }
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  return (
    <Card
      flexDirection="column"
      w="100%"
      px="0px"
      overflowX={{ sm: 'scroll', lg: 'hidden' }}
    >
      <Flex px="25px" mb="8px" justifyContent="space-between" align="center">
        <Text
          color={textColor}
          fontSize="22px"
          fontWeight="700"
          lineHeight="100%"
        >
          List of Agents
        </Text>
        <Input
          placeholder="Filter by name, status, or product"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            setPageIndex(0); // Reset page index when filter changes
          }}
          mb={4}
          w="30%"
        />
      </Flex>
      <Box>
        <Table variant="simple" color="gray.500" mb="24px" mt="12px">
          <Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <Th
                      key={header.id}
                      colSpan={header.colSpan}
                      pe="10px"
                      borderColor={borderColor}
                      cursor="pointer"
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      <Flex
                        justifyContent="space-between"
                        align="center"
                        fontSize={{ sm: '10px', lg: '12px' }}
                        color="gray.400"
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        {{
                          asc: '',
                          desc: '',
                        }[header.column.getIsSorted()] ?? null}
                      </Flex>
                    </Th>
                  );
                })}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize).map((row) => (
              <Tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <Td 
                    key={cell.id} 
                    fontSize={{ sm: '14px' }} 
                    minW={{ sm: '150px', md: '200px', lg: 'auto' }} 
                    borderColor="transparent">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
      <Flex justifyContent="space-between" p="20px">
        <Button
          onClick={() => setPageIndex((old) => Math.max(old - 1, 0))}
          isDisabled={pageIndex === 0}
        >
          Previous
        </Button>
        <Text>
          Page {pageIndex + 1} of {Math.ceil(filteredData.length / pageSize)}
        </Text>
        <Button
          onClick={() => setPageIndex((old) => Math.min(old + 1, Math.ceil(filteredData.length / pageSize) - 1))}
          isDisabled={pageIndex >= Math.ceil(filteredData.length / pageSize) - 1}
        >
          Next
        </Button>
      </Flex>
    </Card>
  );
}