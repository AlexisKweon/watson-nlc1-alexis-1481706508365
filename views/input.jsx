import React from 'react';

export default React.createClass({
  propTypes: {
    data: React.PropTypes.object,
    onClassify: React.PropTypes.func.isRequired,
  },

  getDefaultProps() {
    return { text: '' };
  },

  getInitialState() {
    return { text: '' };
  },

  /**
   * When pressing the Ask button
   */
  onSubmit() {
    this.props.onClassify(this.state.text);
  },

  /**
   * On sample question click
   */
  onSampleQuestionClick(e) {
    this.setState({ text: e.target.text });
    this.props.onClassify(e.target.text);
  },

  /**
   * During changes to the text input
   */
  handleInputChange(e) {
    this.setState({ text: e.target.value });
  },

  /**
   * On Input text key press
   */
  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.onClassify(this.state.text);
    }
  },
  render() {
    return (
      <div>
        <h2 className="base--h2">사이버센터 관련 문의를 Watson에게 하세요!</h2>
        <p className="base--p" >Watson Natural Language Classifier 서비스가 보험 관련 질문을 자동으로 카테고리화합

니다. 
          본 데모에서, Watson은 보험관련 질문이 
          <code className="base--code">입금</code>,
          &nbsp;<code className="base--code">출금</code>
          &nbsp;<code className="base--code">계약변경</code>
          &nbsp;<code className="base--code">사고보험금</code>
          &nbsp;<code className="base--code">신계약</code>
          &nbsp;<code className="base--code">이용관련</code>
          등의 카테고리로 분류하여 결정하도록 훈련되어 있습니다. 
          산출물은 분류기준과 일치율로 구성되어 있습니다. 
        </p>
        <div className="question-input">
          <div className="question-input--input-container">
            <input
              type=""
              autoFocus
              value={this.state.text}
              onChange={this.handleInputChange}
              onKeyPress={this.handleKeyPress}
              id="question"
              placeholder="사이버센터 관련 질문을 입력하거나 아래의 샘플 질문을 클릭하세요"
              className="base--input question-input--input"
              required="true"
            />
          </div>
          <div className="question-input--button-container">
            <button
              disabled={this.state.text.trim().length === 0}
              onClick={this.onSubmit}
              className="base--button question-input--submit-button"
            >
              질문하기
            </button>
          </div>
        </div>
        <h3 className="base--h3">자주 묻는 질문</h3>

        <div className="sample-questions">
          <div className="sample-questions--left">
            <ul className="base--ul">
              <li className="base--li">
                <a
                  className="base--a"
                  onClick={this.onSampleQuestionClick}
                >
                  보안카드를 분실했습니다. 어떻게 해야 하나요? 
                </a>
              </li>
              <li className="base--li">
                <a
                  className="base--a"
                  onClick={this.onSampleQuestionClick}
                >
                  연금개시나이 변경이 가능한가요?
                </a>
              </li>
              <li className="base--li">
                <a
                  className="base--a"
                  onClick={this.onSampleQuestionClick}
                >
                  연금개시가 도래되었는데 어떻게 신청하면 되나요?
                </a>
              </li>
              <li className="base--li">
                <a
                  className="base--a"
                  onClick={this.onSampleQuestionClick}
                >
                  청약철회가 제한되는 경우도 있나요?
                </a>
              </li>
              <li className="base--li">
                <a
                  className="base--a"
                  onClick={this.onSampleQuestionClick}
                >
                  보안카드를 잃어버렸는데, 재발급 가능한가요?
                </a>
              </li>
              <li className="base--li">
                <a
                  className="base--a"
                  onClick={this.onSampleQuestionClick}
                >
                  연금을 받을 수 있는 시점 변경이 가능한가요?
                </a>
              </li>
            </ul>
          </div>
          <div className="sample-questions--right">
            <p className="base--p">분류기는 훈련을 받지 않은 용어로 스코어링을 하는 경우가 많습니다. 
              트레이닝 질문 데이터에서는 "잃어버리다" 또는"시점" 이라는 단어는&nbsp;
              <a
                className="base--a"
                href="https://github.com/watson-developer-cloud/natural-language-classifier-

nodejs/blob/master/training/Hanwha_FAQ_training_1.csv"
                target="_blank"
                rel="noopener noreferrer"
              >training data
              </a>의 일부가 아니지만 분류자는 올바르게 그에 대한 질문을 처리합니다.
            </p>
          </div>   
        </div>
      </div>
    );
  },
});
