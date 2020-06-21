import React from "react";
import jsonp from "jsonp";
import PropTypes from "prop-types";

class Mailchimp extends React.Component {
  state = {};

  handleSubmit(evt) {
    evt.preventDefault();
    const { fields, action } = this.props;
    const values = fields
      .map((field) => {
        return `${field.name}=${encodeURIComponent(this.state[field.name])}`;
      })
      .join("&");
    const path = `${action}&${values}`;
    const url = path.replace("/post?", "/post-json?");
    const regex = /^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/; // eslint-disable-line
    const email = this.state["EMAIL"];
    !regex.test(email)
      ? this.setState({ status: "empty" })
      : this.sendData(url);
  }

  sendData(url) {
    this.setState({ status: "sending" });
    jsonp(url, { param: "c" }, (err, data) => {
      if (data.msg.includes("already subscribed")) {
        this.setState({ status: "duplicate" });
      } else if (err) {
        this.setState({ status: "error" });
      } else if (data.result !== "success") {
        this.setState({ status: "error" });
      } else {
        this.setState({ status: "success" });
      }
    });
  }

  render() {
    const { fields, styles, className, buttonClassName } = this.props; // eslint-disable-line
    const messages = {
      ...Mailchimp.defaultProps.messages,
      ...this.props.messages,
    };
    const { status } = this.state;
    return (
      <form id="mailchimp" onSubmit={this.handleSubmit.bind(this)}>
        <div className="input-group" style={{ maxWidth: 500 }}>
          {fields.map((input) => (
            <input
              {...input}
              key={input.name}
              onChange={({ target }) =>
                this.setState({ [input.name]: target.value })
              }
              defaultValue={this.state[input.name]}
              className="form-control"
              style={{ paddingTop: 10, paddingBottom: 10 }}
            />
          ))}
          <button
            disabled={status === "sending" || status === "success"}
            type="submit"
            className="btn btn-primary text-white px-3"
          >
            {/* {messages.button} */}
            <i className="fas fa-paper-plane fa-lg" />
          </button>
        </div>

        <div className="msg-alert mt-3">
          {!status && <p style={{ height: 24 }}></p>}
          {status === "sending" && (
            <p style={styles.sendingMsg}>{messages.sending}</p>
          )}
          {status === "success" && (
            <p style={styles.successMsg}>You're in, thanks for subscribing! Meanwhile, <a href="https://www.pinterest.com/top50cutest/baby-goats/" className="text-primary" style={{textDecoration: "none"}}>baby goats</a>...</p>
          )}
          {status === "duplicate" && (
            <p style={styles.duplicateMsg}>{messages.duplicate}</p>
          )}
          {status === "empty" && (
            <p style={styles.errorMsg}>{messages.empty}</p>
          )}
          {status === "error" && (
            <p style={styles.errorMsg}>{messages.error}</p>
          )}
        </div>
      </form>
    );
  }
}

Mailchimp.defaultProps = {
  messages: {
    sending: "Sending...",
    success: `You're in, thanks for subscribing! Meanwhile, ${(
      <a href="https://www.pinterest.com/top50cutest/baby-goats/">
        baby goats.
      </a>
    )}`,
    error: "Hmm... something misfired. Try again later?",
    empty: "You must write an email address.",
    duplicate: "Too many subscribe attempts for this email address",
    button: "Subscribe!",
  },
  buttonClassName: "",
  styles: {
    sendingMsg: {
      // color: "#0652DD",
      color: "#fff",
    },
    successMsg: {
      color: "#fff",
      // color: "#009432",
    },
    duplicateMsg: {
      color: "#fff",
      // color: "#EE5A24",
    },
    errorMsg: {
      // color: "#ED4C67",
      color: "#fff",
    },
  },
};

Mailchimp.propTypes = {
  action: PropTypes.string,
  messages: PropTypes.object,
  fields: PropTypes.array,
  styles: PropTypes.object,
  className: PropTypes.string,
  buttonClassName: PropTypes.string,
};

export default Mailchimp;
