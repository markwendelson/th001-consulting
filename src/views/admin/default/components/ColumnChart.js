/* eslint-disable */

import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

// Chakra imports
import {
    Box,
    Button,
    Flex,
    Icon,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
  
import Card from "components/card/Card.js";

const ColumnChart = () => {
    const options = {
        chart: {
            type: 'column',
            backgroundColor: 'none', // Dark background color
        },
        title: {
            text: 'Sales for 2024',
            style: {
                color: '#ffffff', // White text for title
            },
        },
        subtitle: {
            text: 'sample data',
            useHTML: true,
            style: {
                color: '#cccccc', // Light gray for subtitle
            },
        },
        xAxis: {
            categories: ['USA', 'China', 'Brazil', 'EU', 'Argentina', 'India'],
            crosshair: true,
            accessibility: {
                description: 'Countries',
            },
            labels: {
                style: {
                    color: '#ffffff', // White text for x-axis labels
                },
            },
        },
        yAxis: {
            min: 0,
            title: {
                text: '',
                style: {
                    color: '#ffffff', // White text for y-axis title
                },
            },
            labels: {
                style: {
                    color: '#ffffff', // White text for y-axis labels
                },
            },
        },
        tooltip: {
            valueSuffix: ' (1000 MT)',
            style: {
                color: '#lalala', // White text for tooltip
            },
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    style: {
                        color: '#ffffff', // White text for data labels
                    },
                },
            },
        },
        series: [
            {
                name: 'Company 1',
                data: [387749, 280000, 129000, 64300, 54000, 34300],
                color: '#ffcc00', // Optional: Set a specific color for the Corn series
            },
            {
                name: 'Company 2',
                data: [45321, 140000, 10000, 140500, 19500, 113500],
                color: '#00ccff', // Optional: Set a specific color for the Wheat series
            },
        ],
    };

    return (
        <Card
            justifyContent='center'
            align='center'
            direction='column'
            w='100%'
            mb='0px'>
            <Flex justify='space-between' ps='0px' pe='20px' pt='5px'>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={options}
                    />
            </Flex>
      </Card>
    );
};

export default ColumnChart;