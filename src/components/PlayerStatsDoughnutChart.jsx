import { useRef } from 'react'
import 'chart.js/auto'
import { Chart, getElementAtEvent } from 'react-chartjs-2'
import ChartDeferred from 'chartjs-plugin-deferred';

const PlayerStatsDoughnutChart = ({ chartData, chartColors, stats, statClicked, alphaValue }) => {
  const chartRef = useRef()

  const onClick = (e) => {
    const statIndex = getElementAtEvent(chartRef.current, e)[0].index
    const stat = stats[statIndex]
    statClicked({ title: stat.statTitle, name: stat.baseStatName })
  }

  const data = {
    labels: Object.keys(chartData),
    datasets: [
      {
        data: Object.values(chartData),
        backgroundColor: Object.values(chartColors),
        hoverBackgroundColor: Object.values(chartColors).map(color => color.replace(`, ${alphaValue}`,', 1.25')),
        hoverBorderColor: 'white'
      }
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      deferred: {
        delay: 250,
        xOffset: '50%',
        yOffset: '50%'
      }
    },
    onHover: (e, chartElement) => {
      e.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default'
    },
    onLeave: (e, chartElement) => {
      e.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default'
    }
  }

  return (
    <>
      <Chart
        ref={chartRef}
        onClick={onClick}
        type='doughnut'
        data={data}
        options={options}
        plugins={[ChartDeferred]}
      />
    </>
  )
}

export default PlayerStatsDoughnutChart