import { useRef, useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
);

export function PriceChangesGraph({ graphData }) {
    const chartRef = useRef(null)
    const [chartData, setChartData] = useState({ datasets: [] })

    useEffect(() => {
        const chart = chartRef.current

        if (!chart || !graphData) {
            return
        }

        const timestamps = graphData.map(entry => new Date(entry.timestamp))
        const prices = graphData.map(entry => entry.price)
        const colors = ['#5939DA', '#9F338E', '#EE1F2F']
        const gradient = createGradient(chart.ctx, chart.chartArea, colors)

        const newChartData = {
            labels: timestamps.map(t => t.toISOString().slice(0, 10)),
            datasets: [{
                label: 'Price',
                data: prices,
                borderColor: gradient,
                borderWidth: 1,
                pointBackgroundColor: gradient,
                backgroundColor: 'transparent',
                pointRadius: 1.5,
            }]
        }

        setChartData(newChartData)
    }, [graphData])

    function createGradient(ctx, area, colors) {
        const colorStart = colors[0]
        const colorMid = colors[1]
        const colorEnd = colors[2]

        const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top)

        gradient.addColorStop(0, colorStart)
        gradient.addColorStop(0.5, colorMid)
        gradient.addColorStop(1, colorEnd)

        return gradient
    }

    const options = {
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                display: false,
            },
            y: {
                grid: {
                    display: false,
                },
                display: false,
            },
        },
        elements: {
            line: {
                tension: 0,
            },
        },
        responsive: true,
        maintainAspectRatio: false,
    }

    if (!graphData) return <div>Loading...</div>

    return (
        <div className='graph-container'>
            <Chart ref={chartRef} type='line' data={chartData} options={options} />
        </div>
    )
}
