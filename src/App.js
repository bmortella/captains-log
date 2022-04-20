import "./css/lcars-classic.min.css";
import "./css/style.css";

import { Route, Routes, Link } from "react-router-dom";

import HomePage from "./pages/HomePage";
import NewLog from "./pages/NewLog";
import UpdateLog from "./pages/UpdateLog";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  function handleBlur(event) {
    event.target.blur();
  }

  return (
    <div className="App">
      <div className="wrap">
        <div className="scroll-top">
          <a id="scroll-top" href="">
            <span className="hop">screen</span> top
          </a>
        </div>
        <div className="left-frame-top">
          <div className="panel-1">
            <Link to="/" onClick={handleBlur}>
              HOME
            </Link>
          </div>
          <div className="panel-2">
            02<span className="hop">-262000</span>
          </div>
        </div>
        <div className="right-frame-top">
          <div className="banner">USS IRONHACK • CAPTAIN'S LOG</div>
          <div className="data-cascade-button-group">
            <div className="cascade-wrapper">
              <div className="data-cascade">
                <div className="row-1">
                  <div className="dc1">101</div>
                  <div className="dc2">7109</div>
                  <div className="dc3">1966</div>
                  <div className="dc4">1222</div>
                  <div className="dc5">2020</div>
                  <div className="dc6">1444</div>
                  <div className="dc7">102</div>
                  <div className="dc8">1103</div>
                  <div className="dc9">1935</div>
                  <div className="dc10">1940</div>
                  <div className="dc11">708</div>
                  <div className="dc12">M113</div>
                  <div className="dc13">1956</div>
                  <div className="dc14">1209</div>
                </div>
                <div className="row-2">
                  <div className="dc1">102</div>
                  <div className="dc2">8102</div>
                  <div className="dc3">1987</div>
                  <div className="dc4">044</div>
                  <div className="dc5">0051</div>
                  <div className="dc6">607</div>
                  <div className="dc7">1976</div>
                  <div className="dc8">1031</div>
                  <div className="dc9">1984</div>
                  <div className="dc10">1954</div>
                  <div className="dc11">1103</div>
                  <div className="dc12">415</div>
                  <div className="dc13">1045</div>
                  <div className="dc14">1864</div>
                </div>
                <div className="row-3">
                  <div className="dc1">103</div>
                  <div className="dc2">714</div>
                  <div className="dc3">1993</div>
                  <div className="dc4">0222</div>
                  <div className="dc5">052</div>
                  <div className="dc6">1968</div>
                  <div className="dc7">2450</div>
                  <div className="dc8">746</div>
                  <div className="dc9">56</div>
                  <div className="dc10">47</div>
                  <div className="dc11">716</div>
                  <div className="dc12">8719</div>
                  <div className="dc13">417</div>
                  <div className="dc14">602</div>
                </div>
                <div className="row-4">
                  <div className="dc1">104</div>
                  <div className="dc2">6104</div>
                  <div className="dc3">1995</div>
                  <div className="dc4">322</div>
                  <div className="dc5">90</div>
                  <div className="dc6">1931</div>
                  <div className="dc7">1701</div>
                  <div className="dc8">51</div>
                  <div className="dc9">29</div>
                  <div className="dc10">218</div>
                  <div className="dc11">908</div>
                  <div className="dc12">2114</div>
                  <div className="dc13">85</div>
                  <div className="dc14">3504</div>
                </div>
                <div className="row-5">
                  <div className="dc1">105</div>
                  <div className="dc2">08</div>
                  <div className="dc3">2001</div>
                  <div className="dc4">713</div>
                  <div className="dc5">079</div>
                  <div className="dc6">1940</div>
                  <div className="dc7">LV</div>
                  <div className="dc8">426</div>
                  <div className="dc9">105</div>
                  <div className="dc10">10</div>
                  <div className="dc11">1206</div>
                  <div className="dc12">1979</div>
                  <div className="dc13">402</div>
                  <div className="dc14">795</div>
                </div>
                <div className="row-6">
                  <div className="dc1">106</div>
                  <div className="dc2">31</div>
                  <div className="dc3">2017</div>
                  <div className="dc4">429</div>
                  <div className="dc5">65</div>
                  <div className="dc6">871</div>
                  <div className="dc7">1031</div>
                  <div className="dc8">541</div>
                  <div className="dc9">656</div>
                  <div className="dc10">764</div>
                  <div className="dc11">88</div>
                  <div className="dc12">001</div>
                  <div className="dc13">27</div>
                  <div className="dc14">05</div>
                </div>
              </div>
            </div>
            <div className="button-col">
              <div className="button" id="top-right">
                <a
                  href="https://github.com/bmortella/captains-log"
                  className="blink"
                  onClick={handleBlur}
                >
                  GitHub
                </a>
              </div>
              <div className="button" id="bottom-right">
                <Link to="/about" onClick={handleBlur}>
                  About
                </Link>
              </div>
            </div>
          </div>
          <div className="top-corner-bg">
            <div className="top-corner"></div>
          </div>
          <div className="bar-panel">
            <div className="bar-1"></div>
            <div className="bar-2"></div>
            <div className="bar-3"></div>
            <div className="bar-4"></div>
            <div className="bar-5"></div>
          </div>
        </div>
      </div>
      <div className="wrap" id="gap">
        <div className="left-frame">
          <div>
            <div className="panel-3">
              03<span className="hop">-111968</span>
            </div>
            <div className="sidebar-buttons">
              <Link to="/newLog" className="bluey" onClick={handleBlur}>
                New Log
              </Link>
            </div>
            <div className="panel-4">
              04<span className="hop">-041969</span>
            </div>
            <div className="panel-5">
              05<span className="hop">-1701D</span>
            </div>
            <div className="panel-6">
              06<span className="hop">-071984</span>
            </div>
            <div className="panel-7">
              07<span className="hop">-081940</span>
            </div>
            <div className="panel-8">
              08<span className="hop">-47148</span>
            </div>
            <div className="panel-9">
              09<span className="hop">-081966</span>
            </div>
          </div>
          <div>
            <div className="panel-10">
              10<span className="hop">-31</span>
            </div>
          </div>
        </div>
        <div className="right-frame">
          <div className="bar-panel">
            <div className="bar-6"></div>
            <div className="bar-7"></div>
            <div className="bar-8"></div>
            <div className="bar-9"></div>
            <div className="bar-10"></div>
          </div>
          <div className="corner-bg">
            <div className="corner"></div>
          </div>
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/newLog" element={<NewLog />} />
              <Route path="/updateLog/:id" element={<UpdateLog />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <footer>
              <p>
                LCARS Inspired Website Template by www.TheLCARS.com, with
                modifications.
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
