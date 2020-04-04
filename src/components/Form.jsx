import React, { Component } from "react";
import axios from "axios";
import { style } from "../styles/style";
import { Container, Row, Col } from "react-grid-system";
import { MDBContainer, MDBFooter } from "mdbreact";

const SpeechRecognitionInst =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognitionInst();

recognition.continous = false;
recognition.interimResults = true;
recognition.lang = "en-US";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      last: "",
      middle: "",
      first: "",

      listening: false,
      firstname: "",
      lastname: "",
      company: "",
      email: ""
    };
    this.onChangeLast = this.onChangeLast.bind(this);
    this.onChangeMiddle = this.onChangeMiddle.bind(this);
    this.onChangeFirst = this.onChangeFirst.bind(this);
    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeCompany = this.onChangeCompany.bind(this);

    this.toggleListenFirstname = this.toggleListenFirstname.bind(this);
    this.toggleListenLastname = this.toggleListenLastname.bind(this);
    this.toggleListenEmail = this.toggleListenEmail.bind(this);
    this.toggleListenCompany = this.toggleListenCompany.bind(this);
    this.toggleListenLast = this.toggleListenLast.bind(this);
    this.toggleListenMiddle = this.toggleListenMiddle.bind(this);
    this.toggleListenFirst = this.toggleListenFirst.bind(this);

    this.handleListenFirstname = this.handleListenFirstname.bind(this);
    this.handleListenLastname = this.handleListenLastname.bind(this);
    this.handleListenEmail = this.handleListenEmail.bind(this);
    this.handleListenCompany = this.handleListenCompany.bind(this);
    this.handleListenLast = this.handleListenLast.bind(this);
    this.handleListenMiddle = this.handleListenMiddle.bind(this);
    this.handleListenFirst = this.handleListenFirst.bind(this);
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  onChangeCompany(e) {
    this.setState({
      company: e.target.value
    });
  }
  onChangeFirstname(e) {
    this.setState({
      firstname: e.target.value
    });
  }
  onChangeLastname(e) {
    this.setState({
      lastname: e.target.value
    });
  }
  onChangeLast(e) {
    this.setState({
      last: e.target.value
    });
  }
  onChangeMiddle(e) {
    this.setState({
      middle: e.target.value
    });
  }
  onChangeFirst(e) {
    this.setState({
      first: e.target.value
    });
  }

  toggleListenFirst() {
    document.getElementById("micBtnFirst").style.opacity = 0.4;
    this.setState(
      {
        listening: true
      },
      this.handleListenFirst
    );
  }

  handleListenFirst() {
    if (this.state.listening) {
      recognition.start();
    } else {
      document.getElementById("micBtnFirst").style.opacity = 1;
      recognition.stop();
      recognition.onend = () => {};
    }
    recognition.onstart = () => {};
    let finalTranscript = "";
    recognition.onresult = event => {
      let interimTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + " ";
        else {
          interimTranscript += transcript;
          this.setState({
            first: interimTranscript
          });
        }
      }
      const transcriptArr = finalTranscript.split(" ");
      recognition.onend = () => {
        document.getElementById("micBtnFirst").style.opacity = 1;
        const finalText = transcriptArr.join(" ");
        this.setState({
          listening: false,
          first: finalText
        });
      };
    };
    recognition.onerror = event => {
      this.setState({
        listening: false
      });
      document.getElementById("micBtnFirst").style.opacity = 1;
    };
  }

  toggleListenMiddle() {
    document.getElementById("micBtnMiddle").style.opacity = 0.4;
    this.setState(
      {
        listening: true
      },
      this.handleListenMiddle
    );
  }

  handleListenMiddle() {
    if (this.state.listening) {
      recognition.start();
    } else {
      document.getElementById("micBtnMiddle").style.opacity = 1;
      recognition.stop();
      recognition.onend = () => {};
    }
    recognition.onstart = () => {};
    let finalTranscript = "";
    recognition.onresult = event => {
      let interimTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + " ";
        else {
          interimTranscript += transcript;
          this.setState({
            middle: interimTranscript
          });
        }
      }
      const transcriptArr = finalTranscript.split(" ");
      recognition.onend = () => {
        document.getElementById("micBtnMiddle").style.opacity = 1;
        const finalText = transcriptArr.join(" ");
        this.setState({
          listening: false,
          middle: finalText
        });
      };
    };
    recognition.onerror = event => {
      this.setState({
        listening: false
      });
      document.getElementById("micBtnMiddle").style.opacity = 1;
    };
  }

  toggleListenLast() {
    document.getElementById("micBtnLast").style.opacity = 0.4;
    this.setState(
      {
        listening: true
      },
      this.handleListenLast
    );
  }

  handleListenLast() {
    if (this.state.listening) {
      recognition.start();
    } else {
      document.getElementById("micBtnLast").style.opacity = 1;
      recognition.stop();
      recognition.onend = () => {};
    }
    recognition.onstart = () => {};
    let finalTranscript = "";
    recognition.onresult = event => {
      let interimTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + " ";
        else {
          interimTranscript += transcript;
          this.setState({
            last: interimTranscript
          });
        }
      }
      const transcriptArr = finalTranscript.split(" ");
      recognition.onend = () => {
        document.getElementById("micBtnLast").style.opacity = 1;
        const finalText = transcriptArr.join(" ");
        this.setState({
          listening: false,
          last: finalText
        });
      };
    };
    recognition.onerror = event => {
      this.setState({
        listening: false
      });
      document.getElementById("micBtnLast").style.opacity = 1;
    };
  }

  toggleListenFirstname() {
    document.getElementById("micBtnFirstname").style.opacity = 0.4;
    this.setState(
      {
        listening: true
      },
      this.handleListenFirstname
    );
  }

  handleListenFirstname() {
    if (this.state.listening) {
      recognition.start();
    } else {
      document.getElementById("micBtnFirstname").style.opacity = 1;
      recognition.stop();
      recognition.onend = () => {};
    }
    recognition.onstart = () => {};
    let finalTranscript = "";
    recognition.onresult = event => {
      let interimTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + " ";
        else {
          interimTranscript += transcript;
          this.setState({
            firstname: interimTranscript
          });
        }
      }
      const transcriptArr = finalTranscript.split(" ");
      recognition.onend = () => {
        document.getElementById("micBtnFirstname").style.opacity = 1;
        const finalText = transcriptArr.join(" ");
        this.setState({
          listening: false,
          firstname: finalText
        });
      };
    };
    recognition.onerror = event => {
      this.setState({
        listening: false
      });
      document.getElementById("micBtnFirstname").style.opacity = 1;
    };
  }

  toggleListenLastname() {
    document.getElementById("micBtnFirstname").style.opacity = 0.4;
    this.setState(
      {
        listening: true
      },
      this.handleListenLastname
    );
  }

  handleListenLastname() {
    if (this.state.listening) {
      recognition.start();
    } else {
      document.getElementById("micBtnLastname").style.opacity = 1;
      recognition.stop();
      recognition.onend = () => {};
    }
    recognition.onstart = () => {};
    let finalTranscript = "";
    recognition.onresult = event => {
      let interimTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + " ";
        else {
          interimTranscript += transcript;
          this.setState({
            lastname: interimTranscript
          });
        }
      }
      const transcriptArr = finalTranscript.split(" ");
      recognition.onend = () => {
        document.getElementById("micBtnLastname").style.opacity = 1;
        const finalText = transcriptArr.join(" ");
        this.setState({
          listening: false,
          lastname: finalText
        });
      };
    };
    recognition.onerror = event => {
      this.setState({
        listening: false
      });
      document.getElementById("micBtnLastname").style.opacity = 1;
    };
  }

  toggleListenEmail() {
    document.getElementById("micBtnEmail").style.opacity = 0.4;
    this.setState(
      {
        listening: true
      },
      this.handleListenEmail
    );
  }

  handleListenEmail() {
    if (this.state.listening) {
      recognition.start();
    } else {
      document.getElementById("micBtnEmail").style.opacity = 1;
      recognition.stop();
      recognition.onend = () => {};
    }
    recognition.onstart = () => {};
    let finalTranscript = "";
    recognition.onresult = event => {
      let interimTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + " ";
        else {
          interimTranscript += transcript;
          this.setState({
            email: interimTranscript
          });
        }
      }
      const transcriptArr = finalTranscript.split(" ");
      recognition.onend = () => {
        document.getElementById("micBtnEmail").style.opacity = 1;
        const finalText = transcriptArr.join(" ");
        this.setState({
          listening: false,
          email: finalText
        });
      };
    };
    recognition.onerror = event => {
      this.setState({
        listening: false
      });
      document.getElementById("micBtnEmail").style.opacity = 1;
    };
  }

  toggleListenCompany() {
    document.getElementById("micBtnCompany").style.opacity = 0.4;
    this.setState(
      {
        listening: true
      },
      this.handleListenCompany
    );
  }

  handleListenCompany() {
    if (this.state.listening) {
      recognition.start();
    } else {
      document.getElementById("micBtnCompany").style.opacity = 1;
      recognition.stop();
      recognition.onend = () => {};
    }
    recognition.onstart = () => {};
    let finalTranscript = "";
    recognition.onresult = event => {
      let interimTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + " ";
        else {
          interimTranscript += transcript;
          this.setState({
            company: interimTranscript
          });
        }
      }
      const transcriptArr = finalTranscript.split(" ");
      recognition.onend = () => {
        document.getElementById("micBtnCompany").style.opacity = 1;
        const finalText = transcriptArr.join(" ");
        this.setState({
          listening: false,
          company: finalText
        });
      };
    };
    recognition.onerror = event => {
      this.setState({
        listening: false
      });
      document.getElementById("micBtnCompany").style.opacity = 1;
    };
  }

  componentDidMount() {
    document.body.style.backgroundColor = "white";
  }

  render() {
    return (
      <div style={{ marginTop: 50 }}>
        <form>
          <Container>
            <div className="p-2 col-example text-left">
              <Row>
                <Col md={2}></Col>
                <Col md={8}>
                  <font style={{ fontSize: 17 }}>
                    Name{" "}
                    <span class="required" aria-hidden="true">
                      *
                    </span>{" "}
                  </font>
                  <br />
                  <input
                    class="field-element text"
                    style={style.field}
                    type="text"
                    value={this.state.firstname}
                    onChange={this.onChangeFirstname}
                    size="40"
                  />

                  <input
                    disabled={this.state.listening}
                    type="button"
                    style={style.micBtn}
                    id={"micBtnFirstname"}
                    onClick={() => {
                      this.toggleListenFirstname();
                    }}
                  />
                  <input
                    style={style.field}
                    type="text"
                    value={this.state.lastname}
                    onChange={this.onChangeLastname}
                    size="40"
                  />
                  <input
                    disabled={this.state.listening}
                    type="button"
                    style={style.micBtn}
                    id={"micBtnLastname"}
                    onClick={() => {
                      this.toggleListenLastname();
                    }}
                  />
                  <Row>
                    <Col md={4}>FirstName</Col>
                    <Col md={4} style={{ marginLeft: 90 }}>
                      LastName
                    </Col>
                  </Row>
                </Col>

                <Col md={2}></Col>
              </Row>
            </div>

            <br />
            <div className="p-2 col-example text-left">
              <Row>
                <Col md={2}></Col>
                <Col md={8}>
                  <font style={{ fontSize: 17, fontFamily: "Open Sans" }}>
                    Company{" "}
                    <span class="required" aria-hidden="true">
                      *
                    </span>
                  </font>
                  <br />

                  <input
                    style={style.field}
                    type="text"
                    value={this.state.company}
                    onChange={this.onChangeCompany}
                    size="97"
                  />

                  <input
                    disabled={this.state.listening}
                    type="button"
                    style={style.micBtn}
                    id={"micBtnCompany"}
                    onClick={() => {
                      this.toggleListenCompany();
                    }}
                  />
                </Col>
                <Col md={2}></Col>
              </Row>
            </div>
            <br />
            <div className="p-2 col-example text-left">
              <Row>
                <Col md={2}></Col>
                <Col md={8}>
                  <font style={{ fontSize: 17 }}>
                    Email Address{" "}
                    <span class="required" aria-hidden="true">
                      *
                    </span>
                  </font>
                  <br />

                  <input
                    style={style.field}
                    type="text"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    size="97"
                  />

                  <input
                    disabled={this.state.listening}
                    type="button"
                    style={style.micBtn}
                    id={"micBtnEmail"}
                    onClick={() => {
                      this.toggleListenEmail();
                    }}
                  />
                </Col>
                <Col md={2}></Col>
              </Row>
            </div>
            <br />
            <div className="p-2 col-example text-left">
              <Row>
                <Col md={2}></Col>
                <Col md={8}>
                  <font style={{ fontSize: 17 }}>Phone</font>
                  <br />

                  <input
                    style={style.field}
                    type="text"
                    value={this.state.first}
                    onChange={this.onChangeFirst}
                    size="5"
                  />

                  <input
                    disabled={this.state.listening}
                    type="button"
                    style={style.micBtn}
                    id={"micBtnFirst"}
                    onClick={() => {
                      this.toggleListenFirst();
                    }}
                  />
                  <input
                    style={style.field}
                    type="text"
                    value={this.state.middle}
                    onChange={this.onChangeMiddle}
                    size="5"
                  />

                  <input
                    disabled={this.state.listening}
                    type="button"
                    style={style.micBtn}
                    id={"micBtnMiddle"}
                    onClick={() => {
                      this.toggleListenMiddle();
                    }}
                  />
                  <input
                    style={style.field}
                    type="text"
                    value={this.state.last}
                    onChange={this.onChangeLast}
                    size="7"
                  />
                  <input
                    disabled={this.state.listening}
                    type="button"
                    style={style.micBtn}
                    id={"micBtnLast"}
                    onClick={() => {
                      this.toggleListenLast();
                    }}
                  />
                  <Row>
                    <Col md={2}>(###)</Col>
                    <Col md={2} style={{ marginLeft: 5 }}>
                      ###
                    </Col>
                    <Col md={2} style={{ marginLeft: 5 }}>
                      ####
                    </Col>
                  </Row>
                </Col>
                <Col md={2}></Col>
              </Row>
            </div>
            <br />
          </Container>
        </form>

        <div style={{ marginTop: 20 }}>
          <MDBFooter color="blue" className="font-small pt-4 mt-4">
            <div className="footer-copyright text-center py-3">
              <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright:{" "}
                <a style={{ color: "black" }} href="https://www.pulztec.com/">
                  {" "}
                  Pulz Technologies{" "}
                </a>
              </MDBContainer>
            </div>
          </MDBFooter>
        </div>
      </div>
    );
  }
}
