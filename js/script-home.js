class Gsap extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "main" }, /*#__PURE__*/
      React.createElement("div", { className: "circle" }, /*#__PURE__*/
      React.createElement("div", { className: "ball" }, /*#__PURE__*/
      React.createElement("div", { className: "brilhinho" }), /*#__PURE__*/
      React.createElement("span", null))), /*#__PURE__*/


      React.createElement("div", { className: "shadow" })));



  }}


ReactDOM.render( /*#__PURE__*/
React.createElement(Gsap, null),
document.getElementById('app'));



/* 
This week we're looking at looops

We've loaded all the GSAP plugins into this pen - so go wild!

Here's a little loop to start you off!
*/

gsap.to('.circle', {
  yPercent: -180,
  backgroundColor: "hsl(43, 100%, 53%)",
  filter: "brightness(1.1)",
  ease: 'sine.inOut',
  duration: 2,
  stagger: {
    amount: 1,
    repeat: -1,
    yoyo: true } }).

progress(0.5);

gsap.to('.shadow', {
  height: -80,
  width: -80,
  ease: 'sine.inOut',
  duration: 2,
  x: 85,
  stagger: {
    amount: 1,
    repeat: -1,
    yoyo: true } }).

progress(.5);