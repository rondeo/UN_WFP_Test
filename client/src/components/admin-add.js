import React, { Component } from "react";
import "./admin-add.css";

class AdminAdd extends Component {
  constructor() {
    super();
    this.state = {
      phase: "",
      discipline: "",
      step_title: "",
      step_description: "",
      tool_title: "",
      tool_url: "",
      tool_thumb_url: "",
      tool_example_title: "",
      tool_example_url: "",
      tool_example_thumb_url: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit");
  }

  render() {
    return (
      <div>
        <div className="row" id="admin_add">
          <div className="col-md-3" />
          <div className="col-md-6">
            <br />
            <h4 id="admin_add_title">Admin Interface - Create Steps </h4>
            <hr />
            {/* Section for phase entry */}
            <form className="form-horizontal">
              <div className="form-group">
                <label className="form-label" htmlFor="phase">
                  Phase:
                </label>
                <select
                  className="form-control"
                  id="phase"
                  name="phase"
                  placeholder="Phase"
                  value={this.state.phase}
                  onChange={this.handleChange}
                >
                  <option>Project Identification and Design</option>
                  <option>Project Setup</option>
                  <option>Project Planning</option>
                  <option>Project Implementation</option>
                  <option>Project Monitoring, Evaluation, and Control</option>
                  <option>Project Transition</option>
                </select>
              </div>
            </form>

            {/* Section for step title entry */}
            <form className="form-horizontal">
              <div className="form-group">
                <label className="form-label" htmlFor="step_title">
                  Step Title:
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="step_title"
                  name="step_title"
                  placeholder="Step Title"
                  value={this.state.step_title}
                  onChange={this.handleChange}
                />
              </div>
            </form>

            {/* Section for step description entry */}
            <form className="form-horizontal">
              <div className="form-group">
                <label className="form-label" htmlFor="step_description">
                  Step Description:
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="step_description"
                  name="step_description"
                  placeholder="Step Description"
                  value={this.state.step_description}
                  onChange={this.handleChange}
                />
              </div>
            </form>

            {/* Section for discipline entry */}
            <form className="form-horizontal">
              <div className="form-group">
                <label className="form-label">Discipline:</label>

                {/* Scope Management Checkbox */}
                <div className="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="scope_management"
                  />
                  <label class="form-check-label" for="scope_management">
                    Scope Management
                  </label>
                </div>

                {/* Time Management Checkbox */}
                <div className="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="time_management"
                    id="time_management"
                  />
                  <label class="form-check-label" for="time_management">
                    Time Management
                  </label>
                </div>

                {/* Resource Management Checkbox */}
                <div className="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="resource_management"
                    id="resource_management"
                  />
                  <label class="form-check-label" for="resource_management">
                    Resource Management
                  </label>
                </div>

                {/* Risk Management Checkbox */}
                <div className="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="risk_management"
                    id="risk_management"
                  />
                  <label class="form-check-label" for="risk_management">
                    Risk Management
                  </label>
                </div>

                {/* Justification Management Checkbox */}
                <div className="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="justification_management"
                    id="justification_management"
                  />
                  <label
                    class="form-check-label"
                    for="justification_management"
                  >
                    Justification Management
                  </label>
                </div>

                {/* Stakeholder Management Checkbox */}
                <div className="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="stakeholder_management"
                    id="stakeholder_management"
                  />
                  <label class="form-check-label" for="stakeholder_management">
                    Stakeholder Management
                  </label>
                </div>
              </div>
            </form>

            {/* Section for tool title entry */}
            <form className="form-horizontal">
              <div className="form-group">
                <label className="form-label" htmlFor="tool_title">
                  Tool Title:
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="tool_title"
                  name="tool_title"
                  placeholder="Tool Title"
                  value={this.state.tool_title}
                  onChange={this.handleChange}
                />
              </div>
            </form>

            {/* Section for tool url entry */}
            <form className="form-horizontal">
              <div className="form-group">
                <label className="form-label" for="tool_url">
                  {" "}
                  Tool Upload:{" "}
                </label>
                <input
                  className="custom-file-input"
                  type="file"
                  id="tool_url"
                  name="tool_url"
                  value={this.state.tool_url}
                  onChange={this.handleChange}
                />
              </div>
            </form>

            {/* Section for tool thumb url entry */}
            <form className="form-horizontal">
              <div className="form-group">
                <label className="form-label" for="tool_thumb_url">
                  {" "}
                  Tool Thumbnail Upload:{" "}
                </label>
                <input
                  className="custom-file-input"
                  type="file"
                  id="tool_thumb_url"
                  name="tool_thumb_url"
                  value={this.state.tool_thumb_url}
                  onChange={this.handleChange}
                />
              </div>
            </form>

            {/* Section for tool example title entry */}
            <form className="form-horizontal">
              <div className="form-group">
                <label className="form-label" htmlFor="tool_example_title">
                  Tool Example Title:
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="tool_example_title"
                  name="tool_example_title"
                  placeholder="Tool Example Title"
                  value={this.state.tool_example_title}
                  onChange={this.handleChange}
                />
              </div>
            </form>

            {/* Section for tool example url entry */}
            <form className="form-horizontal">
              <div className="form-group">
                <label className="form-label" for="tool_example_url">
                  {" "}
                  Tool Example Upload:{" "}
                </label>
                <input
                  className="custom-file-input"
                  type="file"
                  id="tool_example_url"
                  name="tool_example_url"
                  value={this.state.tool_example_url}
                  onChange={this.handleChange}
                />
              </div>
            </form>

            {/* Section for tool example thumb url entry */}
            <form className="form-horizontal">
              <div className="form-group">
                <label className="form-label" for="tool_example_thumb_url">
                  {" "}
                  Tool Example Thumbnail Upload:{" "}
                </label>
                <input
                  className="custom-file-input"
                  type="file"
                  id="tool_example_thumb_url"
                  name="tool_example_thumb_url"
                  value={this.state.tool_example_thumb_url}
                  onChange={this.handleChange}
                />
              </div>
            </form>
            <br />

            <button
              className="btn btn-primary"
              onClick={this.handleSubmit}
              type="submit"
              id="admin_add_button"
            >
              Submit
            </button>
          </div>
          <div className="col-md-3" />
        </div>
      </div>
    );
  }
}

export default AdminAdd;
