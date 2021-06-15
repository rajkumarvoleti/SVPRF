import React from "react";
class Careerpage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, window.innerHeight - 100);
  }
  componentDidUpdate() {
    const page = this.props.page;
    if (page !== "/career") this.props.history.push(page);
  }
  render() {
    return (
      <div className="CareerPageMain" id="CareerPage">
        <div className="CareerPage">
          <div className="heading">
            <h2>Career</h2>
          </div>
          <div className="content">
            <h4>
              We offer internship opportunities to young aspirants who are
              interested in public policy and governance. If you are selected as
              a volunteer/associate, your responsibilities will include:
            </h4>
            <ul className="list">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
              </svg>
              <li>
                Assisting the seniors with all the logistical work, background
                research on relevant topics
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
              </svg>
              <li>
                Handle communications with specialists, MPs/MLAs, and partner
                organizations for the upcoming domestic roundtable programs,
                budget session of the parliament and academic programs
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
              </svg>
              <li>
                Conduct web-based research and provide support materials for
                preparing related documents for ongoing public policy-related
                issues
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
              </svg>
              <li>
                Draft reports, transcriptions and other knowledge products The
                interns will also be provided with placement support after their
                successful completion of the internship
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Careerpage;
