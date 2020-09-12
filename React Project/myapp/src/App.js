import React from "react";
import "./App.css";

class ManipulationOutput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.showOriginalString = this.showOriginalString.bind(this);
    this.showOriginalString = this.showOriginalString.bind(this);
  }

  showOriginalString() {
    this.props.handleShow(this.props.originalString);
  }

  showReversedString() {
    this.props.handleShow(this.props.reversedString);
  }

  render() {
    return (
      <div>
        <table align="center" width="485">
          <tr>
            <td colSpan="4">
              <ColoredLine color="blue" />
            </td>
          </tr>
          <tr>
            {/*             <td style={{borderRight: 1, borderRightColor: "black"}}  >
              <label><b>Output</b></label>
            </td> */}
            <td colSpan="4">
              <label cols="50">
                <b>Original String:-</b> &nbsp; {this.props.originalString}
              </label>{" "}
              <br />
              {/* <button onClick={this.showOriginalString.bind(this)}>Show Original String</button> <br/> <br/> */}
              <label>
                <b>Reversed String:-</b> &nbsp; {this.props.reversedString}
              </label>{" "}
              <br />
              {/*<button onClick={this.showReversedString.bind(this)}>Show Reversed String</button> <br/> <br/> */}
              <label>
                <b>words Skipped:-</b> &nbsp; {this.props.wordsSkipped}
              </label>{" "}
              <br />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 5,
      marginRight: 0,
      marginLeft: 0,
    }}
  />
);

class StringManipulationForm extends React.Component {
  constructor(props) {
    super(props);
    this.reverseParagraph = this.reverseParagraph.bind(this);
  }
  reverseParagraph(e) {
    e.preventDefault();

    var i = 0;
    var j = 0;
    var reversedString = "";
    var originalString = this.refs.originalString.value;
    var noOfWordsToSkip = parseInt(this.refs.noOfWordsToSkip.value);

    if (
      originalString == undefined ||
      originalString == null ||
      originalString.trim().length <= 0
    ) {
      alert("Please Enter Valid String.");
      return;
    }
    
    if (isNaN(noOfWordsToSkip)) {
      alert("Words to be skipped value must be a valid number.");
      this.refs.noOfWordsToSkip.value = "";
      return;
    }

    if (noOfWordsToSkip < 0) {
      alert(
        "Words to be skipped value must be greater than or equals to zero."
      );
      this.refs.noOfWordsToSkip.value = "";
      return;
    }

    const lines = originalString.split(".");
    if (null != lines && lines.length > 0) {
      reversedString = "";
      for (i = 0; i <= lines.length - 1; i++) {
        if (lines[i] != null && lines[i].trim().length > 0) {
          const words = lines[i].trim().split(" ");
          if (null != words && words.length > noOfWordsToSkip) {
            for (j = words.length - (noOfWordsToSkip + 1); j >= 0; j--) {
              reversedString += " " + words[j];
            }

            for (
              j = words.length - noOfWordsToSkip;
              j <= words.length - 1;
              j++
            ) {
              reversedString += " " + words[j];
            }
            reversedString += ".";
          } else {
            reversedString += lines[i] + ". ";
          }
        }
      }
      var manipulationOutput = {
        originalString: this.refs.originalString.value,
        reversedString: reversedString,
        wordsSkipped: noOfWordsToSkip,
      };

      this.props.handleCreate(manipulationOutput);

      this.refs.originalString.value = "";
      this.refs.noOfWordsToSkip.value = "";
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.reverseParagraph}>
          <table align="center">
            <tr>
              <td colSpan="4">
                <label> String Manipulation </label>
              </td>
            </tr>
            <tr>
              <td colSpan="4">
                <ColoredLine color="blue" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Input String &nbsp;</label>
              </td>
              <td colSpan="3">
                <textarea cols="50" ref="originalString"></textarea>
              </td>
            </tr>
            <tr>
              <td></td>
              <td colSpan="2" align="right">
                Skip Last &nbsp;
                <input
                  type="text"
                  placeholder=""
                  ref="noOfWordsToSkip"
                  size="1"
                />
              </td>
              <td> words in a sentence</td>
            </tr>
            <tr>
              <td colSpan="6" align="center">
                <button style={{ width: 70 }}>run</button>
              </td>
            </tr>
          </table>
        </form>
      </div>
    );
  }
}

class ParagraphList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: 0, paragraphList: [] };
  }

  showManipulationOutput(stringValue) {
    alert("Full String: " + stringValue);
  }

  createManipulationOutput(manipulationOutput) {
    const paragraphListLength = this.state.paragraphList.length;

    if (paragraphListLength == 5) {
      this.setState({
        paragraphList: this.state.paragraphList.splice(0, 1),
        paragraphList: this.state.paragraphList.concat(manipulationOutput),
      });
    } else {
      this.setState({
        paragraphList: this.state.paragraphList.concat(manipulationOutput),
      });
    }
    console.log(this.state.paragraphList);
  }

  render() {
    var component = this;
    console.log(component.state);
    var manipulationOutputs = component.state.paragraphList.map(function (
      manipulationOutput
    ) {
      if (manipulationOutput !== undefined) {
        return (
          <ManipulationOutput
            originalString={manipulationOutput.originalString}
            reversedString={manipulationOutput.reversedString}
            wordsSkipped={manipulationOutput.wordsSkipped}
            handleShow={component.showManipulationOutput}
          />
        );
      } else {
        return <div></div>;
      }
    });
    return (
      <div>
        <StringManipulationForm
          handleCreate={this.createManipulationOutput.bind(this)}
        />
        {manipulationOutputs}
      </div>
    );
  }
}
export default ParagraphList;
