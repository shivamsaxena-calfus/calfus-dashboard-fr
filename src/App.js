import DCard from './component/DCard'
import '@mantine/core/styles.css';
// import PiChart from './component/ExcelChart';
import BarGraph from './component/BarGraph';
import Chart from './component/Chart';
import { Grid } from '@mantine/core';
// import ExcelReader from './component/PieChartComponent';
import ExcelChart from './component/ExcelChart';
import ExcelReader from './component/ExcelReader';



function App() {
  return (
    <>
      <DCard />
      <br />
      <hr />
      <br />
      <Grid>
        <Grid.Col span={4}><ExcelChart /></Grid.Col>
        <Grid.Col span={4}><BarGraph /></Grid.Col>
        <Grid.Col span={4}><Chart /></Grid.Col>
      </Grid>
      <br />
      <ExcelReader />      



      
      
      
    </>
  );
}

export default App;
