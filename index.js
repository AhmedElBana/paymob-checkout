"use strict";

require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
var _Button = _interopRequireDefault(require("./components/Button"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// import Badge from './components/Badge';

class Paymob extends _react.Component {
  constructor(props) {
    super(props);
    this.state = {
      waiting: true,
      public_key: "",
      order: {},
      requestComplete: false,
      completeMessage: {
        'head': "",
        'body': ""
      }
    };
  }
  render() {
    console.log(this.props);
    const root = _client.default.createRoot(document.getElementById(this.props.container));
    root.render( /*#__PURE__*/_react.default.createElement(_react.default.StrictMode, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h4", null, "test from sdk ", this.props.type), /*#__PURE__*/_react.default.createElement(_Button.default, {
      label: "test",
      kind: "primary"
    }))));
  }
}
var _default = Paymob; // class Paymob extends React.Component {
//     render() {
//         const root = ReactDOM.createRoot(document.getElementById('elements'));
//         root.render(
//           <React.StrictMode>
//             <div>
//                 <h4>test from sdk</h4>
//                 {/* <Button label="test" kind="primary"/> */}
//             </div>
//           </React.StrictMode>
//         );
//     }
// }
// export default Paymob;
exports.default = _default;