/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
    // Avatar,
    Box,
    // Flex,
    // FormLabel,
    // Icon,
    // Select,
    SimpleGrid,
    // useColorModeValue,
  } from "@chakra-ui/react";

  import React from "react";

  import ComplexTable from "views/admin/transactions/components/ComplexTable";
  
  import {
    // columnsDataCheck,
    columnsDataComplex,
  } from "views/admin/default/variables/columnsData";
  // import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
  import tableDataComplex from "views/admin/default/variables/humble100Data.json";
  
  export default function UserReports() {
    
  
    return (
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap='20px' mb='20px'>
          <ComplexTable
            columnsData={columnsDataComplex}
            tableData={tableDataComplex}
          />
        </SimpleGrid>
      </Box>
    );
  }
  