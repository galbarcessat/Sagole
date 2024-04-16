import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

export function PriceChangesGraph({ graphData }) {
    // const colors = ['#5939DA', '#9F338E', '#EE1F2F']; // Array of colors, representing the gradient-like effect

    return (
        <Box sx={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <SparkLineChart
                data={[1, 4, 2, 5, 7, 2, 4, 6]}
                xAxis={{
                    scaleType: 'time',
                    data: [
                        new Date(2022, 5, 1),
                        new Date(2022, 5, 2),
                        new Date(2022, 5, 5),
                        new Date(2022, 5, 6),
                        new Date(2022, 5, 7),
                        new Date(2022, 5, 8),
                        new Date(2022, 5, 11),
                        new Date(2022, 5, 12),
                    ],
                    valueFormatter: (value) => value.toISOString().slice(0, 10),
                }}
                showTooltip
                showHighlight
                // colors={colors}
                colors={['#EE1F2F']}
            />
        </Box>

    )
}
