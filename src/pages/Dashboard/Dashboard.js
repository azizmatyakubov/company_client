import { Helmet } from "react-helmet";
import BarChart from "../../components/Charts/BarChart";
import PieChart from "../../components/Charts/PieChart";
import StatWidget from "../../components/StatWidget/StatWidget";
import "./dashboard.scss";

import { dummyChartData } from "../../data/fakeBarChartData";

function Dashboard() {
  const title = "Dashboard";

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="dashboard-container">
        <div className="widgets">
          <StatWidget />
          <StatWidget />
          <StatWidget />
          <StatWidget />
        </div>
        <div className="charts">
          <div className="barChart">
            <BarChart data={dummyChartData} />
          </div>
          <div className="pieChart">
            <PieChart data={dummyChartData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
