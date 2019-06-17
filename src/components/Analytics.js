import React from 'react';
import Plot from 'react-plotly.js';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },

  plot: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  }
});

const chartData = [
  {
    type: 'bar',
    x: ['2016', '2017', '2018', '2019', '2020'],
    y: [500, 600, 700, 800, 900],
    base: [-500, -600, -700, -800, -900],
    marker: {
      color: 'red'
    },
    name: 'expenses'
  },
  {
    type: 'bar',
    x: ['2016', '2017', '2018', '2019', '2020'],
    y: [330, 410, 730, 875, 1105],
    base: 0,
    marker: {
      color: 'blue'
    },
    name: 'revenue'
  }
];

const Analytics = ({ classes }) => {
  return (
    <Plot
      className={classes.plot}
      data={chartData}
      layout={{
        width: 920,
        height: 460,
        title: 'Company AS - Revenue / Expenses'
      }}
    />
  );
};

export default withStyles(styles)(Analytics);
