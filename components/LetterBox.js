const LetterBox = props => (
  <div id="letter-box">
    {props.children}
    <style global jsx>{`
      #letter-box {
        margin: auto;
        width: 65%;
        border: 10px solid #ffff !important;
        padding-top: 3%;
        padding-inline-end: 3%;
        padding-inline-start: 3%;
        padding-bottom: 3%;
      }
    `}</style>
  </div>
);

export default LetterBox;