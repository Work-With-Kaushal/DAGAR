function Analytics() {
  return (
    <div className="card shadow-lg p-4 mt-5">
      <h3>📈 Analytics</h3>

      <div className="row">

        <div className="col-md-4">
          <div className="alert alert-primary">
            Most Reported Area
          </div>
        </div>

        <div className="col-md-4">
          <div className="alert alert-warning">
            Pending Repairs
          </div>
        </div>

        <div className="col-md-4">
          <div className="alert alert-success">
            Completed Repairs
          </div>
        </div>

      </div>
    </div>
  );
}

export default Analytics;