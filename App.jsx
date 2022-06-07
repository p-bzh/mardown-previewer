class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input:
        "# H1" +
        "\n" +
        "## H2" +
        "\n" +
        "`printf('goodbye world!')`" +
        "\n" +
        "```" +
        "\n" +
        "print('goodbye world!')" +
        "\n" +
        "```" +
        "\n" +
        "[link](https://www.google.com)" +
        "\n" +
        "1. First item 2. Second item 3. Third item" +
        "\n" +
        "> blockquote" +
        "\n" +
        "![react logo](https://logos-download.com/9747-react-logo-download.html)  " +
        "\n" +
        "**bold text**"
    };
    this.handleChange = this.handleChange.bind(this);
    this.parseMardown = this.parseMarkdown.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  parseMarkdown() {
    const markdown = marked.parse(this.state.input, { breaks: true });
    console.log({ markdown });
    return { __html: markdown };
  }
  render() {
    return (
      <div>
        <textarea onChange={this.handleChange} id="editor" col="30" row="15">
          {this.state.input}
        </textarea>
        <div id="preview" dangerouslySetInnerHTML={this.parseMardown()}></div>
      </div>
    );
  }
}

ReactDOM.render(<Editor />, document.getElementById("app"));
