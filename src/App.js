//import "./App.css";

//import "bootstrap/dist/css/bootstrap.min.css";
import "./lcars-classic.min.css";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import NewLog from "./pages/NewLog";
import UpdateLog from "./pages/UpdateLog";

function App() {
  return (
    <div className="App">
      <div class="wrap">
        <div class="scroll-top">
          <a id="scroll-top" href="">
            <span class="hop">screen</span> top
          </a>
        </div>
        <div class="left-frame-top">
          <div class="panel-1">
            <a href="">LCARS</a>
          </div>
          <div class="panel-2">
            02<span class="hop">-262000</span>
          </div>
        </div>
        <div class="right-frame-top">
          <div class="banner">USS IRONHACK • CAPTAIN'S LOG</div>
          <div class="data-cascade-button-group">
            <div class="cascade-wrapper">
              <div class="data-cascade">
                <div class="row-1">
                  <div class="dc1">101</div>
                  <div class="dc2">7109</div>
                  <div class="dc3">1966</div>
                  <div class="dc4">1222</div>
                  <div class="dc5">2020</div>
                  <div class="dc6">1444</div>
                  <div class="dc7">102</div>
                  <div class="dc8">1103</div>
                  <div class="dc9">1935</div>
                  <div class="dc10">1940</div>
                  <div class="dc11">708</div>
                  <div class="dc12">M113</div>
                  <div class="dc13">1956</div>
                  <div class="dc14">1209</div>
                </div>
                <div class="row-2">
                  <div class="dc1">102</div>
                  <div class="dc2">8102</div>
                  <div class="dc3">1987</div>
                  <div class="dc4">044</div>
                  <div class="dc5">0051</div>
                  <div class="dc6">607</div>
                  <div class="dc7">1976</div>
                  <div class="dc8">1031</div>
                  <div class="dc9">1984</div>
                  <div class="dc10">1954</div>
                  <div class="dc11">1103</div>
                  <div class="dc12">415</div>
                  <div class="dc13">1045</div>
                  <div class="dc14">1864</div>
                </div>
                <div class="row-3">
                  <div class="dc1">103</div>
                  <div class="dc2">714</div>
                  <div class="dc3">1993</div>
                  <div class="dc4">0222</div>
                  <div class="dc5">052</div>
                  <div class="dc6">1968</div>
                  <div class="dc7">2450</div>
                  <div class="dc8">746</div>
                  <div class="dc9">56</div>
                  <div class="dc10">47</div>
                  <div class="dc11">716</div>
                  <div class="dc12">8719</div>
                  <div class="dc13">417</div>
                  <div class="dc14">602</div>
                </div>
                <div class="row-4">
                  <div class="dc1">104</div>
                  <div class="dc2">6104</div>
                  <div class="dc3">1995</div>
                  <div class="dc4">322</div>
                  <div class="dc5">90</div>
                  <div class="dc6">1931</div>
                  <div class="dc7">1701</div>
                  <div class="dc8">51</div>
                  <div class="dc9">29</div>
                  <div class="dc10">218</div>
                  <div class="dc11">908</div>
                  <div class="dc12">2114</div>
                  <div class="dc13">85</div>
                  <div class="dc14">3504</div>
                </div>
                <div class="row-5">
                  <div class="dc1">105</div>
                  <div class="dc2">08</div>
                  <div class="dc3">2001</div>
                  <div class="dc4">713</div>
                  <div class="dc5">079</div>
                  <div class="dc6">1940</div>
                  <div class="dc7">LV</div>
                  <div class="dc8">426</div>
                  <div class="dc9">105</div>
                  <div class="dc10">10</div>
                  <div class="dc11">1206</div>
                  <div class="dc12">1979</div>
                  <div class="dc13">402</div>
                  <div class="dc14">795</div>
                </div>
                <div class="row-6">
                  <div class="dc1">106</div>
                  <div class="dc2">31</div>
                  <div class="dc3">2017</div>
                  <div class="dc4">429</div>
                  <div class="dc5">65</div>
                  <div class="dc6">871</div>
                  <div class="dc7">1031</div>
                  <div class="dc8">541</div>
                  <div class="dc9">656</div>
                  <div class="dc10">764</div>
                  <div class="dc11">88</div>
                  <div class="dc12">001</div>
                  <div class="dc13">27</div>
                  <div class="dc14">05</div>
                </div>
              </div>
            </div>
            <div class="button-col">
              <div class="button" id="top-right">
                <a href="">GitHub</a>
              </div>
              <div class="button" id="bottom-right">
                <a href="">About</a>
              </div>
            </div>
          </div>
          <div class="top-corner-bg">
            <div class="top-corner"></div>
          </div>
          <div class="bar-panel">
            <div class="bar-1"></div>
            <div class="bar-2"></div>
            <div class="bar-3"></div>
            <div class="bar-4"></div>
            <div class="bar-5"></div>
          </div>
        </div>
      </div>
      <div class="wrap" id="gap">
        <div class="left-frame">
          <div>
            <div class="panel-3">
              03<span class="hop">-111968</span>
            </div>
            <div class="sidebar-buttons">
              <a href="/newLog" class="peach">
                New Log
              </a>
            </div>
            <div class="panel-4">
              04<span class="hop">-041969</span>
            </div>
            <div class="panel-5">
              05<span class="hop">-1701D</span>
            </div>
            <div class="panel-6">
              06<span class="hop">-071984</span>
            </div>
            <div class="panel-7">
              07<span class="hop">-081940</span>
            </div>
            <div class="panel-8">
              08<span class="hop">-47148</span>
            </div>
            <div class="panel-9">
              09<span class="hop">-081966</span>
            </div>
          </div>
          <div>
            <div class="panel-10">
              10<span class="hop">-31</span>
            </div>
          </div>
        </div>
        <div class="right-frame">
          <div class="bar-panel">
            <div class="bar-6"></div>
            <div class="bar-7"></div>
            <div class="bar-8"></div>
            <div class="bar-9"></div>
            <div class="bar-10"></div>
          </div>
          <div class="corner-bg">
            <div class="corner"></div>
          </div>
          <div class="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/newLog" element={<NewLog />} />
              <Route path="/updateLog/:id" element={<UpdateLog />} />
            </Routes>
            <footer>
              <div class="footer-inside">
                <div class="footer-text">
                  <p>
                    LCARS Inspired Website Template by www.TheLCARS.com, with
                    modifications.
                  </p>
                </div>
              </div>
              <div class="footer-panel">
                <span class="hop">22</span>47
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
