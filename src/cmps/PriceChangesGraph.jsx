import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

export function PriceChangesGraph({ graphData }) {
    // const colors = ['#5939DA', '#9F338E', '#EE1F2F']; // Array of colors, representing the gradient-like effect
    console.log('graphData:', graphData)

    const timestamps = graphData?.map(entry => new Date(entry.timestamp));
    const prices = graphData?.map(entry => entry.price);

    if (!graphData) return <div>Loading...</div>

    return (
        <Box sx={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <SparkLineChart
                // data={[1, 4, 2, 5, 7, 2, 4, 6]}
                data={prices}
                xAxis={{
                    scaleType: 'time',
                    data: timestamps,
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
