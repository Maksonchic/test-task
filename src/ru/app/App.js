import './App.css';
import CodeMirror from "@uiw/react-codemirror";
import React from "react";
import postToServer from "./mock-server";

import { sql } from "@codemirror/lang-sql";
import { javascript } from "@codemirror/lang-javascript";

function App() {

  const availableLangs = {
    SQL: sql(),
    JavaScript: javascript()
  };

  let [postResult, changePostResult] = React.useState();
  let [langStr, changeLangStr] = React.useState(Object.keys(availableLangs)[0]);
  let [code, changeCode] = React.useState("SELECT * FROM DUAL");

  const postCode = () => {
    changePostResult('Pending...');
    postToServer(langStr, code)
      .then(changePostResult)
      .catch(changePostResult);
  }

  const changeLangEvent = (e) => {
    changeLangStr(e.target.value);
    // changeLang(availableLangs[langStr]);
  }

  return (
    <div className="App">
      <h4>Задача: реализовать упрощённый интерфейс редактора кода (аналог <a href='https://leetcode.com'>leetcode.com</a>), где пользователь может писать код на одном из двух заданных языков (например, Go и Python), отправлять его «на сервер» (имитация сервера) для выполнения и получать результаты</h4>
      <CodeMirror value={code} onChange={changeCode} extensions={[availableLangs[langStr]]} />
      <select onChange={changeLangEvent}>
        {Object.keys(availableLangs).map(l => <option value={l}>{l}</option>)}
      </select>
      <button onClick={postCode}>Run</button>
      <hr />
      <div>{postResult}</div>
    </div>
  );
}

export default App;
